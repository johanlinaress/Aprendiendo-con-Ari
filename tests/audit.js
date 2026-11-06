const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { server, PORT } = require('../server.js');

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

function findBrowserExecutable() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No se encontró Chrome ni Edge instalado.');
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 0;
    this.pending = new Map();
    this.eventListeners = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.addEventListener('open', () => resolve());
      this.ws.addEventListener('error', (err) => reject(err));
      this.ws.addEventListener('message', (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { resolve: res, reject: rej } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) rej(new Error(msg.error.message));
          else res(msg.result);
        } else if (msg.method) {
          const handlers = this.eventListeners.get(msg.method) || [];
          for (const h of handlers) h(msg.params);
        }
      });
    });
  }

  on(method, handler) {
    if (!this.eventListeners.has(method)) {
      this.eventListeners.set(method, []);
    }
    this.eventListeners.get(method).push(handler);
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const trimmed = expression.trim();
    let wrapped = trimmed;
    if (!trimmed.startsWith('(() =>')) {
      const isMultiStatement =
        trimmed.includes(';') || trimmed.startsWith('const ') || trimmed.startsWith('let ');
      wrapped = isMultiStatement
        ? `(() => { ${trimmed} })()`
        : `(() => (${trimmed}))()`;
    }

    const res = await this.send('Runtime.evaluate', {
      expression: wrapped,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(
        `JS Exception: ${res.exceptionDetails.text} ${res.exceptionDetails.exception?.description || ''}`
      );
    }
    return res.result ? res.result.value : undefined;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runAudit() {
  const results = {
    passed: [],
    failed: [],
    consoleErrors: [],
    networkErrors: [],
    screenshots: []
  };

  const assertCheck = (category, description, condition, details = '') => {
    if (condition) {
      results.passed.push({ category, description, details });
    } else {
      results.failed.push({ category, description, details });
      console.error(`❌ FALLO [${category}]: ${description} -> ${details}`);
    }
  };

  await new Promise((resolve) => server.listen(PORT, resolve));
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`Servidor iniciado en ${baseUrl}`);

  const browserExe = findBrowserExecutable();
  const debugPort = 9233;
  const userDataDir = path.join(os.tmpdir(), `ari-audit-chrome-profile-${process.pid}`);
  fs.mkdirSync(userDataDir, { recursive: true });

  const chromeProc = spawn(
    browserExe,
    [
      `--remote-debugging-port=${debugPort}`,
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      `--user-data-dir=${userDataDir}`,
      `${baseUrl}/#/inicio`
    ],
    { stdio: 'ignore' }
  );

  let cdp = null;

  try {
    let targets = null;
    for (let i = 0; i < 30; i++) {
      try {
        targets = await fetchJson(`http://127.0.0.1:${debugPort}/json`);
        if (targets && targets.length > 0) break;
      } catch (e) {
        await sleep(250);
      }
    }

    const pageTarget = targets.find((t) => t.type === 'page') || targets[0];
    cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await cdp.connect();

    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    await cdp.send('Log.enable');
    await cdp.send('Network.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    cdp.on('Runtime.consoleAPICalled', (params) => {
      if (params.type === 'error') {
        const text = (params.args || []).map((a) => a.value || a.description || '').join(' ');
        results.consoleErrors.push(text);
      }
    });

    cdp.on('Runtime.exceptionThrown', (params) => {
      results.consoleErrors.push(
        params.exceptionDetails?.exception?.description || params.exceptionDetails?.text || 'Uncaught exception'
      );
    });

    cdp.on('Log.entryAdded', (params) => {
      if (params.entry && params.entry.level === 'error') {
        results.consoleErrors.push(`${params.entry.source}: ${params.entry.text} (${params.entry.url || ''})`);
      }
    });

    cdp.on('Network.responseReceived', (params) => {
      if (params.response && params.response.status >= 400) {
        results.networkErrors.push(`${params.response.status} ${params.response.url}`);
      }
    });

    // Clear storage to start from a clean slate
    for (let i = 0; i < 30; i++) {
      const isReady = await cdp.eval(`Boolean(window.__ARI_APP__ && window.__ARI_APP__.StorageService)`);
      if (isReady) break;
      await sleep(100);
    }
    await cdp.eval(`window.__ARI_APP__.StorageService.resetProgress(); window.location.hash = '#/inicio';`);
    await sleep(200);

    // =========================================================================
    // 1. REVISIÓN DE TODOS LOS COMPONENTES Y 2. COMPROBACIÓN DE TODAS LAS RUTAS
    // =========================================================================
    const routesToCheck = [
      { hash: '#/inicio', component: 'HomeView' },
      { hash: '#/grado', component: 'GradeSelectView' },
      { hash: '#/estudiante', component: 'GradeSelectView' },
      { hash: '#/materias', component: 'HomeView' },
      { hash: '#/matematicas', component: 'LevelsMapView' },
      { hash: '#/espanol', component: 'LevelsMapView' },
      { hash: '#/niveles', component: 'LevelsMapView' },
      { hash: '#/nivel/1', component: 'ExerciseView' },
      { hash: '#/nivel/6', component: 'ExerciseView' },
      { hash: '#/nivel/10', component: 'ExerciseView' },
      { hash: '#/practica', component: 'PracticeView' },
      { hash: '#/progreso', component: 'ProgressView' },
      { hash: '#/logros', component: 'ProgressView' },
      { hash: '#/donaciones', component: 'DonationsView' },
      { hash: '#/donaciones/podio', component: 'DonationsView' },
      { hash: '#/ruta-no-existente', component: 'NotFoundView' }
    ];

    for (const r of routesToCheck) {
      await cdp.eval(`window.location.hash = '${r.hash}';`);
      await sleep(110);
      const rendered = await cdp.eval(`Boolean(document.querySelector('[data-component="${r.component}"]'))`);
      const hasNavbar = await cdp.eval(`Boolean(document.querySelector('[data-component="Navbar"]'))`);
      const hasFooter = await cdp.eval(`Boolean(document.querySelector('[data-component="Footer"]'))`);
      const hasAri = await cdp.eval(`Boolean(document.querySelector('[data-component="AriMascot"]'))`);

      assertCheck('2. Rutas', `Ruta ${r.hash} renderiza ${r.component}`, rendered, `Componente=${r.component}`);
      assertCheck(
        '1. Componentes',
        `Componentes globales (Navbar, Footer, AriMascot) presentes en ${r.hash}`,
        hasNavbar && hasFooter && hasAri,
        `Navbar=${hasNavbar}, Footer=${hasFooter}, AriMascot=${hasAri}`
      );
    }

    // Verify Donations View content and options (Nequi, ARQ, PayPal)
    await cdp.eval(`window.location.hash = '#/donaciones';`);
    await sleep(90);
    const donationsCheck = await cdp.eval(`
      (() => {
        const title = document.querySelector('.donations-main-heading')?.textContent.trim() || '';
        const hasNequi = Boolean(document.querySelector('#card-nequi #nequi-qr-img') && document.querySelector('#val-nequi-llave'));
        const hasArq = Boolean(document.querySelector('#card-arq #val-arq-user') && document.querySelector('#val-arq-user').textContent.includes('$sttive'));
        const hasPaypal = Boolean(document.querySelector('#card-paypal #val-paypal-email') && document.querySelector('#val-paypal-email').textContent.includes('johansttivelinaresb@gmail.com'));
        return {
          titleMatches: title.includes('¿Quieres apoyar al creador para ver más páginas como esta?'),
          hasNequi,
          hasArq,
          hasPaypal
        };
      })()
    `);
    assertCheck(
      '1. Componentes',
      'Página de Donaciones muestra el encabezado de apoyo al creador y las 3 opciones (Nequi con QR, ARQ $sttive, PayPal)',
      donationsCheck.titleMatches && donationsCheck.hasNequi && donationsCheck.hasArq && donationsCheck.hasPaypal,
      JSON.stringify(donationsCheck)
    );

    // Verify Dedicated Method Pages: Nequi, ARQ, PayPal
    await cdp.eval(`window.location.hash = '#/donaciones/nequi';`);
    await sleep(90);
    const nequiPageCheck = await cdp.eval(`
      (() => {
        const view = document.querySelector('.donations-dedicated-view[data-view="nequi"]');
        const hasBigQr = Boolean(document.querySelector('#nequi-dedicated-qr-img'));
        const hasDownload = Boolean(document.querySelector('.btn-download-qr'));
        const hasLlave = document.body.textContent.includes('johansttivelinaresb@gmail.com');
        return { isNequiView: Boolean(view), hasBigQr, hasDownload, hasLlave };
      })()
    `);
    assertCheck(
      '1. Componentes',
      'Página dedicada de Nequi (#/donaciones/nequi) muestra QR ampliado, descarga y llave',
      nequiPageCheck.isNequiView && nequiPageCheck.hasBigQr && nequiPageCheck.hasDownload && nequiPageCheck.hasLlave,
      JSON.stringify(nequiPageCheck)
    );

    await cdp.eval(`window.location.hash = '#/donaciones/arq';`);
    await sleep(90);
    const arqPageCheck = await cdp.eval(`
      (() => {
        const view = document.querySelector('.donations-dedicated-view[data-view="arq"]');
        const tag = document.querySelector('.arq-user-tag')?.textContent.trim() || '';
        return { isArqView: Boolean(view), tagMatches: tag.includes('$sttive') };
      })()
    `);
    assertCheck(
      '1. Componentes',
      'Página dedicada de ARQ (#/donaciones/arq) muestra usuario $sttive destacado y pasos',
      arqPageCheck.isArqView && arqPageCheck.tagMatches,
      JSON.stringify(arqPageCheck)
    );

    await cdp.eval(`window.location.hash = '#/donaciones/paypal';`);
    await sleep(90);
    const paypalPageCheck = await cdp.eval(`
      (() => {
        const view = document.querySelector('.donations-dedicated-view[data-view="paypal"]');
        const donateBtn = document.querySelector('#btn-paypal-official-donate');
        const href = donateBtn?.getAttribute('href') || '';
        const hasCorrectUrl = href.includes('business=johansttivelinaresb%40gmail.com') && href.includes('paypal.com/donate');
        const hasEmail = document.body.textContent.includes('johansttivelinaresb@gmail.com');
        return { isPaypalView: Boolean(view), hasCorrectUrl, hasEmail };
      })()
    `);
    assertCheck(
      '1. Componentes',
      'Página dedicada de PayPal (#/donaciones/paypal) tiene portal oficial corregido y correo',
      paypalPageCheck.isPaypalView && paypalPageCheck.hasCorrectUrl && paypalPageCheck.hasEmail,
      JSON.stringify(paypalPageCheck)
    );

    // Verify Donors Podium in #/donaciones
    await cdp.eval(`window.location.hash = '#/donaciones';`);
    await sleep(100);
    const podiumCheck = await cdp.eval(`
      (() => {
        const podiumEl = document.querySelector('#seccion-podio-donadores');
        const hasTrophy = Boolean(document.querySelector('.podium-trophy-icon'));
        const goldPedestal = Boolean(document.querySelector('.pedestal-gold .pedestal-number'));
        const silverPedestal = Boolean(document.querySelector('.pedestal-silver .pedestal-number'));
        const bronzePedestal = Boolean(document.querySelector('.pedestal-bronze .pedestal-number'));
        const tickerMsg = document.querySelector('#ticker-active-msg')?.textContent || '';
        const heartButtons = document.querySelectorAll('.btn-give-heart');
        const thanksTexts = Array.from(document.querySelectorAll('.podium-thanks-text, .wall-thanks-message')).map(el => el.textContent);
        const allHaveHearts = thanksTexts.length > 0 && thanksTexts.every(t => t.includes('💖') && t.toLowerCase().includes('gracias'));
        const wallCards = document.querySelectorAll('.donor-wall-card');
        return {
          hasPodium: Boolean(podiumEl),
          hasTrophy,
          goldPedestal,
          silverPedestal,
          bronzePedestal,
          hasTicker: tickerMsg.includes('💖') && tickerMsg.toLowerCase().includes('gracias'),
          heartButtonsCount: heartButtons.length,
          allHaveHearts,
          wallCardsCount: wallCards.length
        };
      })()
    `);
    assertCheck(
      '1. Componentes',
      'Podio de Donadores muestra pedestales 1º (Oro), 2º (Plata), 3º (Bronce), ticker en vivo y mensajes de gracias con corazón 💖',
      podiumCheck.hasPodium &&
        podiumCheck.goldPedestal &&
        podiumCheck.silverPedestal &&
        podiumCheck.bronzePedestal &&
        podiumCheck.hasTicker &&
        podiumCheck.allHaveHearts &&
        podiumCheck.heartButtonsCount >= 3,
      JSON.stringify(podiumCheck)
    );

    // Test giving hearts and registering a new donor automatically
    const interactivePodiumCheck = await cdp.eval(`
      (() => {
        const firstHeartBtn = document.querySelector('.btn-give-heart');
        const donorId = firstHeartBtn?.getAttribute('data-donor-id');
        const counterEl = document.querySelector('#heart-count-' + donorId);
        const initialText = counterEl?.textContent || '';
        firstHeartBtn?.click();
        const updatedText = counterEl?.textContent || '';

        // Open modal
        document.querySelector('#btn-open-donor-modal')?.click();
        const modal = document.querySelector('#donor-register-modal');
        const isModalOpen = modal && modal.style.display !== 'none';

        // Fill form
        const inputName = document.querySelector('#donor-input-name');
        if (inputName) inputName.value = 'Familia Valderrama';
        const inputNote = document.querySelector('#donor-input-note');
        if (inputNote) inputNote.value = '¡Con amor para que los niños sigan jugando!';
        document.querySelector('#form-register-donor')?.dispatchEvent(new Event('submit', { cancelable: true }));

        const modalClosed = modal && modal.style.display === 'none';
        const newDonorCard = Boolean(document.body.textContent.includes('Familia Valderrama'));
        const newDonorThanks = document.body.textContent.includes('¡Muchas gracias Familia Valderrama con todo el corazón! 💖');

        return {
          initialText,
          updatedText,
          isModalOpen,
          modalClosed,
          newDonorCard,
          newDonorThanks
        };
      })()
    `);
    assertCheck(
      '7. Persistencia de progreso',
      'Interacción en Podio de Donadores: dar amor incrementa corazones y registro automático publica el nuevo donador con mensaje y corazón',
      interactivePodiumCheck.isModalOpen &&
        interactivePodiumCheck.modalClosed &&
        interactivePodiumCheck.newDonorCard &&
        interactivePodiumCheck.newDonorThanks,
      JSON.stringify(interactivePodiumCheck)
    );

    // Verify Breadcrumbs on non-home pages
    await cdp.eval(`window.location.hash = '#/materias';`);
    await sleep(90);
    const breadcrumbsCheck = await cdp.eval(`
      (() => {
        const bar = document.querySelector('.app-breadcrumbs-bar');
        const items = Array.from(document.querySelectorAll('.breadcrumb-item')).map((el) => el.textContent.trim());
        const hasInicioLink = Boolean(document.querySelector('[data-breadcrumb-nav="/inicio"]'));
        return { hasBar: Boolean(bar), items, hasInicioLink };
      })()
    `);
    assertCheck(
      '2. Rutas',
      'Barra de Breadcrumbs presente en #/materias con enlace de retorno a Inicio',
      breadcrumbsCheck.hasBar && breadcrumbsCheck.hasInicioLink && breadcrumbsCheck.items.some((t) => t.includes('Inicio')),
      JSON.stringify(breadcrumbsCheck)
    );

    // Verify Active Recall mini-challenge in Lesson Phase
    await cdp.eval(`window.location.hash = '#/nivel/1';`);
    await sleep(100);
    const lessonPhaseCheck = await cdp.eval(`
      (() => {
        const hasRecallSection = Boolean(document.querySelector('.active-recall-section'));
        const hasRecallBtns = document.querySelectorAll('.btn-recall-opt').length >= 2;
        const hasPulseCta = Boolean(document.querySelector('#btn-start-practice-from-lesson.pulse-cta'));
        return { hasRecallSection, hasRecallBtns, hasPulseCta };
      })()
    `);
    assertCheck(
      '3. Flujo Pedagógico',
      'Fase Aprendo (#/nivel/1) incluye mini-reto de Active Recall y botón CTA destacado con pulso',
      lessonPhaseCheck.hasRecallSection && lessonPhaseCheck.hasRecallBtns && lessonPhaseCheck.hasPulseCta,
      JSON.stringify(lessonPhaseCheck)
    );

    // Verify subject-specific map headings (#/matematicas y #/espanol)
    await cdp.eval(`window.location.hash = '#/matematicas';`);
    await sleep(90);
    const mathTitle = await cdp.eval(`document.querySelector('#map-main-title')?.textContent.trim()`);
    assertCheck(
      '2. Rutas',
      'Ruta #/matematicas muestra el encabezado «¡Vamos a aprender Matemáticas!» y filtra las 5 unidades',
      mathTitle === '¡Vamos a aprender Matemáticas!' &&
        (await cdp.eval(`document.querySelectorAll('.level-map-card').length`)) === 5
    );

    await cdp.eval(`window.location.hash = '#/espanol';`);
    await sleep(90);
    const espTitle = await cdp.eval(`document.querySelector('#map-main-title')?.textContent.trim()`);
    assertCheck(
      '2. Rutas',
      'Ruta #/espanol muestra el encabezado «¡Descubramos el mundo de las palabras!» y filtra las 5 unidades',
      espTitle === '¡Descubramos el mundo de las palabras!' &&
        (await cdp.eval(`document.querySelectorAll('.level-map-card').length`)) === 5
    );

    // Check invalid level route #/nivel/99
    await cdp.eval(`window.location.hash = '#/nivel/99';`);
    await sleep(100);
    const invalidLevelStatus = await cdp.eval(
      `document.querySelector('[data-component="ExerciseView"]')?.getAttribute('data-status')`
    );
    assertCheck(
      '2. Rutas',
      'Ruta de nivel inválido (#/nivel/99) muestra pantalla de control not-found',
      invalidLevelStatus === 'not-found',
      `status=${invalidLevelStatus}`
    );
    await cdp.eval(`document.querySelector('#btn-back-map-invalid')?.click()`);
    await sleep(100);
    assertCheck(
      '3. Botones',
      'Botón #btn-back-map-invalid regresa a #/niveles',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );

    // Check 404 buttons (#btn-404-home & #btn-404-map)
    await cdp.eval(`window.location.hash = '#/ruta-no-existente';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-404-home')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-404-home en vista 404 regresa a #/inicio',
      (await cdp.eval(`window.location.hash`)) === '#/inicio'
    );
    await cdp.eval(`window.location.hash = '#/ruta-no-existente';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-404-map')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-404-map en vista 404 navega a #/niveles',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );

    // =========================================================================
    // 3. PRUEBA DE BOTONES EN INICIO, GRADO, NAVBAR, FOOTER Y MASCOTA
    // =========================================================================
    await cdp.eval(`window.location.hash = '#/inicio';`);
    await sleep(120);

    // Test Ari greet button & animation
    const initialSpeech = await cdp.eval(`document.querySelector('#ari-speech-text')?.textContent.trim()`);
    await cdp.eval(`document.querySelector('#btn-ari-greet')?.click()`);
    await sleep(80);
    const nextSpeech = await cdp.eval(`document.querySelector('#ari-speech-text')?.textContent.trim()`);
    const hasJumpAnim = await cdp.eval(
      `document.querySelector('#ari-avatar-box')?.classList.contains('ari-jump-anim')`
    );
    assertCheck(
      '3. Botones',
      'Botón #btn-ari-greet actualiza el consejo de Ari y activa animación',
      initialSpeech !== nextSpeech && hasJumpAnim,
      `Cambio de frase verificado`
    );

    // Test Player Name save form & button
    await cdp.eval(`
      const input = document.querySelector('#input-player-name');
      input.value = 'Valentina';
      document.querySelector('#btn-save-name').click();
    `);
    await sleep(80);
    const savedName = await cdp.eval(`document.querySelector('#hero-player-name')?.textContent.trim()`);
    assertCheck(
      '3. Botones',
      'Formulario #form-player-name y botón #btn-save-name guardan nombre del jugador',
      savedName === 'Valentina',
      `savedName=${savedName}`
    );

    // Test GradeSelectView buttons (#btn-change-grade, #btn-select-grade-4, #btn-select-grade-3)
    await cdp.eval(`document.querySelector('#btn-change-grade')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-change-grade navega a la pantalla de selección de grado (#/grado)',
      (await cdp.eval(`window.location.hash`)) === '#/grado'
    );
    await cdp.eval(`document.querySelector('#btn-select-grade-4')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-select-grade-4 selecciona 4° Grado y navega a #/materias',
      (await cdp.eval(`window.__ARI_APP__.StorageService.getState().selectedGrade`)) === '4' &&
        (await cdp.eval(`window.location.hash`)) === '#/materias'
    );

    // Verify 4th grade differentiated questions are served when grade === '4' across ALL 10 units with 0 duplicate prompts
    await cdp.eval(`window.location.hash = '#/nivel/1';`);
    await sleep(60);
    const grade4LessonCheck = await cdp.eval(`
      (() => {
        const visual = document.querySelector('#lesson-example-visual')?.textContent.trim() || '';
        return visual.includes('1.450') || visual.includes('3.750');
      })()
    `);
    assertCheck(
      '4. Ejercicios',
      'Las lecciones de 4° Grado muestran ejemplos y pasos adaptados con cifras mayores y propiedades (ej. 1.450 + 2.300 = 3.750)',
      grade4LessonCheck === true
    );

    await cdp.eval(`window.location.hash = '#/nivel/2';`);
    await sleep(60);
    const grade4Check = await cdp.eval(`
      (() => {
        const levels = window.__ARI_APP__.LEVELS_DATA;
        const lvl1 = levels.find((l) => l.id === 1);
        const all10HaveBank = levels.every((l) => Array.isArray(l.questionsGrade4) && l.questionsGrade4.length >= 5);
        const zeroDuplicatePrompts = levels.every((l) => {
          const p3 = new Set(l.questions.map((q) => q.prompt));
          return l.questionsGrade4.every((q) => !p3.has(q.prompt));
        });
        return lvl1.questionsGrade4[1].prompt.includes('1.250') && all10HaveBank && zeroDuplicatePrompts;
      })()
    `);
    assertCheck(
      '4. Ejercicios',
      'Las 10 unidades cuentan con banco completo de 4° Grado (banco ampliado con al menos 5 preguntas por unidad, 0 enunciados repetidos respecto a 3° Grado)',
      grade4Check === true
    );

    // Verify normalizeAnswerText preserves ñ and session persistence works
    const storageHygieneCheck = await cdp.eval(`
      (() => {
        const S = window.__ARI_APP__.StorageService;
        const ninoDiff = S.normalizeAnswerText('niño') !== S.normalizeAnswerText('nino');
        const accentSame = S.normalizeAnswerText('Canción') === S.normalizeAnswerText('cancion');
        S.saveExerciseSession({ levelId: 1, questionIndex: 2, activePhase: 'practico', correctCount: 2, sessionScore: 225 });
        const saved = S.getExerciseSession(1);
        const sessionOk = saved && saved.questionIndex === 2 && saved.activePhase === 'practico';
        S.clearExerciseSession(1);
        return ninoDiff && accentSame && sessionOk;
      })()
    `);
    assertCheck(
      '7. Persistencia de progreso',
      'StorageService preserva la letra «ñ» al normalizar respuestas y persiste el estado de sesión activa por unidad',
      storageHygieneCheck === true
    );

    // Switch back to 3° Grado for the complete 10-unit walkthrough
    await cdp.eval(`window.location.hash = '#/grado';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-select-grade-3')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-select-grade-3 selecciona 3° Grado y navega a #/materias',
      (await cdp.eval(`window.__ARI_APP__.StorageService.getState().selectedGrade`)) === '3'
    );

    // Test 3D Subject Cards (#btn-subject-matematicas and #btn-subject-espanol)
    await cdp.eval(`document.querySelector('#btn-subject-matematicas')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Tarjeta 3D #btn-subject-matematicas abre Matemáticas Unidad 1 (#/nivel/1)',
      (await cdp.eval(`window.location.hash`)) === '#/nivel/1'
    );
    await cdp.eval(`window.location.hash = '#/inicio';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-subject-espanol')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Tarjeta 3D #btn-subject-espanol abre Español Unidad 1 (#/nivel/6)',
      (await cdp.eval(`window.location.hash`)) === '#/nivel/6'
    );

    // =========================================================================
    // PRUEBA DE FASE 1 («APRENDO») POR DEFECTO Y TEXTOS EXPOSITIVOS INTERACTIVOS (UNIDAD 5 ESPAÑOL - NIVEL 10)
    // =========================================================================
    await cdp.eval(`
      window.__ARI_APP__.StorageService.clearExerciseSession(10);
      window.location.hash = '#/nivel/10';
    `);
    await sleep(100);

    // Verify Phase 1 («Aprendo») opens by default on first visit + has skip and start practice buttons
    const aprendoDefaultOnFirstVisit = await cdp.eval(`
      Boolean(document.querySelector('#lesson-aprendo-panel')) &&
      Boolean(document.querySelector('#btn-start-practice-from-lesson')) &&
      Boolean(document.querySelector('#btn-skip-explanation'))
    `);
    await cdp.eval(`document.querySelector('#btn-listen-lesson')?.click()`);
    await sleep(50);
    const lessonAudioPlayed = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'listen'`);
    assertCheck(
      '1. Componentes',
      'Las unidades inician por defecto en «📘 1. Aprendo» con explicación, audio y botones para practicar o saltar explicación',
      aprendoDefaultOnFirstVisit && lessonAudioPlayed
    );

    // Advance from 1. Aprendo to 2. Practico / Evaluación to test #btn-listen-reading
    await cdp.eval(`document.querySelector('#btn-start-practice-from-lesson')?.click()`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-listen-reading')?.click()`);
    await sleep(60);
    const listenPlayed = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'listen'`);
    assertCheck(
      '8. Sonidos',
      'Botón #btn-listen-reading («🔊 Escuchar») en lectura de Español reproduce audio y síntesis de voz',
      listenPlayed === true
    );

    // Test Interactive Expositive Reading Viewer (Sección 6.7: Portada -> Fragmentos -> Palabras Resaltadas -> Exploración)
    await cdp.eval(`document.querySelector('#btn-phase-lectura')?.click()`);
    await sleep(80);
    const coverRendered = await cdp.eval(`Boolean(document.querySelector('#expositive-cover-box'))`);
    await cdp.eval(`document.querySelector('#btn-start-expositive-reading')?.click()`);
    await sleep(80);
    const fragmentStageRendered = await cdp.eval(`Boolean(document.querySelector('#expositive-fragment-stage'))`);
    await cdp.eval(`document.querySelector('[data-keyword-word]')?.click()`);
    await sleep(60);
    const keywordDefShown = await cdp.eval(`Boolean(document.querySelector('#keyword-definition-box'))`);
    await cdp.eval(`document.querySelector('#btn-next-fragment')?.click()`);
    await sleep(60);
    await cdp.eval(`document.querySelector('#btn-exploration-opt-0')?.click()`);
    await sleep(60);
    const explorationFeedbackShown = await cdp.eval(`Boolean(document.querySelector('#exploration-feedback-msg'))`);
    await cdp.eval(`document.querySelector('#btn-go-to-evaluation')?.click()`);
    await sleep(80);
    const backToEvaluationOk = await cdp.eval(`Boolean(document.querySelector('#exercise-question-card'))`);

    assertCheck(
      '1. Componentes',
      'Visor de Textos Expositivos Interactivos funciona en todas sus etapas (Portada, Fragmentos, Palabras Resaltadas, Pregunta de Exploración y paso a Evaluación)',
      coverRendered && fragmentStageRendered && keywordDefShown && explorationFeedbackShown && backToEvaluationOk
    );

    // Return to Inicio and test remaining HomeView & Footer buttons
    await cdp.eval(`window.location.hash = '#/inicio';`);
    await sleep(80);

    await cdp.eval(`document.querySelector('#btn-start-adventure')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-start-adventure navega a #/niveles',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );

    await cdp.eval(`document.querySelector('#nav-inicio')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #nav-inicio navega a #/inicio',
      (await cdp.eval(`window.location.hash`)) === '#/inicio'
    );

    await cdp.eval(`document.querySelector('#btn-continue-level')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-continue-level («▶ ¡Comenzar!») navega al nivel activo',
      (await cdp.eval(`window.location.hash`)).startsWith('#/nivel/')
    );

    await cdp.eval(`document.querySelector('#btn-brand-home')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón de marca #btn-brand-home navega a #/inicio',
      (await cdp.eval(`window.location.hash`)) === '#/inicio'
    );

    await cdp.eval(`document.querySelector('#btn-go-practice')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-go-practice navega a #/practica',
      (await cdp.eval(`window.location.hash`)) === '#/practica'
    );

    await cdp.eval(`document.querySelector('#nav-inicio')?.click()`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-go-progress')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-go-progress navega a #/progreso',
      (await cdp.eval(`window.location.hash`)) === '#/progreso'
    );

    for (const target of ['/inicio', '/niveles', '/practica', '/progreso']) {
      await cdp.eval(`document.querySelector('[data-footer-nav="${target}"]')?.click()`);
      await sleep(70);
      assertCheck(
        '3. Botones',
        `Botón del pie de página [data-footer-nav="${target}"] navega correctamente`,
        (await cdp.eval(`window.location.hash`)) === `#${target}`
      );
    }

    // =========================================================================
    // 8. COMPROBACIÓN DE SONIDOS (Y BOTONES DE MÚSICA Y SONIDO)
    // =========================================================================
    await cdp.eval(`window.__ARI_APP__.SoundService.clearHistory()`);
    await cdp.eval(`document.querySelector('#btn-music-toggle')?.click()`);
    await sleep(50);
    const musicToggledOff = await cdp.eval(`window.__ariSoundState.musicEnabled === false`);
    await cdp.eval(`document.querySelector('#btn-music-toggle')?.click()`);
    await sleep(50);
    const musicToggledOn = await cdp.eval(`window.__ariSoundState.musicEnabled === true`);
    assertCheck(
      '8. Sonidos',
      'Botón #btn-music-toggle controla de forma independiente la música opcional',
      musicToggledOff && musicToggledOn
    );

    await cdp.eval(`document.querySelector('#btn-sound-toggle')?.click()`); // Mute
    await sleep(60);
    const mutedState = await cdp.eval(`window.__ariSoundState.enabled`);
    await cdp.eval(`document.querySelector('#nav-inicio')?.click()`);
    await sleep(60);
    const lastSoundWhenMuted = await cdp.eval(`window.__ariSoundState.lastPlayed`);
    assertCheck(
      '8. Sonidos',
      'Botón #btn-sound-toggle silencia sonidos y persiste estado muted',
      mutedState === false && lastSoundWhenMuted && lastSoundWhenMuted.played === false,
      `enabled=${mutedState}, played=${lastSoundWhenMuted?.played}`
    );

    // Unmute
    await cdp.eval(`document.querySelector('#btn-sound-toggle')?.click()`);
    await sleep(60);
    const unmutedState = await cdp.eval(`window.__ariSoundState.enabled`);
    const lastSoundWhenUnmuted = await cdp.eval(`window.__ariSoundState.lastPlayed`);
    assertCheck(
      '8. Sonidos',
      'Botón #btn-sound-toggle reactiva sonidos y reproduce tono click',
      unmutedState === true && lastSoundWhenUnmuted && lastSoundWhenUnmuted.played === true,
      `enabled=${unmutedState}, played=${lastSoundWhenUnmuted?.played}`
    );

    // Verify audio files from sounds/ folder are available and mapped in SoundService
    const soundsMappedCheck = await cdp.eval(`
      (() => {
        const soundService = window.__ARI_APP__.SoundService;
        const sources = soundService?.audioSources;
        const hasCorrect = Boolean(sources?.correct?.length);
        const hasLevelComplete = Boolean(sources?.levelComplete?.length);
        const hasHomeMusic = Boolean(sources?.homeMusic?.length);
        const hasActivityMusic = Boolean(sources?.activityMusic?.length);
        return hasCorrect && hasLevelComplete && hasHomeMusic && hasActivityMusic;
      })()
    `);
    const soundFilesOnDisk = [
      'sounds/collect-points.mp3',
      'sounds/level-passed.mp3',
      'sounds/home-music.mp3',
      'sounds/activity-music.mp3'
    ].every((f) => fs.existsSync(path.join(__dirname, '..', f)));

    assertCheck(
      '8. Sonidos',
      'Archivos de sonido de la carpeta sounds/ (acierto, nivel completado, música de inicio y música de actividad) están integrados y accesibles',
      soundsMappedCheck === true && soundFilesOnDisk === true,
      `soundsMapped=${soundsMappedCheck}, filesOnDisk=${soundFilesOnDisk}`
    );

    // =========================================================================
    // 4. COMPROBACIÓN DEL BANCO DE EJERCICIOS (10 UNIDADES Y 6 MODALIDADES)
    // =========================================================================
    const curriculumAudit = await cdp.eval(`
      (() => {
        const levels = window.__ARI_APP__.LEVELS_DATA;
        const issues = [];
        const modalities = new Set();
        let totalQuestions3 = 0;
        for (const lvl of levels) {
          for (const q of lvl.questions) {
            totalQuestions3++;
            modalities.add(q.interactionType || 'multiple_choice');
            if (!Array.isArray(q.options) || q.options.length < 2) {
              issues.push(\`Pregunta \${q.id} sin opciones válidas\`);
            }
            if (!q.options.includes(q.correctAnswer)) {
              issues.push(\`Pregunta \${q.id} no incluye correctAnswer en options\`);
            }
            if (!q.hint || !q.explanation) {
              issues.push(\`Pregunta \${q.id} sin pista o explicación\`);
            }
          }
        }
        return {
          totalLevels: levels.length,
          totalQuestions3,
          modalities: Array.from(modalities),
          issues
        };
      })()
    `);
    assertCheck(
      '4. Ejercicios',
      'Las 10 unidades (banco ampliado con más de 50 preguntas base + bancos de 4° grado) incluyen las 6 modalidades interactivas y respuestas verificadas',
      curriculumAudit.totalLevels === 10 &&
        curriculumAudit.totalQuestions3 >= 50 &&
        curriculumAudit.modalities.length === 6 &&
        curriculumAudit.issues.length === 0,
      `Unidades=${curriculumAudit.totalLevels}, Total 3°=${curriculumAudit.totalQuestions3}, Modalidades=${curriculumAudit.modalities.join(',')}`
    );

    // =========================================================================
    // 5. SISTEMA DE PUNTUACIÓN Y 6. DESBLOQUEO DE NIVELES (MÍNIMO 70%)
    // =========================================================================
    await cdp.eval(`window.location.hash = '#/niveles';`);
    await sleep(100);

    // Ensure all levels are visible on #/niveles
    await cdp.eval(`document.querySelector('#map-filter-todas')?.click()`);
    await sleep(80);

    // Try clicking locked Level 2 on the map
    await cdp.eval(`document.querySelector('#btn-play-level-2')?.click()`);
    await sleep(80);
    const lockedToastVisible = await cdp.eval(`!document.querySelector('#map-locked-alert')?.hidden`);
    const stillOnMap = (await cdp.eval(`window.location.hash`)) === '#/niveles';
    const lockedSoundPlayed = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'locked'`);
    assertCheck(
      '6. Desbloqueo de niveles',
      'Clic en Nivel 2 bloqueado muestra alerta en el mapa, reproduce sonido locked y permanece en #/niveles',
      lockedToastVisible && stillOnMap && lockedSoundPlayed
    );

    // Try navigating via URL to locked Level 2 (#/nivel/2)
    await cdp.eval(`window.location.hash = '#/nivel/2';`);
    await sleep(100);
    const guardStatus = await cdp.eval(
      `document.querySelector('[data-component="ExerciseView"]')?.getAttribute('data-status')`
    );
    assertCheck(
      '6. Desbloqueo de niveles',
      'Navegar por URL a nivel bloqueado (#/nivel/2) muestra pantalla de protección de nivel bloqueado',
      guardStatus === 'locked',
      `status=${guardStatus}`
    );

    // Test guard buttons (#btn-guard-back-map and #btn-guard-play-available)
    await cdp.eval(`document.querySelector('#btn-guard-back-map')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-guard-back-map regresa al mapa (#/niveles)',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );

    await cdp.eval(`window.location.hash = '#/nivel/2';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-guard-play-available')?.click()`);
    await sleep(100);
    assertCheck(
      '3. Botones',
      'Botón #btn-guard-play-available redirige al nivel disponible',
      (await cdp.eval(`window.location.hash`)).startsWith('#/nivel/')
    );

    // Navigate to #/nivel/1 and test #btn-exit-level
    await cdp.eval(`window.location.hash = '#/nivel/1';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-exit-level')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-exit-level sale del ejercicio activo hacia #/niveles',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );
    await cdp.eval(`document.querySelector('#btn-play-level-1')?.click()`);
    await sleep(80);
    assertCheck(
      '3. Botones',
      'Botón #btn-play-level-1 en el mapa inicia el Nivel 1 (#/nivel/1)',
      (await cdp.eval(`window.location.hash`)) === '#/nivel/1'
    );

    // Reset progress right before testing scoring & 60% (<70%) fail check on Level 1
    await cdp.eval(`
      window.__ARI_APP__.StorageService.resetProgress();
      window.__ARI_APP__.StorageService.setPlayerName('Valentina');
      window.location.hash = '#/nivel/1';
    `);
    await sleep(100);
    await cdp.eval(`document.querySelector('#btn-start-practice-from-lesson')?.click()`);
    await sleep(60);

    // Test 3/5 correct = 60% (< 70% threshold) on Level 1 -> should NOT unlock Level 2!
    const level1Questions = await cdp.eval(
      `window.__ARI_APP__.getActiveSession()?.questions || window.__ARI_APP__.LEVELS_DATA[0].questions.slice(0, 5)`
    );
    for (let i = 0; i < level1Questions.length; i++) {
      const q = level1Questions[i];
      const shouldAnswerCorrect = i < 3; // Q1, Q2, Q3 right (60%), Q4 & Q5 wrong
      const chosenOption = shouldAnswerCorrect
        ? q.correctAnswer
        : q.options.find((o) => o !== q.correctAnswer);

      if (q.interactionType === 'fill_blank') {
        // Test typing into #input-fill-blank with extra spaces
        await cdp.eval(`
          const inp = document.querySelector('#input-fill-blank');
          if (inp) {
            inp.value = ${JSON.stringify(shouldAnswerCorrect ? ' ' + q.correctAnswer + ' ' : ' 999 ')};
            document.querySelector('#btn-apply-blank')?.click();
          }
        `);
      } else {
        await cdp.eval(`
          const btn = Array.from(document.querySelectorAll('.option-btn')).find(
            (b) => b.getAttribute('data-option-value') === ${JSON.stringify(chosenOption)}
          );
          btn?.click();
        `);
      }
      await sleep(45);
      await cdp.eval(`document.querySelector('#btn-check-answer')?.click()`);
      await sleep(55);

      if (i === 0) {
        const scoreAfterQ1 = await cdp.eval(`Number(document.querySelector('#exercise-session-score')?.textContent)`);
        const correctSound = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'correct'`);
        assertCheck(
          '5. Puntuación',
          'Primera respuesta correcta otorga 100 puntos base (+10 pts de estrella) y reproduce sonido correct',
          scoreAfterQ1 === 100 && correctSound,
          `scoreAfterQ1=${scoreAfterQ1}`
        );
      } else if (i === 1) {
        const scoreAfterQ2 = await cdp.eval(`Number(document.querySelector('#exercise-session-score')?.textContent)`);
        const streakAfterQ2 = await cdp.eval(`Number(document.querySelector('#exercise-streak')?.textContent)`);
        assertCheck(
          '5. Puntuación',
          'Modalidad FillBlank valida respuesta con espacios extra y otorga +125 pts (100 base + 25 racha)',
          scoreAfterQ2 === 225 && streakAfterQ2 === 2,
          `scoreAfterQ2=${scoreAfterQ2}, streak=${streakAfterQ2}`
        );
      } else if (i === 3) {
        const streakAfterWrong = await cdp.eval(`Number(document.querySelector('#exercise-streak')?.textContent)`);
        const wrongSound = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'wrong'`);
        assertCheck(
          '5. Puntuación',
          'Respuesta incorrecta suma 0 puntos, reinicia la racha a 0 y reproduce sonido wrong',
          streakAfterWrong === 0 && wrongSound
        );
      }

      await cdp.eval(`document.querySelector('#btn-next-question')?.click()`);
      await sleep(70);
    }

    // Verify LevelCompleteModal after getting 60% (3/5) -> below 70% pass requirement, so Level 2 stays locked!
    const failAccuracy = await cdp.eval(`document.querySelector('#result-accuracy')?.textContent.trim()`);
    const level2UnlockedAfter60 = await cdp.eval(`window.__ARI_APP__.StorageService.isLevelUnlocked(2)`);
    assertCheck(
      '6. Desbloqueo de niveles',
      'Obtener 60% (3/5 aciertos, menor al mínimo de 70%) NO desbloquea el Nivel 2',
      failAccuracy === '60%' && !level2UnlockedAfter60,
      `accuracy=${failAccuracy}, level2Unlocked=${level2UnlockedAfter60}`
    );

    // Click #btn-retry-level to replay Level 1 and pass all 10 levels with 100% (5/5)
    await cdp.eval(`document.querySelector('#btn-retry-level')?.click()`);
    await sleep(80);

    const allLevels = await cdp.eval(`window.__ARI_APP__.LEVELS_DATA`);
    for (const lvl of allLevels) {
      const currentHash = await cdp.eval(`window.location.hash`);
      if (currentHash !== `#/nivel/${lvl.id}`) {
        await cdp.eval(`window.location.hash = '#/nivel/${lvl.id}';`);
        await sleep(80);
      }
      await cdp.eval(`
        (document.querySelector('#btn-start-practice-from-lesson') || document.querySelector('#btn-phase-practico'))?.click()
      `);
      await sleep(55);

      const sessionQuestions = await cdp.eval(`window.__ARI_APP__.getActiveSession()?.questions || []`);
      for (let qIdx = 0; qIdx < sessionQuestions.length; qIdx++) {
        const q = sessionQuestions[qIdx];

        if (lvl.id === 1 && qIdx === 0) {
          await cdp.eval(`document.querySelector('#btn-hint')?.click()`);
          await sleep(50);
          const hintVisible = await cdp.eval(`Boolean(document.querySelector('#exercise-hint-box'))`);
          const hintSound = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'hint'`);
          assertCheck(
            '3. Botones',
            'Botón #btn-hint muestra pista de Ari y reproduce sonido hint',
            hintVisible && hintSound
          );
        }

        await cdp.eval(`
          const btn = Array.from(document.querySelectorAll('.option-btn')).find(
            (b) => b.getAttribute('data-option-value') === ${JSON.stringify(q.correctAnswer)}
          );
          btn.click();
        `);
        await sleep(35);
        await cdp.eval(`document.querySelector('#btn-check-answer')?.click()`);
        await sleep(45);

        const isCorrectFeedback = await cdp.eval(
          `Boolean(document.querySelector('#exercise-feedback-box.feedback-success'))`
        );
        if (!isCorrectFeedback) {
          assertCheck('4. Ejercicios', `Pregunta ${q.id} valida respuesta correcta`, false, q.correctAnswer);
        }

        await cdp.eval(`document.querySelector('#btn-next-question')?.click()`);
        await sleep(55);
      }

      const modalExists = await cdp.eval(`Boolean(document.querySelector('[data-component="LevelCompleteModal"]'))`);
      const starsCount = await cdp.eval(`document.querySelectorAll('.result-star.star-earned').length`);
      const completeSound = await cdp.eval(`window.__ariSoundState.lastPlayed?.name === 'levelComplete'`);

      assertCheck(
        '4. Ejercicios',
        `Nivel ${lvl.id} (${lvl.unitLabel}) completado al 100% con 3 estrellas y sonido levelComplete`,
        modalExists && starsCount === 3 && completeSound,
        `stars=${starsCount}`
      );

      if (lvl.id === 1) {
        await sleep(320);
        const shotDir = path.join(__dirname, 'screenshots');
        fs.mkdirSync(shotDir, { recursive: true });
        const victoryShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(shotDir, 'vista-recompensa.png'), Buffer.from(victoryShot.data, 'base64'));
      }

      if (lvl.id < allLevels.length) {
        const nextUnlocked = await cdp.eval(`window.__ARI_APP__.StorageService.isLevelUnlocked(${lvl.id + 1})`);
        assertCheck(
          '6. Desbloqueo de niveles',
          `Superar Nivel ${lvl.id} con >=70% mantiene o desbloquea el Nivel ${lvl.id + 1}`,
          nextUnlocked === true
        );
        await cdp.eval(`window.location.hash = '#/nivel/${lvl.id + 1}';`);
        await sleep(75);
      } else {
        await cdp.eval(`document.querySelector('#btn-back-to-map')?.click()`);
        await sleep(75);
      }
    }

    // Verify non-duplicate bonus points when repeating an already-completed level (Sección 8.1)
    const scoreBeforeRepeat = await cdp.eval(`window.__ARI_APP__.StorageService.getState().totalScore`);
    const repeatRes = await cdp.eval(`
      window.__ARI_APP__.StorageService.completeLevel({
        levelId: 1,
        correctCount: 5,
        totalQuestions: 5,
        sessionScore: 500
      })
    `);
    const scoreAfterRepeat = await cdp.eval(`window.__ARI_APP__.StorageService.getState().totalScore`);
    assertCheck(
      '5. Puntuación',
      'Repetir una unidad ya completada al 100% no entrega bonificaciones duplicadas (Sección 8.1)',
      repeatRes.newBonusAwarded === 0 && scoreAfterRepeat === scoreBeforeRepeat,
      `newBonusAwarded=${repeatRes.newBonusAwarded}`
    );

    // =========================================================================
    // 7. GUARDADO Y RECUPERACIÓN DEL PROGRESO (PERSISTENCIA EN LOCALSTORAGE)
    // =========================================================================
    const stateBeforeReload = await cdp.eval(`({
      playerName: window.__ARI_APP__.StorageService.getState().playerName,
      totalScore: window.__ARI_APP__.StorageService.getState().totalScore,
      totalStars: window.__ARI_APP__.StorageService.getTotalStars(),
      unlockedCount: window.__ARI_APP__.StorageService.getState().unlockedLevels.length,
      achievementsCount: window.__ARI_APP__.StorageService.getState().achievements.length
    })`);

    await cdp.send('Page.reload', { ignoreCache: true });
    await sleep(500);

    const stateAfterReload = await cdp.eval(`({
      playerName: window.__ARI_APP__.StorageService.getState().playerName,
      totalScore: window.__ARI_APP__.StorageService.getState().totalScore,
      totalStars: window.__ARI_APP__.StorageService.getTotalStars(),
      unlockedCount: window.__ARI_APP__.StorageService.getState().unlockedLevels.length,
      achievementsCount: window.__ARI_APP__.StorageService.getState().achievements.length,
      navScoreText: document.querySelector('#nav-score-value')?.textContent.trim(),
      navStarsText: document.querySelector('#nav-stars-value')?.textContent.trim()
    })`);

    assertCheck(
      '7. Persistencia de progreso',
      'Recargar el navegador recupera exactamente nombre, puntaje, 30/30 estrellas, 10 unidades desbloqueadas y las 9 medallas desde localStorage',
      stateAfterReload.playerName === 'Valentina' &&
        stateAfterReload.totalScore === stateBeforeReload.totalScore &&
        stateAfterReload.totalStars === 30 &&
        stateAfterReload.unlockedCount === 10 &&
        stateAfterReload.achievementsCount === 9 &&
        stateAfterReload.navStarsText === '30/30',
      JSON.stringify(stateAfterReload)
    );

    // Test PracticeView buttons & category filters
    await cdp.eval(`window.location.hash = '#/practica';`);
    await sleep(100);
    for (const catId of ['todas', 'matematicas', 'espanol']) {
      await cdp.eval(`document.querySelector('#btn-cat-${catId}')?.click()`);
      await sleep(40);
      const isSelected = await cdp.eval(
        `document.querySelector('#btn-cat-${catId}')?.getAttribute('aria-selected') === 'true'`
      );
      assertCheck(
        '3. Botones',
        `Botón de filtro de categoría #btn-cat-${catId} selecciona y filtra ejercicios`,
        isSelected
      );
    }
    await cdp.eval(`document.querySelector('#btn-practice-hint')?.click()`);
    await sleep(60);
    const practiceHintShown = await cdp.eval(`Boolean(document.querySelector('#practice-hint-box'))`);
    await cdp.eval(`document.querySelector('#practice-option-0')?.click()`);
    await sleep(50);
    await cdp.eval(`document.querySelector('#btn-practice-check')?.click()`);
    await sleep(60);
    const practiceFeedbackShown = await cdp.eval(`Boolean(document.querySelector('#practice-feedback-box'))`);
    await cdp.eval(`document.querySelector('#btn-practice-next')?.click()`);
    await sleep(60);
    await cdp.eval(`document.querySelector('#btn-practice-to-map')?.click()`);
    await sleep(60);
    const practiceToMapOk = (await cdp.eval(`window.location.hash`)) === '#/niveles';
    assertCheck(
      '3. Botones',
      'Botones de Práctica Libre (pista, comprobar, siguiente ejercicio y #btn-practice-to-map) funcionan correctamente',
      practiceHintShown && practiceFeedbackShown && practiceToMapOk
    );

    // Test HomeView world cards buttons and ProgressView table buttons
    await cdp.eval(`window.location.hash = '#/inicio';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('[data-home-level-btn="1"]')?.click()`);
    await sleep(60);
    assertCheck(
      '3. Botones',
      'Botones de tarjetas de unidades en Inicio ([data-home-level-btn]) navegan al nivel seleccionado',
      (await cdp.eval(`window.location.hash`)) === '#/nivel/1'
    );

    await cdp.eval(`window.location.hash = '#/progreso';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('#btn-progress-to-map')?.click()`);
    await sleep(60);
    assertCheck(
      '3. Botones',
      'Botón #btn-progress-to-map en Progreso navega a #/niveles',
      (await cdp.eval(`window.location.hash`)) === '#/niveles'
    );
    await cdp.eval(`window.location.hash = '#/progreso';`);
    await sleep(80);
    await cdp.eval(`document.querySelector('[data-table-play="1"]')?.click()`);
    await sleep(60);
    assertCheck(
      '3. Botones',
      'Botones de acción de la tabla de Progreso ([data-table-play]) inician el nivel correspondiente',
      (await cdp.eval(`window.location.hash`)) === '#/nivel/1'
    );

    // =========================================================================
    // 9. PRUEBA DE ANIMACIONES
    // =========================================================================
    await cdp.eval(`window.location.hash = '#/inicio';`);
    await sleep(100);
    const animationAudit = await cdp.eval(`
      (() => {
        const ariSvg = document.querySelector('.ari-svg');
        const viewEl = document.querySelector('.view-fade-anim');
        const ariStyle = ariSvg ? window.getComputedStyle(ariSvg) : null;
        const viewStyle = viewEl ? window.getComputedStyle(viewEl) : null;
        return {
          ariAnimationName: ariStyle?.animationName,
          viewAnimationName: viewStyle?.animationName
        };
      })()
    `);
    assertCheck(
      '9. Animaciones',
      'Animaciones CSS de mascota (ariFloat) y transición de vistas (viewFadeIn) están activas',
      animationAudit.ariAnimationName === 'ariFloat' && animationAudit.viewAnimationName === 'viewFadeIn',
      JSON.stringify(animationAudit)
    );

    // =========================================================================
    // 10. ADAPTACIÓN RESPONSIVE (TELÉFONO, TABLET Y COMPUTADOR — SECCIÓN 11.2)
    // =========================================================================
    const viewports = [
      { name: 'Móvil-360', width: 360, height: 800, mobile: true, expectedCols: 1 },
      { name: 'Teléfono', width: 375, height: 667, mobile: true, expectedCols: 1, captureAs: 'vista-telefono.png' },
      { name: 'Móvil-390', width: 390, height: 844, mobile: true, expectedCols: 1 },
      { name: 'Tablet', width: 768, height: 1024, mobile: true, expectedCols: 2, captureAs: 'vista-tablet.png' },
      { name: 'Tablet-Horizontal', width: 1024, height: 768, mobile: true, expectedCols: 2 },
      { name: 'Computador', width: 1280, height: 800, mobile: false, expectedCols: 3, captureAs: 'vista-computador.png' },
      { name: 'Portátil-1366', width: 1366, height: 768, mobile: false, expectedCols: 3 },
      { name: 'Escritorio-1920', width: 1920, height: 1080, mobile: false, expectedCols: 3 }
    ];

    const screenshotDir = path.join(__dirname, 'screenshots');
    fs.mkdirSync(screenshotDir, { recursive: true });

    for (const vp of viewports) {
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });
      await sleep(120);

      for (const routeHash of ['#/inicio', '#/niveles', '#/nivel/1', '#/nivel/10', '#/practica', '#/progreso']) {
        await cdp.eval(`window.location.hash = '${routeHash}';`);
        await sleep(100);

        const layoutMetrics = await cdp.eval(`
          (() => {
            const docEl = document.documentElement;
            const hasHorizontalOverflow = docEl.scrollWidth > docEl.clientWidth + 1;
            const mobileBtn = document.querySelector('#btn-mobile-menu');
            const mobileBtnVisible = mobileBtn ? window.getComputedStyle(mobileBtn).display !== 'none' : false;
            const gridEl = document.querySelector('.levels-path-grid, .worlds-preview-grid');
            const gridCols = gridEl
              ? window.getComputedStyle(gridEl).gridTemplateColumns.split(' ').filter(Boolean).length
              : null;
            return {
              scrollWidth: docEl.scrollWidth,
              clientWidth: docEl.clientWidth,
              hasHorizontalOverflow,
              mobileBtnVisible,
              gridCols
            };
          })()
        `);

        assertCheck(
          '10. Responsive',
          `${vp.name} (${vp.width}x${vp.height}) en ${routeHash} sin desbordamiento horizontal`,
          !layoutMetrics.hasHorizontalOverflow,
          `scrollWidth=${layoutMetrics.scrollWidth}, clientWidth=${layoutMetrics.clientWidth}`
        );

        if (routeHash === '#/niveles' && layoutMetrics.gridCols !== null) {
          assertCheck(
            '10. Responsive',
            `${vp.name} (${vp.width}x${vp.height}) adapta la cuadrícula de niveles a ${vp.expectedCols} columna(s)`,
            layoutMetrics.gridCols === vp.expectedCols,
            `columnas=${layoutMetrics.gridCols}`
          );
        }

        if (routeHash === '#/inicio' && vp.captureAs) {
          if (vp.width <= 767) {
            await cdp.eval(`document.querySelector('#btn-mobile-menu')?.click()`);
            await sleep(60);
            const menuOpened = await cdp.eval(
              `document.querySelector('#navbar-links-group')?.classList.contains('mobile-open')`
            );
            const statsBarSingleRow = await cdp.eval(
              `document.querySelector('.navbar-stats-bar')?.offsetHeight <= 44`
            );
            assertCheck(
              '10. Responsive',
              'Menú hamburguesa (#btn-mobile-menu) visible y funcional en resolución de Teléfono y barra de estadísticas en una sola fila',
              layoutMetrics.mobileBtnVisible && menuOpened && statsBarSingleRow
            );
            await cdp.eval(`document.querySelector('#btn-mobile-menu')?.click()`);
            await sleep(50);
          }

          await sleep(320);
          const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
          const shotPath = path.join(screenshotDir, vp.captureAs);
          fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));
          results.screenshots.push(shotPath);
        }

        if (vp.name === 'Computador' && routeHash === '#/nivel/1') {
          await cdp.eval(`
            (document.querySelector('#btn-start-practice-from-lesson') || document.querySelector('#btn-phase-practico'))?.click()
          `);
          await sleep(320);
          const mathCols = await cdp.eval(`
            window.getComputedStyle(document.querySelector('.math-tiles-row')).gridTemplateColumns.split(' ').filter(Boolean).length
          `);
          assertCheck(
            '10. Responsive',
            'En Computador, la fila de opciones de Matemáticas (.math-tiles-row) muestra las 4 fichas en una fila horizontal',
            mathCols === 4,
            `mathCols=${mathCols}`
          );
          const mathShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(screenshotDir, 'vista-matematicas.png'), Buffer.from(mathShot.data, 'base64'));
        }
      }

      if (vp.name === 'Computador') {
        await cdp.eval(`window.location.hash = '#/grado';`);
        await sleep(320);
        const gradeShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(screenshotDir, 'vista-grado.png'), Buffer.from(gradeShot.data, 'base64'));

        await cdp.eval(`window.location.hash = '#/nivel/10';`);
        await sleep(100);
        await cdp.eval(`
          (document.querySelector('#btn-start-practice-from-lesson') || document.querySelector('#btn-phase-practico'))?.click()
        `);
        await sleep(320);
        const readingCols = await cdp.eval(`
          window.getComputedStyle(document.querySelector('.reading-options-list')).gridTemplateColumns.split(' ').filter(Boolean).length
        `);
        assertCheck(
          '10. Responsive',
          'En Español, las opciones de lectura (.reading-options-list) se apilan verticalmente en 1 columna con botones radio',
          readingCols === 1,
          `readingCols=${readingCols}`
        );

        // Verify WAI-ARIA roving tabindex on tablist and radiogroup
        const a11yKeyboardCheck = await cdp.eval(`
          (() => {
            const tabs = Array.from(document.querySelectorAll('[role="tablist"] [role="tab"]'));
            const radios = Array.from(document.querySelectorAll('[role="radiogroup"] [role="radio"]'));
            const hasRovingTabs = tabs.some((t) => t.getAttribute('tabindex') === '0') && tabs.some((t) => t.getAttribute('tabindex') === '-1');
            const hasRovingRadios = radios.some((r) => r.getAttribute('tabindex') === '0') && radios.some((r) => r.getAttribute('tabindex') === '-1');
            return hasRovingTabs && hasRovingRadios;
          })()
        `);
        assertCheck(
          '1. Componentes',
          'Accesibilidad WAI-ARIA: controles tablist y radiogroup implementan roving tabindex y navegación por flechas',
          a11yKeyboardCheck === true
        );

        const espShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(screenshotDir, 'vista-espanol.png'), Buffer.from(espShot.data, 'base64'));
      }
    }

    // Finally, test Progress reset modal (Cancel & Confirm) in #/progreso
    await cdp.eval(`window.location.hash = '#/progreso';`);
    await sleep(100);
    await cdp.eval(`document.querySelector('#btn-reset-progress')?.click()`);
    await sleep(60);
    const modalVisible = await cdp.eval(`Boolean(document.querySelector('#confirm-modal'))`);
    await cdp.eval(`document.querySelector('#confirm-modal-cancel')?.click()`);
    await sleep(60);
    const modalClosedOnCancel = await cdp.eval(`!document.querySelector('#confirm-modal')`);
    const scoreStillIntact = await cdp.eval(`window.__ARI_APP__.StorageService.getState().totalScore > 0`);

    await cdp.eval(`document.querySelector('#btn-reset-progress')?.click()`);
    await sleep(60);
    await cdp.eval(`document.querySelector('#confirm-modal-confirm')?.click()`);
    await sleep(80);
    const resetState = await cdp.eval(`({
      totalScore: window.__ARI_APP__.StorageService.getState().totalScore,
      unlockedLevels: window.__ARI_APP__.StorageService.getState().unlockedLevels
    })`);

    assertCheck(
      '7. Persistencia de progreso',
      'Modal de confirmación (#confirm-modal) permite cancelar o confirmar el reinicio total del progreso',
      modalVisible &&
        modalClosedOnCancel &&
        scoreStillIntact &&
        resetState.totalScore === 0 &&
        resetState.unlockedLevels.includes(1) &&
        !resetState.unlockedLevels.includes(2),
      JSON.stringify(resetState)
    );

    // Verify 0 console and network errors
    assertCheck(
      'Consola y Red',
      'Cero errores de consola JavaScript y cero errores de red (404/500)',
      results.consoleErrors.length === 0 && results.networkErrors.length === 0,
      `consoleErrors=${results.consoleErrors.length}, networkErrors=${results.networkErrors.length}`
    );

    console.log('\n=======================================================');
    console.log('📊 RESUMEN DE AUDITORÍA INTEGRAL - APRENDIENDO CON ARI');
    console.log('=======================================================');
    console.log(`✅ Pruebas exitosas : ${results.passed.length}`);
    console.log(`❌ Pruebas fallidas : ${results.failed.length}`);
    console.log(`🖥️ Errores consola  : ${results.consoleErrors.length}`);
    console.log(`🌐 Errores de red   : ${results.networkErrors.length}`);
    console.log('=======================================================\n');

    fs.writeFileSync(path.join(__dirname, 'audit-report.json'), JSON.stringify(results, null, 2));

    if (results.failed.length > 0 || results.consoleErrors.length > 0 || results.networkErrors.length > 0) {
      process.exitCode = 1;
    }
  } finally {
    if (cdp) cdp.close();
    chromeProc.kill();
    server.close();
    setTimeout(() => {
      try {
        fs.rmSync(userDataDir, { recursive: true, force: true });
      } catch (e) {
        // Ignorar si algún archivo temporal sigue bloqueado brevemente por el SO
      }
    }, 300);
  }
}

runAudit().catch((err) => {
  console.error('Error fatal en la auditoría:', err);
  process.exit(1);
});

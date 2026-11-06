import { SoundService, resolveSoundUrl } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { escapeHtml } from '../utils/escapeHtml.js';
import { renderDonorsPodiumSection, bindDonorsPodiumEvents } from './DonorsPodium.js';

// URL oficial verificada para donaciones directas en PayPal
const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?business=johansttivelinaresb%40gmail.com&no_recurring=0&currency_code=USD';
const PAYPAL_TRANSFER_URL = 'https://www.paypal.com/myaccount/transfer/homepage';

/**
 * Renderiza la vista de donaciones según el método seleccionado:
 * - 'hub': Menú principal con los 3 bloques interactivos para elegir.
 * - 'nequi': Página dedicada para Nequi / Bre-B con QR ampliado y paso a paso.
 * - 'arq': Página dedicada para ARQ con usuario $sttive y guía.
 * - 'paypal': Página dedicada para PayPal con enlace directo oficial corregido.
 */
export function renderDonationsView(method = 'hub') {
  const qrImageUrl = resolveSoundUrl('assets/nequi-qr.jpg');
  const qrSquareUrl = resolveSoundUrl('assets/nequi-qr-square.jpg');

  if (method === 'nequi') {
    return renderNequiDedicatedView(qrImageUrl, qrSquareUrl);
  }
  if (method === 'arq') {
    return renderArqDedicatedView();
  }
  if (method === 'paypal') {
    return renderPaypalDedicatedView();
  }
  if (method === 'podio') {
    return renderDonationsHubView(qrImageUrl);
  }

  return renderDonationsHubView(qrImageUrl);
}

/**
 * HUB PRINCIPAL: Muestra los 3 bloques interactivos para elegir a qué página ir.
 */
function renderDonationsHubView(qrImageUrl) {
  return `
    <section class="donations-view view-fade-anim" data-component="DonationsView" data-view="hub">
      <div class="stage-top-bar">
        <button type="button" class="btn-back-circle" id="btn-donations-back" title="Volver al inicio" aria-label="Volver al inicio">
          ⬅
        </button>
      </div>

      <div class="donations-stage-grid">
        <aside class="donations-mascot-col">
          ${renderAriMascot({
            mood: 'excited',
            message:
              '¡Hola! Tu apoyo voluntario nos ayuda a seguir creando más plataformas educativas gratuitas, sin anuncios y con nuevos juegos para todos los niños.',
            compact: false,
            showGreetButton: false
          })}
        </aside>

        <div class="donations-content-col">
          <div class="purple-ribbon-banner donations-ribbon">
            <h1>Donaciones y Apoyo al Creador</h1>
          </div>

          <div class="donations-hero-card">
            <h2 class="donations-main-heading">
              ¿Quieres apoyar al creador para ver más páginas como esta?
            </h2>
            <p class="donations-intro-text">
              <strong>Aprendiendo con Ari</strong> es un proyecto independiente desarrollado con dedicación para fortalecer el aprendizaje infantil de matemáticas, lectura y razonamiento. Selecciona cualquiera de las opciones siguientes para ver su página completa con código QR ampliado, enlaces directos y datos de envío:
            </p>
            <div class="donations-hero-pill-row">
              <a href="#seccion-podio-donadores" class="donations-hero-podium-btn" id="btn-hero-podium-jump">
                🏆 Ver Podio de Donadores y Agradecimientos 💖
              </a>
            </div>
          </div>

          <div class="donations-cards-grid donations-hub-grid">
            <!-- BLOQUE 1: NEQUI / BRE-B -->
            <article class="donation-method-card donation-card-nequi donation-card-interactive" id="card-nequi" data-navigate="/donaciones/nequi" role="button" tabindex="0" aria-label="Ver detalles y Código QR de Nequi y Bre-B">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-nequi">🟣 Bre-B • Nequi</span>
                <span class="donation-country-tag">🇨🇴 Colombia</span>
              </div>

              <div class="donation-qr-box donation-qr-thumb">
                <img
                  src="${qrImageUrl}"
                  onerror="if (!this.dataset.triedFallback) { this.dataset.triedFallback = '1'; this.src = './src/assets/nequi-qr.jpg'; }"
                  alt="Código QR Bre-B Nequi de Johan Linares"
                  class="donation-qr-image"
                  id="nequi-qr-img"
                  loading="lazy"
                />
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Johan Linares</h3>
                <div class="donation-field-row">
                  <span class="field-label">Llave / Correo:</span>
                  <strong class="field-value" id="val-nequi-llave">johansttivelinaresb@gmail.com</strong>
                </div>
                <p class="donation-instructions">
                  Paga desde <strong>Nequi</strong>, <strong>Bancolombia</strong>, <strong>Daviplata</strong> o cualquier banco con Bre-B.
                </p>
              </div>

              <button
                type="button"
                class="btn-select-method btn-select-nequi"
                data-nav="/donaciones/nequi"
                aria-label="Abrir página dedicada de Nequi"
              >
                🔍 Ver Código QR Grande y Datos ➜
              </button>
            </article>

            <!-- BLOQUE 2: ARQ -->
            <article class="donation-method-card donation-card-arq donation-card-interactive" id="card-arq" data-navigate="/donaciones/arq" role="button" tabindex="0" aria-label="Ver detalles de donación con ARQ">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-arq">🔵 ARQ</span>
                <span class="donation-country-tag">⚡ Dólares Digitales</span>
              </div>

              <div class="donation-icon-hero">
                <div class="arq-symbol-circle">
                  <span>$</span>
                </div>
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Usuario en ARQ</h3>
                <div class="donation-field-row">
                  <span class="field-label">Nombre de usuario:</span>
                  <strong class="field-value arq-username" id="val-arq-user">$sttive</strong>
                </div>
                <p class="donation-instructions">
                  Envía dólares digitales de forma instantánea y sin comisiones intermediarias.
                </p>
              </div>

              <button
                type="button"
                class="btn-select-method btn-select-arq"
                data-nav="/donaciones/arq"
                aria-label="Abrir página dedicada de ARQ"
              >
                🔍 Ver Usuario y Datos de ARQ ➜
              </button>
            </article>

            <!-- BLOQUE 3: PAYPAL -->
            <article class="donation-method-card donation-card-paypal donation-card-interactive" id="card-paypal" data-navigate="/donaciones/paypal" role="button" tabindex="0" aria-label="Ver detalles y donar con PayPal">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-paypal">🔷 PayPal</span>
                <span class="donation-country-tag">🌎 Internacional</span>
              </div>

              <div class="donation-icon-hero">
                <div class="paypal-symbol-circle">
                  <span>🅿️</span>
                </div>
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Johan Sttive Linares</h3>
                <div class="donation-field-row">
                  <span class="field-label">Correo PayPal:</span>
                  <strong class="field-value" id="val-paypal-email">johansttivelinaresb@gmail.com</strong>
                </div>
                <p class="donation-instructions">
                  Acepta tarjetas de crédito, débito y saldo PayPal desde cualquier país del mundo.
                </p>
              </div>

              <button
                type="button"
                class="btn-select-method btn-select-paypal"
                data-nav="/donaciones/paypal"
                aria-label="Abrir página dedicada de PayPal"
              >
                🔍 Ver Datos y Donar con PayPal ➜
              </button>
            </article>
          </div>

          <!-- PODIO DE AGRADECIMIENTO A DONADORES DE CORAZÓN -->
          ${renderDonorsPodiumSection()}

          <div class="donations-footer-actions">
            <button type="button" class="btn-3d-purple btn-lg" id="btn-back-to-adventure">
              🦉 Volver a Aprender y Jugar
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * PÁGINA DEDICADA 1: NEQUI / BRE-B (Con QR Ampliado y Pasos Claros)
 */
function renderNequiDedicatedView(qrImageUrl, qrSquareUrl) {
  return `
    <section class="donations-view view-fade-anim donations-dedicated-view" data-component="DonationsView" data-view="nequi">
      <div class="stage-top-bar donations-subnav-bar">
        <button type="button" class="btn-back-circle" id="btn-back-to-hub" title="Volver a métodos de donación" aria-label="Volver a métodos de donación">
          ⬅
        </button>
        <span class="donations-subnav-label">Opciones de Apoyo / Nequi</span>
      </div>

      <div class="dedicated-wrapper">
        <div class="purple-ribbon-banner donations-ribbon">
          <h1>🟣 Donar con Nequi y Bre-B</h1>
        </div>

        <article class="dedicated-donation-card dedicated-card-nequi">
          <div class="dedicated-header-row">
            <div class="dedicated-brand-pill badge-nequi">
              <span>🟣 Bre-B • Nequi</span>
            </div>
            <span class="dedicated-country-tag">🇨🇴 Válido para toda Colombia (Sin comisiones)</span>
          </div>

          <p class="dedicated-tagline">
            Escanea el código QR desde tu app <strong>Nequi</strong> o mediante <strong>Bre-B</strong> de cualquier entidad financiera en Colombia (Bancolombia, Daviplata, BBVA, etc.).
          </p>

          <div class="nequi-qr-view-tabs" role="tablist" aria-label="Modo de visualización del código QR">
            <button
              type="button"
              class="nequi-view-tab-btn active"
              id="btn-view-voucher"
              data-qr-target="${qrImageUrl}"
            >
              📄 Comprobante Bre-B Oficial
            </button>
            <button
              type="button"
              class="nequi-view-tab-btn"
              id="btn-view-square"
              data-qr-target="${qrSquareUrl}"
            >
              🔍 Solo Código QR Gigante
            </button>
          </div>

          <div class="nequi-qr-showcase">
            <div class="nequi-big-qr-stage">
              <img
                src="${qrImageUrl}"
                onerror="if (!this.dataset.triedFallback) { this.dataset.triedFallback = '1'; this.src = './src/assets/nequi-qr.jpg'; }"
                alt="Código QR Bre-B Nequi de Johan Linares en alta resolución"
                class="nequi-big-qr-img"
                id="nequi-dedicated-qr-img"
              />
            </div>

            <div class="nequi-qr-actions">
              <a
                href="${qrImageUrl}"
                download="QR-Nequi-Johan-Linares.jpg"
                class="btn-download-qr"
                id="btn-download-active-qr"
                title="Descargar imagen del código QR"
              >
                📥 Descargar Imagen QR para tu Celular
              </a>
            </div>
          </div>

          <div class="dedicated-info-box">
            <div class="dedicated-info-item">
              <span class="info-label">Titular de la cuenta:</span>
              <strong class="info-value">Johan Linares</strong>
            </div>

            <div class="dedicated-info-item">
              <span class="info-label">Llave / Correo oficial de Bre-B:</span>
              <strong class="info-value info-highlight">johansttivelinaresb@gmail.com</strong>
            </div>
          </div>

          <div class="dedicated-copy-section">
            <button
              type="button"
              class="btn-donation-copy btn-copy-nequi btn-copy-large"
              data-copy-target="johansttivelinaresb@gmail.com"
              aria-label="Copiar correo o llave de Nequi"
            >
              📋 Copiar Llave (johansttivelinaresb@gmail.com)
            </button>
          </div>

          <div class="dedicated-steps-panel">
            <h3>📖 ¿Cómo hacer tu donación paso a paso?</h3>
            <ol class="donation-steps-list">
              <li>
                <strong>1. Abre tu app financiera:</strong> Ingresa a <em>Nequi</em>, <em>Bancolombia</em>, <em>Daviplata</em> o la app de tu banco favorito en Colombia.
              </li>
              <li>
                <strong>2. Selecciona Escanear QR o Bre-B:</strong> Apunta la cámara al código QR de arriba, o sube la imagen descargada de tu galería.
              </li>
              <li>
                <strong>3. O ingresa la llave manual:</strong> Si prefieres escribirla, usa el correo <code>johansttivelinaresb@gmail.com</code>.
              </li>
              <li>
                <strong>4. Elige el monto y confirma:</strong> Digita la cantidad voluntaria con la que deseas aportar y presiona Enviar. ¡Tu aporte apoya la educación de miles de niños!
              </li>
            </ol>
          </div>

          <div class="dedicated-podium-callout">
            <div class="podium-callout-icon" aria-hidden="true">🏆</div>
            <div class="podium-callout-text">
              <h4>¿Ya realizaste tu donación?</h4>
              <p>¡Queremos darte las gracias de todo corazón! Tu nombre puede brillar en el Podio de Honor de Aprendiendo con Ari.</p>
            </div>
            <button type="button" class="btn-3d-purple btn-goto-podium" data-nav="/donaciones/podio">
              💖 Ver Podio de Donadores
            </button>
          </div>

          <div class="dedicated-bottom-nav">
            <button type="button" class="btn-3d-secondary" id="btn-back-hub-bottom">
              ⬅ Ver otros medios de donación
            </button>
            <button type="button" class="btn-3d-purple" id="btn-back-to-adventure">
              🦉 Volver al Mapa de Niveles
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * PÁGINA DEDICADA 2: ARQ (Dólares Digitales)
 */
function renderArqDedicatedView() {
  return `
    <section class="donations-view view-fade-anim donations-dedicated-view" data-component="DonationsView" data-view="arq">
      <div class="stage-top-bar donations-subnav-bar">
        <button type="button" class="btn-back-circle" id="btn-back-to-hub" title="Volver a métodos de donación" aria-label="Volver a métodos de donación">
          ⬅
        </button>
        <span class="donations-subnav-label">Opciones de Apoyo / ARQ</span>
      </div>

      <div class="dedicated-wrapper">
        <div class="purple-ribbon-banner donations-ribbon">
          <h1>🔵 Donar con ARQ (Dólares Digitales)</h1>
        </div>

        <article class="dedicated-donation-card dedicated-card-arq">
          <div class="dedicated-header-row">
            <div class="dedicated-brand-pill badge-arq">
              <span>🔵 ARQ</span>
            </div>
            <span class="dedicated-country-tag">⚡ Transferencias Instantáneas (USDT / USDC)</span>
          </div>

          <p class="dedicated-tagline">
            Envía tu apoyo en dólares digitales sin comisiones bancarias directamente a nuestro tag de usuario en la aplicación ARQ.
          </p>

          <div class="arq-hero-showcase">
            <div class="arq-symbol-circle arq-symbol-large">
              <span>$</span>
            </div>
            <div class="arq-user-highlight">
              <span class="arq-user-label">Tag de Usuario en ARQ:</span>
              <strong class="arq-user-tag">$sttive</strong>
            </div>
          </div>

          <div class="dedicated-copy-section">
            <button
              type="button"
              class="btn-donation-copy btn-copy-arq btn-copy-large"
              data-copy-target="$sttive"
              aria-label="Copiar usuario $sttive de ARQ"
            >
              📋 Copiar Usuario ($sttive)
            </button>
          </div>

          <div class="dedicated-steps-panel">
            <h3>📖 ¿Cómo enviar tu donación en ARQ?</h3>
            <ol class="donation-steps-list">
              <li>
                <strong>1. Abre la app ARQ:</strong> Inicia sesión en tu cuenta de ARQ en tu teléfono móvil o navegador.
              </li>
              <li>
                <strong>2. Ve a Enviar / Transferir:</strong> Selecciona la opción de enviar saldo a otro usuario.
              </li>
              <li>
                <strong>3. Escribe el tag de usuario:</strong> Ingresa exactamente <code>$sttive</code> en el buscador de destinatario.
              </li>
              <li>
                <strong>4. Ingresa el monto y envía:</strong> Selecciona la cantidad en dólares digitales y confirma la transferencia inmediata.
              </li>
            </ol>
          </div>

          <div class="dedicated-podium-callout">
            <div class="podium-callout-icon" aria-hidden="true">🏆</div>
            <div class="podium-callout-text">
              <h4>¿Ya realizaste tu donación?</h4>
              <p>¡Queremos darte las gracias de todo corazón! Tu nombre puede brillar en el Podio de Honor de Aprendiendo con Ari.</p>
            </div>
            <button type="button" class="btn-3d-purple btn-goto-podium" data-nav="/donaciones/podio">
              💖 Ver Podio de Donadores
            </button>
          </div>

          <div class="dedicated-bottom-nav">
            <button type="button" class="btn-3d-secondary" id="btn-back-hub-bottom">
              ⬅ Ver otros medios de donación
            </button>
            <button type="button" class="btn-3d-purple" id="btn-back-to-adventure">
              🦉 Volver al Mapa de Niveles
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * PÁGINA DEDICADA 3: PAYPAL (Internacional con Redirección Verificada)
 */
function renderPaypalDedicatedView() {
  return `
    <section class="donations-view view-fade-anim donations-dedicated-view" data-component="DonationsView" data-view="paypal">
      <div class="stage-top-bar donations-subnav-bar">
        <button type="button" class="btn-back-circle" id="btn-back-to-hub" title="Volver a métodos de donación" aria-label="Volver a métodos de donación">
          ⬅
        </button>
        <span class="donations-subnav-label">Opciones de Apoyo / PayPal</span>
      </div>

      <div class="dedicated-wrapper">
        <div class="purple-ribbon-banner donations-ribbon">
          <h1>🔷 Donar con PayPal (Internacional)</h1>
        </div>

        <article class="dedicated-donation-card dedicated-card-paypal">
          <div class="dedicated-header-row">
            <div class="dedicated-brand-pill badge-paypal">
              <span>🔷 PayPal Oficial</span>
            </div>
            <span class="dedicated-country-tag">🌎 Disponible en todo el mundo (USD / EUR)</span>
          </div>

          <p class="dedicated-tagline">
            Puedes donar de manera 100% segura mediante tu tarjeta de crédito o débito (Visa, Mastercard, American Express) o utilizando el saldo de tu cuenta PayPal.
          </p>

          <div class="paypal-hero-showcase">
            <div class="paypal-symbol-circle paypal-symbol-large">
              <span>🅿️</span>
            </div>
            <div class="paypal-user-highlight">
              <span class="paypal-user-label">Titular de la cuenta:</span>
              <strong class="paypal-user-name">Johan Sttive Linares Barragan</strong>
              <span class="paypal-user-label" style="margin-top: 0.5rem;">Correo verificado en PayPal:</span>
              <strong class="paypal-user-email">johansttivelinaresb@gmail.com</strong>
            </div>
          </div>

          <div class="paypal-actions-container">
            <!-- Botón 1: Redirección directa al Portal Oficial de Donación de PayPal -->
            <a
              href="${PAYPAL_DONATE_URL}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-donation-direct btn-paypal-primary"
              id="btn-paypal-official-donate"
            >
              💳 Abrir Portal Oficial de Donación en PayPal ↗
            </a>

            <!-- Botón 2: Copiar correo para enviar saldo desde la app -->
            <button
              type="button"
              class="btn-donation-copy btn-copy-paypal btn-copy-large"
              data-copy-target="johansttivelinaresb@gmail.com"
              aria-label="Copiar correo de PayPal"
            >
              📋 Copiar Correo (johansttivelinaresb@gmail.com)
            </button>

            <!-- Botón 3: Enlace alternativo para usuarios con sesión de PayPal abierta -->
            <a
              href="${PAYPAL_TRANSFER_URL}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-donation-subtle"
              id="btn-paypal-transfer"
            >
              ↗️ Abrir PayPal para Transferir Dinero
            </a>
          </div>

          <div class="dedicated-steps-panel">
            <h3>📖 ¿Cómo donar con PayPal?</h3>
            <ol class="donation-steps-list">
              <li>
                <strong>Opción A (Recomendada):</strong> Haz clic en el botón superior <strong>"Abrir Portal Oficial de Donación en PayPal"</strong> para ingresar al formulario oficial de pago donde puedes colocar la cantidad que gustes.
              </li>
              <li>
                <strong>Opción B (Desde tu App de PayPal):</strong> Abre la app de PayPal en tu teléfono, selecciona <em>"Enviar dinero"</em> y escribe el correo <code>johansttivelinaresb@gmail.com</code>.
              </li>
              <li>
                <strong>Sin cuenta previa:</strong> PayPal te permite pagar directamente con tarjeta de crédito o débito internacional sin necesidad de registrarte.
              </li>
            </ol>
          </div>

          <div class="dedicated-podium-callout">
            <div class="podium-callout-icon" aria-hidden="true">🏆</div>
            <div class="podium-callout-text">
              <h4>¿Ya realizaste tu donación?</h4>
              <p>¡Queremos darte las gracias de todo corazón! Tu nombre puede brillar en el Podio de Honor de Aprendiendo con Ari.</p>
            </div>
            <button type="button" class="btn-3d-purple btn-goto-podium" data-nav="/donaciones/podio">
              💖 Ver Podio de Donadores
            </button>
          </div>

          <div class="dedicated-bottom-nav">
            <button type="button" class="btn-3d-secondary" id="btn-back-hub-bottom">
              ⬅ Ver otros medios de donación
            </button>
            <button type="button" class="btn-3d-purple" id="btn-back-to-adventure">
              🦉 Volver al Mapa de Niveles
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * Vincula los eventos de la vista de donaciones.
 */
export function bindDonationsViewEvents(rootElement = document, rerender = null, method = 'hub') {
  bindAriMascotEvents(rootElement);

  // Botón superior de volver al inicio
  const backBtn = rootElement.querySelector('#btn-donations-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/inicio');
    });
  }

  // Botones para volver al hub de donaciones desde una página dedicada
  const backToHubBtns = rootElement.querySelectorAll('#btn-back-to-hub, #btn-back-hub-bottom');
  backToHubBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/donaciones');
    });
  });

  // Selector de visualización de QR en vista Nequi (Comprobante vs Solo QR gigante)
  const qrTabBtns = rootElement.querySelectorAll('.nequi-view-tab-btn');
  const qrImgEl = rootElement.querySelector('#nequi-dedicated-qr-img');
  const qrDownloadEl = rootElement.querySelector('#btn-download-active-qr');
  qrTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetUrl = btn.getAttribute('data-qr-target');
      if (!targetUrl || !qrImgEl) return;
      SoundService.play('click');
      qrTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      qrImgEl.src = targetUrl;
      if (qrDownloadEl) {
        qrDownloadEl.href = targetUrl;
        qrDownloadEl.download = btn.id === 'btn-view-square' ? 'QR-BreB-Nequi-Puro.jpg' : 'QR-Nequi-Johan-Linares.jpg';
      }
    });
  });

  // Botón para volver a aprender y jugar (mapa de niveles)
  const backAdventureBtns = rootElement.querySelectorAll('#btn-back-to-adventure');
  backAdventureBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  });

  // Navegación interactiva desde los bloques del Hub
  const interactiveCards = rootElement.querySelectorAll('.donation-card-interactive, [data-nav]');
  interactiveCards.forEach((elem) => {
    const targetPath = elem.getAttribute('data-navigate') || elem.getAttribute('data-nav');
    if (!targetPath) return;

    elem.addEventListener('click', (e) => {
      // Si el clic fue dentro de un botón de copiado, no navegar
      if (e.target.closest('[data-copy-target]')) return;
      SoundService.play('click');
      Router.navigate(targetPath);
    });

    // Soporte de accesibilidad por teclado (Enter / Espacio)
    if (elem.getAttribute('role') === 'button') {
      elem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          SoundService.play('click');
          Router.navigate(targetPath);
        }
      });
    }
  });

  // Manejo de botones de copiado al portapapeles con confirmación visual
  const copyButtons = rootElement.querySelectorAll('[data-copy-target]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation(); // Evita navegar si está dentro de una tarjeta
      const textToCopy = btn.getAttribute('data-copy-target') || '';
      const originalHtml = btn.innerHTML;

      try {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        SoundService.play('correct');
        btn.innerHTML = '✅ ¡Copiado con éxito!';
        btn.classList.add('copy-success-pulse');

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copy-success-pulse');
        }, 2400);
      } catch (err) {
        SoundService.play('click');
        btn.innerHTML = '✔️ Texto seleccionado';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      }
    });
  });

  // Conectar eventos interactivos del Podio de Donadores (ticker, dar corazón, modal de registro)
  bindDonorsPodiumEvents(rootElement, () => {
    if (typeof rerender === 'function') {
      rerender();
    }
  });

  // Salto suave al podio si se hace clic en el botón del Hero
  const jumpBtn = rootElement.querySelector('#btn-hero-podium-jump');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = rootElement.querySelector('#seccion-podio-donadores');
      if (target) {
        SoundService.play('click');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Si la ruta invocada es directamente /donaciones/podio o /podio, hacer scroll al podio
  if (method === 'podio') {
    setTimeout(() => {
      const target = rootElement.querySelector('#seccion-podio-donadores');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  }
}

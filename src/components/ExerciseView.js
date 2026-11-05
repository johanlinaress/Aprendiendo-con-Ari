import {
  LEVELS_DATA,
  EXPOSITIVE_READINGS_DATA,
  getQuestionsForLevel
} from '../data/levelsData.js';
import { StorageService, isAnswerMatch } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import {
  renderAriMascot,
  bindAriMascotEvents,
  POSITIVE_CORRECT_MESSAGES,
  POSITIVE_RETRY_MESSAGES
} from './AriMascot.js';
import { renderReadingIllustrationSvg } from './Illustrations.js';
import { renderLevelCompleteModal, bindLevelCompleteEvents } from './LevelCompleteModal.js';
import { escapeHtml } from '../utils/escapeHtml.js';

let activeSession = null;
let sessionTimerId = null;

function stopSessionTimer() {
  if (sessionTimerId !== null) {
    clearInterval(sessionTimerId);
    sessionTimerId = null;
  }
}

function syncSessionTimer(rootElement) {
  stopSessionTimer();
  if (!activeSession || !activeSession.timerEnabled || activeSession.isFinished || activeSession.activePhase !== 'practico') {
    return;
  }
  sessionTimerId = setInterval(() => {
    if (!activeSession || !activeSession.timerEnabled || activeSession.isFinished) {
      stopSessionTimer();
      return;
    }
    activeSession.timerSeconds += 1;
    const timerBtnEl = rootElement.querySelector('#btn-toggle-timer');
    if (timerBtnEl) {
      timerBtnEl.textContent = `⏱️ ${activeSession.timerSeconds}s`;
    }
  }, 1000);
}

function highlightKeywordsHtml(rawText, keywords = []) {
  let html = escapeHtml(rawText);
  if (!Array.isArray(keywords) || keywords.length === 0) return html;

  for (const kw of keywords) {
    if (!kw || !kw.word) continue;
    const escapedWord = escapeHtml(kw.word);
    const escapedDef = escapeHtml(kw.definition || '');
    const regex = new RegExp(`(${escapedWord})`, 'i');
    html = html.replace(
      regex,
      `<button type="button" class="keyword-highlight-chip" data-keyword-word="${escapedWord}" data-keyword-def="${escapedDef}" title="${escapedDef}">$1 ✨</button>`
    );
  }
  return html;
}

export function getActiveSession() {
  return activeSession;
}

export function initExerciseSession(levelId, options = {}) {
  const id = Number(levelId);
  const state = StorageService.getState();
  const level = LEVELS_DATA.find((l) => l.id === id) || null;

  const savedSession = !options.forceFresh
    ? StorageService.getExerciseSession(id, state.selectedGrade)
    : null;

  let questions = [];
  if (savedSession && Array.isArray(savedSession.questionIds) && savedSession.questionIds.length > 0) {
    const fullPool = getQuestionsForLevel(level, state.selectedGrade);
    const restored = savedSession.questionIds
      .map((qid) => fullPool.find((q) => q.id === qid))
      .filter(Boolean);
    questions = restored.length > 0 ? restored : fullPool.slice(0, 5);
  } else if (options.deterministic) {
    const fullPool = getQuestionsForLevel(level, state.selectedGrade);
    questions = fullPool.slice(0, 5);
    StorageService.recordLevelQuestionsSeen(id, questions.map((q) => q.id));
  } else {
    const lastSeenIds = StorageService.getLastSeenQuestionIds(id);
    questions = getQuestionsForLevel(level, state.selectedGrade, {
      count: 5,
      shuffle: true,
      excludeIds: options.forceFresh || options.isRetry ? lastSeenIds : []
    });
    StorageService.recordLevelQuestionsSeen(id, questions.map((q) => q.id));
  }

  StorageService.markLevelInProgress(id);

  const safeQuestionIndex =
    savedSession &&
    Number.isInteger(savedSession.questionIndex) &&
    savedSession.questionIndex >= 0 &&
    savedSession.questionIndex < questions.length
      ? savedSession.questionIndex
      : 0;

  activeSession = {
    levelId: id,
    grade: state.selectedGrade,
    level,
    questions,
    activePhase: options.initialPhase || savedSession?.activePhase || 'aprendo', // 'aprendo' | 'lectura' | 'practico'
    questionIndex: safeQuestionIndex,
    selectedOption: null,
    typedAnswer: '',
    orderedTokens: [],
    hasChecked: false,
    isCurrentCorrect: false,
    lastPointsEarned: 0,
    usedHint: Boolean(savedSession?.usedHint),
    correctCount: Number(savedSession?.correctCount) || 0,
    sessionScore: Number(savedSession?.sessionScore) || 0,
    isFinished: false,
    completionResult: null,
    // Estado para Textos Expositivos Interactivos (Sección 6.7)
    readingTopicIndex: Number(savedSession?.readingTopicIndex) || 0,
    readingStarted: Boolean(savedSession?.readingStarted),
    readingFragmentIndex: Number(savedSession?.readingFragmentIndex) || 0,
    selectedKeywordInfo: null,
    explorationAnswer: null,
    // Cronómetro opcional sin penalización (Sección 5.5 Actividad D)
    timerEnabled: false,
    timerSeconds: 0
  };
  StorageService.saveExerciseSession(activeSession);
  return activeSession;
}

function renderPhaseNavigationBar(level) {
  const currentPhase = activeSession?.activePhase || 'practico';
  const isExpositiveUnit = Boolean(level.isInteractiveExpositiveUnit);

  return `
    <div class="unit-phases-nav" role="tablist" aria-label="Fases de aprendizaje de la unidad">
      <button
        type="button"
        role="tab"
        id="btn-phase-aprendo"
        class="unit-phase-tab ${currentPhase === 'aprendo' ? 'active' : ''}"
        data-phase-tab="aprendo"
        aria-selected="${currentPhase === 'aprendo' ? 'true' : 'false'}"
      >
        📘 1. Aprendo
      </button>

      ${
        isExpositiveUnit
          ? `<button
              type="button"
              role="tab"
              id="btn-phase-lectura"
              class="unit-phase-tab ${currentPhase === 'lectura' ? 'active' : ''}"
              data-phase-tab="lectura"
              aria-selected="${currentPhase === 'lectura' ? 'true' : 'false'}"
            >
              📖 2. Lectura Interactiva
            </button>`
          : ''
      }

      <button
        type="button"
        role="tab"
        id="btn-phase-practico"
        class="unit-phase-tab ${currentPhase === 'practico' ? 'active' : ''}"
        data-phase-tab="practico"
        aria-selected="${currentPhase === 'practico' ? 'true' : 'false'}"
      >
        ✏️ ${isExpositiveUnit ? '3. Practico y Demuestro' : '2. Practico y Demuestro'} (${activeSession.questionIndex + 1}/${activeSession.questions.length})
      </button>
    </div>
  `;
}

function renderLessonPhaseView(level, state) {
  const lesson = level.lesson || {
    title: `Aprendo con Ari: ${level.title}`,
    summary3: level.description,
    summary4: level.description,
    steps: ['Lee cada ejercicio con calma y comprueba tu respuesta.'],
    exampleVisual: level.title
  };

  const isGrade4 = String(state.selectedGrade) === '4';
  const summaryText = isGrade4 ? lesson.summary4 || lesson.summary3 : lesson.summary3;
  const exampleVisual = isGrade4
    ? lesson.exampleVisual4 || lesson.exampleVisual
    : lesson.exampleVisual3 || lesson.exampleVisual;
  const stepsList = isGrade4 ? lesson.steps4 || lesson.steps : lesson.steps3 || lesson.steps;

  return `
    <div class="lesson-aprendo-card view-fade-anim" id="lesson-aprendo-panel">
      <div class="lesson-aprendo-grid">
        <div class="lesson-ari-col">
          ${renderAriMascot({
            mood: 'explaining',
            message: `¡Bienvenido a «${level.title}» para ${state.selectedGrade}° Grado! Primero repasemos el tema juntos.`,
            compact: false,
            showGreetButton: true
          })}
        </div>

        <div class="lesson-content-col">
          <span class="hero-pill">📘 Fase 1: Aprendo • ${state.selectedGrade}° Grado</span>
          <h2 class="lesson-title">${escapeHtml(lesson.title)}</h2>
          <p class="lesson-summary-text" id="lesson-summary-body">${escapeHtml(summaryText)}</p>

          <div class="lesson-example-highlight">
            <span class="lesson-example-tag">✨ Ejemplo de Ari (${state.selectedGrade}° Grado):</span>
            <strong class="lesson-example-visual" id="lesson-example-visual">${escapeHtml(exampleVisual)}</strong>
          </div>

          <ul class="lesson-steps-list" id="lesson-steps-list">
            ${(stepsList || []).map((st) => `<li>${escapeHtml(st)}</li>`).join('')}
          </ul>

          <div class="lesson-actions-row">
            <button type="button" class="btn-listen-purple" id="btn-listen-lesson">
              🔊 Escuchar Explicación
            </button>
            <button type="button" class="btn-3d-orange" id="btn-start-practice-from-lesson">
              ▶️ ¡Ir a Practicar!
            </button>
            <button type="button" class="btn btn-outline btn-sm" id="btn-skip-explanation">
              ⏭️ Saltar explicación
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderExpositiveInteractiveViewer() {
  const reading =
    EXPOSITIVE_READINGS_DATA[activeSession.readingTopicIndex] || EXPOSITIVE_READINGS_DATA[0];
  const totalFragments = reading.fragments.length;
  const fragIndex = Math.min(activeSession.readingFragmentIndex, totalFragments - 1);
  const currentFragment = reading.fragments[fragIndex];

  return `
    <div class="expositive-viewer-card view-fade-anim" id="expositive-interactive-viewer">
      <!-- Selector de Temáticas Expositivas (Sección 6.7) -->
      <div class="expositive-topics-bar" role="tablist" aria-label="Temas de textos expositivos">
        ${EXPOSITIVE_READINGS_DATA.map(
          (item, idx) => `
            <button
              type="button"
              role="tab"
              aria-selected="${idx === activeSession.readingTopicIndex ? 'true' : 'false'}"
              class="expositive-topic-pill ${idx === activeSession.readingTopicIndex ? 'active' : ''}"
              data-reading-topic-index="${idx}"
              id="btn-reading-topic-${idx}"
            >
              📘 ${escapeHtml(item.title)}
            </button>
          `
        ).join('')}
      </div>

      ${
        !activeSession.readingStarted
          ? `
            <!-- A. PORTADA ILUSTRADA (Sección 6.7.A) -->
            <div class="expositive-cover-box" id="expositive-cover-box">
              <div class="expositive-cover-art">
                ${renderReadingIllustrationSvg(reading.illustration)}
              </div>
              <div class="expositive-cover-info">
                <span class="hero-pill">📖 Portada Ilustrada • Texto Expositivo</span>
                <h2 class="expositive-cover-title">${escapeHtml(reading.title)}</h2>
                <p class="expositive-cover-summary">${escapeHtml(reading.coverSummary)}</p>
                <div class="expositive-cover-actions">
                  <button type="button" class="btn-3d-orange" id="btn-start-expositive-reading">
                    📖 Comenzar a leer
                  </button>
                  <button type="button" class="btn-3d-purple" id="btn-go-to-evaluation">
                    ✏️ Ir a las Preguntas
                  </button>
                </div>
              </div>
            </div>
          `
          : `
            <!-- B. LECTURA INTERACTIVA POR FRAGMENTOS + C. EXPLORACIÓN (Sección 6.7.B y 6.7.C) -->
            <div class="expositive-fragment-stage" id="expositive-fragment-stage">
              <div class="expositive-fragment-header">
                <span class="hero-pill">Fragmento ${fragIndex + 1} de ${totalFragments}</span>
                <div class="fragment-nav-btns">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    id="btn-prev-fragment"
                    ${fragIndex === 0 ? 'disabled' : ''}
                  >
                    ⬅ Anterior
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    id="btn-next-fragment"
                    ${fragIndex >= totalFragments - 1 ? 'disabled' : ''}
                  >
                    Siguiente fragmento ➜
                  </button>
                </div>
              </div>

              <div class="expositive-fragment-body">
                <div class="expositive-fragment-text-col">
                  <h3 class="expositive-fragment-heading">${escapeHtml(currentFragment.heading)}</h3>
                  <p class="expositive-fragment-paragraph" id="expositive-fragment-text">
                    ${highlightKeywordsHtml(currentFragment.text, currentFragment.keywords)}
                  </p>
                  <p class="keyword-tip-caption">💡 Toca las palabras resaltadas con ✨ para descubrir su significado.</p>

                  ${
                    activeSession.selectedKeywordInfo
                      ? `<div class="keyword-definition-box" id="keyword-definition-box" role="status">
                          <strong>🔍 ${escapeHtml(activeSession.selectedKeywordInfo.word)}:</strong>
                          <span>${escapeHtml(activeSession.selectedKeywordInfo.definition)}</span>
                        </div>`
                      : ''
                  }

                  <div class="expositive-audio-row">
                    <button type="button" class="btn-listen-purple" id="btn-listen-fragment">
                      🔊 Escuchar fragmento
                    </button>
                    <button type="button" class="btn btn-outline btn-sm" id="btn-back-to-cover">
                      🖼️ Ver Portada
                    </button>
                  </div>
                </div>

                <div class="expositive-fragment-art-col">
                  ${renderReadingIllustrationSvg(reading.illustration)}
                </div>
              </div>

              <!-- C. Pregunta de exploración durante la lectura -->
              <div class="expositive-exploration-box" id="expositive-exploration-box">
                <h4>🧭 Exploración durante la lectura</h4>
                <p class="exploration-prompt">${escapeHtml(reading.explorationQuestion.prompt)}</p>
                <div class="exploration-options-row">
                  ${reading.explorationQuestion.options
                    .map((opt, idx) => {
                      const chosen = activeSession.explorationAnswer === opt;
                      const isCorrect = opt === reading.explorationQuestion.correctAnswer;
                      let cls = '';
                      if (activeSession.explorationAnswer !== null) {
                        if (isCorrect) cls = 'option-correct';
                        else if (chosen) cls = 'option-wrong';
                      }
                      return `
                        <button
                          type="button"
                          class="btn btn-sm exploration-opt-btn ${cls}"
                          id="btn-exploration-opt-${idx}"
                          data-exploration-opt="${escapeHtml(opt)}"
                        >
                          ${escapeHtml(opt)}
                        </button>
                      `;
                    })
                    .join('')}
                </div>
                ${
                  activeSession.explorationAnswer !== null
                    ? `<p class="exploration-feedback-msg" id="exploration-feedback-msg">
                        ${
                          activeSession.explorationAnswer === reading.explorationQuestion.correctAnswer
                            ? `✅ ${escapeHtml(reading.explorationQuestion.feedback)}`
                            : `💡 Intenta con «${escapeHtml(reading.explorationQuestion.correctAnswer)}»: ${escapeHtml(reading.explorationQuestion.feedback)}`
                        }
                      </p>`
                    : ''
                }
              </div>

              <div class="expositive-footer-cta">
                <button type="button" class="btn-3d-orange" id="btn-go-to-evaluation">
                  ✏️ Responder Evaluación de Comprensión ➜
                </button>
              </div>
            </div>
          `
      }
    </div>
  `;
}

function renderInteractiveModalityHelper(currentQuestion) {
  const modality = currentQuestion.interactionType || 'multiple_choice';

  if (modality === 'fill_blank') {
    return `
      <div class="modality-helper-box fill-blank-box" data-modality="fill_blank">
        <label for="input-fill-blank" class="modality-helper-label">
          ✍️ Completa el espacio escribiendo tu respuesta o selecciona una ficha abajo:
        </label>
        <div class="fill-blank-controls">
          <input
            type="text"
            id="input-fill-blank"
            class="input-fill-blank"
            placeholder="${escapeHtml(currentQuestion.inputPlaceholder || 'Escribe tu respuesta aquí...')}"
            value="${escapeHtml(activeSession.typedAnswer || activeSession.selectedOption || '')}"
            ${activeSession.hasChecked ? 'disabled' : ''}
          />
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            id="btn-apply-blank"
            ${activeSession.hasChecked ? 'disabled' : ''}
          >
            ✔️ Usar texto
          </button>
        </div>
      </div>
    `;
  }

  if (modality === 'drag_drop') {
    const slotValue = activeSession.selectedOption || 'Arrastra o toca una ficha aquí';
    return `
      <div class="modality-helper-box drag-drop-box" data-modality="drag_drop">
        <p class="modality-helper-label">🖐️ Arrastra una ficha hacia la casilla o tócala directamente:</p>
        <div
          class="drop-target-zone ${activeSession.selectedOption ? 'has-dropped-item' : ''}"
          id="drop-target-zone"
          role="region"
          aria-label="Zona para colocar la respuesta"
        >
          <span class="drop-target-value" id="drop-target-value">${escapeHtml(slotValue)}</span>
        </div>
      </div>
    `;
  }

  if (modality === 'ordering' && Array.isArray(currentQuestion.itemsToOrder)) {
    return `
      <div class="modality-helper-box ordering-box" data-modality="ordering">
        <p class="modality-helper-label">🔢 Elementos para ordenar: <strong>${currentQuestion.itemsToOrder.map(escapeHtml).join(' • ')}</strong></p>
      </div>
    `;
  }

  if (modality === 'matching' && Array.isArray(currentQuestion.pairs)) {
    return `
      <div class="modality-helper-box matching-box" data-modality="matching">
        <p class="modality-helper-label">🔗 Relaciona cada concepto con su pareja correspondiente:</p>
        <div class="matching-pairs-preview">
          ${currentQuestion.pairs
            .map(
              (p) =>
                `<span class="matching-pair-chip"><strong>${escapeHtml(p.left)}</strong> ↔️ ${escapeHtml(p.right)}</span>`
            )
            .join('')}
        </div>
      </div>
    `;
  }

  return '';
}

function renderExerciseFeedbackBanner(currentQuestion, session, positiveCorrectPhrase, positiveRetryPhrase) {
  if (!session.hasChecked) return '';

  if (session.isCurrentCorrect) {
    return `
      <div class="feedback-banner feedback-success" id="exercise-feedback-box" role="status" aria-live="polite">
        <div class="feedback-header">
          <span class="feedback-icon">🎉</span>
          <strong>${positiveCorrectPhrase} ¡Respuesta Correcta! (+${session.lastPointsEarned} pts)</strong>
        </div>
        <p class="feedback-explanation">${escapeHtml(currentQuestion.explanation)}</p>
      </div>
    `;
  }

  const selectedDisplay = session.selectedOption || session.typedAnswer || 'Sin respuesta seleccionada';

  return `
    <div class="feedback-banner feedback-error" id="exercise-feedback-box" role="status" aria-live="polite">
      <div class="feedback-header">
        <span class="feedback-icon">❌</span>
        <strong>${positiveRetryPhrase} ¡Analicemos juntos qué pasó!</strong>
      </div>
      <div class="feedback-comparison-row">
        <div class="feedback-choice-bad">
          <span class="choice-tag">Tu selección:</span>
          <span class="choice-value">«${escapeHtml(selectedDisplay)}»</span>
        </div>
        <div class="feedback-choice-good">
          <span class="choice-tag">Respuesta correcta:</span>
          <span class="choice-value">«${escapeHtml(currentQuestion.correctAnswer)}»</span>
        </div>
      </div>
      <div class="feedback-pedagogical-tip">
        <span class="tip-icon">💡</span>
        <div class="tip-content">
          <strong>¿Por qué es así? Aprendo del error con Ari:</strong>
          <p class="feedback-explanation">${escapeHtml(currentQuestion.explanation)}</p>
          ${currentQuestion.hint ? `<p class="feedback-hint-ref">🔑 <em>Pista para recordar: ${escapeHtml(currentQuestion.hint)}</em></p>` : ''}
        </div>
      </div>
    </div>
  `;
}

export function renderExerciseView(levelId, preserveSession = false) {
  const id = Number(levelId);
  const level = LEVELS_DATA.find((l) => l.id === id);

  if (!level) {
    return `
      <section class="exercise-guard-view view-fade-anim" data-component="ExerciseView" data-status="not-found">
        <div class="guard-card">
          <div class="guard-icon">🔍</div>
          <h2>Nivel no encontrado</h2>
          <p>El nivel solicitado (${id}) no existe en el mapa de Aprendiendo con Ari.</p>
          <button type="button" class="btn btn-primary btn-lg" id="btn-back-map-invalid">
            🗺️ Volver al Mapa de Niveles
          </button>
        </div>
      </section>
    `;
  }

  if (!StorageService.isLevelUnlocked(id)) {
    const fallbackLevelId =
      level.requiredLevel && StorageService.isLevelUnlocked(level.requiredLevel)
        ? level.requiredLevel
        : StorageService.getNextPlayableLevelForSubject(level.subject);
    return `
      <section class="exercise-guard-view view-fade-anim" data-component="ExerciseView" data-status="locked">
        <div class="guard-card">
          <div class="guard-icon">🔒</div>
          <h2>Nivel ${level.id} Bloqueado: ${escapeHtml(level.title)}</h2>
          <p>
            Para jugar esta unidad, primero debes superar el <strong>Nivel ${level.requiredLevel}</strong> alcanzando al menos un <strong>70%</strong> de respuestas correctas.
          </p>
          <div class="guard-mascot">
            ${renderAriMascot({
              mood: 'encouraging',
              message: `¡Paso a paso llegaremos lejos! Superemos primero el Nivel ${level.requiredLevel} con 70% o más para abrir este candado 🔓.`,
              compact: true,
              showGreetButton: false
            })}
          </div>
          <div class="guard-actions">
            <button type="button" class="btn btn-primary btn-lg" id="btn-guard-play-available" data-target-level="${fallbackLevelId}">
              ▶️ Ir al Nivel ${fallbackLevelId} Disponible
            </button>
            <button type="button" class="btn btn-outline btn-lg" id="btn-guard-back-map">
              🗺️ Volver al Mapa
            </button>
          </div>
        </div>
      </section>
    `;
  }

  const state = StorageService.getState();
  if (
    !preserveSession ||
    !activeSession ||
    activeSession.levelId !== id ||
    activeSession.grade !== state.selectedGrade
  ) {
    initExerciseSession(id);
  }

  if (activeSession.isFinished && activeSession.completionResult) {
    return renderLevelCompleteModal({
      level,
      correctCount: activeSession.correctCount,
      totalQuestions: activeSession.questions.length,
      result: activeSession.completionResult
    });
  }

  const totalQuestions = activeSession.questions.length;
  const currentQuestion = activeSession.questions[activeSession.questionIndex];
  const progressPercent = Math.round(
    ((activeSession.questionIndex + (activeSession.hasChecked ? 1 : 0)) / totalQuestions) * 100
  );

  const positiveCorrectPhrase =
    POSITIVE_CORRECT_MESSAGES[activeSession.questionIndex % POSITIVE_CORRECT_MESSAGES.length];
  const positiveRetryPhrase =
    POSITIVE_RETRY_MESSAGES[activeSession.questionIndex % POSITIVE_RETRY_MESSAGES.length];

  let ariMood = 'happy';
  let ariMessage =
    currentQuestion.ariTip ||
    `Pregunta ${activeSession.questionIndex + 1} de ${totalQuestions}: Selecciona o escribe la respuesta correcta.`;

  if (activeSession.usedHint && !activeSession.hasChecked) {
    ariMood = 'thinking';
    ariMessage = `💡 Pista de Ari: ${currentQuestion.hint}`;
  } else if (activeSession.hasChecked) {
    if (activeSession.isCurrentCorrect) {
      ariMood = 'celebrating';
      ariMessage = `🎉 ${positiveCorrectPhrase} +${activeSession.lastPointsEarned} pts. ${currentQuestion.explanation}`;
    } else {
      ariMood = 'encouraging';
      ariMessage = `💪 ${positiveRetryPhrase} La respuesta correcta es «${currentQuestion.correctAnswer}». ${currentQuestion.explanation}`;
    }
  }

  const isLastQuestion = activeSession.questionIndex === totalQuestions - 1;
  const isReadingMode = currentQuestion.type === 'reading';
  const modality = currentQuestion.interactionType || 'multiple_choice';

  return `
    <section
      class="exercise-view view-fade-anim ${isReadingMode ? 'exercise-mode-reading' : 'exercise-mode-math'}"
      data-component="ExerciseView"
      data-status="playing"
      data-level-id="${level.id}"
      data-grade="${state.selectedGrade}"
      data-modality="${modality}"
    >
      <!-- Barra Superior Morada estilo Juego -->
      <div class="game-unit-header">
        <div class="unit-header-left">
          <button type="button" class="btn-back-circle" id="btn-exit-level" title="Volver al Mapa de Niveles" aria-label="Volver al Mapa de Niveles">
            ⬅
          </button>
          <div>
            <h1 class="unit-header-title">${escapeHtml(level.unitLabel || `Nivel ${level.id}: ${level.title}`)}</h1>
            <small class="unit-header-grade-badge">🎓 ${state.selectedGrade}° Grado de Primaria</small>
          </div>
        </div>

        <div class="unit-header-right">
          ${
            level.hasOptionalTimer
              ? `<button
                  type="button"
                  class="unit-pill-timer ${activeSession.timerEnabled ? 'timer-active' : ''}"
                  id="btn-toggle-timer"
                  title="Desafío contrarreloj opcional sin penalización"
                >
                  ⏱️ ${activeSession.timerEnabled ? `${activeSession.timerSeconds}s` : 'Reloj Opcional'}
                </button>`
              : ''
          }
          <span class="unit-pill-star" title="Puntos ganados en este nivel">
            ⭐ <strong id="exercise-session-score">${activeSession.sessionScore}</strong>
          </span>
          <span class="unit-pill-streak" title="Racha actual">
            🔥 <strong id="exercise-streak">${state.currentStreak}</strong>
          </span>
        </div>
      </div>

      <!-- Pestañas de las 3 Etapas: 1. Aprendo | Lectura Interactiva | 2 y 3. Practico y Demuestro -->
      ${renderPhaseNavigationBar(level)}

      ${
        activeSession.activePhase === 'aprendo'
          ? renderLessonPhaseView(level, state)
          : activeSession.activePhase === 'lectura'
          ? renderExpositiveInteractiveViewer()
          : `
            <!-- Barra de Avance de Pregunta -->
            <div class="exercise-progress-wrapper">
              <div class="progress-label-row">
                <span id="exercise-step-label">Pregunta ${activeSession.questionIndex + 1} de ${totalQuestions} (${state.selectedGrade}° Grado)</span>
                <span id="exercise-progress-percent">${progressPercent}% completado (Mínimo 70% para aprobar)</span>
              </div>
              <div class="progress-track" role="progressbar" aria-label="Avance de preguntas de la unidad" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-fill" id="exercise-progress-bar" style="width: ${progressPercent}%"></div>
              </div>
            </div>

            ${
              isReadingMode
                ? `
                  <!-- DISEÑO ESPAÑOL / COMPRENSIÓN LECTORA (Panel 5 de la imagen) -->
                  <div class="reading-stage-grid" id="exercise-question-card" data-question-id="${currentQuestion.id}">
                    <!-- Tarjeta Izquierda: Texto Expositivo + Ilustración + Botón Escuchar -->
                    <article class="reading-passage-card">
                      <div class="reading-passage-content">
                        <div class="reading-text-col">
                          <h2 class="reading-passage-title">${escapeHtml(currentQuestion.readingTitle || level.title)}</h2>
                          <p class="reading-passage-body" id="reading-passage-text">
                            ${escapeHtml(currentQuestion.readingText || currentQuestion.visual)}
                          </p>
                          <div class="reading-card-btns-row">
                            <button type="button" class="btn-listen-purple" id="btn-listen-reading">
                              🔊 Escuchar
                            </button>
                            ${
                              level.isInteractiveExpositiveUnit
                                ? `<button type="button" class="btn btn-outline btn-sm" id="btn-open-interactive-reading">
                                    📖 Lectura Interactiva Completa
                                  </button>`
                                : ''
                            }
                          </div>
                        </div>
                        <div class="reading-art-col">
                          ${renderReadingIllustrationSvg(currentQuestion.illustration || 'solar')}
                        </div>
                      </div>
                    </article>

                    <!-- Tarjeta Derecha: Pregunta, Modalidad Interactiva, Opciones y Botón Siguiente -->
                    <article class="reading-question-card ${activeSession.hasChecked ? (activeSession.isCurrentCorrect ? 'card-correct-anim' : 'card-wrong-anim') : ''}">
                      <h2 class="reading-question-prompt" id="exercise-prompt">${escapeHtml(currentQuestion.prompt)}</h2>

                      ${renderInteractiveModalityHelper(currentQuestion)}

                      <div class="options-grid reading-options-list" role="radiogroup" aria-labelledby="exercise-prompt">
                        ${currentQuestion.options
                          .map((opt, idx) => {
                            const isSelected = isAnswerMatch(activeSession.selectedOption, opt);
                            let stateClass = '';
                            if (activeSession.hasChecked) {
                              if (isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                                stateClass = 'option-correct pulse-correct-anim';
                              } else if (isSelected && !isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                                stateClass = 'option-wrong shake-anim';
                              }
                            } else if (isSelected) {
                              stateClass = 'option-selected';
                            }

                            return `
                              <button
                                type="button"
                                id="option-btn-${idx}"
                                class="option-btn reading-radio-btn ${stateClass}"
                                data-option-index="${idx}"
                                data-option-value="${escapeHtml(opt)}"
                                draggable="${modality === 'drag_drop' && !activeSession.hasChecked ? 'true' : 'false'}"
                                role="radio"
                                aria-checked="${isSelected ? 'true' : 'false'}"
                                ${activeSession.hasChecked ? 'disabled' : ''}
                              >
                                <span class="radio-circle-indicator"></span>
                                <span class="option-text">${escapeHtml(opt)}</span>
                              </button>
                            `;
                          })
                          .join('')}
                      </div>

                      ${
                        activeSession.usedHint
                          ? `<div class="hint-banner" id="exercise-hint-box" role="note">
                              <strong>💡 Pista de Ari:</strong> ${escapeHtml(currentQuestion.hint)}
                            </div>`
                          : ''
                      }

                      ${renderExerciseFeedbackBanner(currentQuestion, activeSession, positiveCorrectPhrase, positiveRetryPhrase)}

                      <div class="exercise-actions-footer">
                        <button
                          type="button"
                          class="btn btn-hint btn-sm"
                          id="btn-hint"
                          ${activeSession.hasChecked || activeSession.usedHint ? 'disabled' : ''}
                        >
                          💡 ${activeSession.usedHint ? 'Pista Mostrada' : 'Pista'}
                        </button>

                        ${
                          !activeSession.hasChecked
                            ? `<button
                                type="button"
                                class="btn-3d-purple"
                                id="btn-check-answer"
                                ${activeSession.selectedOption === null ? 'disabled' : ''}
                              >
                                Comprobar ➜
                              </button>`
                            : `<button
                                type="button"
                                class="btn-3d-purple"
                                id="btn-next-question"
                              >
                                ${isLastQuestion ? 'Ver Resultados ➜' : 'Siguiente ➜'}
                              </button>`
                        }
                      </div>
                    </article>
                  </div>

                  <div class="reading-ari-helper">
                    ${renderAriMascot({
                      mood: ariMood,
                      message: ariMessage,
                      compact: true,
                      showGreetButton: true
                    })}
                  </div>
                `
                : `
                  <!-- DISEÑO MATEMÁTICAS (Panel 4 de la imagen: Ari + Pizarra 245 + 132 = ? + 4 fichas + Bloques 1-2-3) -->
                  <div class="math-stage-grid" id="exercise-question-card" data-question-id="${currentQuestion.id}">
                    <aside class="math-ari-col">
                      ${renderAriMascot({
                        mood: ariMood,
                        message: ariMessage,
                        compact: false,
                        showGreetButton: true
                      })}
                    </aside>

                    <div class="math-board-col">
                      <div class="math-equation-board ${activeSession.hasChecked ? (activeSession.isCurrentCorrect ? 'card-correct-anim' : 'card-wrong-anim') : ''}">
                        <h2 class="math-equation-text" id="exercise-prompt">${escapeHtml(currentQuestion.prompt)}</h2>
                      </div>

                      ${renderInteractiveModalityHelper(currentQuestion)}

                      <div class="options-grid math-tiles-row" role="radiogroup" aria-labelledby="exercise-prompt">
                        ${currentQuestion.options
                          .map((opt, idx) => {
                            const isSelected = isAnswerMatch(activeSession.selectedOption, opt);
                            let stateClass = '';
                            if (activeSession.hasChecked) {
                              if (isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                                stateClass = 'option-correct pulse-correct-anim';
                              } else if (isSelected && !isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                                stateClass = 'option-wrong shake-anim';
                              }
                            } else if (isSelected) {
                              stateClass = 'option-selected';
                            }

                            return `
                              <button
                                type="button"
                                id="option-btn-${idx}"
                                class="option-btn math-tile-btn ${stateClass}"
                                data-option-index="${idx}"
                                data-option-value="${escapeHtml(opt)}"
                                draggable="${modality === 'drag_drop' && !activeSession.hasChecked ? 'true' : 'false'}"
                                role="radio"
                                aria-checked="${isSelected ? 'true' : 'false'}"
                                ${activeSession.hasChecked ? 'disabled' : ''}
                              >
                                <span class="option-text">${escapeHtml(opt)}</span>
                              </button>
                            `;
                          })
                          .join('')}
                      </div>

                      ${
                        activeSession.usedHint
                          ? `<div class="hint-banner" id="exercise-hint-box" role="note">
                              <strong>💡 Pista de Ari:</strong> ${escapeHtml(currentQuestion.hint)}
                            </div>`
                          : ''
                      }

                      ${renderExerciseFeedbackBanner(currentQuestion, activeSession, positiveCorrectPhrase, positiveRetryPhrase)}

                      <div class="exercise-actions-footer math-actions-bar">
                        <button
                          type="button"
                          class="btn btn-hint"
                          id="btn-hint"
                          ${activeSession.hasChecked || activeSession.usedHint ? 'disabled' : ''}
                        >
                          💡 ${activeSession.usedHint ? 'Pista Mostrada' : 'Pedir Pista a Ari'}
                        </button>

                        ${
                          !activeSession.hasChecked
                            ? `<button
                                type="button"
                                class="btn-3d-purple btn-lg"
                                id="btn-check-answer"
                                ${activeSession.selectedOption === null ? 'disabled' : ''}
                              >
                                ✅ Comprobar Respuesta
                              </button>`
                            : `<button
                                type="button"
                                class="btn-3d-orange btn-lg"
                                id="btn-next-question"
                              >
                                ${isLastQuestion ? '🏁 Ver Resultados del Nivel' : 'Siguiente Pregunta ➜'}
                              </button>`
                        }
                      </div>
                    </div>

                    <!-- Bloques decorativos 1 - 2 - 3 a la derecha como en la imagen -->
                    <div class="math-blocks-tower" aria-hidden="true">
                      <div class="num-block block-gold">1</div>
                      <div class="num-block block-purple">2</div>
                      <div class="num-block block-blue">3</div>
                    </div>
                  </div>
                `
            }
          `
      }
    </section>
  `;
}

export function bindExerciseViewEvents(rootElement, rerenderCallback) {
  const invalidBackBtn = rootElement.querySelector('#btn-back-map-invalid');
  if (invalidBackBtn) {
    invalidBackBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
    return;
  }

  const guardBackBtn = rootElement.querySelector('#btn-guard-back-map');
  if (guardBackBtn) {
    guardBackBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  const guardPlayBtn = rootElement.querySelector('#btn-guard-play-available');
  if (guardPlayBtn) {
    guardPlayBtn.addEventListener('click', () => {
      const targetLvl = Number(guardPlayBtn.getAttribute('data-target-level')) || 1;
      SoundService.play('click');
      Router.navigate(`/nivel/${targetLvl}`);
    });
    return;
  }

  if (activeSession && activeSession.isFinished) {
    bindLevelCompleteEvents(rootElement, {
      onRetry: () => {
        initExerciseSession(activeSession.levelId, { forceFresh: true, initialPhase: 'practico' });
        rerenderCallback(true);
      },
      onReadAgain: () => {
        initExerciseSession(activeSession.levelId, {
          forceFresh: true,
          initialPhase: activeSession.level?.isInteractiveExpositiveUnit ? 'lectura' : 'aprendo'
        });
        rerenderCallback(true);
      }
    });
    return;
  }

  bindAriMascotEvents(rootElement);

  const exitBtn = rootElement.querySelector('#btn-exit-level');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  // Botón de cronómetro opcional en Unidad 3 (Multiplicaciones)
  const timerBtn = rootElement.querySelector('#btn-toggle-timer');
  if (timerBtn && activeSession) {
    timerBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.timerEnabled = !activeSession.timerEnabled;
      rerenderCallback(true);
    });
  }

  syncSessionTimer(rootElement);

  // Pestañas de fase: 1. Aprendo | Lectura Expositiva | 2 y 3. Practico y Demuestro
  const phaseTabs = rootElement.querySelectorAll('[data-phase-tab]');
  phaseTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (!activeSession) return;
      SoundService.play('click');
      activeSession.activePhase = tab.getAttribute('data-phase-tab') || 'practico';
      StorageService.saveExerciseSession(activeSession);
      rerenderCallback(true);
    });
  });

  // Eventos de la Fase 1: Aprendo
  const listenLessonBtn = rootElement.querySelector('#btn-listen-lesson');
  if (listenLessonBtn && activeSession) {
    listenLessonBtn.addEventListener('click', () => {
      const body = rootElement.querySelector('#lesson-summary-body')?.textContent || '';
      SoundService.speakText(`${activeSession.level.title}. ${body}`);
    });
  }

  const startPracticeFromLessonBtn = rootElement.querySelector('#btn-start-practice-from-lesson');
  if (startPracticeFromLessonBtn && activeSession) {
    startPracticeFromLessonBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.activePhase = 'practico';
      StorageService.saveExerciseSession(activeSession);
      rerenderCallback(true);
    });
  }

  const skipExplanationBtn = rootElement.querySelector('#btn-skip-explanation');
  if (skipExplanationBtn && activeSession) {
    skipExplanationBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.activePhase = 'practico';
      StorageService.saveExerciseSession(activeSession);
      rerenderCallback(true);
    });
  }

  // Eventos del Visor de Textos Expositivos Interactivos (Sección 6.7)
  const openInteractiveReadingBtn = rootElement.querySelector('#btn-open-interactive-reading');
  if (openInteractiveReadingBtn && activeSession) {
    openInteractiveReadingBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.activePhase = 'lectura';
      rerenderCallback(true);
    });
  }

  const topicBtns = rootElement.querySelectorAll('[data-reading-topic-index]');
  topicBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!activeSession) return;
      SoundService.play('click');
      activeSession.readingTopicIndex = Number(btn.getAttribute('data-reading-topic-index')) || 0;
      activeSession.readingStarted = false;
      activeSession.readingFragmentIndex = 0;
      activeSession.selectedKeywordInfo = null;
      activeSession.explorationAnswer = null;
      rerenderCallback(true);
    });
  });

  const startExpositiveBtn = rootElement.querySelector('#btn-start-expositive-reading');
  if (startExpositiveBtn && activeSession) {
    startExpositiveBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.readingStarted = true;
      activeSession.readingFragmentIndex = 0;
      rerenderCallback(true);
    });
  }

  const backToCoverBtn = rootElement.querySelector('#btn-back-to-cover');
  if (backToCoverBtn && activeSession) {
    backToCoverBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.readingStarted = false;
      rerenderCallback(true);
    });
  }

  const prevFragBtn = rootElement.querySelector('#btn-prev-fragment');
  if (prevFragBtn && activeSession) {
    prevFragBtn.addEventListener('click', () => {
      if (activeSession.readingFragmentIndex > 0) {
        SoundService.play('click');
        activeSession.readingFragmentIndex -= 1;
        activeSession.selectedKeywordInfo = null;
        rerenderCallback(true);
      }
    });
  }

  const nextFragBtn = rootElement.querySelector('#btn-next-fragment');
  if (nextFragBtn && activeSession) {
    nextFragBtn.addEventListener('click', () => {
      const reading = EXPOSITIVE_READINGS_DATA[activeSession.readingTopicIndex] || EXPOSITIVE_READINGS_DATA[0];
      if (activeSession.readingFragmentIndex < reading.fragments.length - 1) {
        SoundService.play('click');
        activeSession.readingFragmentIndex += 1;
        activeSession.selectedKeywordInfo = null;
        rerenderCallback(true);
      }
    });
  }

  const keywordChips = rootElement.querySelectorAll('[data-keyword-word]');
  keywordChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      if (!activeSession) return;
      SoundService.play('hint');
      activeSession.selectedKeywordInfo = {
        word: chip.getAttribute('data-keyword-word'),
        definition: chip.getAttribute('data-keyword-def')
      };
      rerenderCallback(true);
    });
  });

  const listenFragmentBtn = rootElement.querySelector('#btn-listen-fragment');
  if (listenFragmentBtn && activeSession) {
    listenFragmentBtn.addEventListener('click', () => {
      const reading = EXPOSITIVE_READINGS_DATA[activeSession.readingTopicIndex] || EXPOSITIVE_READINGS_DATA[0];
      const frag = reading.fragments[activeSession.readingFragmentIndex] || reading.fragments[0];
      SoundService.speakText(`${frag.heading}. ${frag.text}`);
    });
  }

  const explorationOptBtns = rootElement.querySelectorAll('[data-exploration-opt]');
  explorationOptBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!activeSession) return;
      const val = btn.getAttribute('data-exploration-opt');
      const reading = EXPOSITIVE_READINGS_DATA[activeSession.readingTopicIndex] || EXPOSITIVE_READINGS_DATA[0];
      activeSession.explorationAnswer = val;
      if (val === reading.explorationQuestion.correctAnswer) {
        SoundService.play('correct');
      } else {
        SoundService.play('wrong');
      }
      rerenderCallback(true);
    });
  });

  const goEvalBtn = rootElement.querySelector('#btn-go-to-evaluation');
  if (goEvalBtn && activeSession) {
    goEvalBtn.addEventListener('click', () => {
      SoundService.play('click');
      activeSession.activePhase = 'practico';
      rerenderCallback(true);
    });
  }

  // Eventos de la Fase Practico / Demuestro
  const listenBtn = rootElement.querySelector('#btn-listen-reading');
  if (listenBtn && activeSession) {
    listenBtn.addEventListener('click', () => {
      const currentQuestion = activeSession.questions[activeSession.questionIndex];
      const textToRead = `${currentQuestion.readingTitle || ''}. ${currentQuestion.readingText || currentQuestion.prompt}`;
      SoundService.speakText(textToRead);
    });
  }

  // Modalidad FillBlank (Escribir respuesta en campo de texto)
  const fillInput = rootElement.querySelector('#input-fill-blank');
  const applyBlankBtn = rootElement.querySelector('#btn-apply-blank');
  if (fillInput && activeSession) {
    fillInput.addEventListener('input', (e) => {
      activeSession.typedAnswer = e.target.value;
      activeSession.selectedOption = e.target.value.trim() || null;
      const checkBtnEl = rootElement.querySelector('#btn-check-answer');
      if (checkBtnEl) {
        checkBtnEl.disabled = activeSession.selectedOption === null;
      }
    });
    fillInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && activeSession.selectedOption) {
        e.preventDefault();
        const checkBtnEl = rootElement.querySelector('#btn-check-answer');
        if (checkBtnEl && !checkBtnEl.disabled) {
          checkBtnEl.click();
        }
      }
    });
  }
  if (applyBlankBtn && fillInput && activeSession) {
    applyBlankBtn.addEventListener('click', () => {
      const val = fillInput.value.trim();
      if (!val) return;
      SoundService.play('click');
      activeSession.typedAnswer = val;
      activeSession.selectedOption = val;
      rerenderCallback(true);
    });
  }

  // Modalidad DragAndDrop (Arrastrar ficha a la zona de destino)
  const dropZone = rootElement.querySelector('#drop-target-zone');
  const optionBtns = rootElement.querySelectorAll('.option-btn');

  optionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!activeSession || activeSession.hasChecked) return;
      SoundService.play('click');
      const val = btn.getAttribute('data-option-value');
      activeSession.selectedOption = val;
      activeSession.typedAnswer = val;
      rerenderCallback(true);
    });

    btn.addEventListener('dragstart', (e) => {
      if (!activeSession || activeSession.hasChecked) return;
      const val = btn.getAttribute('data-option-value');
      if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', val);
      }
    });
  });

  if (dropZone && activeSession) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drop-zone-hover');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drop-zone-hover');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drop-zone-hover');
      if (activeSession.hasChecked) return;
      const droppedValue = e.dataTransfer ? e.dataTransfer.getData('text/plain') : null;
      if (droppedValue) {
        SoundService.play('click');
        activeSession.selectedOption = droppedValue;
        activeSession.typedAnswer = droppedValue;
        rerenderCallback(true);
      }
    });
  }

  const hintBtn = rootElement.querySelector('#btn-hint');
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      if (!activeSession || activeSession.hasChecked || activeSession.usedHint) return;
      SoundService.play('hint');
      activeSession.usedHint = true;
      rerenderCallback(true);
    });
  }

  const checkBtn = rootElement.querySelector('#btn-check-answer');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      if (!activeSession || activeSession.hasChecked || activeSession.selectedOption === null) return;
      const currentQuestion = activeSession.questions[activeSession.questionIndex];
      const isCorrect = isAnswerMatch(activeSession.selectedOption, currentQuestion.correctAnswer);

      const answerResult = StorageService.recordAnswer({
        isCorrect,
        usedHint: activeSession.usedHint,
        isPractice: false,
        questionId: currentQuestion.id
      });

      activeSession.hasChecked = true;
      activeSession.isCurrentCorrect = isCorrect;
      activeSession.lastPointsEarned = answerResult.pointsEarned || (isCorrect ? 100 : 0);

      if (isCorrect) {
        activeSession.correctCount += 1;
        activeSession.sessionScore += activeSession.lastPointsEarned;
        SoundService.play('correct');
      } else {
        SoundService.play('wrong');
      }

      rerenderCallback(true);
    });
  }

  const nextBtn = rootElement.querySelector('#btn-next-question');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!activeSession || !activeSession.hasChecked) return;
      const totalQuestions = activeSession.questions.length;

      if (activeSession.questionIndex < totalQuestions - 1) {
        SoundService.play('click');
        activeSession.questionIndex += 1;
        activeSession.selectedOption = null;
        activeSession.typedAnswer = '';
        activeSession.hasChecked = false;
        activeSession.isCurrentCorrect = false;
        activeSession.lastPointsEarned = 0;
        activeSession.usedHint = false;
        StorageService.saveExerciseSession(activeSession);
        rerenderCallback(true);
      } else {
        const result = StorageService.completeLevel({
          levelId: activeSession.levelId,
          correctCount: activeSession.correctCount,
          totalQuestions,
          sessionScore: activeSession.sessionScore
        });
        StorageService.clearExerciseSession(activeSession.levelId);
        activeSession.isFinished = true;
        activeSession.completionResult = result;
        if (result && result.passed) {
          SoundService.play('levelComplete');
        } else {
          SoundService.play('wrong');
        }
        rerenderCallback(true);
      }
    });
  }

  return () => {
    stopSessionTimer();
  };
}

import { CATEGORIES, LEVELS_DATA, getQuestionsForLevel } from '../data/levelsData.js';
import { StorageService, isAnswerMatch } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { escapeHtml } from '../utils/escapeHtml.js';

let practiceState = {
  selectedCategory: 'todas',
  grade: null,
  questionIndex: 0,
  selectedOption: null,
  hasChecked: false,
  isCurrentCorrect: false,
  lastPointsEarned: 0,
  usedHint: false
};

function getQuestionsByCategory(categoryId, grade = '3') {
  const pool = [];
  for (const lvl of LEVELS_DATA) {
    if (categoryId === 'todas' || lvl.category === categoryId) {
      const levelQuestions = getQuestionsForLevel(lvl, grade);
      for (const q of levelQuestions) {
        pool.push({
          ...q,
          levelId: lvl.id,
          levelTitle: lvl.title,
          levelIcon: lvl.icon,
          category: lvl.category
        });
      }
    }
  }
  return pool;
}

export function renderPracticeView() {
  const state = StorageService.getState();
  if (practiceState.grade !== state.selectedGrade) {
    practiceState = {
      ...practiceState,
      grade: state.selectedGrade,
      questionIndex: 0,
      selectedOption: null,
      hasChecked: false,
      isCurrentCorrect: false,
      lastPointsEarned: 0,
      usedHint: false
    };
  }
  const pool = getQuestionsByCategory(practiceState.selectedCategory, state.selectedGrade);
  if (practiceState.questionIndex >= pool.length) {
    practiceState.questionIndex = 0;
  }
  const currentQuestion = pool[practiceState.questionIndex] || pool[0];

  let ariMood = 'happy';
  let ariMessage = '¡En la Práctica Libre puedes entrenar todas las materias sin límite de intentos y sumar puntos extra!';
  if (practiceState.usedHint && !practiceState.hasChecked) {
    ariMood = 'thinking';
    ariMessage = `💡 Pista: ${currentQuestion.hint}`;
  } else if (practiceState.hasChecked) {
    ariMood = practiceState.isCurrentCorrect ? 'celebrating' : 'encouraging';
    ariMessage = practiceState.isCurrentCorrect
      ? `🎉 ¡Muy bien! Sumaste +${practiceState.lastPointsEarned} puntos a tu marcador.`
      : `💪 La respuesta correcta es «${currentQuestion.correctAnswer}». ¡Sigue practicando!`;
  }

  return `
    <section class="practice-view view-fade-anim" data-component="PracticeView">
      <div class="section-header-row">
        <div>
          <div class="header-badges-cluster">
            <span class="hero-pill">⚡ Entrenamiento Continuo</span>
            <span class="bonus-practice-pill">🎁 +50% Puntos Bonus en Práctica Libre</span>
          </div>
          <h1 class="section-title">Modo Práctica Libre</h1>
          <p class="section-subtitle">Filtra por materia, repasa conceptos y acumula puntos adicionales junto a Ari.</p>
        </div>
        <button type="button" class="btn btn-outline" id="btn-practice-to-map">
          🗺️ Ir al Mapa de Niveles
        </button>
      </div>

      <div class="category-filter-bar" role="tablist" aria-label="Filtrar ejercicios por materia">
        ${CATEGORIES.map((cat) => {
          const isActive = practiceState.selectedCategory === cat.id;
          return `
            <button
              type="button"
              id="btn-cat-${cat.id}"
              class="category-chip-btn ${isActive ? 'active' : ''}"
              data-category-id="${cat.id}"
              role="tab"
              aria-selected="${isActive ? 'true' : 'false'}"
            >
              <span>${cat.icon}</span>
              <span>${cat.label}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="exercise-layout-grid">
        <div class="exercise-main-col">
          <article class="question-card" id="practice-question-card" data-question-id="${currentQuestion.id}">
            <div class="question-type-tag">
              <span>${currentQuestion.levelIcon} ${currentQuestion.levelTitle}</span>
              <span class="question-category-pill">Ejercicio ${practiceState.questionIndex + 1} de ${pool.length}</span>
            </div>

            <div class="question-visual-box" aria-hidden="true">
              ${escapeHtml(currentQuestion.visual)}
            </div>

            <h2 class="question-prompt" id="practice-prompt">${escapeHtml(currentQuestion.prompt)}</h2>

            <div class="options-grid" role="radiogroup" aria-labelledby="practice-prompt">
              ${currentQuestion.options
                .map((opt, idx) => {
                  const isSelected = isAnswerMatch(practiceState.selectedOption, opt);
                  let stateClass = '';
                  if (practiceState.hasChecked) {
                    if (isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                      stateClass = 'option-correct pulse-correct-anim';
                    } else if (isSelected && !isAnswerMatch(opt, currentQuestion.correctAnswer)) {
                      stateClass = 'option-wrong shake-anim';
                    }
                  } else if (isSelected) {
                    stateClass = 'option-selected';
                  }
                  const letter = ['A', 'B', 'C', 'D'][idx] || String(idx + 1);
                  return `
                    <button
                      type="button"
                      id="practice-option-${idx}"
                      class="option-btn practice-opt-btn ${stateClass}"
                      data-practice-option="${escapeHtml(opt)}"
                      role="radio"
                      aria-checked="${isSelected ? 'true' : 'false'}"
                      ${practiceState.hasChecked ? 'disabled' : ''}
                    >
                      <span class="option-letter">${letter}</span>
                      <span class="option-kbd-hint" aria-hidden="true">${idx + 1}</span>
                      <span class="option-text">${escapeHtml(opt)}</span>
                    </button>
                  `;
                })
                .join('')}
            </div>

            ${
              practiceState.usedHint
                ? `<div class="hint-banner" id="practice-hint-box">
                    <strong>💡 Pista de Ari:</strong> ${escapeHtml(currentQuestion.hint)}
                  </div>`
                : ''
            }

            ${
              practiceState.hasChecked
                ? practiceState.isCurrentCorrect
                  ? `<div class="feedback-banner feedback-success" id="practice-feedback-box" role="status" aria-live="polite">
                      <div class="feedback-header">
                        <span class="feedback-icon">🎉</span>
                        <strong>¡Respuesta Correcta! (+${practiceState.lastPointsEarned} pts)</strong>
                      </div>
                      <p class="feedback-explanation">${escapeHtml(currentQuestion.explanation)}</p>
                    </div>`
                  : `<div class="feedback-banner feedback-error" id="practice-feedback-box" role="status" aria-live="polite">
                      <div class="feedback-header">
                        <span class="feedback-icon">❌</span>
                        <strong>¡Buen intento! Analicemos juntos qué pasó:</strong>
                      </div>
                      <div class="feedback-comparison-row">
                        <div class="feedback-choice-bad">
                          <span class="choice-tag">Tu selección:</span>
                          <span class="choice-value">«${escapeHtml(practiceState.selectedOption || 'Sin seleccionar')}»</span>
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
                    </div>`
                : ''
            }

            <div class="exercise-actions-footer">
              <button
                type="button"
                class="btn btn-hint"
                id="btn-practice-hint"
                ${practiceState.hasChecked || practiceState.usedHint ? 'disabled' : ''}
              >
                💡 ${practiceState.usedHint ? 'Pista Mostrada' : 'Pedir Pista'}
              </button>

              ${
                !practiceState.hasChecked
                  ? `<button
                      type="button"
                      class="btn btn-primary btn-lg"
                      id="btn-practice-check"
                      ${practiceState.selectedOption === null ? 'disabled' : ''}
                    >
                      ✅ Comprobar Respuesta
                    </button>`
                  : `<button
                      type="button"
                      class="btn btn-accent btn-lg"
                      id="btn-practice-next"
                    >
                      Siguiente Ejercicio ➡️
                    </button>`
              }
            </div>
          </article>
        </div>

        <aside class="exercise-mascot-col">
          <div class="practice-score-summary">
            <span>⚡ Puntos en Práctica Libre: <strong id="practice-score-val">${state.practiceScore} pts</strong></span>
          </div>
          ${renderAriMascot({
            mood: ariMood,
            message: ariMessage,
            compact: false,
            showGreetButton: true
          })}
        </aside>
      </div>
    </section>
  `;
}

export function bindPracticeViewEvents(rootElement, rerenderCallback) {
  bindAriMascotEvents(rootElement);

  const mapBtn = rootElement.querySelector('#btn-practice-to-map');
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  const categoryBtns = rootElement.querySelectorAll('[data-category-id]');
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-category-id');
      SoundService.play('click');
      practiceState = {
        selectedCategory: catId,
        questionIndex: 0,
        selectedOption: null,
        hasChecked: false,
        isCurrentCorrect: false,
        lastPointsEarned: 0,
        usedHint: false
      };
      rerenderCallback();
    });
  });

  const optBtns = rootElement.querySelectorAll('.practice-opt-btn');
  optBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (practiceState.hasChecked) return;
      SoundService.play('click');
      practiceState.selectedOption = btn.getAttribute('data-practice-option');
      rerenderCallback();
    });
  });

  const hintBtn = rootElement.querySelector('#btn-practice-hint');
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      if (practiceState.hasChecked || practiceState.usedHint) return;
      SoundService.play('hint');
      practiceState.usedHint = true;
      rerenderCallback();
    });
  }

  const checkBtn = rootElement.querySelector('#btn-practice-check');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      if (practiceState.hasChecked || practiceState.selectedOption === null) return;
      const state = StorageService.getState();
      const pool = getQuestionsByCategory(practiceState.selectedCategory, state.selectedGrade);
      const currentQuestion = pool[practiceState.questionIndex] || pool[0];
      const isCorrect = isAnswerMatch(practiceState.selectedOption, currentQuestion.correctAnswer);

      const res = StorageService.recordAnswer({
        isCorrect,
        usedHint: practiceState.usedHint,
        isPractice: true
      });

      practiceState.hasChecked = true;
      practiceState.isCurrentCorrect = isCorrect;
      practiceState.lastPointsEarned = res.pointsEarned;
      SoundService.play(isCorrect ? 'correct' : 'wrong');
      rerenderCallback();
    });
  }

  const nextBtn = rootElement.querySelector('#btn-practice-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      SoundService.play('click');
      const state = StorageService.getState();
      const pool = getQuestionsByCategory(practiceState.selectedCategory, state.selectedGrade);
      practiceState.questionIndex = (practiceState.questionIndex + 1) % pool.length;
      practiceState.selectedOption = null;
      practiceState.hasChecked = false;
      practiceState.isCurrentCorrect = false;
      practiceState.lastPointsEarned = 0;
      practiceState.usedHint = false;
      rerenderCallback();
    });
  }

  // Atajos de teclado: teclas 1, 2, 3, 4 y Enter en Práctica Libre
  const handleKeyboardInput = (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (['1', '2', '3', '4'].includes(e.key) && !practiceState.hasChecked) {
      const idx = Number(e.key) - 1;
      const targetOpt = rootElement.querySelector(`#practice-option-${idx}`);
      if (targetOpt) {
        targetOpt.click();
      }
    } else if (e.key === 'Enter') {
      if (!practiceState.hasChecked) {
        const checkBtn = rootElement.querySelector('#btn-practice-check');
        if (checkBtn && !checkBtn.disabled) checkBtn.click();
      } else {
        const nextBtn = rootElement.querySelector('#btn-practice-next');
        if (nextBtn) nextBtn.click();
      }
    }
  };
  window.addEventListener('keydown', handleKeyboardInput);

  return () => {
    window.removeEventListener('keydown', handleKeyboardInput);
  };
}

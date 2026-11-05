import { LEVELS_DATA } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';

export function renderLevelCompleteModal({
  level,
  correctCount,
  totalQuestions,
  result
}) {
  const {
    passed,
    minPass = 70,
    accuracy,
    starsEarned,
    starBonusPoints = 20,
    sessionScore,
    unlockedNextLevelId,
    newlyUnlockedAchievements
  } = result;

  const nextLevel =
    LEVELS_DATA.find((l) => l.requiredLevel === level.id) ||
    LEVELS_DATA.find((l) => l.id === level.id + 1);
  const canPlayNext = Boolean(nextLevel && passed);

  const mathProgress = StorageService.getSubjectProgress('matematicas');
  const espProgress = StorageService.getSubjectProgress('espanol');

  const starsHtml = [1, 2, 3]
    .map((starIdx) => {
      const earned = starIdx <= starsEarned;
      return `<span class="result-star ${earned ? 'star-earned star-pop-anim' : 'star-empty'}" style="animation-delay: ${starIdx * 120}ms" aria-label="${earned ? 'Estrella ganada' : 'Estrella pendiente'}">${earned ? '⭐' : '☆'}</span>`;
    })
    .join('');

  const ariMessage = passed
    ? starsEarned === 3
      ? `¡Excelente trabajo! Lograste ${accuracy}% de precisión y ganaste las 3 estrellas en «${level.title}».`
      : `¡Lo lograste! Superaste «${level.title}» con ${accuracy}% de aciertos.`
    : `¡Casi lo consigues! Obtuviste ${accuracy}% de aciertos y necesitas al menos ${minPass}% (4 de 5 respuestas) para desbloquear la siguiente unidad. ¡Intentémoslo nuevamente!`;

  const achievementsHtml =
    newlyUnlockedAchievements && newlyUnlockedAchievements.length > 0
      ? `
      <div class="new-achievements-banner">
        <h4>🎉 ¡Nueva Medalla Desbloqueada!</h4>
        <div class="new-achievements-list">
          ${newlyUnlockedAchievements
            .map(
              (ach) => `
              <div class="new-achievement-chip">
                <span>${ach.icon}</span>
                <strong>${ach.title}</strong>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `
      : '';

  return `
    <section class="level-complete-view view-fade-anim" data-component="LevelCompleteModal">
      <div class="level-complete-card ${passed ? 'complete-passed' : 'complete-retry'}">
        <div class="purple-ribbon-banner victory-ribbon">
          <h2>${passed ? '¡Excelente trabajo!' : '¡Sigue intentando!'}</h2>
        </div>

        <p class="victory-subtitle">Has obtenido en <strong>${level.unitLabel || level.title}</strong>:</p>

        <div class="victory-showcase-grid">
          <!-- Columna Izquierda: Ari Celebrando con Medalla -->
          <div class="victory-ari-col">
            ${renderAriMascot({
              mood: passed ? 'celebrating' : 'encouraging',
              message: ariMessage,
              compact: false,
              showGreetButton: false
            })}
          </div>

          <!-- Columna Central: Estrellas, Medalla Explorador y Métricas -->
          <div class="victory-rewards-col">
            <div class="rewards-pair-row">
              <div class="reward-badge-box">
                <div class="big-star-graphic">⭐</div>
                <strong class="reward-big-num">${passed ? `+${starBonusPoints}` : '+0'}</strong>
                <span class="reward-sub-label">Estrellas</span>
              </div>

              <div class="reward-badge-box">
                <div class="big-medal-graphic">🏅</div>
                <strong class="reward-medal-title">${passed ? 'Medalla' : 'Intento'}</strong>
                <span class="reward-sub-label">${passed ? 'Explorador' : 'En progreso'}</span>
              </div>
            </div>

            <div class="result-stars-row" id="level-result-stars">
              ${starsHtml}
            </div>

            <div class="result-metrics-grid">
              <div class="result-metric-box">
                <span class="metric-label">Aciertos</span>
                <strong class="metric-value" id="result-correct-count">${correctCount}/${totalQuestions}</strong>
              </div>
              <div class="result-metric-box">
                <span class="metric-label">Precisión</span>
                <strong class="metric-value" id="result-accuracy">${accuracy}%</strong>
              </div>
              <div class="result-metric-box">
                <span class="metric-label">Puntos</span>
                <strong class="metric-value" id="result-session-score">+${sessionScore} pts</strong>
              </div>
            </div>

            ${
              unlockedNextLevelId
                ? `<div class="unlock-alert" id="unlocked-next-banner">
                    🔓 ¡Has desbloqueado: <strong>Nivel ${unlockedNextLevelId} (${nextLevel?.title || ''})</strong>!
                  </div>`
                : ''
            }

            ${achievementsHtml}
          </div>

          <!-- Columna Derecha: Tu Progreso (Matemáticas y Español) + Trofeo -->
          <aside class="victory-progress-card">
            <div class="progress-card-header">Tu progreso</div>
            <div class="subject-progress-item">
              <div class="subject-progress-row">
                <span>Matemáticas</span>
                <strong>${mathProgress}%</strong>
              </div>
              <div class="subject-bar-track">
                <div class="subject-bar-fill fill-green" style="width: ${mathProgress}%"></div>
              </div>
            </div>

            <div class="subject-progress-item">
              <div class="subject-progress-row">
                <span>Español</span>
                <strong>${espProgress}%</strong>
              </div>
              <div class="subject-bar-track">
                <div class="subject-bar-fill fill-purple" style="width: ${espProgress}%"></div>
              </div>
            </div>

            <div class="trophy-corner" aria-hidden="true">🏆</div>
          </aside>
        </div>

        <div class="complete-actions">
          ${
            canPlayNext
              ? `<button type="button" class="btn-3d-purple btn-lg" id="btn-next-level" data-next-level="${nextLevel.id}">
                  ▶️ Continuar al Nivel ${nextLevel.id} ➜
                </button>`
              : ''
          }
          <div class="complete-secondary-actions">
            <button type="button" class="btn ${canPlayNext ? 'btn-secondary' : 'btn-primary'}" id="btn-retry-level">
              🔄 Repetir
            </button>
            <button type="button" class="btn btn-outline" id="btn-read-again">
              📘 ${level.isInteractiveExpositiveUnit ? 'Volver a leer' : 'Repasar tema'}
            </button>
            <button type="button" class="btn btn-outline" id="btn-back-to-map">
              🗺️ Mapa de Niveles
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function bindLevelCompleteEvents(rootElement, { onRetry, onReadAgain }) {
  bindAriMascotEvents(rootElement);

  const nextLevelBtn = rootElement.querySelector('#btn-next-level');
  if (nextLevelBtn) {
    nextLevelBtn.addEventListener('click', () => {
      const nextId = Number(nextLevelBtn.getAttribute('data-next-level'));
      SoundService.play('click');
      Router.navigate(`/nivel/${nextId}`);
    });
  }

  const retryBtn = rootElement.querySelector('#btn-retry-level');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      SoundService.play('click');
      if (onRetry) onRetry();
    });
  }

  const readAgainBtn = rootElement.querySelector('#btn-read-again');
  if (readAgainBtn) {
    readAgainBtn.addEventListener('click', () => {
      SoundService.play('click');
      if (onReadAgain) onReadAgain();
    });
  }

  const backMapBtn = rootElement.querySelector('#btn-back-to-map');
  if (backMapBtn) {
    backMapBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }
}

import { LEVELS_DATA, ACHIEVEMENTS_DATA } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { showConfirmModal } from './ConfirmModal.js';
import { LEVEL_STATUS_META, renderStarsHtml } from '../utils/levelStatus.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderProgressView(focus = 'resumen') {
  const activeTab = focus === 'logros' ? 'logros' : 'resumen';
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const completedLevels = StorageService.getCompletedCount();
  const mathPercent = StorageService.getSubjectProgress('matematicas');
  const espPercent = StorageService.getSubjectProgress('espanol');
  const globalAccuracy =
    state.totalQuestionsAnswered > 0
      ? Math.round((state.totalCorrectAnswers / state.totalQuestionsAnswered) * 100)
      : 0;

  return `
    <section class="progress-view view-fade-anim" data-component="ProgressView" data-focus="${activeTab}">
      <div class="section-header-row">
        <div>
          <span class="hero-pill">🏅 Panel del Estudiante • ${state.selectedGrade}° Grado</span>
          <h1 class="section-title">Progreso y Medallas de ${safeName}</h1>
          <p class="section-subtitle">
            Última actividad: <strong id="prog-last-activity">${escapeHtml(state.lastActivityLabel || 'Inicio de aventura')}</strong>
          </p>
        </div>
        <div class="progress-header-actions">
          <button type="button" class="btn btn-primary" id="btn-progress-to-map">
            🗺️ Ir al Mapa
          </button>
          <button type="button" class="btn btn-danger" id="btn-reset-progress">
            🗑️ Reiniciar Progreso
          </button>
        </div>
      </div>

      <div class="category-tabs progress-subtabs-bar" role="tablist" aria-label="Secciones de progreso">
        <button
          type="button"
          role="tab"
          id="btn-prog-tab-resumen"
          class="category-tab-btn ${activeTab === 'resumen' ? 'active' : ''}"
          data-progress-tab="/progreso"
          aria-selected="${activeTab === 'resumen' ? 'true' : 'false'}"
        >
          📊 Resumen General
        </button>
        <button
          type="button"
          role="tab"
          id="btn-prog-tab-logros"
          class="category-tab-btn ${activeTab === 'logros' ? 'active' : ''}"
          data-progress-tab="/logros"
          aria-selected="${activeTab === 'logros' ? 'true' : 'false'}"
        >
          🏆 Medallas (${state.achievements.length}/${ACHIEVEMENTS_DATA.length})
        </button>
      </div>

      <div class="progress-overview-grid">
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🏆</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Puntaje Total</span>
            <strong class="summary-stat-value" id="prog-total-score">${state.totalScore} pts</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">⭐</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Estrellas Totales</span>
            <strong class="summary-stat-value" id="prog-total-stars">${totalStars} / ${maxStars}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🎯</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Precisión Global</span>
            <strong class="summary-stat-value" id="prog-global-accuracy">${globalAccuracy}% (${state.totalCorrectAnswers}/${state.totalQuestionsAnswered})</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🔥</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Mejor Racha</span>
            <strong class="summary-stat-value" id="prog-best-streak">${state.bestStreak} seguidas</strong>
          </div>
        </article>
      </div>

      <!-- Barras de Progreso por Materia (Sección 13.1) -->
      <div class="subject-progress-cards-row">
        <article class="subject-progress-summary-card">
          <div class="subject-progress-row">
            <span>➕ Progreso en Matemáticas</span>
            <strong id="prog-math-percent">${mathPercent}%</strong>
          </div>
          <div class="subject-bar-track">
            <div class="subject-bar-fill fill-green" style="width: ${mathPercent}%"></div>
          </div>
        </article>

        <article class="subject-progress-summary-card">
          <div class="subject-progress-row">
            <span>📖 Progreso en Español</span>
            <strong id="prog-esp-percent">${espPercent}%</strong>
          </div>
          <div class="subject-bar-track">
            <div class="subject-bar-fill fill-purple" style="width: ${espPercent}%"></div>
          </div>
        </article>
      </div>

      <div class="progress-main-columns">
        <div class="achievements-section" id="achievements-panel">
          <h2 class="subsection-title">🎖️ Medallas y Logros (${state.achievements.length}/${ACHIEVEMENTS_DATA.length})</h2>
          <div class="achievements-grid">
            ${ACHIEVEMENTS_DATA.map((ach) => {
              const unlocked = state.achievements.includes(ach.id);
              return `
                <article
                  class="achievement-card ${unlocked ? 'achievement-unlocked' : 'achievement-locked'}"
                  id="achievement-${ach.id}"
                  data-unlocked="${unlocked}"
                >
                  <div class="achievement-icon">${unlocked ? ach.icon : '🔒'}</div>
                  <div class="achievement-info">
                    <h3>${ach.title}</h3>
                    <p>${ach.description}</p>
                    <span class="achievement-status-tag">
                      ${unlocked ? '✅ Desbloqueado' : '🔒 Pendiente'}
                    </span>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>

        <aside class="progress-mascot-aside">
          ${renderAriMascot({
            mood: completedLevels >= LEVELS_DATA.length ? 'celebrating' : 'happy',
            message:
              completedLevels >= LEVELS_DATA.length
                ? '🎓 ¡Felicidades! Has superado todas las unidades de Aprendiendo con Ari y obtenido el grado de Superestudiante.'
                : `Llevas ${completedLevels} de ${LEVELS_DATA.length} unidades completadas y ${state.achievements.length} medallas desbloqueadas. ¡Sigue adelante!`,
            compact: false,
            showGreetButton: true
          })}
        </aside>
      </div>

      <div class="levels-breakdown-section">
        <h2 class="subsection-title">📊 Detalle por Unidad</h2>
        <div class="table-responsive-wrapper">
          <table class="levels-progress-table" aria-label="Tabla de progreso por nivel">
            <thead>
              <tr>
                <th>Unidad / Nivel</th>
                <th>Estado</th>
                <th>Estrellas</th>
                <th>Mejor Puntaje</th>
                <th>Mejor Precisión</th>
                <th>Intentos</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              ${LEVELS_DATA.map((lvl) => {
                const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
                const ls = StorageService.getLevelState(lvl.id);
                const statusKey = StorageService.getLevelStatus(lvl.id);
                const statusMeta = LEVEL_STATUS_META[statusKey];
                return `
                  <tr data-progress-row="${lvl.id}">
                    <td><strong>${lvl.icon} Nivel ${lvl.id}: ${escapeHtml(lvl.unitLabel)}</strong></td>
                    <td>
                      <span class="status-pill ${ls.completed ? 'pill-completed' : isUnlocked ? 'pill-unlocked' : 'pill-locked'} ${statusMeta.className}">
                        ${statusMeta.label}
                      </span>
                    </td>
                    <td>${renderStarsHtml(ls.stars, 'star-item')}</td>
                    <td>${ls.bestScore} pts</td>
                    <td>${ls.bestAccuracy}%</td>
                    <td>${ls.attempts}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm ${isUnlocked ? 'btn-primary' : 'btn-locked'}"
                        data-table-play="${lvl.id}"
                        ${!isUnlocked ? 'disabled' : ''}
                      >
                        ${isUnlocked ? 'Jugar' : 'Bloqueado'}
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

export function bindProgressViewEvents(rootElement, rerenderCallback, focus = 'resumen') {
  bindAriMascotEvents(rootElement);

  rootElement.querySelectorAll('[data-progress-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(tab.getAttribute('data-progress-tab'));
    });
  });

  if (focus === 'logros') {
    const achPanel = rootElement.querySelector('#achievements-panel');
    if (achPanel && typeof achPanel.scrollIntoView === 'function') {
      setTimeout(() => {
        achPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }

  const toMapBtn = rootElement.querySelector('#btn-progress-to-map');
  if (toMapBtn) {
    toMapBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  const resetBtn = rootElement.querySelector('#btn-reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      SoundService.play('click');
      showConfirmModal({
        title: '¿Reiniciar todo el progreso?',
        message:
          'Se borrarán los puntos, las estrellas, las medallas y los niveles desbloqueados para comenzar desde el inicio.',
        confirmLabel: 'Sí, reiniciar progreso',
        cancelLabel: 'Cancelar',
        onConfirm: () => {
          StorageService.resetProgress();
          rerenderCallback();
        }
      });
    });
  }

  const tablePlayBtns = rootElement.querySelectorAll('[data-table-play]');
  tablePlayBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lvlId = Number(btn.getAttribute('data-table-play'));
      if (StorageService.isLevelUnlocked(lvlId)) {
        SoundService.play('click');
        Router.navigate(`/nivel/${lvlId}`);
      }
    });
  });
}

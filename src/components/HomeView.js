import { LEVELS_DATA, SUBJECTS_DATA } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { renderMathCardGraphicSvg, renderSpanishCardGraphicSvg } from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';
import { LEVEL_STATUS_META, renderStarsHtml } from '../utils/levelStatus.js';

let activeHomeSubjectTab = 'todas';

function renderUnitsPreviewSection(state) {
  const filteredLevels =
    activeHomeSubjectTab === 'todas'
      ? LEVELS_DATA
      : LEVELS_DATA.filter((l) => l.subject === activeHomeSubjectTab);

  return `
    <div class="home-worlds-section">
      <div class="section-header-row">
        <div>
          <h2 class="section-title">Unidades de Aprendizaje (${state.selectedGrade}° Grado)</h2>
          <p class="section-subtitle">
            Explora por materia o continúa directamente donde quedaste. Cada unidad consta de 3 pestañas: Aprendo, Practico y Demuestro.
          </p>
        </div>
        <div class="category-tabs" role="tablist" aria-label="Filtrar vista previa por materia">
          <button
            type="button"
            role="tab"
            class="category-tab-btn ${activeHomeSubjectTab === 'todas' ? 'active' : ''}"
            data-home-subject-tab="todas"
            aria-selected="${activeHomeSubjectTab === 'todas' ? 'true' : 'false'}"
          >
            🌟 Todas (${LEVELS_DATA.length})
          </button>
          <button
            type="button"
            role="tab"
            class="category-tab-btn ${activeHomeSubjectTab === 'matematicas' ? 'active' : ''}"
            data-home-subject-tab="matematicas"
            aria-selected="${activeHomeSubjectTab === 'matematicas' ? 'true' : 'false'}"
          >
            ➕ Matemáticas (5)
          </button>
          <button
            type="button"
            role="tab"
            class="category-tab-btn ${activeHomeSubjectTab === 'espanol' ? 'active' : ''}"
            data-home-subject-tab="espanol"
            aria-selected="${activeHomeSubjectTab === 'espanol' ? 'true' : 'false'}"
          >
            📖 Español (5)
          </button>
        </div>
      </div>

      <div class="worlds-preview-grid">
        ${filteredLevels
          .map((lvl) => {
            const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
            const statusKey = StorageService.getLevelStatus(lvl.id);
            const statusMeta = LEVEL_STATUS_META[statusKey];
            const lvlProgress = StorageService.getLevelState(lvl.id);

            return `
              <article class="world-preview-card ${isUnlocked ? 'world-unlocked' : 'world-locked'}" data-level-card="${lvl.id}">
                <div class="world-card-top">
                  <div class="level-title-row">
                    <span class="world-icon" style="background: ${lvl.badgeColor}20; color: ${lvl.badgeColor}">${lvl.icon}</span>
                    <h3 class="world-card-title">${escapeHtml(lvl.title)}</h3>
                  </div>
                  <span class="world-status-badge ${isUnlocked ? 'badge-unlocked' : 'badge-locked'} ${statusMeta.className}">
                    ${statusMeta.label}
                  </span>
                </div>
                <div class="world-card-content">
                  <p class="world-card-desc">${escapeHtml(lvl.subtitle)}</p>
                </div>
                <div class="world-card-footer">
                  <div class="world-stars" aria-label="${lvlProgress.stars} de 3 estrellas">
                    ${renderStarsHtml(lvlProgress.stars, 'star-item')}
                  </div>
                  <button
                    type="button"
                    class="btn btn-sm ${isUnlocked ? 'btn-primary' : 'btn-secondary'}"
                    data-home-level-btn="${lvl.id}"
                  >
                    ${isUnlocked ? (lvlProgress.completed ? 'Repasar' : 'Jugar Ahora') : 'Ver en Mapa'}
                  </button>
                </div>
              </article>
            `;
          })
          .join('')}
      </div>
    </div>
  `;
}

function renderSubjectsCatalogSection(state) {
  return `
    <div class="subjects-catalog-section">
      <div class="section-header-row">
        <div>
          <span class="hero-pill">📚 Catálogo Curricular • ${state.selectedGrade}° Grado</span>
          <h1 class="section-title">Materias y Módulos de Aprendiendo con Ari</h1>
          <p class="section-subtitle">
            Selecciona tu área de estudio para explorar sus 5 unidades progresivas o entra directo a la siguiente lección disponible.
          </p>
        </div>
        <button type="button" class="btn btn-outline" id="btn-subjects-to-grade">
          🎓 Cambiar Grado (${state.selectedGrade}°)
        </button>
      </div>

      <div class="subjects-detail-grid">
        ${SUBJECTS_DATA.map((subj) => {
          const summary = StorageService.getSubjectSummary(subj.id);
          const subjLevels = LEVELS_DATA.filter((l) => l.subject === subj.id);
          const isMath = subj.id === 'matematicas';
          return `
            <article class="subject-module-card ${isMath ? 'module-math' : 'module-spanish'}">
              <div class="subject-module-header">
                <button
                  type="button"
                  class="subject-3d-card ${isMath ? 'subject-math-card' : 'subject-spanish-card'}"
                  id="btn-subject-${subj.id}"
                  data-subject-level="${summary.nextLevelId}"
                >
                  <div class="subject-board-inner">
                    ${isMath ? renderMathCardGraphicSvg() : renderSpanishCardGraphicSvg()}
                  </div>
                  <span class="subject-ribbon ${isMath ? 'subject-ribbon-green' : 'subject-ribbon-purple'}">
                    ${escapeHtml(subj.title)}
                  </span>
                </button>

                <div class="subject-module-summary">
                  <h2>${escapeHtml(subj.heroTitle)}</h2>
                  <p>${escapeHtml(subj.subtitle)}</p>
                  <div class="subject-progress-row">
                    <span>Avance: <strong>${summary.completed}/${summary.total} unidades</strong></span>
                    <span>⭐ <strong>${summary.stars}/${summary.maxStars}</strong></span>
                  </div>
                  <div class="subject-bar-track">
                    <div class="subject-bar-fill ${isMath ? 'fill-green' : 'fill-purple'}" style="width: ${summary.percent}%"></div>
                  </div>
                  <div class="subject-module-actions">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      data-subject-continue="${summary.nextLevelId}"
                    >
                      ▶️ Continuar Nivel ${summary.nextLevelId}
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      data-subject-map="/${subj.id}"
                    >
                      🗺️ Ver Mapa de ${escapeHtml(subj.title)}
                    </button>
                  </div>
                </div>
              </div>

              <ul class="subject-units-list" aria-label="Unidades de ${escapeHtml(subj.title)}">
                ${subjLevels
                  .map((lvl) => {
                    const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
                    const statusKey = StorageService.getLevelStatus(lvl.id);
                    const statusMeta = LEVEL_STATUS_META[statusKey];
                    const st = StorageService.getLevelState(lvl.id);
                    return `
                      <li class="subject-unit-row ${isUnlocked ? 'is-unlocked' : 'is-locked'}">
                        <div class="subject-unit-info">
                          <span class="subject-unit-icon" style="background:${lvl.badgeColor}20;color:${lvl.badgeColor}">${lvl.icon}</span>
                          <div>
                            <strong>Nivel ${lvl.id}: ${escapeHtml(lvl.title)}</strong>
                            <small>${escapeHtml(lvl.subtitle)}</small>
                          </div>
                        </div>
                        <div class="subject-unit-right">
                          <span class="unit-stars-inline">${renderStarsHtml(st.stars, 'star-item')}</span>
                          <span class="world-status-badge ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}">${statusMeta.label}</span>
                          <button
                            type="button"
                            class="btn btn-sm ${isUnlocked ? 'btn-primary' : 'btn-locked'}"
                            data-home-level-btn="${lvl.id}"
                          >
                            ${isUnlocked ? 'Abrir' : '🔒'}
                          </button>
                        </div>
                      </li>
                    `;
                  })
                  .join('')}
              </ul>
            </article>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

export function renderHomeView(mode = 'inicio') {
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const completedCount = StorageService.getCompletedCount();
  const mathNextId = StorageService.getNextPlayableLevelForSubject('matematicas');
  const espNextId = StorageService.getNextPlayableLevelForSubject('espanol');
  const recommendedId = StorageService.getRecommendedLevelId();
  const recommendedLevel = LEVELS_DATA.find((l) => l.id === recommendedId);

  if (mode === 'materias') {
    return `
      <section class="home-view materias-catalog-view view-fade-anim" data-component="HomeView" data-mode="materias">
        <div class="materias-top-banner">
          ${renderAriMascot({
            mood: 'explaining',
            message: `¡Hola, ${state.playerName}! Aquí tienes organizadas las 5 unidades de Matemáticas y las 5 de Español para ${state.selectedGrade}° Grado.`,
            compact: true,
            showGreetButton: true
          })}
        </div>
        ${renderSubjectsCatalogSection(state)}
      </section>
    `;
  }

  return `
    <section class="home-view view-fade-anim" data-component="HomeView" data-mode="inicio">
      <div class="hero-stage-card">
        <div class="hero-stage-grid">
          <div class="hero-owl-column">
            ${renderAriMascot({
              mood: 'happy',
              message: `¡Hola, ${state.playerName}! ¿Qué quieres aprender hoy?`,
              showGreetButton: true
            })}
          </div>

          <div class="hero-logo-and-subjects">
            <div class="cartoon-logo-box">
              <h1 class="title-3d-stack">
                <span class="title-3d-gold">Aprendiendo</span>
                <span class="title-3d-purple">con Ari <span class="title-star" aria-hidden="true">⭐</span></span>
              </h1>
              <div class="golden-ribbon-tag">¡Explora, aprende y diviértete!</div>
              <p class="hero-welcome-line">
                ¡Bienvenido/a, <strong id="hero-player-name">${safeName}</strong>
                (<span id="hero-grade-badge">${state.selectedGrade}° Grado</span>)!
              </p>
            </div>

            <div class="subjects-showcase-row" aria-label="Selecciona tu materia">
              <button
                type="button"
                class="subject-3d-card subject-math-card"
                id="btn-subject-matematicas"
                data-subject-level="${mathNextId}"
              >
                <div class="subject-board-inner">${renderMathCardGraphicSvg()}</div>
                <span class="subject-ribbon subject-ribbon-green">Matemáticas</span>
              </button>

              <button
                type="button"
                class="subject-3d-card subject-spanish-card"
                id="btn-subject-espanol"
                data-subject-level="${espNextId}"
              >
                <div class="subject-board-inner">${renderSpanishCardGraphicSvg()}</div>
                <span class="subject-ribbon subject-ribbon-purple">Español</span>
              </button>
            </div>

            <div class="hero-cta-group">
              <button type="button" class="btn-3d-orange" id="btn-continue-level" data-level-id="${recommendedId}">
                <span class="play-triangle" aria-hidden="true">▶</span> ¡Comenzar!
                <small class="cta-subtext">(${escapeHtml(recommendedLevel?.title || 'Nivel 1')})</small>
              </button>
              <div class="hero-secondary-shortcuts" role="group" aria-label="Accesos rápidos">
                <button type="button" class="btn-pill-glass" id="btn-start-adventure">🗺️ Mapa</button>
                <button type="button" class="btn-pill-glass" id="btn-go-practice">⚡ Práctica</button>
                <button type="button" class="btn-pill-glass" id="btn-go-progress">📊 Progreso</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra de Perfil Independiente (Separada de la portada para evitar saturación visual) -->
      <section class="profile-customizer-strip" aria-label="Configuración rápida de estudiante y grado">
        <form class="player-name-form" id="form-player-name" aria-label="Personalizar nombre de estudiante">
          <label for="input-player-name" class="grade-selector-label">👤 Estudiante:</label>
          <input
            type="text"
            id="input-player-name"
            class="input-player-name"
            maxlength="28"
            value="${safeName}"
            placeholder="Tu nombre..."
            autocomplete="off"
          />
          <button type="submit" class="btn btn-secondary btn-sm" id="btn-save-name">💾 Guardar</button>
          <span class="name-feedback" id="name-saved-feedback" aria-live="polite"></span>
        </form>

        <div class="inline-grade-selector" role="group" aria-label="Seleccionar grado escolar">
          <span class="grade-selector-label">🎓 Grado escolar:</span>
          ${['3', '4']
            .map(
              (g) => `
                <button
                  type="button"
                  id="btn-home-grade-${g}"
                  class="grade-mini-pill ${state.selectedGrade === g ? 'active' : ''}"
                  data-select-grade="${g}"
                  aria-pressed="${state.selectedGrade === g ? 'true' : 'false'}"
                >
                  ${g === '3' ? '👦' : '👧'} ${g}° Grado
                </button>
              `
            )
            .join('')}
        </div>
      </section>

      <div class="home-stats-grid" aria-label="Resumen rápido de progreso">
        <article class="summary-stat-card">
          <div class="summary-stat-icon" aria-hidden="true">⭐</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Estrellas Ganadas</span>
            <strong class="summary-stat-value" id="home-stat-stars">${totalStars} / ${maxStars}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon" aria-hidden="true">🏆</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Puntaje Total</span>
            <strong class="summary-stat-value" id="home-stat-score">${state.totalScore} pts</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon" aria-hidden="true">🔓</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Unidades Superadas</span>
            <strong class="summary-stat-value" id="home-stat-completed">${completedCount} / ${LEVELS_DATA.length}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon" aria-hidden="true">🔥</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Mejor Racha</span>
            <strong class="summary-stat-value" id="home-stat-streak">${state.bestStreak} aciertos</strong>
          </div>
        </article>
      </div>

      ${renderUnitsPreviewSection(state)}
    </section>
  `;
}

export function bindHomeViewEvents(rootElement, rerender) {
  bindAriMascotEvents(rootElement);

  const navigateOnClick = (selector, getPath) => {
    const el = rootElement.querySelector(selector);
    el?.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(getPath(el));
    });
  };

  navigateOnClick('#btn-subject-matematicas', (el) => `/nivel/${Number(el.dataset.subjectLevel) || 1}`);
  navigateOnClick('#btn-subject-espanol', (el) => `/nivel/${Number(el.dataset.subjectLevel) || 6}`);
  navigateOnClick('#btn-continue-level', (el) => `/nivel/${Number(el.dataset.levelId) || 1}`);
  navigateOnClick('#btn-start-adventure', () => '/niveles');
  navigateOnClick('#btn-go-practice', () => '/practica');
  navigateOnClick('#btn-go-progress', () => '/progreso');
  navigateOnClick('#btn-go-achievements', () => '/logros');
  navigateOnClick('#btn-subjects-to-grade', () => '/grado');

  rootElement.querySelectorAll('[data-subject-continue]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(`/nivel/${Number(btn.getAttribute('data-subject-continue')) || 1}`);
    });
  });

  rootElement.querySelectorAll('[data-subject-map]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(btn.getAttribute('data-subject-map'));
    });
  });

  rootElement.querySelectorAll('[data-home-subject-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      SoundService.play('click');
      activeHomeSubjectTab = tab.getAttribute('data-home-subject-tab') || 'todas';
      if (rerender) rerender();
    });
  });

  rootElement.querySelectorAll('[data-home-level-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lvlId = Number(btn.getAttribute('data-home-level-btn'));
      if (StorageService.isLevelUnlocked(lvlId)) {
        SoundService.play('click');
        Router.navigate(`/nivel/${lvlId}`);
      } else {
        SoundService.play('locked');
        Router.navigate('/niveles');
      }
    });
  });

  const nameForm = rootElement.querySelector('#form-player-name');
  const nameInput = rootElement.querySelector('#input-player-name');
  nameForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    SoundService.play('click');
    StorageService.setPlayerName(nameInput.value);
    if (rerender) rerender();
    const feedback = document.querySelector('#name-saved-feedback');
    if (feedback) {
      feedback.textContent = '✓ ¡Nombre actualizado!';
      setTimeout(() => {
        feedback.textContent = '';
      }, 2500);
    }
  });

  rootElement.querySelectorAll('[data-select-grade]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      StorageService.setGrade(btn.getAttribute('data-select-grade'));
      if (rerender) rerender();
    });
  });
}

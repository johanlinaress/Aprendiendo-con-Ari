import { LEVELS_DATA, CATEGORIES } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';

let currentSubjectFilter = 'todas';

export function renderLevelsMapView(routeSubject = null) {
  if (routeSubject && ['todas', 'matematicas', 'espanol'].includes(routeSubject)) {
    currentSubjectFilter = routeSubject;
  }

  const state = StorageService.getState();
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const unlockedCount = state.unlockedLevels.length;
  const completedCount = Object.values(state.levels).filter((l) => l.completed).length;
  const progressPercent = Math.round((completedCount / LEVELS_DATA.length) * 100);

  const visibleLevels =
    currentSubjectFilter === 'todas'
      ? LEVELS_DATA
      : LEVELS_DATA.filter((l) => l.subject === currentSubjectFilter);

  const bannerTitle =
    currentSubjectFilter === 'matematicas'
      ? '¡Vamos a aprender Matemáticas!'
      : currentSubjectFilter === 'espanol'
      ? '¡Descubramos el mundo de las palabras!'
      : 'Mapa de Unidades y Niveles de Ari';

  const bannerSubtitle =
    currentSubjectFilter === 'matematicas'
      ? `Matemáticas (${state.selectedGrade}° Grado): Sumas, Restas, Multiplicaciones, Divisiones y Desafío Matemático.`
      : currentSubjectFilter === 'espanol'
      ? `Español (${state.selectedGrade}° Grado): Los Verbos, El Sujeto, El Predicado, Comprensión Lectora y Textos Expositivos.`
      : `Supera cada unidad con al menos un 70% de aciertos para desbloquear el siguiente desafío (${state.selectedGrade}° Grado).`;

  return `
    <section class="levels-map-view view-fade-anim" data-component="LevelsMapView" data-subject-filter="${currentSubjectFilter}">
      <div class="map-header-banner">
        <div class="map-header-info">
          <span class="hero-pill">🗺️ Ruta de Aprendizaje • ${state.selectedGrade}° Grado</span>
          <h1 class="section-title" id="map-main-title">${bannerTitle}</h1>
          <p class="section-subtitle">${bannerSubtitle}</p>

          <!-- Pestañas de Filtro por Materia -->
          <div class="category-tabs" role="tablist" aria-label="Filtrar unidades por materia" style="margin-bottom: 0.9rem;">
            ${CATEGORIES.map(
              (cat) => `
                <button
                  type="button"
                  role="tab"
                  id="map-filter-${cat.id}"
                  class="category-tab-btn ${currentSubjectFilter === cat.id ? 'active' : ''}"
                  data-map-filter="${cat.id}"
                  aria-selected="${currentSubjectFilter === cat.id ? 'true' : 'false'}"
                >
                  <span>${cat.icon}</span> ${cat.label}
                </button>
              `
            ).join('')}
          </div>

          <div class="map-overall-progress">
            <div class="progress-label-row">
              <span>Progreso de la Aventura (${completedCount}/${LEVELS_DATA.length} unidades completadas)</span>
              <strong id="map-progress-percent">${progressPercent}%</strong>
            </div>
            <div class="progress-track" role="progressbar" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="map-quick-badges">
              <span class="map-mini-badge">🔓 Desbloqueados: <strong>${unlockedCount}/${LEVELS_DATA.length}</strong></span>
              <span class="map-mini-badge">⭐ Estrellas: <strong>${totalStars}/${maxStars}</strong></span>
              <span class="map-mini-badge">🎓 Grado activo: <strong>${state.selectedGrade}° Primaria</strong></span>
            </div>
          </div>
        </div>

        <div class="map-header-mascot">
          ${renderAriMascot({
            mood: 'excited',
            message:
              '¡Cada unidad tiene 3 etapas: 1. Aprendo, 2. Practico y 3. Demuestro lo aprendido! Logra al menos 70% para avanzar ⭐.',
            compact: true,
            showGreetButton: false
          })}
        </div>
      </div>

      <div class="map-locked-toast" id="map-locked-alert" role="alert" aria-live="assertive" hidden></div>

      <div class="levels-path-grid">
        ${visibleLevels
          .map((lvl) => {
            const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
            const lvlState = state.levels[lvl.id] || {
              completed: false,
              inProgress: false,
              stars: 0,
              bestScore: 0,
              bestAccuracy: 0,
              attempts: 0
            };

            const starsMarkup = [1, 2, 3]
              .map((idx) => {
                const earned = idx <= lvlState.stars;
                return `<span class="level-star ${earned ? 'star-on' : 'star-off'}">${earned ? '⭐' : '☆'}</span>`;
              })
              .join('');

            const stateLabel = lvlState.completed
              ? '✅ Completado'
              : isUnlocked
              ? lvlState.inProgress
                ? '⏳ En progreso'
                : '🟢 Disponible'
              : '🔒 Bloqueado';

            return `
              <article
                class="level-map-card ${isUnlocked ? 'is-unlocked' : 'is-locked'} ${lvlState.completed ? 'is-completed' : ''}"
                id="level-card-${lvl.id}"
                data-level-id="${lvl.id}"
                data-unlocked="${isUnlocked}"
              >
                <div class="level-card-header">
                  <div class="level-number-badge" style="background: ${isUnlocked ? lvl.badgeColor : '#94a3b8'}">
                    Nivel ${lvl.id} • ${lvl.subject === 'matematicas' ? 'Matemáticas' : 'Español'}
                  </div>
                  <div class="level-stars-group" aria-label="${lvlState.stars} de 3 estrellas">
                    ${starsMarkup}
                  </div>
                </div>

                <div class="level-card-body">
                  <div class="level-icon-circle" style="background: ${lvl.badgeColor}18; color: ${lvl.badgeColor}">
                    ${isUnlocked ? lvl.icon : '🔒'}
                  </div>
                  <h2 class="level-card-title">${lvl.title}</h2>
                  <p class="level-card-subtitle">${lvl.subtitle}</p>
                  <p class="level-card-description">${lvl.description}</p>
                  <div class="unit-phases-pills" aria-label="Etapas de la unidad">
                    <span class="phase-mini-pill">📘 1. Aprendo</span>
                    <span class="phase-mini-pill">✏️ 2. Practico</span>
                    <span class="phase-mini-pill">🏅 3. Demuestro</span>
                  </div>
                </div>

                <div class="level-card-stats">
                  <div class="level-mini-stat">
                    <span>Mejor Puntaje</span>
                    <strong id="level-${lvl.id}-best-score">${lvlState.bestScore} pts</strong>
                  </div>
                  <div class="level-mini-stat">
                    <span>Mejor Precisión</span>
                    <strong id="level-${lvl.id}-best-accuracy">${lvlState.bestAccuracy}%</strong>
                  </div>
                  <div class="level-mini-stat">
                    <span>Estado</span>
                    <strong>${stateLabel}</strong>
                  </div>
                </div>

                <div class="level-card-actions">
                  <button
                    type="button"
                    id="btn-play-level-${lvl.id}"
                    class="btn btn-block ${isUnlocked ? (lvlState.completed ? 'btn-secondary' : 'btn-primary') : 'btn-locked'}"
                    data-play-level="${lvl.id}"
                    data-required-level="${lvl.requiredLevel || ''}"
                  >
                    ${
                      isUnlocked
                        ? lvlState.completed
                          ? `🔄 Jugar de Nuevo (Nivel ${lvl.id})`
                          : `▶️ Jugar Nivel ${lvl.id}`
                        : `🔒 Completa el Nivel ${lvl.requiredLevel} primero`
                    }
                  </button>
                </div>
              </article>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
}

export function bindLevelsMapViewEvents(rootElement = document, rerenderCallback = null) {
  bindAriMascotEvents(rootElement);

  const filterButtons = rootElement.querySelectorAll('[data-map-filter]');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-map-filter') || 'todas';
      SoundService.play('click');
      currentSubjectFilter = filter;
      if (filter === 'matematicas') {
        Router.navigate('/matematicas');
      } else if (filter === 'espanol') {
        Router.navigate('/espanol');
      } else {
        Router.navigate('/niveles');
      }
      if (rerenderCallback) {
        rerenderCallback();
      }
    });
  });

  const alertBox = rootElement.querySelector('#map-locked-alert');
  const playButtons = rootElement.querySelectorAll('[data-play-level]');

  playButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const levelId = Number(btn.getAttribute('data-play-level'));
      const requiredId = Number(btn.getAttribute('data-required-level'));
      const unlocked = StorageService.isLevelUnlocked(levelId);

      if (unlocked) {
        SoundService.play('click');
        Router.navigate(`/nivel/${levelId}`);
      } else {
        SoundService.play('locked');
        const card = rootElement.querySelector(`#level-card-${levelId}`);
        if (card) {
          card.classList.remove('shake-anim');
          void card.offsetWidth;
          card.classList.add('shake-anim');
        }
        if (alertBox) {
          alertBox.hidden = false;
          alertBox.textContent = `🔒 El Nivel ${levelId} está bloqueado. ¡Supera primero el Nivel ${requiredId} con al menos 70% de aciertos (4 de 5 respuestas) para desbloquearlo!`;
        }
      }
    });
  });
}

import { LEVELS_DATA, CATEGORIES } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { LEVEL_STATUS_META, SUBJECT_LABELS, renderStarsHtml } from '../utils/levelStatus.js';
import { escapeHtml } from '../utils/escapeHtml.js';

const SUBJECT_BANNER_META = {
  todas: {
    title: 'Mapa de Unidades y Niveles de Ari',
    getSubtitle: (grade) =>
      `Supera cada unidad con al menos un 70% de aciertos para desbloquear el siguiente desafío (${grade}° Grado).`
  },
  matematicas: {
    title: '¡Vamos a aprender Matemáticas!',
    getSubtitle: (grade) =>
      `Matemáticas (${grade}° Grado): Sumas, Restas, Multiplicaciones, Divisiones y Desafío Matemático.`
  },
  espanol: {
    title: '¡Descubramos el mundo de las palabras!',
    getSubtitle: (grade) =>
      `Español (${grade}° Grado): Los Verbos, El Sujeto, El Predicado, Comprensión Lectora y Textos Expositivos.`
  }
};

export function renderLevelsMapView(routeSubject = 'todas') {
  const subjectFilter = ['todas', 'matematicas', 'espanol'].includes(routeSubject) ? routeSubject : 'todas';

  const state = StorageService.getState();
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const unlockedCount = state.unlockedLevels.length;
  const completedCount = StorageService.getCompletedCount();
  const progressPercent = StorageService.getOverallProgressPercent();

  const visibleLevels =
    subjectFilter === 'todas'
      ? LEVELS_DATA
      : LEVELS_DATA.filter((l) => l.subject === subjectFilter);

  const bannerMeta = SUBJECT_BANNER_META[subjectFilter] || SUBJECT_BANNER_META.todas;

  return `
    <section class="levels-map-view view-fade-anim" data-component="LevelsMapView" data-subject-filter="${subjectFilter}">
      <div class="map-header-banner">
        <div class="map-header-info">
          <span class="hero-pill">🗺️ Ruta de Aprendizaje • ${state.selectedGrade}° Grado</span>
          <h1 class="section-title" id="map-main-title">${bannerMeta.title}</h1>
          <p class="section-subtitle">${bannerMeta.getSubtitle(state.selectedGrade)}</p>

          <!-- Pestañas de Filtro por Materia -->
          <div class="category-tabs" role="tablist" aria-label="Filtrar unidades por materia">
            ${CATEGORIES.map(
              (cat) => `
                <button
                  type="button"
                  role="tab"
                  id="map-filter-${cat.id}"
                  class="category-tab-btn ${subjectFilter === cat.id ? 'active' : ''}"
                  data-map-filter="${cat.id}"
                  aria-selected="${subjectFilter === cat.id ? 'true' : 'false'}"
                >
                  <span aria-hidden="true">${cat.icon}</span> ${escapeHtml(cat.label)}
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
            const lvlState = StorageService.getLevelState(lvl.id);
            const statusKey = StorageService.getLevelStatus(lvl.id);
            const statusMeta = LEVEL_STATUS_META[statusKey];
            const subjectLabel = SUBJECT_LABELS[lvl.subject] || 'Materia';

            return `
              <article
                class="level-map-card ${isUnlocked ? 'is-unlocked' : 'is-locked'} ${lvlState.completed ? 'is-completed' : ''}"
                id="level-card-${lvl.id}"
                data-level-id="${lvl.id}"
                data-unlocked="${isUnlocked}"
              >
                <div class="level-card-header">
                  <div class="level-number-badge" style="background: ${isUnlocked ? lvl.badgeColor : '#94a3b8'}">
                    Nivel ${lvl.id} • ${subjectLabel}
                  </div>
                  <div class="level-stars-group" aria-label="${lvlState.stars} de 3 estrellas">
                    ${renderStarsHtml(lvlState.stars, 'level-star')}
                  </div>
                </div>

                <div class="level-card-body">
                  <div class="level-icon-circle" style="background: ${lvl.badgeColor}18; color: ${lvl.badgeColor}">
                    ${isUnlocked ? lvl.icon : '🔒'}
                  </div>
                  <h2 class="level-card-title">${escapeHtml(lvl.title)}</h2>
                  <p class="level-card-subtitle">${escapeHtml(lvl.subtitle)}</p>
                  <p class="level-card-description">${escapeHtml(lvl.description)}</p>
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
                    <strong>${statusMeta.label}</strong>
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

export function bindLevelsMapViewEvents(rootElement = document) {
  bindAriMascotEvents(rootElement);

  const filterButtons = rootElement.querySelectorAll('[data-map-filter]');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-map-filter') || 'todas';
      SoundService.play('click');
      const targetRoute = filter === 'matematicas' ? '/matematicas' : filter === 'espanol' ? '/espanol' : '/niveles';
      Router.navigate(targetRoute);
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

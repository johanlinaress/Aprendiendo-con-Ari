/**
 * @fileoverview Vista Principal y Catálogo de Materias de Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { LEVELS_DATA, SUBJECTS_DATA } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import {
  renderMathCardGraphicSvg,
  renderSpanishCardGraphicSvg,
  renderBoyGrade3Svg,
  renderGirlGrade4Svg
} from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';
import { LEVEL_STATUS_META, renderStarsHtml } from '../utils/levelStatus.js';

let activeHomeSubjectTab = 'todas';
let activeHomeStep = 1;

export function getActiveHomeStep() {
  return activeHomeStep;
}

export function setActiveHomeStep(step) {
  activeHomeStep = Math.max(1, Math.min(3, Number(step) || 1));
}

export function resetHomeStep() {
  activeHomeStep = 1;
}

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
                    <span class="world-icon" aria-hidden="true" style="background: ${lvl.badgeColor}20; color: ${lvl.badgeColor}">${lvl.icon}</span>
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
                  <div class="world-stars" role="img" aria-label="${lvlProgress.stars} de 3 estrellas">
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
                          <span class="subject-unit-icon" aria-hidden="true" style="background:${lvl.badgeColor}20;color:${lvl.badgeColor}">${lvl.icon}</span>
                          <div>
                            <strong>Nivel ${lvl.id}: ${escapeHtml(lvl.title)}</strong>
                            <small>${escapeHtml(lvl.subtitle)}</small>
                          </div>
                        </div>
                        <div class="subject-unit-right">
                          <span class="unit-stars-inline" aria-label="${st.stars} de 3 estrellas">${renderStarsHtml(st.stars, 'star-item')}</span>
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
  const recommendedLevel = LEVELS_DATA.find((l) => l.id === recommendedId) || LEVELS_DATA[0];
  const activeHeroSubject = recommendedLevel.subject || 'matematicas';
  const isMathActive = activeHeroSubject === 'matematicas';
  const isEspActive = activeHeroSubject === 'espanol';
  const mathNextLevel = LEVELS_DATA.find((l) => l.id === mathNextId);
  const espNextLevel = LEVELS_DATA.find((l) => l.id === espNextId);

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
    <section class="home-view view-fade-anim" data-component="HomeView" data-mode="inicio" data-active-step="${activeHomeStep}">
      <!-- ==============================================
           BARRA STEPPER: NAVEGACIÓN Y ORIENTACIÓN DE 3 PASOS
      ============================================== -->
      <nav class="onboarding-stepper" aria-label="Progreso de configuración de la aventura">
        <button
          type="button"
          class="stepper-step ${activeHomeStep === 1 ? 'is-active' : (activeHomeStep > 1 ? 'is-done' : '')}"
          data-step-target="1"
          aria-current="${activeHomeStep === 1 ? 'step' : 'false'}"
          title="Paso 1: Seleccionar grado escolar"
        >
          <span class="step-num">${activeHomeStep > 1 ? '✓' : '1'}</span>
          <span class="step-text">
            <strong>${activeHomeStep > 1 ? `${state.selectedGrade}° Grado` : '1. Elige tu Grado'}</strong>
            <small>${activeHomeStep === 1 ? 'Paso actual' : 'Completado'}</small>
          </span>
        </button>

        <span class="stepper-arrow" aria-hidden="true">➔</span>

        <button
          type="button"
          class="stepper-step ${activeHomeStep === 2 ? 'is-active' : (activeHomeStep > 2 ? 'is-done' : '')}"
          data-step-target="2"
          aria-current="${activeHomeStep === 2 ? 'step' : 'false'}"
          title="Paso 2: Escribir tu nombre"
        >
          <span class="step-num">${activeHomeStep > 2 ? '✓' : '2'}</span>
          <span class="step-text">
            <strong>${activeHomeStep > 2 ? safeName : '2. Escribe tu Nombre'}</strong>
            <small>${activeHomeStep === 2 ? 'Paso actual' : (activeHomeStep > 2 ? 'Completado' : 'Siguiente')}</small>
          </span>
        </button>

        <span class="stepper-arrow" aria-hidden="true">➔</span>

        <button
          type="button"
          class="stepper-step ${activeHomeStep === 3 ? 'is-active' : ''}"
          data-step-target="3"
          aria-current="${activeHomeStep === 3 ? 'step' : 'false'}"
          title="Paso 3: Actividades y unidades de estudio"
        >
          <span class="step-num">3</span>
          <span class="step-text">
            <strong>3. Actividades</strong>
            <small>${activeHomeStep === 3 ? '¡Listo para aprender!' : 'Próximo paso'}</small>
          </span>
        </button>
      </nav>

      <!-- ==============================================
           PASO 1: SELECCIÓN DE GRADO (Primero al abrir la página)
      ============================================== -->
      <div class="home-step-block step-block-grade ${activeHomeStep === 1 ? 'is-visible' : 'is-hidden'}" id="home-step-1">
        <div class="stage-step-card">
          <div class="stage-step-grid">
            <div class="stage-owl-column">
              ${renderAriMascot({
                mood: 'wink',
                message: '¡Hola! 👋 ¡Bienvenido/a a Aprendiendo con Ari! Primero, selecciona tu grado escolar para adaptar tus actividades:',
                showGreetButton: true
              })}
            </div>
            <div class="stage-step-content">
              <div class="step-pill-header">🎯 Paso 1 de 3 • Selección de Grado</div>
              <h1 class="step-title-3d">¿En qué grado estás?</h1>
              <p class="step-subtitle">
                Selecciona tu grado escolar para preparar las explicaciones, ejemplos y ejercicios adecuados para tu nivel:
              </p>

              <div class="grade-cards-row">
                <button
                  type="button"
                  id="btn-home-grade-3"
                  class="grade-choice-card grade-card-blue ${state.selectedGrade === '3' ? 'grade-selected' : ''}"
                  data-step-grade="3"
                  data-select-grade="3"
                  aria-pressed="${state.selectedGrade === '3' ? 'true' : 'false'}"
                >
                  <div class="grade-number-col">
                    <span class="grade-big-num">3°</span>
                    <span class="grade-word">Grado</span>
                    <span class="grade-badge-ribbon">Primaria</span>
                  </div>
                  <div class="grade-illustration-col">
                    ${renderBoyGrade3Svg()}
                  </div>
                </button>

                <button
                  type="button"
                  id="btn-home-grade-4"
                  class="grade-choice-card grade-card-pink ${state.selectedGrade === '4' ? 'grade-selected' : ''}"
                  data-step-grade="4"
                  data-select-grade="4"
                  aria-pressed="${state.selectedGrade === '4' ? 'true' : 'false'}"
                >
                  <div class="grade-number-col">
                    <span class="grade-big-num">4°</span>
                    <span class="grade-word">Grado</span>
                    <span class="grade-badge-ribbon">Primaria</span>
                  </div>
                  <div class="grade-illustration-col">
                    ${renderGirlGrade4Svg()}
                  </div>
                </button>
              </div>

              <div class="step-hint-box">
                <span>✨ Toca tu grado para continuar al siguiente paso</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==============================================
           PASO 2: ESCRIBE TU NOMBRE (Luego se escribe el nombre)
      ============================================== -->
      <div class="home-step-block step-block-name ${activeHomeStep === 2 ? 'is-visible' : 'is-hidden'}" id="home-step-2">
        <div class="stage-step-card">
          <div class="stage-step-grid">
            <div class="stage-owl-column">
              ${renderAriMascot({
                mood: 'happy',
                message: `¡Excelente elección (${state.selectedGrade}° Grado)! 🌟 Ahora, ¿cómo te llamas? Escribe tu nombre o apodo para comenzar tu aventura:`,
                showGreetButton: true
              })}
            </div>
            <div class="stage-step-content">
              <div class="step-pill-header">✍️ Paso 2 de 3 • Tu Nombre</div>
              <h2 class="step-title-3d">¿Cómo te llamas?</h2>
              <p class="step-subtitle">
                Escribe tu nombre o apodo para que Ari te acompañe, guarde tus estrellas y celebre tus victorias:
              </p>
              <p class="child-privacy-hint">
                🔒 <strong>Privacidad infantil:</strong> escribe solo tu primer nombre o un apodo divertido (sin apellidos ni datos personales).
              </p>

              <form class="player-name-form-step" id="form-player-name" aria-label="Escribe tu nombre de estudiante">
                <div class="name-input-wrapper">
                  <span class="name-avatar-icon" aria-hidden="true">👤</span>
                  <input
                    type="text"
                    id="input-player-name"
                    class="input-player-name input-player-name-hero"
                    maxlength="28"
                    value="${safeName}"
                    placeholder="Escribe tu nombre aquí..."
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="step-actions-row">
                  <button type="submit" class="btn btn-primary btn-step-continue" id="btn-save-name">
                    🚀 ¡Listo! Continuar a las Actividades
                  </button>
                  <button type="button" class="btn btn-outline btn-step-back" id="btn-back-to-grade">
                    ⬅ Cambiar Grado (${state.selectedGrade}°)
                  </button>
                </div>
                <span class="name-feedback" id="name-saved-feedback" aria-live="polite"></span>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- ==============================================
           PASO 3: SECCIÓN DE ACTIVIDADES (Y ya ahí muestra la sección de actividades)
      ============================================== -->
      <div class="home-step-block step-block-activities ${activeHomeStep === 3 ? 'is-visible' : 'is-hidden'}" id="home-step-3">
        <div class="hero-stage-card">
          <div class="hero-stage-grid">
            <div class="hero-owl-column">
              ${renderAriMascot({
                mood: 'celebrating',
                message: `¡Bienvenido/a, ${state.playerName}! 🎉 Aquí están tus actividades de ${state.selectedGrade}° Grado. ¿Por cuál materia quieres empezar?`,
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
                <div class="hero-author-badge" title="Creado y diseñado por Johan Linares">✨ Obra original de Johan Linares</div>
                <p class="hero-welcome-line">
                  ¡Bienvenido/a, <strong id="hero-player-name">${safeName}</strong>!
                  <span class="hero-grade-tag" id="hero-grade-badge">${state.selectedGrade}° Grado</span>
                </p>
                <div class="hero-profile-switch-row">
                  <button type="button" class="btn-step-restart" id="btn-edit-student-profile" title="Cambiar grado o nombre">
                    ✏️ Cambiar grado o nombre
                  </button>
                </div>
              </div>

              <div class="subjects-showcase-row" role="group" aria-label="Selecciona tu materia para comenzar">
                <button
                  type="button"
                  class="subject-3d-card subject-math-card ${isMathActive ? 'subject-card-active' : ''}"
                  id="btn-subject-matematicas"
                  data-subject-level="${mathNextId}"
                  aria-pressed="${isMathActive ? 'true' : 'false'}"
                >
                  <span class="subject-active-pill">
                    <span class="subject-radio-dot" aria-hidden="true"></span>
                    ${isMathActive ? 'Materia seleccionada' : 'Toca para jugar'}
                  </span>
                  <div class="subject-board-inner">${renderMathCardGraphicSvg()}</div>
                  <span class="subject-ribbon subject-ribbon-green">Matemáticas</span>
                  <small class="subject-next-unit-hint">Siguiente: ${escapeHtml(mathNextLevel?.title || 'Unidad 1: Sumas')}</small>
                </button>

                <button
                  type="button"
                  class="subject-3d-card subject-spanish-card ${isEspActive ? 'subject-card-active' : ''}"
                  id="btn-subject-espanol"
                  data-subject-level="${espNextId}"
                  aria-pressed="${isEspActive ? 'true' : 'false'}"
                >
                  <span class="subject-active-pill">
                    <span class="subject-radio-dot" aria-hidden="true"></span>
                    ${isEspActive ? 'Materia seleccionada' : 'Toca para jugar'}
                  </span>
                  <div class="subject-board-inner">${renderSpanishCardGraphicSvg()}</div>
                  <span class="subject-ribbon subject-ribbon-purple">Español</span>
                  <small class="subject-next-unit-hint">Siguiente: ${escapeHtml(espNextLevel?.title || 'Unidad 1: Los Verbos')}</small>
                </button>
              </div>

              <div class="hero-cta-group">
                <button type="button" class="btn-3d-orange" id="btn-continue-level" data-level-id="${recommendedId}">
                  <span class="play-triangle" aria-hidden="true">▶</span> ¡Comenzar ${isMathActive ? 'Matemáticas' : 'Español'}!
                  <small class="cta-subtext">(${escapeHtml(recommendedLevel.title)})</small>
                </button>
                <div class="hero-secondary-shortcuts" role="group" aria-label="Accesos rápidos">
                  <button type="button" class="btn-pill-glass" id="btn-start-adventure">🗺️ Explorar Mapa de Unidades</button>
                  <button type="button" class="btn-pill-glass sr-only-shortcut" id="btn-go-practice">⚡ Práctica Libre</button>
                  <button type="button" class="btn-pill-glass sr-only-shortcut" id="btn-go-progress">📊 Mi Progreso</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-stats-grid" role="region" aria-label="Resumen rápido de progreso">
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
      </div>
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

  // Eventos de Paso 1: Selección de Grado
  rootElement.querySelectorAll('[data-step-grade]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-step-grade');
      SoundService.play('correct');
      StorageService.setGrade(grade);
      activeHomeStep = 2;
      if (rerender) rerender();
    });
  });

  rootElement.querySelectorAll('[data-select-grade]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-select-grade');
      SoundService.play('click');
      StorageService.setGrade(grade);
      activeHomeStep = 2;
      if (rerender) rerender();
    });
  });

  // Eventos de Paso 2: Escribe tu Nombre
  const nameForm = rootElement.querySelector('#form-player-name');
  const nameInput = rootElement.querySelector('#input-player-name');
  const saveNameBtn = rootElement.querySelector('#btn-save-name');

  const handleSaveName = (e) => {
    if (e) e.preventDefault();
    const val = nameInput ? nameInput.value.trim() : '';
    const newName = val || 'Explorador/a';
    StorageService.setPlayerName(newName);
    SoundService.play('celebrate');
    activeHomeStep = 3;
    if (rerender) rerender();
    const feedback = document.querySelector('#name-saved-feedback');
    if (feedback) {
      feedback.textContent = `✓ ¡Bienvenido/a, ${newName}!`;
      setTimeout(() => {
        if (feedback) feedback.textContent = '';
      }, 2500);
    }
  };

  saveNameBtn?.addEventListener('click', handleSaveName);
  nameForm?.addEventListener('submit', handleSaveName);

  const backToGradeBtn = rootElement.querySelector('#btn-back-to-grade');
  backToGradeBtn?.addEventListener('click', () => {
    SoundService.play('click');
    activeHomeStep = 1;
    if (rerender) rerender();
  });

  // Eventos de Paso 3: Volver a cambiar perfil o grado
  const editProfileBtn = rootElement.querySelector('#btn-edit-student-profile');
  editProfileBtn?.addEventListener('click', () => {
    SoundService.play('click');
    activeHomeStep = 1;
    if (rerender) rerender();
  });

  // Eventos del Stepper interactivo
  rootElement.querySelectorAll('[data-step-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetStep = Number(btn.getAttribute('data-step-target'));
      if (targetStep >= 1 && targetStep <= 3) {
        SoundService.play('click');
        activeHomeStep = targetStep;
        if (rerender) rerender();
      }
    });
  });

  // Autofoco amigable cuando se activa el Paso 2
  if (activeHomeStep === 2) {
    setTimeout(() => {
      const inp = rootElement.querySelector('#input-player-name');
      inp?.focus();
      inp?.select();
    }, 40);
  }
}

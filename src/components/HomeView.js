import { LEVELS_DATA } from '../data/levelsData.js';
import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import {
  renderMathCardGraphicSvg,
  renderSpanishCardGraphicSvg
} from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderHomeView(mode = 'inicio') {
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const completedCount = Object.values(state.levels).filter((l) => l.completed).length;
  const mathNextId = StorageService.getNextPlayableLevelForSubject('matematicas');
  const espNextId = StorageService.getNextPlayableLevelForSubject('espanol');

  return `
    <section class="home-view view-fade-anim" data-component="HomeView" data-mode="${mode}">
      <!-- PANEL 1: PORTADA APRENDIENDO CON ARI + PANEL 3: ¿QUÉ QUIERES APRENDER HOY? -->
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
              <div class="title-3d-stack">
                <span class="title-3d-gold">Aprendiendo</span>
                <span class="title-3d-purple">con Ari <span class="title-star">⭐</span></span>
              </div>
              <div class="golden-ribbon-tag">
                ¡Explora, aprende y diviértete!
              </div>
              <p class="hero-welcome-line">
                ¡Bienvenido/a, <strong id="hero-player-name">${safeName}</strong> (<span id="hero-grade-badge">${state.selectedGrade}° Grado</span>)!
              </p>
            </div>

            <!-- Grandes Tarjetas 3D de Materias (Matemáticas y Español) -->
            <div class="subjects-showcase-row" aria-label="Selecciona tu materia">
              <button
                type="button"
                class="subject-3d-card subject-math-card"
                id="btn-subject-matematicas"
                data-subject-level="${mathNextId}"
              >
                <div class="subject-board-inner">
                  ${renderMathCardGraphicSvg()}
                </div>
                <span class="subject-ribbon subject-ribbon-green">Matemáticas</span>
              </button>

              <button
                type="button"
                class="subject-3d-card subject-spanish-card"
                id="btn-subject-espanol"
                data-subject-level="${espNextId}"
              >
                <div class="subject-board-inner">
                  ${renderSpanishCardGraphicSvg()}
                </div>
                <span class="subject-ribbon subject-ribbon-purple">Español</span>
              </button>
            </div>

            <!-- Botón Naranja Principal ¡Comenzar! y Controles Rápidos -->
            <div class="hero-cta-group">
              <button type="button" class="btn-3d-orange" id="btn-continue-level" data-level-id="${mathNextId}">
                <span class="play-triangle">▶</span> ¡Comenzar!
              </button>
              <button type="button" class="btn-pill-glass" id="btn-start-adventure">
                🗺️ Mapa de Unidades
              </button>
              <button type="button" class="btn-pill-glass" id="btn-go-practice">
                ⚡ Práctica Libre
              </button>
              <button type="button" class="btn-pill-glass" id="btn-go-progress">
                📊 Mi Progreso
              </button>
              <button type="button" class="btn-pill-glass" id="btn-go-achievements">
                🏆 Logros
              </button>
            </div>

            <!-- Personalizar Nombre y Grado Escolar -->
            <div class="profile-customizer-strip">
              <form class="player-name-form" id="form-player-name" aria-label="Personalizar nombre de estudiante">
                <label for="input-player-name" class="sr-only">Tu nombre</label>
                <input
                  type="text"
                  id="input-player-name"
                  class="input-player-name"
                  maxlength="28"
                  value="${safeName}"
                  placeholder="Tu nombre..."
                />
                <button type="submit" class="btn btn-secondary btn-sm" id="btn-save-name">
                  💾 Guardar Nombre
                </button>
                <span class="name-feedback" id="name-saved-feedback" aria-live="polite"></span>
              </form>

              <div class="inline-grade-selector" aria-label="Seleccionar grado escolar">
                <span class="grade-selector-label">¿En qué grado estás?</span>
                <button
                  type="button"
                  id="btn-home-grade-3"
                  class="grade-mini-pill ${state.selectedGrade === '3' ? 'active' : ''}"
                  data-select-grade="3"
                >
                  👦 3° Grado
                </button>
                <button
                  type="button"
                  id="btn-home-grade-4"
                  class="grade-mini-pill ${state.selectedGrade === '4' ? 'active' : ''}"
                  data-select-grade="4"
                >
                  👧 4° Grado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjetas de Resumen de Avance -->
      <div class="home-stats-grid" aria-label="Resumen rápido de progreso">
        <article class="summary-stat-card">
          <div class="summary-stat-icon">⭐</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Estrellas Ganadas</span>
            <strong class="summary-stat-value" id="home-stat-stars">${totalStars} / ${maxStars}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🏆</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Puntaje Total</span>
            <strong class="summary-stat-value" id="home-stat-score">${state.totalScore} pts</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🔓</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Unidades Superadas</span>
            <strong class="summary-stat-value" id="home-stat-completed">${completedCount} / ${LEVELS_DATA.length}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🔥</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Mejor Racha</span>
            <strong class="summary-stat-value" id="home-stat-streak">${state.bestStreak} aciertos</strong>
          </div>
        </article>
      </div>

      <!-- Vista Previa de las 10 Unidades (5 Matemáticas + 5 Español) -->
      <div class="home-worlds-section">
        <div class="section-header-row">
          <div>
            <h2 class="section-title">Unidades de Matemáticas y Español (${state.selectedGrade}° Grado)</h2>
            <p class="section-subtitle">Cada unidad incluye explicación («Aprendo»), práctica y evaluación con mínimo 70% para desbloquear la siguiente.</p>
          </div>
        </div>

        <div class="worlds-preview-grid">
          ${LEVELS_DATA.map((lvl) => {
            const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
            const lvlProgress = state.levels[lvl.id] || { stars: 0, completed: false, inProgress: false };
            const statusText = lvlProgress.completed
              ? '✅ Completado'
              : isUnlocked
              ? lvlProgress.inProgress
                ? '⏳ En progreso'
                : '🔓 Disponible'
              : '🔒 Bloqueado';

            return `
              <article class="world-preview-card ${isUnlocked ? 'world-unlocked' : 'world-locked'}" data-level-card="${lvl.id}">
                <div class="world-card-top">
                  <span class="world-icon" style="background: ${lvl.badgeColor}20; color: ${lvl.badgeColor}">${lvl.icon}</span>
                  <span class="world-status-badge ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}">
                    ${statusText}
                  </span>
                </div>
                <h3 class="world-card-title">${lvl.unitLabel}</h3>
                <p class="world-card-desc">${lvl.description}</p>
                <div class="world-card-footer">
                  <div class="world-stars" aria-label="${lvlProgress.stars} de 3 estrellas">
                    ${[1, 2, 3].map((s) => `<span class="${s <= lvlProgress.stars ? 'star-on' : 'star-off'}">${s <= lvlProgress.stars ? '⭐' : '☆'}</span>`).join('')}
                  </div>
                  <button
                    type="button"
                    class="btn btn-sm ${isUnlocked ? 'btn-primary' : 'btn-secondary'}"
                    data-home-level-btn="${lvl.id}"
                  >
                    ${isUnlocked ? 'Jugar Ahora' : 'Ver en Mapa'}
                  </button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

export function bindHomeViewEvents(rootElement = document) {
  bindAriMascotEvents(rootElement);

  const nameForm = rootElement.querySelector('#form-player-name');
  const nameInput = rootElement.querySelector('#input-player-name');
  const heroName = rootElement.querySelector('#hero-player-name');
  const navGreeting = document.querySelector('#nav-player-greeting');
  const ariSpeech = rootElement.querySelector('#ari-speech-text');
  const feedback = rootElement.querySelector('#name-saved-feedback');

  if (nameForm && nameInput) {
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      SoundService.play('click');
      const saved = StorageService.setPlayerName(nameInput.value);
      nameInput.value = saved;
      if (heroName) heroName.textContent = saved;
      if (navGreeting) navGreeting.textContent = `Hola, ${saved}`;
      if (ariSpeech) {
        ariSpeech.textContent = `¡Hola, ${saved}! ¿Qué quieres aprender hoy?`;
      }
      if (feedback) {
        feedback.textContent = '✓ ¡Nombre actualizado!';
        setTimeout(() => {
          if (feedback) feedback.textContent = '';
        }, 2500);
      }
    });
  }

  const gradePills = rootElement.querySelectorAll('[data-select-grade]');
  gradePills.forEach((btn) => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-select-grade');
      SoundService.play('click');
      const savedGrade = StorageService.setGrade(grade);
      gradePills.forEach((b) => b.classList.toggle('active', b.getAttribute('data-select-grade') === savedGrade));
      const heroGrade = rootElement.querySelector('#hero-grade-badge');
      const navGrade = document.querySelector('#nav-grade-label');
      const navSwitch = document.querySelector('#btn-change-grade');
      if (heroGrade) heroGrade.textContent = `${savedGrade}° Grado`;
      if (navGrade) navGrade.textContent = `${savedGrade}° Grado ▾`;
      if (navSwitch) navSwitch.textContent = `🎓 ${savedGrade}° Grado`;
    });
  });

  const mathBtn = rootElement.querySelector('#btn-subject-matematicas');
  if (mathBtn) {
    mathBtn.addEventListener('click', () => {
      const targetLvl = Number(mathBtn.getAttribute('data-subject-level')) || 1;
      SoundService.play('click');
      Router.navigate(`/nivel/${targetLvl}`);
    });
  }

  const espBtn = rootElement.querySelector('#btn-subject-espanol');
  if (espBtn) {
    espBtn.addEventListener('click', () => {
      const targetLvl = Number(espBtn.getAttribute('data-subject-level')) || 6;
      SoundService.play('click');
      Router.navigate(`/nivel/${targetLvl}`);
    });
  }

  const startBtn = rootElement.querySelector('#btn-start-adventure');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  const continueBtn = rootElement.querySelector('#btn-continue-level');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const lvlId = Number(continueBtn.getAttribute('data-level-id')) || 1;
      SoundService.play('click');
      Router.navigate(`/nivel/${lvlId}`);
    });
  }

  const practiceBtn = rootElement.querySelector('#btn-go-practice');
  if (practiceBtn) {
    practiceBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/practica');
    });
  }

  const progressBtn = rootElement.querySelector('#btn-go-progress');
  if (progressBtn) {
    progressBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/progreso');
    });
  }

  const achievementsBtn = rootElement.querySelector('#btn-go-achievements');
  if (achievementsBtn) {
    achievementsBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/progreso');
    });
  }

  const levelBtns = rootElement.querySelectorAll('[data-home-level-btn]');
  levelBtns.forEach((btn) => {
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
}

import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { renderBoyGrade3Svg, renderGirlGrade4Svg } from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderGradeSelectView() {
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const profiles = StorageService.getProfiles();

  return `
    <section class="grade-select-view view-fade-anim" data-component="GradeSelectView">
      <div class="stage-top-bar">
        <button type="button" class="btn-back-circle" id="btn-grade-back" title="Volver al inicio" aria-label="Volver al inicio">
          ⬅
        </button>
      </div>

      <div class="grade-stage-grid">
        <div class="grade-mascot-col">
          ${renderAriMascot({
            mood: 'wink',
            message: `¡Hola, ${state.playerName}! Escribe tu nombre y selecciona tu grado escolar para adaptar las actividades.`,
            showGreetButton: false
          })}
        </div>

        <div class="grade-panel-card">
          <div class="purple-ribbon-banner">
            <h1>¿En qué grado estás?</h1>
          </div>

          <div class="grade-cards-row">
            <button
              type="button"
              id="btn-select-grade-3"
              class="grade-choice-card grade-card-blue ${state.selectedGrade === '3' ? 'grade-selected' : ''}"
              data-grade="3"
              aria-pressed="${state.selectedGrade === '3' ? 'true' : 'false'}"
            >
              <div class="grade-number-col">
                <span class="grade-big-num">3°</span>
                <span class="grade-word">Grado</span>
              </div>
              <div class="grade-illustration-col">
                ${renderBoyGrade3Svg()}
              </div>
            </button>

            <button
              type="button"
              id="btn-select-grade-4"
              class="grade-choice-card grade-card-pink ${state.selectedGrade === '4' ? 'grade-selected' : ''}"
              data-grade="4"
              aria-pressed="${state.selectedGrade === '4' ? 'true' : 'false'}"
            >
              <div class="grade-number-col">
                <span class="grade-big-num">4°</span>
                <span class="grade-word">Grado</span>
              </div>
              <div class="grade-illustration-col">
                ${renderGirlGrade4Svg()}
              </div>
            </button>
          </div>

          <!-- Presentación del Estudiante (RF-03) -->
          <form class="student-setup-bar" id="form-grade-student-name" aria-label="Configurar nombre o apodo del estudiante">
            <label for="input-grade-student-name" class="student-setup-label">👦👧 Tu nombre o apodo:</label>
            <div class="student-setup-controls">
              <input
                type="text"
                id="input-grade-student-name"
                class="input-player-name"
                maxlength="28"
                value="${safeName}"
                placeholder="Escribe tu nombre..."
              />
              <button type="submit" class="btn btn-primary btn-sm" id="btn-save-student-setup">
                ✅ Continuar al Menú
              </button>
            </div>
          </form>

          <!-- Perfiles de Niños / Multidispositivo (RF-03) -->
          <div class="profiles-manager-section" id="profiles-manager-panel">
            <div class="profiles-header-row">
              <span class="profiles-label">👥 Perfiles en este dispositivo:</span>
              <button type="button" class="btn-new-child-profile" id="btn-create-new-profile">
                ➕ Nuevo Niño
              </button>
            </div>
            <div class="profiles-list-row">
              ${profiles
                .map(
                  (p) => `
                <button
                  type="button"
                  class="profile-chip-btn ${p.name === state.playerName ? 'active-profile' : ''}"
                  data-switch-profile="${p.id}"
                  title="Cambiar al perfil de ${escapeHtml(p.name)}"
                >
                  <span class="chip-avatar">👤</span>
                  <span class="chip-name">${escapeHtml(p.name)}</span>
                  <span class="chip-grade">${p.grade}°</span>
                </button>
              `
                )
                .join('')}
            </div>
            <p class="profiles-device-tip">
              📱 <em>Tu avance se guarda de forma independiente en cada dispositivo. Para que otro niño juegue aquí con su propio puntaje, pulsa «Nuevo Niño».</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function bindGradeSelectViewEvents(rootElement = document) {
  bindAriMascotEvents(rootElement);

  const backBtn = rootElement.querySelector('#btn-grade-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/inicio');
    });
  }

  const nameInput = rootElement.querySelector('#input-grade-student-name');
  const studentForm = rootElement.querySelector('#form-grade-student-name');

  if (studentForm && nameInput) {
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      SoundService.play('correct');
      StorageService.setPlayerName(nameInput.value);
      Router.navigate('/materias');
    });
  }

  const gradeBtns = rootElement.querySelectorAll('[data-grade]');
  gradeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-grade');
      if (nameInput && nameInput.value.trim()) {
        StorageService.setPlayerName(nameInput.value);
      }
      SoundService.play('correct');
      StorageService.setGrade(grade);
      Router.navigate('/materias');
    });
  });

  const profileBtns = rootElement.querySelectorAll('[data-switch-profile]');
  profileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const profId = btn.getAttribute('data-switch-profile');
      SoundService.play('click');
      StorageService.switchProfile(profId);
      Router.navigate('/materias');
    });
  });

  const newProfileBtn = rootElement.querySelector('#btn-create-new-profile');
  if (newProfileBtn && nameInput) {
    newProfileBtn.addEventListener('click', () => {
      SoundService.play('click');
      nameInput.value = '';
      nameInput.placeholder = 'Escribe el nombre del nuevo niño...';
      nameInput.focus();
    });
  }
}

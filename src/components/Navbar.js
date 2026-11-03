import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderPlayerAvatarSvg } from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderNavbar(currentRoute) {
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const overallPercent = StorageService.getOverallProgressPercent();
  const activeRoute = currentRoute?.name || 'inicio';

  return `
    <header class="app-navbar" data-component="Navbar">
      <div class="navbar-container">
        <div class="navbar-left-cluster">
          <button
            type="button"
            class="player-profile-pill"
            id="btn-brand-home"
            data-nav="/inicio"
            aria-label="Ir al inicio de Aprendiendo con Ari"
          >
            <span class="profile-avatar-ring">${renderPlayerAvatarSvg()}</span>
            <span class="profile-text-col">
              <strong id="nav-player-greeting">Hola, ${safeName}</strong>
              <small id="nav-grade-label">${state.selectedGrade}° Grado ▾</small>
            </span>
          </button>

          <button
            type="button"
            class="btn-grade-switch"
            id="btn-change-grade"
            data-nav="/grado"
            title="Cambiar grado escolar"
          >
            🎓 ${state.selectedGrade}° Grado
          </button>
        </div>

        <button
          type="button"
          class="mobile-menu-toggle"
          id="btn-mobile-menu"
          aria-expanded="false"
          aria-controls="navbar-links-group"
          aria-label="Abrir menú de navegación"
        >
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>

        <nav class="navbar-links" id="navbar-links-group" aria-label="Navegación principal">
          <button
            type="button"
            id="nav-inicio"
            class="nav-link-btn ${activeRoute === 'inicio' ? 'active' : ''}"
            data-nav="/inicio"
          >
            🏠 Inicio
          </button>
          <button
            type="button"
            id="nav-materias"
            class="nav-link-btn ${activeRoute === 'materias' || activeRoute === 'grado' ? 'active' : ''}"
            data-nav="/materias"
          >
            📚 Materias
          </button>
          <button
            type="button"
            id="nav-niveles"
            class="nav-link-btn ${activeRoute === 'niveles' || activeRoute === 'nivel' ? 'active' : ''}"
            data-nav="/niveles"
          >
            🗺️ Niveles
          </button>
          <button
            type="button"
            id="nav-practica"
            class="nav-link-btn ${activeRoute === 'practica' ? 'active' : ''}"
            data-nav="/practica"
          >
            ⚡ Práctica
          </button>
          <button
            type="button"
            id="nav-progreso"
            class="nav-link-btn ${activeRoute === 'progreso' ? 'active' : ''}"
            data-nav="/progreso"
          >
            🏅 Progreso
          </button>
        </nav>

        <div class="navbar-stats-bar">
          <div class="stat-pill stat-pill-stars" title="Estrellas recolectadas">
            <span class="star-3d-icon" aria-hidden="true">⭐</span>
            <span id="nav-stars-value">${totalStars}/${maxStars}</span>
          </div>

          <div class="stat-pill stat-pill-score" title="Puntaje total acumulado">
            <span aria-hidden="true">🏆</span>
            <span id="nav-score-value">${state.totalScore}</span> <span class="stat-unit">pts</span>
          </div>

          <div class="stat-pill stat-pill-progress" title="Avance total de unidades">
            <div class="mini-progress-track">
              <div class="mini-progress-fill" style="width: ${overallPercent}%"></div>
            </div>
            <span id="nav-progress-percent">${overallPercent}%</span>
          </div>

          <div class="stat-pill stat-pill-streak" title="Racha actual">
            <span aria-hidden="true">🔥</span>
            <span id="nav-streak-value">${state.currentStreak}</span>
          </div>

          <button
            type="button"
            id="btn-music-toggle"
            class="btn-circle-audio ${state.musicEnabled ? 'audio-on' : 'audio-off'}"
            aria-pressed="${state.musicEnabled ? 'true' : 'false'}"
            title="${state.musicEnabled ? 'Silenciar música' : 'Activar música'}"
          >
            <span aria-hidden="true">🎵</span>
          </button>

          <button
            type="button"
            id="btn-sound-toggle"
            class="btn-circle-audio btn-sound-toggle ${state.soundEnabled ? 'sound-on audio-on' : 'sound-off audio-off'}"
            aria-pressed="${state.soundEnabled ? 'true' : 'false'}"
            title="${state.soundEnabled ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido'}"
          >
            <span class="sound-icon" aria-hidden="true">${state.soundEnabled ? '🔊' : '🔇'}</span>
            <span class="sound-label sr-only">${state.soundEnabled ? 'Sonido' : 'Silencio'}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function bindNavbarEvents(rootElement = document) {
  const navButtons = rootElement.querySelectorAll('.app-navbar [data-nav]');
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      SoundService.play('click');
      Router.navigate(target);
    });
  });

  const musicBtn = rootElement.querySelector('#btn-music-toggle');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      const enabled = StorageService.toggleMusic();
      musicBtn.classList.toggle('audio-on', enabled);
      musicBtn.classList.toggle('audio-off', !enabled);
      musicBtn.setAttribute('aria-pressed', String(enabled));
    });
  }

  const soundBtn = rootElement.querySelector('#btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const enabled = StorageService.toggleSound();
      soundBtn.classList.toggle('sound-on', enabled);
      soundBtn.classList.toggle('sound-off', !enabled);
      soundBtn.classList.toggle('audio-on', enabled);
      soundBtn.classList.toggle('audio-off', !enabled);
      soundBtn.setAttribute('aria-pressed', String(enabled));
      const iconEl = soundBtn.querySelector('.sound-icon');
      const labelEl = soundBtn.querySelector('.sound-label');
      if (iconEl) iconEl.textContent = enabled ? '🔊' : '🔇';
      if (labelEl) labelEl.textContent = enabled ? 'Sonido' : 'Silencio';
    });
  }

  const mobileMenuBtn = rootElement.querySelector('#btn-mobile-menu');
  const linksGroup = rootElement.querySelector('#navbar-links-group');
  if (mobileMenuBtn && linksGroup) {
    mobileMenuBtn.addEventListener('click', () => {
      SoundService.play('click');
      const isOpen = linksGroup.classList.toggle('mobile-open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

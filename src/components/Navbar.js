import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderPlayerAvatarSvg } from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';

/** Pestañas principales. `section` coincide con route.section definido en el Router. */
export const NAV_ITEMS = [
  { id: 'inicio', path: '/inicio', icon: '🏠', label: 'Inicio' },
  { id: 'materias', path: '/materias', icon: '📚', label: 'Materias' },
  { id: 'niveles', path: '/niveles', icon: '🗺️', label: 'Niveles' },
  { id: 'practica', path: '/practica', icon: '⚡', label: 'Práctica' },
  { id: 'progreso', path: '/progreso', icon: '🏅', label: 'Progreso' }
];

export function renderNavbar(currentRoute) {
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const overallPercent = StorageService.getOverallProgressPercent();
  const activeSection = currentRoute?.section || null;

  return `
    <header class="app-navbar" data-component="Navbar">
      <div class="navbar-container">
        <div class="navbar-brand-cluster">
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
              <small id="nav-grade-label">${state.selectedGrade}° Grado</small>
            </span>
          </button>
          <button
            type="button"
            class="btn-grade-switch"
            id="btn-change-grade"
            data-nav="/grado"
            title="Cambiar grado o perfil (${state.selectedGrade}° Grado)"
            aria-label="Cambiar grado escolar (actual: ${state.selectedGrade}° Grado)"
          >
            🎓 ${state.selectedGrade}°
          </button>
        </div>

        <nav class="navbar-links" id="navbar-links-group" aria-label="Navegación principal">
          ${NAV_ITEMS.map((item) => {
            const isActive = item.id === activeSection;
            return `
              <button
                type="button"
                id="nav-${item.id}"
                class="nav-link-btn ${isActive ? 'active' : ''}"
                data-nav="${item.path}"
                ${isActive ? 'aria-current="page"' : ''}
              >
                <span aria-hidden="true">${item.icon}</span> ${item.label}
              </button>
            `;
          }).join('')}
        </nav>

        <div class="navbar-stats-bar">
          <div class="stat-pill stat-pill-stars" title="Estrellas recolectadas">
            <span aria-hidden="true">⭐</span>
            <span id="nav-stars-value">${totalStars}/${maxStars}</span>
          </div>
          <div class="stat-pill stat-pill-score" title="Puntaje total acumulado">
            <span aria-hidden="true">🏆</span>
            <span id="nav-score-value">${state.totalScore}</span><span class="stat-unit">pts</span>
          </div>
          <div class="stat-pill stat-pill-progress" title="Unidades completadas">
            <div class="mini-progress-track" aria-hidden="true">
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
            <span class="sr-only">Música</span>
          </button>
          <button
            type="button"
            id="btn-sound-toggle"
            class="btn-circle-audio ${state.soundEnabled ? 'audio-on' : 'audio-off'}"
            aria-pressed="${state.soundEnabled ? 'true' : 'false'}"
            title="${state.soundEnabled ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido'}"
          >
            <span class="sound-icon" aria-hidden="true">${state.soundEnabled ? '🔊' : '🔇'}</span>
            <span class="sr-only">Efectos de sonido</span>
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
      </div>
    </header>
  `;
}

function syncAudioButton(btn, enabled, onTitle, offTitle) {
  btn.classList.toggle('audio-on', enabled);
  btn.classList.toggle('audio-off', !enabled);
  btn.setAttribute('aria-pressed', String(enabled));
  btn.title = enabled ? onTitle : offTitle;
}

export function bindNavbarEvents(rootElement = document) {
  const navbar = rootElement.querySelector('.app-navbar');
  if (!navbar) return;

  navbar.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(btn.getAttribute('data-nav'));
    });
  });

  const musicBtn = navbar.querySelector('#btn-music-toggle');
  musicBtn?.addEventListener('click', () => {
    const enabled = StorageService.toggleMusic();
    syncAudioButton(musicBtn, enabled, 'Silenciar música', 'Activar música');
  });

  const soundBtn = navbar.querySelector('#btn-sound-toggle');
  soundBtn?.addEventListener('click', () => {
    const enabled = StorageService.toggleSound();
    syncAudioButton(soundBtn, enabled, 'Silenciar efectos de sonido', 'Activar efectos de sonido');
    const iconEl = soundBtn.querySelector('.sound-icon');
    if (iconEl) iconEl.textContent = enabled ? '🔊' : '🔇';
  });

  const mobileMenuBtn = navbar.querySelector('#btn-mobile-menu');
  const linksGroup = navbar.querySelector('#navbar-links-group');
  if (mobileMenuBtn && linksGroup) {
    const setOpen = (open) => {
      linksGroup.classList.toggle('mobile-open', open);
      mobileMenuBtn.setAttribute('aria-expanded', String(open));
      mobileMenuBtn.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    };

    mobileMenuBtn.addEventListener('click', () => {
      SoundService.play('click');
      setOpen(!linksGroup.classList.contains('mobile-open'));
    });

    linksGroup.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        mobileMenuBtn.focus();
      }
    });
  }
}

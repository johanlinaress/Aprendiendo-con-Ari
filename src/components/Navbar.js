/**
 * @fileoverview Barra de navegación principal y controles de audio para Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { StorageService } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderPlayerAvatarSvg } from './Illustrations.js';
import { escapeHtml } from '../utils/escapeHtml.js';

/** Pestañas principales de navegación vertical en el Sidebar */
export const SIDEBAR_ITEMS = [
  { id: 'inicio', path: '/inicio', icon: '🏠', label: 'Inicio' },
  { id: 'materias', path: '/materias', icon: '📚', label: 'Materias' },
  { id: 'niveles', path: '/niveles', icon: '🗺️', label: 'Niveles' },
  { id: 'practica', path: '/practica', icon: '⚡', label: 'Práctica' },
  { id: 'progreso', path: '/progreso', icon: '🏅', label: 'Progreso' }
];

export const NAV_ITEMS = [
  ...SIDEBAR_ITEMS,
  { id: 'donaciones', path: '/donaciones', icon: '💖', label: 'Donaciones', isHighlighted: true }
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
      <!-- ==============================================
           1. SIDEBAR LATERAL IZQUIERDO (Opciones didácticas)
      ============================================== -->
      <aside class="app-sidebar" id="app-sidebar" aria-label="Navegación lateral de aprendizaje">
        <div class="sidebar-brand-box">
          <button
            type="button"
            class="sidebar-brand-btn"
            id="btn-brand-home"
            data-nav="/inicio"
            aria-label="Aprendiendo con Ari — Ir al inicio"
          >
            <span class="sidebar-brand-icon" aria-hidden="true">🦉</span>
            <span class="sidebar-brand-text">
              <strong class="sidebar-brand-name">Aprendiendo</strong>
              <small class="sidebar-brand-tag">con Ari ⭐</small>
            </span>
          </button>

          <button
            type="button"
            class="btn-grade-switch sidebar-grade-switch"
            id="btn-change-grade"
            data-nav="/grado"
            title="Cambiar grado o perfil (${state.selectedGrade}° Grado)"
            aria-label="${state.selectedGrade}° Grado — Cambiar grado escolar"
          >
            🎓 <span id="nav-grade-label">${state.selectedGrade}° Grado</span>
          </button>
        </div>

        <nav class="sidebar-nav-list navbar-links" id="navbar-links-group" aria-label="Secciones de estudio">
          ${SIDEBAR_ITEMS.map((item) => {
            const isActive = item.id === activeSection;
            return `
              <button
                type="button"
                id="nav-${item.id}"
                class="sidebar-nav-btn ${isActive ? 'active' : ''}"
                data-nav="${item.path}"
                ${isActive ? 'aria-current="page"' : ''}
              >
                <span class="sidebar-nav-icon" aria-hidden="true">${item.icon}</span>
                <span class="sidebar-nav-label">${item.label}</span>
              </button>
            `;
          }).join('')}
        </nav>

        <div class="sidebar-footer-note">
          <span class="sidebar-footer-author">✨ Por Johan Linares</span>
        </div>
      </aside>

      <!-- ==============================================
           2. BARRA SUPERIOR (TOPBAR: Usuario, Stats, Donar y Audio)
      ============================================== -->
      <div class="app-topbar" id="app-topbar">
        <div class="topbar-container">
          <!-- Lado Izquierdo: Botón móvil + Perfil del Alumno -->
          <div class="topbar-left-cluster">
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

            <button
              type="button"
              class="player-profile-pill"
              id="btn-topbar-profile"
              data-nav="/grado"
              aria-label="Hola, ${safeName} • Cambiar perfil o grado"
            >
              <span class="profile-avatar-ring">${renderPlayerAvatarSvg()}</span>
              <span class="profile-text-col">
                <strong id="nav-player-greeting">Hola, ${safeName}</strong>
                <small>⭐ Explorador/a</small>
              </span>
            </button>
          </div>

          <!-- Centro: Estadísticas de progreso y recompensas -->
          <div class="topbar-center-cluster navbar-stats-bar">
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
          </div>

          <!-- Lado Derecho: Donar + Música y Sonido -->
          <div class="topbar-right-cluster">
            <button
              type="button"
              id="nav-donaciones"
              class="topbar-donar-btn ${activeSection === 'donaciones' ? 'active' : ''}"
              data-nav="/donaciones"
              aria-label="Apoyar con Donaciones"
              title="Apoyar el proyecto Aprendiendo con Ari"
            >
              <span class="donar-heart-anim" aria-hidden="true">💖</span>
              <span class="donar-label-text">Donar</span>
            </button>

            <div class="navbar-audio-cluster" role="group" aria-label="Controles de audio">
              <button
                type="button"
                id="btn-music-toggle"
                class="btn-circle-audio ${state.musicEnabled ? 'audio-on' : 'audio-off'}"
                aria-pressed="${state.musicEnabled ? 'true' : 'false'}"
                title="${state.musicEnabled ? 'Silenciar música' : 'Activar música'}"
              >
                <span class="music-icon" aria-hidden="true">${state.musicEnabled ? '🎵' : '🔇'}</span>
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
          </div>
        </div>
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

  const mobileMenuBtn = navbar.querySelector('#btn-mobile-menu');
  const linksGroup = navbar.querySelector('#navbar-links-group');
  const sidebar = navbar.querySelector('#app-sidebar');

  const setOpen = (open) => {
    if (!linksGroup || !mobileMenuBtn) return;
    linksGroup.classList.toggle('mobile-open', open);
    if (sidebar) sidebar.classList.toggle('mobile-open', open);
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  };

  navbar.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      setOpen(false);
      Router.navigate(btn.getAttribute('data-nav'));
    });
  });

  const musicBtn = navbar.querySelector('#btn-music-toggle');
  musicBtn?.addEventListener('click', () => {
    const enabled = StorageService.toggleMusic();
    syncAudioButton(musicBtn, enabled, 'Silenciar música', 'Activar música');
    const musicIcon = musicBtn.querySelector('.music-icon');
    if (musicIcon) musicIcon.textContent = enabled ? '🎵' : '🔇';
  });

  const soundBtn = navbar.querySelector('#btn-sound-toggle');
  soundBtn?.addEventListener('click', () => {
    const enabled = StorageService.toggleSound();
    syncAudioButton(soundBtn, enabled, 'Silenciar efectos de sonido', 'Activar efectos de sonido');
    const iconEl = soundBtn.querySelector('.sound-icon');
    if (iconEl) iconEl.textContent = enabled ? '🔊' : '🔇';
  });

  if (mobileMenuBtn && linksGroup) {
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

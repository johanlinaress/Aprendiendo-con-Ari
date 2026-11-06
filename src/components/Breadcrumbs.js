import { Router } from '../router/Router.js';
import { SoundService } from '../services/SoundService.js';
import { LEVELS_DATA } from '../data/levelsData.js';
import { escapeHtml } from '../utils/escapeHtml.js';

/**
 * Genera la barra de migas de pan (Breadcrumbs) clickeable según la ruta activa.
 * Proporciona orientación espacial inmediata para los niños y navegación accesible.
 * @param {object} route Ruta parseada por el Router.
 * @returns {string} HTML de la barra de breadcrumbs.
 */
export function renderBreadcrumbs(route) {
  if (!route || route.name === 'inicio' || route.path === '/inicio') {
    return ''; // En la página de inicio no se necesitan breadcrumbs
  }

  const items = [{ label: 'Inicio', icon: '🏠', path: '/inicio' }];

  if (route.name === 'grado') {
    items.push({ label: 'Elegir Grado y Perfil', icon: '🎓', path: null });
  } else if (route.name === 'materias') {
    items.push({ label: 'Materias', icon: '📚', path: null });
  } else if (route.name === 'niveles') {
    items.push({ label: 'Materias', icon: '📚', path: '/materias' });
    const subject = route.params?.subject;
    if (subject === 'matematicas') {
      items.push({ label: 'Matemáticas', icon: '➕', path: null });
    } else if (subject === 'espanol') {
      items.push({ label: 'Español', icon: '📖', path: null });
    } else {
      items.push({ label: 'Mapa de Niveles', icon: '🗺️', path: null });
    }
  } else if (route.name === 'nivel') {
    const levelId = Number(route.params?.id);
    const level = LEVELS_DATA.find((l) => l.id === levelId);
    items.push({ label: 'Materias', icon: '📚', path: '/materias' });
    if (level) {
      const isMath = level.subject === 'matematicas';
      items.push({
        label: isMath ? 'Matemáticas' : 'Español',
        icon: isMath ? '➕' : '📖',
        path: isMath ? '/matematicas' : '/espanol'
      });
      items.push({
        label: `Nivel ${level.id}: ${level.title}`,
        icon: '⭐',
        path: null
      });
    } else {
      items.push({ label: `Nivel ${levelId}`, icon: '⭐', path: null });
    }
  } else if (route.name === 'practica') {
    items.push({ label: 'Práctica Libre', icon: '⚡', path: null });
  } else if (route.name === 'progreso') {
    items.push({ label: 'Mi Progreso', icon: '🏅', path: route.params?.focus === 'logros' ? '/progreso' : null });
    if (route.params?.focus === 'logros') {
      items.push({ label: 'Mis Medallas y Logros', icon: '🏆', path: null });
    }
  } else if (route.name === 'donaciones') {
    const method = route.params?.method || 'hub';
    if (method === 'hub') {
      items.push({ label: 'Donaciones y Apoyo', icon: '💖', path: null });
    } else {
      items.push({ label: 'Donaciones', icon: '💖', path: '/donaciones' });
      const methodLabels = {
        nequi: { label: 'Nequi / Bre-B', icon: '🟣' },
        arq: { label: 'ARQ Dólares', icon: '🔵' },
        paypal: { label: 'PayPal', icon: '🔷' },
        podio: { label: 'Podio de Donadores', icon: '🏆' }
      };
      const info = methodLabels[method] || { label: method, icon: '💳' };
      items.push({ label: info.label, icon: info.icon, path: null });
    }
  } else if (route.name === 'notfound') {
    items.push({ label: 'Página no encontrada', icon: '🔍', path: null });
  }

  return `
    <nav class="app-breadcrumbs-bar" aria-label="Ruta de navegación">
      <ol class="breadcrumbs-list">
        ${items
          .map((item, idx) => {
            const isLast = idx === items.length - 1;
            if (isLast || !item.path) {
              return `
                <li class="breadcrumb-item breadcrumb-active" aria-current="page">
                  <span class="breadcrumb-icon" aria-hidden="true">${item.icon}</span>
                  <span class="breadcrumb-text">${escapeHtml(item.label)}</span>
                </li>
              `;
            }
            return `
              <li class="breadcrumb-item">
                <button
                  type="button"
                  class="breadcrumb-link"
                  data-breadcrumb-nav="${item.path}"
                  title="Ir a ${escapeHtml(item.label)}"
                >
                  <span class="breadcrumb-icon" aria-hidden="true">${item.icon}</span>
                  <span class="breadcrumb-text">${escapeHtml(item.label)}</span>
                </button>
                <span class="breadcrumb-separator" aria-hidden="true">›</span>
              </li>
            `;
          })
          .join('')}
      </ol>
    </nav>
  `;
}

/**
 * Vincula los eventos de navegación de los breadcrumbs.
 * @param {HTMLElement} rootElement 
 */
export function bindBreadcrumbsEvents(rootElement = document) {
  const links = rootElement.querySelectorAll('[data-breadcrumb-nav]');
  links.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetPath = btn.getAttribute('data-breadcrumb-nav');
      if (!targetPath) return;
      SoundService.play('click');
      Router.navigate(targetPath);
    });
  });
}

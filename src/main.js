import { Router } from './router/Router.js';
import { StorageService } from './services/StorageService.js';
import { SoundService } from './services/SoundService.js';
import { LEVELS_DATA, ACHIEVEMENTS_DATA, EXPOSITIVE_READINGS_DATA } from './data/levelsData.js';
import { renderNavbar, bindNavbarEvents } from './components/Navbar.js';
import { renderFooter, bindFooterEvents } from './components/Footer.js';
import { renderHomeView, bindHomeViewEvents } from './components/HomeView.js';
import { renderGradeSelectView, bindGradeSelectViewEvents } from './components/GradeSelectView.js';
import { renderLevelsMapView, bindLevelsMapViewEvents } from './components/LevelsMapView.js';
import { renderExerciseView, bindExerciseViewEvents } from './components/ExerciseView.js';
import { renderPracticeView, bindPracticeViewEvents } from './components/PracticeView.js';
import { renderProgressView, bindProgressViewEvents } from './components/ProgressView.js';
import { renderNotFoundView, bindNotFoundViewEvents } from './components/NotFoundView.js';
import { renderSceneBackgroundSvg } from './components/Illustrations.js';

const APP_TITLE = 'Aprendiendo con Ari';

/**
 * Registro de vistas: cada ruta tiene UNA función de renderizado y UNA de eventos.
 * - render(route, { isRerender }) devuelve el HTML de la vista.
 * - bind(root, rerender, route) conecta eventos y opcionalmente devuelve una
 *   función de limpieza (por ejemplo, para detener temporizadores).
 */
const VIEWS = {
  inicio: {
    render: () => renderHomeView('inicio'),
    bind: (root, rerender) => bindHomeViewEvents(root, rerender)
  },
  materias: {
    render: () => renderHomeView('materias'),
    bind: (root, rerender) => bindHomeViewEvents(root, rerender)
  },
  grado: {
    render: () => renderGradeSelectView(),
    bind: (root) => bindGradeSelectViewEvents(root)
  },
  niveles: {
    render: (route) => renderLevelsMapView(route.params.subject),
    bind: (root) => bindLevelsMapViewEvents(root)
  },
  nivel: {
    render: (route, { isRerender }) => renderExerciseView(route.params.id, isRerender),
    bind: (root, rerender) => bindExerciseViewEvents(root, rerender)
  },
  practica: {
    render: () => renderPracticeView(),
    bind: (root, rerender) => bindPracticeViewEvents(root, rerender)
  },
  progreso: {
    render: (route) => renderProgressView(route.params.focus),
    bind: (root, rerender, route) => bindProgressViewEvents(root, rerender, route.params.focus)
  },
  notfound: {
    render: (route) => renderNotFoundView(route.path),
    bind: (root) => bindNotFoundViewEvents(root)
  }
};

let activeCleanup = null;

function ensureShell(appRoot) {
  let shell = appRoot.querySelector('.app-shell:not([data-ssr-shell])');
  if (shell) return shell;

  appRoot.innerHTML = `
    <div class="app-shell">
      <a class="skip-link" href="#main-content">Saltar al contenido</a>
      ${renderSceneBackgroundSvg()}
      <header class="app-navbar" data-component="Navbar"></header>
      <main class="app-main-container" id="main-content" tabindex="-1"></main>
      ${renderFooter()}
    </div>
  `;
  shell = appRoot.querySelector('.app-shell');
  bindFooterEvents(shell);

  // El enlace de accesibilidad no debe cambiar la ruta (hash), solo mover el foco.
  shell.querySelector('.skip-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    shell.querySelector('#main-content')?.focus();
  });
  return shell;
}

/**
 * Renderiza la ruta actual.
 * @param {object} route  Ruta parseada por el Router.
 * @param {object} opts   isRerender=true cuando la vista se actualiza sin cambiar de ruta
 *                        (respuesta seleccionada, pestaña interna, etc.).
 */
function renderApp(route, { isRerender = false } = {}) {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  if (typeof activeCleanup === 'function') {
    activeCleanup();
  }
  activeCleanup = null;

  const view = VIEWS[route.name] || VIEWS.notfound;
  const shell = ensureShell(appRoot);

  // 1. Barra de navegación (siempre refleja puntaje, estrellas y pestaña activa).
  const oldNavbar = shell.querySelector('.app-navbar');
  oldNavbar.outerHTML = renderNavbar(route);
  bindNavbarEvents(shell);

  // 2. Contenido principal.
  const main = shell.querySelector('#main-content');
  main.classList.toggle('is-rerender', isRerender);
  main.innerHTML = view.render(route, { isRerender });

  const rerender = () => renderApp(Router.getCurrentRoute(), { isRerender: true });
  const cleanup = view.bind(main, rerender, route);
  if (typeof cleanup === 'function') {
    activeCleanup = cleanup;
  }

  if (!isRerender) {
    document.title = route.title ? `${route.title} · ${APP_TITLE}` : APP_TITLE;
    window.scrollTo({ top: 0, behavior: 'auto' });
    main.focus({ preventScroll: true });
  }
}

function bootstrap() {
  SoundService.syncDebugState();

  window.__ARI_APP__ = {
    Router,
    StorageService,
    SoundService,
    LEVELS_DATA,
    ACHIEVEMENTS_DATA,
    EXPOSITIVE_READINGS_DATA
  };

  Router.onRouteChange((route) => renderApp(route));
  Router.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

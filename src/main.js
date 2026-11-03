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
import { renderAriMascot, bindAriMascotEvents } from './components/AriMascot.js';
import { renderSceneBackgroundSvg } from './components/Illustrations.js';
import { escapeHtml } from './utils/escapeHtml.js';

function renderNotFoundView(routePath) {
  return `
    <section class="not-found-view view-fade-anim" data-component="NotFoundView">
      <div class="guard-card">
        <div class="guard-icon">🧭</div>
        <h1>Ruta no encontrada</h1>
        <p>La dirección <code>${escapeHtml(routePath)}</code> no existe en Aprendiendo con Ari.</p>
        <div class="guard-mascot">
          ${renderAriMascot({
            mood: 'thinking',
            message: '¡Parece que nos desviamos del mapa! Volvamos al inicio o al mapa de niveles.',
            compact: true,
            showGreetButton: false
          })}
        </div>
        <div class="guard-actions">
          <button type="button" class="btn btn-primary btn-lg" id="btn-404-home">
            🏠 Volver al Inicio
          </button>
          <button type="button" class="btn btn-outline btn-lg" id="btn-404-map">
            🗺️ Ir al Mapa de Niveles
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderApp(route, preserveExerciseSession = false) {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  let mainContentHtml = '';

  switch (route.name) {
    case 'inicio':
      mainContentHtml = renderHomeView('inicio');
      break;
    case 'materias':
      mainContentHtml = renderHomeView('materias');
      break;
    case 'grado':
      mainContentHtml = renderGradeSelectView();
      break;
    case 'niveles':
      mainContentHtml = renderLevelsMapView(route.params?.subject);
      break;
    case 'nivel':
      mainContentHtml = renderExerciseView(route.params.id, preserveExerciseSession);
      break;
    case 'practica':
      mainContentHtml = renderPracticeView();
      break;
    case 'progreso':
      mainContentHtml = renderProgressView();
      break;
    default:
      mainContentHtml = renderNotFoundView(route.path);
      break;
  }

  appRoot.innerHTML = `
    <div class="app-shell">
      ${renderSceneBackgroundSvg()}
      ${renderNavbar(route)}
      <main class="app-main-container" id="main-content" tabindex="-1">
        ${mainContentHtml}
      </main>
      ${renderFooter()}
    </div>
  `;

  bindNavbarEvents(appRoot);
  bindFooterEvents(appRoot);

  switch (route.name) {
    case 'inicio':
    case 'materias':
      bindHomeViewEvents(appRoot);
      break;
    case 'grado':
      bindGradeSelectViewEvents(appRoot);
      break;
    case 'niveles':
      bindLevelsMapViewEvents(appRoot, () => {
        renderApp(Router.getCurrentRoute(), false);
      });
      break;
    case 'nivel':
      bindExerciseViewEvents(appRoot, (keepSession = true) => {
        renderApp(Router.getCurrentRoute(), keepSession);
      });
      break;
    case 'practica':
      bindPracticeViewEvents(appRoot, () => {
        renderApp(Router.getCurrentRoute(), false);
      });
      break;
    case 'progreso':
      bindProgressViewEvents(appRoot, () => {
        renderApp(Router.getCurrentRoute(), false);
      });
      break;
    default: {
      bindAriMascotEvents(appRoot);
      const btnHome = appRoot.querySelector('#btn-404-home');
      const btnMap = appRoot.querySelector('#btn-404-map');
      if (btnHome) {
        btnHome.addEventListener('click', () => {
          SoundService.play('click');
          Router.navigate('/inicio');
        });
      }
      if (btnMap) {
        btnMap.addEventListener('click', () => {
          SoundService.play('click');
          Router.navigate('/niveles');
        });
      }
      break;
    }
  }
}

function bootstrap() {
  SoundService.syncDebugState();

  if (typeof window !== 'undefined') {
    window.__ARI_APP__ = {
      Router,
      StorageService,
      SoundService,
      LEVELS_DATA,
      ACHIEVEMENTS_DATA,
      EXPOSITIVE_READINGS_DATA
    };
  }

  Router.onRouteChange((route) => {
    renderApp(route, false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  Router.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

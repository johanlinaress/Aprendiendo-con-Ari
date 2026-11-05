import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderNotFoundView(routePath) {
  return `
    <section class="not-found-view view-fade-anim" data-component="NotFoundView">
      <div class="guard-card">
        <div class="guard-icon" aria-hidden="true">🧭</div>
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
          <button type="button" class="btn btn-primary btn-lg" id="btn-404-home">🏠 Volver al Inicio</button>
          <button type="button" class="btn btn-outline btn-lg" id="btn-404-map">🗺️ Ir al Mapa de Niveles</button>
        </div>
      </div>
    </section>
  `;
}

export function bindNotFoundViewEvents(rootElement) {
  bindAriMascotEvents(rootElement);

  rootElement.querySelector('#btn-404-home')?.addEventListener('click', () => {
    SoundService.play('click');
    Router.navigate('/inicio');
  });
  rootElement.querySelector('#btn-404-map')?.addEventListener('click', () => {
    SoundService.play('click');
    Router.navigate('/niveles');
  });
}

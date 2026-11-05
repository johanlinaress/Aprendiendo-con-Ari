import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';

export function renderFooter() {
  return `
    <footer class="app-footer" data-component="Footer">
      <div class="footer-container">
        <div class="footer-brand">
          <span class="footer-logo">🦉 Aprendiendo con Ari</span>
          <p class="footer-tagline">Plataforma interactiva para aprender matemáticas, lectura, lógica, ciencias y geometría.</p>
          <p class="footer-copyright">© 2026 Johan Linares. Todos los derechos reservados.</p>
        </div>
        <div class="footer-links" role="navigation" aria-label="Enlaces del pie de página">
          <button type="button" class="footer-nav-btn" data-footer-nav="/inicio">Inicio</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/niveles">Mapa de Niveles</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/practica">Práctica Libre</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/progreso">Mi Progreso</button>
        </div>
      </div>
    </footer>
  `;
}

export function bindFooterEvents(rootElement = document) {
  const btns = rootElement.querySelectorAll('[data-footer-nav]');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-footer-nav');
      SoundService.play('click');
      Router.navigate(target);
    });
  });
}

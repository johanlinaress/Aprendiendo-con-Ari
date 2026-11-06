/**
 * @fileoverview Pie de página institucional y derechos de autor.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { SoundService } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { showLegalNoticeModal } from './LegalNoticeModal.js';

export function renderFooter() {
  return `
    <footer class="app-footer" data-component="Footer">
      <div class="footer-container">
        <div class="footer-brand">
          <span class="footer-logo">🦉 Aprendiendo con Ari</span>
          <p class="footer-tagline">Plataforma educativa para niños de 3° y 4° de primaria · Matemáticas y Español.</p>
          <p class="footer-copyright">
            © 2026 <strong>Johan Linares</strong>. Todos los derechos reservados.
            <span class="footer-legal-tag">· Obra y personaje «Ari» protegidos por propiedad intelectual</span>
          </p>
        </div>
        <div class="footer-links" role="navigation" aria-label="Enlaces del pie de página">
          <button type="button" class="footer-nav-btn" data-footer-nav="/inicio">Inicio</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/niveles">Mapa de Niveles</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/practica">Práctica Libre</button>
          <button type="button" class="footer-nav-btn" data-footer-nav="/progreso">Mi Progreso</button>
          <button type="button" class="footer-nav-btn footer-donation-btn" data-footer-nav="/donaciones">💖 Donaciones</button>
          <button type="button" class="footer-nav-btn footer-legal-btn" id="btn-footer-legal" aria-label="Ver derechos de autor y aviso de propiedad intelectual">⚖️ Derechos de Autor</button>
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

  const legalBtn = rootElement.querySelector('#btn-footer-legal');
  legalBtn?.addEventListener('click', () => {
    showLegalNoticeModal();
  });
}

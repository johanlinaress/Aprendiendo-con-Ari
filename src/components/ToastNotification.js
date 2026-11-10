/**
 * @fileoverview Sistema de notificaciones emergentes (Toasts 3D) no bloqueantes para Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { escapeHtml } from '../utils/escapeHtml.js';

let activeToastTimeout = null;

/**
 * Muestra una notificación emergente 3D accesible y no bloqueante.
 * @param {string} message Mensaje a mostrar
 * @param {'success'|'error'|'info'} [type='success'] Tipo visual del aviso
 * @param {number} [durationMs=4200] Tiempo en pantalla antes de cerrarse
 */
export function showAriToast(message, type = 'success', durationMs = 4200) {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector('#ari-toast-notification');
  if (existing) {
    existing.remove();
  }
  if (activeToastTimeout) {
    clearTimeout(activeToastTimeout);
    activeToastTimeout = null;
  }

  const iconMap = {
    success: '🦉✨',
    error: '⚠️',
    info: '💡'
  };
  const icon = iconMap[type] || iconMap.success;

  const toastEl = document.createElement('div');
  toastEl.id = 'ari-toast-notification';
  toastEl.className = `ari-toast-card ari-toast-${type}`;
  toastEl.setAttribute('role', 'status');
  toastEl.setAttribute('aria-live', 'polite');

  toastEl.innerHTML = `
    <span class="ari-toast-icon" aria-hidden="true">${icon}</span>
    <span class="ari-toast-text">${escapeHtml(String(message || ''))}</span>
    <button type="button" class="ari-toast-close" aria-label="Cerrar notificación">✕</button>
  `;

  document.body.appendChild(toastEl);

  const dismiss = () => {
    if (activeToastTimeout) {
      clearTimeout(activeToastTimeout);
      activeToastTimeout = null;
    }
    toastEl.classList.add('is-leaving');
    setTimeout(() => {
      toastEl.remove();
    }, 220);
  };

  const closeBtn = toastEl.querySelector('.ari-toast-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', dismiss);
  }

  activeToastTimeout = setTimeout(dismiss, durationMs);
}

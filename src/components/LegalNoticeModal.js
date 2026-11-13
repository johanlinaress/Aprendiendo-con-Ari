/**
 * @fileoverview Modal de Aviso Legal, Derechos de Autor y Propiedad Intelectual.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { SoundService } from '../services/SoundService.js';

export function renderLegalNoticeModal() {
  return `
    <div class="modal-backdrop" id="legal-notice-modal" data-component="LegalNoticeModal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
      <div class="modal-card legal-modal-card modal-pop-anim">
        <div class="modal-icon" aria-hidden="true">🦉⚖️</div>
        <h3 class="modal-title" id="legal-modal-title">Derechos de Autor y Propiedad Intelectual</h3>
        
        <div class="legal-modal-body">
          <div class="legal-author-card">
            <span class="legal-badge">Obra Original Registrada</span>
            <p class="legal-author-name"><strong>Autor y Titular:</strong> Johan Linares</p>
            <p class="legal-author-fullname"><small>Johan Sttive Linares Barragán</small></p>
            <p class="legal-author-contact">✉️ Contacto: <code>johansttivelinaresb@gmail.com</code></p>
            <p class="legal-author-year">📅 <strong>© 2026 Johan Linares. Todos los derechos reservados.</strong></p>
          </div>

          <div class="legal-protection-list">
            <h4>Protección de Propiedad Intelectual (Convenio de Berna / OMPI):</h4>
            <ul>
              <li>
                <strong>Personaje «Ari el Búho Sabio»:</strong> Nombre, identidad visual, birrete académico, expresiones vectoriales en SVG y diseño gráfico original.
              </li>
              <li>
                <strong>Metodología Pedagógica:</strong> Estructura didáctica en 3 fases (<em>1. Aprendo</em>, <em>2. Practico</em> y <em>3. Demuestro lo aprendido</em>).
              </li>
              <li>
                <strong>Banco Curricular y Contenidos:</strong> Más de 200 ejercicios formativos para 3° y 4° grado de primaria en Matemáticas y Español.
              </li>
              <li>
                <strong>Código Fuente y Software:</strong> Arquitectura SPA, diseño CSS3 responsivo, motor de audio y scripts del proyecto.
              </li>
            </ul>
          </div>

          <div class="legal-protection-list">
            <h4>🔒 Privacidad Infantil y Protección de Datos (Ley 1581 / Habeas Data):</h4>
            <ul>
              <li>
                <strong>Cero Datos Personales Sensibles:</strong> La plataforma solo solicita un primer nombre o apodo lúdico para saludar al estudiante. No recolecta apellidos, correos electrónicos, teléfonos ni ubicación de menores.
              </li>
              <li>
                <strong>Sincronización Anónima en la Nube:</strong> El respaldo opcional en Supabase funciona mediante un Código de Explorador aleatorio (<code>ARI-XXXX-XXXX</code>) sin cuentas ni contraseñas.
              </li>
              <li>
                <strong>Telemetría Pedagógica Anónima:</strong> Las estadísticas de aprendizaje registran únicamente aciertos y avance curricular de forma agregada y anónima.
              </li>
            </ul>
          </div>

          <div class="legal-warning-box">
            <p>
              ⚠️ <em>Queda expresamente prohibida la copia, reproducción, duplicación, distribución, ingeniería inversa o cualquier explotación no autorizada de esta plataforma o de su personaje sin el consentimiento previo por escrito de Johan Linares.</em>
            </p>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-primary" id="legal-modal-close" autofocus>
            ✅ Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  `;
}

export function showLegalNoticeModal() {
  const existing = document.querySelector('#legal-notice-modal');
  if (existing) existing.remove();

  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderLegalNoticeModal();
  const modalEl = wrapper.firstElementChild;
  document.body.appendChild(modalEl);

  SoundService.play('click');

  const closeBtn = modalEl.querySelector('#legal-modal-close');

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    window.removeEventListener('keydown', handleKeydown);
    SoundService.play('click');
    modalEl.remove();
  };

  closeBtn?.addEventListener('click', closeModal);
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  window.addEventListener('keydown', handleKeydown);
}

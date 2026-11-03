import { SoundService } from '../services/SoundService.js';

export function renderConfirmModal({
  id = 'confirm-modal',
  title = '¿Estás seguro/a?',
  message = 'Esta acción no se puede deshacer.',
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar'
} = {}) {
  return `
    <div class="modal-backdrop" id="${id}" data-component="ConfirmModal" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
      <div class="modal-card modal-pop-anim">
        <div class="modal-icon" aria-hidden="true">⚠️</div>
        <h3 class="modal-title" id="${id}-title">${title}</h3>
        <p class="modal-message">${message}</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-secondary" id="${id}-cancel">
            ${cancelLabel}
          </button>
          <button type="button" class="btn btn-danger" id="${id}-confirm">
            ${confirmLabel}
          </button>
        </div>
      </div>
    </div>
  `;
}

export function showConfirmModal({ title, message, confirmLabel, cancelLabel, onConfirm, onCancel }) {
  const existing = document.querySelector('#confirm-modal');
  if (existing) existing.remove();

  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderConfirmModal({
    id: 'confirm-modal',
    title,
    message,
    confirmLabel,
    cancelLabel
  });

  const modalEl = wrapper.firstElementChild;
  document.body.appendChild(modalEl);

  const cancelBtn = modalEl.querySelector('#confirm-modal-cancel');
  const confirmBtn = modalEl.querySelector('#confirm-modal-confirm');

  const closeModal = () => {
    modalEl.remove();
  };

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      SoundService.play('click');
      closeModal();
      if (onCancel) onCancel();
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      SoundService.play('click');
      closeModal();
      if (onConfirm) onConfirm();
    });
  }
}

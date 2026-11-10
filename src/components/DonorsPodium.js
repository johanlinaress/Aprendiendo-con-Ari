import { SoundService } from '../services/SoundService.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export const DONORS_STORAGE_KEY = 'aprendiendo_con_ari_donors_v2';

/**
 * Lista inicial oficial: 0 donaciones hasta el momento (esperando donadores reales).
 * El creador (Johan Linares) registrará quién donó y cuánto cuando lleguen los aportes.
 */
export const DEFAULT_DONORS = [];

let cachedDonors = null;
let tickerTimerId = null;

/**
 * Obtiene la lista actual de donadores desde localStorage o lista vacía.
 */
export function getDonorsList() {
  if (cachedDonors && Array.isArray(cachedDonors)) {
    return cachedDonors;
  }

  if (typeof window === 'undefined' || !window.localStorage) {
    cachedDonors = [...DEFAULT_DONORS];
    return cachedDonors;
  }

  try {
    const raw = window.localStorage.getItem(DONORS_STORAGE_KEY);
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        cachedDonors = parsed;
        return cachedDonors;
      }
    }
  } catch (e) {
    // Error al leer JSON
  }

  cachedDonors = [...DEFAULT_DONORS];
  return cachedDonors;
}

/**
 * Guarda la lista de donadores en localStorage.
 */
export function saveDonorsList(donors) {
  cachedDonors = donors;
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(DONORS_STORAGE_KEY, JSON.stringify(donors));
    } catch (e) {
      // Ignorar quota exceeded
    }
  }
}

/**
 * Calcula los totales recaudados por divisa (COP / USD).
 */
export function getTotalDonated(donors = getDonorsList()) {
  let cop = 0;
  let usd = 0;
  for (const d of donors) {
    const amt = Number(d.amount) || 0;
    if (amt > 0) {
      const cur = String(
        d.currency || (d.method && d.method.includes('PayPal') ? 'USD' : 'COP')
      ).toUpperCase();
      if (cur === 'USD') {
        usd += amt;
      } else {
        cop += amt;
      }
    }
  }
  return { cop, usd, count: donors.length };
}

/**
 * Formatea el texto de Total Donado con el signo "+" solicitado por el usuario.
 */
export function formatTotalDonated(totals = getTotalDonated()) {
  const parts = [];
  if (totals.cop > 0) {
    parts.push(`$${totals.cop.toLocaleString('es-CO')} COP`);
  }
  if (totals.usd > 0) {
    parts.push(`$${totals.usd} USD`);
  }
  if (parts.length === 0) {
    return '$0 COP';
  }
  return parts.join(' + ') + ' +';
}

/**
 * Agrega un nuevo donador al podio y lo persiste inmediatamente con su monto y agradecimiento.
 */
export function addDonor({
  name,
  amount = 0,
  currency = null,
  method = 'Bre-B Nequi',
  message = ''
}) {
  const cleanName = String(name || '').trim();
  if (!cleanName) return null;

  const numAmount = Number(String(amount).replace(/[^0-9.]/g, '')) || 0;
  const determinedCurrency =
    currency || (String(method).includes('PayPal') ? 'USD' : 'COP');
  const formattedAmount =
    numAmount > 0
      ? determinedCurrency === 'USD'
        ? `$${numAmount} USD`
        : `$${numAmount.toLocaleString('es-CO')} COP`
      : '';

  const donors = [...getDonorsList()];
  const cleanMessage = String(message || '').trim();
  const thankYouMessage = cleanMessage
    ? `¡Muchas gracias ${cleanName} con todo el corazón! 💖 ${cleanMessage}`
    : `¡Muchas gracias ${cleanName} con todo el corazón! 💖 Tu generosidad llena de alegría las lecciones de miles de niños.`;

  const newDonor = {
    id: 'donor-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
    name: cleanName,
    amount: numAmount,
    currency: determinedCurrency,
    amountFormatted: formattedAmount,
    badge: 'Donador de Corazón 💖',
    method: method || 'Bre-B Nequi',
    hearts: 10,
    message: thankYouMessage,
    date: 'Donación verificada',
    isNew: true
  };

  donors.unshift(newDonor);
  saveDonorsList(donors);
  return newDonor;
}

/**
 * Incrementa en 1 los corazones de un donador.
 */
export function giveHeartToDonor(donorId) {
  const donors = [...getDonorsList()];
  const donor = donors.find((d) => d.id === donorId);
  if (!donor) return 0;

  donor.hearts = (Number(donor.hearts) || 0) + 1;
  saveDonorsList(donors);
  return donor.hearts;
}

/**
 * Renderiza la sección completa del Podio de Donadores.
 */
export function renderDonorsPodiumSection() {
  const donors = getDonorsList();
  const totals = getTotalDonated(donors);

  // Los 3 primeros ocupan el podio (1º Oro, 2º Plata, 3º Bronce)
  const top1 = donors[0] || null;
  const top2 = donors[1] || null;
  const top3 = donors[2] || null;

  // Los demás donadores forman el Muro de Donadores de Corazón
  const wallDonors = donors.slice(3);

  return `
    <section class="donors-podium-section" id="seccion-podio-donadores" aria-label="Podio de agradecimiento a donadores">
      <!-- Encabezado del Podio -->
      <div class="podium-header-banner">
        <div class="podium-title-row">
          <span class="podium-trophy-icon" aria-hidden="true">🏆</span>
          <div class="podium-title-text">
            <h2 class="podium-main-title">Podio de Agradecimiento a Donadores 💖</h2>
            <p class="podium-subtitle">
              ¡Gracias de todo corazón a las personas y familias que apoyan este sueño educativo gratuito!
            </p>
          </div>
        </div>

        <div class="podium-header-actions">
          <button
            type="button"
            class="btn-register-donor pulse-cta"
            id="btn-open-donor-modal"
            aria-label="Registrar donación y aparecer en el podio"
          >
            ✨ Registrar Donación en el Podio 💖
          </button>
        </div>
      </div>

      <!-- Barra de TOTAL DONADO (Muestra cuánto se ha donado y el contador acumulado con +) -->
      <div class="podium-total-donated-bar" id="podium-total-bar">
        <div class="total-donated-content">
          <div class="total-donated-icon" aria-hidden="true">💰</div>
          <div class="total-donated-text-col">
            <span class="total-donated-label">Total Donado a la Fecha:</span>
            <span class="total-donated-amount" id="val-total-donated">${formatTotalDonated(totals)}</span>
          </div>
        </div>
        <div class="total-donated-status-col">
          <span class="total-donated-badge-pill" id="val-donations-count">
            ${
              donors.length === 0
                ? '✨ Esperando primer aporte'
                : `${donors.length} donación${donors.length === 1 ? '' : 'es'} registrada${donors.length === 1 ? '' : 's'}`
            }
          </span>
        </div>
      </div>

      <!-- Ticker / Marquesina viva de agradecimientos rotativos -->
      <div class="donors-ticker-container" id="donors-ticker" role="region" aria-live="polite" aria-label="Agradecimiento destacado de Ari">
        <div class="ticker-badge">
          <span>🦉 Ari Agradece:</span>
        </div>
        <div class="ticker-content" id="ticker-text-wrapper">
          <p class="ticker-message" id="ticker-active-msg">
            ${
              donors.length > 0 && top1
                ? `💖 ¡Muchas gracias con todo el corazón a <strong>${escapeHtml(top1.name)}</strong>${top1.amountFormatted ? ` (${escapeHtml(top1.amountFormatted)})` : ''}! 💖`
                : `💖 ¡El podio está listo esperando a sus primeros héroes de la educación! Apoya por Nequi, ARQ o PayPal y tu nombre brillará aquí con un corazón 💖`
            }
          </p>
        </div>
      </div>

      <!-- ESTRUCTURA DEL PODIO 3D (2º Plata | 1º Oro | 3º Bronce) -->
      <div class="podium-stage-container">
        <div class="podium-pedestals-row">

          <!-- 2º LUGAR (PLATA) -->
          ${renderPodiumSpot({
            donor: top2,
            rank: 2,
            pedestalClass: 'pedestal-silver',
            medalEmoji: '🥈',
            pedestalLabel: '2° Lugar',
            rankTitle: 'Benefactor de Honor ✨',
            availableText: '¡Sé el segundo en apoyar! Tu nombre brillará aquí con un corazón 💖'
          })}

          <!-- 1º LUGAR (ORO - CENTRO MÁS ALTO) -->
          ${renderPodiumSpot({
            donor: top1,
            rank: 1,
            pedestalClass: 'pedestal-gold',
            medalEmoji: '🥇',
            pedestalLabel: '1° Lugar',
            rankTitle: 'Patrocinador Estrella 🌟',
            hasCrown: true,
            availableText: '¡Sé el primer patrocinador en inaugurar el Podio de Honor de Ari! 💖'
          })}

          <!-- 3º LUGAR (BRONCE) -->
          ${renderPodiumSpot({
            donor: top3,
            rank: 3,
            pedestalClass: 'pedestal-bronze',
            medalEmoji: '🥉',
            pedestalLabel: '3° Lugar',
            rankTitle: 'Amigo de Ari 🦉',
            availableText: '¡Haz posible que más niños aprendan gratis con Ari! 💖'
          })}

        </div>
      </div>

      <!-- MURO DE DONADORES DE CORAZÓN (Puestos 4 en adelante) -->
      <div class="donors-wall-container">
        <div class="donors-wall-header">
          <h3 class="donors-wall-title">
            <span>💖</span> Muro de Donadores de Corazón
          </h3>
          <span class="donors-count-badge">${donors.length} Donadores registrados</span>
        </div>

        <div class="donors-wall-grid" id="donors-wall-list">
          ${
            wallDonors.length > 0
              ? wallDonors.map((donor, idx) => renderDonorWallCard(donor, idx + 4)).join('')
              : `
              <div class="empty-donors-card">
                <span class="empty-donors-icon" aria-hidden="true">🦉💖</span>
                <h4>${donors.length === 0 ? '¡Aún no hay donaciones registradas!' : '¡Sé el próximo en sumarte!'}</h4>
                <p>
                  ${
                    donors.length === 0
                      ? 'Hasta el momento no se han recibido aportes. En cuanto recibamos las primeras donaciones, aquí aparecerán los nombres, montos aportados y los respectivos agradecimientos de corazón de cada persona.'
                      : '¡Gracias a todos por apoyar este sueño educativo!'
                  }
                </p>
              </div>
            `
          }
        </div>
      </div>

      <!-- MODAL PARA REGISTRARSE EN EL PODIO -->
      ${renderDonorModalHtml()}
    </section>
  `;
}

/**
 * Renderiza un peldaño del podio (1º, 2º o 3º).
 */
function renderPodiumSpot({
  donor,
  rank,
  pedestalClass,
  medalEmoji,
  pedestalLabel,
  rankTitle,
  hasCrown = false,
  availableText = '¡Lugar disponible para ti! 💖'
}) {
  if (!donor) {
    return `
      <div class="podium-spot-col ${pedestalClass}-col ${hasCrown ? 'podium-champion-col' : ''}">
        <article class="podium-card ${pedestalClass}-card podium-card-available">
          ${hasCrown ? '<div class="champion-crown" aria-hidden="true">👑</div>' : ''}
          <div class="podium-card-top-row">
            <span class="podium-medal" title="${medalEmoji} ${pedestalLabel}">${medalEmoji}</span>
            <span class="podium-badge-tag">${escapeHtml(rankTitle)}</span>
          </div>

          <div class="podium-avatar-circle avatar-available">
            <span class="avatar-initials">🦉</span>
          </div>

          <h3 class="podium-donor-name podium-available-title">
            ¡Lugar #${rank} Disponible!
          </h3>

          <div class="podium-method-pill">
            <span>✨ Esperando Donador</span>
          </div>

          <div class="podium-thanks-box">
            <p class="podium-thanks-text">
              ${escapeHtml(availableText)}
            </p>
          </div>

          <div class="podium-card-actions">
            <span class="podium-slot-status">Disponible para ti 💖</span>
          </div>
        </article>

        <!-- Pedestal físico 3D -->
        <div class="pedestal-block ${pedestalClass}">
          <span class="pedestal-number">${rank}</span>
          <span class="pedestal-name">${pedestalLabel}</span>
        </div>
      </div>
    `;
  }

  const initials = getInitials(donor.name);
  const hearts = Number(donor.hearts) || 0;

  return `
    <div class="podium-spot-col ${pedestalClass}-col ${hasCrown ? 'podium-champion-col' : ''}">
      <article
        class="podium-card ${pedestalClass}-card ${donor.isNew ? 'new-donor-highlight' : ''}"
        id="podium-card-${donor.id}"
        data-donor-id="${donor.id}"
      >
        ${hasCrown ? '<div class="champion-crown" aria-hidden="true">👑</div>' : ''}
        
        <div class="podium-card-top-row">
          <span class="podium-medal" title="${medalEmoji} ${pedestalLabel}">${medalEmoji}</span>
          <span class="podium-badge-tag">${escapeHtml(donor.badge || rankTitle)}</span>
        </div>

        <div class="podium-avatar-circle">
          <span class="avatar-initials">${escapeHtml(initials)}</span>
        </div>

        <h3 class="podium-donor-name" title="${escapeHtml(donor.name)}">
          ${escapeHtml(donor.name)}
        </h3>

        ${
          donor.amountFormatted
            ? `<div class="podium-donor-amount">💰 Donó: <strong>${escapeHtml(donor.amountFormatted)}</strong></div>`
            : ''
        }

        <div class="podium-method-pill">
          <span>${getMethodIcon(donor.method)} ${escapeHtml(donor.method || 'Donación')}</span>
        </div>

        <div class="podium-thanks-box">
          <p class="podium-thanks-text">
            ${escapeHtml(donor.message)}
          </p>
        </div>

        <div class="podium-card-actions">
          <button
            type="button"
            class="btn-give-heart"
            data-donor-id="${donor.id}"
            title="Enviar un corazón de agradecimiento a ${escapeHtml(donor.name)}"
            aria-label="Dar un corazón de agradecimiento a ${escapeHtml(donor.name)}"
          >
            <span class="heart-icon">💖</span>
            <span class="heart-action-label">Dar amor</span>
            <span class="heart-counter" id="heart-count-${donor.id}">(${hearts})</span>
          </button>
        </div>
      </article>

      <!-- Pedestal físico 3D -->
      <div class="pedestal-block ${pedestalClass}">
        <span class="pedestal-number">${rank}</span>
        <span class="pedestal-name">${pedestalLabel}</span>
      </div>
    </div>
  `;
}

/**
 * Renderiza una tarjeta del muro de donadores (puestos 4 en adelante).
 */
function renderDonorWallCard(donor, rank) {
  const initials = getInitials(donor.name);
  const hearts = Number(donor.hearts) || 0;

  return `
    <article
      class="donor-wall-card ${donor.isNew ? 'new-donor-highlight' : ''}"
      id="donor-card-${donor.id}"
      data-donor-id="${donor.id}"
    >
      <div class="wall-card-header">
        <div class="wall-card-avatar">
          <span>${escapeHtml(initials)}</span>
        </div>
        <div class="wall-card-meta">
          <div class="wall-rank-row">
            <span class="wall-rank-badge">#${rank}</span>
            <span class="wall-method-tag">${getMethodIcon(donor.method)} ${escapeHtml(donor.method || 'Aporte')}</span>
          </div>
          <h4 class="wall-donor-name">${escapeHtml(donor.name)}</h4>
          ${
            donor.amountFormatted
              ? `<span class="wall-donor-amount">💰 Donó: ${escapeHtml(donor.amountFormatted)}</span>`
              : ''
          }
        </div>
      </div>

      <div class="wall-card-thanks">
        <p class="wall-thanks-message">
          ${escapeHtml(donor.message)}
        </p>
      </div>

      <div class="wall-card-footer">
        <button
          type="button"
          class="btn-give-heart btn-heart-sm"
          data-donor-id="${donor.id}"
          title="Enviar un corazón de agradecimiento a ${escapeHtml(donor.name)}"
          aria-label="Dar un corazón a ${escapeHtml(donor.name)}"
        >
          <span class="heart-icon">💖</span>
          <span class="heart-action-label">Dar amor</span>
          <span class="heart-counter" id="heart-count-${donor.id}">(${hearts})</span>
        </button>
      </div>
    </article>
  `;
}

/**
 * Modal accesible para registrar un donador con monto.
 */
function renderDonorModalHtml() {
  return `
    <div
      class="donor-modal-overlay"
      id="donor-register-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donor-modal-title"
      style="display: none;"
    >
      <div class="donor-modal-card view-fade-anim">
        <button
          type="button"
          class="btn-modal-close"
          id="btn-close-donor-modal"
          aria-label="Cerrar ventana"
        >
          ✖
        </button>

        <div class="donor-modal-header">
          <div class="modal-heart-icon" aria-hidden="true">💖</div>
          <h3 id="donor-modal-title">¡Queremos darte las gracias de corazón!</h3>
          <p class="donor-modal-desc">
            Si realizaste un aporte voluntario por Nequi, ARQ o PayPal, ingresa tu nombre y monto para aparecer en el <strong>Podio de Honor</strong>.
          </p>
        </div>

        <form id="form-register-donor" class="donor-form" novalidate>
          <div class="form-group">
            <label for="donor-input-name" class="form-label">
              Tu nombre o el de tu familia: <span class="required-mark">*</span>
            </label>
            <input
              type="text"
              id="donor-input-name"
              class="form-control"
              placeholder="Ej. Carlos Gómez, Familia Rodríguez, Mateo..."
              maxlength="45"
              required
              autocomplete="name"
            />
            <span class="field-error-msg" id="name-error-msg" style="display: none;">
              Por favor escribe tu nombre (mínimo 2 letras).
            </span>
          </div>

          <div class="form-group">
            <label for="donor-input-amount" class="form-label">
              Monto donado (opcional):
            </label>
            <input
              type="text"
              id="donor-input-amount"
              class="form-control"
              placeholder="Ej. 20000 COP, 10 USD..."
              maxlength="25"
            />
          </div>

          <div class="form-group">
            <label for="donor-select-method" class="form-label">
              Medio de donación utilizado:
            </label>
            <select id="donor-select-method" class="form-control form-select">
              <option value="Bre-B Nequi">🟣 Bre-B • Nequi (Colombia)</option>
              <option value="ARQ">🔵 ARQ (Dólares Digitales)</option>
              <option value="PayPal">🔷 PayPal (Internacional)</option>
              <option value="Aporte Voluntario">💖 Aporte Voluntario / Educativo</option>
            </select>
          </div>

          <div class="form-group">
            <label for="donor-input-note" class="form-label">
              Dedicatoria o mensaje para los niños (opcional):
            </label>
            <input
              type="text"
              id="donor-input-note"
              class="form-control"
              placeholder="Ej. ¡Para que sigan aprendiendo con alegría y amor!"
              maxlength="90"
            />
          </div>

          <div class="donor-modal-actions">
            <button type="submit" class="btn-3d-purple btn-submit-donor" id="btn-submit-donor">
              💖 ¡Aparecer en el Podio de Honor!
            </button>
            <button type="button" class="btn-3d-secondary" id="btn-cancel-donor-modal">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

/**
 * Conecta todos los eventos de interacción del podio y el modal.
 */
export function bindDonorsPodiumEvents(rootElement = document, onUpdateCallback = null) {
  if (tickerTimerId) {
    clearInterval(tickerTimerId);
    tickerTimerId = null;
  }

  // 1. Iniciar Ticker automático de agradecimientos
  startAutoTicker(rootElement);

  // 2. Dar Amor (Corazón +1) con animación y sonido
  const heartButtons = rootElement.querySelectorAll('.btn-give-heart');
  heartButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const donorId = btn.getAttribute('data-donor-id');
      if (!donorId) return;

      const newHearts = giveHeartToDonor(donorId);
      const counterEl = rootElement.querySelector(`#heart-count-${donorId}`);
      if (counterEl) {
        counterEl.textContent = `(${newHearts})`;
      }

      SoundService.play('correct');
      createFloatingHeart(btn);
    });
  });

  // 3. Abrir modal de registro
  const openModalBtn = rootElement.querySelector('#btn-open-donor-modal');
  const modalOverlay = rootElement.querySelector('#donor-register-modal');
  const inputName = rootElement.querySelector('#donor-input-name');

  const openModal = () => {
    SoundService.play('click');
    if (modalOverlay) {
      modalOverlay.style.display = 'flex';
      setTimeout(() => {
        if (inputName) inputName.focus();
      }, 50);
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
      const errorMsg = rootElement.querySelector('#name-error-msg');
      if (errorMsg) errorMsg.style.display = 'none';
    }
  };

  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }

  const closeBtns = rootElement.querySelectorAll(
    '#btn-close-donor-modal, #btn-cancel-donor-modal'
  );
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundService.play('click');
      closeModal();
    });
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display !== 'none') {
      closeModal();
    }
  });

  // 4. Procesar formulario de registro
  const form = rootElement.querySelector('#form-register-donor');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = (inputName?.value || '').trim();
      const errorMsg = rootElement.querySelector('#name-error-msg');

      if (!nameVal || nameVal.length < 2) {
        if (errorMsg) errorMsg.style.display = 'block';
        if (inputName) inputName.focus();
        SoundService.play('wrong');
        return;
      }

      if (errorMsg) errorMsg.style.display = 'none';

      const amountVal = rootElement.querySelector('#donor-input-amount')?.value || '';
      const methodVal =
        rootElement.querySelector('#donor-select-method')?.value || 'Bre-B Nequi';
      const noteVal = rootElement.querySelector('#donor-input-note')?.value || '';

      // Agregar donador
      const newDonor = addDonor({
        name: nameVal,
        amount: amountVal,
        method: methodVal,
        message: noteVal
      });

      SoundService.play('levelComplete');
      closeModal();
      createCelebrationConfetti(rootElement);

      if (typeof onUpdateCallback === 'function') {
        onUpdateCallback(newDonor);
      } else {
        const podiumContainer = rootElement.querySelector('#seccion-podio-donadores');
        if (podiumContainer && podiumContainer.parentElement) {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = renderDonorsPodiumSection();
          const newPodiumEl = wrapper.firstElementChild;
          podiumContainer.replaceWith(newPodiumEl);
          bindDonorsPodiumEvents(rootElement, onUpdateCallback);
          newPodiumEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }
}

/**
 * Inicia la rotación automática de la marquesina / ticker de donadores.
 */
function startAutoTicker(rootElement) {
  const tickerTextWrapper = rootElement.querySelector('#ticker-text-wrapper');
  if (!tickerTextWrapper) return;

  const donors = getDonorsList();
  if (!donors || donors.length === 0) return;

  let currentIndex = 0;

  tickerTimerId = setInterval(() => {
    currentIndex = (currentIndex + 1) % donors.length;
    const donor = donors[currentIndex];
    if (!donor) return;

    tickerTextWrapper.style.opacity = '0';
    tickerTextWrapper.style.transform = 'translateY(8px)';

    setTimeout(() => {
      tickerTextWrapper.innerHTML = `
        <p class="ticker-message" id="ticker-active-msg">
          💖 ¡Muchas gracias con todo el corazón a <strong>${escapeHtml(donor.name)}</strong>${donor.amountFormatted ? ` (${escapeHtml(donor.amountFormatted)})` : ''}! 💖
        </p>
      `;
      tickerTextWrapper.style.opacity = '1';
      tickerTextWrapper.style.transform = 'translateY(0)';
    }, 280);
  }, 3600);
}

function createFloatingHeart(targetBtn) {
  const rect = targetBtn.getBoundingClientRect();
  const heart = document.createElement('span');
  heart.className = 'floating-heart-anim';
  heart.textContent = '💖';
  heart.style.left = `${rect.left + rect.width / 2 + (Math.random() * 20 - 10)}px`;
  heart.style.top = `${rect.top - 10}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    if (heart.parentElement) heart.remove();
  }, 1200);
}

function createCelebrationConfetti(rootElement) {
  const emojis = ['💖', '🌟', '✨', '🎉', '🦉', '❤️', '🏆'];
  const count = 24;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'celebration-emoji-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = `${10 + Math.random() * 80}%`;
    el.style.top = `${30 + Math.random() * 40}%`;
    el.style.animationDelay = `${Math.random() * 0.4}s`;
    el.style.fontSize = `${1.2 + Math.random() * 1.4}rem`;
    document.body.appendChild(el);

    setTimeout(() => {
      if (el.parentElement) el.remove();
    }, 2000);
  }
}

function getInitials(name = '') {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '💖';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function getMethodIcon(method = '') {
  const m = String(method).toLowerCase();
  if (m.includes('nequi') || m.includes('bre-b')) return '🟣';
  if (m.includes('arq')) return '🔵';
  if (m.includes('paypal')) return '🔷';
  return '💖';
}

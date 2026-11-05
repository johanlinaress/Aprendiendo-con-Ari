import { SoundService, resolveSoundUrl } from '../services/SoundService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderDonationsView() {
  const qrImageUrl = resolveSoundUrl('assets/nequi-qr.jpg');

  return `
    <section class="donations-view view-fade-anim" data-component="DonationsView">
      <div class="stage-top-bar">
        <button type="button" class="btn-back-circle" id="btn-donations-back" title="Volver al inicio" aria-label="Volver al inicio">
          ⬅
        </button>
      </div>

      <div class="donations-stage-grid">
        <aside class="donations-mascot-col">
          ${renderAriMascot({
            mood: 'excited',
            message:
              '¡Hola! Tu apoyo voluntario nos ayuda a seguir creando más plataformas educativas gratuitas, sin publicidad y con muchos más juegos para todos los niños.',
            compact: false,
            showGreetButton: false
          })}
        </aside>

        <div class="donations-content-col">
          <div class="purple-ribbon-banner donations-ribbon">
            <h1>Donaciones y Apoyo al Creador</h1>
          </div>

          <div class="donations-hero-card">
            <h2 class="donations-main-heading">
              ¿Quieres apoyar al creador para ver más páginas como esta?
            </h2>
            <p class="donations-intro-text">
              <strong>Aprendiendo con Ari</strong> es un proyecto independiente desarrollado con dedicación para fortalecer el aprendizaje infantil de matemáticas, lectura y razonamiento. Si esta plataforma te ha sido útil o deseas impulsar la creación de nuevas materias y herramientas educativas abiertas, puedes realizar una donación voluntaria a través de cualquiera de los siguientes medios:
            </p>
          </div>

          <div class="donations-cards-grid">
            <!-- OPCIÓN 1: NEQUI / BRE-B -->
            <article class="donation-method-card donation-card-nequi" id="card-nequi">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-nequi">🟣 Bre-B • Nequi</span>
                <span class="donation-country-tag">🇨🇴 Colombia</span>
              </div>

              <div class="donation-qr-box">
                <img
                  src="${qrImageUrl}"
                  onerror="if (!this.dataset.triedFallback) { this.dataset.triedFallback = '1'; this.src = './src/assets/nequi-qr.jpg'; }"
                  alt="Código QR Bre-B Nequi de Johan Linares"
                  class="donation-qr-image"
                  id="nequi-qr-img"
                  loading="lazy"
                />
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Johan Linares</h3>
                <div class="donation-field-row">
                  <span class="field-label">Llave / Correo:</span>
                  <strong class="field-value" id="val-nequi-llave">johansttivelinaresb@gmail.com</strong>
                </div>
                <p class="donation-instructions">
                  Escanea el código QR desde tu app <strong>Nequi</strong> o mediante <strong>Bre-B</strong> de cualquier entidad financiera en Colombia.
                </p>
              </div>

              <button
                type="button"
                class="btn-donation-copy btn-copy-nequi"
                data-copy-target="johansttivelinaresb@gmail.com"
                aria-label="Copiar llave o correo de Nequi"
              >
                📋 Copiar Llave Nequi
              </button>
            </article>

            <!-- OPCIÓN 2: ARQ -->
            <article class="donation-method-card donation-card-arq" id="card-arq">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-arq">🔵 ARQ</span>
                <span class="donation-country-tag">⚡ Dólares Digitales</span>
              </div>

              <div class="donation-icon-hero">
                <div class="arq-symbol-circle">
                  <span>$</span>
                </div>
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Usuario en ARQ</h3>
                <div class="donation-field-row">
                  <span class="field-label">Nombre de usuario:</span>
                  <strong class="field-value arq-username" id="val-arq-user">$sttive</strong>
                </div>
                <p class="donation-instructions">
                  Envía tu donación directamente al tag de usuario <strong>$sttive</strong> dentro de la aplicación <strong>ARQ</strong> de forma instantánea.
                </p>
              </div>

              <button
                type="button"
                class="btn-donation-copy btn-copy-arq"
                data-copy-target="$sttive"
                aria-label="Copiar usuario $sttive de ARQ"
              >
                📋 Copiar Usuario ($sttive)
              </button>
            </article>

            <!-- OPCIÓN 3: PAYPAL -->
            <article class="donation-method-card donation-card-paypal" id="card-paypal">
              <div class="donation-card-badge-row">
                <span class="donation-badge badge-paypal">🔷 PayPal</span>
                <span class="donation-country-tag">🌎 Internacional</span>
              </div>

              <div class="donation-icon-hero">
                <div class="paypal-symbol-circle">
                  <span>🅿️</span>
                </div>
              </div>

              <div class="donation-info-block">
                <h3 class="donation-recipient-name">Johan Linares</h3>
                <div class="donation-field-row">
                  <span class="field-label">Correo PayPal:</span>
                  <strong class="field-value" id="val-paypal-email">johansttivelinaresb@gmail.com</strong>
                </div>
                <p class="donation-instructions">
                  Acepta tarjetas de crédito, débito o saldo en USD/EUR desde cualquier país del mundo.
                </p>
              </div>

              <div class="donation-actions-group">
                <button
                  type="button"
                  class="btn-donation-copy btn-copy-paypal"
                  data-copy-target="johansttivelinaresb@gmail.com"
                  aria-label="Copiar correo de PayPal"
                >
                  📋 Copiar Correo PayPal
                </button>

                <a
                  href="https://www.paypal.com/paypalme/johansttivelinaresb"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-donation-direct"
                  id="link-paypal-direct"
                >
                  ↗️ Donar en PayPal
                </a>
              </div>
            </article>
          </div>

          <div class="donations-footer-actions">
            <button type="button" class="btn-3d-purple btn-lg" id="btn-back-to-adventure">
              🦉 Volver a Aprender y Jugar
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function bindDonationsViewEvents(rootElement = document) {
  bindAriMascotEvents(rootElement);

  const backBtn = rootElement.querySelector('#btn-donations-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/inicio');
    });
  }

  const backAdventureBtn = rootElement.querySelector('#btn-back-to-adventure');
  if (backAdventureBtn) {
    backAdventureBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  // Manejo de botones de copiado al portapapeles con feedback accesible
  const copyButtons = rootElement.querySelectorAll('[data-copy-target]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-target') || '';
      const originalHtml = btn.innerHTML;

      try {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback clásico
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        SoundService.play('correct');
        btn.innerHTML = '✅ ¡Copiado con éxito!';
        btn.classList.add('copy-success-pulse');

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copy-success-pulse');
        }, 2400);
      } catch (err) {
        SoundService.play('click');
        btn.innerHTML = '✔️ Texto seleccionado';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      }
    });
  });
}

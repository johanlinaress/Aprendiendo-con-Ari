/**
 * @fileoverview Componente y personaje original «Ari el Búho Sabio» (SVG, expresiones y estados).
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. El diseño de Ari (birrete, gafas, expresiones y libro)
 *          es una creación original y exclusiva de Johan Linares. Prohibida su copia o plagio.
 */

import { SoundService } from '../services/SoundService.js';
import { escapeHtml } from '../utils/escapeHtml.js';

const ARI_PHRASES = [
  '¡Hola! ¿Qué quieres aprender hoy? Elige Matemáticas o Español.',
  '¡Muy bien! Las sumas nos ayudan a juntar cantidades.',
  '¡Lee cada texto con atención! También puedes pulsar «Escuchar» 🔊.',
  '¡Cada unidad superada te da estrellas y desbloquea nuevos retos! ⭐',
  '¡Tú puedes lograr todas las medallas y llegar al 100%! 🏆'
];

export const POSITIVE_CORRECT_MESSAGES = [
  '¡Excelente trabajo!',
  '¡Lo lograste!',
  '¡Eres increíble!',
  '¡Ari está muy orgulloso de ti!'
];

export const POSITIVE_RETRY_MESSAGES = [
  '¡Casi lo consigues!',
  '¡Inténtalo nuevamente!',
  'No te rindas, vamos a aprender juntos.',
  'Recuerda el ejemplo que acabamos de ver.'
];

export function renderAriOwlSvg({ mood = 'happy' } = {}) {
  const isWink = mood === 'wink' || mood === 'thinking';
  const isCelebrating = mood === 'celebrating' || mood === 'excited';
  const isSurprised = mood === 'surprised';

  return `
    <svg class="ari-svg ari-float-anim" viewBox="0 0 210 220" role="img" aria-label="Ari el búho morado sabio">
      <defs>
        <linearGradient id="owlPlumage-${mood}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9333ea" />
          <stop offset="55%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#4c1d95" />
        </linearGradient>
        <linearGradient id="owlBelly-${mood}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f5f3ff" />
          <stop offset="100%" stop-color="#ddd6fe" />
        </linearGradient>
        <linearGradient id="capGrad-${mood}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>

      <!-- Floating Stars around Ari -->
      <polygon points="26,56 29,63 36,63 30,68 32,75 26,71 20,75 22,68 16,63 23,63" fill="#facc15" opacity="0.9" />
      <polygon points="184,42 186,48 192,48 187,52 189,58 184,54 179,58 181,52 176,48 182,48" fill="#facc15" opacity="0.9" />

      <!-- Owl Feet -->
      <g fill="#f97316" stroke="#c2410c" stroke-width="2">
        <ellipse cx="78" cy="198" rx="16" ry="8" />
        <ellipse cx="132" cy="198" rx="16" ry="8" />
      </g>

      <!-- Left Wing (Raised if celebrating, or holding book) -->
      ${
        isCelebrating
          ? `<path d="M44,125 Q12,86 28,68 Q46,66 56,104 Z" fill="url(#owlPlumage-${mood})" stroke="#4c1d95" stroke-width="3" />`
          : `<path d="M45,118 Q18,136 34,166 Q52,172 62,144 Z" fill="url(#owlPlumage-${mood})" stroke="#4c1d95" stroke-width="3" />`
      }

      <!-- Right Wing (Waving / Pointing) -->
      <path d="M162,122 Q198,88 184,68 Q166,68 150,104 Z" fill="url(#owlPlumage-${mood})" stroke="#4c1d95" stroke-width="3" />

      <!-- Main Owl Body & Head -->
      <ellipse cx="105" cy="134" rx="56" ry="62" fill="url(#owlPlumage-${mood})" stroke="#4c1d95" stroke-width="3" />
      <ellipse cx="105" cy="86" rx="58" ry="50" fill="url(#owlPlumage-${mood})" stroke="#4c1d95" stroke-width="3" />

      <!-- Owl Ear Tufts -->
      <path d="M52,58 L38,34 L72,46 Z" fill="url(#owlPlumage-${mood})" />
      <path d="M158,58 L172,34 L138,46 Z" fill="url(#owlPlumage-${mood})" />

      <!-- Belly Patch with Feather Scallops -->
      <ellipse cx="105" cy="148" rx="38" ry="40" fill="url(#owlBelly-${mood})" />
      <path d="M90,136 Q97,143 105,136 Q113,143 120,136" stroke="#c4b5fd" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M84,152 Q94,160 105,152 Q116,160 126,152" stroke="#c4b5fd" stroke-width="3" fill="none" stroke-linecap="round" />

      <!-- White Eye Mask -->
      <circle cx="82" cy="86" r="24" fill="#ffffff" />
      <circle cx="128" cy="86" r="24" fill="#ffffff" />

      <!-- Eyes -->
      ${
        isWink
          ? `<path d="M68,86 Q82,74 96,86" stroke="#1e1b4b" stroke-width="4.5" fill="none" stroke-linecap="round" />`
          : `
            <circle cx="83" cy="86" r="${isSurprised ? 16 : 14}" fill="#451a03" />
            <circle cx="83" cy="86" r="${isSurprised ? 11 : 9}" fill="#0f172a" />
            <circle cx="78" cy="80" r="4.5" fill="#ffffff" />
            <circle cx="88" cy="91" r="2" fill="#ffffff" />
          `
      }
      <circle cx="127" cy="86" r="${isSurprised ? 16 : 14}" fill="#451a03" />
      <circle cx="127" cy="86" r="${isSurprised ? 11 : 9}" fill="#0f172a" />
      <circle cx="122" cy="80" r="4.5" fill="#ffffff" />
      <circle cx="132" cy="91" r="2" fill="#ffffff" />

      <!-- Round Brown/Gold Eyeglasses -->
      <circle cx="82" cy="86" r="23" fill="none" stroke="#78350f" stroke-width="4.5" />
      <circle cx="128" cy="86" r="23" fill="none" stroke="#78350f" stroke-width="4.5" />
      <line x1="103" y1="85" x2="107" y2="85" stroke="#78350f" stroke-width="4.5" />

      <!-- Rosy Cheeks -->
      <ellipse cx="62" cy="104" rx="7" ry="4" fill="#f472b6" opacity="0.55" />
      <ellipse cx="148" cy="104" rx="7" ry="4" fill="#f472b6" opacity="0.55" />

      <!-- Cute Orange Beak & Open Happy Smile -->
      <polygon points="97,94 113,94 105,108" fill="#fb923c" stroke="#c2410c" stroke-width="2" />
      <path d="M98,107 Q105,117 112,107" fill="#ef4444" stroke="#991b1b" stroke-width="2" />

      <!-- Graduation Cap (Birrete) -->
      <g transform="rotate(-6 105 34)">
        <path d="M74,36 L136,36 L132,52 Q105,60 78,52 Z" fill="url(#capGrad-${mood})" />
        <polygon points="105,14 162,30 105,46 48,30" fill="url(#capGrad-${mood})" stroke="#475569" stroke-width="2" />
        <circle cx="105" cy="30" r="4" fill="#f59e0b" />
        <path d="M105,30 Q68,36 58,58" stroke="#f59e0b" stroke-width="3.5" fill="none" stroke-linecap="round" />
        <polygon points="58,55 52,69 64,69" fill="#f97316" />
      </g>

      <!-- Green Book OR Gold Victory Medal -->
      ${
        isCelebrating
          ? `
            <!-- Gold Medal on Blue Ribbon -->
            <path d="M84,120 L105,154 L126,120" stroke="#2563eb" stroke-width="7" fill="none" stroke-linecap="round" />
            <circle cx="105" cy="160" r="16" fill="#facc15" stroke="#ca8a04" stroke-width="3" />
            <polygon points="105,149 108,156 115,156 109,160 111,167 105,163 99,167 101,160 95,156 102,156" fill="#ca8a04" />
          `
          : `
            <!-- Green Book held in Left Wing -->
            <g transform="translate(52, 134) rotate(-12)">
              <rect x="0" y="0" width="44" height="52" rx="5" fill="#16a34a" stroke="#14532d" stroke-width="2.5" />
              <rect x="5" y="4" width="35" height="44" rx="3" fill="#4ade80" />
              <rect x="8" y="0" width="34" height="6" rx="2" fill="#fef9c3" />
              <line x1="14" y1="16" x2="32" y2="16" stroke="#14532d" stroke-width="2.5" stroke-linecap="round" />
              <line x1="14" y1="25" x2="28" y2="25" stroke="#14532d" stroke-width="2.5" stroke-linecap="round" />
            </g>
          `
      }
    </svg>
  `;
}

export function renderAriMascot({
  mood = 'happy',
  message = '¡Hola! ¿Qué quieres aprender hoy?',
  compact = false,
  showGreetButton = true,
  speechPosition = 'right'
} = {}) {
  const moodLabel = {
    happy: 'Ari saludando feliz',
    explaining: 'Ari explicando el tema',
    excited: '¡Ari felicitándote!',
    thinking: 'Ari está pensando...',
    surprised: '¡Ari está sorprendido!',
    wink: 'Ari señalando instrucciones',
    encouraging: '¡Ari animándote a intentarlo!',
    celebrating: '¡Ari celebrando tu logro!'
  }[mood] || 'Ari te acompaña';

  return `
    <div class="ari-mascot-card ${compact ? 'ari-mascot-compact' : ''} ari-speech-${speechPosition} ari-mood-${mood}" data-component="AriMascot" data-mood="${mood}">
      <div class="ari-speech-box">
        <div class="ari-speech-bubble" id="ari-speech-text" aria-live="polite">
          ${escapeHtml(message)}
        </div>
        ${
          showGreetButton
            ? `<button type="button" class="btn btn-ari-talk" id="btn-ari-greet" data-action="ari-greet">
                ✨ ¡Consejo de Ari!
              </button>`
            : ''
        }
      </div>
      <div class="ari-avatar-wrapper" id="ari-avatar-box" title="${moodLabel}">
        ${renderAriOwlSvg({ mood })}
      </div>
    </div>
  `;
}

let phraseIndex = 0;

export function bindAriMascotEvents(rootElement = document) {
  const greetBtn = rootElement.querySelector('#btn-ari-greet');
  const avatarBox = rootElement.querySelector('#ari-avatar-box');
  const speechText = rootElement.querySelector('#ari-speech-text');

  const triggerAriReaction = () => {
    SoundService.play('ariSpeak');
    if (avatarBox) {
      avatarBox.classList.remove('ari-jump-anim');
      void avatarBox.offsetWidth;
      avatarBox.classList.add('ari-jump-anim');
    }
    if (speechText) {
      phraseIndex = (phraseIndex + 1) % ARI_PHRASES.length;
      speechText.textContent = ARI_PHRASES[phraseIndex];
    }
  };

  if (greetBtn) {
    greetBtn.addEventListener('click', triggerAriReaction);
  }
  if (avatarBox) {
    avatarBox.addEventListener('click', triggerAriReaction);
  }
}

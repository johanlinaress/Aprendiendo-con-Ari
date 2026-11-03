export function renderSceneBackgroundSvg() {
  return `
    <div class="scene-bg-decor" aria-hidden="true">
      <svg class="scene-bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="55%" stop-color="#bae6fd" />
            <stop offset="100%" stop-color="#fef9c3" />
          </linearGradient>
          <linearGradient id="hillBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#86efac" />
            <stop offset="100%" stop-color="#4ade80" />
          </linearGradient>
          <linearGradient id="hillFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4ade80" />
            <stop offset="100%" stop-color="#16a34a" />
          </linearGradient>
        </defs>

        <!-- Sky -->
        <rect width="1440" height="900" fill="url(#skyGrad)" />

        <!-- Sun glow -->
        <circle cx="720" cy="240" r="260" fill="#fef08a" opacity="0.35" />

        <!-- Fluffy Clouds -->
        <g fill="#ffffff" opacity="0.88">
          <ellipse cx="180" cy="150" rx="95" ry="42" />
          <ellipse cx="240" cy="135" rx="70" ry="50" />
          <ellipse cx="120" cy="160" rx="60" ry="32" />

          <ellipse cx="1180" cy="140" rx="110" ry="45" />
          <ellipse cx="1250" cy="120" rx="80" ry="52" />
          <ellipse cx="1100" cy="150" rx="70" ry="36" />
        </g>

        <!-- Sparkles -->
        <g fill="#fde047" opacity="0.85">
          <circle cx="90" cy="90" r="5" />
          <circle cx="420" cy="80" r="6" />
          <circle cx="980" cy="95" r="5" />
          <circle cx="1340" cy="220" r="6" />
        </g>

        <!-- Distant Schoolhouse on Right -->
        <g transform="translate(1150, 410)">
          <rect x="30" y="70" width="180" height="140" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="4" />
          <polygon points="10,75 120,10 230,75" fill="#f97316" stroke="#c2410c" stroke-width="4" />
          <rect x="95" y="130" width="50" height="80" rx="6" fill="#9a3412" />
          <rect x="50" y="95" width="32" height="36" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" />
          <rect x="158" y="95" width="32" height="36" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" />
          <circle cx="120" cy="52" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="3" />
        </g>

        <!-- Back Hills -->
        <path d="M0,650 Q360,540 720,630 T1440,610 L1440,900 L0,900 Z" fill="url(#hillBack)" />

        <!-- Trees -->
        <g>
          <rect x="115" y="540" width="22" height="80" fill="#92400e" />
          <circle cx="126" cy="510" r="58" fill="#22c55e" />
          <circle cx="95" cy="535" r="42" fill="#16a34a" />
          <circle cx="155" cy="535" r="42" fill="#4ade80" />

          <rect x="1080" y="555" width="20" height="75" fill="#92400e" />
          <circle cx="1090" cy="525" r="52" fill="#22c55e" />
          <circle cx="1060" cy="545" r="38" fill="#16a34a" />
          <circle cx="1120" cy="545" r="38" fill="#4ade80" />
        </g>

        <!-- Front Meadow Hills -->
        <path d="M0,710 Q420,620 860,710 T1440,680 L1440,900 L0,900 Z" fill="url(#hillFront)" />

        <!-- Winding Path -->
        <path d="M580,900 Q670,770 790,710 L890,710 Q810,785 760,900 Z" fill="#fde68a" opacity="0.75" />

        <!-- Flowers -->
        <g>
          <circle cx="140" cy="790" r="9" fill="#f472b6" />
          <circle cx="140" cy="790" r="4" fill="#fef08a" />
          <circle cx="260" cy="830" r="8" fill="#fbbf24" />
          <circle cx="260" cy="830" r="3.5" fill="#ffffff" />
          <circle cx="1220" cy="785" r="9" fill="#f472b6" />
          <circle cx="1220" cy="785" r="4" fill="#fef08a" />
          <circle cx="1330" cy="835" r="8" fill="#fbbf24" />
          <circle cx="1330" cy="835" r="3.5" fill="#ffffff" />
        </g>
      </svg>
    </div>
  `;
}

export function renderPlayerAvatarSvg() {
  return `
    <svg viewBox="0 0 64 64" class="player-avatar-svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#60a5fa" stroke="#ffffff" stroke-width="3" />
      <!-- Face -->
      <circle cx="32" cy="36" r="17" fill="#fed7aa" />
      <!-- Hair -->
      <path d="M15,32 Q16,14 32,15 Q48,14 49,32 Q42,23 32,25 Q22,23 15,32 Z" fill="#78350f" />
      <!-- Eyes -->
      <circle cx="26" cy="35" r="2.6" fill="#1e293b" />
      <circle cx="38" cy="35" r="2.6" fill="#1e293b" />
      <!-- Smile -->
      <path d="M26,42 Q32,47 38,42" stroke="#9a3412" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Shirt -->
      <path d="M16,58 Q32,48 48,58" fill="#f97316" />
    </svg>
  `;
}

export function renderBoyGrade3Svg() {
  return `
    <svg viewBox="0 0 130 140" class="grade-kid-svg" aria-hidden="true">
      <!-- Backpack -->
      <rect x="38" y="84" width="58" height="46" rx="12" fill="#2563eb" />
      <!-- Shirt -->
      <path d="M36,136 L44,88 Q65,80 86,88 L94,136 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2.5" />
      <!-- Backpack Straps -->
      <path d="M48,88 L46,128" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round" />
      <path d="M82,88 L84,128" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round" />
      <!-- Thumbs Up Hand -->
      <circle cx="24" cy="102" r="10" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <rect x="21" y="86" width="7" height="12" rx="3.5" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <!-- Head -->
      <circle cx="65" cy="54" r="28" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <!-- Ears -->
      <circle cx="37" cy="56" r="6" fill="#fed7aa" />
      <circle cx="93" cy="56" r="6" fill="#fed7aa" />
      <!-- Curly Brown Hair -->
      <path d="M36,48 Q34,20 65,20 Q96,20 94,48 Q82,34 65,36 Q48,34 36,48 Z" fill="#5c2d0c" />
      <circle cx="52" cy="24" r="9" fill="#5c2d0c" />
      <circle cx="72" cy="22" r="10" fill="#5c2d0c" />
      <!-- Eyes -->
      <circle cx="54" cy="53" r="4.2" fill="#1e293b" />
      <circle cx="76" cy="53" r="4.2" fill="#1e293b" />
      <circle cx="55.5" cy="51.5" r="1.5" fill="#ffffff" />
      <circle cx="77.5" cy="51.5" r="1.5" fill="#ffffff" />
      <!-- Cheeks -->
      <ellipse cx="46" cy="61" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.55" />
      <ellipse cx="84" cy="61" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.55" />
      <!-- Big Smile -->
      <path d="M55,63 Q65,73 75,63 Z" fill="#991b1b" />
      <path d="M58,64 L72,64" stroke="#ffffff" stroke-width="2.5" />
    </svg>
  `;
}

export function renderGirlGrade4Svg() {
  return `
    <svg viewBox="0 0 130 140" class="grade-kid-svg" aria-hidden="true">
      <!-- Long Hair Back -->
      <path d="M32,48 Q24,95 36,112 L94,112 Q106,95 98,48 Z" fill="#451a03" />
      <!-- Shirt -->
      <path d="M36,136 L44,88 Q65,80 86,88 L94,136 Z" fill="#f472b6" stroke="#db2777" stroke-width="2.5" />
      <!-- Backpack Straps -->
      <path d="M48,88 L46,128" stroke="#06b6d4" stroke-width="7" stroke-linecap="round" />
      <path d="M82,88 L84,128" stroke="#06b6d4" stroke-width="7" stroke-linecap="round" />
      <!-- Thumbs Up Hand -->
      <circle cx="24" cy="102" r="10" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <rect x="21" y="86" width="7" height="12" rx="3.5" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <!-- Head -->
      <circle cx="65" cy="54" r="28" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      <!-- Hair Front -->
      <path d="M35,50 Q38,20 65,21 Q92,20 95,50 Q80,35 65,37 Q48,35 35,50 Z" fill="#451a03" />
      <!-- Hair Clip -->
      <rect x="80" y="34" width="11" height="5" rx="2.5" transform="rotate(20 80 34)" fill="#facc15" />
      <!-- Eyes -->
      <circle cx="54" cy="53" r="4.2" fill="#1e293b" />
      <circle cx="76" cy="53" r="4.2" fill="#1e293b" />
      <circle cx="55.5" cy="51.5" r="1.5" fill="#ffffff" />
      <circle cx="77.5" cy="51.5" r="1.5" fill="#ffffff" />
      <!-- Cheeks -->
      <ellipse cx="46" cy="61" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.6" />
      <ellipse cx="84" cy="61" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.6" />
      <!-- Smile -->
      <path d="M55,63 Q65,73 75,63 Z" fill="#991b1b" />
      <path d="M58,64 L72,64" stroke="#ffffff" stroke-width="2.5" />
    </svg>
  `;
}

export function renderMathCardGraphicSvg() {
  return `
    <svg viewBox="0 0 180 110" class="subject-art-svg" aria-hidden="true">
      <!-- Plus (+) -->
      <g transform="translate(38, 14)">
        <rect x="14" y="2" width="14" height="38" rx="5" fill="#facc15" stroke="#b45309" stroke-width="2.5" />
        <rect x="2" y="14" width="38" height="14" rx="5" fill="#facc15" stroke="#b45309" stroke-width="2.5" />
      </g>
      <!-- Minus (-) -->
      <g transform="translate(98, 22)">
        <rect x="2" y="8" width="40" height="14" rx="5" fill="#f87171" stroke="#b91c1c" stroke-width="2.5" />
      </g>
      <!-- Multiply (x) -->
      <g transform="translate(58, 68) rotate(45)">
        <rect x="-6" y="-18" width="12" height="36" rx="4" fill="#fb923c" stroke="#c2410c" stroke-width="2.5" />
        <rect x="-18" y="-6" width="36" height="12" rx="4" fill="#fb923c" stroke="#c2410c" stroke-width="2.5" />
      </g>
      <!-- Divide (÷) -->
      <g transform="translate(98, 56)">
        <rect x="2" y="14" width="40" height="11" rx="5" fill="#38bdf8" stroke="#0369a1" stroke-width="2.5" />
        <circle cx="22" cy="5" r="5" fill="#38bdf8" stroke="#0369a1" stroke-width="2" />
        <circle cx="22" cy="34" r="5" fill="#38bdf8" stroke="#0369a1" stroke-width="2" />
      </g>
    </svg>
  `;
}

export function renderSpanishCardGraphicSvg() {
  return `
    <svg viewBox="0 0 180 110" class="subject-art-svg" aria-hidden="true">
      <!-- Open Book Cover -->
      <path d="M26,26 Q58,18 90,28 Q122,18 154,26 L154,88 Q122,78 90,88 Q58,78 26,88 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="3" />
      <!-- Left Page -->
      <path d="M32,22 Q60,14 90,25 L90,83 Q60,73 32,82 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
      <!-- Right Page -->
      <path d="M90,25 Q120,14 148,22 L148,82 Q120,73 90,83 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
      <!-- Lines on Left Page -->
      <line x1="44" y1="36" x2="78" y2="33" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="44" y1="48" x2="78" y2="45" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="44" y1="60" x2="74" y2="58" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <!-- Lines on Right Page -->
      <line x1="102" y1="33" x2="136" y2="36" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="102" y1="45" x2="136" y2="48" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <line x1="106" y1="58" x2="136" y2="60" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
      <!-- Bookmark -->
      <polygon points="98,24 110,22 110,64 104,57 98,64" fill="#3b82f6" />
    </svg>
  `;
}

export function renderReadingIllustrationSvg(type = 'solar') {
  if (type === 'solar') {
    return `
      <svg viewBox="0 0 180 210" class="reading-illustration-svg" role="img" aria-label="Ilustración del Sistema Solar">
        <defs>
          <radialGradient id="spaceGrad" cx="30%" cy="50%" r="80%">
            <stop offset="0%" stop-color="#1e3a8a" />
            <stop offset="100%" stop-color="#090d16" />
          </radialGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="65%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ea580c" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="180" height="210" rx="16" fill="url(#spaceGrad)" />
        <!-- Stars -->
        <circle cx="140" cy="25" r="1.5" fill="#ffffff" />
        <circle cx="160" cy="60" r="2" fill="#fde047" />
        <circle cx="120" cy="180" r="1.5" fill="#ffffff" />
        <circle cx="155" cy="145" r="1.8" fill="#ffffff" />
        <circle cx="85" cy="22" r="1.4" fill="#ffffff" />
        <!-- Orbit arcs -->
        <circle cx="-10" cy="105" r="75" fill="none" stroke="#38bdf8" stroke-opacity="0.28" stroke-dasharray="4 4" />
        <circle cx="-10" cy="105" r="115" fill="none" stroke="#38bdf8" stroke-opacity="0.28" stroke-dasharray="4 4" />
        <circle cx="-10" cy="105" r="155" fill="none" stroke="#38bdf8" stroke-opacity="0.28" stroke-dasharray="4 4" />
        <!-- Sun -->
        <circle cx="12" cy="105" r="54" fill="url(#sunGlow)" />
        <circle cx="8" cy="105" r="36" fill="#facc15" />
        <!-- Planets -->
        <circle cx="62" cy="75" r="7" fill="#fb923c" />
        <circle cx="95" cy="122" r="11" fill="#38bdf8" />
        <path d="M90,118 Q96,120 99,115" stroke="#4ade80" stroke-width="3" fill="none" stroke-linecap="round" />
        <circle cx="112" cy="54" r="9" fill="#ef4444" />
        <!-- Saturn with Ring -->
        <g transform="translate(138, 102)">
          <ellipse cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#fde68a" stroke-width="3.5" transform="rotate(-20)" />
          <circle cx="0" cy="0" r="12" fill="#f59e0b" />
        </g>
        <circle cx="132" cy="164" r="9" fill="#60a5fa" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 180 210" class="reading-illustration-svg" role="img" aria-label="Ilustración educativa">
      <rect width="180" height="210" rx="16" fill="#e0f2fe" />
      <circle cx="135" cy="48" r="24" fill="#facc15" />
      <path d="M0,150 Q55,120 110,148 T180,140 L180,210 L0,210 Z" fill="#4ade80" />
      <circle cx="60" cy="115" r="28" fill="#22c55e" />
      <rect x="55" y="135" width="10" height="26" fill="#92400e" />
    </svg>
  `;
}

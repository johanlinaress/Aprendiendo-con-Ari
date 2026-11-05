class SoundManager {
  constructor() {
    this.enabled = true;
    this.musicEnabled = true;
    this.audioCtx = null;
    this.history = [];
    this.lastPlayed = null;

    // Estado de la música de fondo
    this.currentRouteName = 'inicio';
    this.currentMusicKey = null; // 'home' | 'activity' | null
    this.activeMusicAudio = null;
    this.hasUserInteracted = false;
    this.audioCache = new Map();

    // Rutas de archivos de audio reales (carpeta sounds/)
    this.audioSources = {
      correct: [
        './sounds/collect-points.mp3',
        './sounds/sonido al selecionar una respuesta correcta/liecio-collect-points-190037.mp3'
      ],
      levelComplete: [
        './sounds/level-passed.mp3',
        './sounds/sonido al pasar nivel/universfield-level-passed-143039.mp3'
      ],
      homeMusic: [
        './sounds/home-music.mp3',
        './sounds/sonidos de fondo de inicio, etc/mihailandrei-praia-de-domingo-477785.mp3'
      ],
      activityMusic: [
        './sounds/activity-music.mp3',
        './sounds/sonido al realizar cualquier prueba-actividad/ejah_music-wake-up-clair-de-lune-468898.mp3'
      ]
    };

    this.initUserGestureHandler();
  }

  initUserGestureHandler() {
    if (typeof window === 'undefined') return;
    const unlock = () => {
      this.hasUserInteracted = true;
      this.initContext();
      if (this.musicEnabled) {
        this.syncMusicPlayback();
      }
      window.removeEventListener('pointerdown', unlock, true);
      window.removeEventListener('keydown', unlock, true);
      window.removeEventListener('click', unlock, true);
    };

    window.addEventListener('pointerdown', unlock, true);
    window.addEventListener('keydown', unlock, true);
    window.addEventListener('click', unlock, true);
  }

  initContext() {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        try {
          this.audioCtx = new AudioContextClass();
        } catch (e) {
          this.audioCtx = null;
        }
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    this.syncDebugState();
    return this.enabled;
  }

  setMusicEnabled(enabled) {
    this.musicEnabled = Boolean(enabled);
    if (!this.musicEnabled) {
      this.stopMusic();
    } else {
      this.syncMusicPlayback();
    }
    this.syncDebugState();
    return this.musicEnabled;
  }

  isEnabled() {
    return this.enabled;
  }

  isMusicEnabled() {
    return this.musicEnabled;
  }

  /**
   * Obtiene o instancia un elemento de audio HTML para un efecto o pista musical.
   */
  getOrCreateAudio(key, isLoop = false, volume = 0.7) {
    if (typeof window === 'undefined' || typeof window.Audio === 'undefined') {
      return null;
    }

    if (this.audioCache.has(key)) {
      return this.audioCache.get(key);
    }

    const paths = this.audioSources[key];
    if (!paths || paths.length === 0) return null;

    try {
      const audio = new Audio(paths[0]);
      audio.loop = Boolean(isLoop);
      audio.volume = volume;
      audio.preload = 'auto';

      // Fallback si la primera ruta falla
      audio.addEventListener('error', () => {
        if (paths[1] && audio.src !== paths[1]) {
          audio.src = encodeURI(paths[1]);
          audio.load();
        }
      });

      this.audioCache.set(key, audio);
      return audio;
    } catch (e) {
      return null;
    }
  }

  /**
   * Reproduce un archivo de audio real con volumen especificado.
   */
  playAudioFile(key, volume = 0.7) {
    if (!this.enabled) return false;
    const audio = this.getOrCreateAudio(key, false, volume);
    if (!audio) return false;

    try {
      audio.currentTime = 0;
      audio.volume = volume;
      const promise = audio.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          // Ignorado si autoplay aún no fue autorizado por el navegador
        });
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Actualiza la música de fondo según la ruta activa:
   * - En actividades/ejercicios ('nivel', 'practica'): música de concentración de actividad.
   * - En inicio y navegación ('inicio', 'materias', 'grado', 'niveles', 'progreso'): música relajante de inicio.
   */
  updateRouteMusic(routeName) {
    this.currentRouteName = routeName || 'inicio';
    this.syncMusicPlayback();
  }

  syncMusicPlayback() {
    if (!this.musicEnabled) {
      this.stopMusic();
      return;
    }

    const isActivityRoute = this.currentRouteName === 'nivel' || this.currentRouteName === 'practica';
    const targetKey = isActivityRoute ? 'activityMusic' : 'homeMusic';

    if (this.currentMusicKey === targetKey && this.activeMusicAudio && !this.activeMusicAudio.paused) {
      return;
    }

    // Si ya había una pista sonando diferente, detenerla suavemente
    if (this.activeMusicAudio && this.currentMusicKey !== targetKey) {
      try {
        this.activeMusicAudio.pause();
        this.activeMusicAudio.currentTime = 0;
      } catch (e) {}
    }

    this.currentMusicKey = targetKey;
    const audio = this.getOrCreateAudio(targetKey, true, 0.22);
    if (!audio) return;

    this.activeMusicAudio = audio;
    audio.volume = 0.22;
    audio.loop = true;

    try {
      const promise = audio.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          // Si el navegador requiere interacción previa, se activará en el primer clic
        });
      }
    } catch (e) {}
  }

  stopMusic() {
    if (this.activeMusicAudio) {
      try {
        this.activeMusicAudio.pause();
      } catch (e) {}
    }
    this.currentMusicKey = null;
  }

  playTone(freq, type = 'sine', duration = 0.14, delay = 0, gainValue = 0.12) {
    const ctx = this.initContext();
    if (!ctx) return false;

    try {
      const now = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.02);
      return true;
    } catch (e) {
      return false;
    }
  }

  play(soundName) {
    const entry = {
      name: soundName,
      timestamp: Date.now(),
      played: this.enabled
    };
    this.lastPlayed = entry;
    this.history.push(entry);
    if (this.history.length > 50) {
      this.history.shift();
    }
    this.syncDebugState();

    if (!this.enabled) {
      return false;
    }

    switch (soundName) {
      case 'click':
        this.playTone(540, 'sine', 0.07, 0, 0.09);
        break;

      case 'correct':
        // Sonido real de la carpeta: sonido al selecionar una respuesta correcta
        this.playAudioFile('correct', 0.65);
        this.playTone(523.25, 'triangle', 0.12, 0, 0.14);
        this.playTone(659.25, 'triangle', 0.12, 0.09, 0.14);
        this.playTone(783.99, 'triangle', 0.22, 0.18, 0.16);
        break;

      case 'wrong':
        this.playTone(311.13, 'sawtooth', 0.14, 0, 0.09);
        this.playTone(246.94, 'sawtooth', 0.22, 0.12, 0.09);
        break;

      case 'hint':
        this.playTone(880, 'sine', 0.1, 0, 0.1);
        this.playTone(1174.66, 'sine', 0.16, 0.08, 0.1);
        break;

      case 'levelComplete':
        // Sonido real de la carpeta: sonido al pasar nivel
        this.playAudioFile('levelComplete', 0.75);
        this.playTone(523.25, 'triangle', 0.12, 0, 0.15);
        this.playTone(659.25, 'triangle', 0.12, 0.1, 0.15);
        this.playTone(783.99, 'triangle', 0.12, 0.2, 0.15);
        this.playTone(1046.5, 'triangle', 0.3, 0.3, 0.18);
        break;

      case 'locked':
        this.playTone(196, 'sine', 0.14, 0, 0.1);
        break;

      case 'ariSpeak':
      case 'listen':
        this.playTone(640, 'sine', 0.09, 0, 0.1);
        this.playTone(760, 'sine', 0.12, 0.08, 0.1);
        break;

      case 'music':
        this.syncMusicPlayback();
        this.playTone(440, 'triangle', 0.1, 0, 0.1);
        this.playTone(554.37, 'triangle', 0.1, 0.08, 0.1);
        this.playTone(659.25, 'triangle', 0.16, 0.16, 0.1);
        break;

      default:
        this.playTone(440, 'sine', 0.08, 0, 0.08);
        break;
    }

    return true;
  }

  speakText(text) {
    this.play('listen');
    if (!this.enabled || typeof window === 'undefined') return false;
    try {
      if ('speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function') {
        window.speechSynthesis.cancel();
        const utter = new window.SpeechSynthesisUtterance(text);
        utter.lang = 'es-ES';
        utter.rate = 0.95;
        utter.pitch = 1.1;
        window.speechSynthesis.speak(utter);
        return true;
      }
    } catch (e) {
      // Fallback already played listen tone
    }
    return true;
  }

  getHistory() {
    return [...this.history];
  }

  clearHistory() {
    this.history = [];
    this.lastPlayed = null;
    this.syncDebugState();
  }

  syncDebugState() {
    if (typeof window !== 'undefined') {
      window.__ariSoundState = {
        enabled: this.enabled,
        musicEnabled: this.musicEnabled,
        currentMusicKey: this.currentMusicKey,
        currentRouteName: this.currentRouteName,
        lastPlayed: this.lastPlayed,
        historyCount: this.history.length,
        history: [...this.history]
      };
    }
  }
}

export const SoundService = new SoundManager();

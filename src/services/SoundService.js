/**
 * @fileoverview Motor de Audio, Música Adaptativa y Síntesis de Voz para Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 *
 * Resuelve URLs de recursos de audio asegurando rutas absolutas válidas
 * tanto en servidor local (localhost:4173) como en GitHub Pages (repo subpath).
 */
export function resolveSoundUrl(relativePath) {
  if (typeof window === 'undefined') return relativePath;
  const clean = String(relativePath || '').replace(/^\.?\//, '');
  const path = window.location.pathname;
  let baseDir = path;
  if (!baseDir.endsWith('/')) {
    if (baseDir.includes('.')) {
      baseDir = baseDir.substring(0, baseDir.lastIndexOf('/') + 1);
    } else {
      baseDir = baseDir + '/';
    }
  }
  return new URL(clean, `${window.location.origin}${baseDir}`).href;
}

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
      correct: ['sounds/collect-points.mp3'],
      levelComplete: ['sounds/level-passed.mp3'],
      homeMusic: ['sounds/home-music.mp3'],
      activityMusic: ['sounds/activity-music.mp3']
    };

    this.initUserGestureHandler();
  }

  /**
   * Registra detectores de interacción de usuario para desbloquear tanto
   * el AudioContext (Web Audio API) como los elementos HTML <audio> (Autoplay Policy).
   */
  initUserGestureHandler() {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      this.hasUserInteracted = true;
      this.initContext();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      if (this.musicEnabled && (!this.activeMusicAudio || this.activeMusicAudio.paused)) {
        this.syncMusicPlayback();
      }
    };

    const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'click', 'keydown'];
    for (const ev of gestureEvents) {
      window.addEventListener(ev, unlock, { passive: true, capture: true });
    }
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
  getOrCreateAudio(key, isLoop = false, volume = 0.85) {
    if (typeof window === 'undefined' || typeof window.Audio === 'undefined') {
      return null;
    }

    if (this.audioCache.has(key)) {
      const cached = this.audioCache.get(key);
      cached.loop = Boolean(isLoop);
      cached.volume = volume;
      return cached;
    }

    const paths = this.audioSources[key];
    if (!paths || paths.length === 0) return null;

    try {
      const primaryUrl = resolveSoundUrl(paths[0]);
      const audio = new Audio(primaryUrl);
      audio.loop = Boolean(isLoop);
      audio.volume = volume;
      audio.preload = 'auto';

      audio.addEventListener('error', () => {
        if (paths[1]) {
          const fallbackUrl = resolveSoundUrl(paths[1]);
          if (audio.src !== fallbackUrl) {
            audio.src = fallbackUrl;
            audio.load();
          }
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
   * Utiliza clonación ligera si el archivo ya está en reproducción para evitar cortes.
   */
  playAudioFile(key, volume = 0.85) {
    if (!this.enabled) return false;
    const baseAudio = this.getOrCreateAudio(key, false, volume);
    if (!baseAudio) return false;

    try {
      let soundToPlay = baseAudio;
      if (!baseAudio.paused && baseAudio.currentTime > 0) {
        soundToPlay = baseAudio.cloneNode(true);
      }
      soundToPlay.currentTime = 0;
      soundToPlay.volume = volume;
      const promise = soundToPlay.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          // Ignorado si la política de autoplay aún está pendiente
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
   * - En inicio y navegación ('inicio', 'materias', 'grado', 'niveles', 'progreso'): música alegre de inicio.
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

    // Si la pista actual ya está sonando, no reiniciar
    if (this.currentMusicKey === targetKey && this.activeMusicAudio && !this.activeMusicAudio.paused) {
      return;
    }

    // Si había una pista diferente sonando, pausarla
    if (this.activeMusicAudio && this.currentMusicKey !== targetKey) {
      try {
        this.activeMusicAudio.pause();
        this.activeMusicAudio.currentTime = 0;
      } catch (e) {}
    }

    this.currentMusicKey = targetKey;
    const audio = this.getOrCreateAudio(targetKey, true, 0.40);
    if (!audio) return;

    this.activeMusicAudio = audio;
    audio.volume = 0.40;
    audio.loop = true;

    try {
      const promise = audio.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          // Si el navegador bloqueó autoplay, sonará inmediatamente tras el primer clic
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

  playTone(freq, type = 'sine', duration = 0.14, delay = 0, gainValue = 0.25) {
    const ctx = this.initContext();
    if (!ctx) return false;

    const executeTone = () => {
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
      } catch (e) {}
    };

    if (ctx.state === 'suspended') {
      ctx.resume().then(executeTone).catch(() => {});
      return true;
    }

    executeTone();
    return true;
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

    // Despierta el contexto de audio si está suspendido
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }

    switch (soundName) {
      case 'click':
        this.playTone(560, 'sine', 0.08, 0, 0.28);
        break;

      case 'correct':
        // Sonido real de la carpeta: sonido al selecionar una respuesta correcta
        this.playAudioFile('correct', 0.90);
        this.playTone(523.25, 'triangle', 0.12, 0, 0.22);
        this.playTone(659.25, 'triangle', 0.12, 0.09, 0.22);
        this.playTone(783.99, 'triangle', 0.22, 0.18, 0.26);
        break;

      case 'wrong':
        this.playTone(311.13, 'sawtooth', 0.16, 0, 0.22);
        this.playTone(246.94, 'sawtooth', 0.25, 0.12, 0.22);
        break;

      case 'hint':
        this.playTone(880, 'sine', 0.12, 0, 0.22);
        this.playTone(1174.66, 'sine', 0.18, 0.08, 0.22);
        break;

      case 'levelComplete':
        // Sonido real de la carpeta: sonido al pasar nivel
        this.playAudioFile('levelComplete', 0.95);
        this.playTone(523.25, 'triangle', 0.14, 0, 0.24);
        this.playTone(659.25, 'triangle', 0.14, 0.1, 0.24);
        this.playTone(783.99, 'triangle', 0.14, 0.2, 0.24);
        this.playTone(1046.5, 'triangle', 0.35, 0.3, 0.28);
        break;

      case 'locked':
        this.playTone(196, 'sine', 0.16, 0, 0.22);
        break;

      case 'ariSpeak':
      case 'listen':
        this.playTone(640, 'sine', 0.1, 0, 0.22);
        this.playTone(760, 'sine', 0.14, 0.08, 0.22);
        break;

      case 'music':
        this.syncMusicPlayback();
        this.playTone(440, 'triangle', 0.1, 0, 0.15);
        this.playTone(554.37, 'triangle', 0.1, 0.08, 0.15);
        this.playTone(659.25, 'triangle', 0.16, 0.16, 0.15);
        break;

      default:
        this.playTone(440, 'sine', 0.08, 0, 0.2);
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
      // Fallback ya ejecutó tono listen
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

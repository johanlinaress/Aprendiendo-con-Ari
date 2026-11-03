class SoundManager {
  constructor() {
    this.enabled = true;
    this.musicEnabled = true;
    this.audioCtx = null;
    this.history = [];
    this.lastPlayed = null;
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
    this.syncDebugState();
    return this.musicEnabled;
  }

  isEnabled() {
    return this.enabled;
  }

  isMusicEnabled() {
    return this.musicEnabled;
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
        lastPlayed: this.lastPlayed,
        historyCount: this.history.length,
        history: [...this.history]
      };
    }
  }
}

export const SoundService = new SoundManager();

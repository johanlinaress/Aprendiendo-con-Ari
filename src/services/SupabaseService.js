/**
 * @fileoverview Cliente ligero REST para Supabase (Podio en tiempo real, Respaldo en la nube y Analítica).
 * Utiliza únicamente la llave pública segura (Publishable Key) protegida mediante políticas RLS en Postgres.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 */

export const SUPABASE_URL = 'https://xrvjugfxdswprzyxyghq.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_vpxksRJlKdhFx_k9FABC0w_hAVaJeMj';

const SYNC_CODE_STORAGE_KEY = 'aprendiendo_con_ari_sync_code_v1';
const SESSION_TOKEN_STORAGE_KEY = 'aprendiendo_con_ari_session_v1';

function isHeadlessAuditBrowser() {
  if (typeof navigator === 'undefined') return false;
  return Boolean(navigator.webdriver) || /HeadlessChrome/i.test(navigator.userAgent || '');
}

function generateRandomAlphanumeric(length = 8) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < length; i++) {
      result += chars[bytes[i] % chars.length];
    }
    return result;
  }
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

class SupabaseClientService {
  constructor() {
    this.restBase = `${SUPABASE_URL}/rest/v1`;
    this.syncDebounceId = null;
    this.lastHeartByDonor = new Map();
  }

  getHeaders(extraHeaders = {}) {
    return {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      ...extraHeaders
    };
  }

  /**
   * Obtiene o genera el Código de Explorador único para sincronizar progreso entre dispositivos.
   */
  getOrCreateSyncCode() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return `ARI-${generateRandomAlphanumeric(4)}-${generateRandomAlphanumeric(4)}`;
    }
    try {
      const existing = (window.localStorage.getItem(SYNC_CODE_STORAGE_KEY) || '').trim().toUpperCase();
      if (existing.length >= 8) {
        return existing;
      }
      const created = `ARI-${generateRandomAlphanumeric(4)}-${generateRandomAlphanumeric(4)}`;
      window.localStorage.setItem(SYNC_CODE_STORAGE_KEY, created);
      return created;
    } catch (e) {
      return `ARI-${generateRandomAlphanumeric(4)}-${generateRandomAlphanumeric(4)}`;
    }
  }

  setSyncCode(rawCode) {
    const normalized = String(rawCode || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (normalized.length < 8 || normalized.length > 64) {
      return null;
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(SYNC_CODE_STORAGE_KEY, normalized);
      } catch (e) {
        // Ignorar quota exceeded
      }
    }
    return normalized;
  }

  getSessionToken() {
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return 'sess-static-01';
    }
    try {
      const existing = window.sessionStorage.getItem(SESSION_TOKEN_STORAGE_KEY);
      if (existing && existing.length >= 6) return existing;
      const created = `sess-${generateRandomAlphanumeric(10).toLowerCase()}`;
      window.sessionStorage.setItem(SESSION_TOKEN_STORAGE_KEY, created);
      return created;
    } catch (e) {
      return 'sess-static-01';
    }
  }

  /**
   * Consulta en tiempo real la vista segura `donors_podium_view`.
   */
  async fetchPublicDonors() {
    if (typeof fetch !== 'function') return null;
    try {
      const res = await fetch(`${this.restBase}/donors_podium_view?select=*`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      if (!res.ok) return null;
      const rows = await res.json();
      if (!Array.isArray(rows)) return null;

      return rows.map((row) => {
        const amt = Number(row.amount) || 0;
        const cur = String(row.currency || 'COP').toUpperCase();
        const formattedAmount =
          amt > 0
            ? cur === 'USD'
              ? `$${amt} USD`
              : `$${amt.toLocaleString('es-CO')} COP`
            : '';

        return {
          id: `sb-${row.id}`,
          dbId: Number(row.id),
          name: row.name,
          amount: amt,
          currency: cur,
          amountFormatted: formattedAmount,
          badge: row.badge || 'Donador de Corazón 💖',
          method: row.method || 'Bre-B Nequi',
          hearts: Number(row.hearts) || 0,
          message:
            row.message ||
            `¡Muchas gracias ${row.name} con todo el corazón! 💖 Tu generosidad llena de alegría las lecciones de miles de niños.`,
          date: row.display_date || 'Donación verificada',
          isCloud: true
        };
      });
    } catch (err) {
      return null;
    }
  }

  /**
   * Registra un corazón (+1) para un donador en Supabase (`donor_hearts`) con protección anti-spam.
   */
  async sendDonorHeart(dbId) {
    const idNum = Number(dbId);
    if (isHeadlessAuditBrowser() || !Number.isInteger(idNum) || idNum <= 0 || typeof fetch !== 'function') {
      return false;
    }
    const now = Date.now();
    const lastSent = this.lastHeartByDonor.get(idNum) || 0;
    if (now - lastSent < 1000) {
      return false;
    }
    this.lastHeartByDonor.set(idNum, now);

    try {
      const res = await fetch(`${this.restBase}/donor_hearts`, {
        method: 'POST',
        headers: this.getHeaders({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ donor_id: idNum })
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  }

  /**
   * Registra un donador en la tabla `donors` de Supabase para que sea visible para todos los usuarios.
   */
  async registerDonorInCloud({ name, amount = 0, currency = 'COP', method = 'Bre-B Nequi', message = '' }) {
    if (isHeadlessAuditBrowser() || typeof fetch !== 'function') {
      return null;
    }
    const cleanName = String(name || '').trim().slice(0, 80);
    if (cleanName.length < 2) return null;

    const cleanAmount = Math.max(0, Math.min(50000000, Number(amount) || 0));
    const cleanCurrency = String(currency).toUpperCase() === 'USD' ? 'USD' : 'COP';
    const cleanMethod = String(method || 'Bre-B Nequi').trim().slice(0, 40) || 'Bre-B Nequi';
    const cleanMessage = String(message || '').trim().slice(0, 500);

    try {
      const res = await fetch(`${this.restBase}/donors`, {
        method: 'POST',
        headers: this.getHeaders({
          'Content-Type': 'application/json',
          Prefer: 'return=representation'
        }),
        body: JSON.stringify({
          name: cleanName,
          amount: cleanAmount,
          currency: cleanCurrency,
          method: cleanMethod,
          badge: 'Donador de Corazón 💖',
          message: cleanMessage,
          base_hearts: 10,
          display_date: 'Donación registrada',
          is_active: true
        })
      });
      if (!res.ok) return null;
      const rows = await res.json();
      return Array.isArray(rows) && rows[0] ? rows[0] : null;
    } catch (err) {
      return null;
    }
  }

  /**
   * Guarda o actualiza en la nube (`student_profiles`) el progreso del alumno usando su `sync_code`.
   */
  async saveProfileToCloud(state, completedLevelsCount = 0) {
    if (typeof fetch !== 'function' || !state || typeof state !== 'object') {
      return { success: false, message: 'Entorno sin conexión disponible.' };
    }

    const syncCode = this.getOrCreateSyncCode();
    const cleanName = String(state.playerName || 'Explorador/a').trim().slice(0, 40) || 'Explorador/a';
    const cleanGrade = String(state.selectedGrade) === '4' ? '4' : '3';

    try {
      const payload = {
        sync_code: syncCode,
        player_name: cleanName,
        selected_grade: cleanGrade,
        total_score: Math.max(0, Number(state.totalScore) || 0),
        star_points: Math.max(0, Number(state.starPoints) || 0),
        completed_levels_count: Math.max(0, Number(completedLevelsCount) || 0),
        best_streak: Math.max(0, Number(state.bestStreak) || 0),
        state_snapshot: {
          version: state.version || 2,
          playerName: cleanName,
          selectedGrade: cleanGrade,
          lastActivityLabel: state.lastActivityLabel || 'Inicio de aventura',
          lastLevelId: state.lastLevelId || null,
          totalScore: Math.max(0, Number(state.totalScore) || 0),
          starPoints: Math.max(0, Number(state.starPoints) || 0),
          bonusStars: Math.max(0, Number(state.bonusStars) || 0),
          practiceScore: Math.max(0, Number(state.practiceScore) || 0),
          currentStreak: Math.max(0, Number(state.currentStreak) || 0),
          bestStreak: Math.max(0, Number(state.bestStreak) || 0),
          totalCorrectAnswers: Math.max(0, Number(state.totalCorrectAnswers) || 0),
          totalQuestionsAnswered: Math.max(0, Number(state.totalQuestionsAnswered) || 0),
          unlockedLevels: Array.isArray(state.unlockedLevels) ? state.unlockedLevels : [1, 6, 10],
          rewardedQuestionIds: Array.isArray(state.rewardedQuestionIds) ? state.rewardedQuestionIds : [],
          levels: state.levels || {},
          achievements: Array.isArray(state.achievements) ? state.achievements : []
        }
      };

      const res = await fetch(`${this.restBase}/student_profiles?on_conflict=sync_code`, {
        method: 'POST',
        headers: this.getHeaders({
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=representation',
          'x-ari-sync-code': syncCode
        }),
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        return { success: false, message: 'No se pudo guardar en la nube en este momento.' };
      }

      return {
        success: true,
        syncCode,
        message: `¡Progreso sincronizado en la nube con el código ${syncCode}!`
      };
    } catch (err) {
      return { success: false, message: 'Sin conexión a internet. Tu partida sigue segura localmente.' };
    }
  }

  /**
   * Programa una sincronización automática en segundo plano para evitar exceso de peticiones.
   */
  scheduleAutoSync(state, completedLevelsCount = 0) {
    if (isHeadlessAuditBrowser() || typeof navigator !== 'undefined' && navigator.onLine === false) {
      return;
    }
    if (this.syncDebounceId) {
      clearTimeout(this.syncDebounceId);
    }
    this.syncDebounceId = setTimeout(() => {
      this.saveProfileToCloud(state, completedLevelsCount);
    }, 1800);
  }

  /**
   * Descarga el progreso guardado en la nube a partir de un Código de Explorador.
   */
  async loadProfileFromCloud(rawSyncCode) {
    if (typeof fetch !== 'function') {
      return { success: false, message: 'Fetch no disponible en este navegador.' };
    }

    const code = String(rawSyncCode || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (code.length < 8) {
      return { success: false, message: 'Ingresa un Código de Explorador válido (mínimo 8 caracteres, ej: ARI-XXXX-XXXX).' };
    }

    try {
      const res = await fetch(`${this.restBase}/student_profiles?select=*`, {
        method: 'GET',
        headers: this.getHeaders({
          'x-ari-sync-code': code
        })
      });

      if (!res.ok) {
        return { success: false, message: 'Error de conexión al consultar Supabase.' };
      }

      const rows = await res.json();
      if (!Array.isArray(rows) || rows.length === 0) {
        return {
          success: false,
          message: `No encontramos una partida guardada en la nube con el código «${code}».`
        };
      }

      const row = rows[0];
      this.setSyncCode(code);

      return {
        success: true,
        profile: row,
        stateSnapshot: row.state_snapshot || {}
      };
    } catch (err) {
      return { success: false, message: 'No fue posible conectarse con la nube. Verifica tu internet.' };
    }
  }

  /**
   * Registra telemetría educativa anónima en `learning_events`.
   */
  async trackLearningEvent({ selectedGrade, eventType, levelId = null, score = 0, accuracy = 0, passed = false }) {
    if (isHeadlessAuditBrowser() || typeof fetch !== 'function') {
      return false;
    }
    const validTypes = ['level_completed', 'level_attempted', 'practice_completed', 'grade_selected'];
    if (!validTypes.includes(eventType)) return false;

    const cleanGrade = String(selectedGrade) === '4' ? '4' : '3';
    const cleanLevel = levelId !== null && Number(levelId) >= 1 && Number(levelId) <= 100 ? Number(levelId) : null;

    try {
      const res = await fetch(`${this.restBase}/learning_events`, {
        method: 'POST',
        headers: this.getHeaders({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          session_token: this.getSessionToken(),
          selected_grade: cleanGrade,
          event_type: eventType,
          level_id: cleanLevel,
          score: Math.max(0, Math.round(Number(score) || 0)),
          accuracy: Math.max(0, Math.min(100, Math.round(Number(accuracy) || 0))),
          passed: Boolean(passed)
        })
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  }
}

export const SupabaseService = new SupabaseClientService();

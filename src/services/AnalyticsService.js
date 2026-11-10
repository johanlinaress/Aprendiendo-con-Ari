/**
 * Servicio de Analítica para Aprendiendo con Ari
 * Compatible con Google Analytics 4 (GA4).
 *
 * Proporciona métricas en tiempo real:
 * - Personas conectadas en vivo y mapa de países / ciudades.
 * - Dispositivos utilizados (móvil, tablet, computadora).
 * - Tiempo de permanencia y navegación por rutas (SPA Hash Router).
 * - Seguimiento de niveles jugados, niveles completados, aciertos y materias.
 */

import { SupabaseService } from './SupabaseService.js';

export const DEFAULT_GA_ID = 'GTM-NWXWZF9D';

class AnalyticsManager {
  constructor() {
    this.measurementId = DEFAULT_GA_ID;
    this.initialized = false;
    this.isRealId = false;
  }

  /**
   * Configura e inicializa Google Analytics 4 de forma asíncrona y segura.
   * Si el ID es el marcador de posición por defecto, opera en modo neutro sin
   * generar llamadas de red ni errores en entornos de prueba o locales.
   *
   * @param {string} [customId] - ID de medición opcional (ej: 'G-1234567890' o 'GTM-XXXXXXX')
   */
  init(customId) {
    if (typeof window === 'undefined') return;

    const idFromWindow = typeof window.GA_MEASUREMENT_ID === 'string' ? window.GA_MEASUREMENT_ID.trim() : null;
    const finalId = customId || idFromWindow || this.measurementId;

    this.measurementId = finalId;
    this.isRealId = Boolean(
      this.measurementId &&
      (this.measurementId.startsWith('G-') || this.measurementId.startsWith('GTM-')) &&
      this.measurementId !== 'G-XXXXXXXXXX'
    );

    // Preparar cola de eventos dataLayer estándar
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    if (this.isRealId && !this.initialized) {
      // Inyección asíncrona si no vino ya incluido en index.html
      const existingScript = document.querySelector(
        `script[src*="${this.measurementId}"]`
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        const endpoint = this.measurementId.startsWith('GTM-') ? 'gtm.js' : 'gtag/js';
        script.src = `https://www.googletagmanager.com/${endpoint}?id=${encodeURIComponent(this.measurementId)}`;
        document.head.appendChild(script);
      }

      window.gtag('js', new Date());
      // Desactivamos page_view automático para que coincida exactamente con las rutas hash del router de Ari
      window.gtag('config', this.measurementId, {
        send_page_view: false,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    }

    this.initialized = true;
  }

  /**
   * Envía un evento a Google Analytics o a debug interno.
   *
   * @param {string} eventName - Nombre del evento (ej: 'level_complete', 'page_view')
   * @param {object} [params={}] - Parámetros descriptivos del evento
   */
  sendEvent(eventName, params = {}) {
    if (typeof window === 'undefined') return;

    if (this.isRealId && typeof window.gtag === 'function') {
      try {
        window.gtag('event', eventName, params);
      } catch (err) {
        // Evita romper la app si las cookies de terceros o un adblocker bloquean gtag
      }
    } else if (window.__ARI_ANALYTICS_DEBUG__) {
      console.log(`[Ari Analytics] ${eventName}:`, params);
    }
  }

  /**
   * Registra una vista de página cuando el usuario cambia de ruta en la aplicación.
   *
   * @param {string} path - Ruta interna (ej: '/inicio', '/materias', '/nivel/3')
   * @param {string} [title] - Título descriptivo de la sección
   */
  trackPageView(path, title) {
    const fullPath = `#${path.startsWith('/') ? path : '/' + path}`;
    this.sendEvent('page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: fullPath
    });
  }

  /**
   * Registra cuando un alumno entra a jugar un nivel específico.
   *
   * @param {number|string} levelId - Número de nivel
   * @param {string} [subject] - Materia (matemáticas, español, etc.)
   * @param {string} [levelTitle] - Título o tema del nivel
   */
  trackLevelStart(levelId, subject, levelTitle) {
    this.sendEvent('level_start', {
      level_id: Number(levelId),
      subject: subject || 'desconocida',
      level_name: levelTitle || `Nivel ${levelId}`
    });
  }

  /**
   * Registra cuando un estudiante termina un nivel.
   *
   * @param {object} data
   * @param {number|string} data.levelId
   * @param {boolean} data.passed - Si alcanzó el 70% requerido
   * @param {number} data.accuracy - Porcentaje de respuestas correctas
   * @param {number} data.stars - Estrellas conseguidas (1, 2 o 3)
   * @param {number} [data.score] - Puntos de la sesión
   */
  trackLevelComplete({ levelId, passed, accuracy, stars, score }) {
    this.sendEvent('level_complete', {
      level_id: Number(levelId),
      passed: Boolean(passed),
      accuracy: Number(accuracy || 0),
      stars_earned: Number(stars || 0),
      session_score: Number(score || 0)
    });

    let activeGrade = '3';
    try {
      const raw = window.localStorage?.getItem('aprendiendo_con_ari_state_v1');
      if (raw) activeGrade = JSON.parse(raw).selectedGrade || '3';
    } catch (e) {
      // Fallback silencioso
    }

    SupabaseService.trackLearningEvent({
      selectedGrade: activeGrade,
      eventType: passed ? 'level_completed' : 'level_attempted',
      levelId: Number(levelId),
      score: Number(score || 0),
      accuracy: Number(accuracy || 0),
      passed: Boolean(passed)
    });
  }

  /**
   * Registra cuando el usuario cambia o selecciona su grado escolar.
   *
   * @param {string} grade - Grado (ej: '1', '2', '3')
   */
  trackGradeSelect(grade) {
    this.sendEvent('select_grade', { grade: String(grade) });
    SupabaseService.trackLearningEvent({
      selectedGrade: String(grade),
      eventType: 'grade_selected',
      passed: true
    });
  }

  /**
   * Registra interacciones con la sección de donaciones / apoyo.
   *
   * @param {string} method - Método (nequi, arq, paypal)
   * @param {string} [action='select'] - Acción realizada
   */
  trackDonationAction(method, action = 'select') {
    this.sendEvent('donation_interaction', { method, action });
  }
}

export const AnalyticsService = new AnalyticsManager();

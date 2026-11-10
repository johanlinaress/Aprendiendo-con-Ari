/**
 * @fileoverview Índice modular del Banco Curricular y Contenidos Pedagógicos de Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

import { SUBJECTS_DATA, CATEGORIES } from './subjectsData.js';
import { EXPOSITIVE_READINGS_DATA } from './readingsData.js';
import { ACHIEVEMENTS_DATA } from './achievementsData.js';
import { MATH_LEVELS_DATA } from './mathLevelsData.js';
import { SPANISH_LEVELS_DATA } from './spanishLevelsData.js';

export {
  SUBJECTS_DATA,
  CATEGORIES,
  EXPOSITIVE_READINGS_DATA,
  ACHIEVEMENTS_DATA,
  MATH_LEVELS_DATA,
  SPANISH_LEVELS_DATA
};

export const LEVELS_DATA = [...MATH_LEVELS_DATA, ...SPANISH_LEVELS_DATA];

export function getQuestionsForLevel(level, grade = '3', options = {}) {
  if (!level) return [];
  const pool =
    String(grade) === '4' && Array.isArray(level.questionsGrade4) && level.questionsGrade4.length > 0
      ? level.questionsGrade4
      : level.questions || [];

  if (options.count || options.shuffle) {
    const count = Number(options.count) || 5;
    const excludeIds = Array.isArray(options.excludeIds) ? options.excludeIds : [];

    // Separar en preguntas no vistas en el último intento (fresh) y ya vistas (seen)
    const fresh = pool.filter((q) => !excludeIds.includes(q.id));
    const seen = pool.filter((q) => excludeIds.includes(q.id));

    const shuffleArray = (arr) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const shuffledFresh = shuffleArray(fresh);
    const shuffledSeen = shuffleArray(seen);

    // Priorizar preguntas no vistas en la sesión anterior para evitar repetición
    const picked = [...shuffledFresh, ...shuffledSeen].slice(0, count);

    return picked.map((q) => {
      if (
        !Array.isArray(q.options) ||
        q.interactionType === 'ordering' ||
        q.interactionType === 'matching' ||
        q.interactionType === 'true_false'
      ) {
        return { ...q };
      }
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    });
  }

  return pool;
}

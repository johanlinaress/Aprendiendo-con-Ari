import { LEVELS_DATA, ACHIEVEMENTS_DATA } from '../data/levelsData.js';
import { SoundService } from './SoundService.js';

export const STORAGE_KEY = 'aprendiendo_con_ari_state_v1';
export const SESSION_STORAGE_KEY = 'aprendiendo_con_ari_active_session_v1';
export const INITIAL_UNLOCKED_LEVELS = [1, 6, 10];

export function normalizeAnswerText(value) {
  const str = String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/ñ/g, '__enie__')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/__enie__/g, 'ñ');

  // Si es numérico con puntos de mil (ej. 1.400 -> 1400), normalizar
  if (/^\d{1,3}(\.\d{3})+$/.test(str)) {
    return str.replace(/\./g, '');
  }
  return str;
}

export function isAnswerMatch(userAnswer, correctAnswer) {
  if (userAnswer === null || userAnswer === undefined) return false;
  if (String(userAnswer).trim() === String(correctAnswer).trim()) return true;
  const normUser = normalizeAnswerText(userAnswer);
  const normCorrect = normalizeAnswerText(correctAnswer);
  return normUser.length > 0 && normUser === normCorrect;
}

/** Cantidad mínima de respuestas correctas para aprobar (ej. 5 preguntas al 70% → 4). */
export function getRequiredCorrectAnswers(totalQuestions, minPassPercent = 70) {
  return Math.ceil((Number(totalQuestions) * Number(minPassPercent)) / 100);
}

function createInitialLevelsState() {
  const levels = {};
  for (const level of LEVELS_DATA) {
    levels[level.id] = {
      id: level.id,
      completed: false,
      inProgress: false,
      stars: 0,
      bestScore: 0,
      bestAccuracy: 0,
      attempts: 0,
      completionBonusClaimed: false,
      perfectBonusClaimed: false
    };
  }
  return levels;
}

export function getDefaultState() {
  return {
    version: 2,
    playerName: 'Juanito',
    selectedGrade: '3',
    startedAt: new Date().toISOString(),
    lastActivityLabel: 'Inicio de aventura',
    lastLevelId: null,
    soundEnabled: true,
    musicEnabled: true,
    totalScore: 0,
    starPoints: 0,
    bonusStars: 0,
    practiceScore: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalCorrectAnswers: 0,
    totalQuestionsAnswered: 0,
    unlockedLevels: [...INITIAL_UNLOCKED_LEVELS],
    rewardedQuestionIds: [],
    levels: createInitialLevelsState(),
    achievements: [],
    lastUpdated: new Date().toISOString()
  };
}

class StorageManager {
  constructor() {
    this.listeners = new Set();
    this.storageWarning = null;
    this.state = this.loadState();
    SoundService.setEnabled(this.state.soundEnabled);
    SoundService.setMusicEnabled(this.state.musicEnabled);
  }

  loadState() {
    const defaults = getDefaultState();
    if (typeof window === 'undefined' || !window.localStorage) {
      return defaults;
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.persist(defaults);
        return defaults;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') {
        this.persist(defaults);
        return defaults;
      }

      const mergedLevels = createInitialLevelsState();
      if (parsed.levels && typeof parsed.levels === 'object') {
        for (const level of LEVELS_DATA) {
          if (parsed.levels[level.id]) {
            mergedLevels[level.id] = {
              ...mergedLevels[level.id],
              ...parsed.levels[level.id]
            };
          }
        }
      }

      const unlocked = Array.isArray(parsed.unlockedLevels)
        ? Array.from(
            new Set([
              ...INITIAL_UNLOCKED_LEVELS,
              ...parsed.unlockedLevels.map(Number).filter((n) => Number.isFinite(n) && n > 0)
            ])
          ).sort((a, b) => a - b)
        : [...INITIAL_UNLOCKED_LEVELS];

      const state = {
        ...defaults,
        ...parsed,
        unlockedLevels: unlocked,
        rewardedQuestionIds: Array.isArray(parsed.rewardedQuestionIds) ? parsed.rewardedQuestionIds : [],
        levels: mergedLevels,
        achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
      };

      return state;
    } catch (e) {
      return defaults;
    }
  }

  persist(stateToSave = this.state) {
    stateToSave.lastUpdated = new Date().toISOString();
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
        this.storageWarning = null;
      } catch (e) {
        this.storageWarning =
          'No fue posible guardar en el almacenamiento del navegador (espacio lleno o modo restringido). Tu avance se mantiene activo durante esta sesión.';
      }
    }
    this.notify();
  }

  getStorageWarning() {
    return this.storageWarning;
  }

  saveExerciseSession(session) {
    if (!session || typeof window === 'undefined' || !window.localStorage) return;
    try {
      const payload = {
        levelId: Number(session.levelId),
        grade: String(session.grade || '3'),
        activePhase: session.activePhase || 'aprendo',
        questionIndex: Number(session.questionIndex) || 0,
        correctCount: Number(session.correctCount) || 0,
        sessionScore: Number(session.sessionScore) || 0,
        usedHint: Boolean(session.usedHint),
        readingTopicIndex: Number(session.readingTopicIndex) || 0,
        readingStarted: Boolean(session.readingStarted),
        readingFragmentIndex: Number(session.readingFragmentIndex) || 0,
        isFinished: Boolean(session.isFinished),
        updatedAt: new Date().toISOString()
      };
      window.localStorage.setItem(`${SESSION_STORAGE_KEY}_${payload.levelId}`, JSON.stringify(payload));
    } catch (e) {
      // Fallo silencioso secundario si almacenamiento está lleno
    }
  }

  getExerciseSession(levelId, grade) {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    try {
      const raw = window.localStorage.getItem(`${SESSION_STORAGE_KEY}_${Number(levelId)}`);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.levelId !== Number(levelId)) return null;
      if (grade && String(parsed.grade) !== String(grade)) return null;
      if (parsed.isFinished) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  clearExerciseSession(levelId) {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      if (levelId) {
        window.localStorage.removeItem(`${SESSION_STORAGE_KEY}_${Number(levelId)}`);
      } else {
        for (const lvl of LEVELS_DATA) {
          window.localStorage.removeItem(`${SESSION_STORAGE_KEY}_${lvl.id}`);
        }
      }
    } catch (e) {
      // Ignorar errores de limpieza
    }
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.state);
      } catch (e) {
        console.error('Error en listener de estado:', e);
      }
    }
  }

  setPlayerName(name) {
    const clean = String(name || '').trim().slice(0, 28) || 'Juanito';
    this.state.playerName = clean;
    this.persist();
    return clean;
  }

  setGrade(grade) {
    const clean = String(grade) === '4' ? '4' : '3';
    this.state.selectedGrade = clean;
    this.persist();
    return clean;
  }

  markLevelInProgress(levelId) {
    const id = Number(levelId);
    const lvl = LEVELS_DATA.find((l) => l.id === id);
    if (!lvl) return;
    if (this.state.levels[id] && !this.state.levels[id].completed) {
      this.state.levels[id].inProgress = true;
    }
    this.state.lastActivityLabel = lvl.unitLabel || lvl.title;
    this.state.lastLevelId = id;
    this.persist();
  }

  toggleSound() {
    this.state.soundEnabled = !this.state.soundEnabled;
    SoundService.setEnabled(this.state.soundEnabled);
    if (this.state.soundEnabled) {
      SoundService.play('click');
    }
    this.persist();
    return this.state.soundEnabled;
  }

  toggleMusic() {
    this.state.musicEnabled = !this.state.musicEnabled;
    SoundService.setMusicEnabled(this.state.musicEnabled);
    if (this.state.musicEnabled && this.state.soundEnabled) {
      SoundService.play('music');
    }
    this.persist();
    return this.state.musicEnabled;
  }

  setSound(enabled) {
    this.state.soundEnabled = Boolean(enabled);
    SoundService.setEnabled(this.state.soundEnabled);
    this.persist();
    return this.state.soundEnabled;
  }

  isLevelUnlocked(levelId) {
    const id = Number(levelId);
    const levelDef = LEVELS_DATA.find((l) => l.id === id);
    if (!levelDef) return false;
    if (levelDef.requiredLevel === null || INITIAL_UNLOCKED_LEVELS.includes(id)) {
      return true;
    }
    return this.state.unlockedLevels.includes(id);
  }

  getNextPlayableLevelForSubject(subject) {
    const subjectLevels = LEVELS_DATA.filter((l) => l.subject === subject);
    for (const lvl of subjectLevels) {
      const st = this.state.levels[lvl.id];
      if (this.isLevelUnlocked(lvl.id) && (!st || !st.completed)) {
        return lvl.id;
      }
    }
    const unlockedSubject = subjectLevels.filter((l) => this.isLevelUnlocked(l.id));
    if (unlockedSubject.length > 0) {
      return unlockedSubject[unlockedSubject.length - 1].id;
    }
    return subjectLevels[0]?.id || 1;
  }

  /**
   * Nivel recomendado para el botón «¡Comenzar!»:
   * 1) el último nivel jugado si sigue pendiente, 2) el primer nivel desbloqueado
   * sin completar, 3) el primer nivel.
   */
  getRecommendedLevelId() {
    const lastId = Number(this.state.lastLevelId);
    if (lastId && this.isLevelUnlocked(lastId) && !this.state.levels[lastId]?.completed) {
      return lastId;
    }
    const pending = LEVELS_DATA.find((l) => this.isLevelUnlocked(l.id) && !this.state.levels[l.id]?.completed);
    return pending ? pending.id : LEVELS_DATA[0].id;
  }

  getLevelState(levelId) {
    return (
      this.state.levels[Number(levelId)] || {
        id: Number(levelId),
        completed: false,
        inProgress: false,
        stars: 0,
        bestScore: 0,
        bestAccuracy: 0,
        attempts: 0
      }
    );
  }

  getLevelStatus(levelId) {
    const st = this.getLevelState(levelId);
    if (st.completed) return 'completed';
    if (!this.isLevelUnlocked(levelId)) return 'locked';
    return st.inProgress ? 'in-progress' : 'available';
  }

  getCompletedCount() {
    return Object.values(this.state.levels).filter((l) => l.completed).length;
  }

  getSubjectSummary(subject) {
    const subjectLevels = LEVELS_DATA.filter((l) => l.subject === subject);
    const completed = subjectLevels.filter((l) => this.state.levels[l.id]?.completed).length;
    const stars = subjectLevels.reduce((acc, l) => acc + (Number(this.state.levels[l.id]?.stars) || 0), 0);
    return {
      total: subjectLevels.length,
      completed,
      stars,
      maxStars: subjectLevels.length * 3,
      percent: subjectLevels.length ? Math.round((completed / subjectLevels.length) * 100) : 0,
      nextLevelId: this.getNextPlayableLevelForSubject(subject)
    };
  }

  getTotalStars() {
    return Object.values(this.state.levels).reduce((acc, lvl) => acc + (Number(lvl.stars) || 0), 0);
  }

  getMaxPossibleStars() {
    return LEVELS_DATA.length * 3;
  }

  getSubjectProgress(subject) {
    const subjectLevels = LEVELS_DATA.filter((l) => l.subject === subject);
    if (subjectLevels.length === 0) return 0;
    let totalAccuracy = 0;
    for (const lvl of subjectLevels) {
      const st = this.state.levels[lvl.id];
      if (st && st.completed) {
        totalAccuracy += Math.max(st.bestAccuracy, 70);
      } else if (st && st.bestAccuracy > 0) {
        totalAccuracy += st.bestAccuracy * 0.5;
      }
    }
    return Math.min(100, Math.round(totalAccuracy / subjectLevels.length));
  }

  getOverallProgressPercent() {
    const completed = Object.values(this.state.levels).filter((l) => l.completed).length;
    return Math.round((completed / LEVELS_DATA.length) * 100);
  }

  calculateQuestionPoints(isCorrect, currentStreakAfterAnswer, usedHint = false) {
    if (!isCorrect) return 0;
    const basePoints = 100;
    const streakBonus = Math.max(0, (currentStreakAfterAnswer - 1) * 25);
    const hintPenalty = usedHint ? 20 : 0;
    return Math.max(50, basePoints + streakBonus - hintPenalty);
  }

  calculateStars(correctCount, totalQuestions) {
    if (!totalQuestions || totalQuestions <= 0) return 0;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    if (accuracy === 100) return 3;
    if (accuracy >= 80) return 2;
    if (accuracy >= 60) return 1;
    return 0;
  }

  recordAnswer({ isCorrect, usedHint = false, isPractice = false, questionId = null }) {
    this.state.totalQuestionsAnswered += 1;
    let pointsEarned = 0;
    let starPointsEarned = 0;

    if (isCorrect) {
      this.state.currentStreak += 1;
      this.state.totalCorrectAnswers += 1;
      if (this.state.currentStreak > this.state.bestStreak) {
        this.state.bestStreak = this.state.currentStreak;
      }

      pointsEarned = this.calculateQuestionPoints(true, this.state.currentStreak, usedHint);
      const alreadyRewarded = questionId && this.state.rewardedQuestionIds.includes(questionId);

      if (!alreadyRewarded) {
        this.state.totalScore += pointsEarned;
        // Sección 8.1: Respuesta correcta = 10 puntos de estrella
        starPointsEarned = 10;
        this.state.starPoints = (this.state.starPoints || 0) + starPointsEarned;
        if (questionId) {
          this.state.rewardedQuestionIds.push(questionId);
        }
      }

      if (isPractice) {
        this.state.practiceScore += pointsEarned;
      }
    } else {
      this.state.currentStreak = 0;
    }

    const newlyUnlockedAchievements = this.evaluateAchievements();
    this.persist();

    return {
      isCorrect,
      pointsEarned,
      starPointsEarned,
      currentStreak: this.state.currentStreak,
      bestStreak: this.state.bestStreak,
      totalScore: this.state.totalScore,
      newlyUnlockedAchievements
    };
  }

  completeLevel({ levelId, correctCount, totalQuestions, sessionScore }) {
    const id = Number(levelId);
    const levelDef = LEVELS_DATA.find((l) => l.id === id);
    if (!levelDef) {
      return null;
    }

    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    // Sección 7.2: Mínimo 70% para superar una evaluación y desbloquear el siguiente nivel
    const minPass = levelDef.minPassPercent || 70;
    const passed = accuracy >= minPass;
    const starsEarned = this.calculateStars(correctCount, totalQuestions);

    const prevLevelState = this.state.levels[id] || {
      id,
      completed: false,
      inProgress: false,
      stars: 0,
      bestScore: 0,
      bestAccuracy: 0,
      attempts: 0,
      completionBonusClaimed: false,
      perfectBonusClaimed: false
    };

    // Sección 8.1:
    // Completar una actividad: 20 puntos adicionales.
    // Completar una unidad: bonificación de 30 puntos.
    // Superar una evaluación con 100 %: bonificación de 20 puntos.
    // Evitar entregar puntos duplicados por repetir una actividad ya completada.
    let starBonusPoints = 0;
    let completionBonusClaimed = Boolean(prevLevelState.completionBonusClaimed);
    let perfectBonusClaimed = Boolean(prevLevelState.perfectBonusClaimed);

    if (passed && !completionBonusClaimed) {
      // Primera vez que supera la unidad: +20 por actividad + 30 por unidad (o starsReward visual)
      starBonusPoints += levelDef.starsReward || 20;
      this.state.bonusStars = (this.state.bonusStars || 0) + starBonusPoints;
      this.state.starPoints = (this.state.starPoints || 0) + 20 + 30;
      this.state.totalScore += 50;
      completionBonusClaimed = true;
    }

    if (passed && accuracy === 100 && !perfectBonusClaimed) {
      starBonusPoints += 20;
      this.state.bonusStars = (this.state.bonusStars || 0) + 20;
      this.state.starPoints = (this.state.starPoints || 0) + 20;
      this.state.totalScore += 20;
      perfectBonusClaimed = true;
    }

    const updatedLevelState = {
      id,
      completed: prevLevelState.completed || passed,
      inProgress: !passed && !prevLevelState.completed,
      stars: Math.max(prevLevelState.stars, starsEarned),
      bestScore: Math.max(prevLevelState.bestScore, sessionScore),
      bestAccuracy: Math.max(prevLevelState.bestAccuracy, accuracy),
      attempts: (prevLevelState.attempts || 0) + 1,
      completionBonusClaimed,
      perfectBonusClaimed
    };

    this.state.levels[id] = updatedLevelState;
    this.state.lastActivityLabel = levelDef.unitLabel || levelDef.title;

    let unlockedNextLevelId = null;
    const nextLevel = LEVELS_DATA.find((l) => l.requiredLevel === id);
    if (passed && nextLevel && !this.state.unlockedLevels.includes(nextLevel.id)) {
      this.state.unlockedLevels.push(nextLevel.id);
      this.state.unlockedLevels.sort((a, b) => a - b);
      unlockedNextLevelId = nextLevel.id;
    }

    const newlyUnlockedAchievements = this.evaluateAchievements();
    this.persist();

    return {
      levelId: id,
      passed,
      minPass,
      accuracy,
      starsEarned,
      starBonusPoints: passed ? (starBonusPoints > 0 ? starBonusPoints : levelDef.starsReward || 20) : 0,
      newBonusAwarded: starBonusPoints,
      bestStars: updatedLevelState.stars,
      sessionScore,
      bestScore: updatedLevelState.bestScore,
      unlockedNextLevelId,
      newlyUnlockedAchievements
    };
  }

  evaluateAchievements() {
    const newlyUnlocked = [];
    const currentSet = new Set(this.state.achievements);

    const lvls = this.state.levels || {};
    const completedLevelsCount = Object.values(lvls).filter((l) => l.completed).length;
    const spanishThreeStars = [6, 7, 8, 9, 10].some((id) => (lvls[id]?.stars || 0) >= 3);

    const checks = {
      primeros_pasos: completedLevelsCount >= 1,
      experto_sumas: Boolean(lvls[1]?.completed),
      maestro_restas: Boolean(lvls[2]?.completed),
      rey_multiplicaciones: Boolean(lvls[3]?.completed),
      experto_divisiones: Boolean(lvls[4]?.completed),
      explorador_palabras: Boolean(lvls[6]?.completed || lvls[7]?.completed || lvls[8]?.completed),
      lector_curioso: Boolean(lvls[10]?.completed),
      campeon_comprension: Boolean(lvls[9]?.completed || spanishThreeStars),
      superestudiante: completedLevelsCount >= LEVELS_DATA.length
    };

    for (const achievement of ACHIEVEMENTS_DATA) {
      if (checks[achievement.id] && !currentSet.has(achievement.id)) {
        currentSet.add(achievement.id);
        this.state.achievements.push(achievement.id);
        newlyUnlocked.push(achievement);
      }
    }

    return newlyUnlocked;
  }

  resetProgress() {
    const soundPref = this.state.soundEnabled;
    const musicPref = this.state.musicEnabled;
    this.clearExerciseSession();
    this.state = getDefaultState();
    this.state.soundEnabled = soundPref;
    this.state.musicEnabled = musicPref;
    this.persist();
    return this.state;
  }

  normalizeAnswerText(value) {
    return normalizeAnswerText(value);
  }
}

export const StorageService = new StorageManager();

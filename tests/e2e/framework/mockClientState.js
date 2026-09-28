/**
 * Mock Client State & Storage Engine for CAT Exam E2E Testing
 * Provides an isolated, deterministic state container simulating browser storage,
 * user sessions, attempts, bookmarks, and persona switches.
 */

const {
  STAGES,
  PERSONA_NAVIGATION_TABS,
  STAGE_CLASSIFICATION_THRESHOLDS,
  MASTERY_GATES
} = require('./contracts');

class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }

  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }

  setItem(key, value) {
    this.store.set(key, String(value));
  }

  removeItem(key) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }

  get length() {
    return this.store.size;
  }

  key(index) {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }
}

class MockAdaptiveSession {
  constructor(initialData = {}) {
    this.storage = new MockLocalStorage();
    this.reset(initialData);
  }

  reset(customState = {}) {
    this.state = {
      profile: {
        stage: customState.stage || 'BEGINNER',
        diagnosticCompleted: !!customState.diagnosticCompleted,
        diagnosticScore: customState.diagnosticScore || null,
        sectionFoundations: customState.sectionFoundations || { VARC: 0, DILR: 0, QA: 0 },
        topicMastery: customState.topicMastery || {},
        topicAccuracy: customState.topicAccuracy || {},
        topicVelocity: customState.topicVelocity || {},
        weakAreas: customState.weakAreas || [],
        strongAreas: customState.strongAreas || [],
        currentDifficulty: customState.currentDifficulty || {}
      },
      currentPersona: customState.currentPersona || 'BEGINNER',
      activeTheme: customState.activeTheme || 'beige',
      attempts: customState.attempts || [],
      bookmarks: customState.bookmarks || [],
      activeSession: null,
      mistakeBook: []
    };
    this.syncToStorage();
  }

  syncToStorage() {
    this.storage.setItem('cat_prep_profile', JSON.stringify(this.state.profile));
    this.storage.setItem('cat_prep_persona', this.state.currentPersona);
    this.storage.setItem('cat_prep_theme', this.state.activeTheme);
    this.storage.setItem('cat_prep_attempts', JSON.stringify(this.state.attempts));
    this.storage.setItem('cat_prep_bookmarks', JSON.stringify(this.state.bookmarks));
    this.storage.setItem('cat_prep_mistakes', JSON.stringify(this.state.mistakeBook));
  }

  rehydrateFromStorage() {
    const rawProfile = this.storage.getItem('cat_prep_profile');
    if (rawProfile) {
      try {
        const parsed = JSON.parse(rawProfile);
        if (parsed && typeof parsed === 'object') {
          this.state.profile = parsed;
        }
      } catch (err) {
        // Handle corrupted storage by falling back to clean state
        this.reset();
        return;
      }
    }
    const rawPersona = this.storage.getItem('cat_prep_persona');
    if (rawPersona && STAGES.includes(rawPersona)) {
      this.state.currentPersona = rawPersona;
    }
    const rawTheme = this.storage.getItem('cat_prep_theme');
    if (rawTheme) {
      this.state.activeTheme = rawTheme;
    }
    const rawAttempts = this.storage.getItem('cat_prep_attempts');
    if (rawAttempts) {
      try {
        const parsed = JSON.parse(rawAttempts);
        this.state.attempts = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        this.state.attempts = [];
      }
    }
  }

  // Persona switching
  setPersona(newPersona) {
    if (!STAGES.includes(newPersona)) {
      throw new Error(`Invalid persona: ${newPersona}. Must be one of ${STAGES.join(', ')}`);
    }
    this.state.currentPersona = newPersona;
    this.state.profile.stage = newPersona;
    this.syncToStorage();
  }

  getVisibleNavigationTabs() {
    return PERSONA_NAVIGATION_TABS[this.state.currentPersona] || PERSONA_NAVIGATION_TABS.BEGINNER;
  }

  // Theme switching
  setTheme(newTheme) {
    this.state.activeTheme = newTheme;
    this.syncToStorage();
  }

  // Diagnostic submission & classification
  submitDiagnostic(responses) {
    if (!Array.isArray(responses) || responses.length !== 12) {
      throw new Error(`Diagnostic requires exactly 12 question responses, received ${responses ? responses.length : 0}`);
    }

    let correctCount = 0;
    let varcCorrect = 0;
    let dilrCorrect = 0;
    let qaCorrect = 0;
    let totalTime = 0;

    responses.forEach(r => {
      const isCorrect = r.userAnswer === r.correctAnswer;
      if (isCorrect) {
        correctCount++;
        if (r.section === 'VARC') varcCorrect++;
        if (r.section === 'DILR') dilrCorrect++;
        if (r.section === 'QA') qaCorrect++;
      }
      totalTime += Math.max(1, r.timeSpentSeconds || 0);
    });

    const velocitySeconds = Math.round(totalTime / 12);

    let assignedStage = 'BEGINNER';
    if (correctCount >= STAGE_CLASSIFICATION_THRESHOLDS.ADVANCED_MIN_SCORE) {
      assignedStage = 'ADVANCED';
    } else if (correctCount >= STAGE_CLASSIFICATION_THRESHOLDS.INTERMEDIATE_MIN_SCORE) {
      assignedStage = 'INTERMEDIATE';
    } else {
      assignedStage = 'BEGINNER';
    }

    this.state.profile.diagnosticCompleted = true;
    this.state.profile.diagnosticScore = {
      total: correctCount,
      varc: varcCorrect,
      dilr: dilrCorrect,
      qa: qaCorrect,
      velocitySeconds
    };
    this.state.profile.stage = assignedStage;
    this.state.currentPersona = assignedStage;

    // Initialize baseline topic mastery from diagnostic
    this.state.profile.sectionFoundations = {
      VARC: Math.round((varcCorrect / 4) * 100),
      DILR: Math.round((dilrCorrect / 4) * 100),
      QA: Math.round((qaCorrect / 4) * 100)
    };

    this.syncToStorage();
    return {
      total: correctCount,
      assignedStage,
      velocitySeconds
    };
  }

  // Question Attempt Simulation
  recordAttempt(attempt) {
    const isCorrect = attempt.userAnswer === attempt.correctAnswer;
    const timeSpent = Math.max(1, attempt.timeSpentSeconds || 1);

    const record = {
      id: `att_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      questionId: attempt.questionId,
      topicId: attempt.topicId,
      section: attempt.section,
      difficulty: attempt.difficulty || 'FOUNDATION',
      userAnswer: attempt.userAnswer,
      correctAnswer: attempt.correctAnswer,
      isCorrect,
      timeSpentSeconds: timeSpent,
      timestamp: new Date().toISOString()
    };

    this.state.attempts.push(record);

    // Track rolling accuracy for topic (Window = 5)
    if (!this.state.profile.topicAccuracy[attempt.topicId]) {
      this.state.profile.topicAccuracy[attempt.topicId] = { attempted: 0, correct: 0, rollingRate: 0 };
    }
    const topicAcc = this.state.profile.topicAccuracy[attempt.topicId];
    topicAcc.attempted++;
    if (isCorrect) topicAcc.correct++;

    const topicAttempts = this.state.attempts.filter(a => a.topicId === attempt.topicId);
    const recent5 = topicAttempts.slice(-5);
    const recentCorrect = recent5.filter(a => a.isCorrect).length;
    topicAcc.rollingRate = Math.round((recentCorrect / recent5.length) * 100);

    // Dynamic Mastery Calculation (0-100)
    const baseRate = topicAcc.rollingRate;
    this.state.profile.topicMastery[attempt.topicId] = baseRate;

    // Check Weak/Strong Areas
    if (topicAcc.rollingRate < 50 && recent5.length >= 3) {
      if (!this.state.profile.weakAreas.includes(attempt.topicId)) {
        this.state.profile.weakAreas.push(attempt.topicId);
      }
      this.state.profile.strongAreas = this.state.profile.strongAreas.filter(t => t !== attempt.topicId);
    } else if (topicAcc.rollingRate >= 80 && recent5.length >= 5) {
      if (!this.state.profile.strongAreas.includes(attempt.topicId)) {
        this.state.profile.strongAreas.push(attempt.topicId);
      }
      this.state.profile.weakAreas = this.state.profile.weakAreas.filter(t => t !== attempt.topicId);
    }

    // Mistake tracking
    if (!isCorrect) {
      this.state.mistakeBook.push({
        attemptId: record.id,
        questionId: attempt.questionId,
        topicId: attempt.topicId,
        reason: attempt.mistakeReason || 'Concept gap',
        reviewed: false
      });
    }

    this.syncToStorage();
    return record;
  }
}

module.exports = {
  MockLocalStorage,
  MockAdaptiveSession
};

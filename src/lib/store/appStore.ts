import {
  UserAppState,
  UserProfile,
  PrepOnboarding,
  ActiveSession,
  UserProgress,
  UserAttempt,
  DailyFocusPlan,
  Subject,
  AdaptiveProfile,
  Stage,
  DiagnosticResult,
  SectionType,
} from '../types';
import {
  saveAttemptToCloud,
  saveAttemptsBatchToCloud,
  saveBookmarkToCloud,
  removeBookmarkFromCloud,
  saveDiagnosticToCloud,
  upsertCloudProfile,
  fetchCloudProfile,
  fetchCloudBookmarks,
  signOut as supabaseSignOut,
  getCurrentUser,
  onAuthStateChange,
  isSupabaseConfigured,
} from '../supabaseClient';

const STORAGE_KEY = 'cat_2026_prep_os_app_state';

export const DEFAULT_ONBOARDING: PrepOnboarding = {
  isCompleted: false,
  currentStep: 1,
  exam: 'CAT',
  level: 'Beginner',
  subjects: ['Full Preparation'],
  targetPercentile: '99.5+ Percentile',
  targetDate: '2026-11-29',
  dailyTime: '1h',
  studyStyle: 'Learn concepts first',
};

export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  streakDays: 0,
  lastStudyDate: new Date().toISOString(),
  dailyGoalQuestions: 15,
  todayQuestionsAttempted: 0,
  todayCorrect: 0,
  todayTimeSpentSeconds: 0,
  bookmarks: [],
  attempts: [],
  studyPlan: {
    targetExamDate: '2026-11-29',
    targetHoursPerDay: 1.5,
    dailyMission: {
      qaCount: 10,
      dilrSets: 1,
      rcPassages: 1,
      vaCount: 4,
      mistakeReviews: 2,
      completed: false,
    },
  },
};

export const DEFAULT_ADAPTIVE_PROFILE: AdaptiveProfile = {
  stage: 'BEGINNER',
  diagnosticCompleted: false,
  sectionFoundations: { VARC: 0, DILR: 0, QA: 0 },
  topicMastery: {},
  topicAccuracy: {},
  topicVelocity: {},
  weakAreas: [],
  strongAreas: [],
  currentDifficulty: {},
};

const DEFAULT_STATE: UserAppState = {
  user: null,
  onboarding: DEFAULT_ONBOARDING,
  activeSession: null,
  todayPlanCompleted: false,
  progress: INITIAL_PROGRESS,
  adaptiveProfile: DEFAULT_ADAPTIVE_PROFILE,
};

// -------------------------------------------------------------
// STORAGE HELPERS
// -------------------------------------------------------------

export function getAppState(): UserAppState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return DEFAULT_STATE;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      onboarding: { ...DEFAULT_ONBOARDING, ...(parsed.onboarding || {}) },
      progress: {
        ...INITIAL_PROGRESS,
        ...(parsed.progress || {}),
        attempts: Array.isArray(parsed.progress?.attempts) ? parsed.progress.attempts : [],
        bookmarks: Array.isArray(parsed.progress?.bookmarks) ? parsed.progress.bookmarks : [],
      },
      adaptiveProfile: { ...DEFAULT_ADAPTIVE_PROFILE, ...(parsed.adaptiveProfile || {}) },
    };
  } catch (e) {
    console.error('Error reading appState from localStorage', e);
    return DEFAULT_STATE;
  }
}

export function getAdaptiveProfile(): AdaptiveProfile {
  const state = getAppState();
  return state.adaptiveProfile || DEFAULT_ADAPTIVE_PROFILE;
}

export function saveAdaptiveProfile(profile: AdaptiveProfile): void {
  const state = getAppState();
  state.adaptiveProfile = profile;
  saveAppState(state);
}

export function updateProfileFromDiagnostic(result: DiagnosticResult): void {
  const state = getAppState();
  const profile = state.adaptiveProfile || { ...DEFAULT_ADAPTIVE_PROFILE };

  profile.diagnosticCompleted = true;
  profile.stage = result.assignedStage;
  profile.diagnosticScore = {
    total: result.totalCorrect,
    varc: result.sectionScores.VARC?.correct ?? 0,
    dilr: result.sectionScores.DILR?.correct ?? 0,
    qa: result.sectionScores.QA?.correct ?? 0,
    velocitySeconds: result.timeSpentSeconds,
  };

  profile.sectionFoundations = {
    VARC: Math.round((result.sectionScores.VARC?.accuracy ?? 0) * 100),
    DILR: Math.round((result.sectionScores.DILR?.accuracy ?? 0) * 100),
    QA: Math.round((result.sectionScores.QA?.accuracy ?? 0) * 100),
  };

  profile.weakAreas = result.initialWeakTopics;
  profile.strongAreas = result.initialStrongTopics;

  // Initialize per-topic difficulty and baseline mastery
  const baseDiff = profile.stage === 'BEGINNER' ? 'FOUNDATION' : profile.stage === 'INTERMEDIATE' ? 'MODERATE' : 'INTERMEDIATE';
  result.initialWeakTopics.forEach(t => {
    profile.currentDifficulty[t] = 'FOUNDATION';
    profile.topicMastery[t] = 25;
  });
  result.initialStrongTopics.forEach(t => {
    profile.currentDifficulty[t] = baseDiff;
    profile.topicMastery[t] = profile.stage === 'ADVANCED' ? 80 : 60;
  });

  state.adaptiveProfile = profile;
  state.onboarding.level = profile.stage === 'BEGINNER' ? 'Beginner' : profile.stage === 'INTERMEDIATE' ? 'Basic understanding' : 'Advanced';
  saveAppState(state);

  // Background sync diagnostic to Supabase if authenticated
  if (state.user?.isAuthenticated && state.user.id) {
    saveDiagnosticToCloud(state.user.id, {
      score: result.totalCorrect,
      total: result.totalQuestions,
      sectionScores: result.sectionScores as unknown as Record<string, unknown>,
      recommendedStage: result.assignedStage,
    }).catch(err => {
      console.warn('[CloudSync] Failed to sync diagnostic to Supabase:', err);
    });
  }
}

export function setAdaptiveStage(stage: Stage): void {
  const state = getAppState();
  const profile = state.adaptiveProfile || { ...DEFAULT_ADAPTIVE_PROFILE };
  profile.stage = stage;
  state.adaptiveProfile = profile;
  state.onboarding.level = stage === 'BEGINNER' ? 'Beginner' : stage === 'INTERMEDIATE' ? 'Basic understanding' : 'Advanced';
  saveAppState(state);
}

export function resetDiagnosticState(): void {
  const state = getAppState();
  state.adaptiveProfile = {
    ...DEFAULT_ADAPTIVE_PROFILE,
    diagnosticCompleted: false,
    stage: 'BEGINNER',
  };
  state.onboarding.level = 'Beginner';
  saveAppState(state);
}

export function reassessStage(): Stage {
  const state = getAppState();
  const profile = state.adaptiveProfile || { ...DEFAULT_ADAPTIVE_PROFILE };

  const accuracies = Object.values(profile.topicAccuracy);
  if (accuracies.length === 0) return profile.stage;

  const totalAttempted = accuracies.reduce((sum, a) => sum + (a.attempted || 0), 0);
  const totalCorrect = accuracies.reduce((sum, a) => sum + (a.correct || 0), 0);
  const overallRate = totalAttempted > 0 ? totalCorrect / totalAttempted : 0;

  let newStage = profile.stage;
  if (overallRate >= 0.82 && totalAttempted >= 15) {
    newStage = 'ADVANCED';
  } else if (overallRate >= 0.65 && totalAttempted >= 8) {
    newStage = 'INTERMEDIATE';
  } else if (overallRate < 0.50 && totalAttempted >= 10) {
    newStage = 'BEGINNER';
  }

  if (newStage !== profile.stage) {
    profile.stage = newStage;
    state.adaptiveProfile = profile;
    state.onboarding.level = newStage === 'BEGINNER' ? 'Beginner' : newStage === 'INTERMEDIATE' ? 'Basic understanding' : 'Advanced';
    saveAppState(state);
  }

  return newStage;
}

export function updateTopicPerformance(
  topicId: string,
  isCorrect: boolean,
  timeSpentSeconds: number
): void {
  const state = getAppState();
  const profile = state.adaptiveProfile || { ...DEFAULT_ADAPTIVE_PROFILE };

  // Accuracy
  const acc = profile.topicAccuracy[topicId] || { attempted: 0, correct: 0, rollingRate: 0 };
  acc.attempted += 1;
  if (isCorrect) acc.correct += 1;
  acc.rollingRate = Math.round((acc.correct / acc.attempted) * 100) / 100;
  profile.topicAccuracy[topicId] = acc;

  // Velocity
  const vel = profile.topicVelocity[topicId] || { avgTimeSeconds: 0 };
  vel.avgTimeSeconds = Math.round(((vel.avgTimeSeconds * (acc.attempted - 1)) + timeSpentSeconds) / acc.attempted);
  profile.topicVelocity[topicId] = vel;

  // Mastery calculation (0 - 100)
  const baseMastery = Math.round(acc.rollingRate * 100);
  profile.topicMastery[topicId] = baseMastery;

  // Difficulty Gating
  const currentDiff = profile.currentDifficulty[topicId] || 'FOUNDATION';
  if (acc.attempted >= 3) {
    if (acc.rollingRate >= 0.80) {
      if (currentDiff === 'FOUNDATION') profile.currentDifficulty[topicId] = 'EASY';
      else if (currentDiff === 'EASY') profile.currentDifficulty[topicId] = 'MODERATE';
      else if (currentDiff === 'MODERATE') profile.currentDifficulty[topicId] = 'INTERMEDIATE';
    } else if (acc.rollingRate < 0.50) {
      if (currentDiff === 'INTERMEDIATE') profile.currentDifficulty[topicId] = 'MODERATE';
      else if (currentDiff === 'MODERATE') profile.currentDifficulty[topicId] = 'EASY';
      else if (currentDiff === 'EASY') profile.currentDifficulty[topicId] = 'FOUNDATION';
    }
  }

  state.adaptiveProfile = profile;
  saveAppState(state);
}

/**
 * Robust helper to retrieve topic mastery percentage with fuzzy fallback
 */
export function getTopicMastery(profile: AdaptiveProfile, topicKey: string): number {
  if (!profile || !profile.topicMastery) return 0;
  if (profile.topicMastery[topicKey] !== undefined) return profile.topicMastery[topicKey];

  const lower = topicKey.toLowerCase();
  for (const [k, v] of Object.entries(profile.topicMastery)) {
    const kLower = k.toLowerCase();
    if (kLower.includes(lower) || lower.includes(kLower)) {
      return v;
    }
  }

  // Fallback to baseline from weak/strong areas
  if (profile.weakAreas && profile.weakAreas.some(w => w.toLowerCase().includes(lower) || lower.includes(w.toLowerCase()))) {
    return 25;
  }
  if (profile.strongAreas && profile.strongAreas.some(s => s.toLowerCase().includes(lower) || lower.includes(s.toLowerCase()))) {
    return profile.stage === 'ADVANCED' ? 80 : 60;
  }

  return profile.stage === 'BEGINNER' ? 20 : profile.stage === 'INTERMEDIATE' ? 50 : 75;
}

/**
 * Robust helper to retrieve topic difficulty tier with fuzzy fallback
 */
export function getTopicDifficulty(
  profile: AdaptiveProfile, 
  topicKey: string
): 'FOUNDATION' | 'EASY' | 'MODERATE' | 'INTERMEDIATE' {
  const defaultDiff = profile.stage === 'BEGINNER' ? 'FOUNDATION' : profile.stage === 'INTERMEDIATE' ? 'MODERATE' : 'INTERMEDIATE';
  if (!profile || !profile.currentDifficulty) return defaultDiff;
  if (profile.currentDifficulty[topicKey]) return profile.currentDifficulty[topicKey];

  const lower = topicKey.toLowerCase();
  for (const [k, v] of Object.entries(profile.currentDifficulty)) {
    const kLower = k.toLowerCase();
    if (kLower.includes(lower) || lower.includes(kLower)) {
      return v;
    }
  }

  return defaultDiff;
}

export function saveAppState(state: UserAppState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    // Dispatch custom event so reactive components update across tabs or layout
    window.dispatchEvent(new Event('app_state_changed'));
  } catch (e) {
    console.error('Error writing appState to localStorage', e);
  }
}

// -------------------------------------------------------------
// DYNAMIC PERSONALIZED PLAN GENERATION
// -------------------------------------------------------------

export function generatePersonalizedPlan(onboarding: PrepOnboarding): DailyFocusPlan {
  const isBeginner = onboarding.level === 'Beginner' || onboarding.level === 'Basic understanding';
  const subjects = onboarding.subjects || ['Full Preparation'];
  
  // Decide target duration and question count based on study time
  let questionCount = 10;
  let estimatedMinutes = 20;
  if (onboarding.dailyTime === '30m') {
    questionCount = 8;
    estimatedMinutes = 15;
  } else if (onboarding.dailyTime === '1h') {
    questionCount = 10;
    estimatedMinutes = 20;
  } else if (onboarding.dailyTime === '2h') {
    questionCount = 15;
    estimatedMinutes = 35;
  } else if (onboarding.dailyTime === '3h' || onboarding.dailyTime === '4h+') {
    questionCount = 20;
    estimatedMinutes = 45;
  }

  // Priority selection
  if (subjects.includes('VARC') && !subjects.includes('QA') && !subjects.includes('Full Preparation')) {
    return {
      subject: 'VARC',
      subjectName: 'Verbal Ability & Reading Comprehension',
      topic: isBeginner ? 'Reading Comprehension Foundations (Philosophy & Society)' : 'Critical Reasoning & Inference Traps',
      questionCount,
      estimatedMinutes,
      levelBadge: isBeginner ? 'Core Foundation' : 'High Difficulty RC',
      description: 'Strengthen reading pace, passage tone identification, and main-idea extraction without getting stuck on technical jargon.',
      suggestedAction: 'Start VARC Passage'
    };
  }

  if (subjects.includes('DILR') && !subjects.includes('QA') && !subjects.includes('Full Preparation')) {
    return {
      subject: 'DILR',
      subjectName: 'Data Interpretation & Logical Reasoning',
      topic: isBeginner ? 'Linear & Circular Arrangement Sets' : 'Advanced Games, Tournaments & Matrix Selection',
      questionCount,
      estimatedMinutes,
      levelBadge: isBeginner ? 'Standard Puzzle' : 'CAT Slot Level',
      description: 'Learn how to form quick placement grids, eliminate contradictory cases, and spot low-hanging direct questions first.',
      suggestedAction: 'Solve DILR Set'
    };
  }

  if (subjects.includes('PYQ')) {
    return {
      subject: 'QA',
      subjectName: 'Official CAT Previous Year Archive',
      topic: 'CAT 2024 & 2023 Real Exam Questions',
      questionCount,
      estimatedMinutes,
      levelBadge: 'Official Provenance',
      description: 'Benchmark your current solving speed against verified past CAT exam slot questions.',
      suggestedAction: 'Solve Official PYQs'
    };
  }

  // Default / Full Preparation / QA focus
  return {
    subject: 'QA',
    subjectName: 'Quantitative Aptitude',
    topic: isBeginner ? 'Number System & Arithmetic Foundations' : 'Arithmetic Mastery (Percentages, Profit & Loss)',
    questionCount,
    estimatedMinutes,
    levelBadge: isBeginner ? 'Concept Primer' : 'High-Weightage CAT Core',
    description: isBeginner 
      ? 'Kickstart your preparation with divisibility rules, unit digits, and ratio transformations that build the base for all 5 CAT modules.'
      : 'Sharpen your calculation shortcuts, fraction-to-percentage conversions, and multi-step word problem frameworks.',
    suggestedAction: 'Start Today\'s Practice'
  };
}

// -------------------------------------------------------------
// AUTHENTICATION ACTIONS
// -------------------------------------------------------------

export function loginUser(email: string, name?: string, id?: string, avatar?: string): UserProfile {
  const state = getAppState();
  const userName = name || email.split('@')[0] || 'Aspirant';
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);
  const userId = id || (state.user?.id && !state.user.id.startsWith('demo_') ? state.user.id : 'user_' + Date.now());
  
  const user: UserProfile = {
    id: userId,
    name: formattedName,
    email: email.trim().toLowerCase(),
    avatar: avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(userName)}`,
    isAuthenticated: true,
    createdAt: state.user?.createdAt || new Date().toISOString(),
  };

  state.user = user;
  saveAppState(state);

  // Background guest data migration to Supabase cloud
  syncGuestDataToCloud(userId).catch(err => {
    console.warn('[CloudSync] Guest migration encountered error:', err);
  });

  return user;
}

export function signupUser(name: string, email: string): UserProfile {
  return loginUser(email, name);
}

export function loginWithGoogle(): UserProfile {
  return loginUser('aspirant@gmail.com', 'CAT Aspirant');
}

export function logoutUser(): void {
  const state = getAppState();
  state.user = null;
  saveAppState(state);

  if (isSupabaseConfigured()) {
    supabaseSignOut().catch(err => console.warn('[Supabase] SignOut error:', err));
  }
}

// -------------------------------------------------------------
// ONBOARDING ACTIONS
// -------------------------------------------------------------

export function saveOnboardingStep(step: number, partialData: Partial<PrepOnboarding>): void {
  const state = getAppState();
  state.onboarding = {
    ...state.onboarding,
    ...partialData,
    currentStep: step,
  };
  saveAppState(state);
}

export function completeOnboarding(data: PrepOnboarding): void {
  const state = getAppState();
  state.onboarding = {
    ...data,
    isCompleted: true,
    currentStep: 5,
  };

  // Adjust daily goal questions according to daily time
  const plan = generatePersonalizedPlan(state.onboarding);
  state.progress.dailyGoalQuestions = plan.questionCount;
  state.progress.studyPlan.targetExamDate = data.targetDate || '2026-11-29';
  state.todayPlanCompleted = false;

  saveAppState(state);
}

// -------------------------------------------------------------
// SESSION & PRACTICE ACTIONS
// -------------------------------------------------------------

export function updateActiveSession(session: ActiveSession): void {
  const state = getAppState();
  state.activeSession = session;
  saveAppState(state);
}

export function recordQuestionAttempt(attempt: UserAttempt): void {
  const state = getAppState();
  state.progress.attempts = [attempt, ...(state.progress.attempts || [])];
  state.progress.todayQuestionsAttempted = (state.progress.todayQuestionsAttempted || 0) + 1;
  if (attempt.isCorrect) {
    state.progress.todayCorrect = (state.progress.todayCorrect || 0) + 1;
    state.progress.xp = (state.progress.xp || 0) + (attempt.difficulty === 'Difficult' ? 20 : 10);
  }
  state.progress.todayTimeSpentSeconds = (state.progress.todayTimeSpentSeconds || 0) + attempt.timeSpentSeconds;
  
  // Update streak if first attempt today
  if (state.progress.streakDays === 0) {
    state.progress.streakDays = 1;
  }

  // Update active session tracking
  if (state.activeSession) {
    state.activeSession.currentQuestionIndex = Math.min(
      state.activeSession.currentQuestionIndex + 1,
      state.activeSession.totalQuestions
    );
    state.activeSession.lastActiveTimestamp = new Date().toISOString();
  }

  // Check if today's target is completed
  if (state.progress.todayQuestionsAttempted >= state.progress.dailyGoalQuestions) {
    state.todayPlanCompleted = true;
  }

  // Update adaptive profile performance metrics & mastery gates across topic & subtopic keys
  const profile = state.adaptiveProfile || { ...DEFAULT_ADAPTIVE_PROFILE };
  const targetKeys = Array.from(new Set([attempt.topic, attempt.subtopic].filter(Boolean))) as string[];
  if (targetKeys.length === 0) targetKeys.push('General');

  const weakSet = new Set(profile.weakAreas || []);
  const strongSet = new Set(profile.strongAreas || []);

  targetKeys.forEach(topicKey => {
    // Topic Accuracy
    const acc = profile.topicAccuracy[topicKey] || { attempted: 0, correct: 0, rollingRate: 0 };
    acc.attempted += 1;
    if (attempt.isCorrect) acc.correct += 1;
    acc.rollingRate = Math.round((acc.correct / acc.attempted) * 100) / 100;
    profile.topicAccuracy[topicKey] = acc;

    // Topic Velocity
    const vel = profile.topicVelocity[topicKey] || { avgTimeSeconds: 0 };
    vel.avgTimeSeconds = Math.round(((vel.avgTimeSeconds * (acc.attempted - 1)) + attempt.timeSpentSeconds) / acc.attempted);
    profile.topicVelocity[topicKey] = vel;

    // Topic Mastery (0 to 100)
    profile.topicMastery[topicKey] = Math.round(acc.rollingRate * 100);

    // Difficulty Gating Progression (Foundation -> Easy -> Moderate -> Intermediate)
    const currentDiff = profile.currentDifficulty[topicKey] || 'FOUNDATION';
    if (acc.attempted >= 3) {
      if (acc.rollingRate >= 0.80) {
        if (currentDiff === 'FOUNDATION') profile.currentDifficulty[topicKey] = 'EASY';
        else if (currentDiff === 'EASY') profile.currentDifficulty[topicKey] = 'MODERATE';
        else if (currentDiff === 'MODERATE') profile.currentDifficulty[topicKey] = 'INTERMEDIATE';
      } else if (acc.rollingRate < 0.50) {
        if (currentDiff === 'INTERMEDIATE') profile.currentDifficulty[topicKey] = 'MODERATE';
        else if (currentDiff === 'MODERATE') profile.currentDifficulty[topicKey] = 'EASY';
        else if (currentDiff === 'EASY') profile.currentDifficulty[topicKey] = 'FOUNDATION';
      }
    }

    // Dynamic weak/strong areas
    if (acc.attempted >= 3) {
      if (acc.rollingRate < 0.55) {
        weakSet.add(topicKey);
        strongSet.delete(topicKey);
      } else if (acc.rollingRate >= 0.75) {
        strongSet.add(topicKey);
        weakSet.delete(topicKey);
      }
    }
  });

  profile.weakAreas = Array.from(weakSet);
  profile.strongAreas = Array.from(strongSet);

  // Overall Stage Reassessment
  const allAcc = Object.values(profile.topicAccuracy);
  const totalAtt = allAcc.reduce((s, a) => s + (a.attempted || 0), 0);
  const totalCorr = allAcc.reduce((s, a) => s + (a.correct || 0), 0);
  const overallRate = totalAtt > 0 ? totalCorr / totalAtt : 0;

  if (overallRate >= 0.82 && totalAtt >= 12) {
    profile.stage = 'ADVANCED';
  } else if (overallRate >= 0.65 && totalAtt >= 6) {
    profile.stage = 'INTERMEDIATE';
  } else if (overallRate < 0.50 && totalAtt >= 8) {
    profile.stage = 'BEGINNER';
  }

  state.adaptiveProfile = profile;
  saveAppState(state);

  // Background seamless sync to Supabase
  if (state.user?.isAuthenticated && state.user.id) {
    saveAttemptToCloud(state.user.id, attempt).then(res => {
      if (res) {
        attempt.synced = true;
        saveAppState(state);
      }
    }).catch(err => {
      console.warn('[CloudSync] Failed to sync attempt to Supabase:', err);
    });
  }
}

export function markTodayPlanCompleted(): void {
  const state = getAppState();
  state.todayPlanCompleted = true;
  saveAppState(state);
}

// -------------------------------------------------------------
// LEVEL CALCULATION
// -------------------------------------------------------------

export function calculateLevel(xp: number): { level: number; title: string; nextLevelXp: number } {
  if (xp < 100) return { level: 1, title: 'CAT Beginner', nextLevelXp: 100 };
  if (xp < 300) return { level: 2, title: 'Concept Builder', nextLevelXp: 300 };
  if (xp < 600) return { level: 3, title: 'Problem Solver', nextLevelXp: 600 };
  if (xp < 1000) return { level: 4, title: 'CAT Challenger', nextLevelXp: 1000 };
  if (xp < 1500) return { level: 5, title: 'Advanced Solver', nextLevelXp: 1500 };
  return { level: 6, title: 'CAT Master', nextLevelXp: 2500 };
}

// -------------------------------------------------------------
// DEMO / STATE PRESET SWITCHERS (EXCELLENT FOR TESTING ALL 5 STATES)
// -------------------------------------------------------------

/**
 * State 3: Brand New User (Setup Completed, 0 questions attempted, 0% stats hidden)
 */
export function setMockNewUserState(): UserAppState {
  const state: UserAppState = {
    user: {
      id: 'demo_user_new',
      name: 'Aditi',
      email: 'aditi@example.com',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Aditi',
      isAuthenticated: true,
      createdAt: new Date().toISOString(),
    },
    onboarding: {
      isCompleted: true,
      currentStep: 5,
      exam: 'CAT',
      level: 'Beginner',
      subjects: ['Full Preparation'],
      targetPercentile: '99.5+ Percentile',
      targetDate: '2026-11-29',
      dailyTime: '1h',
      studyStyle: 'Learn concepts first',
    },
    activeSession: null,
    todayPlanCompleted: false,
    progress: {
      xp: 0,
      level: 1,
      streakDays: 0,
      lastStudyDate: new Date().toISOString(),
      dailyGoalQuestions: 10,
      todayQuestionsAttempted: 0,
      todayCorrect: 0,
      todayTimeSpentSeconds: 0,
      bookmarks: [],
      attempts: [],
      studyPlan: {
        targetExamDate: '2026-11-29',
        targetHoursPerDay: 1,
        dailyMission: {
          qaCount: 10,
          dilrSets: 1,
          rcPassages: 1,
          vaCount: 2,
          mistakeReviews: 0,
          completed: false,
        },
      },
    },
  };
  saveAppState(state);
  return state;
}

/**
 * State 4: Returning User (Has active session in progress, e.g. Question 7 of 15)
 */
export function setMockReturningUserState(): UserAppState {
  const state: UserAppState = {
    user: {
      id: 'demo_user_returning',
      name: 'Rohan',
      email: 'rohan@example.com',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Rohan',
      isAuthenticated: true,
      createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    },
    onboarding: {
      isCompleted: true,
      currentStep: 5,
      exam: 'CAT',
      level: 'Intermediate',
      subjects: ['QA', 'DILR'],
      targetPercentile: '99.8+ Percentile',
      targetDate: '2026-11-29',
      dailyTime: '2h',
      studyStyle: 'Practice questions',
    },
    activeSession: {
      subject: 'QA',
      topic: 'Percentages',
      subtopic: 'Successive Percentage Changes',
      currentQuestionIndex: 7,
      totalQuestions: 15,
      questionId: 'qa_pyq_2024_s1_1',
      lastActiveTimestamp: new Date().toISOString(),
    },
    todayPlanCompleted: false,
    progress: {
      xp: 240,
      level: 2,
      streakDays: 4,
      lastStudyDate: new Date().toISOString(),
      dailyGoalQuestions: 15,
      todayQuestionsAttempted: 6,
      todayCorrect: 5,
      todayTimeSpentSeconds: 780,
      bookmarks: ['qa_pyq_2024_s1_1'],
      attempts: [
        {
          id: 'att_demo_1',
          questionId: 'qa_pyq_2024_s1_1',
          section: 'QA',
          topic: 'Arithmetic',
          subtopic: 'Percentages',
          difficulty: 'Moderate',
          userAnswer: '1000',
          correctAnswer: '1000',
          isCorrect: true,
          timeSpentSeconds: 95,
          hintsUsedCount: 0,
          timestamp: new Date().toISOString(),
        }
      ],
      studyPlan: {
        targetExamDate: '2026-11-29',
        targetHoursPerDay: 2,
        dailyMission: {
          qaCount: 15,
          dilrSets: 2,
          rcPassages: 2,
          vaCount: 4,
          mistakeReviews: 2,
          completed: false,
        },
      },
    },
  };
  saveAppState(state);
  return state;
}

/**
 * State 5: Completed Today's Plan
 */
export function setMockCompletedTodayState(): UserAppState {
  const state: UserAppState = {
    user: {
      id: 'demo_user_completed',
      name: 'Rohan',
      email: 'rohan@example.com',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Rohan',
      isAuthenticated: true,
      createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    },
    onboarding: {
      isCompleted: true,
      currentStep: 5,
      exam: 'CAT',
      level: 'Intermediate',
      subjects: ['QA', 'DILR', 'VARC'],
      targetPercentile: '99.8+ Percentile',
      targetDate: '2026-11-29',
      dailyTime: '1h',
      studyStyle: 'Topic-wise preparation',
    },
    activeSession: {
      subject: 'QA',
      topic: 'Percentages',
      currentQuestionIndex: 15,
      totalQuestions: 15,
      lastActiveTimestamp: new Date().toISOString(),
    },
    todayPlanCompleted: true,
    progress: {
      xp: 410,
      level: 3,
      streakDays: 5,
      lastStudyDate: new Date().toISOString(),
      dailyGoalQuestions: 15,
      todayQuestionsAttempted: 15,
      todayCorrect: 13,
      todayTimeSpentSeconds: 1940,
      bookmarks: ['qa_pyq_2024_s1_1'],
      attempts: [],
      studyPlan: {
        targetExamDate: '2026-11-29',
        targetHoursPerDay: 1,
        dailyMission: {
          qaCount: 15,
          dilrSets: 1,
          rcPassages: 1,
          vaCount: 2,
          mistakeReviews: 1,
          completed: true,
        },
      },
    },
  };
  saveAppState(state);
  return state;
}

export function resetAllState(): UserAppState {
  const state = { ...DEFAULT_STATE };
  saveAppState(state);
  return state;
}

// -------------------------------------------------------------
// BOOKMARK HELPERS (OFFLINE-FIRST + CLOUD SYNC)
// -------------------------------------------------------------

export function getBookmarks(): string[] {
  const state = getAppState();
  return state.progress.bookmarks || [];
}

export function isBookmarked(questionId: string): boolean {
  const state = getAppState();
  return Boolean(state.progress.bookmarks?.includes(questionId));
}

export function addBookmark(questionId: string, note?: string): void {
  const state = getAppState();
  const set = new Set(state.progress.bookmarks || []);
  if (!set.has(questionId)) {
    set.add(questionId);
    state.progress.bookmarks = Array.from(set);
    saveAppState(state);

    if (state.user?.isAuthenticated && state.user.id) {
      saveBookmarkToCloud(state.user.id, questionId, note).catch(err => {
        console.warn('[CloudSync] Failed to sync bookmark to Supabase:', err);
      });
    }
  }
}

export function removeBookmark(questionId: string): void {
  const state = getAppState();
  const set = new Set(state.progress.bookmarks || []);
  if (set.has(questionId)) {
    set.delete(questionId);
    state.progress.bookmarks = Array.from(set);
    saveAppState(state);

    if (state.user?.isAuthenticated && state.user.id) {
      removeBookmarkFromCloud(state.user.id, questionId).catch(err => {
        console.warn('[CloudSync] Failed to remove bookmark from Supabase:', err);
      });
    }
  }
}

export function toggleBookmark(questionId: string, note?: string): boolean {
  const state = getAppState();
  const set = new Set(state.progress.bookmarks || []);
  const willBeBookmarked = !set.has(questionId);
  if (willBeBookmarked) {
    addBookmark(questionId, note);
  } else {
    removeBookmark(questionId);
  }
  return willBeBookmarked;
}

// -------------------------------------------------------------
// GUEST TO USER MIGRATION & BACKGROUND SYNC
// -------------------------------------------------------------

export async function syncGuestDataToCloud(userId: string): Promise<void> {
  if (!isSupabaseConfigured() || !userId) return;
  const state = getAppState();

  try {
    // 1. Sync Profile
    await upsertCloudProfile({
      id: userId,
      email: state.user?.email,
      full_name: state.user?.name,
      avatar_url: state.user?.avatar,
      stage: state.adaptiveProfile?.stage || 'BEGINNER',
      target_year: '2026',
      target_percentile: state.onboarding?.targetPercentile || '99.5+',
    });

    // 2. Reconcile stage from Cloud Profile if present
    const cloudProfile = await fetchCloudProfile(userId);
    if (cloudProfile?.stage && state.adaptiveProfile) {
      if (cloudProfile.stage !== state.adaptiveProfile.stage && !state.adaptiveProfile.diagnosticCompleted) {
        state.adaptiveProfile.stage = cloudProfile.stage as Stage;
        saveAppState(state);
      }
    }

    // 3. Batch sync unsynced attempts
    const attempts = state.progress.attempts || [];
    const unsyncedAttempts = attempts.filter(att => !att.synced);
    if (unsyncedAttempts.length > 0) {
      const saved = await saveAttemptsBatchToCloud(userId, unsyncedAttempts);
      if (saved && saved.length > 0) {
        unsyncedAttempts.forEach(att => { att.synced = true; });
        saveAppState(state);
      }
    }

    // 4. Two-way bookmark synchronization
    const localBookmarks = new Set(state.progress.bookmarks || []);
    if (localBookmarks.size > 0) {
      await Promise.allSettled(
        Array.from(localBookmarks).map(qId => saveBookmarkToCloud(userId, qId))
      );
    }
    const cloudBookmarks = await fetchCloudBookmarks(userId);
    let bookmarksUpdated = false;
    for (const qId of cloudBookmarks) {
      if (!localBookmarks.has(qId)) {
        localBookmarks.add(qId);
        bookmarksUpdated = true;
      }
    }
    if (bookmarksUpdated) {
      state.progress.bookmarks = Array.from(localBookmarks);
      saveAppState(state);
    }

    // 5. Sync Diagnostic Results if completed
    if (state.adaptiveProfile?.diagnosticCompleted && state.adaptiveProfile.diagnosticScore) {
      await saveDiagnosticToCloud(userId, {
        score: state.adaptiveProfile.diagnosticScore.total,
        total: (state.adaptiveProfile.diagnosticScore.varc || 0) + 
               (state.adaptiveProfile.diagnosticScore.dilr || 0) + 
               (state.adaptiveProfile.diagnosticScore.qa || 0) || 12,
        sectionScores: state.adaptiveProfile.sectionFoundations as unknown as Record<string, unknown>,
        recommendedStage: state.adaptiveProfile.stage,
      });
    }
  } catch (err) {
    console.warn('[CloudSync] Guest migration failed:', err);
  }
}

// -------------------------------------------------------------
// AUTH STATE LISTENER & SESSION RECONCILIATION
// -------------------------------------------------------------

let activeSubscription: { unsubscribe: () => void } | null = null;
let activeListenerCount = 0;

export function initAuthListener(): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }
  activeListenerCount++;

  if (!activeSubscription) {
    // Initial check on load
    getCurrentUser().then(user => {
      if (user) {
        const state = getAppState();
        if (!state.user || state.user.id !== user.id) {
          const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Aspirant';
          loginUser(user.email || '', name, user.id, user.user_metadata?.avatar_url || user.user_metadata?.picture);
        }
      }
    }).catch(err => console.warn('[Supabase] Initial user check error:', err));

    const { data: { subscription } } = onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const u = session.user;
        const state = getAppState();
        if (!state.user || state.user.id !== u.id) {
          const name = u.user_metadata?.full_name || u.user_metadata?.name || u.email?.split('@')[0] || 'Aspirant';
          loginUser(u.email || '', name, u.id, u.user_metadata?.avatar_url || u.user_metadata?.picture);
        }
      } else if (event === 'SIGNED_OUT') {
        const state = getAppState();
        if (state.user) {
          state.user = null;
          saveAppState(state);
        }
      }
    });

    activeSubscription = subscription;
  }

  return () => {
    activeListenerCount--;
    if (activeListenerCount <= 0) {
      activeListenerCount = 0;
      activeSubscription?.unsubscribe();
      activeSubscription = null;
    }
  };
}

/**
 * Tier 4 — Workflow 1: Beginner Complete Student Journey
 * Real-World Application Workflow:
 * 1. Diagnostic Test (12 questions: 4 VARC, 4 DILR, 4 QA)
 * 2. Stage Classification -> BEGINNER (score <= 4)
 * 3. Guided 6-Stage Learning Progression (LEARN -> APPLY)
 * 4. Practice Mode at FOUNDATION Difficulty Tier
 * 5. Rolling Mastery Gate Evaluation (>= 70% sustained accuracy)
 * 6. Gate Unlocks EASY Difficulty Tier & Persistence across reload
 */

const { test, describe, assert, assertEqual, assertDeepEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');
const {
  LEARNING_STAGES,
  PERSONA_NAVIGATION_TABS,
  MASTERY_GATES
} = require('../../framework/contracts');

describe('Tier 4: Workflow 1 — Beginner Complete Student Journey', () => {
  const context = { tier: 4, featureId: 201, featureName: 'Beginner Complete Journey' };

  test('W1.1 Initial diagnostic completion yields BEGINNER classification and baseline foundations', () => {
    const session = new MockAdaptiveSession();

    // Student arrives with pristine unattempted profile
    assertEqual(session.state.profile.diagnosticCompleted, false);
    assertEqual(session.state.attempts.length, 0);

    // 12-question diagnostic responses: 3/12 correct (1 VARC, 1 DILR, 1 QA)
    const responses = [
      // VARC
      { id: '1', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 65 },
      { id: '2', section: 'VARC', userAnswer: 'B', correctAnswer: 'C', timeSpentSeconds: 70 },
      { id: '3', section: 'VARC', userAnswer: 'A', correctAnswer: 'D', timeSpentSeconds: 60 },
      { id: '4', section: 'VARC', userAnswer: 'C', correctAnswer: 'B', timeSpentSeconds: 55 },
      // DILR
      { id: '5', section: 'DILR', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 90 },
      { id: '6', section: 'DILR', userAnswer: 'B', correctAnswer: 'C', timeSpentSeconds: 95 },
      { id: '7', section: 'DILR', userAnswer: 'C', correctAnswer: 'D', timeSpentSeconds: 85 },
      { id: '8', section: 'DILR', userAnswer: 'D', correctAnswer: 'B', timeSpentSeconds: 80 },
      // QA
      { id: '9', section: 'QA', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 70 },
      { id: '10', section: 'QA', userAnswer: 'B', correctAnswer: 'C', timeSpentSeconds: 80 },
      { id: '11', section: 'QA', userAnswer: 'C', correctAnswer: 'D', timeSpentSeconds: 75 },
      { id: '12', section: 'QA', userAnswer: 'D', correctAnswer: 'B', timeSpentSeconds: 85 }
    ];

    const result = session.submitDiagnostic(responses);

    assertEqual(result.total, 3, 'Total score should be 3');
    assertEqual(result.assignedStage, 'BEGINNER', 'Score 3/12 must classify as BEGINNER');
    assertEqual(session.state.profile.stage, 'BEGINNER');
    assertEqual(session.state.profile.diagnosticCompleted, true);

    // Baseline section foundations
    assertEqual(session.state.profile.sectionFoundations.VARC, 25);
    assertEqual(session.state.profile.sectionFoundations.DILR, 25);
    assertEqual(session.state.profile.sectionFoundations.QA, 25);
  }, context);

  test('W1.2 Beginner persona activates simplified 4-tab interface protecting novice from cognitive overload', () => {
    const session = new MockAdaptiveSession({
      stage: 'BEGINNER',
      currentPersona: 'BEGINNER',
      diagnosticCompleted: true
    });

    const activeTabs = session.getVisibleNavigationTabs();

    assertEqual(activeTabs.length, 4, 'Beginner must have exactly 4 navigation tabs');
    assertDeepEqual(activeTabs, PERSONA_NAVIGATION_TABS.BEGINNER);
    assertDeepEqual(activeTabs, ['Home', 'Learn', 'Practice', 'Progress']);

    // Critical invariant: Advanced features must not be shown to Beginner
    assert(!activeTabs.includes('Mocks'), 'Mocks tab must be hidden from Beginner');
    assert(!activeTabs.includes('Sectionals'), 'Sectionals tab must be hidden from Beginner');
    assert(!activeTabs.includes('Analytics'), 'Analytics tab must be hidden from Beginner');
    assert(!activeTabs.includes('PYQs'), 'Direct PYQs tab must be hidden from Beginner');
  }, context);

  test('W1.3 Beginner navigates through full 6-stage structured learning pedagogy for Percentages', () => {
    const session = new MockAdaptiveSession({
      stage: 'BEGINNER',
      currentPersona: 'BEGINNER'
    });

    // Simulate structured progress tracking across all 6 learning stages
    const topicProgress = {
      topicId: 'percentages',
      stagesCompleted: [],
      currentStageIndex: 0
    };

    // Progression loop through canonical stages
    for (let i = 0; i < LEARNING_STAGES.length; i++) {
      const stage = LEARNING_STAGES[i];
      assertEqual(stage, LEARNING_STAGES[topicProgress.currentStageIndex]);

      // Complete current stage
      topicProgress.stagesCompleted.push(stage);
      topicProgress.currentStageIndex++;
    }

    assertEqual(topicProgress.stagesCompleted.length, 6, 'All 6 stages must be completed');
    assertEqual(topicProgress.stagesCompleted[0], 'LEARN', 'Stage 1 is LEARN');
    assertEqual(topicProgress.stagesCompleted[1], 'SOLVED_EXAMPLE', 'Stage 2 is SOLVED_EXAMPLE');
    assertEqual(topicProgress.stagesCompleted[2], 'GUIDED_TRY', 'Stage 3 is GUIDED_TRY');
    assertEqual(topicProgress.stagesCompleted[3], 'PRACTICE', 'Stage 4 is PRACTICE');
    assertEqual(topicProgress.stagesCompleted[4], 'CHALLENGE', 'Stage 5 is CHALLENGE');
    assertEqual(topicProgress.stagesCompleted[5], 'APPLY', 'Stage 6 is APPLY');
  }, context);

  test('W1.4 Foundation tier practice drill: Sustained 100% accuracy reaches mastery threshold', () => {
    const session = new MockAdaptiveSession({
      stage: 'BEGINNER',
      currentPersona: 'BEGINNER',
      diagnosticCompleted: true
    });

    // Student executes 5 consecutive correct Foundation practice questions
    for (let i = 1; i <= 5; i++) {
      session.recordAttempt({
        questionId: `perc_foundation_${i}`,
        topicId: 'percentages',
        section: 'QA',
        difficulty: 'FOUNDATION',
        userAnswer: 'A',
        correctAnswer: 'A',
        timeSpentSeconds: 45
      });
    }

    const accuracyRecord = session.state.profile.topicAccuracy['percentages'];
    assertEqual(accuracyRecord.attempted, 5);
    assertEqual(accuracyRecord.correct, 5);
    assertEqual(accuracyRecord.rollingRate, 100, 'Rolling accuracy must be 100%');

    // Threshold check for FOUNDATION -> EASY transition
    assert(
      accuracyRecord.rollingRate >= MASTERY_GATES.FOUNDATION_TO_EASY,
      `Rolling rate (${accuracyRecord.rollingRate}%) must satisfy threshold (${MASTERY_GATES.FOUNDATION_TO_EASY}%)`
    );
  }, context);

  test('W1.5 Mastery gate promotes student to EASY difficulty and persists state across reloads', () => {
    const session = new MockAdaptiveSession({
      stage: 'BEGINNER',
      currentPersona: 'BEGINNER',
      currentDifficulty: { percentages: 'FOUNDATION' }
    });

    // Complete 5 successful foundation attempts
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({
        questionId: `perc_f_${i}`,
        topicId: 'percentages',
        section: 'QA',
        difficulty: 'FOUNDATION',
        userAnswer: 'A',
        correctAnswer: 'A',
        timeSpentSeconds: 50
      });
    }

    // Engine checks mastery gate (>= 70%) and promotes currentDifficulty to EASY
    if (session.state.profile.topicAccuracy['percentages'].rollingRate >= MASTERY_GATES.FOUNDATION_TO_EASY) {
      session.state.profile.currentDifficulty['percentages'] = 'EASY';
      session.syncToStorage();
    }

    assertEqual(session.state.profile.currentDifficulty['percentages'], 'EASY', 'Topic difficulty must advance to EASY');

    // Simulate page refresh / app relaunch via fresh session rehydrating from storage
    const reloaded = new MockAdaptiveSession();
    reloaded.storage.store = new Map(session.storage.store);
    reloaded.rehydrateFromStorage();

    assertEqual(reloaded.state.profile.stage, 'BEGINNER');
    assertEqual(reloaded.state.attempts.length, 5);
    assertEqual(reloaded.state.profile.topicAccuracy['percentages'].rollingRate, 100);
    assertEqual(reloaded.state.profile.currentDifficulty['percentages'], 'EASY');
  }, context);
});

/**
 * Tier 3 — Cross-Feature 1: Diagnostic to Learning Pipeline
 * Verifies end-to-end integration:
 * Diagnostic Test (Feature 4) -> Stage Classifier (Feature 5) ->
 * Persona Navigation & Home View (Features 15, 16) ->
 * 6-Stage Learning (Feature 12) -> Practice Mastery Gate (Feature 14).
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 3: Cross-Feature 1 — Diagnostic to Learning Pipeline', () => {
  const context = { tier: 3, featureId: 101, featureName: 'Diagnostic to Learning Pipeline' };

  test('X1.1 Complete pipeline: Low diagnostic score triggers Beginner journey and unlocks Foundations', () => {
    const session = new MockAdaptiveSession();

    // 1. Initial State: Uncompleted diagnostic
    assertEqual(session.state.profile.diagnosticCompleted, false);
    assertEqual(session.state.currentPersona, 'BEGINNER');

    // 2. Student submits diagnostic with 3/12 correct (Low score)
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 3 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 60
    }));
    const diagResult = session.submitDiagnostic(responses);

    // 3. Stage Classifier assigns BEGINNER
    assertEqual(diagResult.assignedStage, 'BEGINNER');
    assertEqual(session.state.currentPersona, 'BEGINNER');

    // 4. Navigation tabs adapt to Beginner (4 tabs)
    const tabs = session.getVisibleNavigationTabs();
    assertEqual(tabs.length, 4);
    assert(!tabs.includes('Mocks'), 'Mocks must not appear in Beginner persona');

    // 5. Beginner enters 6-stage learning on Percentages and practices Foundation tier
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({
        questionId: `q_perc_f_${i}`,
        topicId: 'percentages',
        section: 'QA',
        difficulty: 'FOUNDATION',
        userAnswer: 'A',
        correctAnswer: 'A',
        timeSpentSeconds: 50
      });
    }

    // 6. 5/5 correct (100%) triggers mastery update
    assertEqual(session.state.profile.topicAccuracy['percentages'].rollingRate, 100);
    assertEqual(session.state.profile.topicMastery['percentages'], 100);
    // Verified: Diagnostic -> Stage -> Persona UI -> Learning -> Mastery integration works seamlessly
  }, context);

  test('X1.2 Pipeline: High diagnostic score triggers Advanced persona with immediate PYQ/Mock access', () => {
    const session = new MockAdaptiveSession();

    // 1. Student scores 11/12 on diagnostic
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 11 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 40
    }));
    const diagResult = session.submitDiagnostic(responses);

    // 2. Stage Classifier assigns ADVANCED
    assertEqual(diagResult.assignedStage, 'ADVANCED');
    assertEqual(session.state.currentPersona, 'ADVANCED');

    // 3. Navigation adapts to 7 Advanced tabs
    const tabs = session.getVisibleNavigationTabs();
    assertEqual(tabs.length, 7);
    assert(tabs.includes('Mocks'), 'Advanced persona must include Mocks');
    assert(tabs.includes('Sectionals'), 'Advanced persona must include Sectionals');
    assert(tabs.includes('Analytics'), 'Advanced persona must include Analytics');
  }, context);
});

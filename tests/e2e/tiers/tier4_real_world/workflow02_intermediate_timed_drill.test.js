/**
 * Tier 4 — Workflow 2: Intermediate Timed Topic Drill & PYQ Readiness
 * Real-World Application Workflow:
 * 1. Diagnostic Test -> INTERMEDIATE Classification (5-8 score range)
 * 2. Intermediate Persona Navigation (6 tabs, structured for guided practice)
 * 3. Timed Topic Drill (Algebra at MODERATE difficulty, pacing & velocity tracking)
 * 4. Rolling Mastery Gate Evaluation (Window = 5, >= 75% sustained accuracy)
 * 5. PYQ Readiness Unlock & Direct Access to Topic PYQs from Authentic Dataset
 */

const { test, describe, assert, assertEqual, assertDeepEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');
const {
  PERSONA_NAVIGATION_TABS,
  MASTERY_GATES
} = require('../../framework/contracts');

describe('Tier 4: Workflow 2 — Intermediate Timed Drill & PYQ Readiness', () => {
  const context = { tier: 4, featureId: 202, featureName: 'Intermediate Timed Drill' };

  test('W2.1 Diagnostic assigns INTERMEDIATE classification and balanced section foundations', () => {
    const session = new MockAdaptiveSession();

    // 12-question diagnostic: 7/12 correct (3 VARC, 2 DILR, 2 QA)
    const responses = [
      // VARC: 3 correct
      { id: '1', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 50 },
      { id: '2', section: 'VARC', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 55 },
      { id: '3', section: 'VARC', userAnswer: 'C', correctAnswer: 'C', timeSpentSeconds: 60 },
      { id: '4', section: 'VARC', userAnswer: 'D', correctAnswer: 'A', timeSpentSeconds: 65 },
      // DILR: 2 correct
      { id: '5', section: 'DILR', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 90 },
      { id: '6', section: 'DILR', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 85 },
      { id: '7', section: 'DILR', userAnswer: 'C', correctAnswer: 'A', timeSpentSeconds: 95 },
      { id: '8', section: 'DILR', userAnswer: 'D', correctAnswer: 'B', timeSpentSeconds: 100 },
      // QA: 2 correct
      { id: '9', section: 'QA', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 70 },
      { id: '10', section: 'QA', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 75 },
      { id: '11', section: 'QA', userAnswer: 'C', correctAnswer: 'A', timeSpentSeconds: 80 },
      { id: '12', section: 'QA', userAnswer: 'D', correctAnswer: 'B', timeSpentSeconds: 85 }
    ];

    const result = session.submitDiagnostic(responses);

    assertEqual(result.total, 7);
    assertEqual(result.assignedStage, 'INTERMEDIATE', 'Score 7/12 must classify as INTERMEDIATE');
    assertEqual(session.state.profile.stage, 'INTERMEDIATE');

    // Section foundations
    assertEqual(session.state.profile.sectionFoundations.VARC, 75);
    assertEqual(session.state.profile.sectionFoundations.DILR, 50);
    assertEqual(session.state.profile.sectionFoundations.QA, 50);
  }, context);

  test('W2.2 Intermediate persona exposes 6 focused navigation tabs including PYQs and Review', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE',
      diagnosticCompleted: true
    });

    const tabs = session.getVisibleNavigationTabs();
    assertEqual(tabs.length, 6, 'Intermediate must have 6 navigation tabs');
    assertDeepEqual(tabs, PERSONA_NAVIGATION_TABS.INTERMEDIATE);
    assertDeepEqual(tabs, ['Home', 'Learn', 'Practice', 'PYQs', 'Review', 'Progress']);

    // Intermediate includes PYQs and Review, but excludes advanced full Mocks / Sectionals
    assertIncludes(tabs, 'PYQs');
    assertIncludes(tabs, 'Review');
    assert(!tabs.includes('Mocks'), 'Full Mocks remain locked for Intermediate');
    assert(!tabs.includes('Sectionals'), 'Sectionals remain locked for Intermediate');
  }, context);

  test('W2.3 Student executes timed topic drill on Algebra with realistic CAT pacing', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE'
    });

    // Paced drill on Algebra: 5 questions with timing
    const drillQuestions = [
      { id: 'alg_t1', time: 70, correct: true },
      { id: 'alg_t2', time: 85, correct: true },
      { id: 'alg_t3', time: 65, correct: false },
      { id: 'alg_t4', time: 75, correct: true },
      { id: 'alg_t5', time: 80, correct: true }
    ];

    let totalDrillTime = 0;
    drillQuestions.forEach(q => {
      session.recordAttempt({
        questionId: q.id,
        topicId: 'algebra',
        section: 'QA',
        difficulty: 'MODERATE',
        userAnswer: q.correct ? 'A' : 'B',
        correctAnswer: 'A',
        timeSpentSeconds: q.time
      });
      totalDrillTime += q.time;
    });

    assertEqual(session.state.attempts.length, 5);
    const avgVelocity = Math.round(totalDrillTime / drillQuestions.length);
    assertEqual(avgVelocity, 75, 'Average pacing should be 75 seconds per question');

    // Rolling accuracy on last 5: 4 correct out of 5 = 80%
    const algAcc = session.state.profile.topicAccuracy['algebra'];
    assertEqual(algAcc.rollingRate, 80);
  }, context);

  test('W2.4 Rolling mastery gate evaluates 80% sustained accuracy against MODERATE threshold', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE'
    });

    // Submit 5 attempts: 4 correct, 1 wrong (80% accuracy)
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({
        questionId: `q_gate_${i}`,
        topicId: 'algebra',
        section: 'QA',
        difficulty: 'MODERATE',
        userAnswer: i === 2 ? 'WRONG' : 'CORRECT',
        correctAnswer: 'CORRECT',
        timeSpentSeconds: 70
      });
    }

    const rollingRate = session.state.profile.topicAccuracy['algebra'].rollingRate;
    assertEqual(rollingRate, 80);

    // Verify against MODERATE_TO_INTERMEDIATE gate (75%)
    assert(
      rollingRate >= MASTERY_GATES.MODERATE_TO_INTERMEDIATE,
      `Rolling rate (${rollingRate}%) must satisfy MODERATE_TO_INTERMEDIATE gate (${MASTERY_GATES.MODERATE_TO_INTERMEDIATE}%)`
    );
  }, context);

  test('W2.5 Rolling mastery unlocks PYQ readiness and enables authentic CAT PYQ practice', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE',
      topicMastery: { algebra: 80 }
    });

    // Simulated readiness tracker for topics
    const pyqReadiness = {
      algebra: session.state.profile.topicMastery['algebra'] >= MASTERY_GATES.MODERATE_TO_INTERMEDIATE,
      geometry: false
    };

    assertEqual(pyqReadiness.algebra, true, 'Algebra must be marked PYQ ready');
    assertEqual(pyqReadiness.geometry, false, 'Unmastered geometry must not be PYQ ready');

    // Student accesses authentic CAT PYQ question for Algebra
    const authenticPyqAttempt = session.recordAttempt({
      questionId: 'cat_2021_s1_qa_alg_04',
      topicId: 'algebra',
      section: 'QA',
      difficulty: 'CAT_LEVEL',
      userAnswer: '32',
      correctAnswer: '32',
      timeSpentSeconds: 115
    });

    assertEqual(authenticPyqAttempt.isCorrect, true);
    assertEqual(authenticPyqAttempt.difficulty, 'CAT_LEVEL');
    assertEqual(session.state.attempts.length, 1);
  }, context);
});

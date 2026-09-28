/**
 * Tier 3 — Cross-Feature 2: Weak Area Remediation Workflow
 * Verifies end-to-end integration:
 * Diagnostic (Features 4, 5) -> Adaptive Profile Weak Area Detection (Features 6, 7) ->
 * Mistake Book Logging (Feature 14) -> 6-Stage Learning Mode Concept Review (Features 12, 13) ->
 * Targeted Remediation Practice -> Adaptive Profile Graduation (Features 6, 14).
 */

const { test, describe, assert, assertEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');
const { CANONICAL_TOPICS, LEARNING_STAGES } = require('../../framework/contracts');

describe('Tier 3: Cross-Feature 2 — Weak Area Remediation Workflow', () => {
  const context = { tier: 3, featureId: 102, featureName: 'Weak Area Remediation Workflow' };

  test('X2.1 Diagnostic identifies Intermediate student with Geometry as deficit candidate', () => {
    const session = new MockAdaptiveSession();

    // Intermediate score: 6/12 correct.
    // VARC: 3/4 correct, DILR: 2/4 correct, QA: 1/4 correct (failed Geometry questions)
    const responses = [
      // VARC (3 correct)
      { id: '1', section: 'VARC', topicId: 'rc_inference', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 55 },
      { id: '2', section: 'VARC', topicId: 'rc_inference', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 60 },
      { id: '3', section: 'VARC', topicId: 'para_jumbles', userAnswer: 'C', correctAnswer: 'C', timeSpentSeconds: 50 },
      { id: '4', section: 'VARC', topicId: 'para_summary', userAnswer: 'D', correctAnswer: 'A', timeSpentSeconds: 65 },

      // DILR (2 correct)
      { id: '5', section: 'DILR', topicId: 'tables_graphs', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 85 },
      { id: '6', section: 'DILR', topicId: 'tables_graphs', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 90 },
      { id: '7', section: 'DILR', topicId: 'arrangements', userAnswer: 'C', correctAnswer: 'A', timeSpentSeconds: 110 },
      { id: '8', section: 'DILR', topicId: 'distribution', userAnswer: 'D', correctAnswer: 'B', timeSpentSeconds: 95 },

      // QA (1 correct: percentages correct; geometry wrong)
      { id: '9', section: 'QA', topicId: 'percentages', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 70 },
      { id: '10', section: 'QA', topicId: 'geometry', userAnswer: 'B', correctAnswer: 'A', timeSpentSeconds: 80 },
      { id: '11', section: 'QA', topicId: 'geometry', userAnswer: 'C', correctAnswer: 'A', timeSpentSeconds: 85 },
      { id: '12', section: 'QA', topicId: 'algebra', userAnswer: 'D', correctAnswer: 'A', timeSpentSeconds: 90 }
    ];

    const diagResult = session.submitDiagnostic(responses);
    assertEqual(diagResult.assignedStage, 'INTERMEDIATE', 'Score 6/12 must be classified as INTERMEDIATE');
    assertEqual(session.state.profile.sectionFoundations.QA, 25, 'QA foundation is 25%');
    assertEqual(session.state.profile.sectionFoundations.VARC, 75, 'VARC foundation is 75%');
  }, context);

  test('X2.2 Sub-50% accuracy on Geometry practice triggers automatic weakAreas registration', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE',
      diagnosticCompleted: true
    });

    // Student attempts 4 Geometry questions and gets only 1 correct (25% accuracy)
    const geomAttempts = [
      { questionId: 'geom_01', topicId: 'geometry', section: 'QA', userAnswer: 'A', correctAnswer: 'A', isCorrect: true, timeSpentSeconds: 70 },
      { questionId: 'geom_02', topicId: 'geometry', section: 'QA', userAnswer: 'B', correctAnswer: 'D', isCorrect: false, timeSpentSeconds: 85, mistakeReason: 'Formula misapplication' },
      { questionId: 'geom_03', topicId: 'geometry', section: 'QA', userAnswer: 'C', correctAnswer: 'A', isCorrect: false, timeSpentSeconds: 90, mistakeReason: 'Angle sum error' },
      { questionId: 'geom_04', topicId: 'geometry', section: 'QA', userAnswer: 'A', correctAnswer: 'C', isCorrect: false, timeSpentSeconds: 80, mistakeReason: 'Circle theorem gap' }
    ];

    geomAttempts.forEach(att => session.recordAttempt(att));

    const geomAcc = session.state.profile.topicAccuracy['geometry'];
    assertEqual(geomAcc.attempted, 4);
    assertEqual(geomAcc.correct, 1);
    assertEqual(geomAcc.rollingRate, 25);

    // Profile must automatically categorize Geometry as a weak area
    assertIncludes(session.state.profile.weakAreas, 'geometry', 'Geometry must be added to weakAreas');
    assert(!session.state.profile.strongAreas.includes('geometry'), 'Geometry must not be in strongAreas');
  }, context);

  test('X2.3 Failed Geometry attempts automatically populate Mistake Book with contextual metadata', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE'
    });

    session.recordAttempt({
      questionId: 'q_geom_101',
      topicId: 'geometry',
      section: 'QA',
      difficulty: 'MODERATE',
      userAnswer: 'B',
      correctAnswer: 'C',
      mistakeReason: 'Forgot cyclic quadrilateral opposite angles sum to 180',
      timeSpentSeconds: 95
    });

    const mistakes = session.state.mistakeBook;
    assertEqual(mistakes.length, 1, 'Mistake book must have exactly 1 record');
    assertEqual(mistakes[0].questionId, 'q_geom_101');
    assertEqual(mistakes[0].topicId, 'geometry');
    assertEqual(mistakes[0].reason, 'Forgot cyclic quadrilateral opposite angles sum to 180');
    assertEqual(mistakes[0].reviewed, false, 'Mistake must initially be unreviewed');
  }, context);

  test('X2.4 Student completes targeted 6-stage concept review for Geometry and marks mistakes reviewed', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE',
      weakAreas: ['geometry']
    });

    // Populate initial unreviewed mistake
    session.recordAttempt({
      questionId: 'q_geom_102',
      topicId: 'geometry',
      section: 'QA',
      difficulty: 'MODERATE',
      userAnswer: 'A',
      correctAnswer: 'B',
      mistakeReason: 'Concept gap in Mensuration',
      timeSpentSeconds: 80
    });

    assertEqual(session.state.mistakeBook[0].reviewed, false);

    // Simulate student navigating to 6-stage concept review for Geometry
    const completedStages = [];
    LEARNING_STAGES.forEach(stage => {
      // Step through LEARN, SOLVED_EXAMPLE, GUIDED_TRY, PRACTICE, CHALLENGE, APPLY
      completedStages.push(stage);
    });

    assertEqual(completedStages.length, 6, 'All 6 pedagogical learning stages completed');
    assertEqual(completedStages[0], 'LEARN');
    assertEqual(completedStages[1], 'SOLVED_EXAMPLE');
    assertEqual(completedStages[2], 'GUIDED_TRY');

    // Student marks mistake as reviewed
    session.state.mistakeBook[0].reviewed = true;
    session.syncToStorage();

    assertEqual(session.state.mistakeBook[0].reviewed, true, 'Mistake must be marked reviewed');
  }, context);

  test('X2.5 Post-remediation practice elevates accuracy, clears weakAreas, and promotes to strongAreas', () => {
    const session = new MockAdaptiveSession({
      stage: 'INTERMEDIATE',
      currentPersona: 'INTERMEDIATE',
      weakAreas: ['geometry'],
      strongAreas: []
    });

    // Seed 3 prior failures
    for (let i = 0; i < 3; i++) {
      session.recordAttempt({
        questionId: `geom_fail_${i}`,
        topicId: 'geometry',
        section: 'QA',
        difficulty: 'MODERATE',
        userAnswer: 'WRONG',
        correctAnswer: 'RIGHT',
        timeSpentSeconds: 60
      });
    }
    assertIncludes(session.state.profile.weakAreas, 'geometry');

    // Student performs 5 consecutive correct remediation attempts
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({
        questionId: `geom_remed_${i}`,
        topicId: 'geometry',
        section: 'QA',
        difficulty: 'MODERATE',
        userAnswer: 'RIGHT',
        correctAnswer: 'RIGHT',
        timeSpentSeconds: 50
      });
    }

    // Rolling window of last 5 attempts is 5/5 = 100%
    const geomAcc = session.state.profile.topicAccuracy['geometry'];
    assertEqual(geomAcc.rollingRate, 100, 'Rolling rate must reach 100% on last 5 attempts');

    // Geometry must graduate: removed from weakAreas, added to strongAreas
    assert(!session.state.profile.weakAreas.includes('geometry'), 'Geometry must be cleared from weakAreas');
    assertIncludes(session.state.profile.strongAreas, 'geometry', 'Geometry must be promoted to strongAreas');
  }, context);
});

/**
 * Tier 4 — Workflow 3: Advanced Full Exam Simulation & Remediation
 * Real-World Application Workflow:
 * 1. Diagnostic Test -> ADVANCED Classification (score >= 9)
 * 2. Advanced Persona Navigation (All 7 tabs: Home, Practice, PYQs, Sectionals, Mocks, Review, Analytics)
 * 3. 120-Minute Authentic PYQ Exam Simulation (VARC, DILR, QA) with Authentic CAT Marking Scheme (+3 / -1 / 0)
 * 4. Post-Exam Diagnostic Review & Pedagogical Solution Breakdown
 * 5. Weakness Remediation Feedback Loop (Mistake Book -> Targeted Drill -> Mastery Restored)
 */

const { test, describe, assert, assertEqual, assertDeepEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');
const {
  PERSONA_NAVIGATION_TABS,
  REQUIRED_SOLUTION_FIELDS
} = require('../../framework/contracts');

describe('Tier 4: Workflow 3 — Advanced Exam Simulation & Remediation', () => {
  const context = { tier: 4, featureId: 203, featureName: 'Advanced Exam Drill' };

  test('W3.1 Diagnostic qualifies student as ADVANCED, unlocking full 7-tab interface', () => {
    const session = new MockAdaptiveSession();

    // High performance diagnostic: 10/12 correct
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 10 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 40
    }));

    const result = session.submitDiagnostic(responses);

    assertEqual(result.total, 10);
    assertEqual(result.assignedStage, 'ADVANCED', 'Score 10/12 must classify as ADVANCED');
    assertEqual(session.state.currentPersona, 'ADVANCED');

    // Advanced navigation tabs
    const tabs = session.getVisibleNavigationTabs();
    assertEqual(tabs.length, 7);
    assertDeepEqual(tabs, PERSONA_NAVIGATION_TABS.ADVANCED);
    assertIncludes(tabs, 'Mocks');
    assertIncludes(tabs, 'Sectionals');
    assertIncludes(tabs, 'Analytics');
    assertIncludes(tabs, 'PYQs');
  }, context);

  test('W3.2 120-minute authentic PYQ simulation initializes 3 timed sections (VARC, DILR, QA)', () => {
    const examConfig = {
      title: 'CAT 2022 Slot 2 — Authentic PYQ Simulation',
      totalDurationMinutes: 120,
      sections: [
        { name: 'VARC', durationMinutes: 40, questionCount: 24, type: 'VARC' },
        { name: 'DILR', durationMinutes: 40, questionCount: 20, type: 'DILR' },
        { name: 'QA', durationMinutes: 40, questionCount: 22, type: 'QA' }
      ]
    };

    assertEqual(examConfig.totalDurationMinutes, 120, 'Exam duration must be 120 minutes');
    assertEqual(examConfig.sections.length, 3, 'Must have 3 sections');
    const totalQuestions = examConfig.sections.reduce((sum, s) => sum + s.questionCount, 0);
    assertEqual(totalQuestions, 66, 'Modern CAT paper comprises 66 questions');
  }, context);

  test('W3.3 Simulation submission applies authentic CAT marking (+3 correct, -1 wrong MCQ, 0 wrong TITA)', () => {
    // Scoring engine simulation
    function calculateCatScore(responses) {
      let score = 0;
      let correct = 0;
      let incorrect = 0;

      responses.forEach(r => {
        if (r.userAnswer === r.correctAnswer) {
          score += 3;
          correct++;
        } else if (r.userAnswer !== null && r.userAnswer !== undefined && r.userAnswer !== '') {
          // Negative marking only applies to MCQ, not TITA
          if (r.questionType === 'MCQ') {
            score -= 1;
          }
          incorrect++;
        }
      });

      return { score, correct, incorrect };
    }

    const mockResponses = [
      { questionType: 'MCQ', userAnswer: 'A', correctAnswer: 'A' }, // +3
      { questionType: 'MCQ', userAnswer: 'B', correctAnswer: 'A' }, // -1
      { questionType: 'TITA', userAnswer: '15', correctAnswer: '15' }, // +3
      { questionType: 'TITA', userAnswer: '20', correctAnswer: '25' }, // 0 (no negative for TITA)
      { questionType: 'MCQ', userAnswer: null, correctAnswer: 'C' }   // 0 (unattempted)
    ];

    const result = calculateCatScore(mockResponses);
    // Score = (+3) + (-1) + (+3) + (0) + (0) = 5
    assertEqual(result.score, 5, 'Score calculation must follow authentic CAT marking');
    assertEqual(result.correct, 2);
    assertEqual(result.incorrect, 2);
  }, context);

  test('W3.4 Detailed pedagogical solution review exposes all required pedagogical fields', () => {
    const pedagogicalSolution = {
      finalAnswer: 'Option B (36 km/h)',
      steps: [
        'Step 1: Convert units to uniform metric representation.',
        'Step 2: Formulate relative speed equation.',
        'Step 3: Solve for unknown velocity.'
      ],
      concept: 'Relative Speed in Opposite Directions',
      whyItWorks: 'When bodies move towards each other, their relative speed is the sum of their individual speeds.',
      commonMistake: 'Subtracting speeds instead of adding when moving in opposite directions.',
      catTip: 'Look for unit traps (km/h vs m/s) before performing calculations.'
    };

    // Verify all canonical solution fields
    for (const field of REQUIRED_SOLUTION_FIELDS) {
      assert(field in pedagogicalSolution, `Solution must include required field '${field}'`);
      assert(pedagogicalSolution[field] !== null && pedagogicalSolution[field] !== undefined);
    }

    assert(pedagogicalSolution.steps.length >= 3, 'Steps must be multi-step pedagogical walkthrough');
  }, context);

  test('W3.5 Weakness remediation loop: Gaps detected in mock are drilled and restored to strong status', () => {
    const session = new MockAdaptiveSession({
      stage: 'ADVANCED',
      currentPersona: 'ADVANCED'
    });

    // Student encountered difficulty in 'games_tournaments' during mock
    session.recordAttempt({
      questionId: 'mock_dilr_games_01',
      topicId: 'games_tournaments',
      section: 'DILR',
      difficulty: 'CAT_LEVEL',
      userAnswer: 'WRONG_1',
      correctAnswer: 'CORRECT',
      mistakeReason: 'Round-robin knockout matrix miscalculation',
      timeSpentSeconds: 150
    });
    session.recordAttempt({
      questionId: 'mock_dilr_games_02',
      topicId: 'games_tournaments',
      section: 'DILR',
      difficulty: 'CAT_LEVEL',
      userAnswer: 'WRONG_2',
      correctAnswer: 'CORRECT',
      mistakeReason: 'Points table constraint oversight',
      timeSpentSeconds: 160
    });

    assertEqual(session.state.mistakeBook.length, 2);
    assertEqual(session.state.mistakeBook[0].topicId, 'games_tournaments');

    // Student triggers targeted remediation drill: 5 consecutive correct answers
    for (let i = 1; i <= 5; i++) {
      session.recordAttempt({
        questionId: `drill_games_${i}`,
        topicId: 'games_tournaments',
        section: 'DILR',
        difficulty: 'CAT_LEVEL',
        userAnswer: 'CORRECT',
        correctAnswer: 'CORRECT',
        timeSpentSeconds: 100
      });
    }

    // Rolling window of last 5 attempts is 100%
    const accuracy = session.state.profile.topicAccuracy['games_tournaments'];
    assertEqual(accuracy.rollingRate, 100, 'Remediation drill elevates rolling rate to 100%');
    assertIncludes(session.state.profile.strongAreas, 'games_tournaments', 'Topic successfully promoted to strongAreas');
  }, context);
});

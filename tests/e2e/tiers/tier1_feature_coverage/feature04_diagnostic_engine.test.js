/**
 * Tier 1 — Feature 4: 12-Question Diagnostic
 * Verifies the 12-question diagnostic test (4 VARC, 4 DILR, 4 QA), velocity tracking, and assessment.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, PROJECT_ROOT } = require('../../framework/testHarness');
const { DIAGNOSTIC_CONFIG } = require('../../framework/contracts');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 4 — 12-Question Diagnostic Engine', () => {
  const context = { tier: 1, featureId: 4, featureName: '12-Question Diagnostic' };

  test('4.1 Should verify diagnostic engine specifies exactly 12 questions total', () => {
    assertEqual(DIAGNOSTIC_CONFIG.totalQuestions, 12, 'Diagnostic must consist of exactly 12 questions');
  }, context);

  test('4.2 Should verify exact section distribution: 4 VARC, 4 DILR, 4 QA', () => {
    assertEqual(DIAGNOSTIC_CONFIG.sections.VARC, 4, 'Must have 4 VARC questions');
    assertEqual(DIAGNOSTIC_CONFIG.sections.DILR, 4, 'Must have 4 DILR questions');
    assertEqual(DIAGNOSTIC_CONFIG.sections.QA, 4, 'Must have 4 QA questions');
  }, context);

  test('4.3 Should accurately compute velocity (average seconds per question)', () => {
    const session = new MockAdaptiveSession();
    const responses = [
      { id: '1', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '2', section: 'VARC', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 50 },
      { id: '3', section: 'VARC', userAnswer: 'C', correctAnswer: 'D', timeSpentSeconds: 70 },
      { id: '4', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '5', section: 'DILR', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 120 },
      { id: '6', section: 'DILR', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 110 },
      { id: '7', section: 'DILR', userAnswer: 'C', correctAnswer: 'C', timeSpentSeconds: 90 },
      { id: '8', section: 'DILR', userAnswer: 'D', correctAnswer: 'D', timeSpentSeconds: 80 },
      { id: '9', section: 'QA', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 75 },
      { id: '10', section: 'QA', userAnswer: 'B', correctAnswer: 'B', timeSpentSeconds: 85 },
      { id: '11', section: 'QA', userAnswer: 'C', correctAnswer: 'C', timeSpentSeconds: 95 },
      { id: '12', section: 'QA', userAnswer: 'D', correctAnswer: 'D', timeSpentSeconds: 105 }
    ];

    const result = session.submitDiagnostic(responses);
    // Total time = 1000s / 12 = 83.33 -> 83s
    assertEqual(result.velocitySeconds, 83, 'Diagnostic velocity should equal total time / 12 rounded');
  }, context);

  test('4.4 Should track independent section foundations for VARC, DILR, QA', () => {
    const session = new MockAdaptiveSession();
    const responses = [
      // VARC: 4 correct
      { id: '1', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '2', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '3', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '4', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      // DILR: 2 correct
      { id: '5', section: 'DILR', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '6', section: 'DILR', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '7', section: 'DILR', userAnswer: 'A', correctAnswer: 'B', timeSpentSeconds: 60 },
      { id: '8', section: 'DILR', userAnswer: 'A', correctAnswer: 'B', timeSpentSeconds: 60 },
      // QA: 1 correct
      { id: '9', section: 'QA', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 60 },
      { id: '10', section: 'QA', userAnswer: 'A', correctAnswer: 'B', timeSpentSeconds: 60 },
      { id: '11', section: 'QA', userAnswer: 'A', correctAnswer: 'B', timeSpentSeconds: 60 },
      { id: '12', section: 'QA', userAnswer: 'A', correctAnswer: 'B', timeSpentSeconds: 60 }
    ];

    session.submitDiagnostic(responses);
    const foundations = session.state.profile.sectionFoundations;
    assertEqual(foundations.VARC, 100, 'VARC 4/4 should be 100%');
    assertEqual(foundations.DILR, 50, 'DILR 2/4 should be 50%');
    assertEqual(foundations.QA, 25, 'QA 1/4 should be 25%');
  }, context);

  test('4.5 Should mark diagnosticCompleted as true and generate score object', () => {
    const session = new MockAdaptiveSession();
    assertEqual(session.state.profile.diagnosticCompleted, false, 'Initial state should be incomplete');

    const sampleResponses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: 'A',
      correctAnswer: 'A',
      timeSpentSeconds: 60
    }));

    const result = session.submitDiagnostic(sampleResponses);
    assertEqual(session.state.profile.diagnosticCompleted, true, 'diagnosticCompleted must be true');
    assertEqual(result.total, 12, 'Total score should be 12');
  }, context);
});

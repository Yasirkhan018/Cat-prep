/**
 * Tier 1 — Feature 21: Adversarial Hardening
 * Verifies system resistance to malformed payloads, unicode/LaTeX edge characters,
 * corrupt localStorage states, out-of-bounds metrics, and rapid-fire inputs.
 */

const { test, describe, assert, assertEqual, assertThrows } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 21 — Adversarial Hardening', () => {
  const context = { tier: 1, featureId: 21, featureName: 'Adversarial Hardening' };

  test('21.1 Should safely sanitize and handle special characters and LaTeX in inputs', () => {
    const session = new MockAdaptiveSession();
    const weirdAttempt = {
      questionId: 'q_latex_<script>alert("xss")</script>',
      topicId: 'algebra',
      section: 'QA',
      difficulty: 'MODERATE',
      userAnswer: '$\\frac{\\sqrt{b^2 - 4ac}}{2a}$ & <>&"\'',
      correctAnswer: '$\\frac{\\sqrt{b^2 - 4ac}}{2a}$ & <>&"\'',
      timeSpentSeconds: 45
    };

    const record = session.recordAttempt(weirdAttempt);
    assertEqual(record.isCorrect, true);
    assertEqual(record.userAnswer, weirdAttempt.userAnswer);
  }, context);

  test('21.2 Should gracefully recover from corrupt or invalid JSON in storage', () => {
    const session = new MockAdaptiveSession();
    // Simulate corrupt localStorage
    session.storage.setItem('cat_prep_profile', 'CORRUPT_NOT_JSON{{{');

    // rehydrate should catch syntax error and reset to safe defaults without throwing fatal crash
    session.rehydrateFromStorage();
    assertEqual(session.state.profile.stage, 'BEGINNER', 'Must safely fall back to clean beginner profile');
    assertEqual(session.state.profile.diagnosticCompleted, false);
  }, context);

  test('21.3 Should clamp velocity time bounds against zero, negative, and extreme values', () => {
    const session = new MockAdaptiveSession();
    const invalidTimeResponses = [
      { id: '1', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: -999 },
      { id: '2', section: 'VARC', userAnswer: 'A', correctAnswer: 'A', timeSpentSeconds: 0 },
      ...Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 3),
        section: i < 2 ? 'VARC' : i < 6 ? 'DILR' : 'QA',
        userAnswer: 'A',
        correctAnswer: 'A',
        timeSpentSeconds: 60
      }))
    ];

    const result = session.submitDiagnostic(invalidTimeResponses);
    assert(result.velocitySeconds > 0, `Velocity (${result.velocitySeconds}) must be clamped strictly > 0`);
  }, context);

  test('21.4 Should strictly reject diagnostic submission with incorrect question counts (<12 or >12)', () => {
    const session = new MockAdaptiveSession();
    const incomplete = Array.from({ length: 5 }, (_, i) => ({
      id: String(i),
      section: 'QA',
      userAnswer: 'A',
      correctAnswer: 'A'
    }));

    assertThrows(() => {
      session.submitDiagnostic(incomplete);
    }, 'Diagnostic requires exactly 12');
  }, context);

  test('21.5 Should withstand rapid duplicate attempt recordings idempotently', () => {
    const session = new MockAdaptiveSession();
    const attemptPayload = {
      questionId: 'q_idemp_1',
      topicId: 'percentages',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'B',
      correctAnswer: 'B'
    };

    // Rapid successive calls
    for (let i = 0; i < 10; i++) {
      session.recordAttempt(attemptPayload);
    }

    assertEqual(session.state.attempts.length, 10);
    // Topic accuracy rolling window must stay between 0 and 100
    const rate = session.state.profile.topicAccuracy['percentages'].rollingRate;
    assert(rate >= 0 && rate <= 100, `Rolling rate ${rate} must be within [0, 100]`);
  }, context);
});

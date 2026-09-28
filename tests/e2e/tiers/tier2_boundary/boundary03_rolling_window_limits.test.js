/**
 * Tier 2 — Boundary 3: Rolling Window Limits (W = 5)
 * Tests sliding window calculation and FIFO eviction:
 * - Incomplete window (1, 2, 3, 4 attempts)
 * - Exactly full window (5 attempts)
 * - First attempt eviction at attempt 6
 * - Complete polarity shift (100% -> 0% over 5 attempts)
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 2: Boundary 3 — Rolling Window Limits (W = 5)', () => {
  const context = { tier: 2, featureId: 14, featureName: 'Rolling Window Limits' };

  test('B3.1 Should compute rolling accuracy with partial window (1 to 4 attempts)', () => {
    const session = new MockAdaptiveSession();
    const topicId = 'percentages';

    // 1st attempt: Correct -> 100%
    session.recordAttempt({ questionId: 'q1', topicId, section: 'QA', isCorrect: true, userAnswer: 'A', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 100);

    // 2nd attempt: Wrong -> 50%
    session.recordAttempt({ questionId: 'q2', topicId, section: 'QA', isCorrect: false, userAnswer: 'B', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 50);

    // 3rd attempt: Correct -> 2/3 = 67%
    session.recordAttempt({ questionId: 'q3', topicId, section: 'QA', isCorrect: true, userAnswer: 'A', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 67);

    // 4th attempt: Correct -> 3/4 = 75%
    session.recordAttempt({ questionId: 'q4', topicId, section: 'QA', isCorrect: true, userAnswer: 'A', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 75);
  }, context);

  test('B3.2 Should calculate exact full window accuracy at attempt 5', () => {
    const session = new MockAdaptiveSession();
    const topicId = 'percentages';

    // 4 correct, 1 wrong
    for (let i = 0; i < 4; i++) {
      session.recordAttempt({ questionId: `q${i}`, topicId, section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }
    session.recordAttempt({ questionId: 'q5', topicId, section: 'QA', userAnswer: 'B', correctAnswer: 'A' });

    assertEqual(session.state.profile.topicAccuracy[topicId].attempted, 5);
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 80, '4/5 should be 80%');
  }, context);

  test('B3.3 Should evict oldest attempt on 6th question (FIFO buffer eviction)', () => {
    const session = new MockAdaptiveSession();
    const topicId = 'percentages';

    // q1 is WRONG, q2-q5 are CORRECT -> [F, T, T, T, T] = 80%
    session.recordAttempt({ questionId: 'q1', topicId, section: 'QA', userAnswer: 'B', correctAnswer: 'A' });
    for (let i = 2; i <= 5; i++) {
      session.recordAttempt({ questionId: `q${i}`, topicId, section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 80);

    // q6 is CORRECT: evicts q1 (F), new window: [T, T, T, T, T] -> 100%
    session.recordAttempt({ questionId: 'q6', topicId, section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 100, 'Evicting false attempt should raise rolling accuracy to 100%');
  }, context);

  test('B3.4 Should track complete polarity transition (100% down to 0% over 5 failed attempts)', () => {
    const session = new MockAdaptiveSession();
    const topicId = 'percentages';

    // Start with 5 correct -> 100%
    for (let i = 1; i <= 5; i++) {
      session.recordAttempt({ questionId: `q_pass_${i}`, topicId, section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }
    assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, 100);

    // Add 5 incorrect attempts in a row
    const expectedProgression = [80, 60, 40, 20, 0];
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `q_fail_${i}`, topicId, section: 'QA', userAnswer: 'WRONG', correctAnswer: 'A' });
      assertEqual(session.state.profile.topicAccuracy[topicId].rollingRate, expectedProgression[i]);
    }
  }, context);

  test('B3.5 Should maintain isolated rolling windows across different topics simultaneously', () => {
    const session = new MockAdaptiveSession();

    // 5 correct for percentages
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `qp_${i}`, topicId: 'percentages', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }

    // 5 wrong for geometry
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `qg_${i}`, topicId: 'geometry', section: 'QA', userAnswer: 'WRONG', correctAnswer: 'A' });
    }

    assertEqual(session.state.profile.topicAccuracy['percentages'].rollingRate, 100);
    assertEqual(session.state.profile.topicAccuracy['geometry'].rollingRate, 0);
  }, context);
});

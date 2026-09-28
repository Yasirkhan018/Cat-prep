/**
 * Tier 1 — Feature 7: Continuous Reassessment
 * Verifies dynamic topic-level mastery recalculation independent of global stage.
 */

const { test, describe, assert, assertEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 7 — Continuous Reassessment', () => {
  const context = { tier: 1, featureId: 7, featureName: 'Continuous Reassessment' };

  test('7.1 Should update topic mastery dynamically after question attempts', () => {
    const session = new MockAdaptiveSession({ stage: 'BEGINNER' });
    assertEqual(session.state.profile.topicMastery.percentages || 0, 0, 'Initial mastery is 0');

    // 4 correct attempts on percentages
    for (let i = 0; i < 4; i++) {
      session.recordAttempt({ questionId: `p_${i}`, topicId: 'percentages', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }

    assertEqual(session.state.profile.topicMastery.percentages, 100, 'Mastery should rise to 100%');
    assertEqual(session.state.profile.stage, 'BEGINNER', 'Global stage remains Beginner during single topic drill');
  }, context);

  test('7.2 Should maintain independent topic levels (Intermediate overall, QA Percentages Advanced, QA Geometry Beginner)', () => {
    const session = new MockAdaptiveSession({ stage: 'INTERMEDIATE' });

    // Advanced in Percentages (5/5 correct)
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `p_${i}`, topicId: 'percentages', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }

    // Beginner in Geometry (0/5 correct)
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `g_${i}`, topicId: 'geometry', section: 'QA', userAnswer: 'B', correctAnswer: 'A' });
    }

    assertEqual(session.state.profile.topicMastery.percentages, 100, 'Percentages should be at 100%');
    assertEqual(session.state.profile.topicMastery.geometry, 0, 'Geometry should be at 0%');
    assertEqual(session.state.profile.stage, 'INTERMEDIATE', 'Global stage should remain Intermediate');
  }, context);

  test('7.3 Should use rolling window (W=5) so a single lucky answer does not spike mastery', () => {
    const session = new MockAdaptiveSession();
    // 4 wrong attempts
    for (let i = 0; i < 4; i++) {
      session.recordAttempt({ questionId: `w_${i}`, topicId: 'algebra', section: 'QA', userAnswer: 'B', correctAnswer: 'A' });
    }
    assertEqual(session.state.profile.topicMastery.algebra, 0, 'Mastery after 4 errors is 0%');

    // 1 lucky correct answer
    session.recordAttempt({ questionId: 'lucky_1', topicId: 'algebra', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    assertEqual(session.state.profile.topicMastery.algebra, 20, 'Rolling rate with 1/5 is 20%, not 100%');
  }, context);

  test('7.4 Should trigger topic-level remediation without dropping global stage', () => {
    const session = new MockAdaptiveSession({ stage: 'INTERMEDIATE' });
    // Consecutive errors on para_jumbles
    for (let i = 0; i < 3; i++) {
      session.recordAttempt({ questionId: `pj_${i}`, topicId: 'para_jumbles', section: 'VARC', userAnswer: 'X', correctAnswer: 'Y' });
    }

    assertIncludes(session.state.profile.weakAreas, 'para_jumbles', 'para_jumbles should be marked weak');
    assertEqual(session.state.profile.stage, 'INTERMEDIATE', 'Global stage remains INTERMEDIATE');
  }, context);

  test('7.5 Should record mistake reason and log to mistake review list', () => {
    const session = new MockAdaptiveSession();
    session.recordAttempt({
      questionId: 'm1',
      topicId: 'percentages',
      section: 'QA',
      userAnswer: 'Wrong',
      correctAnswer: 'Right',
      mistakeReason: "Calculation mistake"
    });

    assertEqual(session.state.mistakeBook.length, 1, 'Mistake should be recorded in mistakeBook');
    assertEqual(session.state.mistakeBook[0].reason, 'Calculation mistake', 'Reason must match');
  }, context);
});

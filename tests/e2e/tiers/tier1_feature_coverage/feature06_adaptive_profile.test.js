/**
 * Tier 1 — Feature 6: Adaptive Profile Store
 * Verifies profile state shape, mastery ranges, and dynamic weak/strong area tracking.
 */

const { test, describe, assert, assertEqual, assertInRange, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 6 — Adaptive Profile Store', () => {
  const context = { tier: 1, featureId: 6, featureName: 'Adaptive Profile Store' };

  test('6.1 Should initialize profile with all required contract fields', () => {
    const session = new MockAdaptiveSession();
    const profile = session.state.profile;

    assert(profile.stage !== undefined, 'stage must be defined');
    assert(profile.sectionFoundations !== undefined, 'sectionFoundations must be defined');
    assert(profile.topicMastery !== undefined, 'topicMastery must be defined');
    assert(profile.topicAccuracy !== undefined, 'topicAccuracy must be defined');
    assert(Array.isArray(profile.weakAreas), 'weakAreas must be an array');
    assert(Array.isArray(profile.strongAreas), 'strongAreas must be an array');
  }, context);

  test('6.2 Should bound topic mastery strictly between 0 and 100', () => {
    const session = new MockAdaptiveSession();
    // Simulate attempts
    session.recordAttempt({ questionId: 'q1', topicId: 'percentages', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    session.recordAttempt({ questionId: 'q2', topicId: 'percentages', section: 'QA', userAnswer: 'B', correctAnswer: 'A' });

    const mastery = session.state.profile.topicMastery.percentages;
    assertInRange(mastery, 0, 100, 'Topic mastery must be in range 0-100');
  }, context);

  test('6.3 Should track independent topic masteries across different subjects', () => {
    const session = new MockAdaptiveSession();

    // High performance on QA: percentages
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `q_p_${i}`, topicId: 'percentages', section: 'QA', userAnswer: 'A', correctAnswer: 'A' });
    }

    // Low performance on QA: geometry
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `q_g_${i}`, topicId: 'geometry', section: 'QA', userAnswer: 'B', correctAnswer: 'A' });
    }

    const masteryPercentages = session.state.profile.topicMastery.percentages;
    const masteryGeometry = session.state.profile.topicMastery.geometry;

    assertEqual(masteryPercentages, 100, 'Percentages mastery should be 100%');
    assertEqual(masteryGeometry, 0, 'Geometry mastery should be 0%');
  }, context);

  test('6.4 Should identify weak areas when topic accuracy drops below threshold', () => {
    const session = new MockAdaptiveSession();
    // 3 incorrect out of 3
    session.recordAttempt({ questionId: 'q1', topicId: 'arrangements', section: 'DILR', userAnswer: 'B', correctAnswer: 'A' });
    session.recordAttempt({ questionId: 'q2', topicId: 'arrangements', section: 'DILR', userAnswer: 'C', correctAnswer: 'A' });
    session.recordAttempt({ questionId: 'q3', topicId: 'arrangements', section: 'DILR', userAnswer: 'D', correctAnswer: 'A' });

    assertIncludes(session.state.profile.weakAreas, 'arrangements', 'Arrangements should be tagged as weakArea');
  }, context);

  test('6.5 Should identify strong areas when sustained accuracy exceeds 80%', () => {
    const session = new MockAdaptiveSession();
    // 5 correct out of 5
    for (let i = 0; i < 5; i++) {
      session.recordAttempt({ questionId: `q_${i}`, topicId: 'rc_inference', section: 'VARC', userAnswer: 'A', correctAnswer: 'A' });
    }

    assertIncludes(session.state.profile.strongAreas, 'rc_inference', 'RC Inference should be tagged as strongArea');
  }, context);
});

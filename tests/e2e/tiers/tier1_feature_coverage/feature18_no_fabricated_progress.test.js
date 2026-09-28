/**
 * Tier 1 — Feature 18: No Fabricated Progress
 * Verifies that new users experience an authentic clean zero state:
 * - 0 questions attempted, 0% topic mastery
 * - No fake mock scores, streaks, or percentile badges
 * - All progress metrics increment solely through verified user actions.
 */

const { test, describe, assert, assertEqual, assertDeepEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 18 — No Fabricated Progress', () => {
  const context = { tier: 1, featureId: 18, featureName: 'No Fabricated Progress' };

  test('18.1 Should initialize fresh student session with strictly zero attempts', () => {
    const freshSession = new MockAdaptiveSession();
    assertEqual(freshSession.state.attempts.length, 0, 'New user must have 0 attempts');
    assertEqual(freshSession.state.mistakeBook.length, 0, 'New user must have empty mistake book');
    assertEqual(freshSession.state.bookmarks.length, 0, 'New user must have empty bookmarks');
  }, context);

  test('18.2 Should initialize all topic masteries to zero without pre-populated values', () => {
    const freshSession = new MockAdaptiveSession();
    const masteryEntries = Object.entries(freshSession.state.profile.topicMastery);
    assertEqual(masteryEntries.length, 0, 'No topic mastery should be pre-fabricated');
    assertDeepEqual(freshSession.state.profile.weakAreas, [], 'No weak areas should be fabricated');
    assertDeepEqual(freshSession.state.profile.strongAreas, [], 'No strong areas should be fabricated');
  }, context);

  test('18.3 Should verify diagnostic status is uncompleted in cold start state', () => {
    const freshSession = new MockAdaptiveSession();
    assertEqual(freshSession.state.profile.diagnosticCompleted, false, 'diagnosticCompleted must be false');
    assertEqual(freshSession.state.profile.diagnosticScore, null, 'diagnosticScore must be null');
  }, context);

  test('18.4 Should strictly increment counters only upon genuine question attempts', () => {
    const session = new MockAdaptiveSession();
    assertEqual(session.state.attempts.length, 0);

    // Attempt 1
    session.recordAttempt({
      questionId: 'q_test_1',
      topicId: 'percentages',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'A',
      correctAnswer: 'A',
      timeSpentSeconds: 45
    });
    assertEqual(session.state.attempts.length, 1, 'Attempts count should equal exactly 1');
    assertEqual(session.state.profile.topicAccuracy['percentages'].attempted, 1);
    assertEqual(session.state.profile.topicAccuracy['percentages'].correct, 1);

    // Attempt 2 (Wrong)
    session.recordAttempt({
      questionId: 'q_test_2',
      topicId: 'percentages',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 50
    });
    assertEqual(session.state.attempts.length, 2, 'Attempts count should equal exactly 2');
    assertEqual(session.state.mistakeBook.length, 1, 'Mistake book should have exactly 1 record');
  }, context);

  test('18.5 Should ensure zero state persists across storage rehydration', () => {
    const freshSession = new MockAdaptiveSession();
    const rehydrated = new MockAdaptiveSession();
    rehydrated.storage = freshSession.storage;
    rehydrated.rehydrateFromStorage();

    assertEqual(rehydrated.state.attempts.length, 0, 'Rehydrated attempts must still be 0');
    assertEqual(rehydrated.state.profile.diagnosticCompleted, false, 'diagnosticCompleted must still be false');
  }, context);
});

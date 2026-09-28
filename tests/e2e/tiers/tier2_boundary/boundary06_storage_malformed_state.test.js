/**
 * Tier 2 — Boundary 6: Storage Malformed State & Resiliency
 * Tests edge cases in local storage handling:
 * - Completely empty storage / uninitialized state
 * - Null and empty string values
 * - Malformed / truncated JSON strings
 * - Data structure type mismatches (object vs array vs primitive)
 * - High volume attempt records serialization
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 2: Boundary 6 — Storage Malformed State & Resiliency', () => {
  const context = { tier: 2, featureId: 6, featureName: 'Storage Malformed State' };

  test('B6.1 Should safely initialize when localStorage is completely empty', () => {
    const session = new MockAdaptiveSession();
    session.storage.clear();
    assertEqual(session.storage.length, 0);

    // Rehydrating from completely empty storage must not throw
    session.rehydrateFromStorage();
    assertEqual(session.state.profile.stage, 'BEGINNER');
    assertEqual(session.state.attempts.length, 0);
  }, context);

  test('B6.2 Should handle null and undefined storage values without throwing', () => {
    const session = new MockAdaptiveSession();
    session.storage.setItem('cat_prep_profile', null);
    session.storage.setItem('cat_prep_persona', 'null');
    session.storage.setItem('cat_prep_attempts', '');

    // Rehydrate
    session.rehydrateFromStorage();
    assertEqual(session.state.profile.stage, 'BEGINNER', 'Should fall back to default profile');
  }, context);

  test('B6.3 Should recover cleanly from truncated or malformed JSON payloads', () => {
    const session = new MockAdaptiveSession();
    session.storage.setItem('cat_prep_profile', '{"stage":"INTERMEDIATE", "diagnosticCompleted":tru'); // Truncated JSON
    session.storage.setItem('cat_prep_attempts', '[{"id": "1",'); // Truncated array

    session.rehydrateFromStorage();
    // Profile should reset gracefully
    assertEqual(session.state.profile.stage, 'BEGINNER');
    assertEqual(session.state.attempts.length, 0);
  }, context);

  test('B6.4 Should handle unexpected data type in storage keys', () => {
    const session = new MockAdaptiveSession();
    // Storing a number instead of JSON string
    session.storage.setItem('cat_prep_attempts', '12345');

    session.rehydrateFromStorage();
    // Expected behavior: attempts must be array, not a number
    assert(Array.isArray(session.state.attempts), 'Attempts must remain an array');
  }, context);

  test('B6.5 Should serialize and rehydrate high-volume attempt history (500 records) without data loss', () => {
    const session = new MockAdaptiveSession();
    const count = 500;

    for (let i = 0; i < count; i++) {
      session.recordAttempt({
        questionId: `q_bulk_${i}`,
        topicId: i % 2 === 0 ? 'percentages' : 'algebra',
        section: 'QA',
        difficulty: 'FOUNDATION',
        userAnswer: 'A',
        correctAnswer: i % 3 === 0 ? 'B' : 'A',
        timeSpentSeconds: 40 + (i % 30)
      });
    }

    assertEqual(session.state.attempts.length, count);

    // Save and rehydrate into new session
    const rehydrated = new MockAdaptiveSession();
    rehydrated.storage = session.storage;
    rehydrated.rehydrateFromStorage();

    assertEqual(rehydrated.state.attempts.length, count, 'All 500 attempts must survive storage round-trip');
    assertEqual(rehydrated.state.attempts[count - 1].questionId, `q_bulk_${count - 1}`);
  }, context);
});

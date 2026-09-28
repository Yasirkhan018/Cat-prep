/**
 * Tier 3 — Cross-Feature 3: Persona Switching State Preservation
 * Verifies end-to-end state integrity during persona transitions:
 * Developer Persona Switcher (Feature 17) <-> Persona Navigation (Features 15, 16) <->
 * Persistent State Isolation & Storage (Features 3, 6, 18).
 * Switching personas must dynamically adjust views/navigation while strictly preserving
 * underlying performance data, diagnostics, attempts, bookmarks, and mistake book.
 */

const { test, describe, assert, assertEqual, assertDeepEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');
const { STAGES, PERSONA_NAVIGATION_TABS } = require('../../framework/contracts');

describe('Tier 3: Cross-Feature 3 — Persona Switching State Preservation', () => {
  const context = { tier: 3, featureId: 103, featureName: 'Persona Switching State Preservation' };

  test('X3.1 Persona switch from Intermediate to Beginner preserves diagnostic results and history', () => {
    const session = new MockAdaptiveSession();

    // 1. Submit diagnostic scoring 7/12 (Intermediate)
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 7 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 65
    }));
    session.submitDiagnostic(responses);

    assertEqual(session.state.currentPersona, 'INTERMEDIATE');
    assertEqual(session.state.profile.diagnosticScore.total, 7);
    assertEqual(session.getVisibleNavigationTabs().length, 6);

    // 2. Record 3 practice attempts under Intermediate persona
    for (let i = 0; i < 3; i++) {
      session.recordAttempt({
        questionId: `q_int_${i}`,
        topicId: 'percentages',
        section: 'QA',
        difficulty: 'MODERATE',
        userAnswer: 'A',
        correctAnswer: 'A',
        timeSpentSeconds: 45
      });
    }
    assertEqual(session.state.attempts.length, 3);
    const initialAccuracy = session.state.profile.topicAccuracy['percentages'].rollingRate;

    // 3. Switch persona to BEGINNER
    session.setPersona('BEGINNER');

    // 4. Verify persona is BEGINNER and navigation adjusted
    assertEqual(session.state.currentPersona, 'BEGINNER');
    assertEqual(session.getVisibleNavigationTabs().length, 4);
    assertDeepEqual(session.getVisibleNavigationTabs(), PERSONA_NAVIGATION_TABS.BEGINNER);

    // 5. Verify underlying metrics were NOT wiped or reset
    assertEqual(session.state.profile.diagnosticCompleted, true);
    assertEqual(session.state.profile.diagnosticScore.total, 7);
    assertEqual(session.state.attempts.length, 3);
    assertEqual(session.state.profile.topicAccuracy['percentages'].rollingRate, initialAccuracy);
  }, context);

  test('X3.2 Persona switch to Advanced expands navigation without corrupting topic mastery', () => {
    const session = new MockAdaptiveSession({
      stage: 'BEGINNER',
      currentPersona: 'BEGINNER',
      topicMastery: { algebra: 85, time_work: 70 }
    });

    assertEqual(session.getVisibleNavigationTabs().length, 4);

    // Switch to ADVANCED
    session.setPersona('ADVANCED');

    // Verify Advanced persona tabs
    assertEqual(session.state.currentPersona, 'ADVANCED');
    const advTabs = session.getVisibleNavigationTabs();
    assertEqual(advTabs.length, 7);
    assertIncludes(advTabs, 'Mocks');
    assertIncludes(advTabs, 'Sectionals');
    assertIncludes(advTabs, 'Analytics');

    // Verify mastery metrics remained intact
    assertEqual(session.state.profile.topicMastery['algebra'], 85);
    assertEqual(session.state.profile.topicMastery['time_work'], 70);
  }, context);

  test('X3.3 Question attempts in one persona persist and reflect when toggling to another persona', () => {
    const session = new MockAdaptiveSession();

    // Start in BEGINNER
    session.setPersona('BEGINNER');
    assertEqual(session.state.attempts.length, 0);

    // Attempt 2 questions in Beginner
    session.recordAttempt({
      questionId: 'q_b1',
      topicId: 'ratios',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'A',
      correctAnswer: 'A',
      timeSpentSeconds: 40
    });
    session.recordAttempt({
      questionId: 'q_b2',
      topicId: 'ratios',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 50
    });
    assertEqual(session.state.attempts.length, 2);

    // Switch to ADVANCED and attempt 1 advanced question
    session.setPersona('ADVANCED');
    session.recordAttempt({
      questionId: 'q_adv1',
      topicId: 'ratios',
      section: 'QA',
      difficulty: 'CAT_LEVEL',
      userAnswer: 'C',
      correctAnswer: 'C',
      timeSpentSeconds: 110
    });
    assertEqual(session.state.attempts.length, 3);

    // Switch to INTERMEDIATE and verify all 3 attempts exist
    session.setPersona('INTERMEDIATE');
    assertEqual(session.state.attempts.length, 3);
    assertEqual(session.state.attempts[0].questionId, 'q_b1');
    assertEqual(session.state.attempts[1].questionId, 'q_b2');
    assertEqual(session.state.attempts[2].questionId, 'q_adv1');

    // Overall ratio accuracy: 2/3 = 67%
    assertEqual(session.state.profile.topicAccuracy['ratios'].rollingRate, 67);
  }, context);

  test('X3.4 Bookmarks, mistake book, and active theme persist through full cyclic transitions', () => {
    const session = new MockAdaptiveSession({
      activeTheme: 'dark',
      currentPersona: 'BEGINNER',
      bookmarks: ['q_bookmarked_01', 'q_bookmarked_02']
    });

    // Add a mistake
    session.recordAttempt({
      questionId: 'q_err_99',
      topicId: 'algebra',
      section: 'QA',
      userAnswer: 'WRONG',
      correctAnswer: 'RIGHT',
      mistakeReason: 'Sign error in quadratic expansion',
      timeSpentSeconds: 75
    });

    assertEqual(session.state.bookmarks.length, 2);
    assertEqual(session.state.mistakeBook.length, 1);
    assertEqual(session.state.activeTheme, 'dark');

    // Cycle through all personas: BEGINNER -> INTERMEDIATE -> ADVANCED -> BEGINNER
    const cycle = ['INTERMEDIATE', 'ADVANCED', 'BEGINNER'];
    for (const targetPersona of cycle) {
      session.setPersona(targetPersona);
      assertEqual(session.state.currentPersona, targetPersona);

      // Verify invariants remain preserved at each step
      assertEqual(session.state.bookmarks.length, 2, 'Bookmarks must not change');
      assertEqual(session.state.bookmarks[0], 'q_bookmarked_01');
      assertEqual(session.state.mistakeBook.length, 1, 'Mistake book must not change');
      assertEqual(session.state.mistakeBook[0].reason, 'Sign error in quadratic expansion');
      assertEqual(session.state.activeTheme, 'dark', 'Theme must remain dark');
    }
  }, context);

  test('X3.5 Storage rehydration after persona switch retains exact state without fabrication', () => {
    const session = new MockAdaptiveSession();

    session.setPersona('ADVANCED');
    session.setTheme('beige');
    session.recordAttempt({
      questionId: 'q_storage_test',
      topicId: 'number_system',
      section: 'QA',
      userAnswer: 'A',
      correctAnswer: 'A',
      timeSpentSeconds: 65
    });

    // Simulate browser reload by instantiating fresh session sharing same storage
    const reloadedSession = new MockAdaptiveSession();
    // Copy the storage store
    reloadedSession.storage.store = new Map(session.storage.store);
    reloadedSession.rehydrateFromStorage();

    assertEqual(reloadedSession.state.currentPersona, 'ADVANCED', 'Rehydrated persona must be ADVANCED');
    assertEqual(reloadedSession.state.activeTheme, 'beige', 'Rehydrated theme must be beige');
    assertEqual(reloadedSession.state.attempts.length, 1, 'Rehydrated attempts must match');
    assertEqual(reloadedSession.state.attempts[0].questionId, 'q_storage_test');
    assertEqual(reloadedSession.getVisibleNavigationTabs().length, 7, 'Rehydrated tabs must be 7');
  }, context);
});

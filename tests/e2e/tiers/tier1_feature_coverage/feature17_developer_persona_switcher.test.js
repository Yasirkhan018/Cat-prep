/**
 * Tier 1 — Feature 17: Developer Persona Switcher
 * Verifies developer/QA persona toolbar capable of switching between
 * Beginner, Intermediate, and Advanced personas on the fly,
 * plus a complete "Reset to Diagnostic" state purge.
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 17 — Developer Persona Switcher', () => {
  const context = { tier: 1, featureId: 17, featureName: 'Developer Persona Switcher' };

  test('17.1 Should switch immediately to Beginner persona and update storage', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'ADVANCED' });
    session.setPersona('BEGINNER');

    assertEqual(session.state.currentPersona, 'BEGINNER');
    assertEqual(session.state.profile.stage, 'BEGINNER');
    const storedPersona = session.storage.getItem('cat_prep_persona');
    assertEqual(storedPersona, 'BEGINNER', 'Storage must persist updated persona');
  }, context);

  test('17.2 Should switch immediately to Intermediate persona and update storage', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'BEGINNER' });
    session.setPersona('INTERMEDIATE');

    assertEqual(session.state.currentPersona, 'INTERMEDIATE');
    assertEqual(session.state.profile.stage, 'INTERMEDIATE');
    const storedPersona = session.storage.getItem('cat_prep_persona');
    assertEqual(storedPersona, 'INTERMEDIATE');
  }, context);

  test('17.3 Should switch immediately to Advanced persona and update storage', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'BEGINNER' });
    session.setPersona('ADVANCED');

    assertEqual(session.state.currentPersona, 'ADVANCED');
    assertEqual(session.state.profile.stage, 'ADVANCED');
    const storedPersona = session.storage.getItem('cat_prep_persona');
    assertEqual(storedPersona, 'ADVANCED');
  }, context);

  test('17.4 Should execute "Reset to Diagnostic" action clearing adaptive progress', () => {
    const session = new MockAdaptiveSession({
      currentPersona: 'ADVANCED',
      diagnosticCompleted: true,
      diagnosticScore: { total: 11, varc: 4, dilr: 4, qa: 3, velocitySeconds: 45 },
      attempts: [{ id: '1', questionId: 'q1', isCorrect: true }]
    });

    // Execute Reset action
    session.reset();

    assertEqual(session.state.currentPersona, 'BEGINNER', 'Reset should default persona to BEGINNER');
    assertEqual(session.state.profile.stage, 'BEGINNER', 'Reset should set profile stage to BEGINNER');
    assertEqual(session.state.profile.diagnosticCompleted, false, 'Reset must mark diagnosticCompleted false');
    assertEqual(session.state.profile.diagnosticScore, null, 'Reset must nullify diagnosticScore');
    assertEqual(session.state.attempts.length, 0, 'Reset must clear attempts list');
  }, context);

  test('17.5 Should ensure rehydration from storage maintains persona after switch', () => {
    const session = new MockAdaptiveSession();
    session.setPersona('INTERMEDIATE');

    // Simulate page reload by creating new session container reading existing storage
    const rehydrated = new MockAdaptiveSession();
    rehydrated.storage = session.storage;
    rehydrated.rehydrateFromStorage();

    assertEqual(rehydrated.state.currentPersona, 'INTERMEDIATE', 'Rehydrated persona must match switched state');
  }, context);
});

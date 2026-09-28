/**
 * Tier 1 — Feature 15: Persona-Specific Navigation
 * Verifies navigation tab configurations tailored to student stages:
 * Beginner (4 tabs), Intermediate (6 tabs), Advanced (7 tabs), and seamless switching.
 */

const { test, describe, assert, assertEqual, assertDeepEqual, assertIncludes } = require('../../framework/testHarness');
const { PERSONA_NAVIGATION_TABS } = require('../../framework/contracts');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 15 — Persona-Specific Navigation', () => {
  const context = { tier: 1, featureId: 15, featureName: 'Persona-Specific Navigation' };

  test('15.1 Should provide exactly 4 focused tabs for Beginner persona', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'BEGINNER' });
    const tabs = session.getVisibleNavigationTabs();
    const expected = ['Home', 'Learn', 'Practice', 'Progress'];

    assertEqual(tabs.length, 4, 'Beginner must have exactly 4 navigation tabs');
    assertDeepEqual(tabs, expected, 'Beginner tabs mismatch');
    assert(!tabs.includes('Mocks'), 'Beginner must not be overwhelmed with Mocks tab');
    assert(!tabs.includes('PYQs'), 'Beginner must focus on foundations before PYQs');
  }, context);

  test('15.2 Should provide 6 tabs for Intermediate persona including PYQs and Review', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'INTERMEDIATE' });
    const tabs = session.getVisibleNavigationTabs();
    const expected = ['Home', 'Learn', 'Practice', 'PYQs', 'Review', 'Progress'];

    assertEqual(tabs.length, 6, 'Intermediate must have exactly 6 navigation tabs');
    assertDeepEqual(tabs, expected, 'Intermediate tabs mismatch');
    assertIncludes(tabs, 'PYQs', 'Intermediate must have PYQs tab');
    assertIncludes(tabs, 'Review', 'Intermediate must have Review tab');
  }, context);

  test('15.3 Should provide 7 high-performance tabs for Advanced persona', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'ADVANCED' });
    const tabs = session.getVisibleNavigationTabs();
    const expected = ['Home', 'Practice', 'PYQs', 'Sectionals', 'Mocks', 'Review', 'Analytics'];

    assertEqual(tabs.length, 7, 'Advanced must have exactly 7 navigation tabs');
    assertDeepEqual(tabs, expected, 'Advanced tabs mismatch');
    assertIncludes(tabs, 'Sectionals', 'Advanced must have Sectionals tab');
    assertIncludes(tabs, 'Mocks', 'Advanced must have Mocks tab');
    assertIncludes(tabs, 'Analytics', 'Advanced must have Analytics tab');
  }, context);

  test('15.4 Should update visible tabs immediately when persona changes', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'BEGINNER' });
    assertEqual(session.getVisibleNavigationTabs().length, 4, 'Initial Beginner tab count');

    session.setPersona('INTERMEDIATE');
    assertEqual(session.getVisibleNavigationTabs().length, 6, 'Updated Intermediate tab count');

    session.setPersona('ADVANCED');
    assertEqual(session.getVisibleNavigationTabs().length, 7, 'Updated Advanced tab count');

    session.setPersona('BEGINNER');
    assertEqual(session.getVisibleNavigationTabs().length, 4, 'Reverted Beginner tab count');
  }, context);

  test('15.5 Should reject invalid persona names and preserve existing navigation state', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'INTERMEDIATE' });
    let threw = false;

    try {
      session.setPersona('SUPER_ADVANCED');
    } catch (e) {
      threw = true;
    }

    assert(threw, 'Should throw error when setting invalid persona');
    assertEqual(session.state.currentPersona, 'INTERMEDIATE', 'Persona should remain unchanged');
    assertEqual(session.getVisibleNavigationTabs().length, 6, 'Tabs should remain intact');
  }, context);
});

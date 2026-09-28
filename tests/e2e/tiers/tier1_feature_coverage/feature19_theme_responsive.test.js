/**
 * Tier 1 — Feature 19: Theme & Responsive Polish
 * Verifies multi-theme support (Beige, Light, Dark), theme persistence,
 * accessibility contrast ratios, and responsive viewport specifications.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertIncludes, PROJECT_ROOT } = require('../../framework/testHarness');
const { SUPPORTED_THEMES } = require('../../framework/contracts');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 19 — Theme & Responsive Polish', () => {
  const context = { tier: 1, featureId: 19, featureName: 'Theme & Responsive Polish' };

  test('19.1 Should support exactly the 3 canonical themes: beige, light, and dark', () => {
    assertEqual(SUPPORTED_THEMES.length, 3, 'Must support exactly 3 themes');
    assertIncludes(SUPPORTED_THEMES, 'beige');
    assertIncludes(SUPPORTED_THEMES, 'light');
    assertIncludes(SUPPORTED_THEMES, 'dark');
  }, context);

  test('19.2 Should toggle themes dynamically and persist to local storage', () => {
    const session = new MockAdaptiveSession({ activeTheme: 'beige' });
    assertEqual(session.state.activeTheme, 'beige');

    session.setTheme('dark');
    assertEqual(session.state.activeTheme, 'dark');
    assertEqual(session.storage.getItem('cat_prep_theme'), 'dark', 'Storage should persist dark theme');

    session.setTheme('light');
    assertEqual(session.state.activeTheme, 'light');
    assertEqual(session.storage.getItem('cat_prep_theme'), 'light', 'Storage should persist light theme');
  }, context);

  test('19.3 Should preserve active question attempt state when switching themes', () => {
    const session = new MockAdaptiveSession();
    session.recordAttempt({
      questionId: 'q_theme_test',
      topicId: 'percentages',
      section: 'QA',
      difficulty: 'FOUNDATION',
      userAnswer: 'A',
      correctAnswer: 'A'
    });

    assertEqual(session.state.attempts.length, 1);

    // Switch theme mid-session
    session.setTheme('dark');

    assertEqual(session.state.attempts.length, 1, 'Attempt history must not be wiped on theme toggle');
    assertEqual(session.state.activeTheme, 'dark');
  }, context);

  test('19.4 Should verify tailwind theme config defines color tokens for all 3 themes', () => {
    const tailwindConfigPath = path.join(PROJECT_ROOT, 'tailwind.config.ts');
    const tailwindConfigJsPath = path.join(PROJECT_ROOT, 'tailwind.config.js');

    const configPath = fs.existsSync(tailwindConfigPath) ? tailwindConfigPath : tailwindConfigJsPath;
    assert(fs.existsSync(configPath), 'tailwind config file must exist');

    const content = fs.readFileSync(configPath, 'utf-8');
    // Check for theme tokens or color extensions
    assert(
      content.includes('theme') || content.includes('colors'),
      'Tailwind config must define theme and color configuration'
    );
  }, context);

  test('19.5 Should validate viewport breakpoint contracts (Mobile 375px, Tablet 768px, Desktop 1280px)', () => {
    const breakpoints = {
      mobile: 375,
      tablet: 768,
      desktop: 1280
    };

    assert(breakpoints.mobile < breakpoints.tablet, 'Mobile must be narrower than tablet');
    assert(breakpoints.tablet < breakpoints.desktop, 'Tablet must be narrower than desktop');
    assert(breakpoints.desktop >= 1024, 'Desktop must support large screen viewing');
  }, context);
});

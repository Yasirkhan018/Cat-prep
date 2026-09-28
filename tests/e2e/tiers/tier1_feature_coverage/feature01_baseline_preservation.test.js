/**
 * Tier 1 — Feature 1: Baseline Preservation
 * Verifies preservation of existing routes, themes, formula book, subject hubs, and store.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertIncludes, PROJECT_ROOT } = require('../../framework/testHarness');
const { SUPPORTED_THEMES } = require('../../framework/contracts');

describe('Tier 1: Feature 1 — Baseline Preservation', () => {
  const context = { tier: 1, featureId: 1, featureName: 'Baseline Preservation' };

  test('1.1 Should preserve essential application routes and directory structure', () => {
    const requiredRoutes = [
      'src/app/page.tsx',
      'src/app/login',
      'src/app/onboarding',
      'src/app/formula-book',
      'src/app/practice',
      'src/app/progress',
      'src/app/pyq',
      'src/app/qa',
      'src/app/dilr',
      'src/app/varc'
    ];

    for (const route of requiredRoutes) {
      const fullPath = path.join(PROJECT_ROOT, route);
      assert(fs.existsSync(fullPath), `Expected legacy route to exist: ${route}`);
    }
  }, context);

  test('1.2 Should preserve support for all three baseline themes (Beige, Light, Dark)', () => {
    const themeContextPath = path.join(PROJECT_ROOT, 'src/lib/theme/ThemeContext.tsx');
    assert(fs.existsSync(themeContextPath), 'ThemeContext file must exist');
    const content = fs.readFileSync(themeContextPath, 'utf-8');

    for (const theme of SUPPORTED_THEMES) {
      assert(
        content.toLowerCase().includes(theme.toLowerCase()),
        `ThemeContext must support '${theme}' theme`
      );
    }
  }, context);

  test('1.3 Should preserve formula book content and structure for core subjects', () => {
    const formulaBookPath = path.join(PROJECT_ROOT, 'src/app/formula-book/page.tsx');
    assert(fs.existsSync(formulaBookPath), 'Formula book route must exist');
    const content = fs.readFileSync(formulaBookPath, 'utf-8');
    assert(content.includes('formula') || content.includes('Formula'), 'Formula book must define formula concepts');
  }, context);

  test('1.4 Should preserve legacy user application store interface and types', () => {
    const storePath = path.join(PROJECT_ROOT, 'src/lib/store/appStore.ts');
    assert(fs.existsSync(storePath), 'appStore.ts must exist');
    const content = fs.readFileSync(storePath, 'utf-8');
    assert(content.includes('UserProfile') || content.includes('user'), 'appStore must manage user profile state');
    assert(content.includes('progress') || content.includes('UserProgress'), 'appStore must manage progress state');
  }, context);

  test('1.5 Should preserve question type system (MCQ, TITA, RCSet, DILRSet)', () => {
    const typesPath = path.join(PROJECT_ROOT, 'src/lib/types.ts');
    assert(fs.existsSync(typesPath), 'src/lib/types.ts must exist');
    const content = fs.readFileSync(typesPath, 'utf-8');
    const requiredTypes = ['MCQ', 'TITA', 'RCSet', 'DILRSet'];
    for (const t of requiredTypes) {
      assert(content.includes(t), `Legacy types must support QuestionType '${t}'`);
    }
  }, context);
});

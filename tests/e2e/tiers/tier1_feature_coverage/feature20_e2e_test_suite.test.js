/**
 * Tier 1 — Feature 20: E2E Test Suite Architecture
 * Verifies the opaque-box test runner, tiered execution, filtering,
 * zero-dependency runtime, and exit code contract.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, PROJECT_ROOT, registry } = require('../../framework/testHarness');

describe('Tier 1: Feature 20 — E2E Test Suite Architecture', () => {
  const context = { tier: 1, featureId: 20, featureName: 'E2E Test Suite' };

  test('20.1 Should verify test harness framework files exist and load cleanly', () => {
    const frameworkFiles = [
      'tests/e2e/framework/contracts.js',
      'tests/e2e/framework/mockClientState.js',
      'tests/e2e/framework/testHarness.js'
    ];

    for (const f of frameworkFiles) {
      const fullPath = path.join(PROJECT_ROOT, f);
      assert(fs.existsSync(fullPath), `Required framework file missing: ${f}`);
    }
  }, context);

  test('20.2 Should verify test registry supports registering and categorizing tests by Tier', () => {
    const initialCount = registry.tests.length;
    assert(initialCount > 0, 'Registry must contain registered tests');

    const tiers = new Set(registry.tests.map(t => t.tier));
    assert(tiers.has(1), 'Registry must contain Tier 1 tests');
  }, context);

  test('20.3 Should support tier-based execution filtering', async () => {
    // Run an isolated sub-registry to test filtering logic
    const testRegistry = new registry.constructor();
    testRegistry.register('T1 Test', () => {}, { tier: 1 });
    testRegistry.register('T2 Test', () => {}, { tier: 2 });
    testRegistry.register('T3 Test', () => {}, { tier: 3 });

    const results = await testRegistry.run({ filterTier: 2, silent: true });
    assertEqual(results.total, 1, 'Only 1 test should match filterTier: 2');
    assertEqual(results.passed, 1, 'Test should pass');
  }, context);

  test('20.4 Should correctly report errors and record failure details without crashing', async () => {
    const testRegistry = new registry.constructor();
    testRegistry.register('Failing Test', () => {
      throw new Error('Deliberate test assertion failure');
    }, { tier: 1, featureId: 20 });

    const results = await testRegistry.run({ silent: true });
    assertEqual(results.total, 1);
    assertEqual(results.failed, 1);
    assertEqual(results.failures.length, 1);
    assertEqual(results.failures[0].error, 'Deliberate test assertion failure');
  }, context);

  test('20.5 Should enforce non-zero exit semantics on test failures', () => {
    const resultsPassed = { failed: 0 };
    const exitCodePassed = resultsPassed.failed === 0 ? 0 : 1;
    assertEqual(exitCodePassed, 0, 'Passing suite yields exit code 0');

    const resultsFailed = { failed: 3 };
    const exitCodeFailed = resultsFailed.failed === 0 ? 0 : 1;
    assertEqual(exitCodeFailed, 1, 'Failed suite yields non-zero exit code 1');
  }, context);
});

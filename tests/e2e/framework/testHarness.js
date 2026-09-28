/**
 * Lightweight, zero-dependency Test Harness for CAT Exam E2E Testing
 * Supports Tier & Feature grouping, TypeScript dynamic transpilation,
 * rich assertions, and multi-tier reporting.
 */

const fs = require('fs');
const path = require('path');

// ANSI Color Codes for Terminal Output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

class AssertionError extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.name = 'AssertionError';
    this.actual = actual;
    this.expected = expected;
  }
}

// Custom Assertions
const assert = (condition, message = 'Condition failed') => {
  if (!condition) {
    throw new AssertionError(message, condition, true);
  }
};

const assertEqual = (actual, expected, message) => {
  if (actual !== expected) {
    const msg = message || `Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`;
    throw new AssertionError(msg, actual, expected);
  }
};

const assertNotEqual = (actual, expected, message) => {
  if (actual === expected) {
    const msg = message || `Expected ${JSON.stringify(actual)} NOT to equal ${JSON.stringify(expected)}`;
    throw new AssertionError(msg, actual, expected);
  }
};

const assertDeepEqual = (actual, expected, message) => {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr !== expectedStr) {
    const msg = message || `Expected deep equality:\nActual:   ${actualStr}\nExpected: ${expectedStr}`;
    throw new AssertionError(msg, actual, expected);
  }
};

const assertGreaterOrEqual = (actual, min, message) => {
  if (actual < min) {
    const msg = message || `Expected ${actual} to be >= ${min}`;
    throw new AssertionError(msg, actual, min);
  }
};

const assertLessThanOrEqual = (actual, max, message) => {
  if (actual > max) {
    const msg = message || `Expected ${actual} to be <= ${max}`;
    throw new AssertionError(msg, actual, max);
  }
};

const assertInRange = (val, min, max, message) => {
  if (val < min || val > max) {
    const msg = message || `Expected ${val} to be in range [${min}, ${max}]`;
    throw new AssertionError(msg, val, { min, max });
  }
};

const assertIncludes = (haystack, needle, message) => {
  let found = false;
  if (Array.isArray(haystack) || typeof haystack === 'string') {
    found = haystack.includes(needle);
  } else if (haystack && typeof haystack === 'object') {
    found = needle in haystack;
  }
  if (!found) {
    const msg = message || `Expected ${JSON.stringify(haystack)} to include ${JSON.stringify(needle)}`;
    throw new AssertionError(msg, haystack, needle);
  }
};

const assertMatches = (val, regex, message) => {
  if (!regex.test(String(val))) {
    const msg = message || `Expected ${JSON.stringify(val)} to match pattern ${regex}`;
    throw new AssertionError(msg, val, regex);
  }
};

const assertThrows = (fn, expectedErrMsgOrRegex, message) => {
  let threw = false;
  let errorCaught = null;
  try {
    fn();
  } catch (err) {
    threw = true;
    errorCaught = err;
  }
  if (!threw) {
    throw new AssertionError(message || 'Expected function to throw, but it succeeded', null, 'Exception');
  }
  if (expectedErrMsgOrRegex) {
    const errStr = errorCaught.message || String(errorCaught);
    if (expectedErrMsgOrRegex instanceof RegExp) {
      if (!expectedErrMsgOrRegex.test(errStr)) {
        throw new AssertionError(`Caught error "${errStr}" did not match regex ${expectedErrMsgOrRegex}`);
      }
    } else if (typeof expectedErrMsgOrRegex === 'string') {
      if (!errStr.includes(expectedErrMsgOrRegex)) {
        throw new AssertionError(`Caught error "${errStr}" did not include "${expectedErrMsgOrRegex}"`);
      }
    }
  }
};

// TypeScript & Module Loader
const PROJECT_ROOT = path.resolve(__dirname, '../../..');

let tsCompiler = null;
function getTsCompiler() {
  if (!tsCompiler) {
    try {
      tsCompiler = require('typescript');
    } catch (e) {
      // Fallback if not available
      tsCompiler = null;
    }
  }
  return tsCompiler;
}

function loadModule(relativePath) {
  const fullPath = path.isAbsolute(relativePath) ? relativePath : path.resolve(PROJECT_ROOT, relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new AssertionError(
      `Required module not found at: ${relativePath}. This feature is pending implementation.`,
      false,
      true
    );
  }

  const ext = path.extname(fullPath).toLowerCase();

  if (ext === '.json') {
    return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  }

  if (ext === '.js') {
    delete require.cache[require.resolve(fullPath)];
    return require(fullPath);
  }

  if (ext === '.ts' || ext === '.tsx') {
    const ts = getTsCompiler();
    if (!ts) {
      throw new Error(`TypeScript compiler not found in node_modules to evaluate ${relativePath}`);
    }
    const code = fs.readFileSync(fullPath, 'utf-8');
    const transpiled = ts.transpileModule(code, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true
      }
    });

    const mod = { exports: {} };
    const dirname = path.dirname(fullPath);
    const customRequire = (reqPath) => {
      if (reqPath.startsWith('.')) {
        const resolved = path.resolve(dirname, reqPath);
        if (fs.existsSync(resolved + '.ts')) return loadModule(resolved + '.ts');
        if (fs.existsSync(resolved + '.tsx')) return loadModule(resolved + '.tsx');
        if (fs.existsSync(resolved + '.js')) return loadModule(resolved + '.js');
        if (fs.existsSync(resolved + '.json')) return loadModule(resolved + '.json');
        if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
          if (fs.existsSync(path.join(resolved, 'index.ts'))) return loadModule(path.join(resolved, 'index.ts'));
          if (fs.existsSync(path.join(resolved, 'index.js'))) return loadModule(path.join(resolved, 'index.js'));
        }
      }
      return require(reqPath);
    };

    const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', transpiled.outputText);
    fn(mod, mod.exports, customRequire, dirname, fullPath);
    return mod.exports;
  }

  return fs.readFileSync(fullPath, 'utf-8');
}

// Test Registry
class TestRegistry {
  constructor() {
    this.tests = [];
    this.currentContext = {
      tier: 1,
      featureId: 1,
      featureName: 'General',
      suiteName: 'Default'
    };
  }

  setContext(ctx) {
    this.currentContext = { ...this.currentContext, ...ctx };
  }

  register(title, fn, options = {}) {
    this.tests.push({
      id: `test_${this.tests.length + 1}`,
      title,
      fn,
      tier: options.tier || this.currentContext.tier,
      featureId: options.featureId !== undefined ? options.featureId : this.currentContext.featureId,
      featureName: options.featureName || this.currentContext.featureName,
      suiteName: options.suiteName || this.currentContext.suiteName,
      status: 'UNRUN',
      error: null,
      durationMs: 0
    });
  }

  async run(options = {}) {
    const {
      filterTier,
      filterFeature,
      filterQuery,
      bail = false,
      silent = false
    } = options;

    let targetTests = this.tests;

    if (filterTier !== undefined) {
      targetTests = targetTests.filter(t => Number(t.tier) === Number(filterTier));
    }

    if (filterFeature !== undefined) {
      targetTests = targetTests.filter(t => Number(t.featureId) === Number(filterFeature));
    }

    if (filterQuery) {
      const q = String(filterQuery).toLowerCase();
      targetTests = targetTests.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.suiteName.toLowerCase().includes(q) ||
        t.featureName.toLowerCase().includes(q)
      );
    }

    const results = {
      total: targetTests.length,
      passed: 0,
      failed: 0,
      skipped: 0,
      startTime: Date.now(),
      endTime: 0,
      durationMs: 0,
      byTier: {},
      byFeature: {},
      failures: []
    };

    if (!silent) {
      console.log(`\n${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════${colors.reset}`);
      console.log(`${colors.bright}${colors.cyan} CAT PREPARATION PLATFORM — E2E TEST RUNNER${colors.reset}`);
      console.log(`${colors.bright}${colors.cyan} Opaque-box Requirement-Driven Verification (Tiers 1-4)${colors.reset}`);
      console.log(`${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════${colors.reset}\n`);
      console.log(`Discovered ${colors.bright}${targetTests.length}${colors.reset} test cases to execute.\n`);
    }

    let currentTier = null;
    let currentFeature = null;

    for (const testCase of targetTests) {
      if (!silent) {
        if (testCase.tier !== currentTier) {
          currentTier = testCase.tier;
          console.log(`\n${colors.bright}${colors.blue}▶ TIER ${currentTier}: ${getTierTitle(currentTier)}${colors.reset}`);
        }
        if (testCase.featureId !== currentFeature && testCase.featureId) {
          currentFeature = testCase.featureId;
          console.log(`  ${colors.bright}${colors.yellow}Feature ${currentFeature}: ${testCase.featureName}${colors.reset}`);
        }
      }

      // Initialize aggregation buckets
      const tierKey = `Tier ${testCase.tier}`;
      if (!results.byTier[tierKey]) results.byTier[tierKey] = { total: 0, passed: 0, failed: 0 };
      results.byTier[tierKey].total++;

      const featKey = testCase.featureId ? `Feature ${testCase.featureId}: ${testCase.featureName}` : 'Cross-Feature';
      if (!results.byFeature[featKey]) results.byFeature[featKey] = { total: 0, passed: 0, failed: 0 };
      results.byFeature[featKey].total++;

      const testStart = Date.now();
      try {
        await testCase.fn();
        testCase.durationMs = Date.now() - testStart;
        testCase.status = 'PASS';
        results.passed++;
        results.byTier[tierKey].passed++;
        results.byFeature[featKey].passed++;

        if (!silent) {
          console.log(`    ${colors.green}✓${colors.reset} ${testCase.title} ${colors.gray}(${testCase.durationMs}ms)${colors.reset}`);
        }
      } catch (err) {
        testCase.durationMs = Date.now() - testStart;
        testCase.status = 'FAIL';
        testCase.error = err;
        results.failed++;
        results.byTier[tierKey].failed++;
        results.byFeature[featKey].failed++;
        results.failures.push({
          id: testCase.id,
          title: testCase.title,
          tier: testCase.tier,
          featureId: testCase.featureId,
          featureName: testCase.featureName,
          error: err.message || String(err),
          stack: err.stack
        });

        if (!silent) {
          console.log(`    ${colors.red}✗${colors.reset} ${testCase.title} ${colors.gray}(${testCase.durationMs}ms)${colors.reset}`);
          console.log(`      ${colors.red}Error: ${err.message}${colors.reset}`);
        }

        if (bail) {
          if (!silent) console.log(`\n${colors.red}Bailing after first failure...${colors.reset}`);
          break;
        }
      }
    }

    results.endTime = Date.now();
    results.durationMs = results.endTime - results.startTime;

    if (!silent) {
      this.printSummary(results);
    }

    return results;
  }

  printSummary(results) {
    console.log(`\n${colors.bright}══════════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.bright} EXECUTION SUMMARY${colors.reset}`);
    console.log(`${colors.bright}══════════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`Total Tests Run:  ${colors.bright}${results.total}${colors.reset}`);
    console.log(`Passed:           ${colors.green}${results.passed}${colors.reset}`);
    console.log(`Failed:           ${results.failed > 0 ? colors.red : colors.green}${results.failed}${colors.reset}`);
    console.log(`Duration:         ${results.durationMs}ms\n`);

    console.log(`${colors.bright}Breakdown by Tier:${colors.reset}`);
    for (const [tier, stats] of Object.entries(results.byTier)) {
      const passRate = stats.total > 0 ? Math.round((stats.passed / stats.total) * 100) : 0;
      const col = stats.failed === 0 ? colors.green : colors.yellow;
      console.log(`  • ${tier.padEnd(20)}: ${stats.passed}/${stats.total} passed (${col}${passRate}%${colors.reset})`);
    }

    if (results.failures.length > 0) {
      console.log(`\n${colors.bright}${colors.red}Failed Tests (${results.failures.length}):${colors.reset}`);
      results.failures.forEach((f, idx) => {
        console.log(`  ${idx + 1}. [Tier ${f.tier}] ${f.featureName} -> ${f.title}`);
        console.log(`     ${colors.gray}Error: ${f.error}${colors.reset}`);
      });
    }

    console.log(`\n${colors.bright}══════════════════════════════════════════════════════════════════${colors.reset}\n`);
  }
}

function getTierTitle(tier) {
  switch (Number(tier)) {
    case 1: return 'Feature Coverage (>=5 test cases per feature across all 22 features)';
    case 2: return 'Boundary & Corner Cases (thresholds, edge states, limits)';
    case 3: return 'Cross-Feature Combinations (pairwise interaction testing)';
    case 4: return 'Real-World Student Workflows (complete user journeys)';
    default: return `Tier ${tier}`;
  }
}

// Global Registry Singleton
const registry = new TestRegistry();

function describe(suiteName, fn) {
  registry.setContext({ suiteName });
  fn();
}

function test(title, fn, options) {
  registry.register(title, fn, options);
}

const it = test;

module.exports = {
  registry,
  describe,
  test,
  it,
  assert,
  assertEqual,
  assertNotEqual,
  assertDeepEqual,
  assertGreaterOrEqual,
  assertLessThanOrEqual,
  assertInRange,
  assertIncludes,
  assertMatches,
  assertThrows,
  loadModule,
  PROJECT_ROOT
};

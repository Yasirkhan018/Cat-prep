#!/usr/bin/env node
/**
 * Unified E2E Test Suite Runner for CAT Exam Preparation Platform
 * 
 * Executes requirement-driven test verification across all four tiers:
 *   Tier 1: Feature Coverage (Features 1 - 22)
 *   Tier 2: Boundary & Corner Cases (Boundary 1 - 6)
 *   Tier 3: Cross-Feature Interaction Pipelines (Cross 1 - 3)
 *   Tier 4: Real-World Application Workflows (Workflow 1 - 3)
 * 
 * Usage:
 *   node tests/e2e/runner.js [options]
 * 
 * Options:
 *   --tier <1-4>       Filter tests by tier number
 *   --feature <id>     Filter tests by feature/suite ID
 *   --query <string>   Filter tests matching substring in title or suite
 *   --bail             Stop execution immediately upon first failure
 *   --silent           Suppress per-test execution logging
 *   --help             Display command line help
 */

const fs = require('fs');
const path = require('path');
const { registry } = require('./framework/testHarness');

// ANSI Color Codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  white: '\x1b[37m'
};

function parseArgs(argv) {
  const options = {
    filterTier: undefined,
    filterFeature: undefined,
    filterQuery: undefined,
    bail: false,
    silent: false
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      console.log(`
${colors.bright}${colors.cyan}CAT Exam Preparation Platform — E2E Test Runner${colors.reset}

${colors.bright}Usage:${colors.reset}
  node tests/e2e/runner.js [options]

${colors.bright}Options:${colors.reset}
  --tier <1|2|3|4>     Run tests exclusively from the specified tier
  --feature <id>       Run tests for a specific feature ID (e.g. 1, 4, 101)
  --query <string>     Filter tests containing substring in title or suite
  --bail               Halt execution on the first assertion failure
  --silent             Suppress individual test pass/fail output
  --help, -h           Show this help message
`);
      process.exit(0);
    } else if (arg === '--tier' && argv[i + 1]) {
      options.filterTier = Number(argv[++i]);
    } else if (arg === '--feature' && argv[i + 1]) {
      options.filterFeature = Number(argv[++i]);
    } else if (arg === '--query' && argv[i + 1]) {
      options.filterQuery = argv[++i];
    } else if (arg === '--bail') {
      options.bail = true;
    } else if (arg === '--silent') {
      options.silent = true;
    }
  }

  return options;
}

function discoverTestFiles(tiersDir) {
  const testFiles = [];

  const tierFolders = [
    'tier1_feature_coverage',
    'tier2_boundary',
    'tier3_cross_feature',
    'tier4_real_world'
  ];

  for (const folder of tierFolders) {
    const fullFolderPath = path.join(tiersDir, folder);
    if (fs.existsSync(fullFolderPath)) {
      const entries = fs.readdirSync(fullFolderPath, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith('.test.js')) {
          testFiles.push(path.join(fullFolderPath, entry.name));
        }
      }
    }
  }

  return testFiles.sort();
}

function renderTable(headers, rows) {
  const colWidths = headers.map((h, i) => {
    let max = h.length;
    for (const row of rows) {
      const cell = String(row[i] || '').replace(/\x1b\[[0-9;]*m/g, '');
      if (cell.length > max) max = cell.length;
    }
    return max + 2;
  });

  const hr = '+' + colWidths.map(w => '-'.repeat(w)).join('+') + '+';

  const formatRow = (cells, isHeader = false) => {
    const formatted = cells.map((c, i) => {
      const raw = String(c).replace(/\x1b\[[0-9;]*m/g, '');
      const pad = ' '.repeat(colWidths[i] - raw.length - 1);
      return ' ' + c + pad;
    }).join('|');
    return '|' + formatted + '|';
  };

  console.log(hr);
  console.log(formatRow(headers.map(h => `${colors.bright}${h}${colors.reset}`), true));
  console.log(hr);
  for (const row of rows) {
    console.log(formatRow(row));
  }
  console.log(hr);
}

async function main() {
  const options = parseArgs(process.argv);
  const tiersDir = path.resolve(__dirname, 'tiers');

  const testFiles = discoverTestFiles(tiersDir);

  if (testFiles.length === 0) {
    console.error(`${colors.red}Error: No test files discovered in ${tiersDir}${colors.reset}`);
    process.exit(1);
  }

  // Load all test files into the registry
  for (const file of testFiles) {
    try {
      require(file);
    } catch (err) {
      console.error(`${colors.red}Failed to load test suite: ${file}${colors.reset}`);
      console.error(err);
      process.exit(1);
    }
  }

  const results = await registry.run(options);

  // Render comprehensive summary table
  console.log(`\n${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan} COMPLETE E2E TEST MATRIX SUMMARY (TIERS 1 - 4)${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════════${colors.reset}\n`);

  const headers = ['Tier', 'Scope / Classification', 'Total', 'Passed', 'Failed', 'Pass Rate', 'Status'];
  const tierDescriptions = {
    'Tier 1': 'Feature Coverage (Features 1-22)',
    'Tier 2': 'Boundary & Corner Cases (B1-B6)',
    'Tier 3': 'Cross-Feature Integration (X1-X3)',
    'Tier 4': 'Real-World Workflows (W1-W3)'
  };

  const tableRows = [];
  const knownTiers = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'];

  for (const tierKey of knownTiers) {
    const stats = results.byTier[tierKey] || { total: 0, passed: 0, failed: 0 };
    const desc = tierDescriptions[tierKey] || 'Other';
    const rate = stats.total > 0 ? Math.round((stats.passed / stats.total) * 100) : 0;
    const rateStr = `${rate}%`;
    const statusStr = stats.total > 0 && stats.failed === 0
      ? `${colors.green}PASS${colors.reset}`
      : stats.total === 0
        ? `${colors.dim}SKIPPED${colors.reset}`
        : `${colors.red}FAIL${colors.reset}`;

    tableRows.push([
      tierKey,
      desc,
      String(stats.total),
      `${colors.green}${stats.passed}${colors.reset}`,
      stats.failed > 0 ? `${colors.red}${stats.failed}${colors.reset}` : '0',
      rateStr,
      statusStr
    ]);
  }

  // Totals row
  const overallRate = results.total > 0 ? Math.round((results.passed / results.total) * 100) : 0;
  const overallStatus = results.failed === 0 ? `${colors.green}${colors.bright}ALL PASSED${colors.reset}` : `${colors.red}${colors.bright}FAILED${colors.reset}`;
  tableRows.push([
    `${colors.bright}TOTAL${colors.reset}`,
    `${colors.bright}All 4 Tiers Unified${colors.reset}`,
    `${colors.bright}${results.total}${colors.reset}`,
    `${colors.green}${results.passed}${colors.reset}`,
    results.failed > 0 ? `${colors.red}${results.failed}${colors.reset}` : '0',
    `${colors.bright}${overallRate}%${colors.reset}`,
    overallStatus
  ]);

  renderTable(headers, tableRows);

  console.log(`\nExecution finished in ${colors.bright}${results.durationMs}ms${colors.reset}.`);

  if (results.failed > 0) {
    console.error(`\n${colors.red}${colors.bright}FAILURE: ${results.failed} test(s) failed out of ${results.total}.${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}SUCCESS: All ${results.total} E2E tests across Tiers 1-4 passed with zero regressions.${colors.reset}\n`);
    process.exit(0);
  }
}

if (require.main === module) {
  main().catch(err => {
    console.error(`${colors.red}Unhandled test runner error:${colors.reset}`, err);
    process.exit(1);
  });
}

module.exports = { main, discoverTestFiles };

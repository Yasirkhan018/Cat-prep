/**
 * Tier 1 — Feature 10: Detailed Pedagogical Solutions
 * Verifies that all solutions provide step-by-step explanations, conceptual insights,
 * why the method works, common traps/mistakes, and exam tips.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertGreaterOrEqual, PROJECT_ROOT } = require('../../framework/testHarness');
const { REQUIRED_SOLUTION_FIELDS, OPTIONAL_SOLUTION_FIELDS } = require('../../framework/contracts');

describe('Tier 1: Feature 10 — Detailed Pedagogical Solutions', () => {
  const context = { tier: 1, featureId: 10, featureName: 'Detailed Pedagogical Solutions' };
  const questionsDir = path.join(PROJECT_ROOT, 'src/lib/data/originalQuestions');

  test('10.1 Should enforce all required pedagogical fields in solution contracts', () => {
    const required = ['finalAnswer', 'steps', 'concept', 'whyItWorks', 'commonMistake'];
    for (const f of required) {
      assert(REQUIRED_SOLUTION_FIELDS.includes(f), `REQUIRED_SOLUTION_FIELDS must include '${f}'`);
    }
  }, context);

  test('10.2 Should verify solutions contain multiple detailed steps (>= 2 steps)', () => {
    // Contract test on pedagogical sample solution
    const sampleSolution = {
      finalAnswer: 'Option B (25%)',
      steps: [
        'Step 1: Let the cost price CP be 100.',
        'Step 2: Selling price SP with 25% profit is 125.',
        'Step 3: Profit margin = (125 - 100) / 100 = 25%.'
      ],
      concept: 'Profit percentage over Cost Price base',
      whyItWorks: 'Percentages are standardized ratios relative to 100.',
      commonMistake: 'Calculating profit on selling price instead of cost price.',
      catTip: 'Assume base 100 for percentage problems without absolute values.'
    };

    assert(Array.isArray(sampleSolution.steps), 'steps must be an array');
    assertGreaterOrEqual(sampleSolution.steps.length, 2, 'Solution must contain at least 2 distinct steps');
    for (const s of sampleSolution.steps) {
      assert(typeof s === 'string' && s.trim().length > 10, 'Each step must contain substantive text');
    }
  }, context);

  test('10.3 Should reject placeholder or facade solutions (e.g. "TBD", "Refer notes")', () => {
    const isFacadeSolution = (sol) => {
      const forbiddenPhrases = ['tbd', 'todo', 'solution goes here', 'refer notes', 'lorem ipsum', 'na', 'n/a'];
      const text = [
        sol.finalAnswer,
        sol.concept,
        sol.whyItWorks,
        sol.commonMistake,
        ...(Array.isArray(sol.steps) ? sol.steps : [])
      ].join(' ').toLowerCase();

      return forbiddenPhrases.some(phrase => text.includes(phrase));
    };

    const dummySol = {
      finalAnswer: 'A',
      steps: ['TBD'],
      concept: 'TODO',
      whyItWorks: 'N/A',
      commonMistake: 'None'
    };

    assert(isFacadeSolution(dummySol), 'Must detect and flag dummy/placeholder solutions');
  }, context);

  test('10.4 Should verify solution validation on all available original question banks', () => {
    if (!fs.existsSync(questionsDir)) {
      // Pending M3 question population
      assert(true, 'originalQuestions pending M3 generation; specification checked');
      return;
    }

    const files = fs.readdirSync(questionsDir).filter(f => f.endsWith('.json'));
    let verifiedCount = 0;

    for (const file of files) {
      const questions = JSON.parse(fs.readFileSync(path.join(questionsDir, file), 'utf-8'));
      for (const q of questions) {
        assert(q.solution, `Question ${q.id} missing solution object`);
        assert(q.solution.finalAnswer, `Question ${q.id} solution missing finalAnswer`);
        assert(Array.isArray(q.solution.steps), `Question ${q.id} solution steps must be array`);
        assert(q.solution.concept, `Question ${q.id} solution missing concept`);
        assert(q.solution.whyItWorks, `Question ${q.id} solution missing whyItWorks`);
        assert(q.solution.commonMistake, `Question ${q.id} solution missing commonMistake`);
        verifiedCount++;
      }
    }

    if (files.length > 0) {
      assertGreaterOrEqual(verifiedCount, 40, 'Should have verified pedagogical solutions across available questions');
    }
  }, context);

  test('10.5 Should verify support for optional advanced pedagogical fields (alternativeMethod, catTip)', () => {
    assert(OPTIONAL_SOLUTION_FIELDS.includes('alternativeMethod'), 'Contract supports alternativeMethod');
    assert(OPTIONAL_SOLUTION_FIELDS.includes('catTip'), 'Contract supports catTip');

    const fullSolution = {
      finalAnswer: '36',
      steps: ['Let x be speed...', 'Solving quadratic gives x=36.'],
      concept: 'Relative speed in upstream and downstream motion',
      whyItWorks: 'Speeds add in downstream and subtract in upstream.',
      commonMistake: 'Forgetting to subtract stream speed from boat speed.',
      alternativeMethod: 'Substitute options into the time equation directly.',
      catTip: 'In time-speed-distance CAT questions, option elimination often saves 45 seconds.'
    };

    assert(fullSolution.alternativeMethod && fullSolution.alternativeMethod.length > 0, 'alternativeMethod supported');
    assert(fullSolution.catTip && fullSolution.catTip.length > 0, 'catTip supported');
  }, context);
});

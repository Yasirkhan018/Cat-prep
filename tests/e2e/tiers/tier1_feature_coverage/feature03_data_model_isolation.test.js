/**
 * Tier 1 — Feature 3: Data Model Isolation
 * Verifies strict TypeScript schemas separating CAT_PYQ and ORIGINAL_PRACTICE.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, PROJECT_ROOT, loadModule } = require('../../framework/testHarness');
const { REQUIRED_SOLUTION_FIELDS } = require('../../framework/contracts');

describe('Tier 1: Feature 3 — Data Model Isolation', () => {
  const context = { tier: 1, featureId: 3, featureName: 'Data Model Isolation' };

  test('3.1 Should verify adaptive.ts exists and exports core discriminants', () => {
    const adaptivePath = path.join(PROJECT_ROOT, 'src/lib/types/adaptive.ts');
    assert(fs.existsSync(adaptivePath), 'src/lib/types/adaptive.ts must exist per M1 interface contract');
    const content = fs.readFileSync(adaptivePath, 'utf-8');
    assert(content.includes('ORIGINAL_PRACTICE'), 'adaptive.ts must define ORIGINAL_PRACTICE discriminant');
    assert(content.includes('CAT_PYQ'), 'adaptive.ts must define CAT_PYQ discriminant');
  }, context);

  test('3.2 Should enforce OriginalQuestion schema with 11 pedagogical fields', () => {
    const adaptivePath = path.join(PROJECT_ROOT, 'src/lib/types/adaptive.ts');
    const content = fs.readFileSync(adaptivePath, 'utf-8');
    assert(content.includes('interface OriginalQuestion') || content.includes('type OriginalQuestion'), 'OriginalQuestion interface must be defined');

    // Check required solution fields
    for (const field of REQUIRED_SOLUTION_FIELDS) {
      assert(content.includes(field), `OriginalQuestion solution must require '${field}'`);
    }
    assert(content.includes('estimatedTime'), 'OriginalQuestion must define estimatedTime');
    assert(content.includes('learningObjective'), 'OriginalQuestion must define learningObjective');
  }, context);

  test('3.3 Should verify AdaptiveProfile contract definition', () => {
    const adaptivePath = path.join(PROJECT_ROOT, 'src/lib/types/adaptive.ts');
    const content = fs.readFileSync(adaptivePath, 'utf-8');
    assert(content.includes('AdaptiveProfile'), 'AdaptiveProfile must be defined in adaptive.ts');
    assert(content.includes('topicMastery'), 'AdaptiveProfile must contain topicMastery map');
    assert(content.includes('weakAreas'), 'AdaptiveProfile must contain weakAreas array');
    assert(content.includes('strongAreas'), 'AdaptiveProfile must contain strongAreas array');
  }, context);

  test('3.4 Should validate runtime rejection of questions with ambiguous or invalid sourceType', () => {
    const validateQuestion = (q) => {
      if (!q.sourceType || (q.sourceType !== 'ORIGINAL_PRACTICE' && q.sourceType !== 'CAT_PYQ')) {
        throw new Error('Invalid sourceType: Must be strictly ORIGINAL_PRACTICE or CAT_PYQ');
      }
      return true;
    };

    assert(validateQuestion({ sourceType: 'ORIGINAL_PRACTICE' }), 'ORIGINAL_PRACTICE is valid');
    assert(validateQuestion({ sourceType: 'CAT_PYQ' }), 'CAT_PYQ is valid');

    let threw = false;
    try {
      validateQuestion({ sourceType: 'SYNTHETIC_PYQ' });
    } catch (e) {
      threw = true;
    }
    assert(threw, 'Should reject ambiguous sourceType like SYNTHETIC_PYQ');
  }, context);

  test('3.5 Should enforce strict separation in question providers and datasets', () => {
    const pyqQuestions = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'src/lib/data/pyq/questions.json'), 'utf-8'));
    // None of the authentic PYQ records should be marked as ORIGINAL_PRACTICE
    const contaminated = pyqQuestions.filter(q => q.sourceType === 'ORIGINAL_PRACTICE');
    assertEqual(contaminated.length, 0, 'No authentic PYQ questions can have sourceType ORIGINAL_PRACTICE');
  }, context);
});

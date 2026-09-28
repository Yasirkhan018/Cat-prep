/**
 * Tier 2 — Boundary 2: Mastery Gates Thresholds
 * Tests precise threshold percentage boundaries for difficulty tier progression:
 * - 69% (fail) vs 70% (pass) for Foundation -> Easy
 * - 74% (fail) vs 75% (pass) for Easy -> Moderate and Moderate -> Intermediate
 * - 79% (fail) vs 80% (pass) for Intermediate -> CAT_LEVEL
 * - 100% boundary cap and 0% floor
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MASTERY_GATES } = require('../../framework/contracts');

function evaluateProgression(currentTier, accuracyPercentage) {
  if (currentTier === 'FOUNDATION') {
    return accuracyPercentage >= MASTERY_GATES.FOUNDATION_TO_EASY ? 'EASY' : 'FOUNDATION';
  }
  if (currentTier === 'EASY') {
    return accuracyPercentage >= MASTERY_GATES.EASY_TO_MODERATE ? 'MODERATE' : 'EASY';
  }
  if (currentTier === 'MODERATE') {
    return accuracyPercentage >= MASTERY_GATES.MODERATE_TO_INTERMEDIATE ? 'INTERMEDIATE' : 'MODERATE';
  }
  if (currentTier === 'INTERMEDIATE') {
    return accuracyPercentage >= MASTERY_GATES.INTERMEDIATE_TO_CAT_LEVEL ? 'CAT_LEVEL' : 'INTERMEDIATE';
  }
  return currentTier;
}

describe('Tier 2: Boundary 2 — Mastery Gates Thresholds', () => {
  const context = { tier: 2, featureId: 14, featureName: 'Mastery Gates Thresholds' };

  test('B2.1 Should verify Foundation to Easy threshold at exactly 69% vs 70%', () => {
    assertEqual(evaluateProgression('FOUNDATION', 69), 'FOUNDATION', '69% must not unlock EASY');
    assertEqual(evaluateProgression('FOUNDATION', 70), 'EASY', '70% must unlock EASY');
    assertEqual(evaluateProgression('FOUNDATION', 71), 'EASY', '71% must unlock EASY');
  }, context);

  test('B2.2 Should verify Easy to Moderate threshold at exactly 74% vs 75%', () => {
    assertEqual(evaluateProgression('EASY', 74), 'EASY', '74% must not unlock MODERATE');
    assertEqual(evaluateProgression('EASY', 75), 'MODERATE', '75% must unlock MODERATE');
    assertEqual(evaluateProgression('EASY', 76), 'MODERATE', '76% must unlock MODERATE');
  }, context);

  test('B2.3 Should verify Moderate to Intermediate threshold at exactly 74% vs 75%', () => {
    assertEqual(evaluateProgression('MODERATE', 74), 'MODERATE', '74% must not unlock INTERMEDIATE');
    assertEqual(evaluateProgression('MODERATE', 75), 'INTERMEDIATE', '75% must unlock INTERMEDIATE');
  }, context);

  test('B2.4 Should verify Intermediate to CAT_LEVEL threshold at exactly 79% vs 80%', () => {
    assertEqual(evaluateProgression('INTERMEDIATE', 79), 'INTERMEDIATE', '79% must not unlock CAT_LEVEL');
    assertEqual(evaluateProgression('INTERMEDIATE', 80), 'CAT_LEVEL', '80% must unlock CAT_LEVEL');
  }, context);

  test('B2.5 Should safely handle 0% floor and 100% ceiling accuracy values', () => {
    assertEqual(evaluateProgression('FOUNDATION', 0), 'FOUNDATION', '0% remains Foundation');
    assertEqual(evaluateProgression('INTERMEDIATE', 100), 'CAT_LEVEL', '100% unlocks CAT_LEVEL');
    assertEqual(evaluateProgression('CAT_LEVEL', 100), 'CAT_LEVEL', '100% at ceiling stays CAT_LEVEL');
  }, context);
});

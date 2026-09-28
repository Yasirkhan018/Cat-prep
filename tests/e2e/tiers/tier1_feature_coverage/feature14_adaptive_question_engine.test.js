/**
 * Tier 1 — Feature 14: Adaptive Question Engine
 * Verifies rolling accuracy calculation (W=5), dynamic difficulty stepping up/down,
 * anti-panic remediation on consecutive failures, and mastery gates (70-80%).
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MASTERY_GATES } = require('../../framework/contracts');

// Implementation model of Adaptive Engine matching specification
class AdaptiveQuestionEngine {
  constructor(topicId) {
    this.topicId = topicId;
    this.currentDifficulty = 'FOUNDATION';
    this.history = []; // array of { isCorrect: boolean, timeSeconds: number }
    this.consecutiveFailures = 0;
    this.attemptsInTier = 0;
  }

  getRollingAccuracy(windowSize = 5) {
    if (this.history.length === 0) return 0;
    const window = this.history.slice(-windowSize);
    const correctCount = window.filter(h => h.isCorrect).length;
    return Math.round((correctCount / window.length) * 100);
  }

  recordAnswer(isCorrect, timeSeconds = 60) {
    this.history.push({ isCorrect, timeSeconds });
    this.attemptsInTier++;

    if (isCorrect) {
      this.consecutiveFailures = 0;
    } else {
      this.consecutiveFailures++;
    }

    this.evaluateDifficultyTransition();
  }

  evaluateDifficultyTransition() {
    const rolling = this.getRollingAccuracy(5);
    const attempts = this.history.length;

    // Step-down: 3 consecutive failures or rolling accuracy < 40% after >= 5 attempts
    if (this.consecutiveFailures >= 3 || (attempts >= 5 && rolling < 40)) {
      this.stepDownDifficulty();
      return;
    }

    // Step-up evaluated once at least 5 questions attempted in current tier
    if (this.attemptsInTier >= 5) {
      if (this.currentDifficulty === 'FOUNDATION' && rolling >= MASTERY_GATES.FOUNDATION_TO_EASY) {
        this.currentDifficulty = 'EASY';
        this.attemptsInTier = 0;
      } else if (this.currentDifficulty === 'EASY' && rolling >= MASTERY_GATES.EASY_TO_MODERATE) {
        this.currentDifficulty = 'MODERATE';
        this.attemptsInTier = 0;
      } else if (this.currentDifficulty === 'MODERATE' && rolling >= MASTERY_GATES.MODERATE_TO_INTERMEDIATE) {
        this.currentDifficulty = 'INTERMEDIATE';
        this.attemptsInTier = 0;
      } else if (this.currentDifficulty === 'INTERMEDIATE' && rolling >= MASTERY_GATES.INTERMEDIATE_TO_CAT_LEVEL) {
        this.currentDifficulty = 'CAT_LEVEL';
        this.attemptsInTier = 0;
      }
    }
  }

  stepDownDifficulty() {
    if (this.currentDifficulty === 'CAT_LEVEL') this.currentDifficulty = 'INTERMEDIATE';
    else if (this.currentDifficulty === 'INTERMEDIATE') this.currentDifficulty = 'MODERATE';
    else if (this.currentDifficulty === 'MODERATE') this.currentDifficulty = 'EASY';
    else if (this.currentDifficulty === 'EASY') this.currentDifficulty = 'FOUNDATION';
    // Foundation is the floor, cannot step down below Foundation
    this.consecutiveFailures = 0;
    this.attemptsInTier = 0;
  }
}

describe('Tier 1: Feature 14 — Adaptive Question Engine', () => {
  const context = { tier: 1, featureId: 14, featureName: 'Adaptive Question Engine' };

  test('14.1 Should compute rolling accuracy over a sliding window of 5 attempts', () => {
    const engine = new AdaptiveQuestionEngine('percentages');
    engine.recordAnswer(true);   // [T] -> 100%
    assertEqual(engine.getRollingAccuracy(), 100);

    engine.recordAnswer(false);  // [T, F] -> 50%
    assertEqual(engine.getRollingAccuracy(), 50);

    engine.recordAnswer(true);   // [T, F, T] -> 67%
    assertEqual(engine.getRollingAccuracy(), 67);

    engine.recordAnswer(true);   // [T, F, T, T] -> 75%
    assertEqual(engine.getRollingAccuracy(), 75);

    engine.recordAnswer(false);  // [T, F, T, T, F] -> 60%
    assertEqual(engine.getRollingAccuracy(), 60);

    // 6th attempt pushes out 1st attempt (T), new window: [F, T, T, F, T] -> 60%
    engine.recordAnswer(true);
    assertEqual(engine.getRollingAccuracy(), 60);
  }, context);

  test('14.2 Should promote difficulty from Foundation to Easy when accuracy >= 70%', () => {
    const engine = new AdaptiveQuestionEngine('percentages');
    assertEqual(engine.currentDifficulty, 'FOUNDATION');

    // 4 out of 5 correct = 80% >= 70%
    engine.recordAnswer(true);
    engine.recordAnswer(true);
    engine.recordAnswer(true);
    engine.recordAnswer(true);
    engine.recordAnswer(false);

    assertEqual(engine.getRollingAccuracy(), 80);
    assertEqual(engine.currentDifficulty, 'EASY', 'Should promote to EASY at 80% accuracy');
  }, context);

  test('14.3 Should promote through Moderate and Intermediate when sustained accuracy >= 75-80%', () => {
    const engine = new AdaptiveQuestionEngine('percentages');
    engine.currentDifficulty = 'EASY';

    // 4 out of 5 correct = 80% >= 75% threshold
    for (let i = 0; i < 4; i++) engine.recordAnswer(true);
    engine.recordAnswer(false);

    assertEqual(engine.currentDifficulty, 'MODERATE', 'Should promote to MODERATE');

    // Next 5: 4/5 correct -> 80% >= 75%
    for (let i = 0; i < 4; i++) engine.recordAnswer(true);
    engine.recordAnswer(false);

    assertEqual(engine.currentDifficulty, 'INTERMEDIATE', 'Should promote to INTERMEDIATE');
  }, context);

  test('14.4 Should step down difficulty upon 3 consecutive failures (Anti-Panic Remediation)', () => {
    const engine = new AdaptiveQuestionEngine('percentages');
    engine.currentDifficulty = 'MODERATE';

    engine.recordAnswer(false);
    assertEqual(engine.currentDifficulty, 'MODERATE', '1 failure does not step down');

    engine.recordAnswer(false);
    assertEqual(engine.currentDifficulty, 'MODERATE', '2 failures do not step down');

    engine.recordAnswer(false);
    assertEqual(engine.currentDifficulty, 'EASY', '3 consecutive failures must trigger step-down to EASY');
  }, context);

  test('14.5 Should enforce Foundation difficulty as floor (cannot step down below Foundation)', () => {
    const engine = new AdaptiveQuestionEngine('percentages');
    engine.currentDifficulty = 'FOUNDATION';

    // 5 consecutive failures at Foundation
    for (let i = 0; i < 5; i++) {
      engine.recordAnswer(false);
    }

    assertEqual(engine.currentDifficulty, 'FOUNDATION', 'Foundation is the floor and must not be stepped down');
  }, context);
});

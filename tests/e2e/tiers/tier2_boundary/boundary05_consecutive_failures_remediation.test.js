/**
 * Tier 2 — Boundary 5: Consecutive Failures & Anti-Panic Remediation
 * Tests failure sequence counters and stepped remediation:
 * - 1 failure (no step-down)
 * - 2 failures (no step-down)
 * - 3 consecutive failures (triggers step-down)
 * - Interrupted failure streak (2 failures, 1 success -> counter reset)
 * - Cascading step-down from CAT_LEVEL down to FOUNDATION
 * - Invariant floor at FOUNDATION (cannot step down below floor)
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');

class DifficultyRemediationController {
  constructor(initialTier = 'INTERMEDIATE') {
    this.tierHierarchy = ['FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE', 'CAT_LEVEL'];
    this.currentTierIndex = this.tierHierarchy.indexOf(initialTier);
    this.consecutiveFailures = 0;
    this.remediationsTriggered = 0;
  }

  getCurrentTier() {
    return this.tierHierarchy[this.currentTierIndex];
  }

  recordAttempt(isCorrect) {
    if (isCorrect) {
      this.consecutiveFailures = 0;
    } else {
      this.consecutiveFailures++;
      if (this.consecutiveFailures >= 3) {
        this.triggerRemediation();
      }
    }
  }

  triggerRemediation() {
    this.remediationsTriggered++;
    this.consecutiveFailures = 0; // reset after triggering
    if (this.currentTierIndex > 0) {
      this.currentTierIndex--;
    }
  }
}

describe('Tier 2: Boundary 5 — Consecutive Failures & Remediation', () => {
  const context = { tier: 2, featureId: 14, featureName: 'Consecutive Failures Remediation' };

  test('B5.1 Should not step down on 1 or 2 isolated failures', () => {
    const controller = new DifficultyRemediationController('INTERMEDIATE');
    controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'INTERMEDIATE', '1 failure must not step down');
    assertEqual(controller.consecutiveFailures, 1);

    controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'INTERMEDIATE', '2 failures must not step down');
    assertEqual(controller.consecutiveFailures, 2);
  }, context);

  test('B5.2 Should trigger step-down on exactly 3 consecutive failures', () => {
    const controller = new DifficultyRemediationController('INTERMEDIATE');
    controller.recordAttempt(false);
    controller.recordAttempt(false);
    controller.recordAttempt(false);

    assertEqual(controller.getCurrentTier(), 'MODERATE', '3 failures must step down from INTERMEDIATE to MODERATE');
    assertEqual(controller.consecutiveFailures, 0, 'Counter must reset after remediation');
    assertEqual(controller.remediationsTriggered, 1);
  }, context);

  test('B5.3 Should reset consecutive failures counter upon successful attempt', () => {
    const controller = new DifficultyRemediationController('MODERATE');
    controller.recordAttempt(false);
    controller.recordAttempt(false);
    assertEqual(controller.consecutiveFailures, 2);

    // Correct answer breaks streak
    controller.recordAttempt(true);
    assertEqual(controller.consecutiveFailures, 0, 'Success must reset failure counter to 0');
    assertEqual(controller.getCurrentTier(), 'MODERATE', 'Tier should not change');

    // Next 2 failures should not trigger remediation because counter was reset
    controller.recordAttempt(false);
    controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'MODERATE', 'Streak broken, so 2 new failures do not step down');
  }, context);

  test('B5.4 Should cascade step-downs across multiple 3-failure clusters', () => {
    const controller = new DifficultyRemediationController('CAT_LEVEL');
    assertEqual(controller.getCurrentTier(), 'CAT_LEVEL');

    // 3 failures -> INTERMEDIATE
    for (let i = 0; i < 3; i++) controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'INTERMEDIATE');

    // 3 failures -> MODERATE
    for (let i = 0; i < 3; i++) controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'MODERATE');

    // 3 failures -> EASY
    for (let i = 0; i < 3; i++) controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'EASY');

    // 3 failures -> FOUNDATION
    for (let i = 0; i < 3; i++) controller.recordAttempt(false);
    assertEqual(controller.getCurrentTier(), 'FOUNDATION');
  }, context);

  test('B5.5 Should enforce FOUNDATION as minimum floor (cannot step down below index 0)', () => {
    const controller = new DifficultyRemediationController('FOUNDATION');
    assertEqual(controller.getCurrentTier(), 'FOUNDATION');

    // 10 failures at Foundation
    for (let i = 0; i < 10; i++) controller.recordAttempt(false);

    assertEqual(controller.getCurrentTier(), 'FOUNDATION', 'Floor is Foundation, must not drop or throw');
  }, context);
});

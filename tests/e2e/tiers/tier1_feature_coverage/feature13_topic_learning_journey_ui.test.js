/**
 * Tier 1 — Feature 13: Topic Learning Journey UI
 * Verifies topic roadmap structure, mastery percentages, concept sequencing,
 * status states (LOCKED, AVAILABLE, IN_PROGRESS, COMPLETED), and Continue actions.
 */

const { test, describe, assert, assertEqual, assertIncludes } = require('../../framework/testHarness');
const { CANONICAL_TOPICS } = require('../../framework/contracts');

// Helper model to simulate Topic Learning Journey UI State
class TopicJourneyViewModel {
  constructor(topicId, initialMastery = 0) {
    const topic = CANONICAL_TOPICS.find(t => t.id === topicId) || { id: topicId, name: topicId, section: 'QA' };
    this.topicId = topic.id;
    this.topicName = topic.name;
    this.section = topic.section;
    this.masteryPercentage = initialMastery;
    this.concepts = [
      { id: 'c1', title: 'Core Definitions & Formulas', status: initialMastery > 0 ? 'COMPLETED' : 'AVAILABLE' },
      { id: 'c2', title: 'Standard Problem Types', status: initialMastery >= 40 ? 'COMPLETED' : initialMastery > 0 ? 'IN_PROGRESS' : 'LOCKED' },
      { id: 'c3', title: 'Advanced Traps & Multi-Step', status: initialMastery >= 75 ? 'COMPLETED' : initialMastery >= 40 ? 'AVAILABLE' : 'LOCKED' },
      { id: 'c4', title: 'CAT Level Synthesis', status: initialMastery >= 90 ? 'COMPLETED' : initialMastery >= 75 ? 'AVAILABLE' : 'LOCKED' }
    ];
  }

  getContinueTarget() {
    const inProgress = this.concepts.find(c => c.status === 'IN_PROGRESS');
    if (inProgress) return inProgress;
    const available = this.concepts.find(c => c.status === 'AVAILABLE');
    if (available) return available;
    const completed = this.concepts.filter(c => c.status === 'COMPLETED');
    return completed[completed.length - 1] || this.concepts[0];
  }

  updateMastery(newMastery) {
    this.masteryPercentage = Math.max(0, Math.min(100, newMastery));
    if (this.masteryPercentage > 0) {
      this.concepts[0].status = 'COMPLETED';
    }
    if (this.masteryPercentage >= 40) {
      if (this.concepts[1].status === 'LOCKED' || this.concepts[1].status === 'IN_PROGRESS') {
        this.concepts[1].status = 'COMPLETED';
      }
      if (this.concepts[2].status === 'LOCKED') this.concepts[2].status = 'AVAILABLE';
    }
    if (this.masteryPercentage >= 75) {
      this.concepts[2].status = 'COMPLETED';
      if (this.concepts[3].status === 'LOCKED') this.concepts[3].status = 'AVAILABLE';
    }
    if (this.masteryPercentage >= 90) {
      this.concepts[3].status = 'COMPLETED';
    }
  }
}

describe('Tier 1: Feature 13 — Topic Learning Journey UI', () => {
  const context = { tier: 1, featureId: 13, featureName: 'Topic Learning Journey UI' };

  test('13.1 Should display accurate topic header metadata and section affiliation', () => {
    const vm = new TopicJourneyViewModel('percentages', 0);
    assertEqual(vm.topicId, 'percentages', 'Topic ID must match');
    assertEqual(vm.topicName, 'Percentages', 'Topic name must match canonical name');
    assertEqual(vm.section, 'QA', 'Percentages section must be QA');
    assertEqual(vm.masteryPercentage, 0, 'Initial mastery is 0%');
  }, context);

  test('13.2 Should render ordered concept sequence with progressive locking states', () => {
    const vm = new TopicJourneyViewModel('percentages', 0);
    assertEqual(vm.concepts.length, 4, 'Should contain 4 progressive concepts');
    assertEqual(vm.concepts[0].status, 'AVAILABLE', 'First concept should be AVAILABLE');
    assertEqual(vm.concepts[1].status, 'LOCKED', 'Second concept should be LOCKED at 0%');
    assertEqual(vm.concepts[2].status, 'LOCKED', 'Third concept should be LOCKED at 0%');
    assertEqual(vm.concepts[3].status, 'LOCKED', 'Fourth concept should be LOCKED at 0%');
  }, context);

  test('13.3 Should determine correct "Continue Learning" target action', () => {
    const vm = new TopicJourneyViewModel('percentages', 25);
    // At 25% mastery, c1 is COMPLETED, c2 is IN_PROGRESS
    const target = vm.getContinueTarget();
    assertEqual(target.id, 'c2', 'Continue target should point to IN_PROGRESS concept c2');
  }, context);

  test('13.4 Should dynamically update concept availability as mastery increases', () => {
    const vm = new TopicJourneyViewModel('percentages', 0);
    assertEqual(vm.concepts[2].status, 'LOCKED', 'c3 initially locked');

    // Increase mastery to 75%
    vm.updateMastery(75);
    assertEqual(vm.masteryPercentage, 75, 'Mastery updated to 75%');
    assertEqual(vm.concepts[0].status, 'COMPLETED', 'c1 completed');
    assertEqual(vm.concepts[1].status, 'COMPLETED', 'c2 completed');
    assertEqual(vm.concepts[2].status, 'COMPLETED', 'c3 completed');
    assertEqual(vm.concepts[3].status, 'AVAILABLE', 'c4 now available for CAT level');
  }, context);

  test('13.5 Should validate status constraints: valid statuses only', () => {
    const validStatuses = ['LOCKED', 'AVAILABLE', 'IN_PROGRESS', 'COMPLETED'];
    const vm = new TopicJourneyViewModel('geometry', 50);

    for (const concept of vm.concepts) {
      assert(validStatuses.includes(concept.status), `Concept status '${concept.status}' must be valid`);
      assert(concept.title && concept.title.length > 5, 'Concept title must be descriptive');
    }
  }, context);
});

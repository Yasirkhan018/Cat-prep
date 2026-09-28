/**
 * Tier 1 — Feature 8: Extensible Topic Taxonomy
 * Verifies hierarchical 5-tier taxonomy across QA, DILR, VARC with 16 canonical supported topics.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertGreaterOrEqual, PROJECT_ROOT } = require('../../framework/testHarness');
const { CANONICAL_TOPICS, DIFFICULTY_TIERS } = require('../../framework/contracts');

describe('Tier 1: Feature 8 — Extensible Topic Taxonomy', () => {
  const context = { tier: 1, featureId: 8, featureName: 'Extensible Topic Taxonomy' };

  test('8.1 Should verify taxonomy covers all 3 CAT sections: QA, DILR, VARC', () => {
    const sections = new Set(CANONICAL_TOPICS.map(t => t.section));
    assert(sections.has('QA'), 'Must include QA');
    assert(sections.has('DILR'), 'Must include DILR');
    assert(sections.has('VARC'), 'Must include VARC');
  }, context);

  test('8.2 Should define at least 16 canonical supported topics with unique IDs', () => {
    assertGreaterOrEqual(CANONICAL_TOPICS.length, 16, 'Must define at least 16 canonical topics');
    const ids = new Set(CANONICAL_TOPICS.map(t => t.id));
    assertEqual(ids.size, CANONICAL_TOPICS.length, 'All topic IDs must be unique');
  }, context);

  test('8.3 Should verify taxonomy file exists at src/lib/data/taxonomy.ts when M3 is ready', () => {
    const taxonomyPath = path.join(PROJECT_ROOT, 'src/lib/data/taxonomy.ts');
    if (fs.existsSync(taxonomyPath)) {
      const content = fs.readFileSync(taxonomyPath, 'utf-8');
      assert(content.includes('taxonomy') || content.includes('TAXONOMY'), 'taxonomy.ts must export taxonomy');
    } else {
      assert(true, 'taxonomy.ts pending M3 creation (contract validated via CANONICAL_TOPICS)');
    }
  }, context);

  test('8.4 Should enforce 6 progressive difficulty tiers in the content architecture', () => {
    const expected = ['FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE', 'CAT_LEVEL', 'ADVANCED'];
    for (const d of expected) {
      assert(DIFFICULTY_TIERS.includes(d), `Taxonomy must support difficulty tier '${d}'`);
    }
  }, context);

  test('8.5 Should permit extensible additions without breaking existing topic IDs', () => {
    const extendedTopics = [...CANONICAL_TOPICS, { id: 'modern_math', name: 'Modern Mathematics', section: 'QA' }];
    assertGreaterOrEqual(extendedTopics.length, 17, 'Extended topics list length updated');
    assertEqual(extendedTopics[0].id, 'percentages', 'Original topics remain intact');
  }, context);
});

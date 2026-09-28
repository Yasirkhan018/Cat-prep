/**
 * Tier 1 — Feature 2: Authentic PYQ Dataset Lock
 * Verifies the immutability and complete preservation of the authentic CAT PYQ dataset (664 questions).
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertGreaterOrEqual, PROJECT_ROOT } = require('../../framework/testHarness');
const { VERIFIED_PYQ_DATASET } = require('../../framework/contracts');

describe('Tier 1: Feature 2 — Authentic PYQ Dataset Lock', () => {
  const context = { tier: 1, featureId: 2, featureName: 'Authentic PYQ Dataset Lock' };

  test('2.1 Should verify PYQ catalog exists and contains exactly 10 authentic papers', () => {
    const catalogPath = path.join(PROJECT_ROOT, 'src/lib/data/pyq/catalog.json');
    assert(fs.existsSync(catalogPath), 'PYQ catalog.json must exist');
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
    const papers = catalog.papers || catalog;
    assert(Array.isArray(papers), 'Catalog must contain a list of papers');
    assertEqual(papers.length, VERIFIED_PYQ_DATASET.TOTAL_PAPERS, `Expected exactly ${VERIFIED_PYQ_DATASET.TOTAL_PAPERS} authentic papers`);
  }, context);

  test('2.2 Should verify authentic PYQ questions dataset contains verified 664 questions', () => {
    const questionsPath = path.join(PROJECT_ROOT, 'src/lib/data/pyq/questions.json');
    assert(fs.existsSync(questionsPath), 'PYQ questions.json must exist');
    const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
    assert(Array.isArray(questions), 'Questions dataset must be an array');
    assertEqual(questions.length, VERIFIED_PYQ_DATASET.TOTAL_QUESTIONS, `Expected exactly ${VERIFIED_PYQ_DATASET.TOTAL_QUESTIONS} authentic questions`);

    for (const q of questions) {
      assert(q.id && typeof q.id === 'string', `Question must have valid id: ${JSON.stringify(q)}`);
      assert(q.paper_id, `Question ${q.id} must have paper_id`);
      assert(q.question_text && q.question_text.trim().length > 0, `Question ${q.id} has empty text`);
      assert(q.correct_answer && q.correct_answer.trim().length > 0, `Question ${q.id} missing correct answer`);
      assert(['VARC', 'DILR', 'QA'].includes(q.section), `Question ${q.id} invalid section ${q.section}`);
    }
  }, context);

  test('2.3 Should verify authentic passages dataset integrity and structure', () => {
    const passagesPath = path.join(PROJECT_ROOT, 'src/lib/data/pyq/passages.json');
    assert(fs.existsSync(passagesPath), 'PYQ passages.json must exist');
    const passages = JSON.parse(fs.readFileSync(passagesPath, 'utf-8'));
    assert(Array.isArray(passages), 'Passages dataset must be an array');
    assertEqual(passages.length, VERIFIED_PYQ_DATASET.TOTAL_PASSAGES, `Expected exactly ${VERIFIED_PYQ_DATASET.TOTAL_PASSAGES} passages`);

    for (const p of passages) {
      assert(p.id, 'Passage must have id');
      assert(p.content && p.content.length > 20, `Passage ${p.id} content is too short or empty`);
      assert(Array.isArray(p.question_ids) && p.question_ids.length > 0, `Passage ${p.id} has no linked questions`);
    }
  }, context);

  test('2.4 Should verify authentic diagrams and assets exist in public/images/pyq/', () => {
    const imagesDir = path.join(PROJECT_ROOT, 'public/images/pyq');
    assert(fs.existsSync(imagesDir), 'public/images/pyq directory must exist');
    const files = fs.readdirSync(imagesDir);
    assertGreaterOrEqual(files.length, VERIFIED_PYQ_DATASET.TOTAL_DIAGRAMS, `Expected at least ${VERIFIED_PYQ_DATASET.TOTAL_DIAGRAMS} authentic diagrams`);
  }, context);

  test('2.5 Should enforce PYQ immutability and lack of synthetic contamination', () => {
    const questionsPath = path.join(PROJECT_ROOT, 'src/lib/data/pyq/questions.json');
    const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));

    for (const q of questions) {
      // Ensure official PYQs are not labeled as ORIGINAL_PRACTICE
      assert(q.sourceType !== 'ORIGINAL_PRACTICE', `Authentic question ${q.id} cannot have sourceType ORIGINAL_PRACTICE`);
      assert(q.answer_source && q.answer_source.length > 0, `Question ${q.id} missing official answer_source`);
    }
  }, context);
});

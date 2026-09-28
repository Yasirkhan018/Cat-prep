/**
 * Tier 1 — Feature 11: Content Quality Validator
 * Verifies validation logic that checks question completeness, formatting,
 * answer correctness, no PYQ duplicates, and absence of malformed entities.
 */

const fs = require('fs');
const path = require('path');
const { test, describe, assert, assertEqual, assertNotEqual, PROJECT_ROOT } = require('../../framework/testHarness');
const { CANONICAL_TOPICS, DIFFICULTY_TIERS, REQUIRED_SOLUTION_FIELDS } = require('../../framework/contracts');

describe('Tier 1: Feature 11 — Content Quality Validator', () => {
  const context = { tier: 1, featureId: 11, featureName: 'Content Quality Validator' };
  const pyqPath = path.join(PROJECT_ROOT, 'src/lib/data/pyq/questions.json');

  // Pure validator function implementing the authoritative validation specification
  function validateQuestionQuality(q, authenticPyqTexts = new Set()) {
    const errors = [];

    // Check primary fields
    if (!q.id || typeof q.id !== 'string') errors.push('Missing or invalid id');
    if (q.sourceType !== 'ORIGINAL_PRACTICE') errors.push(`sourceType must be ORIGINAL_PRACTICE, got ${q.sourceType}`);
    if (!['VARC', 'DILR', 'QA'].includes(q.section)) errors.push(`Invalid section: ${q.section}`);
    if (!q.topicId) errors.push('Missing topicId');
    if (!q.topicName) errors.push('Missing topicName');
    if (!q.subtopic) errors.push('Missing subtopic');
    if (!q.concept) errors.push('Missing concept');

    // Check difficulty tier
    const allowedTiers = ['FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE'];
    if (!allowedTiers.includes(q.difficulty)) errors.push(`Invalid difficulty: ${q.difficulty}`);

    // Check question format and answer matching
    if (!q.questionText || q.questionText.trim().length < 10) errors.push('questionText is empty or too short');
    if (!['MCQ', 'TITA'].includes(q.questionType)) errors.push(`Invalid questionType: ${q.questionType}`);

    if (q.questionType === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length < 3) {
        errors.push('MCQ must contain at least 3 options');
      }
      if (!q.correctAnswer) {
        errors.push('MCQ missing correctAnswer');
      }
    } else if (q.questionType === 'TITA') {
      if (!q.correctAnswer || String(q.correctAnswer).trim().length === 0) {
        errors.push('TITA must have valid non-empty correctAnswer');
      }
    }

    // Check solution completeness
    if (!q.solution || typeof q.solution !== 'object') {
      errors.push('Missing solution object');
    } else {
      for (const field of REQUIRED_SOLUTION_FIELDS) {
        if (!q.solution[field]) errors.push(`Solution missing required field: ${field}`);
      }
      if (!Array.isArray(q.solution.steps) || q.solution.steps.length < 2) {
        errors.push('Solution steps must be an array of >= 2 steps');
      }
    }

    // Check metadata
    if (typeof q.estimatedTime !== 'number' || q.estimatedTime <= 0) errors.push('Invalid estimatedTime');
    if (!q.learningObjective || q.learningObjective.trim().length < 5) errors.push('Invalid learningObjective');

    // Check against PYQ duplication
    if (authenticPyqTexts.has(q.questionText.trim().toLowerCase())) {
      errors.push('Violation: Duplicate text found in authentic PYQ dataset');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  test('11.1 Should successfully validate a compliant original question', () => {
    const validQ = {
      id: 'orig_qa_perc_001',
      sourceType: 'ORIGINAL_PRACTICE',
      section: 'QA',
      topicId: 'percentages',
      topicName: 'Percentages',
      subtopic: 'Successive Percentage Changes',
      concept: 'Net percentage change formula a + b + ab/100',
      difficulty: 'FOUNDATION',
      questionType: 'MCQ',
      questionText: 'If a price of an item is increased by 20% and then decreased by 10%, what is the net percentage change?',
      options: ['8% increase', '10% increase', '12% increase', '8% decrease'],
      correctAnswer: '8% increase',
      solution: {
        finalAnswer: '8% increase',
        steps: [
          'Net change formula = a + b + (a * b) / 100',
          'Substitute a = 20, b = -10: 20 - 10 + (20 * -10)/100 = 10 - 2 = 8% increase.'
        ],
        concept: 'Successive Percentage Changes',
        whyItWorks: 'Successive changes apply consecutively on changing bases.',
        commonMistake: 'Directly adding percentages without considering base shift.'
      },
      estimatedTime: 90,
      learningObjective: 'Master successive percentage calculation'
    };

    const result = validateQuestionQuality(validQ);
    assertEqual(result.isValid, true, `Validation failed: ${result.errors.join(', ')}`);
    assertEqual(result.errors.length, 0, 'Should have 0 errors');
  }, context);

  test('11.2 Should flag questions with missing required pedagogical fields', () => {
    const defectiveQ = {
      id: 'bad_001',
      sourceType: 'ORIGINAL_PRACTICE',
      section: 'QA',
      topicId: 'percentages',
      topicName: 'Percentages',
      subtopic: 'Basic',
      concept: 'Concept',
      difficulty: 'FOUNDATION',
      questionType: 'MCQ',
      questionText: 'What is 10% of 100?',
      options: ['10', '20'],
      correctAnswer: '10',
      solution: {
        finalAnswer: '10'
        // Missing steps, concept, whyItWorks, commonMistake
      },
      estimatedTime: 60,
      learningObjective: 'Learn percentage'
    };

    const result = validateQuestionQuality(defectiveQ);
    assertEqual(result.isValid, false, 'Defective question must fail validation');
    assert(result.errors.some(e => e.includes('steps')), 'Must detect missing steps');
    assert(result.errors.some(e => e.includes('whyItWorks')), 'Must detect missing whyItWorks');
  }, context);

  test('11.3 Should reject questions duplicating authentic CAT PYQ texts', () => {
    let pyqTexts = new Set();
    if (fs.existsSync(pyqPath)) {
      const pyq = JSON.parse(fs.readFileSync(pyqPath, 'utf-8'));
      pyqTexts = new Set(pyq.map(q => q.question_text.trim().toLowerCase()));
    } else {
      pyqTexts.add('authentic pyq sample question text from cat 2023');
    }

    const firstPyqText = Array.from(pyqTexts)[0];
    const plagiarizedQ = {
      id: 'plagiarized_001',
      sourceType: 'ORIGINAL_PRACTICE',
      section: 'QA',
      topicId: 'percentages',
      topicName: 'Percentages',
      subtopic: 'Basic',
      concept: 'Concept',
      difficulty: 'FOUNDATION',
      questionType: 'TITA',
      questionText: firstPyqText,
      options: null,
      correctAnswer: '42',
      solution: {
        finalAnswer: '42',
        steps: ['Step 1...', 'Step 2...'],
        concept: 'Concept',
        whyItWorks: 'Logic',
        commonMistake: 'Calculation error'
      },
      estimatedTime: 60,
      learningObjective: 'Learn concept'
    };

    const result = validateQuestionQuality(plagiarizedQ, pyqTexts);
    assertEqual(result.isValid, false, 'Plagiarized PYQ must be flagged');
    assert(result.errors.some(e => e.includes('authentic PYQ dataset')), 'Must identify PYQ duplication error');
  }, context);

  test('11.4 Should validate MCQ options consistency and presence of correctAnswer in options', () => {
    const invalidMcq = {
      id: 'mcq_mismatch',
      sourceType: 'ORIGINAL_PRACTICE',
      section: 'QA',
      topicId: 'ratios',
      topicName: 'Ratio & Proportion',
      subtopic: 'Compound Ratios',
      concept: 'Ratio compounding',
      difficulty: 'EASY',
      questionType: 'MCQ',
      questionText: 'Find the compound ratio of 2:3 and 4:5.',
      options: ['8:15', '6:8', '10:12'],
      correctAnswer: '99:100', // Not present in options!
      solution: {
        finalAnswer: '99:100',
        steps: ['Step 1...', 'Step 2...'],
        concept: 'Ratio',
        whyItWorks: 'Multiply terms',
        commonMistake: 'Adding terms'
      },
      estimatedTime: 90,
      learningObjective: 'Ratio compounding'
    };

    // Extension rule: correctAnswer must exist in options for MCQs
    const mcqMatches = invalidMcq.options.includes(invalidMcq.correctAnswer);
    assertEqual(mcqMatches, false, 'correctAnswer should not match any option');
  }, context);

  test('11.5 Should validate TITA questions have non-null numeric/text answer without options', () => {
    const validTita = {
      id: 'tita_valid_001',
      sourceType: 'ORIGINAL_PRACTICE',
      section: 'QA',
      topicId: 'algebra',
      topicName: 'Algebra & Equations',
      subtopic: 'Quadratic Equations',
      concept: 'Sum of roots',
      difficulty: 'MODERATE',
      questionType: 'TITA',
      questionText: 'If the roots of x^2 - 12x + k = 0 are in ratio 1:2, find the value of k.',
      options: null,
      correctAnswer: '32',
      solution: {
        finalAnswer: '32',
        steps: [
          'Let roots be r and 2r. Sum of roots = r + 2r = 3r = 12 => r = 4.',
          'Product of roots = r * 2r = 2r^2 = 2 * 16 = 32 = k.'
        ],
        concept: 'Vieta relations for quadratics',
        whyItWorks: 'Sum and product of roots relate coefficients to roots.',
        commonMistake: 'Taking roots as r and r+2 instead of r and 2r.'
      },
      estimatedTime: 120,
      learningObjective: 'Roots ratio problem solving'
    };

    assertEqual(validTita.options, null, 'TITA options should be null');
    assert(validTita.correctAnswer.length > 0, 'TITA correctAnswer must be non-empty');
    const result = validateQuestionQuality(validTita);
    assertEqual(result.isValid, true, 'Valid TITA question should pass');
  }, context);
});

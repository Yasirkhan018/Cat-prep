/**
 * Tier 1 — Feature 5: Deterministic Stage Classifier
 * Verifies rule-based classification into Beginner, Intermediate, and Advanced stages.
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { STAGE_CLASSIFICATION_THRESHOLDS } = require('../../framework/contracts');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 1: Feature 5 — Deterministic Stage Classifier', () => {
  const context = { tier: 1, featureId: 5, featureName: 'Deterministic Stage Classifier' };

  test('5.1 Should classify diagnostic score of 0-4 as BEGINNER', () => {
    const session = new MockAdaptiveSession();
    // 3 correct out of 12
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 3 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 60
    }));

    const result = session.submitDiagnostic(responses);
    assertEqual(result.total, 3, 'Total should be 3');
    assertEqual(result.assignedStage, 'BEGINNER', 'Score <= 4 must be classified as BEGINNER');
  }, context);

  test('5.2 Should classify diagnostic score of 5-8 as INTERMEDIATE', () => {
    const session = new MockAdaptiveSession();
    // 6 correct out of 12
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 6 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 60
    }));

    const result = session.submitDiagnostic(responses);
    assertEqual(result.total, 6, 'Total should be 6');
    assertEqual(result.assignedStage, 'INTERMEDIATE', 'Score 5-8 must be classified as INTERMEDIATE');
  }, context);

  test('5.3 Should classify diagnostic score of 9-12 as ADVANCED', () => {
    const session = new MockAdaptiveSession();
    // 10 correct out of 12
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 10 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 60
    }));

    const result = session.submitDiagnostic(responses);
    assertEqual(result.total, 10, 'Total should be 10');
    assertEqual(result.assignedStage, 'ADVANCED', 'Score >= 9 must be classified as ADVANCED');
  }, context);

  test('5.4 Should maintain deterministic idempotency across repeated runs', () => {
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 7 ? 'A' : 'B',
      correctAnswer: 'A',
      timeSpentSeconds: 70
    }));

    for (let run = 0; run < 5; run++) {
      const session = new MockAdaptiveSession();
      const res = session.submitDiagnostic(responses);
      assertEqual(res.assignedStage, 'INTERMEDIATE', `Run ${run} produced non-deterministic classification`);
    }
  }, context);

  test('5.5 Should strictly respect boundary thresholds (4 vs 5, 8 vs 9)', () => {
    const session1 = new MockAdaptiveSession();
    const score4Responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 4 ? 'A' : 'B',
      correctAnswer: 'A'
    }));
    assertEqual(session1.submitDiagnostic(score4Responses).assignedStage, 'BEGINNER', 'Score 4 must be BEGINNER');

    const session2 = new MockAdaptiveSession();
    const score5Responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 5 ? 'A' : 'B',
      correctAnswer: 'A'
    }));
    assertEqual(session2.submitDiagnostic(score5Responses).assignedStage, 'INTERMEDIATE', 'Score 5 must be INTERMEDIATE');

    const session3 = new MockAdaptiveSession();
    const score8Responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 8 ? 'A' : 'B',
      correctAnswer: 'A'
    }));
    assertEqual(session3.submitDiagnostic(score8Responses).assignedStage, 'INTERMEDIATE', 'Score 8 must be INTERMEDIATE');

    const session4 = new MockAdaptiveSession();
    const score9Responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 9 ? 'A' : 'B',
      correctAnswer: 'A'
    }));
    assertEqual(session4.submitDiagnostic(score9Responses).assignedStage, 'ADVANCED', 'Score 9 must be ADVANCED');
  }, context);
});

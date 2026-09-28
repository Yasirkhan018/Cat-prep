/**
 * Tier 2 — Boundary 1: Diagnostic Score Boundaries
 * Tests exact threshold transitions:
 * - 0 correct out of 12 (absolute floor)
 * - 4 correct (Beginner ceiling) vs 5 correct (Intermediate floor)
 * - 8 correct (Intermediate ceiling) vs 9 correct (Advanced floor)
 * - 12 correct out of 12 (absolute ceiling)
 * - Section-specific zero scores (e.g. 0 VARC, 4 DILR, 4 QA)
 */

const { test, describe, assert, assertEqual } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

describe('Tier 2: Boundary 1 — Diagnostic Score Boundaries', () => {
  const context = { tier: 2, featureId: 4, featureName: 'Diagnostic Score Boundaries' };

  test('B1.1 Should correctly classify absolute floor score (0/12) as BEGINNER with 0% section foundations', () => {
    const session = new MockAdaptiveSession();
    const zeroResponses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 60
    }));

    const result = session.submitDiagnostic(zeroResponses);
    assertEqual(result.total, 0, 'Total score must be 0');
    assertEqual(result.assignedStage, 'BEGINNER', '0/12 must be BEGINNER');
    assertEqual(session.state.profile.sectionFoundations.VARC, 0);
    assertEqual(session.state.profile.sectionFoundations.DILR, 0);
    assertEqual(session.state.profile.sectionFoundations.QA, 0);
  }, context);

  test('B1.2 Should classify score 4 (Beginner ceiling) vs score 5 (Intermediate floor)', () => {
    const session4 = new MockAdaptiveSession();
    const resp4 = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 4 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 60
    }));
    const res4 = session4.submitDiagnostic(resp4);
    assertEqual(res4.total, 4);
    assertEqual(res4.assignedStage, 'BEGINNER', 'Score 4 must remain BEGINNER');

    const session5 = new MockAdaptiveSession();
    const resp5 = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 5 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 60
    }));
    const res5 = session5.submitDiagnostic(resp5);
    assertEqual(res5.total, 5);
    assertEqual(res5.assignedStage, 'INTERMEDIATE', 'Score 5 must cross into INTERMEDIATE');
  }, context);

  test('B1.3 Should classify score 8 (Intermediate ceiling) vs score 9 (Advanced floor)', () => {
    const session8 = new MockAdaptiveSession();
    const resp8 = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 8 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 60
    }));
    const res8 = session8.submitDiagnostic(resp8);
    assertEqual(res8.total, 8);
    assertEqual(res8.assignedStage, 'INTERMEDIATE', 'Score 8 must remain INTERMEDIATE');

    const session9 = new MockAdaptiveSession();
    const resp9 = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 9 ? 'CORRECT' : 'WRONG',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 60
    }));
    const res9 = session9.submitDiagnostic(resp9);
    assertEqual(res9.total, 9);
    assertEqual(res9.assignedStage, 'ADVANCED', 'Score 9 must cross into ADVANCED');
  }, context);

  test('B1.4 Should correctly classify absolute ceiling score (12/12) as ADVANCED with 100% section foundations', () => {
    const session = new MockAdaptiveSession();
    const perfectResponses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: 'CORRECT',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 45
    }));

    const result = session.submitDiagnostic(perfectResponses);
    assertEqual(result.total, 12, 'Total score must be 12');
    assertEqual(result.assignedStage, 'ADVANCED', '12/12 must be ADVANCED');
    assertEqual(session.state.profile.sectionFoundations.VARC, 100);
    assertEqual(session.state.profile.sectionFoundations.DILR, 100);
    assertEqual(session.state.profile.sectionFoundations.QA, 100);
  }, context);

  test('B1.5 Should accurately handle skewed section scores (e.g. 0 VARC, 4 DILR, 4 QA)', () => {
    const session = new MockAdaptiveSession();
    // 0 VARC, 4 DILR, 4 QA -> 8 total -> INTERMEDIATE
    const skewedResponses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: i < 4 ? 'WRONG' : 'CORRECT',
      correctAnswer: 'CORRECT',
      timeSpentSeconds: 50
    }));

    const result = session.submitDiagnostic(skewedResponses);
    assertEqual(result.total, 8);
    assertEqual(result.assignedStage, 'INTERMEDIATE');
    assertEqual(session.state.profile.sectionFoundations.VARC, 0, 'VARC 0/4 is 0%');
    assertEqual(session.state.profile.sectionFoundations.DILR, 100, 'DILR 4/4 is 100%');
    assertEqual(session.state.profile.sectionFoundations.QA, 100, 'QA 4/4 is 100%');
  }, context);
});

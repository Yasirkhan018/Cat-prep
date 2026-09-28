/**
 * Tier 1 — Feature 12: 6-Stage Learning Mode
 * Verifies the 6-stage pedagogical learning sequence:
 * Learn -> Solved Example -> Guided Try -> Practice -> Challenge -> Apply.
 */

const { test, describe, assert, assertEqual, assertDeepEqual } = require('../../framework/testHarness');
const { LEARNING_STAGES } = require('../../framework/contracts');

// State machine simulating 6-stage learning progression
class LearningJourneySession {
  constructor(topicId) {
    this.topicId = topicId;
    this.currentStageIndex = 0;
    this.stageData = {
      LEARN: { completed: false, readTimeSeconds: 0 },
      SOLVED_EXAMPLE: { completed: false, reviewedSteps: false },
      GUIDED_TRY: { completed: false, hintsUsed: 0, passed: false },
      PRACTICE: { completed: false, attempts: [], score: 0 },
      CHALLENGE: { completed: false, passed: false },
      APPLY: { completed: false, passed: false }
    };
  }

  getCurrentStage() {
    return LEARNING_STAGES[this.currentStageIndex];
  }

  completeLearnStage(readTimeSeconds) {
    if (this.getCurrentStage() !== 'LEARN') throw new Error('Not at LEARN stage');
    if (readTimeSeconds < 10) throw new Error('Must spend at least 10s reviewing core concept');
    this.stageData.LEARN.completed = true;
    this.stageData.LEARN.readTimeSeconds = readTimeSeconds;
    this.currentStageIndex++;
  }

  completeSolvedExample() {
    if (this.getCurrentStage() !== 'SOLVED_EXAMPLE') throw new Error('Not at SOLVED_EXAMPLE stage');
    this.stageData.SOLVED_EXAMPLE.completed = true;
    this.stageData.SOLVED_EXAMPLE.reviewedSteps = true;
    this.currentStageIndex++;
  }

  submitGuidedTry(userAnswer, correctAnswer, hintsUsed = 0) {
    if (this.getCurrentStage() !== 'GUIDED_TRY') throw new Error('Not at GUIDED_TRY stage');
    const passed = userAnswer === correctAnswer;
    this.stageData.GUIDED_TRY.hintsUsed = hintsUsed;
    if (passed) {
      this.stageData.GUIDED_TRY.completed = true;
      this.stageData.GUIDED_TRY.passed = true;
      this.currentStageIndex++;
    }
    return passed;
  }

  submitPracticeBatch(results) {
    if (this.getCurrentStage() !== 'PRACTICE') throw new Error('Not at PRACTICE stage');
    if (!Array.isArray(results) || results.length < 3) throw new Error('Practice requires at least 3 questions');
    const correctCount = results.filter(r => r.correct).length;
    const accuracy = Math.round((correctCount / results.length) * 100);
    this.stageData.PRACTICE.attempts = results;
    this.stageData.PRACTICE.score = accuracy;

    // Gate: at least 66% to unlock Challenge
    if (accuracy >= 66) {
      this.stageData.PRACTICE.completed = true;
      this.currentStageIndex++;
      return true;
    }
    return false;
  }

  submitChallenge(userAnswer, correctAnswer) {
    if (this.getCurrentStage() !== 'CHALLENGE') throw new Error('Not at CHALLENGE stage');
    const passed = userAnswer === correctAnswer;
    if (passed) {
      this.stageData.CHALLENGE.completed = true;
      this.stageData.CHALLENGE.passed = true;
      this.currentStageIndex++;
    }
    return passed;
  }

  submitApply(userAnswer, correctAnswer) {
    if (this.getCurrentStage() !== 'APPLY') throw new Error('Not at APPLY stage');
    const passed = userAnswer === correctAnswer;
    if (passed) {
      this.stageData.APPLY.completed = true;
      this.stageData.APPLY.passed = true;
    }
    return passed;
  }

  isJourneyComplete() {
    return LEARNING_STAGES.every(stage => this.stageData[stage].completed);
  }
}

describe('Tier 1: Feature 12 — 6-Stage Learning Mode', () => {
  const context = { tier: 1, featureId: 12, featureName: '6-Stage Learning Mode' };

  test('12.1 Should verify strict sequence of the 6 learning stages', () => {
    const expected = ['LEARN', 'SOLVED_EXAMPLE', 'GUIDED_TRY', 'PRACTICE', 'CHALLENGE', 'APPLY'];
    assertDeepEqual(LEARNING_STAGES, expected, 'Learning stages must match exact pedagogical sequence');
  }, context);

  test('12.2 Should enforce prerequisite completion before unlocking next stage', () => {
    const session = new LearningJourneySession('percentages');
    assertEqual(session.getCurrentStage(), 'LEARN', 'Should start at LEARN');

    let threw = false;
    try {
      // Attempting to jump directly to PRACTICE without doing LEARN
      session.submitPracticeBatch([{ correct: true }, { correct: true }, { correct: true }]);
    } catch (e) {
      threw = true;
    }
    assert(threw, 'Should forbid jumping directly to PRACTICE stage');
  }, context);

  test('12.3 Should handle Guided Try stage with hint tracking and validation', () => {
    const session = new LearningJourneySession('percentages');
    session.completeLearnStage(20);
    session.completeSolvedExample();
    assertEqual(session.getCurrentStage(), 'GUIDED_TRY', 'Should be at GUIDED_TRY');

    // First attempt incorrect
    const wrong = session.submitGuidedTry('WrongAnswer', 'RightAnswer', 1);
    assertEqual(wrong, false, 'Wrong answer should fail');
    assertEqual(session.getCurrentStage(), 'GUIDED_TRY', 'Must remain at GUIDED_TRY after wrong answer');

    // Second attempt correct with 2 hints used
    const correct = session.submitGuidedTry('RightAnswer', 'RightAnswer', 2);
    assertEqual(correct, true, 'Right answer should succeed');
    assertEqual(session.stageData.GUIDED_TRY.hintsUsed, 2, 'Should record 2 hints used');
    assertEqual(session.getCurrentStage(), 'PRACTICE', 'Should advance to PRACTICE');
  }, context);

  test('12.4 Should require minimum accuracy threshold (>=66%) on Practice batch', () => {
    const session = new LearningJourneySession('percentages');
    session.completeLearnStage(15);
    session.completeSolvedExample();
    session.submitGuidedTry('A', 'A', 0);

    // Fail practice batch with 1/3 (33%)
    const failedBatch = session.submitPracticeBatch([
      { correct: true },
      { correct: false },
      { correct: false }
    ]);
    assertEqual(failedBatch, false, 'Batch with 33% accuracy should fail');
    assertEqual(session.getCurrentStage(), 'PRACTICE', 'Should stay in PRACTICE stage');

    // Pass practice batch with 2/3 (67%)
    const passedBatch = session.submitPracticeBatch([
      { correct: true },
      { correct: true },
      { correct: false }
    ]);
    assertEqual(passedBatch, true, 'Batch with 67% accuracy should pass');
    assertEqual(session.getCurrentStage(), 'CHALLENGE', 'Should advance to CHALLENGE stage');
  }, context);

  test('12.5 Should successfully complete the full 6-stage lifecycle', () => {
    const session = new LearningJourneySession('percentages');
    session.completeLearnStage(25);
    session.completeSolvedExample();
    session.submitGuidedTry('Ans', 'Ans', 1);
    session.submitPracticeBatch([{ correct: true }, { correct: true }, { correct: true }]);
    session.submitChallenge('HardAns', 'HardAns');
    const finalPassed = session.submitApply('ApplyAns', 'ApplyAns');

    assertEqual(finalPassed, true, 'Apply stage passed');
    assertEqual(session.isJourneyComplete(), true, 'Entire 6-stage journey marked complete');
  }, context);
});

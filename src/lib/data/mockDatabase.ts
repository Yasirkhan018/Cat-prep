import {
  Question,
  DILRSet,
  RCSet,
  FormulaItem,
  QuestionType,
  Difficulty,
  OriginalQuestion,
  QuestionSourceType
} from '../types';
import { PYQService } from './pyqService';

// Convert all 664 authentic questions into standard Question model with strict CAT_PYQ typing
export const AUTHENTIC_PYQ_QUESTIONS: Question[] = PYQService.getAllQuestions().map(q => {
  const passage = q.passage_id ? PYQService.getPassageById(q.passage_id) : undefined;
  return {
    id: q.id,
    source: 'CAT PYQ' as const,
    sourceType: 'CAT_PYQ' as const,
    exam: `CAT ${q.year}`,
    year: q.year,
    slot: q.slot,
    section: q.section,
    topic: q.topic,
    subtopic: q.topic,
    questionType: q.question_type as QuestionType,
    difficulty: (q.section === 'DILR' ? 'Very Difficult' : 'Difficult') as Difficulty,
    question: q.question_text,
    passage: q.section === 'VARC' ? passage?.content : undefined,
    dataset: q.section === 'DILR' ? passage?.content : undefined,
    options: q.options || undefined,
    correctAnswer: q.correct_answer,
    solution: {
      stepByStep: [
        "Detailed step-by-step solution is not available in the authentic source material.",
        `Official CAT Answer Key: ${q.correct_answer}`
      ],
      keyConcept: q.topic
    },
    hints: [
      `Authentic CAT ${q.year} Slot ${q.slot} official exam question`,
      `Topic: ${q.topic}`
    ],
    estimatedTimeSeconds: q.section === 'DILR' ? 180 : 120,
    tags: [`CAT ${q.year}`, `Slot ${q.slot}`, q.section, q.topic]
  };
});

import { ORIGINAL_PRACTICE_QUESTIONS as LOADED_PRACTICE_QUESTIONS } from './originalQuestions';

// Original practice questions array populated across QA, DILR, and VARC with complete difficulty tiers
export const ORIGINAL_PRACTICE_QUESTIONS: OriginalQuestion[] = LOADED_PRACTICE_QUESTIONS;

/**
 * Adapter to convert an OriginalQuestion into the application Question format.
 */
export function convertOriginalToQuestion(oq: OriginalQuestion): Question {
  const diffMap: Record<string, Difficulty> = {
    FOUNDATION: 'Easy',
    EASY: 'Easy',
    MODERATE: 'Moderate',
    INTERMEDIATE: 'Difficult',
    CAT_LEVEL: 'Difficult',
    ADVANCED: 'Very Difficult',
  };

  return {
    id: oq.id,
    source: 'Practice',
    sourceType: 'ORIGINAL_PRACTICE',
    section: oq.section,
    topic: oq.topicName || oq.topicId,
    subtopic: oq.subtopic,
    topicId: oq.topicId,
    questionType: oq.questionType,
    difficulty: diffMap[oq.difficulty] || 'Moderate',
    difficultyTier: oq.difficulty,
    question: oq.questionText,
    options: oq.options || undefined,
    correctAnswer: oq.correctAnswer,
    solution: {
      stepByStep: oq.solution.steps,
      keyConcept: oq.solution.concept,
      alternateApproach: oq.solution.alternativeMethod,
      commonTrap: oq.solution.commonMistake,
      shortcut: oq.solution.catTip,
      whyItWorks: oq.solution.whyItWorks,
    },
    hints: [oq.learningObjective, oq.solution.concept],
    estimatedTimeSeconds: oq.estimatedTime,
    learningObjective: oq.learningObjective,
    tags: [oq.section, oq.topicName, oq.subtopic, oq.difficulty],
  };
}

// Master Question Database containing all questions (distinguished by sourceType)
export const QUESTIONS_DB: Question[] = [
  ...AUTHENTIC_PYQ_QUESTIONS,
  ...ORIGINAL_PRACTICE_QUESTIONS.map(convertOriginalToQuestion)
];

/**
 * Query questions filtered by dataset source type ('CAT_PYQ' or 'ORIGINAL_PRACTICE')
 */
export function getQuestionsBySourceType(sourceType: QuestionSourceType): Question[] {
  return QUESTIONS_DB.filter(q => q.sourceType === sourceType);
}

/**
 * Convenience helper to retrieve only authentic CAT past paper questions
 */
export function getAuthenticPYQs(): Question[] {
  return AUTHENTIC_PYQ_QUESTIONS;
}

/**
 * Convenience helper to retrieve only original practice questions
 */
export function getOriginalPracticeQuestions(): OriginalQuestion[] {
  return ORIGINAL_PRACTICE_QUESTIONS;
}

// DILR Sets Database
export const DILR_SETS_DB: DILRSet[] = PYQService.getAllPassages()
  .filter(p => p.section === 'DILR')
  .map(p => {
    const linkedQs = AUTHENTIC_PYQ_QUESTIONS.filter(q => p.question_ids.includes(q.id));
    return {
      id: p.id,
      title: p.title,
      source: 'CAT PYQ' as const,
      year: p.year,
      slot: p.slot,
      topic: 'Logical Reasoning',
      theme: p.title,
      dataset: p.content,
      questions: linkedQs
    };
  });

// RC Sets Database
export const RC_SETS_DB: RCSet[] = PYQService.getAllPassages()
  .filter(p => p.section === 'VARC')
  .map(p => {
    const linkedQs = AUTHENTIC_PYQ_QUESTIONS.filter(q => p.question_ids.includes(q.id));
    return {
      id: p.id,
      title: p.title,
      source: 'CAT PYQ' as const,
      year: p.year,
      slot: p.slot,
      genre: 'Culture',
      passage: p.content,
      questions: linkedQs
    };
  });

// Core Mathematical Formulas & Traps
export const FORMULAS_DB: FormulaItem[] = [
  {
    id: "f_tsd_avg_speed",
    subject: "QA",
    topic: "Time Speed & Distance",
    title: "Harmonic Average Speed",
    formula: "S_{avg} = \\frac{2 a b}{a + b}",
    explanation: "Used when equal distances are covered at two different speeds 'a' and 'b'.",
    shortcut: "Ratio of speeds = a : b => Ratio of times = b : a when distance is constant.",
    commonTrap: "Never take simple arithmetic average (a + b)/2 unless travel TIMES are equal!",
    interactiveVars: [
      { name: "a", label: "Speed Outward (km/h)", min: 10, max: 120, defaultVal: 60 },
      { name: "b", label: "Speed Return (km/h)", min: 10, max: 120, defaultVal: 40 }
    ]
  },
  {
    id: "f_ci_difference",
    subject: "QA",
    topic: "SI & CI",
    title: "2-Year CI - SI Difference",
    formula: "CI - SI = P \\times \\left(\\frac{R}{100}\\right)^2",
    explanation: "Calculates the difference between compound and simple interest over exactly 2 years.",
    shortcut: "Difference is R% of R% of Principal P.",
    interactiveVars: [
      { name: "P", label: "Principal (₹)", min: 1000, max: 100000, defaultVal: 10000 },
      { name: "R", label: "Rate of Interest (%)", min: 1, max: 30, defaultVal: 10 }
    ]
  },
  {
    id: "f_work_wages",
    subject: "QA",
    topic: "Time & Work",
    title: "Inverse Work Proportionality",
    formula: "\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}",
    explanation: "Standard chain rule equating total man-hours per unit of work completed.",
    shortcut: "Wages are divided in the ratio of daily work done, not simply time spent.",
    interactiveVars: [
      { name: "M_1", label: "Workers (Group 1)", min: 1, max: 100, defaultVal: 10 },
      { name: "D_1", label: "Days (Group 1)", min: 1, max: 60, defaultVal: 12 }
    ]
  }
];

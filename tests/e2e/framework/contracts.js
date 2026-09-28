/**
 * Authoritative Interface Contracts and Constants for CAT Exam Preparation Platform
 * Derived directly from ORIGINAL_REQUEST.md and PROJECT.md § Interface Contracts.
 */

const CANONICAL_TOPICS = [
  // QA (Quantitative Aptitude)
  { id: 'percentages', name: 'Percentages', section: 'QA' },
  { id: 'profit_loss', name: 'Profit & Loss', section: 'QA' },
  { id: 'ratios', name: 'Ratio & Proportion', section: 'QA' },
  { id: 'averages', name: 'Averages & Mixtures', section: 'QA' },
  { id: 'time_work', name: 'Time & Work', section: 'QA' },
  { id: 'algebra', name: 'Algebra & Equations', section: 'QA' },
  { id: 'geometry', name: 'Geometry & Mensuration', section: 'QA' },
  { id: 'number_system', name: 'Number System', section: 'QA' },

  // DILR (Data Interpretation & Logical Reasoning)
  { id: 'tables_graphs', name: 'Tables & Graphs', section: 'DILR' },
  { id: 'arrangements', name: 'Arrangements & Seating', section: 'DILR' },
  { id: 'distribution', name: 'Distribution & Selection', section: 'DILR' },
  { id: 'games_tournaments', name: 'Games & Tournaments', section: 'DILR' },

  // VARC (Verbal Ability & Reading Comprehension)
  { id: 'rc_inference', name: 'RC - Inference & Theme', section: 'VARC' },
  { id: 'rc_tone', name: 'RC - Tone & Purpose', section: 'VARC' },
  { id: 'para_jumbles', name: 'Para Jumbles', section: 'VARC' },
  { id: 'para_summary', name: 'Para Summary & Critical Reasoning', section: 'VARC' }
];

const DIFFICULTY_TIERS = [
  'FOUNDATION',
  'EASY',
  'MODERATE',
  'INTERMEDIATE',
  'CAT_LEVEL',
  'ADVANCED'
];

const ORIGINAL_DIFFICULTY_DISTRIBUTION = {
  FOUNDATION: 10,
  EASY: 10,
  MODERATE: 10,
  INTERMEDIATE: 10
};

const MIN_QUESTIONS_PER_TOPIC = 40;

const LEARNING_STAGES = [
  'LEARN',
  'SOLVED_EXAMPLE',
  'GUIDED_TRY',
  'PRACTICE',
  'CHALLENGE',
  'APPLY'
];

const STAGES = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

const SECTION_TYPES = ['VARC', 'DILR', 'QA'];

const QUESTION_SOURCE_TYPES = ['ORIGINAL_PRACTICE', 'CAT_PYQ'];

const REQUIRED_SOLUTION_FIELDS = [
  'finalAnswer',
  'steps',
  'concept',
  'whyItWorks',
  'commonMistake'
];

const OPTIONAL_SOLUTION_FIELDS = [
  'alternativeMethod',
  'catTip'
];

const DIAGNOSTIC_CONFIG = {
  totalQuestions: 12,
  sections: {
    VARC: 4,
    DILR: 4,
    QA: 4
  }
};

const STAGE_CLASSIFICATION_THRESHOLDS = {
  BEGINNER_MAX_SCORE: 4,        // 0 to 4 correct out of 12 -> BEGINNER
  INTERMEDIATE_MIN_SCORE: 5,    // 5 to 8 correct out of 12 -> INTERMEDIATE
  INTERMEDIATE_MAX_SCORE: 8,
  ADVANCED_MIN_SCORE: 9         // 9 to 12 correct out of 12 -> ADVANCED
};

const MASTERY_GATES = {
  FOUNDATION_TO_EASY: 70,        // 70% sustained accuracy
  EASY_TO_MODERATE: 75,          // 75% sustained accuracy
  MODERATE_TO_INTERMEDIATE: 75,   // 75-80% sustained accuracy
  INTERMEDIATE_TO_CAT_LEVEL: 80  // 80%+ sustained accuracy + challenge
};

const PERSONA_NAVIGATION_TABS = {
  BEGINNER: ['Home', 'Learn', 'Practice', 'Progress'],
  INTERMEDIATE: ['Home', 'Learn', 'Practice', 'PYQs', 'Review', 'Progress'],
  ADVANCED: ['Home', 'Practice', 'PYQs', 'Sectionals', 'Mocks', 'Review', 'Analytics']
};

const SUPPORTED_THEMES = ['beige', 'light', 'dark'];

const VERIFIED_PYQ_DATASET = {
  TOTAL_QUESTIONS: 664,
  TOTAL_PAPERS: 10,
  TOTAL_PASSAGES: 82,
  TOTAL_DIAGRAMS: 26
};

module.exports = {
  CANONICAL_TOPICS,
  DIFFICULTY_TIERS,
  ORIGINAL_DIFFICULTY_DISTRIBUTION,
  MIN_QUESTIONS_PER_TOPIC,
  LEARNING_STAGES,
  STAGES,
  SECTION_TYPES,
  QUESTION_SOURCE_TYPES,
  REQUIRED_SOLUTION_FIELDS,
  OPTIONAL_SOLUTION_FIELDS,
  DIAGNOSTIC_CONFIG,
  STAGE_CLASSIFICATION_THRESHOLDS,
  MASTERY_GATES,
  PERSONA_NAVIGATION_TABS,
  SUPPORTED_THEMES,
  VERIFIED_PYQ_DATASET
};

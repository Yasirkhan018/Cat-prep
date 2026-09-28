/**
 * Adaptive CAT Preparation System - Core Type Definitions & Interface Contracts
 * Specified in PROJECT.md § Interface Contracts
 */

export type Stage = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export type SectionType = 'VARC' | 'DILR' | 'QA';

export type DifficultyTier =
  | 'FOUNDATION'
  | 'EASY'
  | 'MODERATE'
  | 'INTERMEDIATE'
  | 'CAT_LEVEL'
  | 'ADVANCED';

export type LearningStage =
  | 'LEARN'
  | 'SOLVED_EXAMPLE'
  | 'GUIDED_TRY'
  | 'PRACTICE'
  | 'CHALLENGE'
  | 'APPLY';

export type QuestionSourceType = 'ORIGINAL_PRACTICE' | 'CAT_PYQ';

export type QuestionFormatType = 'MCQ' | 'TITA';

export interface OriginalQuestionSolution {
  finalAnswer: string;
  steps: string[];
  concept: string;
  whyItWorks: string;
  alternativeMethod?: string;
  commonMistake: string;
  catTip?: string;
}

export interface OriginalQuestion {
  id: string;
  sourceType: 'ORIGINAL_PRACTICE';
  section: SectionType;
  topicId: string;
  topicName: string;
  subtopic: string;
  concept: string;
  difficulty: 'FOUNDATION' | 'EASY' | 'MODERATE' | 'INTERMEDIATE';
  questionType: 'MCQ' | 'TITA';
  questionText: string;
  options?: string[] | null;
  correctAnswer: string;
  solution: OriginalQuestionSolution;
  estimatedTime: number; // in seconds
  learningObjective: string;
}

export interface DiagnosticScore {
  total: number;
  varc: number;
  dilr: number;
  qa: number;
  velocitySeconds: number;
}

export interface TopicAccuracyStats {
  attempted: number;
  correct: number;
  rollingRate: number; // 0 to 1
}

export interface TopicVelocityStats {
  avgTimeSeconds: number;
}

export interface AdaptiveProfile {
  stage: Stage;
  diagnosticCompleted: boolean;
  diagnosticScore?: DiagnosticScore;
  sectionFoundations: Record<SectionType, number>;
  topicMastery: Record<string, number>; // 0 to 100
  topicAccuracy: Record<string, TopicAccuracyStats>;
  topicVelocity: Record<string, TopicVelocityStats>;
  weakAreas: string[];
  strongAreas: string[];
  currentDifficulty: Record<string, 'FOUNDATION' | 'EASY' | 'MODERATE' | 'INTERMEDIATE'>;
}

export interface DiagnosticQuestion {
  id: string;
  section: SectionType;
  topicId: string;
  topicName: string;
  difficulty: 'FOUNDATION' | 'EASY' | 'MODERATE' | 'INTERMEDIATE';
  questionType: 'MCQ' | 'TITA';
  questionText: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface SectionDiagnosticScore {
  attempted: number;
  correct: number;
  accuracy: number;
  timeSpentSeconds: number;
}

export interface DiagnosticResult {
  totalQuestions: number; // 12 (4 VARC, 4 DILR, 4 QA)
  totalCorrect: number;
  accuracy: number;
  timeSpentSeconds: number;
  sectionScores: Record<SectionType, SectionDiagnosticScore>;
  assignedStage: Stage;
  initialWeakTopics: string[];
  initialStrongTopics: string[];
}

export interface StageClassificationThresholds {
  beginnerMaxScore: number;       // e.g. <= 4 correct -> BEGINNER
  intermediateMinScore: number;   // e.g. 5
  intermediateMaxScore: number;   // e.g. 8
  advancedMinScore: number;       // e.g. >= 9 correct -> ADVANCED
}

export interface StageClassificationRules {
  thresholds: StageClassificationThresholds;
  sectionGateMinCorrect: number;  // min score per section to qualify for advanced
  reassessmentAccuracyGate: {
    foundationToEasy: number;     // e.g. 0.70
    easyToModerate: number;       // e.g. 0.75
    moderateToIntermediate: number;// e.g. 0.80
  };
}

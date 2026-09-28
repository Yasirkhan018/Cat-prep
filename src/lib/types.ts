// Re-export adaptive preparation system type definitions & contracts
export * from './types/adaptive';
import type { QuestionSourceType, AdaptiveProfile } from './types/adaptive';

export type Subject = 'QA' | 'DILR' | 'VARC';

export type QuestionType = 'MCQ' | 'TITA' | 'MultiSelect' | 'DILRSet' | 'RCSet';

export type Difficulty = 'Easy' | 'Moderate' | 'Difficult' | 'Very Difficult';

export type ProvenanceTag = 'CAT PYQ' | 'CAT PYQ - Paraphrased' | 'CAT-style PYQ-inspired' | 'Practice';

export type QuestionFeeling = 'Easy' | 'Comfortable' | 'Tricky' | 'Difficult';

export type MistakeReason = 
  | "Didn't know concept"
  | "Calculation mistake"
  | "Misread question"
  | "Got confused"
  | "Guessed"
  | "Time issue"
  | "Other";

export interface Solution {
  stepByStep: string[];
  shortcut?: string;
  keyConcept: string;
  alternateApproach?: string;
  commonTrap?: string;
  whyItWorks?: string;
}

export interface Question {
  id: string;
  source: ProvenanceTag;
  sourceType?: QuestionSourceType; // 'CAT_PYQ' | 'ORIGINAL_PRACTICE'
  exam?: string;
  year?: number;
  slot?: number;
  section: Subject;
  topic: string;
  subtopic: string;
  topicId?: string;
  questionType: QuestionType;
  difficulty: Difficulty;
  difficultyTier?: import('./types/adaptive').DifficultyTier;
  question: string;
  passage?: string; // For RC
  dataset?: string; // For DILR
  options?: string[]; // For MCQ
  correctAnswer: string;
  solution: Solution;
  hints: string[]; // [Hint 1, Hint 2, Hint 3]
  estimatedTimeSeconds: number;
  learningObjective?: string;
  tags: string[];
}

export interface DILRSet {
  id: string;
  title: string;
  source: ProvenanceTag;
  year?: number;
  slot?: number;
  topic: string;
  theme: string; // e.g., 'Cricket Tournament', 'Office Seating'
  dataset: string; // Text / Table description
  questions: Question[];
}

export interface RCSet {
  id: string;
  title: string;
  source: ProvenanceTag;
  year?: number;
  slot?: number;
  genre: 'Philosophy' | 'Psychology' | 'Economics' | 'History' | 'Sociology' | 'Science' | 'Technology' | 'Culture' | 'Business';
  passage: string;
  questions: Question[];
}

export interface UserAttempt {
  id: string;
  questionId: string;
  section: Subject;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  feeling?: QuestionFeeling;
  mistakeReason?: MistakeReason;
  hintsUsedCount: number;
  timestamp: string;
  synced?: boolean;
}

export interface UserProgress {
  xp: number;
  level: number;
  streakDays: number;
  lastStudyDate: string;
  dailyGoalQuestions: number;
  todayQuestionsAttempted: number;
  todayCorrect: number;
  todayTimeSpentSeconds: number;
  bookmarks: string[]; // Question IDs
  attempts: UserAttempt[];
  studyPlan: {
    targetExamDate: string;
    targetHoursPerDay: number;
    dailyMission: {
      qaCount: number;
      dilrSets: number;
      rcPassages: number;
      vaCount: number;
      mistakeReviews: number;
      completed: boolean;
    };
  };
}

export interface FormulaItem {
  id: string;
  subject: Subject;
  topic: string;
  title: string;
  formula: string;
  explanation: string;
  shortcut?: string;
  commonTrap?: string;
  interactiveVars?: { name: string; label: string; min: number; max: number; defaultVal: number }[];
}

// -------------------------------------------------------------
// USER AUTHENTICATION & ONBOARDING TYPES
// -------------------------------------------------------------

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAuthenticated: boolean;
  createdAt: string;
}

export type ExamChoice = 'CAT' | 'XAT' | 'GMAT' | 'SNAP' | 'NMAT' | 'Other';
export type PrepLevel = 'Beginner' | 'Basic understanding' | 'Intermediate' | 'Advanced' | 'Already preparing';
export type PrepSubjectChoice = 'Full Preparation' | 'QA' | 'DILR' | 'VARC' | 'PYQ' | 'Mock Tests';
export type StudyTimePerDay = '30m' | '1h' | '2h' | '3h' | '4h+';
export type StudyStyle = 
  | 'Learn concepts first' 
  | 'Practice questions' 
  | 'PYQs first' 
  | 'Topic-wise preparation' 
  | 'Mixed practice' 
  | 'Full mock tests';

export interface PrepOnboarding {
  isCompleted: boolean;
  currentStep: number; // 1 to 5
  exam: ExamChoice;
  level: PrepLevel;
  subjects: PrepSubjectChoice[];
  targetPercentile: string;
  targetDate: string;
  dailyTime: StudyTimePerDay;
  studyStyle: StudyStyle;
}

export interface ActiveSession {
  subject: Subject;
  topic: string;
  subtopic?: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  questionId?: string;
  lastActiveTimestamp: string;
}

export interface DailyFocusPlan {
  subject: Subject;
  subjectName: string;
  topic: string;
  questionCount: number;
  estimatedMinutes: number;
  levelBadge: string;
  description: string;
  suggestedAction: string;
}

export interface UserAppState {
  user: UserProfile | null;
  onboarding: PrepOnboarding;
  activeSession: ActiveSession | null;
  todayPlanCompleted: boolean;
  progress: UserProgress;
  adaptiveProfile?: AdaptiveProfile;
};


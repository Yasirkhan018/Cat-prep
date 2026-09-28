import { OriginalQuestion, SectionType, DifficultyTier, Stage } from '../../types/adaptive';
import { QA_ORIGINAL_QUESTIONS } from './qaQuestions';
import { DILR_ORIGINAL_QUESTIONS } from './dilrQuestions';
import { VARC_ORIGINAL_QUESTIONS } from './varcQuestions';

// Master aggregation of all original practice questions
export const ORIGINAL_PRACTICE_QUESTIONS: OriginalQuestion[] = [
  ...QA_ORIGINAL_QUESTIONS,
  ...DILR_ORIGINAL_QUESTIONS,
  ...VARC_ORIGINAL_QUESTIONS
];

/**
 * Filter original questions by section
 */
export function getOriginalQuestionsBySection(section: SectionType): OriginalQuestion[] {
  return ORIGINAL_PRACTICE_QUESTIONS.filter(q => q.section === section);
}

/**
 * Filter original questions by topicId
 */
export function getOriginalQuestionsByTopic(topicId: string): OriginalQuestion[] {
  return ORIGINAL_PRACTICE_QUESTIONS.filter(q => q.topicId === topicId || q.subtopic.toLowerCase().includes(topicId.toLowerCase()));
}

/**
 * Filter original questions by difficulty tier
 */
export function getOriginalQuestionsByDifficulty(diff: DifficultyTier): OriginalQuestion[] {
  return ORIGINAL_PRACTICE_QUESTIONS.filter(q => q.difficulty === diff);
}

/**
 * Get practice questions tailored to a student stage
 * - BEGINNER: prioritize FOUNDATION & EASY
 * - INTERMEDIATE: prioritize EASY & MODERATE
 * - ADVANCED: prioritize MODERATE & INTERMEDIATE
 */
export function getOriginalQuestionsByStage(stage: Stage, section?: SectionType): OriginalQuestion[] {
  const pool = section ? getOriginalQuestionsBySection(section) : ORIGINAL_PRACTICE_QUESTIONS;

  if (stage === 'BEGINNER') {
    const primary = pool.filter(q => q.difficulty === 'FOUNDATION' || q.difficulty === 'EASY');
    return primary.length > 0 ? primary : pool;
  }

  if (stage === 'INTERMEDIATE') {
    const primary = pool.filter(q => q.difficulty === 'EASY' || q.difficulty === 'MODERATE');
    return primary.length > 0 ? primary : pool;
  }

  // ADVANCED
  const primary = pool.filter(q => q.difficulty === 'MODERATE' || q.difficulty === 'INTERMEDIATE');
  return primary.length > 0 ? primary : pool;
}

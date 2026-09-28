'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BarChart3,
  Award,
  AlertCircle
} from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '@/lib/data/diagnosticQuestions';
import {
  DiagnosticResult,
  SectionDiagnosticScore,
  Stage,
  SectionType
} from '@/lib/types/adaptive';
import {
  getAppState,
  updateProfileFromDiagnostic,
  getAdaptiveProfile
} from '@/lib/store/appStore';

export default function DiagnosticPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeSpent, setTimeSpent] = useState<Record<string, number>>({});
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const state = getAppState();
    if (!state.user || !state.user.isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  // Overall timer
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setTotalSeconds(prev => prev + 1);
      const currentQId = DIAGNOSTIC_QUESTIONS[currentIndex]?.id;
      if (currentQId) {
        setTimeSpent(prev => ({
          ...prev,
          [currentQId]: (prev[currentQId] || 0) + 1
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, isSubmitted]);

  if (!isClient) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-cat-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const handleSelectAnswer = (ans: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: ans
    }));
  };

  const handleClearAnswer = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleSubmit = () => {
    // Grade the diagnostic assessment
    let totalCorrect = 0;
    const sectionScores: Record<SectionType, SectionDiagnosticScore> = {
      VARC: { attempted: 0, correct: 0, accuracy: 0, timeSpentSeconds: 0 },
      DILR: { attempted: 0, correct: 0, accuracy: 0, timeSpentSeconds: 0 },
      QA: { attempted: 0, correct: 0, accuracy: 0, timeSpentSeconds: 0 }
    };

    const weakTopics: string[] = [];
    const strongTopics: string[] = [];

    DIAGNOSTIC_QUESTIONS.forEach(q => {
      const userAnswer = answers[q.id]?.trim();
      const isAttempted = Boolean(userAnswer);
      const isCorrect = isAttempted && (
        q.questionType === 'TITA'
          ? userAnswer.toLowerCase() === q.correctAnswer.trim().toLowerCase()
          : userAnswer === q.correctAnswer
      );

      const sec = q.section;
      if (isAttempted) {
        sectionScores[sec].attempted += 1;
      }
      if (isCorrect) {
        sectionScores[sec].correct += 1;
        totalCorrect += 1;
        strongTopics.push(q.topicName);
      } else {
        weakTopics.push(q.topicName);
      }

      sectionScores[sec].timeSpentSeconds += (timeSpent[q.id] || 0);
    });

    // Compute accuracies
    (['VARC', 'DILR', 'QA'] as SectionType[]).forEach(sec => {
      const att = sectionScores[sec].attempted;
      sectionScores[sec].accuracy = att > 0 ? Math.round((sectionScores[sec].correct / att) * 100) / 100 : 0;
    });

    // Determine Stage
    // Rule:
    // <= 4 correct -> BEGINNER
    // 5 - 8 correct -> INTERMEDIATE
    // >= 9 correct -> ADVANCED
    let assignedStage: Stage = 'BEGINNER';
    if (totalCorrect >= 9) {
      assignedStage = 'ADVANCED';
    } else if (totalCorrect >= 5) {
      assignedStage = 'INTERMEDIATE';
    } else {
      assignedStage = 'BEGINNER';
    }

    const result: DiagnosticResult = {
      totalQuestions: DIAGNOSTIC_QUESTIONS.length,
      totalCorrect,
      accuracy: Math.round((totalCorrect / DIAGNOSTIC_QUESTIONS.length) * 100) / 100,
      timeSpentSeconds: totalSeconds,
      sectionScores,
      assignedStage,
      initialWeakTopics: Array.from(new Set(weakTopics)),
      initialStrongTopics: Array.from(new Set(strongTopics))
    };

    // Commit to app store
    updateProfileFromDiagnostic(result);
    setDiagnosticResult(result);
    setIsSubmitted(true);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  // --- RESULT VIEW ---
  if (isSubmitted && diagnosticResult) {
    const stageTitles: Record<Stage, { name: string; tag: string; desc: string }> = {
      BEGINNER: {
        name: 'Foundational Builder',
        tag: 'Level 1: Concept Calibration',
        desc: 'Your preparation will prioritize core arithmetic, reading accuracy, and elementary puzzle frameworks before exposing you to high-intensity CAT PYQs.'
      },
      INTERMEDIATE: {
        name: 'Targeted Practitioner',
        tag: 'Level 2: Application & Velocity',
        desc: 'You have solid conceptual foundations. Your system will emphasize moderate difficulty sets, time management traps, and selective CAT slot questions.'
      },
      ADVANCED: {
        name: 'CAT Slot Strategist',
        tag: 'Level 3: Exam Mastery',
        desc: 'Demonstrated high solving accuracy. Your system is configured for full slot simulations, high-complexity DILR sets, and speed optimization.'
      }
    };

    const currentStageInfo = stageTitles[diagnosticResult.assignedStage];

    return (
      <div className="max-w-2xl mx-auto space-y-8 select-none pb-20 pt-4">
        {/* Stage Badge & Assessment Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cat-primary/10 border border-cat-primary/30 text-cat-primary text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentStageInfo.tag}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-cat-ink">
            {currentStageInfo.name}
          </h1>
          <p className="text-sm text-cat-sub max-w-lg mx-auto leading-relaxed">
            {currentStageInfo.desc}
          </p>
        </div>

        {/* Core Metric Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-cat-card border border-cat-border rounded-xl p-4 text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cat-sub">Score</span>
            <div className="text-2xl font-bold text-cat-ink font-mono">
              {diagnosticResult.totalCorrect} <span className="text-sm font-normal text-cat-sub">/ 12</span>
            </div>
          </div>
          <div className="bg-cat-card border border-cat-border rounded-xl p-4 text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cat-sub">Accuracy</span>
            <div className="text-2xl font-bold text-cat-ink font-mono">
              {Math.round(diagnosticResult.accuracy * 100)}%
            </div>
          </div>
          <div className="bg-cat-card border border-cat-border rounded-xl p-4 text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cat-sub">Pace</span>
            <div className="text-2xl font-bold text-cat-ink font-mono">
              {formatTimer(diagnosticResult.timeSpentSeconds)}
            </div>
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="bg-cat-card border border-cat-border rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-cat-ink font-semibold">
            Sectional Baseline
          </h3>
          <div className="space-y-3">
            {(['VARC', 'DILR', 'QA'] as SectionType[]).map(sec => {
              const score = diagnosticResult.sectionScores[sec];
              const sectionNames = {
                VARC: 'Verbal Ability & Reading Comprehension',
                DILR: 'Data Interpretation & Logical Reasoning',
                QA: 'Quantitative Aptitude'
              };
              return (
                <div key={sec} className="flex items-center justify-between border-b border-cat-border/60 pb-3 last:border-0 last:pb-0">
                  <div>
                    <span className="text-xs font-mono font-bold text-cat-ink">{sec}</span>
                    <p className="text-xs text-cat-sub">{sectionNames[sec]}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm font-semibold text-cat-ink">
                      {score.correct} / 4 Correct
                    </span>
                    <p className="text-[11px] font-mono text-cat-sub">
                      {Math.round(score.accuracy * 100)}% acc
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button to Workspace */}
        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Enter My Personalized Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // --- ACTIVE DIAGNOSTIC TEST VIEW ---
  return (
    <div className="max-w-3xl mx-auto space-y-6 select-none pb-24 pt-2">
      {/* Top Test Bar */}
      <div className="flex items-center justify-between border-b border-cat-border pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cat-sub">
            CAT Diagnostic Calibration
          </span>
          <h2 className="text-sm font-bold text-cat-ink">
            Question {currentIndex + 1} of {DIAGNOSTIC_QUESTIONS.length}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-cat-card border border-cat-border text-xs font-mono font-medium text-cat-ink">
            <Clock className="w-3.5 h-3.5 text-cat-sub" />
            <span>{formatTimer(totalSeconds)}</span>
          </div>

          <button
            onClick={handleSubmit}
            className="px-3.5 py-1 rounded-md bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text text-xs font-medium transition-colors"
          >
            Finish Diagnostic
          </button>
        </div>
      </div>

      {/* Question Header & Section Tag */}
      <div className="flex items-center justify-between text-xs text-cat-sub">
        <span className="font-mono px-2 py-0.5 rounded bg-cat-card border border-cat-border text-cat-ink font-semibold">
          Section: {currentQ.section} • {currentQ.topicName}
        </span>
        <span className="font-mono text-cat-sub">
          {currentQ.questionType === 'TITA' ? 'Type in the Answer (TITA)' : 'Multiple Choice'}
        </span>
      </div>

      {/* Question Content */}
      <div className="bg-cat-card border border-cat-border rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
        <div className="text-sm sm:text-base text-cat-ink leading-relaxed whitespace-pre-line font-sans">
          {currentQ.questionText}
        </div>

        {/* Options / Input */}
        {currentQ.questionType === 'MCQ' && currentQ.options ? (
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id] === opt;
              const optionLetters = ['A', 'B', 'C', 'D'];
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(opt)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-lg border text-sm transition-colors flex items-start gap-3 ${
                    isSelected
                      ? 'bg-cat-primary/10 border-cat-primary text-cat-ink font-medium'
                      : 'border-cat-border hover:bg-cat-card-subtle text-cat-ink'
                  }`}
                >
                  <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 border ${
                    isSelected ? 'bg-cat-primary text-cat-primary-text border-cat-primary' : 'bg-cat-card-subtle border-cat-border text-cat-sub'
                  }`}>
                    {optionLetters[idx]}
                  </span>
                  <span className="pt-0.5">{opt}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="pt-2 space-y-2 max-w-xs">
            <label className="text-xs font-mono text-cat-sub block">
              Enter your answer (e.g. 27 or 3421):
            </label>
            <input
              type="text"
              value={answers[currentQ.id] || ''}
              onChange={e => handleSelectAnswer(e.target.value)}
              placeholder="Type your answer"
              className="w-full px-4 py-2.5 rounded-lg border border-cat-border bg-cat-bg text-cat-ink font-mono text-sm focus:outline-none focus:border-cat-primary"
            />
          </div>
        )}

        {/* Clear response */}
        {answers[currentQ.id] && (
          <div className="pt-2">
            <button
              onClick={handleClearAnswer}
              className="inline-flex items-center gap-1 text-xs text-cat-sub hover:text-cat-ink transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear answer</span>
            </button>
          </div>
        )}
      </div>

      {/* Question Palette (1 - 12) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
            const isAnswered = Boolean(answers[q.id]);
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-7 h-7 rounded text-xs font-mono font-medium transition-colors border ${
                  isCurrent
                    ? 'border-cat-primary ring-2 ring-cat-primary/30 text-cat-ink'
                    : isAnswered
                    ? 'bg-cat-primary/20 border-cat-primary/40 text-cat-ink font-bold'
                    : 'bg-cat-card border-cat-border text-cat-sub hover:text-cat-ink'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-cat-border text-xs text-cat-ink disabled:opacity-40 hover:bg-cat-card transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          {currentIndex < DIAGNOSTIC_QUESTIONS.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(DIAGNOSTIC_QUESTIONS.length - 1, prev + 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text text-xs font-medium transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-md bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text text-xs font-semibold transition-colors"
            >
              <span>Submit All</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

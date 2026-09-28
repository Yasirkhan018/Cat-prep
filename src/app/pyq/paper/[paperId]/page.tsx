'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Clock, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  HelpCircle, 
  Bookmark, 
  RotateCcw, 
  Layers, 
  FileText, 
  Maximize2, 
  Minimize2, 
  Award,
  BarChart2,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { 
  PYQService, 
  PYQPaper, 
  PYQQuestion, 
  PYQPassage 
} from '@/lib/data/pyqService';
import MathText from '@/components/common/MathText';

type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked';

export default function AuthenticPaperExamPage() {
  const params = useParams();
  const router = useRouter();
  const paperId = (params?.paperId as string) || 'cat_2024_slot1';

  const paper = useMemo(() => PYQService.getPaperById(paperId), [paperId]);
  const allPaperQuestions = useMemo(() => PYQService.getQuestionsByPaper(paperId), [paperId]);

  // Section configuration
  const sections: Array<'VARC' | 'DILR' | 'QA'> = ['VARC', 'DILR', 'QA'];
  const [currentSection, setCurrentSection] = useState<'VARC' | 'DILR' | 'QA'>('VARC');
  const [currentQIndex, setCurrentQIndex] = useState(0);

  // User responses & question status
  // userAnswers: { [qId]: 'A' | 'B' | 'C' | 'D' | '123' }
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [questionStatuses, setQuestionStatuses] = useState<Record<string, QuestionStatus>>({});

  // Timers (in seconds): Total 120 min = 7200s, Section 40 min = 2400s
  const [totalSecondsLeft, setTotalSecondsLeft] = useState(120 * 60);
  const [sectionSecondsLeft, setSectionSecondsLeft] = useState(40 * 60);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');

  // Bookmarks & mistakes
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [mistakeIds, setMistakeIds] = useState<Set<string>>(new Set());

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Active section questions
  const currentSectionQuestions = useMemo(() => {
    return allPaperQuestions.filter(q => q.section === currentSection);
  }, [allPaperQuestions, currentSection]);

  const activeQuestion: PYQQuestion | undefined = currentSectionQuestions[currentQIndex];
  const activePassage: PYQPassage | undefined = activeQuestion?.passage_id 
    ? PYQService.getPassageById(activeQuestion.passage_id) 
    : undefined;

  // Initialize or mark question as visited
  useEffect(() => {
    if (activeQuestion && !questionStatuses[activeQuestion.id]) {
      setQuestionStatuses(prev => ({
        ...prev,
        [activeQuestion.id]: 'not_answered'
      }));
    }
  }, [activeQuestion, questionStatuses]);

  // Countdown Timer
  useEffect(() => {
    if (isExamSubmitted) return;

    const timer = setInterval(() => {
      setTotalSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });

      setSectionSecondsLeft(prev => {
        if (prev <= 1) {
          // Auto advance to next section if time ends
          handleNextSection();
          return 40 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamSubmitted, currentSection]);

  const handleNextSection = () => {
    const curIdx = sections.indexOf(currentSection);
    if (curIdx < sections.length - 1) {
      setCurrentSection(sections[curIdx + 1]);
      setCurrentQIndex(0);
      setSectionSecondsLeft(40 * 60);
    } else {
      handleSubmitExam();
    }
  };

  const handleSelectSection = (sec: 'VARC' | 'DILR' | 'QA') => {
    setCurrentSection(sec);
    setCurrentQIndex(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Answer selections
  const handleSelectOption = (optVal: string) => {
    if (!activeQuestion) return;
    setUserAnswers(prev => ({ ...prev, [activeQuestion.id]: optVal }));
  };

  const handleClearResponse = () => {
    if (!activeQuestion) return;
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[activeQuestion.id];
      return next;
    });
    setQuestionStatuses(prev => ({
      ...prev,
      [activeQuestion.id]: 'not_answered'
    }));
  };

  const handleSaveAndNext = () => {
    if (!activeQuestion) return;
    const hasAnswer = !!userAnswers[activeQuestion.id];
    setQuestionStatuses(prev => ({
      ...prev,
      [activeQuestion.id]: hasAnswer ? 'answered' : 'not_answered'
    }));

    if (currentQIndex < currentSectionQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!activeQuestion) return;
    const hasAnswer = !!userAnswers[activeQuestion.id];
    setQuestionStatuses(prev => ({
      ...prev,
      [activeQuestion.id]: hasAnswer ? 'answered_and_marked' : 'marked_for_review'
    }));

    if (currentQIndex < currentSectionQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (currentSectionQuestions[index]) {
      setCurrentQIndex(index);
    }
  };

  const handleSubmitExam = () => {
    setIsExamSubmitted(true);
    setIsReviewMode(true);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('cat_pyq_bookmarks', JSON.stringify(Array.from(next)));
      } catch (e) {}
      return next;
    });
  };

  const toggleMistake = (id: string) => {
    setMistakeIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('cat_pyq_mistakes', JSON.stringify(Array.from(next)));
      } catch (e) {}
      return next;
    });
  };

  // Score Calculation
  const scoreReport = useMemo(() => {
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const sectionStats: Record<string, { attempted: number; correct: number; incorrect: number; unattempted: number; score: number }> = {
      VARC: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
      DILR: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
      QA: { attempted: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 },
    };

    allPaperQuestions.forEach(q => {
      const userAns = userAnswers[q.id]?.trim();
      const correctAns = q.correct_answer?.trim();
      const secStat = sectionStats[q.section];

      if (!userAns) {
        unattemptedCount++;
        secStat.unattempted++;
      } else {
        secStat.attempted++;
        const isMatch = userAns.toUpperCase() === correctAns.toUpperCase();
        if (isMatch) {
          correctCount++;
          secStat.correct++;
          secStat.score += 3;
          totalScore += 3;
        } else {
          incorrectCount++;
          secStat.incorrect++;
          if (q.question_type === 'MCQ') {
            secStat.score -= 1;
            totalScore -= 1;
          }
        }
      }
    });

    const maxScore = allPaperQuestions.length * 3;
    const accuracy = correctCount + incorrectCount > 0 
      ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
      : 0;

    return {
      totalScore,
      maxScore,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
      sectionStats
    };
  }, [allPaperQuestions, userAnswers]);

  if (!paper) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-4">
        <h2 className="text-lg font-bold text-cat-ink">Paper Not Found</h2>
        <p className="text-xs text-cat-sub">The requested past paper could not be found.</p>
        <Link
          href="/pyq"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cat-primary text-cat-primary-text"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PYQ Center</span>
        </Link>
      </div>
    );
  }

  // -------------------------------------------------------------
  // POST-EXAM REVIEW VIEW
  // -------------------------------------------------------------
  if (isExamSubmitted) {
    const filteredReviewQuestions = allPaperQuestions.filter(q => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns && userAns.toUpperCase() === q.correct_answer.toUpperCase();
      if (reviewFilter === 'correct') return isCorrect;
      if (reviewFilter === 'incorrect') return userAns && !isCorrect;
      if (reviewFilter === 'unattempted') return !userAns;
      return true;
    });

    return (
      <div className="max-w-5xl mx-auto space-y-8 select-none pb-24">
        {/* Review Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cat-border pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                Test Completed
              </span>
              <span className="text-xs text-cat-faint">•</span>
              <span className="text-xs font-mono text-cat-muted">{paper.name}</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
              Official Exam Performance & Analysis
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setUserAnswers({});
                setQuestionStatuses({});
                setIsExamSubmitted(false);
                setTotalSecondsLeft(120 * 60);
                setSectionSecondsLeft(40 * 60);
                setCurrentSection('VARC');
                setCurrentQIndex(0);
              }}
              className="px-3 py-2 rounded-xl text-xs font-medium border border-cat-border bg-cat-card hover:bg-cat-hover text-cat-ink transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Paper</span>
            </button>
            <Link
              href="/pyq"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cat-primary text-cat-primary-text hover:opacity-90 transition-all flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Exit to PYQ Center</span>
            </Link>
          </div>
        </header>

        {/* Score Summary Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl border border-cat-border bg-cat-card">
            <div className="text-[11px] font-mono uppercase text-cat-faint">Net Score</div>
            <div className="text-2xl font-bold text-cat-ink font-mono mt-1">
              {scoreReport.totalScore} <span className="text-xs font-normal text-cat-muted">/ {scoreReport.maxScore}</span>
            </div>
            <div className="text-[11px] text-cat-muted mt-0.5">+3 / -1 Authentic CAT Marking</div>
          </div>
          <div className="p-4 rounded-2xl border border-cat-border bg-cat-card">
            <div className="text-[11px] font-mono uppercase text-cat-faint">Accuracy</div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              {scoreReport.accuracy}%
            </div>
            <div className="text-[11px] text-cat-muted mt-0.5">{scoreReport.correctCount} correct of {scoreReport.correctCount + scoreReport.incorrectCount} attempted</div>
          </div>
          <div className="p-4 rounded-2xl border border-cat-border bg-cat-card">
            <div className="text-[11px] font-mono uppercase text-cat-faint">Questions Attempted</div>
            <div className="text-2xl font-bold text-cat-ink font-mono mt-1">
              {scoreReport.correctCount + scoreReport.incorrectCount} <span className="text-xs font-normal text-cat-muted">/ {allPaperQuestions.length}</span>
            </div>
            <div className="text-[11px] text-cat-muted mt-0.5">{scoreReport.unattemptedCount} unattempted</div>
          </div>
          <div className="p-4 rounded-2xl border border-cat-border bg-cat-card">
            <div className="text-[11px] font-mono uppercase text-cat-faint">Official Key Coverage</div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              100%
            </div>
            <div className="text-[11px] text-cat-muted mt-0.5">All answers verified from source</div>
          </div>
        </div>

        {/* Section Breakdown Table */}
        <div className="p-5 rounded-2xl border border-cat-border bg-cat-card space-y-4">
          <h2 className="text-sm font-bold text-cat-ink">Sectional Performance Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-cat-border text-cat-faint font-mono uppercase text-[11px]">
                  <th className="pb-2">Section</th>
                  <th className="pb-2">Total Qs</th>
                  <th className="pb-2">Attempted</th>
                  <th className="pb-2">Correct (+3)</th>
                  <th className="pb-2">Wrong (-1)</th>
                  <th className="pb-2">Unattempted</th>
                  <th className="pb-2">Net Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cat-border text-cat-ink font-mono">
                {sections.map(sec => {
                  const s = scoreReport.sectionStats[sec];
                  const totalSecQs = paper.sections?.[sec]?.q_count || (sec === 'VARC' ? 24 : sec === 'QA' ? 22 : (paper.year === 2024 ? 22 : 20));
                  return (
                    <tr key={sec}>
                      <td className="py-2.5 font-bold font-sans">{sec}</td>
                      <td className="py-2.5">{totalSecQs}</td>
                      <td className="py-2.5">{s.attempted}</td>
                      <td className="py-2.5 text-emerald-600 dark:text-emerald-400 font-semibold">{s.correct}</td>
                      <td className="py-2.5 text-rose-600 dark:text-rose-400 font-semibold">{s.incorrect}</td>
                      <td className="py-2.5 text-cat-muted">{s.unattempted}</td>
                      <td className="py-2.5 font-bold text-cat-ink">{s.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Question Review Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-sm font-bold text-cat-ink">Question-by-Question Detailed Review</h2>
            <div className="flex items-center gap-1.5 text-xs">
              {(['all', 'correct', 'incorrect', 'unattempted'] as const).map(flt => (
                <button
                  key={flt}
                  onClick={() => setReviewFilter(flt)}
                  className={`px-2.5 py-1 rounded-lg font-medium capitalize transition-colors ${
                    reviewFilter === flt
                      ? 'bg-cat-primary text-cat-primary-text font-semibold'
                      : 'bg-cat-card-subtle text-cat-sub hover:text-cat-ink border border-cat-border'
                  }`}
                >
                  {flt} ({flt === 'all' ? allPaperQuestions.length : flt === 'correct' ? scoreReport.correctCount : flt === 'incorrect' ? scoreReport.incorrectCount : scoreReport.unattemptedCount})
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredReviewQuestions.map(q => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns && userAns.toUpperCase() === q.correct_answer.toUpperCase();
              const isAttempted = !!userAns;
              const passage = q.passage_id ? PYQService.getPassageById(q.passage_id) : null;
              const isBookmarked = bookmarkedIds.has(q.id);
              const isMistake = mistakeIds.has(q.id);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border space-y-4 bg-cat-card transition-all ${
                    isCorrect
                      ? 'border-emerald-500/30'
                      : isAttempted
                      ? 'border-rose-500/30'
                      : 'border-cat-border'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-cat-border pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cat-primary text-cat-primary-text">
                        Q.{q.question_number}
                      </span>
                      <span className="text-xs font-semibold text-cat-ink">
                        {q.section} • {q.topic}
                      </span>
                      <span className="text-[11px] font-mono text-cat-faint">
                        ({q.question_type})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" /> +3 Marks (Correct)
                        </span>
                      ) : isAttempted ? (
                        <span className="flex items-center gap-1 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                          <XCircle className="w-3.5 h-3.5" /> {q.question_type === 'MCQ' ? '-1 Mark (Incorrect)' : '0 Marks (Incorrect)'}
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-cat-muted">
                          0 Marks (Unattempted)
                        </span>
                      )}

                      <button
                        onClick={() => toggleBookmark(q.id)}
                        className={`p-1.5 rounded-lg border text-xs ${
                          isBookmarked ? 'bg-amber-500/10 text-amber-600 border-amber-500/30' : 'bg-cat-card-subtle text-cat-muted border-cat-border'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => toggleMistake(q.id)}
                        className={`p-1.5 rounded-lg border text-xs ${
                          isMistake ? 'bg-rose-500/10 text-rose-600 border-rose-500/30' : 'bg-cat-card-subtle text-cat-muted border-cat-border'
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Passage excerpt if linked */}
                  {passage && (
                    <details className="text-xs rounded-xl border border-cat-border bg-cat-card-subtle p-3">
                      <summary className="font-semibold text-cat-ink cursor-pointer flex items-center justify-between">
                        <span>Associated Set: {passage.title}</span>
                        <span className="text-[11px] text-cat-faint font-mono">Toggle Context</span>
                      </summary>
                      <div className="pt-3 border-t border-cat-border mt-2 font-serif whitespace-pre-line leading-relaxed text-cat-sub">
                        {passage.content}
                        {passage.image_urls && passage.image_urls.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                            {passage.image_urls.map((img, i) => (
                              <img key={i} src={img} alt="Set diagram" className="rounded border border-cat-border max-h-56 object-contain bg-white" />
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  )}

                  {/* Question text */}
                  <div className="text-sm text-cat-ink leading-relaxed">
                    <MathText content={q.question_text} />
                  </div>

                  {/* Options */}
                  {q.question_type === 'MCQ' && q.options && (
                    <div className="space-y-1.5 pt-1">
                      {q.options.map((opt, idx) => {
                        const optLetter = String.fromCharCode(65 + idx);
                        const isStudent = userAns === optLetter;
                        const isKey = q.correct_answer.toUpperCase() === optLetter;

                        let style = 'border-cat-border bg-cat-card text-cat-ink';
                        if (isKey) {
                          style = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 font-semibold';
                        } else if (isStudent && !isKey) {
                          style = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-300';
                        }

                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${style}`}
                          >
                            <span className="font-mono font-bold text-[11px] px-1.5 py-0.5 rounded bg-cat-card-subtle">
                              {optLetter}
                            </span>
                            <div className="flex-1 leading-relaxed">
                              <MathText content={opt} />
                            </div>
                            {isKey && (
                              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase px-1.5 py-0.5 rounded bg-emerald-500/20">
                                Official Answer
                              </span>
                            )}
                            {isStudent && !isKey && (
                              <span className="text-[10px] font-mono font-bold text-rose-600 uppercase px-1.5 py-0.5 rounded bg-rose-500/20">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TITA Response Comparison */}
                  {q.question_type === 'TITA' && (
                    <div className="p-3 rounded-xl border border-cat-border bg-cat-card-subtle text-xs space-y-1 font-mono">
                      <div>Your Answer: <strong className="text-cat-ink">{userAns || 'None (Unattempted)'}</strong></div>
                      <div>Official Key: <strong className="text-emerald-600 dark:text-emerald-400">{q.correct_answer}</strong></div>
                    </div>
                  )}

                  {/* Fallback Solution Note */}
                  <div className="p-3 rounded-xl border border-cat-border bg-cat-card-subtle text-xs text-cat-muted space-y-1">
                    <div className="font-semibold text-cat-ink">Source Solution Note:</div>
                    <p className="text-[11px] italic">
                      Detailed step-by-step solution is not available in the authentic source material. The official CAT answer key is provided above verbatim.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // LIVE AUTHENTIC EXAM VIEW (120 MIN TIMED WORKSPACE)
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto space-y-4 select-none pb-20">
      {/* Top Exam Navigation Bar */}
      <header className="p-4 rounded-2xl border border-cat-border bg-cat-card flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/pyq"
            className="p-1.5 rounded-lg border border-cat-border bg-cat-card-subtle text-cat-muted hover:text-cat-ink transition-colors"
            title="Leave Exam"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-cat-ink">{paper.name}</h1>
            <div className="text-[11px] text-cat-muted font-mono">Authentic Timed CAT Mock Simulation</div>
          </div>
        </div>

        {/* Section Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-cat-card-subtle border border-cat-border text-xs">
          {sections.map(sec => {
            const isSecActive = currentSection === sec;
            const qCount = paper.sections?.[sec]?.q_count || (sec === 'VARC' ? 24 : sec === 'QA' ? 22 : (paper.year === 2024 ? 22 : 20));
            return (
              <button
                key={sec}
                onClick={() => handleSelectSection(sec)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  isSecActive
                    ? 'bg-cat-card text-cat-ink shadow-sm border border-cat-border'
                    : 'text-cat-sub hover:text-cat-ink'
                }`}
              >
                <span>{sec}</span>
                <span className="ml-1 text-[10px] font-mono text-cat-muted font-normal">({qCount})</span>
              </button>
            );
          })}
        </div>

        {/* Timers & Submit */}
        <div className="flex items-center gap-4">
          <div className="text-right font-mono">
            <div className="text-[10px] uppercase text-cat-faint tracking-wider">Section Timer</div>
            <div className="text-base font-bold text-cat-ink flex items-center gap-1 justify-end">
              <Clock className="w-3.5 h-3.5 text-cat-muted" />
              <span>{formatTime(sectionSecondsLeft)}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-cat-border" />

          <div className="text-right font-mono">
            <div className="text-[10px] uppercase text-cat-faint tracking-wider">Exam Timer</div>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 justify-end">
              <span>{formatTime(totalSecondsLeft)}</span>
            </div>
          </div>

          <button
            onClick={handleSubmitExam}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-cat-primary text-cat-primary-text hover:opacity-90 transition-all shadow-sm"
          >
            Submit Paper
          </button>
        </div>
      </header>

      {/* Main Examination Workspace: Split Pane (Left: Passage / Figures, Right: Question + Palette) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Reading Passage or DILR Caselet (if present) */}
        {activePassage ? (
          <section className="lg:col-span-7 p-6 rounded-2xl border border-cat-border bg-cat-card space-y-4 max-h-[750px] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-cat-border pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-cat-faint tracking-wider">
                  {currentSection === 'VARC' ? 'Reading Comprehension' : 'DILR Problem Set'}
                </span>
                <h2 className="text-sm font-bold text-cat-ink mt-0.5">{activePassage.title}</h2>
              </div>
              <span className="text-[11px] font-mono text-cat-muted px-2 py-0.5 rounded bg-cat-card-subtle border border-cat-border">
                {activePassage.question_ids.length} Questions
              </span>
            </div>

            {/* Passage Text */}
            <div className="font-serif text-xs text-cat-ink leading-relaxed whitespace-pre-line">
              {activePassage.content}
            </div>

            {/* Figures / Charts if present */}
            {activePassage.image_urls && activePassage.image_urls.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-cat-border">
                <div className="text-[11px] font-mono uppercase text-cat-faint">
                  Problem Figures & Visual Datasets:
                </div>
                <div className="space-y-3">
                  {activePassage.image_urls.map((imgUrl, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-cat-border bg-white flex flex-col items-center">
                      <img
                        src={imgUrl}
                        alt={`Set diagram ${idx + 1}`}
                        className="max-h-80 object-contain rounded"
                      />
                      <span className="text-[10px] text-zinc-500 font-mono mt-1.5">Figure {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          /* QA or Standalone Verbal: Full Focus Left Header */
          <section className="lg:col-span-7 p-6 rounded-2xl border border-cat-border bg-cat-card space-y-4">
            <div className="border-b border-cat-border pb-3">
              <span className="text-[10px] font-mono uppercase text-cat-faint tracking-wider">
                {currentSection === 'QA' ? 'Quantitative Aptitude' : 'Verbal Ability'}
              </span>
              <h2 className="text-sm font-bold text-cat-ink mt-0.5">Standalone Question Workspace</h2>
            </div>
            <div className="p-6 rounded-xl border border-dashed border-cat-border bg-cat-card-subtle/50 text-center text-xs text-cat-muted space-y-2">
              <Sparkles className="w-6 h-6 mx-auto text-cat-muted" />
              <p>This problem is self-contained. Read the question carefully on the right and input your solution.</p>
              <div className="text-[11px] font-mono text-cat-faint">Topic: {activeQuestion?.topic}</div>
            </div>
          </section>
        )}

        {/* Right Column: Question Content & Action Buttons & Palette */}
        <section className="lg:col-span-5 space-y-4">
          {activeQuestion ? (
            <div className="p-5 rounded-2xl border border-cat-border bg-cat-card space-y-4 shadow-sm">
              {/* Question Meta */}
              <div className="flex items-center justify-between border-b border-cat-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cat-primary text-cat-primary-text">
                    Question {currentQIndex + 1} of {currentSectionQuestions.length}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cat-card-subtle text-cat-muted border border-cat-border">
                    {activeQuestion.topic}
                  </span>
                </div>
                <div className="text-xs font-mono text-cat-muted">
                  {activeQuestion.question_type === 'MCQ' ? '+3, -1 Mark' : '+3, 0 Mark (TITA)'}
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm text-cat-ink leading-relaxed font-sans min-h-[60px]">
                <MathText content={activeQuestion.question_text} />
              </div>

              {/* Options or TITA Field */}
              {activeQuestion.question_type === 'MCQ' && activeQuestion.options && (
                <div className="space-y-2 pt-1">
                  {activeQuestion.options.map((optText, optIdx) => {
                    const optLetter = String.fromCharCode(65 + optIdx);
                    const isSelected = userAnswers[activeQuestion.id] === optLetter;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optLetter)}
                        className={`w-full text-left p-3 rounded-xl border text-xs flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'border-cat-ink bg-cat-card-subtle text-cat-ink font-semibold'
                            : 'border-cat-border bg-cat-card hover:bg-cat-hover text-cat-ink'
                        }`}
                      >
                        <span className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] shrink-0 ${
                          isSelected ? 'bg-cat-ink text-white' : 'bg-cat-card-subtle text-cat-ink'
                        }`}>
                          {optLetter}
                        </span>
                        <div className="flex-1 pt-0.5 leading-relaxed">
                          <MathText content={optText} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {activeQuestion.question_type === 'TITA' && (
                <div className="p-3.5 rounded-xl border border-cat-border bg-cat-card-subtle/50 space-y-2">
                  <div className="text-[11px] font-mono text-cat-muted uppercase">
                    Type-In-The-Answer (TITA)
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your exact numeric answer..."
                    value={userAnswers[activeQuestion.id] || ''}
                    onChange={e => handleSelectOption(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-cat-card border border-cat-border text-cat-ink font-mono focus:outline-none focus:ring-1 focus:ring-cat-ink"
                  />
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="pt-3 border-t border-cat-border grid grid-cols-2 gap-2">
                <button
                  onClick={handleSaveAndNext}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-cat-primary text-cat-primary-text hover:opacity-90 transition-all text-center"
                >
                  Save & Next
                </button>
                <button
                  onClick={handleMarkForReviewAndNext}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 transition-all text-center"
                >
                  Mark for Review & Next
                </button>
                <button
                  onClick={handleClearResponse}
                  className="py-2 px-3 rounded-xl text-xs font-medium border border-cat-border bg-cat-card hover:bg-cat-hover text-cat-sub transition-colors"
                >
                  Clear Response
                </button>
                <div className="flex items-center gap-1">
                  <button
                    disabled={currentQIndex <= 0}
                    onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                    className="flex-1 py-2 px-2 rounded-xl text-xs font-medium border border-cat-border bg-cat-card hover:bg-cat-hover disabled:opacity-40 disabled:pointer-events-none text-cat-ink transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    disabled={currentQIndex >= currentSectionQuestions.length - 1}
                    onClick={() => setCurrentQIndex(prev => Math.min(currentSectionQuestions.length - 1, prev + 1))}
                    className="flex-1 py-2 px-2 rounded-xl text-xs font-medium border border-cat-border bg-cat-card hover:bg-cat-hover disabled:opacity-40 disabled:pointer-events-none text-cat-ink transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {/* Question Palette Widget */}
          <div className="p-4 rounded-2xl border border-cat-border bg-cat-card space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-cat-ink">Question Palette ({currentSection})</h3>
              <span className="text-[11px] font-mono text-cat-muted">{currentSectionQuestions.length} Total</span>
            </div>

            {/* Palette Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5">
              {currentSectionQuestions.map((q, idx) => {
                const status = questionStatuses[q.id] || 'not_visited';
                const isCurrent = idx === currentQIndex;

                let btnStyle = 'bg-cat-card-subtle text-cat-muted border-cat-border'; // not_visited
                if (status === 'answered') {
                  btnStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                } else if (status === 'not_answered') {
                  btnStyle = 'bg-rose-500 text-white font-bold border-rose-600';
                } else if (status === 'marked_for_review') {
                  btnStyle = 'bg-purple-500 text-white font-bold border-purple-600';
                } else if (status === 'answered_and_marked') {
                  btnStyle = 'bg-purple-600 text-white font-bold border-purple-700 relative';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-8 rounded-lg text-xs font-mono font-medium border transition-all flex items-center justify-center ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-cat-ink ring-offset-1' : ''
                    }`}
                  >
                    {idx + 1}
                    {status === 'answered_and_marked' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-cat-border text-[10px] font-mono text-cat-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-rose-500" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-purple-500" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-cat-card-subtle border border-cat-border" />
                <span>Not Visited</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

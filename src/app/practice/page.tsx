'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { QUESTIONS_DB } from '@/lib/data/mockDatabase';
import { Question, QuestionFeeling, MistakeReason, UserAttempt, AdaptiveProfile, DifficultyTier, Stage } from '@/lib/types';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  Zap, 
  RotateCcw,
  BookMarked,
  ArrowLeft,
  Check,
  Award,
  Sparkles,
  TrendingUp,
  Target,
  Layers,
  BookOpen
} from 'lucide-react';
import { 
  updateActiveSession, 
  recordQuestionAttempt, 
  markTodayPlanCompleted,
  getAdaptiveProfile,
  setAdaptiveStage,
  getTopicMastery,
  getTopicDifficulty
} from '@/lib/store/appStore';
import MathText from '@/components/common/MathText';

function checkAnswerEquivalence(userAns: string, correctAns: string): boolean {
  if (!userAns || !correctAns) return false;
  const cleanUser = userAns.trim().toLowerCase();
  const cleanCorrect = correctAns.trim().toLowerCase();
  if (cleanUser === cleanCorrect) return true;

  // Strip currency symbols, commas, percent signs, and extra whitespace
  const strip = (s: string) => s.replace(/[₹$,%\s]/g, '');
  if (strip(cleanUser) === strip(cleanCorrect)) return true;

  // Digits only comparison (e.g. sequence formatting: '2-3-1-4' vs '2314')
  const digitsOnly = (s: string) => s.replace(/[^0-9]/g, '');
  if (digitsOnly(cleanUser) && digitsOnly(cleanUser) === digitsOnly(cleanCorrect)) return true;

  // Numeric equivalence (e.g. '79' vs '79.0' or '2.5' vs '2.50')
  const numUser = parseFloat(cleanUser.replace(/[^0-9.-]/g, ''));
  const numCorrect = parseFloat(cleanCorrect.replace(/[^0-9.-]/g, ''));
  if (!isNaN(numUser) && !isNaN(numCorrect) && Math.abs(numUser - numCorrect) < 0.001) {
    return true;
  }

  // Fraction equivalence (e.g. '5/2' vs '2.5')
  if (cleanUser.includes('/')) {
    const parts = cleanUser.split('/').map(p => parseFloat(p.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] !== 0) {
      const fracVal = parts[0] / parts[1];
      if (!isNaN(numCorrect) && Math.abs(fracVal - numCorrect) < 0.001) return true;
    }
  }

  // Unit suffixes (e.g. '12 hours' vs '12', '8 cm' vs '8', '10 seconds' vs '10')
  const stripUnits = (s: string) => s.replace(/(hours|hour|hrs|hr|seconds|second|secs|sec|days|day|cm|m|km\/h|kmph|min|minutes|%|₹)/gi, '').trim();
  if (stripUnits(cleanUser) === stripUnits(cleanCorrect)) return true;

  return false;
}

function normalizeSection(sec: string | null | undefined): 'QA' | 'DILR' | 'VARC' | null {
  if (!sec) return null;
  const s = sec.trim().toLowerCase();
  if (['qa', 'quant', 'quants', 'quantitative', 'quantitative ability', 'quantitative aptitude'].includes(s)) {
    return 'QA';
  }
  if (['dilr', 'lr', 'di', 'data interpretation', 'logical reasoning', 'data interpretation & lr'].includes(s)) {
    return 'DILR';
  }
  if (['varc', 'va', 'rc', 'verbal', 'verbal ability', 'reading comprehension', 'verbal ability & rc'].includes(s)) {
    return 'VARC';
  }
  return null;
}

const SECTION_TOPICS: Record<'QA' | 'DILR' | 'VARC', string[]> = {
  QA: ['All', 'Arithmetic', 'Algebra', 'Geometry', 'Number System', 'Modern Math'],
  DILR: ['All', 'Data Interpretation', 'Logical Reasoning'],
  VARC: ['All', 'Reading Comprehension', 'Para Summary', 'Para Jumbles', 'Odd Sentence Out']
};

function PracticeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedTopic = searchParams.get('topic');
  const requestedSection = searchParams.get('section');
  const requestedModule = searchParams.get('module');
  const requestedQ = searchParams.get('q');
  const requestedId = searchParams.get('id');

  const [adaptiveProfile, setAdaptiveProfile] = useState<AdaptiveProfile>(() => getAdaptiveProfile());
  const initialNormSec = normalizeSection(requestedSection) || (requestedModule ? 'QA' : null);
  const [activeSection, setActiveSection] = useState<'All' | 'QA' | 'DILR' | 'VARC'>(initialNormSec || 'All');
  const [selectedTopic, setSelectedTopic] = useState<string>(requestedTopic || requestedModule || 'All');
  const [sourceFilter, setSourceFilter] = useState<'ALL' | 'ORIGINAL_PRACTICE' | 'CAT_PYQ'>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<'ADAPTIVE' | 'ALL' | 'FOUNDATION' | 'EASY' | 'MODERATE' | 'INTERMEDIATE'>('ADAPTIVE');

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Stopwatch
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Question State
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState<number | null>(null);
  const [feeling, setFeeling] = useState<QuestionFeeling | null>(null);
  const [mistakeReason, setMistakeReason] = useState<MistakeReason | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [masteryUnlockedMsg, setMasteryUnlockedMsg] = useState<string | null>(null);

  // Reload adaptive profile on storage changes
  useEffect(() => {
    const handleProfileChange = () => {
      setAdaptiveProfile(getAdaptiveProfile());
    };
    window.addEventListener('app_state_changed', handleProfileChange);
    return () => window.removeEventListener('app_state_changed', handleProfileChange);
  }, []);

  // Filter and sort questions adaptively
  useEffect(() => {
    if (requestedId) {
      const idx = QUESTIONS_DB.findIndex(q => q.id === requestedId);
      if (idx !== -1) {
        const targetQ = QUESTIONS_DB[idx];
        const rest = QUESTIONS_DB.filter(q => q.id !== requestedId);
        setQuestions([targetQ, ...rest]);
        setCurrentIndex(0);
        setActiveSection(targetQ.section as 'QA' | 'DILR' | 'VARC');
        setSelectedTopic(targetQ.topic);
        return;
      }
    }

    const normSec = normalizeSection(requestedSection) || (requestedModule ? 'QA' : null);
    const targetSection = normSec || activeSection;

    let pool = [...QUESTIONS_DB];

    // 1. Section filtering
    if (targetSection !== 'All') {
      pool = pool.filter(q => q.section === targetSection);
    }

    // 2. Topic filtering
    const topicQuery = requestedTopic || requestedModule || selectedTopic;
    if (topicQuery && topicQuery !== 'All') {
      const match = pool.filter(q => 
        q.topic.toLowerCase().includes(topicQuery.toLowerCase()) || 
        (q.subtopic && q.subtopic.toLowerCase().includes(topicQuery.toLowerCase())) ||
        topicQuery.toLowerCase().includes(q.topic.toLowerCase())
      );
      if (match.length > 0) {
        pool = match;
      }
    }

    // 3. Source Type filter
    if (sourceFilter !== 'ALL') {
      pool = pool.filter(q => q.sourceType === sourceFilter);
    }

    // 4. Difficulty / Adaptive Progression
    if (difficultyFilter !== 'ALL' && difficultyFilter !== 'ADAPTIVE') {
      pool = pool.filter(q => {
        if (difficultyFilter === 'FOUNDATION') return q.difficultyTier === 'FOUNDATION' || q.difficulty === 'Easy';
        if (difficultyFilter === 'EASY') return q.difficultyTier === 'EASY' || q.difficulty === 'Easy';
        if (difficultyFilter === 'MODERATE') return q.difficultyTier === 'MODERATE' || q.difficulty === 'Moderate';
        if (difficultyFilter === 'INTERMEDIATE') return q.difficultyTier === 'INTERMEDIATE' || q.difficulty === 'Difficult' || q.difficulty === 'Very Difficult';
        return true;
      });
    } else if (difficultyFilter === 'ADAPTIVE') {
      // Adaptive Sort based on student stage and current topic mastery
      const stage = adaptiveProfile.stage;
      pool.sort((a, b) => {
        // Priority weight based on stage
        const getWeight = (q: Question) => {
          const tier = q.difficultyTier;
          if (stage === 'BEGINNER') {
            // Beginner: Foundation first, then Easy, then Moderate, then PYQ
            if (tier === 'FOUNDATION') return 10;
            if (tier === 'EASY') return 8;
            if (tier === 'MODERATE') return 6;
            if (q.sourceType === 'ORIGINAL_PRACTICE') return 4;
            return 2;
          } else if (stage === 'INTERMEDIATE') {
            // Intermediate: Easy & Moderate first, then Intermediate & PYQ
            if (tier === 'MODERATE') return 10;
            if (tier === 'EASY') return 8;
            if (tier === 'INTERMEDIATE') return 7;
            if (q.sourceType === 'CAT_PYQ') return 6;
            return 4;
          } else {
            // Advanced: Intermediate and authentic CAT PYQs first
            if (tier === 'INTERMEDIATE') return 10;
            if (q.sourceType === 'CAT_PYQ') return 9;
            if (tier === 'MODERATE') return 6;
            return 3;
          }
        };
        return getWeight(b) - getWeight(a);
      });
    }

    if (pool.length > 0) {
      setQuestions(pool);
      let targetIdx = 0;
      if (requestedQ) {
        const qNum = parseInt(requestedQ, 10);
        if (!isNaN(qNum) && qNum >= 1 && qNum <= pool.length) {
          targetIdx = qNum - 1;
        }
      }
      setCurrentIndex(targetIdx);
    } else {
      // Fallback pool
      setQuestions(QUESTIONS_DB);
      setCurrentIndex(0);
    }
  }, [requestedTopic, requestedSection, requestedModule, requestedQ, requestedId, activeSection, selectedTopic, sourceFilter, difficultyFilter, adaptiveProfile.stage]);

  const handleSectionSwitch = (sec: 'All' | 'QA' | 'DILR' | 'VARC') => {
    setActiveSection(sec);
    setSelectedTopic('All');
    setCurrentIndex(0);
    setUserAnswer('');
    setIsSubmitted(false);
  };

  const handleTopicSwitch = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setUserAnswer('');
    setIsSubmitted(false);
  };

  const currentQ = questions[currentIndex] || questions[0] || QUESTIONS_DB[0];

  // Sync active session in store
  useEffect(() => {
    if (currentQ) {
      updateActiveSession({
        subject: currentQ.section,
        topic: currentQ.topic,
        subtopic: currentQ.subtopic,
        currentQuestionIndex: currentIndex + 1,
        totalQuestions: questions.length,
        questionId: currentQ.id,
        lastActiveTimestamp: new Date().toISOString(),
      });
    }
  }, [currentIndex, currentQ, questions.length]);

  // Reset timer and choices on question switch
  useEffect(() => {
    setSeconds(0);
    setTimerActive(true);
    setIsSubmitted(false);
    setUserAnswer('');
    setActiveHintIndex(null);
    setFeeling(null);
    setMistakeReason(null);
    setMasteryUnlockedMsg(null);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, currentQ?.id]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (!userAnswer.trim() || isSubmitted) return;
    
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerActive(false);

    const correct = checkAnswerEquivalence(userAnswer, currentQ.correctAnswer);
    setIsCorrect(correct);
    setIsSubmitted(true);

    const topicKey = currentQ.subtopic || currentQ.topic;
    const prevDiff = getTopicDifficulty(adaptiveProfile, topicKey);

    const attempt: UserAttempt = {
      id: 'att_' + Date.now(),
      questionId: currentQ.id,
      section: currentQ.section,
      topic: currentQ.topic,
      subtopic: currentQ.subtopic,
      difficulty: currentQ.difficulty,
      userAnswer: userAnswer.trim(),
      correctAnswer: currentQ.correctAnswer,
      isCorrect: correct,
      timeSpentSeconds: seconds,
      feeling: feeling || undefined,
      mistakeReason: !correct ? (mistakeReason || undefined) : undefined,
      hintsUsedCount: activeHintIndex !== null ? activeHintIndex + 1 : 0,
      timestamp: new Date().toISOString(),
    };
    recordQuestionAttempt(attempt);

    // Check if difficulty was upgraded
    const updatedProfile = getAdaptiveProfile();
    const newDiff = getTopicDifficulty(updatedProfile, topicKey);
    if (newDiff !== prevDiff && correct) {
      setMasteryUnlockedMsg(`Mastery Gate Cleared! Advanced from ${prevDiff} to ${newDiff}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      markTodayPlanCompleted();
      setShowCompletionModal(true);
    }
  };

  // Adaptive mastery info for the current question/topic
  const currentTopicKey = currentQ?.subtopic || currentQ?.topic || 'General';
  const topicMastery = getTopicMastery(adaptiveProfile, currentTopicKey);
  const currentTopicDiff = getTopicDifficulty(adaptiveProfile, currentTopicKey);

  return (
    <div className="max-w-3xl mx-auto space-y-6 select-none pb-20">
      
      {/* Adaptive Profile Status Strip */}
      <div className="bg-cat-card border border-cat-border rounded-xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-subtle">
        <div className="flex items-center gap-2.5">
          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${
            adaptiveProfile.stage === 'ADVANCED'
              ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
              : adaptiveProfile.stage === 'INTERMEDIATE'
              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30'
              : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
          }`}>
            {adaptiveProfile.stage} TRACK
          </span>
          <span className="text-cat-border-strong hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-xs text-cat-sub">
            <Target className="w-3.5 h-3.5 text-cat-primary" />
            <span>Topic: <strong className="text-cat-ink">{currentTopicKey}</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-cat-sub font-mono text-[11px]">Mastery:</span>
            <span className="font-mono font-bold text-cat-ink">{topicMastery}%</span>
            <div className="w-16 h-1.5 rounded-full bg-cat-border overflow-hidden">
              <div 
                className="h-full bg-cat-primary rounded-full transition-all" 
                style={{ width: `${topicMastery}%` }} 
              />
            </div>
          </div>
          <span className="text-cat-border-strong hidden sm:inline">•</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cat-card-subtle border border-cat-border text-cat-sub">
            Gate: <strong className="text-cat-ink">{currentTopicDiff}</strong>
          </span>
        </div>
      </div>

      {/* Section & Topic Navigation Strip */}
      <div className="space-y-3 border-b border-cat-border pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'QA', label: 'Quantitative Ability', count: QUESTIONS_DB.filter(q => q.section === 'QA').length },
              { id: 'DILR', label: 'DILR', count: QUESTIONS_DB.filter(q => q.section === 'DILR').length },
              { id: 'VARC', label: 'VARC', count: QUESTIONS_DB.filter(q => q.section === 'VARC').length },
              { id: 'All', label: 'All Sections', count: QUESTIONS_DB.length },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleSectionSwitch(tab.id as 'All' | 'QA' | 'DILR' | 'VARC')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === tab.id
                    ? 'bg-cat-primary text-cat-primary-text font-semibold'
                    : 'bg-cat-card hover:bg-cat-hover text-cat-sub border border-cat-border'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1 text-[10px] font-mono opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>

          <span className="text-[11px] font-mono text-cat-faint hidden sm:inline">
            Pool: {questions.length} questions
          </span>
        </div>

        {/* Dynamic Topic Filter Chips */}
        {activeSection !== 'All' && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 animate-fadeIn">
            <span className="text-[11px] font-mono text-cat-faint mr-1">Topic:</span>
            {SECTION_TOPICS[activeSection].map(top => (
              <button
                key={top}
                onClick={() => handleTopicSwitch(top)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  selectedTopic === top
                    ? 'bg-cat-ink text-cat-bg dark:bg-white dark:text-zinc-950 font-semibold'
                    : 'bg-cat-card-subtle hover:bg-cat-hover text-cat-sub border border-cat-border'
                }`}
              >
                {top}
              </button>
            ))}
          </div>
        )}

        {/* Adaptive Filters & Source Selectors */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-cat-border/60">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-cat-sub">Difficulty:</span>
            {(['ADAPTIVE', 'ALL', 'FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE'] as const).map(diff => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium transition-colors border ${
                  difficultyFilter === diff
                    ? 'bg-cat-primary text-cat-primary-text border-cat-primary font-bold'
                    : 'bg-cat-card text-cat-sub border-cat-border hover:bg-cat-hover'
                }`}
              >
                {diff === 'ADAPTIVE' ? '⚡ Adaptive' : diff}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11px] font-mono text-cat-sub">Source:</span>
            <button
              onClick={() => setSourceFilter('ALL')}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                sourceFilter === 'ALL' ? 'bg-cat-ink text-cat-bg font-bold' : 'text-cat-sub hover:text-cat-ink'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSourceFilter('ORIGINAL_PRACTICE')}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                sourceFilter === 'ORIGINAL_PRACTICE' ? 'bg-cat-ink text-cat-bg font-bold' : 'text-cat-sub hover:text-cat-ink'
              }`}
            >
              Original Practice
            </button>
            <button
              onClick={() => setSourceFilter('CAT_PYQ')}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                sourceFilter === 'CAT_PYQ' ? 'bg-cat-ink text-cat-bg font-bold' : 'text-cat-sub hover:text-cat-ink'
              }`}
            >
              CAT PYQ
            </button>
          </div>
        </div>
      </div>

      {/* Mastery Unlock Alert */}
      {masteryUnlockedMsg && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 flex items-center justify-between text-xs animate-fadeIn">
          <div className="flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>{masteryUnlockedMsg}</span>
          </div>
          <span className="text-[11px] font-mono opacity-80">Adaptive Calibration Updated</span>
        </div>
      )}

      {/* Top Bar: Question Counter and Timer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-cat-border pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="p-1.5 rounded-lg hover:bg-cat-hover text-cat-sub hover:text-cat-ink transition-colors"
            title="Return to workspace"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-cat-ink">{currentQ.section}</span>
              <span className="text-cat-border-strong">•</span>
              <span className="text-xs text-cat-sub">{currentQ.topic}</span>
              {currentQ.subtopic && currentQ.subtopic !== currentQ.topic && (
                <>
                  <span className="text-cat-border-strong">•</span>
                  <span className="text-xs text-cat-sub">{currentQ.subtopic}</span>
                </>
              )}
            </div>
            <span className="text-[11px] font-mono text-cat-faint">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Timer & Provenance Tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cat-card-subtle text-cat-ink font-mono text-xs font-medium border border-cat-border">
            <Clock className="w-3.5 h-3.5 text-cat-sub" />
            <span>{formatTime(seconds)}</span>
          </div>

          <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-semibold ${
            currentQ.sourceType === 'ORIGINAL_PRACTICE'
              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30'
              : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
          }`}>
            {currentQ.sourceType === 'ORIGINAL_PRACTICE' ? 'Original Practice' : currentQ.source}
          </span>
        </div>
      </div>

      {/* Reading Comprehension Passage */}
      {currentQ.passage && (
        <div className="bg-cat-card border border-cat-border rounded-xl p-5 sm:p-6 space-y-3 shadow-subtle">
          <div className="text-[11px] font-mono uppercase tracking-wider text-cat-sub font-semibold">
            Reading Comprehension Passage
          </div>
          <div className="text-sm text-cat-ink leading-relaxed font-serif max-h-72 overflow-y-auto pr-2">
            {currentQ.passage}
          </div>
        </div>
      )}

      {/* DILR Dataset */}
      {currentQ.dataset && (
        <div className="bg-cat-card border border-cat-border rounded-xl p-5 sm:p-6 space-y-3 shadow-subtle">
          <div className="text-[11px] font-mono uppercase tracking-wider text-cat-sub font-semibold">
            Dataset & Problem Constraints
          </div>
          <pre className="text-xs text-cat-ink whitespace-pre-wrap font-mono leading-relaxed bg-cat-card-subtle p-4 rounded-lg border border-cat-border">
            {currentQ.dataset}
          </pre>
        </div>
      )}

      {/* Question Canvas Card */}
      <div className="bg-cat-card border border-cat-border rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
        
        {/* Difficulty Tier & Learning Objective */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-cat-sub border-b border-cat-border pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-cat-ink">
              {currentQ.questionType}
            </span>
            <span className="text-cat-border-strong">•</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
              currentQ.difficultyTier === 'FOUNDATION'
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : currentQ.difficultyTier === 'EASY'
                ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                : currentQ.difficultyTier === 'MODERATE'
                ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                : 'bg-red-500/10 text-red-700 dark:text-red-300'
            }`}>
              Tier: {currentQ.difficultyTier || currentQ.difficulty}
            </span>
          </div>
          <span className="text-[11px] text-cat-faint font-mono">
            Est: ~{Math.round(currentQ.estimatedTimeSeconds / 60)} min
          </span>
        </div>

        {/* Pedagogical Learning Objective */}
        {currentQ.learningObjective && (
          <div className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border/80 text-xs text-cat-sub flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-cat-primary shrink-0" />
            <span><strong className="text-cat-ink">Objective:</strong> {currentQ.learningObjective}</span>
          </div>
        )}

        {/* Question Text */}
        <div className="text-base sm:text-lg text-cat-ink font-medium leading-relaxed">
          <MathText content={currentQ.question} />
        </div>

        {/* Options (MCQ) */}
        {currentQ.questionType === 'MCQ' && currentQ.options && (
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = userAnswer === opt;

              let itemStyle = 'border-cat-border hover:border-cat-border-strong bg-cat-card text-cat-ink';
              if (isSubmitted) {
                if (opt === currentQ.correctAnswer) {
                  itemStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-medium';
                } else if (isSelected) {
                  itemStyle = 'border-red-500 bg-red-500/10 text-red-800 dark:text-red-300';
                }
              } else if (isSelected) {
                itemStyle = 'border-cat-primary bg-cat-card-subtle text-cat-ink font-medium shadow-sm ring-1 ring-cat-primary';
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => setUserAnswer(opt)}
                  className={`w-full p-3.5 sm:p-4 rounded-lg border text-left flex items-center gap-3 transition-colors ${itemStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-semibold shrink-0 transition-colors ${
                      isSelected && !isSubmitted
                        ? 'bg-cat-primary text-cat-primary-text'
                        : isSubmitted && opt === currentQ.correctAnswer
                        ? 'bg-emerald-600 text-white'
                        : isSubmitted && isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-cat-card-subtle text-cat-ink'
                    }`}
                  >
                    {letter}
                  </span>
                  <div className="text-sm">
                    <MathText content={opt} />
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* TITA (Type-In-The-Answer) */}
        {currentQ.questionType === 'TITA' && (
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-cat-sub block">
              Type-In-The-Answer (Numerical Value or Text)
            </label>
            <input
              type="text"
              disabled={isSubmitted}
              placeholder="e.g. 75"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full sm:w-60 bg-cat-card-subtle border border-cat-border text-cat-ink text-sm rounded-lg px-3.5 py-2.5 outline-none focus:border-cat-border-strong focus:bg-cat-card font-mono"
            />
          </div>
        )}

        {/* Progressive Hint (Quiet Drawer) */}
        {currentQ.hints && currentQ.hints.length > 0 && !isSubmitted && (
          <div className="pt-2 border-t border-cat-border">
            <div className="flex items-center justify-between text-xs">
              <span className="text-cat-sub font-medium flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-cat-faint" />
                <span>Hints available</span>
              </span>
              <div className="flex gap-1.5">
                {currentQ.hints.map((_, hIdx) => (
                  <button
                    key={hIdx}
                    onClick={() => setActiveHintIndex(activeHintIndex === hIdx ? null : hIdx)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono border transition-colors ${
                      activeHintIndex === hIdx
                        ? 'bg-cat-primary text-cat-primary-text border-cat-primary'
                        : 'bg-cat-card hover:bg-cat-hover text-cat-sub border-cat-border'
                    }`}
                  >
                    Hint {hIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {activeHintIndex !== null && (
              <div className="mt-2.5 p-3 rounded-lg bg-cat-card-subtle border border-cat-border text-xs text-cat-ink leading-relaxed animate-fadeIn">
                <span className="font-semibold text-cat-ink">Hint:</span> {currentQ.hints[activeHintIndex]}
              </div>
            )}
          </div>
        )}

        {/* Actions Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-cat-border">
          {!isSubmitted ? (
            <div className="flex items-center gap-3 w-full justify-between">
              {userAnswer ? (
                <button
                  type="button"
                  onClick={() => setUserAnswer('')}
                  className="text-xs text-cat-sub hover:text-cat-ink transition-colors"
                >
                  Clear Selection
                </button>
              ) : <div />}

              <button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="px-6 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover disabled:opacity-40 text-cat-primary-text font-semibold text-xs transition-colors"
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-end w-full">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Post-Submission Pedagogical Solution */}
        {isSubmitted && (
          <div className="space-y-5 pt-4 border-t border-cat-border animate-fadeIn">
            
            {/* Semantic Feedback Banner */}
            <div
              className={`p-4 rounded-lg border flex items-center justify-between text-xs ${
                isCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-300'
                  : 'bg-red-500/10 border-red-500/20 text-red-800 dark:text-red-300'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span>{isCorrect ? 'Correct Answer' : 'Incorrect Answer'}</span>
              </div>
              <span className="font-mono text-cat-sub text-[11px]">
                Time: {formatTime(seconds)}
              </span>
            </div>

            {/* Mistake Logger (If Wrong) */}
            {!isCorrect && (
              <div className="p-4 rounded-lg bg-cat-card-subtle border border-cat-border space-y-2.5">
                <div className="text-xs font-semibold text-cat-ink">
                  Tag Mistake Reason (Logged to Mistake Book)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      "Didn't know concept",
                      'Calculation mistake',
                      'Misread question',
                      'Got confused',
                      'Time issue',
                    ] as MistakeReason[]
                  ).map(reason => (
                    <button
                      key={reason}
                      onClick={() => setMistakeReason(reason)}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        mistakeReason === reason
                          ? 'bg-cat-primary text-cat-primary-text font-medium'
                          : 'bg-cat-card hover:bg-cat-hover text-cat-sub border border-cat-border'
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Answer Comparison */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border">
                <span className="text-cat-sub block text-[11px]">Your Answer</span>
                <span className={`font-semibold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                  {userAnswer}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border">
                <span className="text-cat-sub block text-[11px]">Correct Answer</span>
                <span className="font-semibold text-emerald-600">
                  {currentQ.correctAnswer}
                </span>
              </div>
            </div>

            {/* Deep Conceptual "Why It Works" (Original Practice Questions) */}
            {currentQ.solution.whyItWorks && (
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 space-y-1">
                <div className="text-xs font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Pedagogical Principle: Why This Works</span>
                </div>
                <div className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                  <MathText content={currentQ.solution.whyItWorks} />
                </div>
              </div>
            )}

            {/* Step-by-Step Solution */}
            <div className="p-5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-3">
              <h4 className="text-xs font-semibold text-cat-ink uppercase tracking-wider">
                Step-by-Step Solution
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-cat-ink leading-relaxed">
                {currentQ.solution.stepByStep.map((step, sIdx) => (
                  <li key={sIdx} className="pl-1">
                    <MathText content={step} />
                  </li>
                ))}
              </ol>
            </div>

            {/* Common Trap Warning */}
            {currentQ.solution.commonTrap && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 space-y-1">
                <div className="text-xs font-semibold text-red-800 dark:text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-600" />
                  <span>Common CAT Trap & Misconception</span>
                </div>
                <div className="text-xs sm:text-sm text-red-900 dark:text-red-200 leading-relaxed">
                  <MathText content={currentQ.solution.commonTrap} />
                </div>
              </div>
            )}

            {/* CAT Speed Shortcut */}
            {currentQ.solution.shortcut && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-1">
                <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>CAT Speed Shortcut / Pro Tip</span>
                </div>
                <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                  <MathText content={currentQ.solution.shortcut} />
                </div>
              </div>
            )}

            {/* Alternative Approach */}
            {currentQ.solution.alternateApproach && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Alternative Solving Method</span>
                </div>
                <div className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  <MathText content={currentQ.solution.alternateApproach} />
                </div>
              </div>
            )}

            {/* Key Concept Takeaway */}
            <div className="p-4 rounded-lg bg-cat-card-subtle border border-cat-border space-y-1">
              <div className="text-xs font-semibold text-cat-ink">
                Key Concept Tested
              </div>
              <div className="text-xs sm:text-sm text-cat-sub leading-relaxed">
                <MathText content={currentQ.solution.keyConcept} />
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-cat-card border border-cat-border rounded-xl p-6 space-y-5 shadow-elevated text-center animate-fadeIn">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-cat-ink">Session Completed</h3>
              <p className="text-xs text-cat-sub">
                All questions in this drill have been answered. Your performance metrics and mastery calibration have been saved.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => router.push('/')}
                className="flex-1 py-2 px-3 rounded-lg border border-cat-border hover:bg-cat-hover text-cat-ink text-xs font-medium transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setShowCompletionModal(false);
                  setCurrentIndex(0);
                  setUserAnswer('');
                  setIsSubmitted(false);
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text text-xs font-semibold transition-colors"
              >
                Restart Drill
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-cat-primary border-t-transparent animate-spin" />
      </div>
    }>
      <PracticeContent />
    </Suspense>
  );
}

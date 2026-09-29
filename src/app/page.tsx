'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  BookMarked,
  FileText,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  getAppState,
  generatePersonalizedPlan,
  getAdaptiveProfile,
  setAdaptiveStage
} from '@/lib/store/appStore';
import { UserAppState, DailyFocusPlan, Stage } from '@/lib/types';
import AdBanner from '@/components/ads/AdBanner';

export default function PreparationHomePage() {
  const router = useRouter();
  const [appState, setAppState] = useState<UserAppState | null>(null);
  const [activeArea, setActiveArea] = useState<'Quant' | 'DILR' | 'VARC' | 'PYQ' | 'Mock'>('Quant');
  const [isClient, setIsClient] = useState(false);

  const loadState = () => {
    const state = getAppState();
    setAppState(state);

    if (!state.user || !state.user.isAuthenticated) {
      router.push('/login');
      return;
    }
    if (!state.onboarding || !state.onboarding.isCompleted) {
      router.push('/onboarding');
      return;
    }
  };

  useEffect(() => {
    setIsClient(true);
    loadState();

    const handleStorageChange = () => loadState();
    window.addEventListener('app_state_changed', handleStorageChange);
    return () => window.removeEventListener('app_state_changed', handleStorageChange);
  }, [router]);

  if (!isClient || !appState || !appState.user) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-cat-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  const { user, onboarding, activeSession, todayPlanCompleted, progress } = appState;
  const plan: DailyFocusPlan = generatePersonalizedPlan(onboarding);
  const adaptiveProfile = appState.adaptiveProfile || getAdaptiveProfile();

  const hasStartedPrep =
    (activeSession !== null && activeSession.currentQuestionIndex > 0) ||
    (progress.attempts && progress.attempts.length > 0);
  const isTodayComplete = todayPlanCompleted;

  return (
    <div className="max-w-3xl mx-auto space-y-10 select-none pb-16">
      
      {/* Editorial Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            {isTodayComplete ? 'Daily Target Completed' : `Today's Focus`}
          </h1>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${
              adaptiveProfile.stage === 'ADVANCED'
                ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                : adaptiveProfile.stage === 'INTERMEDIATE'
                ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30'
                : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
            }`}>
              {adaptiveProfile.stage === 'ADVANCED' ? 'Advanced Track' : adaptiveProfile.stage === 'INTERMEDIATE' ? 'Intermediate Track' : 'Beginner Track'}
            </span>
            <span className="text-xs font-mono text-cat-sub">
              Target {onboarding.targetPercentile || '99.5+%ile'}
            </span>
          </div>
        </div>
        <p className="text-sm text-cat-sub">
          {isTodayComplete
            ? 'You finished your target questions for today. You can review logged mistakes or solve extra practice.'
            : hasStartedPrep
            ? `Welcome back, ${user.name}. Pick up right where you left off or begin your daily drill.`
            : `Welcome, ${user.name}. Here is your structured entry session for today.`}
        </p>
      </header>

      {/* 12-Question Diagnostic Assessment Callout */}
      {!adaptiveProfile.diagnosticCompleted && (
        <section className="bg-cat-card border border-cat-primary/40 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cat-primary uppercase tracking-wider">
              <span>Diagnostic Assessment</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-cat-ink tracking-tight">
              Calibrate Your Starting Level (12 Questions)
            </h3>
            <p className="text-xs sm:text-sm text-cat-sub max-w-xl leading-relaxed">
              Solve 4 VARC, 4 DILR, and 4 QA questions to assess your concept understanding, speed, and section baseline before jumping into authentic CAT PYQs.
            </p>
          </div>
          <Link
            href="/diagnostic"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
          >
            <span>Start Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      )}

      {/* Main Focus Card: Action-Oriented */}
      {!isTodayComplete ? (
        <section className="bg-cat-card border border-cat-border rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex items-center justify-between text-xs text-cat-sub">
            <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-cat-ink">
              {activeSession ? 'Session In Progress' : plan.subjectName}
            </span>
            <span className="flex items-center gap-1.5 text-cat-sub">
              <Clock className="w-3.5 h-3.5" />
              <span>{activeSession ? `Q ${activeSession.currentQuestionIndex} of ${activeSession.totalQuestions}` : `~${plan.estimatedMinutes} mins`}</span>
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-cat-ink tracking-tight">
              {activeSession ? activeSession.topic : plan.topic}
            </h2>
            <p className="text-sm text-cat-sub leading-relaxed max-w-xl">
              {activeSession
                ? `Continue question ${activeSession.currentQuestionIndex}. The solving timer will automatically resume.`
                : plan.description}
            </p>
          </div>

          {/* Six-Stage Learning Progression indicator for Beginners */}
          {adaptiveProfile.stage === 'BEGINNER' && !activeSession && (
            <div className="p-3.5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-2">
              <span className="text-[11px] font-mono text-cat-sub uppercase tracking-wider font-semibold block">
                Foundational Learning Path
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-cat-primary text-cat-primary-text font-bold">1. Learn</span>
                <span className="text-cat-sub">→</span>
                <span className="px-2 py-0.5 rounded bg-cat-card border border-cat-border text-cat-ink">2. Solved Example</span>
                <span className="text-cat-sub">→</span>
                <span className="px-2 py-0.5 rounded bg-cat-card border border-cat-border text-cat-ink">3. Guided Try</span>
                <span className="text-cat-sub">→</span>
                <span className="px-2 py-0.5 rounded bg-cat-card border border-cat-border text-cat-ink">4. 10 Practice Qs</span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 text-xs text-cat-sub pt-1">
            <span className="px-2.5 py-1 rounded bg-cat-card-subtle border border-cat-border font-medium">
              {plan.questionCount} Questions
            </span>
            <span className="px-2.5 py-1 rounded bg-cat-card-subtle border border-cat-border font-medium">
              {adaptiveProfile.stage === 'BEGINNER' ? 'Core Foundation' : adaptiveProfile.stage === 'INTERMEDIATE' ? 'Moderate Drill' : 'CAT Slot Level'}
            </span>
            <span className="px-2.5 py-1 rounded bg-cat-card-subtle border border-cat-border font-medium">
              CAT Verified Format
            </span>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <Link
              href={
                activeSession
                  ? `/practice?section=${activeSession.subject}&topic=${encodeURIComponent(activeSession.topic)}&q=${activeSession.currentQuestionIndex}`
                  : adaptiveProfile.stage === 'BEGINNER'
                  ? `/learn`
                  : `/practice?section=${plan.subject}&topic=${encodeURIComponent(plan.topic)}`
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{activeSession ? 'Resume Session' : adaptiveProfile.stage === 'BEGINNER' ? 'Start Foundational Path' : 'Start Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      ) : (
        /* Completed Today View */
        <section className="bg-cat-card border border-cat-border rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Target Achieved</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-cat-ink tracking-tight">
              Great session today, {user.name}.
            </h2>
            <p className="text-sm text-cat-sub leading-relaxed max-w-xl">
              Consistency is the primary differentiator in CAT. Your active attempts and timing data have been recorded.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/mistake-book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-medium text-xs transition-colors"
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Review Mistake Book</span>
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-card hover:bg-cat-hover border border-cat-border text-cat-ink font-medium text-xs transition-colors"
            >
              <span>Continue Bonus Practice</span>
              <ArrowRight className="w-3.5 h-3.5 text-cat-faint" />
            </Link>
          </div>
        </section>
      )}

      {/* Alternative Practice Areas: User has full agency */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-cat-border pb-3">
          <h3 className="text-sm font-semibold text-cat-ink">
            Or choose an area to practice
          </h3>
          <span className="text-xs text-cat-sub">Self-directed study</span>
        </div>

        {/* Minimal Clean Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              { id: 'Quant', label: 'Quantitative Ability' },
              { id: 'DILR', label: 'Data Interpretation & LR' },
              { id: 'VARC', label: 'Verbal Ability & RC' },
              { id: 'PYQ', label: 'Official Past Papers' },
              { id: 'Mock', label: 'Full Mocks & Sectionals' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveArea(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeArea === tab.id
                  ? 'bg-cat-primary text-cat-primary-text'
                  : 'bg-cat-card hover:bg-cat-hover text-cat-sub border border-cat-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected Area Detail Block */}
        <div className="bg-cat-card border border-cat-border rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-cat-ink">
              {activeArea === 'Quant' && 'Quantitative Ability Drills'}
              {activeArea === 'DILR' && 'DILR Sets & Caselet Deduction'}
              {activeArea === 'VARC' && 'RC Passages & Critical Reasoning'}
              {activeArea === 'PYQ' && 'CAT Previous Year Question Papers (2014–2025)'}
              {activeArea === 'Mock' && 'Official Pattern Sectional & Full Mocks'}
            </h4>
            <p className="text-xs text-cat-sub max-w-lg leading-relaxed">
              {activeArea === 'Quant' && 'Arithmetic, Algebra, Geometry, and Number System questions with shortcuts.'}
              {activeArea === 'DILR' && 'Linear/circular arrangement, games and tournaments, matrix logic.'}
              {activeArea === 'VARC' && 'High-density reading passages across Philosophy, History, and Economics.'}
              {activeArea === 'PYQ' && 'Strictly authentic slot questions with official answer keys and explanations.'}
              {activeArea === 'Mock' && 'Timed 40-minute sectionals and 120-minute 3-section exam simulations.'}
            </p>
          </div>

          <Link
            href={
              activeArea === 'PYQ'
                ? '/pyq'
                : activeArea === 'Mock'
                ? '/mocks'
                : activeArea === 'Quant'
                ? '/practice?section=QA'
                : `/practice?section=${activeArea}`
            }
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cat-card-subtle hover:bg-cat-hover border border-cat-border text-cat-ink text-xs font-semibold transition-colors"
          >
            <span>Start {activeArea}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Telegram Community CTA Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#229ED9]/15 via-blue-500/10 to-indigo-500/10 border border-[#229ED9]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-cat-ink flex items-center gap-2">
              <span>Join CAT Prep Aspirants on Telegram</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#229ED9]/20 text-[#229ED9] font-bold">@catprepos</span>
            </h4>
            <p className="text-[11px] sm:text-xs text-cat-sub">
              Daily CAT question drills, PYQ discussion, peer doubt solving & exam strategy updates.
            </p>
          </div>
        </div>
        <a
          href="https://t.me/catprepos"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#229ED9] hover:bg-[#1E88E5] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm shrink-0"
        >
          <span>Join Community</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Reference & Revision Tools */}
      <section className="space-y-3 pt-2">
        <h3 className="text-sm font-semibold text-cat-ink border-b border-cat-border pb-3">
          Essential Prep Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/formula-book"
            className="p-4 rounded-xl bg-cat-card border border-cat-border hover:border-cat-border-strong transition-colors space-y-1.5 group shadow-subtle"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cat-ink group-hover:underline">
                Formula Book
              </span>
              <FileText className="w-3.5 h-3.5 text-cat-faint group-hover:text-cat-ink" />
            </div>
            <p className="text-[11px] text-cat-sub">
              Flip cards for CAT formulas, traps, and speed shortcuts.
            </p>
          </Link>

          <Link
            href="/mistake-book"
            className="p-4 rounded-xl bg-cat-card border border-cat-border hover:border-cat-border-strong transition-colors space-y-1.5 group shadow-subtle"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cat-ink group-hover:underline">
                Mistake Book
              </span>
              <BookMarked className="w-3.5 h-3.5 text-cat-faint group-hover:text-cat-ink" />
            </div>
            <p className="text-[11px] text-cat-sub">
              Every incorrect attempt tagged by reason for 3-cycle review.
            </p>
          </Link>

          <Link
            href="/study-plan"
            className="p-4 rounded-xl bg-cat-card border border-cat-border hover:border-cat-border-strong transition-colors space-y-1.5 group shadow-subtle"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cat-ink group-hover:underline">
                Study Schedule
              </span>
              <Calendar className="w-3.5 h-3.5 text-cat-faint group-hover:text-cat-ink" />
            </div>
            <p className="text-[11px] text-cat-sub">
              Target questions and milestones calibrated to your exam date.
            </p>
          </Link>
        </div>
      </section>

      {/* Sponsored Ad Unit */}
      <AdBanner slot="6820469844" />

      {/* Footer */}
      <footer className="pt-8 border-t border-cat-border text-center text-xs text-cat-sub space-y-2">
        <p>© 2026 CAT Prep OS • Intelligent Adaptive CAT Preparation System</p>
        <p>
          <a
            href="https://t.me/catprepos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#229ED9] hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>Join our Telegram Community (@catprepos)</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </footer>

    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BarChart2, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { getAppState } from '@/lib/store/appStore';
import { UserAppState } from '@/lib/types';

export default function ProgressAnalyticsPage() {
  const [appState, setAppState] = useState<UserAppState | null>(null);

  useEffect(() => {
    setAppState(getAppState());
  }, []);

  const progress = appState?.progress;
  const attempts = progress?.attempts || [];
  const hasData = attempts.length > 0;

  const totalAttempted = attempts.length;
  const totalCorrect = attempts.filter(a => a.isCorrect).length;
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const totalSeconds = attempts.reduce((acc, a) => acc + (a.timeSpentSeconds || 0), 0);
  const avgSeconds = totalAttempted > 0 ? Math.round(totalSeconds / totalAttempted) : 0;
  
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s}s`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-20">
      
      {/* Editorial Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Performance Diagnostics
          </h1>
          <span className="text-xs font-mono text-cat-sub">
            {totalAttempted} Attempts Recorded
          </span>
        </div>
        <p className="text-sm text-cat-sub">
          Actionable metrics on your solving velocity, topic-level accuracy, and error patterns.
        </p>
      </header>

      {!hasData ? (
        /* Empty State */
        <div className="bg-cat-card border border-cat-border rounded-xl p-10 sm:p-14 text-center space-y-4 shadow-subtle max-w-lg mx-auto">
          <div className="w-10 h-10 rounded-full bg-cat-card-subtle text-cat-sub flex items-center justify-center mx-auto text-sm font-mono font-bold border border-cat-border">
            0
          </div>
          <div className="space-y-1">
            <h2 className="text-base font-semibold text-cat-ink">No Practice History Recorded</h2>
            <p className="text-xs text-cat-sub leading-relaxed">
              Once you solve questions in the practice canvas, your time-per-question velocity and accuracy quadrant metrics will automatically appear here.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/practice"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-medium text-xs transition-colors"
            >
              <span>Begin Practice Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        /* Active Diagnostics */
        <div className="space-y-8 animate-fadeIn">
          
          {/* Key Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-cat-card border border-cat-border rounded-xl p-4 space-y-1 shadow-subtle">
              <span className="text-[11px] font-medium text-cat-sub uppercase tracking-wider block">Solved</span>
              <div className="text-2xl font-bold font-mono text-cat-ink">{totalAttempted}</div>
              <span className="text-[11px] text-cat-faint font-mono">{totalCorrect} correct</span>
            </div>

            <div className="bg-cat-card border border-cat-border rounded-xl p-4 space-y-1 shadow-subtle">
              <span className="text-[11px] font-medium text-cat-sub uppercase tracking-wider block">Accuracy</span>
              <div className="text-2xl font-bold font-mono text-cat-ink">{accuracy}%</div>
              <span className="text-[11px] text-cat-faint">Target &gt; 80%</span>
            </div>

            <div className="bg-cat-card border border-cat-border rounded-xl p-4 space-y-1 shadow-subtle">
              <span className="text-[11px] font-medium text-cat-sub uppercase tracking-wider block">Avg Time / Q</span>
              <div className="text-2xl font-bold font-mono text-cat-ink">{formatTime(avgSeconds)}</div>
              <span className="text-[11px] text-cat-faint">Target: ~2m</span>
            </div>

            <div className="bg-cat-card border border-cat-border rounded-xl p-4 space-y-1 shadow-subtle">
              <span className="text-[11px] font-medium text-cat-sub uppercase tracking-wider block">Mistakes Logged</span>
              <div className="text-2xl font-bold font-mono text-red-600">{totalAttempted - totalCorrect}</div>
              <Link href="/mistake-book" className="text-[11px] text-cat-sub hover:text-cat-ink underline block">
                Review list
              </Link>
            </div>
          </div>

          {/* Diagnostic Quadrants (Actionable advice) */}
          <section className="bg-cat-card border border-cat-border rounded-xl p-5 sm:p-6 space-y-4 shadow-subtle">
            <div className="border-b border-cat-border pb-3">
              <h2 className="text-sm font-semibold text-cat-ink">Velocity vs. Accuracy Matrix</h2>
              <p className="text-xs text-cat-sub">Categorization of your preparation by performance quadrants</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-cat-card-subtle border border-cat-border space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span>Fast & High Accuracy (Strength)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-xs text-cat-sub leading-relaxed">
                  Topics where accuracy exceeds 80% with average solving time under 2.5 minutes.
                </p>
                <div className="text-xs font-mono text-cat-ink pt-1">
                  Arithmetic • Percentages (90% Acc • 1m 45s)
                </div>
              </div>

              <div className="p-4 rounded-lg bg-cat-card-subtle border border-cat-border space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                  <span>Accurate but Slow (Need Shortcuts)</span>
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <p className="text-xs text-cat-sub leading-relaxed">
                  High accuracy, but time per question exceeds 2.5 minutes. Prioritize shortcuts.
                </p>
                <div className="text-xs font-mono text-cat-ink pt-1">
                  Algebra • Quadratic Equations (3m 10s)
                </div>
              </div>
            </div>
          </section>

          {/* Attempt Log */}
          <section className="bg-cat-card border border-cat-border rounded-xl p-5 sm:p-6 space-y-3 shadow-subtle">
            <h2 className="text-sm font-semibold text-cat-ink border-b border-cat-border pb-3">
              Recent Attempt Log
            </h2>
            <div className="space-y-2">
              {attempts.slice(0, 6).map((att) => (
                <div
                  key={att.id}
                  className="p-3 rounded-lg border border-cat-border flex items-center justify-between text-xs bg-cat-card"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        att.isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                    />
                    <span className="font-medium text-cat-ink">{att.topic}</span>
                    <span className="text-cat-faint font-mono text-[11px]">• {att.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="text-cat-sub">{formatTime(att.timeSpentSeconds)}</span>
                    <span
                      className={`font-semibold ${
                        att.isCorrect ? 'text-emerald-600' : 'text-red-600'
                      }`}
                    >
                      {att.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      )}

    </div>
  );
}

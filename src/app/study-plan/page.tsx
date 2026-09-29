'use client';

import React, { useState } from 'react';
import { Calendar, Target, Clock, ArrowRight } from 'lucide-react';
import { InArticleAd } from '@/components/ads/AdBanner';

export default function StudyPlanPage() {
  const [examDate, setExamDate] = useState('2026-11-29');
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [targetQsPerDay, setTargetQsPerDay] = useState(30);

  const PHASES = [
    {
      phase: 'Phase 1',
      title: 'Foundations & Concept Mastery',
      duration: 'Months 1–3',
      focus: 'Arithmetic & Algebra concepts, DILR linear/circular puzzles, RC inference reading.',
      goal: 'Complete syllabus coverage with formula memorization.'
    },
    {
      phase: 'Phase 2',
      title: 'Official PYQ Deep Dive',
      duration: 'Months 4–6',
      focus: 'Authentic 2014–2025 past papers across all 3 slots under untimed & timed conditions.',
      goal: 'Identify CAT question traps and master alternative speed shortcuts.'
    },
    {
      phase: 'Phase 3',
      title: '40-Minute Sectionals & Stamina',
      duration: 'Months 7–9',
      focus: '2 sectionals per week with strict 40-minute countdowns. Question selection strategy.',
      goal: 'Reach 80%+ accuracy within 2.5 minutes per question.'
    },
    {
      phase: 'Phase 4',
      title: 'Full 120-min Mocks & Mistake Elimination',
      duration: 'Months 10–11',
      focus: 'Full exam simulations under test day conditions (VARC → DILR → QA). Mistake Book review.',
      goal: 'Consolidate 99.8+ percentile percentile readiness.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-20">
      
      {/* Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Study Schedule & Milestones
          </h1>
          <span className="text-xs font-mono text-cat-sub">CAT 2026</span>
        </div>
        <p className="text-sm text-cat-sub">
          Structured 4-phase preparation timeline calibrated to your daily available study time.
        </p>
      </header>

      {/* Plan Parameters */}
      <section className="bg-cat-card border border-cat-border rounded-xl p-6 space-y-5 shadow-subtle">
        <h2 className="text-sm font-semibold text-cat-ink border-b border-cat-border pb-3">
          Configure Study Commitment
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-cat-ink block">Exam Date</label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full bg-cat-card-subtle border border-cat-border text-cat-ink text-xs rounded-lg px-3 py-2 outline-none focus:border-cat-border-strong font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-cat-ink">Study Time / Day</label>
              <span className="text-xs font-mono font-semibold text-cat-ink">{hoursPerDay} hrs</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full accent-cat-primary"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-cat-ink">Daily Questions Target</label>
              <span className="text-xs font-mono font-semibold text-cat-ink">{targetQsPerDay} Qs</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={targetQsPerDay}
              onChange={(e) => setTargetQsPerDay(Number(e.target.value))}
              className="w-full accent-cat-primary"
            />
          </div>
        </div>
      </section>

      {/* In-Article Sponsored Ad */}
      <InArticleAd slot="5431366558" />

      {/* Structured Roadmap */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-cat-ink border-b border-cat-border pb-2">
          Preparation Phases
        </h2>

        <div className="space-y-3">
          {PHASES.map((p, idx) => (
            <div
              key={idx}
              className="bg-cat-card border border-cat-border rounded-xl p-5 space-y-2 shadow-subtle hover:border-cat-border-strong transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold px-2 py-0.5 rounded bg-cat-card-subtle text-cat-ink border border-cat-border">
                    {p.phase}
                  </span>
                  <span className="font-semibold text-cat-ink">{p.title}</span>
                </div>
                <span className="font-mono text-cat-faint text-[11px]">{p.duration}</span>
              </div>
              <p className="text-xs text-cat-sub leading-relaxed">{p.focus}</p>
              <div className="text-[11px] text-cat-faint pt-1 border-t border-cat-border/60">
                <span className="font-medium text-cat-sub">Milestone:</span> {p.goal}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

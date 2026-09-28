'use client';

import React from 'react';
import { Clock, Play, Award, ArrowRight } from 'lucide-react';

const FULL_MOCKS = [
  { 
    id: 'mock_1', 
    name: 'CAT 2026 Full Simulation Mock 1', 
    duration: '120 mins', 
    questions: 66, 
    pattern: 'VARC (40m) → DILR (40m) → QA (40m)',
    difficulty: 'Moderate-High'
  },
  { 
    id: 'mock_2', 
    name: 'CAT 2026 Full Simulation Mock 2', 
    duration: '120 mins', 
    questions: 66, 
    pattern: 'VARC (40m) → DILR (40m) → QA (40m)',
    difficulty: 'High'
  },
];

const SECTIONALS = [
  {
    id: 'sec_qa',
    name: 'Quantitative Ability Sectional 1',
    duration: '40 mins',
    questions: 22,
    section: 'QA',
    desc: 'Arithmetic, Algebra, Geometry, and Numbers with official sectional timer.'
  },
  {
    id: 'sec_dilr',
    name: 'DILR Sectional 1',
    duration: '40 mins',
    questions: 20,
    section: 'DILR',
    desc: '4 high-yield arrangement & data caselets under 40-minute countdown.'
  },
  {
    id: 'sec_varc',
    name: 'VARC Sectional 1',
    duration: '40 mins',
    questions: 24,
    section: 'VARC',
    desc: '4 RC passages + Verbal Ability questions (parajumbles & summary).'
  }
];

export default function FullMocksPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-20">
      
      {/* Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Mock Exam Center
          </h1>
          <span className="text-xs font-mono text-cat-sub">Official Pattern</span>
        </div>
        <p className="text-sm text-cat-sub">
          Calibrate time management with strict 40-minute sectional limits and full 120-minute simulations.
        </p>
      </header>

      {/* 40-Minute Sectional Tests */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-cat-border pb-2">
          <h2 className="text-sm font-semibold text-cat-ink">40-Minute Sectionals</h2>
          <span className="text-xs text-cat-sub">Build single-section velocity</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SECTIONALS.map((s) => (
            <div
              key={s.id}
              className="bg-cat-card border border-cat-border rounded-xl p-5 space-y-3 shadow-subtle hover:border-cat-border-strong transition-colors flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-cat-sub font-mono">
                  <span>{s.section}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cat-faint" />
                    <span>{s.duration}</span>
                  </span>
                </div>
                <h3 className="font-semibold text-cat-ink text-sm">{s.name}</h3>
                <p className="text-xs text-cat-sub leading-relaxed">{s.desc}</p>
              </div>

              <button
                onClick={() => alert(`Launching ${s.name} with 40-minute countdown.`)}
                className="w-full mt-2 py-2 rounded-lg bg-cat-card-subtle hover:bg-cat-hover text-cat-ink text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-cat-border"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Start Sectional</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Full Length Exam Mocks */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center justify-between border-b border-cat-border pb-2">
          <h2 className="text-sm font-semibold text-cat-ink">Full-Length 120-Minute Simulations</h2>
          <span className="text-xs text-cat-sub">Official 3-Section Format</span>
        </div>

        <div className="space-y-3">
          {FULL_MOCKS.map((m) => (
            <div
              key={m.id}
              className="bg-cat-card border border-cat-border rounded-xl p-5 sm:p-6 space-y-3 shadow-subtle hover:border-cat-border-strong transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-cat-ink text-sm sm:text-base">
                  {m.name}
                </span>
                <span className="font-mono text-cat-sub text-[11px] bg-cat-card-subtle px-2 py-0.5 rounded border border-cat-border">
                  {m.duration} • {m.questions} Questions
                </span>
              </div>

              <p className="text-xs text-cat-sub">
                Pattern: {m.pattern} • Difficulty: {m.difficulty} • Section locking enabled
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => alert(`Initializing full 120-minute exam simulation for ${m.name}...`)}
                  className="px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center gap-2 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Begin Full Mock Simulation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookMarked, 
  RotateCcw, 
  CheckCircle2, 
  Filter, 
  ArrowRight,
  AlertCircle 
} from 'lucide-react';
import { QUESTIONS_DB } from '@/lib/data/mockDatabase';
import MathText from '@/components/common/MathText';

export default function MistakeBookPage() {
  const [filterReason, setFilterReason] = useState<string>('All');

  // Simulated logged mistakes from user attempts
  const [mistakes, setMistakes] = useState([
    {
      id: 'm1',
      q: QUESTIONS_DB[1],
      userAns: "900 km",
      reason: "Calculation mistake",
      attemptCount: 1,
      date: "Today",
      mastered: false
    },
    {
      id: 'm2',
      q: QUESTIONS_DB[2],
      userAns: "0",
      reason: "Misread question",
      attemptCount: 2,
      date: "Yesterday",
      mastered: false
    }
  ]);

  const markMastered = (id: string) => {
    setMistakes(prev => prev.map(m => m.id === id ? { ...m, mastered: true } : m));
  };

  const filteredMistakes = mistakes.filter(m => {
    if (filterReason === 'All') return true;
    return m.reason === filterReason;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-20">
      
      {/* Editorial Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Mistake Book
          </h1>
          <span className="text-xs font-mono text-cat-sub">
            {mistakes.filter(m => !m.mastered).length} Unresolved Mistakes
          </span>
        </div>
        <p className="text-sm text-cat-sub">
          Targeted error tracking by cognitive category. Re-solve logged questions until mastered.
        </p>
      </header>

      {/* Filter Tabs */}
      <section className="bg-cat-card border border-cat-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-subtle">
        <div className="text-xs font-medium text-cat-ink flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-cat-faint" />
          <span>Filter by Error Type</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['All', 'Calculation mistake', 'Misread question', "Didn't know concept", 'Time issue'].map((r) => (
            <button
              key={r}
              onClick={() => setFilterReason(r)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                filterReason === r
                  ? 'bg-cat-primary text-cat-primary-text font-medium'
                  : 'bg-cat-card-subtle hover:bg-cat-hover text-cat-sub'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* Mistake Items */}
      <div className="space-y-4">
        {filteredMistakes.length === 0 ? (
          <div className="bg-cat-card border border-cat-border rounded-xl p-12 text-center text-sm text-cat-sub">
            No mistakes found for the selected category.
          </div>
        ) : (
          filteredMistakes.map((m) => (
            <article
              key={m.id}
              className={`bg-cat-card border rounded-xl p-5 sm:p-6 space-y-4 shadow-subtle transition-colors ${
                m.mastered ? 'border-emerald-500/20 bg-emerald-500/5 opacity-75' : 'border-cat-border hover:border-cat-border-strong'
              }`}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cat-border pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-600 border border-red-500/20 font-medium">
                    {m.reason}
                  </span>
                  <span className="text-cat-border-strong">•</span>
                  <span className="font-medium text-cat-ink">{m.q.section}</span>
                  <span className="text-cat-border-strong">•</span>
                  <span className="text-cat-sub">{m.q.topic}</span>
                </div>

                <div className="flex items-center gap-3 text-cat-faint font-mono text-[11px]">
                  <span>Attempt #{m.attemptCount}</span>
                  <span>{m.date}</span>
                </div>
              </div>

              {/* Question Statement */}
              <div className="text-sm sm:text-base text-cat-ink font-medium leading-relaxed">
                <MathText content={m.q.question} />
              </div>

              {/* Answers Comparison */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border">
                  <span className="text-cat-sub block text-[11px]">Your Logged Attempt</span>
                  <span className="font-semibold text-red-600">{m.userAns}</span>
                </div>
                <div className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border">
                  <span className="text-cat-sub block text-[11px]">Correct Official Answer</span>
                  <span className="font-semibold text-emerald-600">{m.q.correctAnswer}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-cat-border text-xs">
                {!m.mastered ? (
                  <button
                    onClick={() => markMastered(m.id)}
                    className="text-cat-sub hover:text-emerald-600 flex items-center gap-1.5 transition-colors font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cat-faint" />
                    <span>Mark as Mastered</span>
                  </button>
                ) : (
                  <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Mastered</span>
                  </span>
                )}

                <Link
                  href={`/practice?id=${m.q.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-medium text-xs transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retry in Testing Canvas</span>
                </Link>
              </div>
            </article>
          ))
        )}
      </div>

    </div>
  );
}

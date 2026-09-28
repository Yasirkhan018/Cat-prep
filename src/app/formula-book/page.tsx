'use client';

import React, { useState } from 'react';
import { RotateCcw, Check, Zap } from 'lucide-react';
import { FORMULAS_DB } from '@/lib/data/mockDatabase';
import MathText from '@/components/common/MathText';

export default function FormulaBookPage() {
  const [flashIndex, setFlashIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentFormula = FORMULAS_DB[flashIndex] || FORMULAS_DB[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-20">
      
      {/* Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Formula Book & Shortcuts
          </h1>
          <span className="text-xs font-mono text-cat-sub">
            {FORMULAS_DB.length} Formula Cards
          </span>
        </div>
        <p className="text-sm text-cat-sub">
          Core quantitative formulas, mental shortcuts, and traps tested frequently in CAT.
        </p>
      </header>

      {/* Interactive 2-Sided Flashcard */}
      <section className="bg-cat-card border border-cat-border rounded-xl p-6 sm:p-8 max-w-xl mx-auto space-y-5 text-center shadow-subtle">
        <div className="flex items-center justify-between text-xs text-cat-sub border-b border-cat-border pb-3">
          <span className="font-medium text-cat-ink">{currentFormula.subject} • {currentFormula.topic}</span>
          <span className="font-mono text-[11px] text-cat-faint">Card {flashIndex + 1} of {FORMULAS_DB.length}</span>
        </div>

        {/* Card Face */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="p-8 rounded-lg bg-cat-card-subtle border border-cat-border min-h-[190px] flex flex-col items-center justify-center cursor-pointer hover:border-cat-border-strong transition-colors space-y-3"
        >
          {!isFlipped ? (
            <>
              <h2 className="text-lg font-semibold text-cat-ink">{currentFormula.title}</h2>
              <p className="text-xs text-cat-faint">(Click to reveal formula & shortcut)</p>
            </>
          ) : (
            <div className="space-y-3 animate-fadeIn text-center w-full">
              <div className="text-base sm:text-lg font-mono font-bold text-cat-ink bg-cat-card p-3 rounded-md border border-cat-border">
                <MathText content={currentFormula.formula} />
              </div>
              <p className="text-xs text-cat-sub leading-relaxed max-w-md mx-auto">
                <MathText content={currentFormula.explanation} />
              </p>
              {currentFormula.shortcut && (
                <div className="text-xs font-medium text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-md border border-amber-500/20">
                  <span className="font-semibold">Shortcut:</span> <MathText content={currentFormula.shortcut} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={() => {
              setIsFlipped(false);
              setFlashIndex((flashIndex + 1) % FORMULAS_DB.length);
            }}
            className="px-4 py-2 rounded-lg bg-cat-card-subtle hover:bg-cat-hover text-cat-ink text-xs font-medium flex items-center gap-1.5 transition-colors border border-cat-border"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Need Review</span>
          </button>
          <button
            onClick={() => {
              setIsFlipped(false);
              setFlashIndex((flashIndex + 1) % FORMULAS_DB.length);
            }}
            className="px-4 py-2 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Mastered</span>
          </button>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="space-y-3 pt-4">
        <h2 className="text-sm font-semibold text-cat-ink border-b border-cat-border pb-3">
          Complete Formula Catalog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FORMULAS_DB.map((f) => (
            <div
              key={f.id}
              className="bg-cat-card border border-cat-border rounded-xl p-5 space-y-2.5 shadow-subtle hover:border-cat-border-strong transition-colors"
            >
              <div className="flex items-center justify-between text-xs border-b border-cat-border pb-2">
                <h3 className="font-semibold text-cat-ink text-sm">{f.title}</h3>
                <span className="text-[11px] font-mono text-cat-sub bg-cat-card-subtle px-2 py-0.5 rounded border border-cat-border">
                  {f.topic}
                </span>
              </div>
              <div className="p-2.5 rounded-md bg-cat-card-subtle border border-cat-border font-mono text-xs text-cat-ink font-medium">
                <MathText content={f.formula} />
              </div>
              <p className="text-xs text-cat-sub leading-relaxed">
                <MathText content={f.explanation} />
              </p>
              {f.shortcut && (
                <div className="text-[11px] text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2 rounded border border-amber-500/20">
                  <span className="font-semibold">CAT Shortcut:</span> <MathText content={f.shortcut} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

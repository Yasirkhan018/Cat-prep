'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Zap, Play, CheckCircle } from 'lucide-react';
import { FORMULAS_DB } from '@/lib/data/mockDatabase';

const QA_MODULES = [
  { name: 'Arithmetic', topics: ['Percentages', 'Profit & Loss', 'Discounts', 'Ratio & Proportion', 'Averages', 'Mixtures & Alligation', 'SI & CI', 'Time & Work', 'Time, Speed & Distance', 'Boats & Streams', 'Races'], count: 420 },
  { name: 'Algebra', topics: ['Linear Equations', 'Quadratic Equations', 'Inequalities', 'Modulus', 'Functions', 'Graphs', 'Logarithms', 'Sequences (AP/GP)', 'Maxima & Minima'], count: 350 },
  { name: 'Number System', topics: ['Divisibility', 'Factors', 'Remainders', 'Units Digit', 'Cyclicity', 'Factorials', 'Trailing Zeroes', 'Base Systems'], count: 280 },
  { name: 'Geometry', topics: ['Triangles', 'Circles', 'Quadrilaterals', 'Polygons', 'Coordinate Geometry', 'Mensuration 2D/3D'], count: 310 },
  { name: 'Modern Mathematics', topics: ['Sets & Venn Diagrams', 'Permutation & Combination', 'Probability'], count: 210 }
];

export default function QASyllabusPage() {
  // Interactive variable slider state for TSD Harmonic Speed formula
  const [speedA, setSpeedA] = useState(60);
  const [speedB, setSpeedB] = useState(40);
  const avgSpeed = Math.round((2 * speedA * speedB) / (speedA + speedB) * 10) / 10;

  return (
    <div className="max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/60 to-cat-card border border-blue-500/30 rounded-3xl p-6 lg:p-8 space-y-2">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>Quantitative Aptitude Complete Syllabus</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
          Master CAT QA Concept-by-Concept
        </h1>
        <p className="text-sm text-slate-300">
          Complete breakdown across Arithmetic, Algebra, Number System, Geometry, and Modern Math.
        </p>
      </div>

      {/* Interactive QA Simulation Card */}
      <div className="bg-cat-card border border-amber-500/30 rounded-3xl p-6 lg:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-cat-border pb-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Zap className="w-4 h-4" />
            <span>Interactive Concept Simulation: Harmonic Average Speed</span>
          </div>
          <span className="text-xs text-amber-300 font-mono font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            Formula: S_avg = 2ab / (a + b)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1">Outward Speed (a): {speedA} km/h</label>
              <input
                type="range"
                min="10"
                max="120"
                value={speedA}
                onChange={(e) => setSpeedA(Number(e.target.value))}
                className="w-full accent-blue-500 bg-cat-bg"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1">Return Speed (b): {speedB} km/h</label>
              <input
                type="range"
                min="10"
                max="120"
                value={speedB}
                onChange={(e) => setSpeedB(Number(e.target.value))}
                className="w-full accent-blue-500 bg-cat-bg"
              />
            </div>
          </div>

          <div className="lg:col-span-2 bg-cat-bg border border-cat-border rounded-2xl p-4 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Calculated Average Speed:</span>
              <div className="text-3xl font-black text-amber-400 font-mono">{avgSpeed} km/h</div>
              <p className="text-xs text-slate-400">
                Simple Average (a+b)/2 would be {(speedA + speedB)/2} km/h (TRAP!). Harmonic average accounts for time difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QA_MODULES.map((mod, idx) => (
          <div key={idx} className="bg-cat-card border border-cat-border rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-cat-border pb-3">
                <h3 className="font-bold text-white text-base">{mod.name}</h3>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-lg border border-blue-500/20">
                  {mod.count} Qs
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {mod.topics.map((t, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-medium px-2 py-1 rounded-lg bg-cat-bg text-slate-300 border border-cat-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/practice?section=QA&topic=${encodeURIComponent(mod.name === 'Modern Mathematics' ? 'Modern Math' : mod.name)}`}
              className="w-full py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 text-xs font-bold flex items-center justify-center gap-2 hover:text-white transition-all"
            >
              <span>Practice {mod.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

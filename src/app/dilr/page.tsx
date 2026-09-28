'use client';

import React, { useState } from 'react';
import { BrainCircuit, Timer, CheckCircle, ArrowRight, Layers, Users, Table } from 'lucide-react';
import { DILR_SETS_DB } from '@/lib/data/mockDatabase';

export default function DILRPage() {
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const currentSet = DILR_SETS_DB[activeSetIndex] || DILR_SETS_DB[0];

  // Interactive seating placement state
  const [seats, setSeats] = useState<(string | null)[]>(['B', null, 'C', null, 'A', null, 'D', null]);

  const toggleSeat = (idx: number) => {
    const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', null];
    const currentVal = seats[idx];
    const nextIdx = (options.indexOf(currentVal) + 1) % options.length;
    const newSeats = [...seats];
    newSeats[idx] = options[nextIdx];
    setSeats(newSeats);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/60 to-cat-card border border-indigo-500/30 rounded-3xl p-6 lg:p-8 space-y-2">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
          <BrainCircuit className="w-4 h-4" />
          <span>CAT Data Interpretation & Logical Reasoning Hub</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
          Interactive DILR Puzzle Solver
        </h1>
        <p className="text-sm text-slate-300">
          Solve linked CAT sets (4-6 Qs) with interactive constraint boards and arrangement grids.
        </p>
      </div>

      {/* Main Set Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Dataset & Interactive Board (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-cat-card border border-cat-border rounded-3xl p-6 lg:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-cat-border pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                {currentSet.theme}
              </span>
              <h2 className="text-lg font-bold text-white">{currentSet.title}</h2>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
              ⏱ Set Target: 10-12 mins
            </span>
          </div>

          {/* Dataset Text */}
          <div className="p-4 rounded-2xl bg-cat-bg border border-cat-border text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line">
            {currentSet.dataset}
          </div>

          {/* Interactive Circular Seating Placement Board */}
          <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Interactive Circular Seating Constraint Board (Click seat to place founder)</span>
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              {seats.map((seatVal, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => toggleSeat(sIdx)}
                  className={`p-3 rounded-xl border text-center transition-all font-mono font-bold text-sm ${
                    seatVal
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                      : 'bg-cat-bg text-slate-500 border-cat-border hover:border-slate-400'
                  }`}
                >
                  Seat {sIdx + 1}: {seatVal || '?'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Linked Questions Palette (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-cat-card border border-cat-border rounded-3xl p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-cat-border pb-3">
              <h3 className="font-bold text-white text-base">Linked Questions ({currentSet.questions.length})</h3>
              <span className="text-xs text-slate-400 font-medium">Question 1 of {currentSet.questions.length}</span>
            </div>

            {currentSet.questions.map((q, qIdx) => (
              <div key={qIdx} className="space-y-4">
                <p className="text-sm font-semibold text-slate-100 leading-relaxed">{q.question}</p>
                <div className="space-y-2">
                  {q.options?.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      className="w-full p-3 rounded-xl bg-cat-bg border border-cat-border hover:border-indigo-500 text-left text-xs font-medium text-slate-200 transition-all"
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2">
            <span>Submit DILR Set & Check Answers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

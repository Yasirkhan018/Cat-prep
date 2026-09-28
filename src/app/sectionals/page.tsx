'use client';

import React, { useState } from 'react';
import { Clock, Play, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const SECTIONALS = [
  { id: 'sec_qa_1', name: 'QA Sectional Test 1', section: 'QA', durationMins: 40, qs: 22 },
  { id: 'sec_dilr_1', name: 'DILR Sectional Test 1', section: 'DILR', durationMins: 40, qs: 20 },
  { id: 'sec_varc_1', name: 'VARC Sectional Test 1', section: 'VARC', durationMins: 40, qs: 24 },
];

export default function SectionalTestsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/60 to-cat-card border border-blue-500/30 rounded-3xl p-6 lg:p-8 space-y-2">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>CAT SECTIONAL TESTS (TIMED ENVIRONMENT)</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
          Timed Sectional Practice Tests
        </h1>
        <p className="text-sm text-slate-300">
          Strict 40-minute countdown timers, question palette navigation, and post-test analytics.
        </p>
      </div>

      {/* Sectional Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SECTIONALS.map((s) => (
          <div key={s.id} className="bg-cat-card border border-cat-border rounded-3xl p-6 space-y-4 hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between border-b border-cat-border pb-3">
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                {s.section}
              </span>
              <span className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{s.durationMins} Mins</span>
              </span>
            </div>

            <h3 className="font-bold text-white text-base">{s.name}</h3>
            <p className="text-xs text-slate-300">{s.qs} CAT-level questions with strict sectional countdown timer.</p>

            <button
              onClick={() => alert(`Starting ${s.name}... Standard CAT test interface initialized.`)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Sectional Test</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

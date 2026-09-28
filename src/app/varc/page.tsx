'use client';

import React, { useState } from 'react';
import { BookOpenCheck, Highlighter, Type, ArrowRight, Layers, FileText } from 'lucide-react';
import { RC_SETS_DB } from '@/lib/data/mockDatabase';

export default function VARCHubPage() {
  const [fontSize, setFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');
  const [highlightMode, setHighlightMode] = useState(false);
  const currentRC = RC_SETS_DB[0];

  // Para Jumble drag-and-drop state
  const [pjSentences, setPjSentences] = useState([
    { id: '1', text: "A: Artificial intelligence systems manipulate symbols based on syntactic rules." },
    { id: '2', text: "B: However, syntactic processing does not inherently imply semantic understanding." },
    { id: '3', text: "C: John Searle demonstrated this distinction using his famous Chinese Room argument." },
    { id: '4', text: "D: Thus, LLMs calculate token probabilities without phenomenological consciousness." }
  ]);

  const moveSentence = (index: number, direction: 'up' | 'down') => {
    const newArr = [...pjSentences];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newArr.length) return;
    const temp = newArr[index];
    newArr[index] = newArr[targetIdx];
    newArr[targetIdx] = temp;
    setPjSentences(newArr);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/60 to-cat-card border border-emerald-500/30 rounded-3xl p-6 lg:p-8 space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <BookOpenCheck className="w-4 h-4" />
          <span>Verbal Ability & Reading Comprehension Hub</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
          CAT Reading Comprehension & Verbal Practice
        </h1>
        <p className="text-sm text-slate-300">
          High-level passages across Philosophy, Tech, Economics, and drag-and-drop Para Jumbles.
        </p>
      </div>

      {/* RC Passage Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Passage Reader (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-cat-card border border-cat-border rounded-3xl p-6 lg:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-cat-border pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                Genre: {currentRC.genre}
              </span>
              <h2 className="text-base font-bold text-white">{currentRC.title}</h2>
            </div>

            {/* Reading Toolbar */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHighlightMode(!highlightMode)}
                className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-all ${
                  highlightMode ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' : 'bg-cat-bg text-slate-400 border-cat-border'
                }`}
              >
                Highlight
              </button>
              <button
                onClick={() => setFontSize(fontSize === 'text-sm' ? 'text-base' : fontSize === 'text-base' ? 'text-lg' : 'text-sm')}
                className="p-1.5 rounded-lg bg-cat-bg border border-cat-border text-xs text-slate-400 hover:text-white"
              >
                <Type className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Passage Content */}
          <div className={`p-4 rounded-2xl bg-cat-bg border border-cat-border text-slate-200 leading-relaxed space-y-4 font-serif ${fontSize}`}>
            {currentRC.passage}
          </div>
        </div>

        {/* RC Question & Para Jumble Tool (Right 5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* RC Question */}
          <div className="bg-cat-card border border-cat-border rounded-3xl p-6 space-y-4">
            <div className="border-b border-cat-border pb-3">
              <h3 className="font-bold text-white text-sm">RC Question 1</h3>
            </div>
            {currentRC.questions.map((q, qIdx) => (
              <div key={qIdx} className="space-y-3">
                <p className="text-xs font-semibold text-slate-100">{q.question}</p>
                <div className="space-y-2">
                  {q.options?.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      className="w-full p-3 rounded-xl bg-cat-bg border border-cat-border hover:border-emerald-500 text-left text-xs text-slate-200 transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Para Jumbles Reordering Box */}
          <div className="bg-cat-card border border-emerald-500/30 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-cat-border pb-3">
              <h3 className="font-bold text-emerald-400 text-xs uppercase tracking-wider">
                Interactive Para Jumble Reorder (Move Up/Down)
              </h3>
            </div>

            <div className="space-y-2">
              {pjSentences.map((s, idx) => (
                <div key={s.id} className="p-3 rounded-xl bg-cat-bg border border-cat-border flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-200 font-medium">{s.text}</span>
                  <div className="flex gap-1 shrink-0">
                    <button
                      onClick={() => moveSentence(idx, 'up')}
                      disabled={idx === 0}
                      className="px-2 py-1 rounded bg-cat-card border border-cat-border disabled:opacity-30 text-slate-300"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveSentence(idx, 'down')}
                      disabled={idx === pjSentences.length - 1}
                      className="px-2 py-1 rounded bg-cat-card border border-cat-border disabled:opacity-30 text-slate-300"
                    >
                      ↓
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30">
              Submit Sequence
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

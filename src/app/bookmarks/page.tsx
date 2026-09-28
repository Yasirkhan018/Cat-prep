'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bookmark, ArrowRight, Trash2, BookOpen } from 'lucide-react';
import { QUESTIONS_DB } from '@/lib/data/mockDatabase';
import { getBookmarks, removeBookmark } from '@/lib/store/appStore';
import { Question } from '@/lib/types';
import MathText from '@/components/common/MathText';

export default function BookmarksPage() {
  const [bookmarkedList, setBookmarkedList] = useState<Question[]>([]);
  const [mounted, setMounted] = useState(false);

  const loadBookmarks = () => {
    const ids = getBookmarks();
    const found = QUESTIONS_DB.filter(q => ids.includes(q.id));
    setBookmarkedList(found);
  };

  useEffect(() => {
    setMounted(true);
    loadBookmarks();
    window.addEventListener('app_state_changed', loadBookmarks);
    return () => window.removeEventListener('app_state_changed', loadBookmarks);
  }, []);

  const handleRemove = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    removeBookmark(id);
    loadBookmarks();
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/60 to-cat-card border border-amber-500/30 rounded-3xl p-6 lg:p-8 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Bookmark className="w-4 h-4" />
          <span>SAVED BOOKMARKS & REVISION QUEUE</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
          Bookmarked Questions & Concepts
        </h1>
        <p className="text-sm text-slate-300">
          Quickly access questions you saved for later review, formulas, or tricky problems.
        </p>
      </div>

      {bookmarkedList.length === 0 ? (
        <div className="bg-cat-card border border-cat-border rounded-3xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-cat-ink">No bookmarks yet</h3>
            <p className="text-xs text-cat-sub max-w-sm mx-auto">
              While practicing questions in Quant, DILR, or VARC, bookmark tricky traps to revisit them before your exam.
            </p>
          </div>
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-medium text-xs transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Start Practice</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarkedList.map((q) => (
            <div key={q.id} className="bg-cat-card border border-cat-border rounded-3xl p-6 space-y-4 shadow-subtle hover:border-cat-border-strong transition-all">
              <div className="flex justify-between items-center border-b border-cat-border pb-3">
                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                  {q.section} • {q.topic}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-cat-sub font-mono">{q.difficulty}</span>
                  <button
                    onClick={(e) => handleRemove(q.id, e)}
                    className="p-1 rounded text-cat-sub hover:text-red-500 hover:bg-red-500/10 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="text-sm text-cat-ink font-medium leading-relaxed">
                <MathText content={q.question} />
              </div>
              <div className="flex justify-between items-center pt-1">
                <Link
                  href={`/practice?id=${q.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-400"
                >
                  <span>Solve Question Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

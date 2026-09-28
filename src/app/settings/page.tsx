'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LogOut, 
  RotateCcw, 
  ArrowRight,
  SlidersHorizontal,
  Palette
} from 'lucide-react';
import { getAppState, logoutUser, resetAllState } from '@/lib/store/appStore';
import { UserAppState } from '@/lib/types';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function ProfileSettingsPage() {
  const router = useRouter();
  const [appState, setAppState] = useState<UserAppState | null>(null);
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    setAppState(getAppState());
  }, []);

  const user = appState?.user;
  const onboarding = appState?.onboarding;

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all preparation data and start completely fresh?')) {
      resetAllState();
      setResetSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 1200);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 select-none pb-20">
      
      {/* Header */}
      <header className="space-y-1.5 border-b border-cat-border pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-cat-ink">
            Profile & Settings
          </h1>
          <span className="text-xs font-mono text-cat-sub">Aspirant Workspace</span>
        </div>
        <p className="text-sm text-cat-sub">
          Manage your account credentials, target percentile, and preparation configuration.
        </p>
      </header>

      {/* Profile Card */}
      <section className="bg-cat-card border border-cat-border rounded-xl p-6 space-y-6 shadow-subtle">
        <div className="flex items-center justify-between border-b border-cat-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-cat-primary text-cat-primary-text font-mono font-bold text-base flex items-center justify-center">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div>
              <h2 className="text-base font-semibold text-cat-ink">{user?.name || 'Aspirant'}</h2>
              <p className="text-xs text-cat-sub">{user?.email || 'aspirant@example.com'}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded-lg hover:bg-cat-hover text-cat-sub hover:text-cat-ink text-xs font-medium flex items-center gap-1.5 transition-colors border border-cat-border"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Current Active Parameters */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-cat-faint uppercase tracking-wider">
              Preparation Parameters
            </h3>
            <button
              onClick={() => router.push('/onboarding')}
              className="text-xs text-cat-ink hover:underline font-semibold flex items-center gap-1"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Modify Setup</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3.5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-cat-faint">Target Exam</span>
              <div className="text-xs font-semibold text-cat-ink">{onboarding?.exam || 'CAT 2026'}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-cat-faint">Target Percentile</span>
              <div className="text-xs font-semibold text-cat-ink">{onboarding?.targetPercentile || '99.5+%ile'}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-cat-faint">Daily Study Time</span>
              <div className="text-xs font-semibold text-cat-ink">{onboarding?.dailyTime || '1h'} / day</div>
            </div>

            <div className="p-3.5 rounded-lg bg-cat-card-subtle border border-cat-border space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-cat-faint">Experience</span>
              <div className="text-xs font-semibold text-cat-ink">{onboarding?.level || 'Beginner'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appearance & Themes Section */}
      <section id="appearance" className="bg-cat-card border border-cat-border rounded-xl p-6 space-y-4 shadow-subtle">
        <div className="border-b border-cat-border pb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-cat-sub" />
            <h3 className="text-sm font-semibold text-cat-ink">Workspace Appearance</h3>
          </div>
          <p className="text-xs text-cat-sub mt-0.5">
            Choose your preferred study aesthetic. Designed to maximize reading comfort during long test drills.
          </p>
        </div>

        {/* 3 Themes: Light, Dark, Beige & Black */}
        <ThemeSwitcher variant="cards" />
      </section>

      {/* Danger Zone */}
      <section className="bg-cat-card border border-cat-border rounded-xl p-6 space-y-4 shadow-subtle">
        <h3 className="text-xs font-semibold text-red-600 uppercase tracking-wider">
          Data Management
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h4 className="text-xs font-semibold text-cat-ink">Reset Preparation Data</h4>
            <p className="text-xs text-cat-sub">
              Clears all logged attempts, mistake bookmarks, and active session states.
            </p>
          </div>
          <button
            onClick={handleResetData}
            className="px-3.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Everything</span>
          </button>
        </div>
        {resetSuccess && (
          <p className="text-xs text-emerald-600 animate-fadeIn">
            State successfully reset. Redirecting to login...
          </p>
        )}
      </section>

    </div>
  );
}

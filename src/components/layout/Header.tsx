'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, User, LogOut, Settings, SlidersHorizontal, Palette, Shield, Sparkles, LogIn } from 'lucide-react';
import { getAppState, logoutUser, initAuthListener } from '@/lib/store/appStore';
import { UserAppState } from '@/lib/types';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import AuthModal from '@/components/auth/AuthModal';

export default function Header() {
  const router = useRouter();
  const [appState, setAppState] = useState<UserAppState | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const loadState = () => {
    setAppState(getAppState());
  };

  useEffect(() => {
    loadState();
    const unsubscribeAuth = initAuthListener();

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowProfileMenu(false);
      }
    };

    window.addEventListener('app_state_changed', loadState);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('app_state_changed', loadState);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      unsubscribeAuth();
    };
  }, []);

  const user = appState?.user;
  const stage = appState?.adaptiveProfile?.stage || 'BEGINNER';

  const stageBadgeConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
    BEGINNER: {
      label: 'Stage 1: Beginner',
      bg: 'bg-blue-500/10',
      text: 'text-blue-500 dark:text-blue-400',
      border: 'border-blue-500/20',
    },
    INTERMEDIATE: {
      label: 'Stage 2: Intermediate',
      bg: 'bg-amber-500/10',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500/20',
    },
    ADVANCED: {
      label: 'Stage 3: Advanced',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20',
    },
  };

  const currentBadge = stageBadgeConfig[stage] || stageBadgeConfig.BEGINNER;

  const handleLogout = () => {
    logoutUser();
    setShowProfileMenu(false);
    router.push('/login');
  };

  return (
    <>
      <header className="sticky top-0 z-20 bg-cat-card/95 backdrop-blur-sm border-b border-cat-border px-4 sm:px-8 py-2.5 flex items-center justify-between select-none">
        {/* Search Input */}
        <div className="relative w-52 sm:w-72 md:w-80">
          <Search className="w-3.5 h-3.5 text-cat-faint absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topics, formulas, or PYQ papers..."
            className="w-full bg-cat-card-subtle border border-cat-border rounded-lg pl-9 pr-3.5 py-1.5 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all"
          />
        </div>

        {/* Header Actions & Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Telegram Community CTA */}
          <a
            href="https://t.me/catprepos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/30 text-xs font-semibold transition-all shadow-subtle"
            title="Join CAT Prep OS Community on Telegram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span className="hidden sm:inline">Join Telegram</span>
          </a>

          {/* 3-Theme Switcher: Segmented on desktop, compact dropdown on small screens */}
          <ThemeSwitcher variant="segmented" className="hidden md:inline-flex" />
          <ThemeSwitcher variant="dropdown" className="md:hidden" />

          {user && user.isAuthenticated ? (
            <div ref={menuRef} className="relative flex items-center gap-2">
              {/* Stage Badge */}
              <div 
                className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${currentBadge.bg} ${currentBadge.text} ${currentBadge.border}`}
                title={`Current Adaptive Stage: ${stage}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                <span>{currentBadge.label}</span>
              </div>

              {/* User Dropdown Trigger */}
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1 pl-2 pr-1.5 rounded-lg hover:bg-cat-hover border border-transparent hover:border-cat-border transition-all"
                aria-expanded={showProfileMenu}
                aria-haspopup="true"
              >
                <span className="text-xs font-medium text-cat-ink hidden sm:inline max-w-[120px] truncate">
                  {user.name}
                </span>
                {user.avatar && user.avatar.startsWith('http') ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-md object-cover border border-cat-border bg-cat-card-subtle"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-md bg-cat-primary text-cat-primary-text font-mono text-xs flex items-center justify-center font-semibold shadow-sm">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                  </div>
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-cat-card border border-cat-border rounded-xl p-1.5 shadow-elevated space-y-0.5 z-30 text-xs animate-fadeIn">
                  <div className="px-3 py-2 border-b border-cat-border mb-1 text-[11px] text-cat-sub">
                    <div className="text-cat-faint text-[10px] uppercase tracking-wider font-semibold">Signed In As</div>
                    <span className="text-cat-ink font-semibold block truncate mt-0.5">{user.email}</span>
                    <div className="sm:hidden mt-1.5">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium border ${currentBadge.bg} ${currentBadge.text} ${currentBadge.border}`}>
                        {currentBadge.label}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cat-hover text-cat-ink transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5 text-cat-sub" />
                    <span>Profile & Target</span>
                  </Link>

                  <Link
                    href="/onboarding"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cat-hover text-cat-ink transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-cat-sub" />
                    <span>Adjust Prep Setup</span>
                  </Link>

                  <Link
                    href="/settings#appearance"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cat-hover text-cat-ink transition-colors"
                  >
                    <Palette className="w-3.5 h-3.5 text-cat-sub" />
                    <span>Appearance / Themes</span>
                  </Link>

                  <div className="border-t border-cat-border pt-1 mt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-600 transition-colors text-left font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Guest State: Sleek Sign In Button */
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-3.5 py-1.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-medium text-xs flex items-center gap-1.5 transition-all shadow-subtle hover:shadow-md cursor-pointer active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </header>

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          loadState();
        }}
      />
    </>
  );
}

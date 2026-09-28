'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, BookOpen, Check } from 'lucide-react';
import { useTheme, AppTheme } from '@/lib/theme/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'segmented' | 'dropdown' | 'cards';
  className?: string;
}

const THEMES: { id: AppTheme; label: string; icon: React.ElementType; description: string; colors: { bg: string; card: string; ink: string; border: string } }[] = [
  {
    id: 'light',
    label: 'Light',
    icon: Sun,
    description: 'Crisp white surfaces with clean slate typography',
    colors: {
      bg: '#F8F9FA',
      card: '#FFFFFF',
      ink: '#0F172A',
      border: '#E5E7EB',
    },
  },
  {
    id: 'dark',
    label: 'Dark',
    icon: Moon,
    description: 'Deep obsidian matte canvas with low eye fatigue',
    colors: {
      bg: '#09090B',
      card: '#141416',
      ink: '#F4F4F5',
      border: '#27272A',
    },
  },
  {
    id: 'beige',
    label: 'Beige & Black',
    icon: BookOpen,
    description: 'Warm paper parchment with deep ink contrast',
    colors: {
      bg: '#F4EFE6',
      card: '#FCFBF9',
      ink: '#1C1917',
      border: '#DDD6C8',
    },
  },
];

export default function ThemeSwitcher({ variant = 'segmented', className = '' }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];
  const CurrentIcon = currentThemeObj.icon;

  // Variant 1: Segmented Control (Default for headers / toolbars)
  if (variant === 'segmented') {
    return (
      <div className={`inline-flex items-center p-1 rounded-lg bg-cat-card-subtle border border-cat-border text-xs ${className}`}>
        {THEMES.map((t) => {
          const Icon = t.icon;
          const isActive = theme === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                isActive
                  ? 'bg-cat-card text-cat-ink shadow-sm font-semibold'
                  : 'text-cat-sub hover:text-cat-ink'
              }`}
              title={`Switch to ${t.label} theme`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Variant 2: Dropdown Trigger (Compact for mobile or crowded headers)
  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-cat-card hover:bg-cat-hover border border-cat-border text-cat-ink text-xs font-medium transition-colors"
          title="Change theme"
        >
          <CurrentIcon className="w-3.5 h-3.5 text-cat-sub" />
          <span className="hidden md:inline">{currentThemeObj.label}</span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-cat-card border border-cat-border rounded-xl p-1.5 shadow-elevated z-40 space-y-0.5 text-xs animate-fadeIn">
            <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-cat-faint">
              Select Theme
            </div>
            {THEMES.map((t) => {
              const Icon = t.icon;
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-cat-card-subtle text-cat-ink font-semibold'
                      : 'text-cat-sub hover:text-cat-ink hover:bg-cat-hover'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t.label}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-cat-ink" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Variant 3: Visual Cards (Used in Settings / Preferences page)
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
      {THEMES.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
              isActive
                ? 'border-cat-primary bg-cat-card-subtle shadow-sm ring-1 ring-cat-primary'
                : 'border-cat-border hover:border-cat-border-strong bg-cat-card'
            }`}
          >
            {/* Visual Palette Preview */}
            <div
              className="w-full h-16 rounded-lg p-2 flex flex-col justify-between border mb-3"
              style={{
                backgroundColor: t.colors.bg,
                borderColor: t.colors.border,
              }}
            >
              <div
                className="w-16 h-4 rounded px-1.5 py-0.5 text-[9px] font-semibold flex items-center justify-between"
                style={{
                  backgroundColor: t.colors.card,
                  color: t.colors.ink,
                  border: `1px solid ${t.colors.border}`,
                }}
              >
                <span>Aa</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.colors.ink }} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-2 rounded" style={{ backgroundColor: t.colors.ink, opacity: 0.8 }} />
                <span className="w-12 h-2 rounded" style={{ backgroundColor: t.colors.ink, opacity: 0.2 }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold text-sm text-cat-ink">
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                </div>
                {isActive && <Check className="w-4 h-4 text-cat-ink" />}
              </div>
              <p className="text-xs text-cat-sub leading-relaxed">{t.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

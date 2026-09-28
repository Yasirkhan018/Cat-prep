'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  PenTool,
  Archive,
  Clock,
  BookMarked,
  FileText,
  Calendar,
  BarChart2,
  Settings,
  LogOut
} from 'lucide-react';
import { logoutUser } from '@/lib/store/appStore';
import { useRouter } from 'next/navigation';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

const PRIMARY_NAV = [
  { name: 'Prepare', path: '/', icon: Compass, description: "Today's Focus" },
  { name: 'Practice', path: '/practice', icon: PenTool, description: 'Topic Drills' },
  { name: 'PYQs', path: '/pyq', icon: Archive, badge: 'Official', description: 'Past Papers' },
  { name: 'Mocks', path: '/mocks', icon: Clock, description: 'Full Tests & Sectionals' },
  { name: 'Review', path: '/mistake-book', icon: BookMarked, description: 'Mistake Book' },
];

const SECONDARY_NAV = [
  { name: 'Formula Book', path: '/formula-book', icon: FileText },
  { name: 'Study Plan', path: '/study-plan', icon: Calendar },
  { name: 'Diagnostics', path: '/progress', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-cat-card border-r border-cat-border h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-cat-border flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cat-primary text-cat-primary-text font-mono font-bold text-base flex items-center justify-center">
            ∑
          </div>
          <div>
            <div className="font-semibold text-cat-ink text-sm tracking-tight flex items-center gap-1.5">
              <span>CAT Prep</span>
              <span className="text-[10px] font-mono text-cat-sub font-normal">2026</span>
            </div>
            <p className="text-[11px] text-cat-sub font-normal">Focused Workspace</p>
          </div>
        </Link>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Core Navigation */}
        <div className="space-y-1">
          <div className="px-3 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-cat-faint">
            Workspace
          </div>
          {PRIMARY_NAV.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-cat-primary text-cat-primary-text font-semibold'
                    : 'text-cat-sub hover:text-cat-ink hover:bg-cat-hover'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cat-primary-text' : 'text-cat-sub'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                      isActive
                        ? 'bg-black/20 text-white border-white/20'
                        : 'bg-cat-card-subtle text-cat-sub border-cat-border'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Reference & Tools */}
        <div className="space-y-1">
          <div className="px-3 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-cat-faint">
            Reference
          </div>
          {SECONDARY_NAV.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-cat-primary text-cat-primary-text font-semibold'
                    : 'text-cat-sub hover:text-cat-ink hover:bg-cat-hover'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cat-primary-text' : 'text-cat-sub'}`} />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Theme Switcher & Logout */}
      <div className="p-3 border-t border-cat-border space-y-2">
        <div className="px-1 flex flex-col gap-1">
          <span className="text-[10px] font-mono text-cat-faint uppercase tracking-wider">Theme</span>
          <ThemeSwitcher variant="segmented" className="w-full justify-between" />
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-1.5 px-3 rounded-lg hover:bg-cat-hover text-cat-sub hover:text-cat-ink text-xs font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

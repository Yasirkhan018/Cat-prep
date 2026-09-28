'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, PenTool, Archive, Clock, BookMarked } from 'lucide-react';

const MOBILE_ITEMS = [
  { name: 'Prepare', path: '/', icon: Compass },
  { name: 'Practice', path: '/practice', icon: PenTool },
  { name: 'PYQs', path: '/pyq', icon: Archive },
  { name: 'Mocks', path: '/mocks', icon: Clock },
  { name: 'Review', path: '/mistake-book', icon: BookMarked },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-cat-border px-3 py-2 flex items-center justify-around select-none">
      {MOBILE_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
              isActive ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

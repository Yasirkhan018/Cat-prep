'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { getAppState } from '@/lib/store/appStore';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setMounted(true);
    const state = getAppState();
    const authenticated = !!(state.user && state.user.isAuthenticated);
    setIsAuth(authenticated);

    // If accessing any app route without authentication (and not already on login)
    if (!authenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, router]);

  // Auth pages & onboarding pages get a clean, full-screen canvas without dashboard chrome
  const isAuthOrOnboarding = pathname === '/login' || pathname === '/onboarding';

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cat-bg flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-zinc-800 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (isAuthOrOnboarding) {
    return <div className="min-h-screen bg-cat-bg text-cat-ink">{children}</div>;
  }

  return (
    <div className="bg-cat-bg text-cat-ink flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-5 sm:p-8 lg:p-10 pb-24 lg:pb-12 overflow-y-auto">
          {children}
        </main>
        <MobileNav />
      </div>
    </div>
  );
}

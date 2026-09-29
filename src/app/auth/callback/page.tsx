'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { loginUser, getAppState } from '@/lib/store/appStore';
import { Loader2, AlertCircle } from 'lucide-react';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('Completing sign-in...');

  useEffect(() => {
    let isMounted = true;

    async function handleAuth() {
      if (!isSupabaseConfigured()) {
        if (isMounted) setError('Supabase credentials are not configured.');
        return;
      }

      try {
        // Supabase detectSessionInUrl automatically extracts token/hash
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          if (isMounted) setError(sessionError.message);
          return;
        }

        if (session?.user) {
          const user = session.user;
          const displayName =
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            user.email?.split('@')[0] ||
            'Aspirant';

          loginUser(
            user.email || '',
            displayName,
            user.id,
            user.user_metadata?.avatar_url || user.user_metadata?.picture
          );

          if (isMounted) {
            setStatus('Sign in successful! Redirecting to workspace...');
            setTimeout(() => {
              const state = getAppState();
              if (state.onboarding?.isCompleted) {
                router.replace('/');
              } else {
                router.replace('/onboarding');
              }
            }, 600);
          }
        } else {
          // Listen for auth state change if session is in process of exchange
          const { data: { subscription } } = supabase.auth.onAuthStateChange((event, s) => {
            if (s?.user) {
              const user = s.user;
              const displayName =
                user.user_metadata?.full_name ||
                user.user_metadata?.name ||
                user.email?.split('@')[0] ||
                'Aspirant';

              loginUser(
                user.email || '',
                displayName,
                user.id,
                user.user_metadata?.avatar_url || user.user_metadata?.picture
              );

              if (isMounted) {
                setStatus('Sign in successful! Redirecting to workspace...');
                setTimeout(() => {
                  const state = getAppState();
                  if (state.onboarding?.isCompleted) {
                    router.replace('/');
                  } else {
                    router.replace('/onboarding');
                  }
                }, 600);
              }
              subscription.unsubscribe();
            }
          });

          // Timeout fallback after 8 seconds
          setTimeout(() => {
            if (isMounted && !getAppState().user?.isAuthenticated) {
              setError('Authentication timed out or could not verify credentials.');
            }
          }, 8000);
        }
      } catch (err: any) {
        if (isMounted) setError(err?.message || 'Authentication error.');
      }
    }

    handleAuth();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-cat-bg flex flex-col items-center justify-center p-4 select-none">
      <div className="w-full max-w-sm bg-cat-card border border-cat-border rounded-2xl p-8 space-y-6 shadow-subtle text-center">
        <div className="w-12 h-12 rounded-xl bg-cat-primary/10 text-cat-primary border border-cat-primary/20 font-mono font-bold text-xl mx-auto flex items-center justify-center">
          ∑
        </div>

        {error ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2 text-left">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={() => router.replace('/login')}
              className="w-full py-2.5 rounded-xl bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
            >
              Return to Sign In
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <Loader2 className="w-6 h-6 animate-spin text-cat-primary mx-auto" />
            <h2 className="text-base font-bold text-cat-ink">{status}</h2>
            <p className="text-xs text-cat-sub">
              Please wait while we verify your Google credentials and prepare your CAT preparation workspace.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

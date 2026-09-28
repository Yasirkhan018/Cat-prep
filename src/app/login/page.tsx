'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, ArrowRight, X, Check } from 'lucide-react';
import { 
  loginUser, 
  signupUser 
} from '@/lib/store/appStore';
import { 
  isSupabaseConfigured, 
  signInWithPassword, 
  signUpWithPassword 
} from '@/lib/supabaseClient';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import AuthModal from '@/components/auth/AuthModal';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!password || password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    if (isSupabaseConfigured()) {
      if (mode === 'signup') {
        if (!name.trim()) {
          setError('Please enter your name.');
          return;
        }
        try {
          const { data, error: signUpError } = await signUpWithPassword(cleanEmail, password, name.trim());
          if (signUpError) {
            setError(signUpError.message);
            return;
          }
          if (data?.user) {
            signupUser(name.trim(), cleanEmail);
            router.push('/onboarding');
          }
        } catch (err: any) {
          setError(err?.message || 'Failed to create account.');
        }
      } else {
        try {
          const { data, error: signInError } = await signInWithPassword(cleanEmail, password);
          if (signInError) {
            setError(signInError.message);
            return;
          }
          if (data?.user) {
            const displayName = data.user.user_metadata?.full_name || name.trim() || undefined;
            loginUser(cleanEmail, displayName, data.user.id);
            router.push('/');
          }
        } catch (err: any) {
          setError(err?.message || 'Failed to sign in.');
        }
      }
      return;
    }

    if (mode === 'signup') {
      if (!name.trim()) {
        setError('Please enter your name.');
        return;
      }
      signupUser(name.trim(), cleanEmail);
      router.push('/onboarding');
    } else {
      loginUser(cleanEmail, name.trim() || undefined);
      router.push('/');
    }
  };


  return (
    <div className="min-h-screen bg-cat-bg flex flex-col justify-center items-center px-4 py-12 select-none relative">
      
      {/* Top right theme toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <ThemeSwitcher variant="dropdown" />
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-sm bg-cat-card border border-cat-border rounded-2xl p-7 sm:p-8 space-y-6 shadow-subtle">
        
        {/* Brand Header */}
        <div className="text-center space-y-1.5">
          <div className="w-10 h-10 rounded-lg bg-cat-primary text-cat-primary-text font-mono font-bold text-lg mx-auto flex items-center justify-center mb-3">
            ∑
          </div>
          <h1 className="text-xl font-bold tracking-tight text-cat-ink">
            CAT Prep 2026
          </h1>
          <p className="text-xs text-cat-sub">
            {mode === 'login' ? 'Sign in to continue your preparation' : 'Create your personalized preparation account'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 bg-cat-card-subtle p-1 rounded-lg text-xs">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`py-1.5 rounded-md font-medium transition-colors ${
              mode === 'login'
                ? 'bg-cat-card text-cat-ink shadow-sm font-semibold'
                : 'text-cat-sub hover:text-cat-ink'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-1.5 rounded-md font-medium transition-colors ${
              mode === 'signup'
                ? 'bg-cat-card text-cat-ink shadow-sm font-semibold'
                : 'text-cat-sub hover:text-cat-ink'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-xs">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-cat-ink block">Full Name</label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-cat-faint absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Aspirant Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-cat-card-subtle border border-cat-border rounded-lg pl-9 pr-3.5 py-2 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-medium text-cat-ink block">Email Address</label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-cat-faint absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="aspirant@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cat-card-subtle border border-cat-border rounded-lg pl-9 pr-3.5 py-2 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-cat-ink block">Password</label>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] text-cat-sub hover:text-cat-ink"
                >
                  Forgot?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 text-cat-faint absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-cat-card-subtle border border-cat-border rounded-lg pl-9 pr-3.5 py-2 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>{mode === 'login' ? 'Sign In' : 'Continue to Setup'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cat-border" />
          </div>
          <span className="relative bg-cat-card px-2 text-[11px] text-cat-faint font-mono">
            or
          </span>
        </div>

        {/* Email OTP / Magic Link Option */}
        <button
          type="button"
          onClick={() => setShowAuthModal(true)}
          className="w-full py-2.5 rounded-lg bg-cat-card-subtle hover:bg-cat-hover border border-cat-border text-xs font-semibold text-cat-ink flex items-center justify-center gap-2 transition-colors shadow-subtle"
        >
          <Mail className="w-3.5 h-3.5 text-cat-primary" />
          <span>Sign In with Email OTP (No Password)</span>
        </button>

      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-cat-card border border-cat-border rounded-2xl p-6 space-y-4 shadow-elevated relative animate-fadeIn">
            <button
              onClick={() => { setShowForgotModal(false); setForgotSent(false); }}
              className="absolute right-4 top-4 text-cat-sub hover:text-cat-ink"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-cat-ink">Reset Password</h3>
              <p className="text-xs text-cat-sub">
                Enter your email address to receive password recovery instructions.
              </p>
            </div>

            {forgotSent ? (
              <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Reset link dispatched</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Check your inbox for instructions sent to <b>{forgotEmail}</b>.
                </p>
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="w-full mt-2 py-1.5 rounded-md bg-emerald-600 text-white font-medium text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full bg-cat-card-subtle border border-cat-border rounded-lg px-3 py-2 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (forgotEmail.includes('@')) setForgotSent(true);
                  }}
                  className="w-full py-2 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
                >
                  Send Recovery Link
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal for Email OTP / Magic Link */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => router.push('/')}
      />

    </div>
  );
}

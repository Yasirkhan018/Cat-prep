'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, ShieldCheck, ArrowRight, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { 
  signInWithPassword, 
  signUpWithPassword, 
  signInWithOtp, 
  verifyOtp, 
  isSupabaseConfigured 
} from '@/lib/supabaseClient';
import { loginUser, signupUser } from '@/lib/store/appStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

type AuthMode = 'signin' | 'signup' | 'otp';
type OtpStep = 'send' | 'verify';

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [otpStep, setOtpStep] = useState<OtpStep>('send');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSuccessSplash, setIsSuccessSplash] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setMode('signin');
      setOtpStep('send');
      setFullName('');
      setEmail('');
      setPassword('');
      setOtpToken('');
      setError(null);
      setSuccessMsg(null);
      setIsSuccessSplash(false);
      setLoading(false);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle Email + Password Sign In / Sign Up
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    if (mode === 'signup') {
      const cleanName = fullName.trim() || 'Aspirant';
      try {
        const { data, error: signUpError } = await signUpWithPassword(cleanEmail, password, cleanName);
        if (signUpError) {
          setError(signUpError.message);
          setLoading(false);
          return;
        }

        if (data?.user) {
          const user = loginUser(cleanEmail, cleanName, data.user.id);
          setIsSuccessSplash(true);
          setSuccessMsg(`Welcome, ${user.name}! Your account is created.`);
          setTimeout(() => {
            onClose();
            if (onSuccess) onSuccess();
          }, 1200);
        } else {
          // If Supabase sends confirmation email
          setSuccessMsg('Account registered! Please check your email to confirm your account.');
        }
      } catch (err: any) {
        setError(err?.message || 'Failed to create account.');
      } finally {
        setLoading(false);
      }
    } else {
      // Sign In
      try {
        const { data, error: signInError } = await signInWithPassword(cleanEmail, password);
        if (signInError) {
          setError(signInError.message);
          setLoading(false);
          return;
        }

        if (data?.user) {
          const u = data.user;
          const displayName = u.user_metadata?.full_name || u.user_metadata?.name || cleanEmail.split('@')[0] || 'Aspirant';
          const user = loginUser(cleanEmail, displayName, u.id);
          setIsSuccessSplash(true);
          setSuccessMsg(`Welcome back, ${user.name}!`);
          setTimeout(() => {
            onClose();
            if (onSuccess) onSuccess();
          }, 1200);
        }
      } catch (err: any) {
        setError(err?.message || 'Invalid email or password.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle OTP Send
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const { error: otpError } = await signInWithOtp(cleanEmail);
      if (otpError) {
        setError(otpError.message);
      } else {
        setOtpStep('verify');
        setSuccessMsg(`A 6-digit confirmation code was sent to ${cleanEmail}.`);
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP Verify
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanToken = otpToken.trim();
    if (!cleanToken || cleanToken.length < 6) {
      setError('Please enter the 6-digit code received on your email.');
      return;
    }

    setLoading(true);

    try {
      const { data, error: verifyError } = await verifyOtp(email.trim().toLowerCase(), cleanToken);
      if (verifyError) {
        setError(verifyError.message);
        setLoading(false);
        return;
      }

      if (data?.user) {
        const u = data.user;
        const displayName = u.user_metadata?.full_name || u.user_metadata?.name || u.email?.split('@')[0] || 'Aspirant';
        const user = loginUser(u.email || email, displayName, u.id);

        setIsSuccessSplash(true);
        setSuccessMsg(`Welcome, ${user.name}!`);
        setTimeout(() => {
          onClose();
          if (onSuccess) onSuccess();
        }, 1200);
      } else {
        setError('Verification failed. Please request a new code.');
      }
    } catch (err: any) {
      setError(err?.message || 'Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="w-full max-w-md bg-cat-card border border-cat-border rounded-2xl p-6 sm:p-7 shadow-elevated relative space-y-5 animate-scaleUp text-cat-ink"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-cat-sub hover:text-cat-ink hover:bg-cat-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 text-center pr-6 pl-2">
          <div className="w-10 h-10 rounded-xl bg-cat-primary/10 text-cat-primary border border-cat-primary/20 font-mono font-bold text-lg mx-auto flex items-center justify-center mb-2">
            ∑
          </div>
          <h2 id="auth-modal-title" className="text-lg font-bold tracking-tight text-cat-ink">
            {isSuccessSplash 
              ? 'Success' 
              : mode === 'otp'
              ? (otpStep === 'verify' ? 'Enter 6-Digit Code' : 'Sign In with OTP')
              : (mode === 'signup' ? 'Create Preparation Account' : 'Sign In to CAT Prep OS')}
          </h2>
          <p className="text-xs text-cat-sub">
            {mode === 'otp'
              ? (otpStep === 'verify' ? `Code sent to ${email}` : 'Enter your email to receive a login code.')
              : (mode === 'signup' 
                  ? 'Join thousands of CAT aspirants tracking adaptive mastery.' 
                  : 'Enter your credentials to access your synced progress.')}
          </p>
        </div>

        {/* Mode Switcher Tabs (Sign In / Create Account) */}
        {!isSuccessSplash && mode !== 'otp' && (
          <div className="grid grid-cols-2 bg-cat-card-subtle p-1 rounded-xl text-xs">
            <button
              type="button"
              onClick={() => { setMode('signin'); setError(null); setSuccessMsg(null); }}
              className={`py-1.5 rounded-lg font-medium transition-all ${
                mode === 'signin'
                  ? 'bg-cat-card text-cat-ink shadow-sm font-semibold'
                  : 'text-cat-sub hover:text-cat-ink'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); setSuccessMsg(null); }}
              className={`py-1.5 rounded-lg font-medium transition-all ${
                mode === 'signup'
                  ? 'bg-cat-card text-cat-ink shadow-sm font-semibold'
                  : 'text-cat-sub hover:text-cat-ink'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Alert Notifications */}
        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && !error && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs flex items-start gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Success Splash */}
        {isSuccessSplash ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-xs font-medium text-cat-sub">Loading your personalized dashboard...</p>
          </div>
        ) : mode === 'otp' ? (
          /* OTP Flow */
          otpStep === 'send' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-cat-ink block">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-cat-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    autoFocus
                    placeholder="aspirant@iim.ac.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full bg-cat-card-subtle border border-cat-border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { setMode('signin'); setError(null); }}
                  className="text-xs text-cat-sub hover:text-cat-ink underline transition-colors"
                >
                  ← Back to Email & Password
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-cat-ink block">6-Digit Code</label>
                  <button
                    type="button"
                    onClick={() => { setOtpStep('send'); setError(null); }}
                    className="text-[11px] text-cat-primary hover:underline"
                  >
                    Change email
                  </button>
                </div>
                <div className="relative">
                  <ShieldCheck className="w-4 h-4 text-cat-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={8}
                    required
                    autoFocus
                    placeholder="123456"
                    value={otpToken}
                    onChange={(e) => setOtpToken(e.target.value.replace(/[^0-9]/g, ''))}
                    disabled={loading}
                    className="w-full bg-cat-card-subtle border border-cat-border rounded-xl pl-10 pr-3.5 py-2.5 text-center font-mono tracking-widest text-sm text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || otpToken.length < 6}
                className="w-full py-2.5 rounded-xl bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <>
                    <span>Verify & Sign In</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { setMode('signin'); setError(null); }}
                  className="text-xs text-cat-sub hover:text-cat-ink underline transition-colors"
                >
                  ← Back to Email & Password
                </button>
              </div>
            </form>
          )
        ) : (
          /* Email + Password Form (Primary Mode) */
          <form onSubmit={handlePasswordSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-cat-ink block">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-cat-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={loading}
                    className="w-full bg-cat-card-subtle border border-cat-border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all disabled:opacity-60"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-cat-ink block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-cat-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="aspirant@iim.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full bg-cat-card-subtle border border-cat-border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all disabled:opacity-60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-cat-ink block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-cat-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full bg-cat-card-subtle border border-cat-border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-cat-ink placeholder-cat-faint focus:outline-none focus:border-cat-border-strong focus:bg-cat-card transition-all disabled:opacity-60"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{mode === 'signup' ? 'Creating Account...' : 'Signing In...'}</span>
                </>
              ) : (
                <>
                  <span>{mode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Link to OTP */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => { setMode('otp'); setOtpStep('send'); setError(null); }}
                className="text-[11px] text-cat-sub hover:text-cat-ink transition-colors"
              >
                Prefer one-time code? <span className="text-cat-primary font-medium hover:underline">Sign in with Email OTP</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

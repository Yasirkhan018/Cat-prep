import { createClient, SupabaseClient, User, Session, AuthChangeEvent } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const isSupabaseConfigured = (): boolean => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(
    url &&
    key &&
    url !== 'https://placeholder-url.supabase.co' &&
    !url.includes('placeholder') &&
    key !== 'placeholder-anon-key'
  );
};

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// ==============================================================================
// AUTHENTICATION HELPERS
// ==============================================================================

/**
 * Sends a One-Time Password / Magic Link to the user's email.
 */
export async function signInWithOtp(email: string) {
  if (!isSupabaseConfigured()) {
    console.warn('[Supabase] Client not configured with live credentials.');
    return { data: null, error: new Error('Supabase credentials are not configured.') };
  }

  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/` : undefined;

  return await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectUrl,
    },
  });
}

/**
 * Verifies a 6-digit email OTP token sent to the user.
 */
export async function verifyOtp(email: string, token: string) {
  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error('Supabase credentials are not configured.') };
  }

  return await supabase.auth.verifyOtp({
    email,
    token,
    type: 'email',
  });
}

/**
 * Initiates Google OAuth login flow.
 */
export async function signInWithGoogle() {
  if (!isSupabaseConfigured()) {
    console.warn('[Supabase] Google OAuth requires live Supabase credentials.');
    return { data: null, error: new Error('Supabase credentials are not configured.') };
  }

  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/` : undefined;

  return await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl,
    },
  });
}

/**
 * Signs in a user using email and password.
 */
export async function signInWithPassword(email: string, password: string) {
  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error('Supabase credentials are not configured.') };
  }
  return await supabase.auth.signInWithPassword({ email, password });
}

/**
 * Signs up a user using email, password, and optional full name.
 */
export async function signUpWithPassword(email: string, password: string, fullName?: string) {
  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error('Supabase credentials are not configured.') };
  }
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        name: fullName,
      },
    },
  });
}

/**
 * Signs the user out of their Supabase session.
 */
export async function signOut() {
  if (!isSupabaseConfigured()) {
    return { error: null };
  }
  return await supabase.auth.signOut();
}

/**
 * Fetches the currently authenticated Supabase user.
 */
export async function getCurrentUser(): Promise<User | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (err) {
    console.warn('[Supabase] Failed to get current user:', err);
    return null;
  }
}

/**
 * Fetches the active Supabase session.
 */
export async function getSession(): Promise<Session | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  } catch (err) {
    console.warn('[Supabase] Failed to get session:', err);
    return null;
  }
}

/**
 * Subscribes to Supabase auth state changes.
 */
export function onAuthStateChange(
  callback: (event: AuthChangeEvent, session: Session | null) => void
) {
  if (!isSupabaseConfigured()) {
    return { data: { subscription: { unsubscribe: () => {} } } };
  }
  return supabase.auth.onAuthStateChange(callback);
}

// ==============================================================================
// CLOUD DATA PERSISTENCE HELPERS
// ==============================================================================

export interface CloudProfile {
  id: string;
  email?: string;
  full_name?: string;
  avatar_url?: string;
  stage?: string;
  target_year?: string;
  target_percentile?: string;
}

export async function upsertCloudProfile(profile: CloudProfile) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert(profile, { onConflict: 'id' })
      .select()
      .single();
    if (error) console.warn('[Supabase] Error upserting profile:', error);
    return data;
  } catch (err) {
    console.warn('[Supabase] Profile sync exception:', err);
    return null;
  }
}

export async function fetchCloudProfile(userId: string): Promise<CloudProfile | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) {
      console.warn('[Supabase] Error fetching profile:', error);
      return null;
    }
    return data as CloudProfile;
  } catch (err) {
    console.warn('[Supabase] Profile fetch exception:', err);
    return null;
  }
}

export async function saveAttemptToCloud(userId: string, attempt: {
  questionId: string;
  isCorrect: boolean;
  userAnswer?: string;
  timeSpentSeconds?: number;
  mistakeReason?: string;
  feeling?: string;
  timestamp?: string;
}) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('user_attempts')
      .insert({
        user_id: userId,
        question_id: attempt.questionId,
        is_correct: attempt.isCorrect,
        selected_answer: attempt.userAnswer || null,
        time_taken_seconds: attempt.timeSpentSeconds || 0,
        mistake_reason: attempt.mistakeReason || null,
        feeling: attempt.feeling || null,
        created_at: attempt.timestamp || new Date().toISOString(),
      })
      .select()
      .single();
    if (error) console.warn('[Supabase] Error saving attempt:', error);
    return data;
  } catch (err) {
    console.warn('[Supabase] Attempt sync exception:', err);
    return null;
  }
}

export async function saveAttemptsBatchToCloud(userId: string, attempts: {
  questionId: string;
  isCorrect: boolean;
  userAnswer?: string;
  timeSpentSeconds?: number;
  mistakeReason?: string;
  feeling?: string;
  timestamp?: string;
}[]) {
  if (!isSupabaseConfigured() || attempts.length === 0) return null;
  try {
    const rows = attempts.map(attempt => ({
      user_id: userId,
      question_id: attempt.questionId,
      is_correct: attempt.isCorrect,
      selected_answer: attempt.userAnswer || null,
      time_taken_seconds: attempt.timeSpentSeconds || 0,
      mistake_reason: attempt.mistakeReason || null,
      feeling: attempt.feeling || null,
      created_at: attempt.timestamp || new Date().toISOString(),
    }));

    const CHUNK_SIZE = 50;
    const results = [];
    for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
      const chunk = rows.slice(i, i + CHUNK_SIZE);
      const { data, error } = await supabase.from('user_attempts').insert(chunk).select();
      if (error) {
        console.warn('[Supabase] Error saving attempts batch chunk:', error);
      } else if (data) {
        results.push(...data);
      }
    }
    return results;
  } catch (err) {
    console.warn('[Supabase] Attempts batch sync exception:', err);
    return null;
  }
}

export async function fetchCloudBookmarks(userId: string): Promise<string[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { data, error } = await supabase
      .from('user_bookmarks')
      .select('question_id')
      .eq('user_id', userId);
    if (error) {
      console.warn('[Supabase] Error fetching bookmarks:', error);
      return [];
    }
    return data ? data.map(r => r.question_id) : [];
  } catch (err) {
    console.warn('[Supabase] Bookmarks fetch exception:', err);
    return [];
  }
}

export async function saveBookmarkToCloud(userId: string, questionId: string, note?: string) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('user_bookmarks')
      .upsert({
        user_id: userId,
        question_id: questionId,
        note: note || null,
        created_at: new Date().toISOString(),
      }, { onConflict: 'user_id,question_id' });
    if (error) console.warn('[Supabase] Error saving bookmark:', error);
    return data;
  } catch (err) {
    console.warn('[Supabase] Bookmark sync exception:', err);
    return null;
  }
}

export async function removeBookmarkFromCloud(userId: string, questionId: string) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { error } = await supabase
      .from('user_bookmarks')
      .delete()
      .match({ user_id: userId, question_id: questionId });
    if (error) console.warn('[Supabase] Error removing bookmark:', error);
  } catch (err) {
    console.warn('[Supabase] Bookmark removal exception:', err);
  }
}

export async function saveDiagnosticToCloud(userId: string, result: {
  score: number;
  total: number;
  sectionScores: Record<string, unknown>;
  recommendedStage: string;
}) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('diagnostic_results')
      .insert({
        user_id: userId,
        score: result.score,
        total: result.total,
        section_scores: result.sectionScores,
        recommended_stage: result.recommendedStage,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (error) console.warn('[Supabase] Error saving diagnostic:', error);
    return data;
  } catch (err) {
    console.warn('[Supabase] Diagnostic sync exception:', err);
    return null;
  }
}

export async function fetchLatestDiagnosticFromCloud(userId: string) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('diagnostic_results')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) {
      console.warn('[Supabase] Error fetching diagnostic:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('[Supabase] Diagnostic fetch exception:', err);
    return null;
  }
}

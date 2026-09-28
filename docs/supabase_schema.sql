-- ==============================================================================
-- CAT PREP OS 2026 - PRODUCTION SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Safe, idempotent SQL script that can be run repeatedly without errors.
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. CREATE TABLES FIRST
-- ==============================================================================

-- Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  stage TEXT DEFAULT 'BEGINNER',
  target_year TEXT DEFAULT '2026',
  target_percentile TEXT DEFAULT '99.5+',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Attempts
CREATE TABLE IF NOT EXISTS public.user_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  selected_answer TEXT,
  time_taken_seconds INTEGER DEFAULT 0,
  mistake_reason TEXT,
  feeling TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookmarks
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_user_question_bookmark UNIQUE(user_id, question_id)
);

-- Diagnostic Results
CREATE TABLE IF NOT EXISTS public.diagnostic_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL DEFAULT 12,
  section_scores JSONB DEFAULT '{}'::jsonb,
  recommended_stage TEXT NOT NULL DEFAULT 'BEGINNER',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 3. CREATE INDEXES
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON public.user_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_question_id ON public.user_attempts(question_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user_question ON public.user_attempts(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON public.user_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_diagnostic_user_id ON public.diagnostic_results(user_id);

-- ==============================================================================
-- 4. ENABLE ROW LEVEL SECURITY
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- 5. IDEMPOTENT ROW LEVEL SECURITY POLICIES
-- ==============================================================================
DO $$
BEGIN
  -- Profiles policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view their own profile') THEN
    CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can insert their own profile') THEN
    CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update their own profile') THEN
    CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can delete their own profile') THEN
    CREATE POLICY "Users can delete their own profile" ON public.profiles FOR DELETE USING (auth.uid() = id);
  END IF;

  -- Attempts policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_attempts' AND policyname = 'Users can view their own attempts') THEN
    CREATE POLICY "Users can view their own attempts" ON public.user_attempts FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_attempts' AND policyname = 'Users can insert their own attempts') THEN
    CREATE POLICY "Users can insert their own attempts" ON public.user_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_attempts' AND policyname = 'Users can update their own attempts') THEN
    CREATE POLICY "Users can update their own attempts" ON public.user_attempts FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_attempts' AND policyname = 'Users can delete their own attempts') THEN
    CREATE POLICY "Users can delete their own attempts" ON public.user_attempts FOR DELETE USING (auth.uid() = user_id);
  END IF;

  -- Bookmarks policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_bookmarks' AND policyname = 'Users can view their own bookmarks') THEN
    CREATE POLICY "Users can view their own bookmarks" ON public.user_bookmarks FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_bookmarks' AND policyname = 'Users can insert their own bookmarks') THEN
    CREATE POLICY "Users can insert their own bookmarks" ON public.user_bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_bookmarks' AND policyname = 'Users can update their own bookmarks') THEN
    CREATE POLICY "Users can update their own bookmarks" ON public.user_bookmarks FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_bookmarks' AND policyname = 'Users can delete their own bookmarks') THEN
    CREATE POLICY "Users can delete their own bookmarks" ON public.user_bookmarks FOR DELETE USING (auth.uid() = user_id);
  END IF;

  -- Diagnostic results policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'diagnostic_results' AND policyname = 'Users can view their own diagnostic results') THEN
    CREATE POLICY "Users can view their own diagnostic results" ON public.diagnostic_results FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'diagnostic_results' AND policyname = 'Users can insert their own diagnostic results') THEN
    CREATE POLICY "Users can insert their own diagnostic results" ON public.diagnostic_results FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'diagnostic_results' AND policyname = 'Users can update their own diagnostic results') THEN
    CREATE POLICY "Users can update their own diagnostic results" ON public.diagnostic_results FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'diagnostic_results' AND policyname = 'Users can delete their own diagnostic results') THEN
    CREATE POLICY "Users can delete their own diagnostic results" ON public.diagnostic_results FOR DELETE USING (auth.uid() = user_id);
  END IF;
END $$;

-- ==============================================================================
-- 6. TRIGGERS & AUTOMATION
-- ==============================================================================

-- A. Auto-update updated_at on public.profiles
CREATE OR REPLACE FUNCTION public.handle_profile_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_profiles_updated_at ON public.profiles;
CREATE TRIGGER tr_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_updated_at();

-- B. Automatically create profile row when user signs up in auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    avatar_url,
    stage,
    target_year,
    target_percentile
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', SPLIT_PART(NEW.email, '@', 1), 'Aspirant'),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', 'https://api.dicebear.com/7.x/bottts/svg?seed=Aspirant'),
    'BEGINNER',
    '2026',
    '99.5+'
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ==============================================================================
-- 7. ROLES & GRANTS
-- ==============================================================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT SELECT ON public.profiles TO anon;

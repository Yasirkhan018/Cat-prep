'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check,
  CheckCircle2,
  Calendar,
  Clock,
  BookOpen,
  Calculator,
  Brain,
  Archive,
  Award
} from 'lucide-react';
import { 
  getAppState, 
  completeOnboarding, 
  saveOnboardingStep 
} from '@/lib/store/appStore';
import { 
  ExamChoice, 
  PrepLevel, 
  PrepSubjectChoice, 
  StudyTimePerDay, 
  StudyStyle,
  PrepOnboarding 
} from '@/lib/types';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

const STEPS = [
  { id: 1, label: 'Exam' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Subjects' },
  { id: 4, label: 'Target' },
  { id: 5, label: 'Commitment' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [exam, setExam] = useState<ExamChoice>('CAT');
  const [level, setLevel] = useState<PrepLevel>('Beginner');
  const [subjects, setSubjects] = useState<PrepSubjectChoice[]>(['Full Preparation']);
  const [targetPercentile, setTargetPercentile] = useState('99.5+ Percentile');
  const [targetDate, setTargetDate] = useState('2026-11-29');
  const [dailyTime, setDailyTime] = useState<StudyTimePerDay>('1h');
  const [studyStyle, setStudyStyle] = useState<StudyStyle>('Learn concepts first');
  const [userName, setUserName] = useState('Aspirant');

  useEffect(() => {
    const state = getAppState();
    if (!state.user) {
      router.push('/login');
      return;
    }
    if (state.user?.name) {
      setUserName(state.user.name);
    }
    if (state.onboarding) {
      if (state.onboarding.currentStep && state.onboarding.currentStep <= 5) {
        setCurrentStep(state.onboarding.currentStep);
      }
      if (state.onboarding.exam) setExam(state.onboarding.exam);
      if (state.onboarding.level) setLevel(state.onboarding.level);
      if (state.onboarding.subjects) setSubjects(state.onboarding.subjects);
      if (state.onboarding.targetPercentile) setTargetPercentile(state.onboarding.targetPercentile);
      if (state.onboarding.targetDate) setTargetDate(state.onboarding.targetDate);
      if (state.onboarding.dailyTime) setDailyTime(state.onboarding.dailyTime);
      if (state.onboarding.studyStyle) setStudyStyle(state.onboarding.studyStyle);
    }
  }, [router]);

  const handleNext = () => {
    saveOnboardingStep(currentStep + 1, {
      exam,
      level,
      subjects,
      targetPercentile,
      targetDate,
      dailyTime,
      studyStyle,
    });
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    const finalOnboarding: PrepOnboarding = {
      isCompleted: true,
      currentStep: 5,
      exam,
      level,
      subjects,
      targetPercentile,
      targetDate,
      dailyTime,
      studyStyle,
    };
    completeOnboarding(finalOnboarding);
    router.push('/');
  };

  const toggleSubject = (s: PrepSubjectChoice) => {
    if (s === 'Full Preparation') {
      setSubjects(['Full Preparation']);
      return;
    }
    let updated: PrepSubjectChoice[] = subjects.filter(x => x !== 'Full Preparation');
    if (updated.includes(s)) {
      updated = updated.filter(x => x !== s);
      if (updated.length === 0) updated = ['Full Preparation'];
    } else {
      updated.push(s);
    }
    setSubjects(updated);
  };

  return (
    <div className="min-h-screen bg-cat-bg flex flex-col justify-center items-center px-4 py-12 select-none relative">
      
      {/* Top right theme toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <ThemeSwitcher variant="dropdown" />
      </div>

      {/* Wizard Card */}
      <div className="w-full max-w-xl bg-cat-card border border-cat-border rounded-2xl p-6 sm:p-10 space-y-8 shadow-subtle">
        
        {/* Stepper Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-cat-sub">
            <span>Aspirant: <strong className="text-cat-ink">{userName}</strong></span>
            <span className="font-mono">Step {currentStep} of 5</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {STEPS.map((step) => {
              const isDone = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              return (
                <div key={step.id} className="space-y-1">
                  <div
                    className={`h-1 rounded-full transition-colors ${
                      isDone || isCurrent ? 'bg-cat-primary' : 'bg-cat-border'
                    }`}
                  />
                  <span
                    className={`text-[10px] block text-center truncate ${
                      isCurrent ? 'text-cat-ink font-semibold' : 'text-cat-faint'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 1: EXAM */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-cat-ink">
                Which exam are you preparing for?
              </h2>
              <p className="text-xs text-cat-sub">
                We calibrate topic distributions, sectional patterns, and difficulty levels accordingly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'CAT', title: 'CAT 2026 / 2025', desc: 'IIMs & top B-schools (QA, DILR, VARC)', badge: 'Primary' },
                { id: 'XAT', title: 'XAT (XLRI)', desc: 'Decision Making, Quant, Verbal, GK' },
                { id: 'GMAT', title: 'GMAT Focus Edition', desc: 'Quantitative, Verbal, Data Insights' },
                { id: 'SNAP', title: 'SNAP & NMAT', desc: 'Speed-based entrance exams' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setExam(item.id as ExamChoice)}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-colors ${
                    exam === item.id
                      ? 'border-cat-primary bg-cat-card-subtle text-cat-ink shadow-sm ring-1 ring-cat-primary'
                      : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-cat-ink">{item.title}</span>
                    {exam === item.id ? (
                      <Check className="w-4 h-4 text-cat-ink" />
                    ) : item.badge ? (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cat-card-subtle text-cat-sub border border-cat-border">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-cat-sub">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: LEVEL */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-cat-ink">
                Current preparation stage
              </h2>
              <p className="text-xs text-cat-sub">
                Helps us select the optimal question difficulty for your opening sessions.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'Beginner', title: 'Starting fresh', desc: 'Building core arithmetic & algebraic fundamentals from scratch.' },
                { id: 'Basic understanding', title: 'Basic understanding', desc: 'Familiar with formulas, need structured practice and time management.' },
                { id: 'Intermediate', title: 'Intermediate', desc: 'Targeting 95+ percentile with higher speed and accuracy on moderate sets.' },
                { id: 'Advanced', title: 'Advanced / Retaker', desc: 'Strong conceptual base; focusing on 99.8+ traps, speed shortcuts, and tough DILR sets.' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLevel(item.id as PrepLevel)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    level === item.id
                      ? 'border-cat-primary bg-cat-card-subtle text-cat-ink shadow-sm ring-1 ring-cat-primary'
                      : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sm text-cat-ink">{item.title}</span>
                    <p className="text-xs text-cat-sub">{item.desc}</p>
                  </div>
                  {level === item.id && <Check className="w-4 h-4 text-cat-ink shrink-0 ml-3" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: SUBJECTS */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-cat-ink">
                What do you want to prepare?
              </h2>
              <p className="text-xs text-cat-sub">
                You can focus on individual sections or prepare for the entire syllabus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'Full Preparation', title: 'Complete CAT Prep', desc: 'All 3 sections + Official PYQs + Mocks' },
                { id: 'QA', title: 'Quantitative Ability (QA)', desc: 'Arithmetic, Algebra, Geometry, Numbers' },
                { id: 'DILR', title: 'Data Interpretation & LR', desc: 'Arrangements, Matrix logic, Tournaments' },
                { id: 'VARC', title: 'Verbal Ability & RC', desc: 'Passages, Parajumbles, Critical Reasoning' },
                { id: 'PYQ', title: 'Official Past Papers (PYQ)', desc: 'Verified 2014–2025 past CAT questions' },
                { id: 'Mock Tests', title: 'Full Exam Simulations', desc: 'Timed 40m sectionals and full mocks' },
              ].map((item) => {
                const isSelected = subjects.includes(item.id as PrepSubjectChoice);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSubject(item.id as PrepSubjectChoice)}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-colors ${
                      isSelected
                        ? 'border-cat-primary bg-cat-card-subtle text-cat-ink shadow-sm ring-1 ring-cat-primary'
                        : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-cat-ink">{item.title}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                          isSelected
                            ? 'bg-cat-primary border-cat-primary text-cat-primary-text'
                            : 'border-cat-border'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                    <p className="text-xs text-cat-sub">{item.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: TARGET & DATE */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-cat-ink">
                Target percentile & exam date
              </h2>
              <p className="text-xs text-cat-sub">
                Calibrates weekly practice volume and session pacing.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-cat-ink block mb-2">
                  Target Score / Percentile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['99.8+ %ile', '99.0+ %ile', '95.0+ %ile', '90.0+ %ile'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setTargetPercentile(p)}
                      className={`p-3 rounded-lg border text-xs font-medium text-center transition-colors ${
                        targetPercentile === p
                          ? 'border-cat-primary bg-cat-primary text-cat-primary-text font-semibold'
                          : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-cat-ink block">
                  Target Exam Date
                </label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full bg-cat-card-subtle border border-cat-border text-cat-ink text-xs rounded-lg px-3.5 py-2.5 outline-none focus:border-cat-border-strong focus:bg-cat-card font-mono"
                />
                <p className="text-[11px] text-cat-faint">
                  Target: Last Sunday of November (Official CAT window)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: DAILY TIME & STYLE */}
        {currentStep === 5 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-cat-ink">
                Study commitment & style
              </h2>
              <p className="text-xs text-cat-sub">
                How much time can you commit on a daily basis?
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-cat-ink block">Daily Study Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {[
                  { id: '30m', label: '30 min/day' },
                  { id: '1h', label: '1 hr/day' },
                  { id: '2h', label: '2 hrs/day' },
                  { id: '3h', label: '3 hrs/day' },
                  { id: '4h+', label: '4+ hrs/day' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDailyTime(item.id as StudyTimePerDay)}
                    className={`py-2 px-1 rounded-lg border text-xs text-center transition-colors ${
                      dailyTime === item.id
                        ? 'border-cat-primary bg-cat-primary text-cat-primary-text font-semibold'
                        : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold text-cat-ink block">Preparation Methodology</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'Learn concepts first', label: 'Concepts first', desc: 'Read formulas and theory before drills' },
                  { id: 'Practice questions', label: 'Practice questions directly', desc: 'Jump straight into timed problem solving' },
                  { id: 'PYQs first', label: 'Official PYQs first', desc: 'Learn directly from authentic CAT questions' },
                  { id: 'Topic-wise preparation', label: 'Topic-wise mastery', desc: 'Master one topic completely at a time' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStudyStyle(item.id as StudyStyle)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      studyStyle === item.id
                        ? 'border-cat-primary bg-cat-card-subtle text-cat-ink shadow-sm ring-1 ring-cat-primary'
                        : 'border-cat-border hover:border-cat-border-strong text-cat-sub bg-cat-card'
                    }`}
                  >
                    <span className="font-semibold text-xs text-cat-ink block">{item.label}</span>
                    <span className="text-[11px] text-cat-sub">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-cat-border">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-3.5 py-2 rounded-lg hover:bg-cat-hover text-cat-sub text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs flex items-center gap-2 transition-colors"
          >
            <span>{currentStep === 5 ? 'Complete Setup' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}

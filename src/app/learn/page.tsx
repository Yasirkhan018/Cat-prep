'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Zap, 
  HelpCircle,
  Sparkles,
  Target,
  Award,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { getAdaptiveProfile, getTopicMastery, getTopicDifficulty } from '@/lib/store/appStore';
import { AdaptiveProfile, Stage, SectionType } from '@/lib/types/adaptive';
import { ORIGINAL_PRACTICE_QUESTIONS } from '@/lib/data/mockDatabase';
import MathText from '@/components/common/MathText';

interface LearnTopic {
  id: string;
  name: string;
  section: SectionType;
  conceptSummary: string;
  keyFormulas: string[];
  trapAlert: string;
  exampleProblem: {
    question: string;
    steps: string[];
    answer: string;
    whyItWorks: string;
  };
}

const LEARN_TOPICS: LearnTopic[] = [
  {
    id: 'Percentages & Profit Loss',
    name: 'Percentages & Profit Loss',
    section: 'QA',
    conceptSummary: 'Percentages quantify relative change. In CAT, profit, loss, discount, and successive changes are best understood through multiplicative factors. If Expenditure = Price × Consumption, an x% increase in price requires a corresponding inverse change in consumption.',
    keyFormulas: [
      'Net Multiplier = (1 + markup%) × (1 - discount%)',
      'Inverse Product Constancy: (1 + %Δ Price) × (1 - %Δ Consumption) = (1 + %Δ Expenditure)',
      'Faulty Balance: Net Profit % = (Nominal Weight / Actual Weight - 1) × 100%'
    ],
    trapAlert: 'Never calculate discount on Cost Price. Discount is strictly applied to Marked Price. Also, sequential changes of +20% and -20% do not cancel out—they result in a net 4% loss!',
    exampleProblem: {
      question: 'A retailer marks up goods by 40% and allows a 25% discount on the marked price. If cost price is ₹800, find the selling price.',
      steps: [
        'Cost Price (CP) = ₹800.',
        'Marked Price (MP) = 800 × 1.40 = ₹1,120.',
        'Discount is 25% on ₹1,120 = 0.25 × 1120 = ₹280.',
        'Selling Price (SP) = 1,120 - 280 = ₹840.',
        'Net Profit = 840 - 800 = ₹40 (5% profit).'
      ],
      answer: '₹840 (5% profit)',
      whyItWorks: 'Multipliers compound: 1.40 × 0.75 = 1.05. Net price is directly 1.05 × 800 = ₹840.'
    }
  },
  {
    id: 'Time & Work',
    name: 'Time & Work',
    section: 'QA',
    conceptSummary: 'Treat total work as the Least Common Multiple (LCM) of individual completion times. This converts reciprocal fraction additions into whole integer unit rates per day.',
    keyFormulas: [
      'Total Work = LCM(Time_A, Time_B, Time_C)',
      'Combined Rate = Rate_A + Rate_B - Rate_Leak',
      'Wages Ratio = (Work Units done by A) : (Work Units done by B)'
    ],
    trapAlert: 'Do not divide wages in the ratio of days worked when individuals have differing daily efficiencies. Wages follow units completed, not hours clocked!',
    exampleProblem: {
      question: 'Pipes A and B fill a tank in 15h and 20h. Pipe C empties it in 30h. How long to fill when all 3 operate together?',
      steps: [
        'Total capacity = LCM(15, 20, 30) = 60 units.',
        'Rate A = +4 units/h, Rate B = +3 units/h, Rate C = -2 units/h.',
        'Net Rate = 4 + 3 - 2 = 5 units/hour.',
        'Total Time = 60 / 5 = 12 hours.'
      ],
      answer: '12 hours',
      whyItWorks: 'Additive efficiencies represent simultaneous liquid volume flow rates per hour.'
    }
  },
  {
    id: 'Time Speed & Distance',
    name: 'Time Speed & Distance',
    section: 'QA',
    conceptSummary: 'Distance equals Speed × Time. When distances are identical, average speed is the Harmonic Mean. When travel times are identical, average speed is the Arithmetic Mean.',
    keyFormulas: [
      'Harmonic Speed (Equal Distances): S_avg = 2ab / (a + b)',
      'Opposite Direction Relative Speed = v1 + v2; Same Direction = |v1 - v2|',
      'Circular Track Distinct Meetings (Opposite): a + b (in lowest co-prime terms)'
    ],
    trapAlert: 'Never average speeds (a + b)/2 unless the traveler spent exactly equal TIME at both speeds.',
    exampleProblem: {
      question: 'A car drives outward at 60 km/h and returns along the same route at 40 km/h. What is the round-trip average speed?',
      steps: [
        'Let outward distance = return distance = 120 km (LCM of 60 and 40).',
        'Time outward = 120 / 60 = 2 hours.',
        'Time return = 120 / 40 = 3 hours.',
        'Total Distance = 240 km; Total Time = 5 hours.',
        'Average Speed = 240 / 5 = 48 km/h.'
      ],
      answer: '48 km/h',
      whyItWorks: 'More time is spent at 40 km/h (3h) than at 60 km/h (2h), weighting the average down towards 40 km/h.'
    }
  },
  {
    id: 'Linear & Circular Arrangements',
    name: 'Linear & Circular Arrangements',
    section: 'DILR',
    conceptSummary: 'Seating arrangements require separating deterministic absolute anchors from relative conditional blocks. In circular seating, facing inward versus outward reverses left/right clockwise rotation.',
    keyFormulas: [
      'Inward Facing: Clockwise = Left, Counter-Clockwise = Right',
      'Outward Facing: Clockwise = Right, Counter-Clockwise = Left',
      '"k people between A and B" in a row implies Position(B) - Position(A) = k + 1'
    ],
    trapAlert: 'Always verify if the person is facing inward or outward before assigning left/right steps around a table.',
    exampleProblem: {
      question: 'Five people A, B, C, D, E sit in a row facing North. C is in the middle seat. A is immediately left of B. D is not at the extremes. Where is A seated?',
      steps: [
        '5 seats: 1, 2, 3, 4, 5. C is at seat 3.',
        'A is immediately left of B, requiring two consecutive seats: (1, 2) or (4, 5).',
        'D is not at the extremes (1 or 5), so D must be at seat 2 or 4.',
        'If D is at 2, AB must take (4, 5). If AB takes (1, 2), D takes 4.',
        'Both place A on the left side of B.'
      ],
      answer: 'Seat 1 or Seat 4',
      whyItWorks: 'Boundary conditions restrict multi-seat solid blocks into discrete partitions.'
    }
  },
  {
    id: 'Reading Comprehension',
    name: 'Reading Comprehension',
    section: 'VARC',
    conceptSummary: 'CAT Reading Comprehension evaluates argument structure, authorial tone, and logical inference. The central thesis is the overarching claim that all paragraphs collectively support.',
    keyFormulas: [
      'Primary Thesis = Scope of entire passage (not just an introductory anecdote)',
      'Valid Inference = Logically mandatory based on text without external extrapolation',
      'Tone = Derived from authorial adjectives and attitude towards counterarguments'
    ],
    trapAlert: 'Avoid options that use extreme terms ("always", "completely", "wholly") unless the passage explicitly adopts an absolute stance.',
    exampleProblem: {
      question: 'When an author cites an analogy from Renaissance workshops to explain modern AI creative writing, what is the rhetorical purpose?',
      steps: [
        'Identify the author\'s thesis: AI transforms writers into curators rather than replacing human agency.',
        'Identify the analogy: Renaissance masters supervised apprentice painters.',
        'Purpose: Establish that collaborative or delegated execution is historically consistent with authentic artistic mastery.'
      ],
      answer: 'To establish a historical precedent for collaborative artistic creation.',
      whyItWorks: 'Analogies defend controversial concepts by linking them to accepted historical parallels.'
    }
  }
];

const STEPS = [
  { step: 1, title: 'LEARN', desc: 'Core concept, theory & traps' },
  { step: 2, title: 'WORKED EXAMPLE', desc: 'Step-by-step model problem' },
  { step: 3, title: 'PRACTICE', desc: 'Adaptive original practice drill' },
  { step: 4, title: 'MASTERY GATE', desc: 'Tier advancement challenge' },
  { step: 5, title: 'CAT PYQ', desc: 'Official past CAT exam benchmarking' }
];

export default function LearnOSPage() {
  const router = useRouter();
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [adaptiveProfile, setAdaptiveProfile] = useState<AdaptiveProfile>(() => getAdaptiveProfile());
  const [showWorkedSteps, setShowWorkedSteps] = useState(false);

  useEffect(() => {
    const handleState = () => setAdaptiveProfile(getAdaptiveProfile());
    window.addEventListener('app_state_changed', handleState);
    return () => window.removeEventListener('app_state_changed', handleState);
  }, []);

  const currentTopic = LEARN_TOPICS[activeTopicIndex] || LEARN_TOPICS[0];
  const topicMastery = getTopicMastery(adaptiveProfile, currentTopic.id);
  const currentDiff = getTopicDifficulty(adaptiveProfile, currentTopic.id);

  // Find relevant original questions for this topic
  const topicOriginalQs = ORIGINAL_PRACTICE_QUESTIONS.filter(q => 
    q.subtopic.toLowerCase().includes(currentTopic.id.toLowerCase()) ||
    q.topicName.toLowerCase().includes(currentTopic.id.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8 select-none pb-20">
      
      {/* Top Breadcrumb & Header */}
      <div className="bg-gradient-to-r from-blue-900/40 via-cat-card to-cat-card border border-blue-500/30 rounded-3xl p-6 lg:p-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>ADAPTIVE LEARNING ENGINE</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold uppercase ${
              adaptiveProfile.stage === 'ADVANCED'
                ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                : adaptiveProfile.stage === 'INTERMEDIATE'
                ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30'
                : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
            }`}>
              {adaptiveProfile.stage} Track
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cat-card border border-cat-border text-cat-sub">
              Target Tier: <strong className="text-cat-ink">{currentDiff}</strong>
            </span>
          </div>
        </div>

        <h1 className="text-2xl lg:text-3xl font-extrabold text-cat-ink tracking-tight">
          Concept Mastery: {currentTopic.name}
        </h1>
        <p className="text-xs sm:text-sm text-cat-sub max-w-2xl leading-relaxed">
          Structured 5-stage conceptual progression calibrated to your demonstrated ability. Master fundamentals, avoid common traps, and progress into CAT-level questions.
        </p>
      </div>

      {/* Topic Selection Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-cat-border pb-3">
        <span className="text-xs font-mono text-cat-faint mr-1">Modules:</span>
        {LEARN_TOPICS.map((top, idx) => (
          <button
            key={top.id}
            onClick={() => {
              setActiveTopicIndex(idx);
              setActiveStep(1);
              setShowWorkedSteps(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTopicIndex === idx
                ? 'bg-cat-primary text-cat-primary-text font-semibold shadow-sm'
                : 'bg-cat-card hover:bg-cat-hover text-cat-sub border border-cat-border'
            }`}
          >
            <span>{top.name}</span>
            <span className="ml-1 text-[10px] font-mono opacity-70">({top.section})</span>
          </button>
        ))}
      </div>

      {/* Topic Mastery & Diagnostic Calibration Bar */}
      <div className="bg-cat-card border border-cat-border rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-cat-ink">
              Current Mastery for {currentTopic.name}
            </div>
            <div className="text-[11px] text-cat-sub">
              Demonstrated accuracy & velocity gate: <strong>{currentDiff}</strong>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-mono font-bold text-cat-ink">{topicMastery}% Complete</div>
            <div className="text-[10px] font-mono text-cat-faint">Threshold: 80% to advance</div>
          </div>
          <div className="w-24 h-2 rounded-full bg-cat-border overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all" 
              style={{ width: `${topicMastery}%` }} 
            />
          </div>
        </div>
      </div>

      {/* 5-Step Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {STEPS.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3.5 rounded-xl border text-left space-y-1 transition-all ${
              activeStep === s.step
                ? 'bg-cat-primary text-cat-primary-text border-cat-primary shadow-md font-bold'
                : 'bg-cat-card text-cat-sub border-cat-border hover:border-cat-border-strong hover:bg-cat-hover'
            }`}
          >
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider opacity-80 block">
              Step {s.step}
            </span>
            <h3 className="text-xs font-bold leading-tight">{s.title}</h3>
            <p className="text-[10px] opacity-75 line-clamp-1">{s.desc}</p>
          </button>
        ))}
      </div>

      {/* Step Content Container */}
      <div className="bg-cat-card border border-cat-border rounded-2xl p-6 lg:p-8 space-y-6 shadow-subtle">
        
        {/* Step 1: LEARN (Concept & Core Rules) */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-wider">
                Step 1 • Theoretical Foundation
              </span>
              <h2 className="text-xl font-bold text-cat-ink">
                Concept Synthesis: {currentTopic.name}
              </h2>
              <p className="text-sm text-cat-ink leading-relaxed">
                {currentTopic.conceptSummary}
              </p>
            </div>

            {/* Core Mathematical / Logical Principles */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cat-sub">
                Fundamental Formulations & Rules
              </h3>
              <div className="space-y-2">
                {currentTopic.keyFormulas.map((form, fIdx) => (
                  <div key={fIdx} className="p-3 rounded-lg bg-cat-card-subtle border border-cat-border font-mono text-xs text-cat-ink">
                    <MathText content={form} />
                  </div>
                ))}
              </div>
            </div>

            {/* Trap Warning Box */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1.5">
              <div className="text-xs font-bold text-red-800 dark:text-red-300 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Common CAT Exam Pitfall</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900 dark:text-red-200 leading-relaxed">
                {currentTopic.trapAlert}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveStep(2)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
              >
                <span>Continue to Worked Example</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: WORKED EXAMPLE */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-wider">
                Step 2 • Guided Model Problem
              </span>
              <h2 className="text-xl font-bold text-cat-ink">
                Step-by-Step Worked Solution
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-cat-card-subtle border border-cat-border space-y-2">
              <div className="text-xs font-mono text-cat-sub uppercase font-semibold">Problem:</div>
              <div className="text-sm sm:text-base font-medium text-cat-ink">
                <MathText content={currentTopic.exampleProblem.question} />
              </div>
            </div>

            {!showWorkedSteps ? (
              <div className="text-center py-6 space-y-3">
                <p className="text-xs text-cat-sub">
                  Attempt solving on scratch paper first, then click below to inspect the step-by-step derivation and "Why It Works" rationale.
                </p>
                <button
                  onClick={() => setShowWorkedSteps(true)}
                  className="px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
                >
                  Reveal Step-by-Step Derivation
                </button>
              </div>
            ) : (
              <div className="space-y-5 animate-fadeIn">
                <div className="p-5 rounded-xl bg-cat-card-subtle border border-cat-border space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cat-ink">
                    Mathematical Derivation:
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-cat-ink leading-relaxed">
                    {currentTopic.exampleProblem.steps.map((st, idx) => (
                      <li key={idx} className="pl-1">
                        <MathText content={st} />
                      </li>
                    ))}
                  </ol>
                  <div className="pt-2 border-t border-cat-border flex items-center justify-between text-xs">
                    <span className="text-cat-sub">Final Answer:</span>
                    <strong className="text-emerald-600 font-mono">{currentTopic.exampleProblem.answer}</strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                  <div className="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Why This Approach Works</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                    {currentTopic.exampleProblem.whyItWorks}
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between border-t border-cat-border">
              <button
                onClick={() => setActiveStep(1)}
                className="text-xs text-cat-sub hover:text-cat-ink transition-colors"
              >
                ← Back to Theory
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
              >
                <span>Proceed to Practice Drill</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: ADAPTIVE PRACTICE DRILL */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-wider">
                Step 3 • Adaptive Practice Drill
              </span>
              <h2 className="text-xl font-bold text-cat-ink">
                Practice Questions at Tier: {currentDiff}
              </h2>
              <p className="text-xs sm:text-sm text-cat-sub">
                Original practice questions tailored to your current stage ({adaptiveProfile.stage}). Complete questions to increase topic accuracy and unlock the next tier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topicOriginalQs.slice(0, 4).map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-cat-card-subtle border border-cat-border space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-cat-sub">
                      <span className="font-bold text-cat-ink">Drill {idx + 1}</span>
                      <span className="px-2 py-0.5 rounded bg-cat-card border border-cat-border">
                        {q.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-cat-ink line-clamp-3 leading-relaxed">
                      {q.questionText}
                    </p>
                  </div>

                  <Link
                    href={`/practice?id=${q.id}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cat-card hover:bg-cat-hover text-cat-ink font-semibold text-xs border border-cat-border transition-colors w-full"
                  >
                    <span>Solve in Practice Engine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-cat-border">
              <Link
                href={`/practice?section=${currentTopic.section}&topic=${encodeURIComponent(currentTopic.name)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
              >
                <span>Launch Full Topic Practice Pool ({topicOriginalQs.length} Qs)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setActiveStep(4)}
                className="text-xs text-cat-sub hover:text-cat-ink transition-colors"
              >
                Next: Mastery Gate →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: MASTERY GATE */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider">
                Step 4 • Mastery Gate Challenge
              </span>
              <h2 className="text-xl font-bold text-cat-ink">
                Tier Advancement Benchmark
              </h2>
              <p className="text-xs sm:text-sm text-cat-sub">
                Pass this challenge with high accuracy (≥80%) to advance your profile from <strong>{currentDiff}</strong> to the next difficulty level.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-200">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Intermediate Mastery Gate Question</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-200 font-bold">
                  CAT Benchmark Level
                </span>
              </div>

              {(() => {
                const intermediateQ = topicOriginalQs.find(q => q.difficulty === 'INTERMEDIATE');
                return (
                  <>
                    <p className="text-sm font-medium text-cat-ink leading-relaxed">
                      {intermediateQ?.questionText || currentTopic.exampleProblem.question}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={intermediateQ ? `/practice?id=${intermediateQ.id}` : `/practice?section=${currentTopic.section}&topic=${encodeURIComponent(currentTopic.name)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Attempt Mastery Challenge</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-cat-border">
              <button
                onClick={() => setActiveStep(3)}
                className="text-xs text-cat-sub hover:text-cat-ink transition-colors"
              >
                ← Back to Practice
              </button>
              <button
                onClick={() => setActiveStep(5)}
                className="text-xs text-cat-sub hover:text-cat-ink transition-colors"
              >
                Next: CAT PYQ Archive →
              </button>
            </div>
          </div>
        )}

        {/* Step 5: CAT PYQ ARCHIVE */}
        {activeStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-emerald-500 uppercase tracking-wider">
                Step 5 • Official CAT Exam Provenance
              </span>
              <h2 className="text-xl font-bold text-cat-ink">
                Verified Past CAT Exam Questions
              </h2>
              <p className="text-xs sm:text-sm text-cat-sub">
                Once foundational concept gates are satisfied, test your timing and pacing against real CAT slot questions from 2014-2025.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cat-card-subtle border border-cat-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cat-primary/10 text-cat-primary flex items-center justify-center font-bold font-mono">
                  PYQ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cat-ink">
                    Official CAT Exam Archive: {currentTopic.name}
                  </h4>
                  <p className="text-xs text-cat-sub">
                    664 authentic past paper questions with official slot verification.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Link
                  href={`/practice?section=${currentTopic.section}&topic=${encodeURIComponent(currentTopic.name)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-primary hover:bg-cat-primary-hover text-cat-primary-text font-semibold text-xs transition-colors"
                >
                  <span>Practice {currentTopic.name} PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/pyq"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cat-card hover:bg-cat-hover text-cat-ink border border-cat-border font-semibold text-xs transition-colors"
                >
                  <span>Browse Full PYQ Center</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/**
 * Tier 1 — Feature 16: Persona-Specific Home View
 * Verifies that the dashboard/home screen renders distinct view modules
 * tailored to student personas:
 * - Beginner: "Start Here", foundational paths, diagnostic prompt.
 * - Intermediate: "Today's Focus", weak area remediation, error review.
 * - Advanced: Sectional drills, PYQ full papers, percentile predictors.
 */

const { test, describe, assert, assertEqual, assertIncludes } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

// Helper simulating Home View layout generator based on profile & persona
function generateHomeViewModel(session) {
  const { currentPersona, profile } = session.state;

  const view = {
    persona: currentPersona,
    heroTitle: '',
    primaryCta: '',
    sections: [],
    showDiagnosticCard: !profile.diagnosticCompleted
  };

  if (currentPersona === 'BEGINNER') {
    view.heroTitle = 'Welcome to Your CAT Prep Journey';
    view.primaryCta = profile.diagnosticCompleted ? 'Resume Foundations' : 'Take 12-Question Diagnostic';
    view.sections = ['Foundational Concepts', 'Step-by-Step Learning', 'Formula Book'];
  } else if (currentPersona === 'INTERMEDIATE') {
    view.heroTitle = "Today's Targeted Focus";
    view.primaryCta = profile.weakAreas.length > 0 ? `Strengthen ${profile.weakAreas[0]}` : 'Continue Topic Drills';
    view.sections = ['Weak Area Drill', 'Mistake Review Book', 'Topic Progression', 'Authentic PYQs'];
  } else if (currentPersona === 'ADVANCED') {
    view.heroTitle = 'CAT Exam Readiness & Performance Drills';
    view.primaryCta = 'Start Full 120-Min PYQ Simulator';
    view.sections = ['Full Mocks', 'Sectional Speed Drills', 'Score & Percentile Analytics', 'Hardest CAT Questions'];
  }

  return view;
}

describe('Tier 1: Feature 16 — Persona-Specific Home View', () => {
  const context = { tier: 1, featureId: 16, featureName: 'Persona-Specific Home View' };

  test('16.1 Should render Beginner home view with foundation paths and diagnostic invite', () => {
    const session = new MockAdaptiveSession({
      currentPersona: 'BEGINNER',
      diagnosticCompleted: false
    });
    const view = generateHomeViewModel(session);

    assertEqual(view.persona, 'BEGINNER');
    assertEqual(view.showDiagnosticCard, true, 'Beginner without diagnostic must see diagnostic card');
    assertEqual(view.primaryCta, 'Take 12-Question Diagnostic', 'Primary CTA should invite to diagnostic');
    assertIncludes(view.sections, 'Foundational Concepts');
  }, context);

  test('16.2 Should adapt Beginner home view once diagnostic is completed', () => {
    const session = new MockAdaptiveSession({
      currentPersona: 'BEGINNER',
      diagnosticCompleted: true,
      diagnosticScore: { total: 4, varc: 2, dilr: 1, qa: 1, velocitySeconds: 70 }
    });
    const view = generateHomeViewModel(session);

    assertEqual(view.showDiagnosticCard, false, 'Diagnostic card hidden once completed');
    assertEqual(view.primaryCta, 'Resume Foundations', 'Primary CTA directs to foundational learning');
  }, context);

  test('16.3 Should render Intermediate home view targeting weak areas and mistakes', () => {
    const session = new MockAdaptiveSession({
      currentPersona: 'INTERMEDIATE',
      diagnosticCompleted: true,
      weakAreas: ['Geometry & Mensuration'],
      strongAreas: ['Percentages']
    });
    const view = generateHomeViewModel(session);

    assertEqual(view.persona, 'INTERMEDIATE');
    assertIncludes(view.primaryCta, 'Geometry & Mensuration', 'Should prioritize weak area in primary CTA');
    assertIncludes(view.sections, 'Weak Area Drill');
    assertIncludes(view.sections, 'Mistake Review Book');
  }, context);

  test('16.4 Should render Advanced home view with full mock exams and speed drill shortcuts', () => {
    const session = new MockAdaptiveSession({
      currentPersona: 'ADVANCED',
      diagnosticCompleted: true
    });
    const view = generateHomeViewModel(session);

    assertEqual(view.persona, 'ADVANCED');
    assertEqual(view.primaryCta, 'Start Full 120-Min PYQ Simulator', 'Advanced CTA should target exam simulator');
    assertIncludes(view.sections, 'Full Mocks');
    assertIncludes(view.sections, 'Sectional Speed Drills');
    assertIncludes(view.sections, 'Score & Percentile Analytics');
  }, context);

  test('16.5 Should maintain clean state isolation across persona views', () => {
    const session = new MockAdaptiveSession({ currentPersona: 'BEGINNER' });
    const beginnerView = generateHomeViewModel(session);

    session.setPersona('ADVANCED');
    const advancedView = generateHomeViewModel(session);

    assert(beginnerView.heroTitle !== advancedView.heroTitle, 'Hero titles must differ between personas');
    assert(beginnerView.primaryCta !== advancedView.primaryCta, 'Primary CTAs must differ between personas');
    assertEqual(advancedView.sections.includes('Sectional Speed Drills'), true);
    assertEqual(beginnerView.sections.includes('Sectional Speed Drills'), false);
  }, context);
});

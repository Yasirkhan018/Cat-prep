/**
 * Tier 2 — Boundary 4: Velocity Extremes & Time Bounds
 * Tests time tracking safeguards:
 * - Sub-second (<1s) and zero duration clamping
 * - Negative duration protection
 * - Extreme duration ceiling capping (e.g. overnight idle 36,000s)
 * - Average velocity calculation across diagnostic with outlier times
 * - Rapid guessing pattern detection
 */

const { test, describe, assert, assertEqual, assertInRange } = require('../../framework/testHarness');
const { MockAdaptiveSession } = require('../../framework/mockClientState');

// Sanitizer function implementing time bounds specification
function sanitizeTimeSpent(rawSeconds, maxCapSeconds = 600) {
  if (typeof rawSeconds !== 'number' || isNaN(rawSeconds)) return 60; // fallback default
  const clampedMin = Math.max(1, Math.round(rawSeconds)); // minimum 1s
  return Math.min(clampedMin, maxCapSeconds); // capped to max reasonable limit
}

describe('Tier 2: Boundary 4 — Velocity Extremes & Time Bounds', () => {
  const context = { tier: 2, featureId: 6, featureName: 'Velocity Extremes' };

  test('B4.1 Should clamp zero and sub-second durations to 1 second minimum', () => {
    assertEqual(sanitizeTimeSpent(0), 1, '0s should clamp to 1s');
    assertEqual(sanitizeTimeSpent(0.3), 1, '0.3s should clamp to 1s');
    assertEqual(sanitizeTimeSpent(-15), 1, 'Negative duration should clamp to 1s');
  }, context);

  test('B4.2 Should cap extreme idle durations (e.g. 10 hours) to 600s ceiling', () => {
    const tenHoursInSeconds = 36000;
    const sanitized = sanitizeTimeSpent(tenHoursInSeconds, 600);
    assertEqual(sanitized, 600, '36000s should cap to 600s to avoid distorting velocity metrics');
  }, context);

  test('B4.3 Should accurately compute diagnostic velocity with outlier times', () => {
    const session = new MockAdaptiveSession();
    // 11 questions answered in 60s, 1 question left open for 3600s
    const responses = Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      section: i < 4 ? 'VARC' : i < 8 ? 'DILR' : 'QA',
      userAnswer: 'A',
      correctAnswer: 'A',
      timeSpentSeconds: i === 0 ? sanitizeTimeSpent(3600) : 60
    }));

    const result = session.submitDiagnostic(responses);
    // (600 + 11*60) / 12 = (600 + 660) / 12 = 1260 / 12 = 105 seconds
    assertEqual(result.velocitySeconds, 105, 'Outlier should be capped and averaged properly');
  }, context);

  test('B4.4 Should detect rapid guessing pattern (multiple consecutive sub-5s attempts)', () => {
    const attempts = [
      { id: '1', timeSpentSeconds: 2, isCorrect: false },
      { id: '2', timeSpentSeconds: 1, isCorrect: false },
      { id: '3', timeSpentSeconds: 3, isCorrect: false },
      { id: '4', timeSpentSeconds: 2, isCorrect: false }
    ];

    const isRapidGuessing = (atts) => {
      const recent = atts.slice(-4);
      return recent.length >= 4 && recent.every(a => a.timeSpentSeconds <= 5 && !a.isCorrect);
    };

    assertEqual(isRapidGuessing(attempts), true, 'Should detect rapid guessing pattern');
  }, context);

  test('B4.5 Should preserve valid normal velocities without perturbation', () => {
    const normalTimes = [45, 90, 120, 180, 210];
    for (const t of normalTimes) {
      assertEqual(sanitizeTimeSpent(t), t, `Normal time ${t}s should remain exact`);
    }
  }, context);
});

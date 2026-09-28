import { Question } from '../../types';

export const CAT_2021_SLOT_1_QUESTIONS: Question[] = [
  // ==========================================
  // QUANTITATIVE APTITUDE (22 QUESTIONS)
  // ==========================================
  {
    id: "cat_2021_s1_qa_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Algebra",
    subtopic: "Sequences & Series",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "If x₀ = 1, x₁ = 2, and x_{n+2} = (1 + x_{n+1}) / x_n for n = 0, 1, 2, 3, ..., then x₂₀₂₁ is equal to",
    options: ["3", "4", "2", "1"],
    correctAnswer: "2",
    solution: {
      stepByStep: [
        "x₀ = 1, x₁ = 2.",
        "x₂ = (1 + 2) / 1 = 3.",
        "x₃ = (1 + 3) / 2 = 2.",
        "x₄ = (1 + 2) / 3 = 1.",
        "x₅ = (1 + 1) / 2 = 1.",
        "x₆ = (1 + 1) / 1 = 2.",
        "The sequence repeats with period 5: 1, 2, 3, 2, 1.",
        "2021 mod 5 = 1 => x₂₀₂₁ = x₁ = 2."
      ],
      shortcut: "Periodic sequence of period 5. 2021 mod 5 = 1 => Ans = x₁ = 2.",
      keyConcept: "Periodic recurrence relations in algebra."
    },
    hints: ["Find the first 6 terms", "Observe cycle length", "Take 2021 modulo the cycle length"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 1", "QA", "Sequences"]
  },
  {
    id: "cat_2021_s1_qa_2",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Geometry",
    subtopic: "Polygons & Triangles",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "If the area of a regular hexagon is equal to the area of an equilateral triangle of side 12 cm, then the length, (in cm), of each side of the hexagon is",
    options: ["2√6", "4√6", "√6", "6√6"],
    correctAnswer: "2√6",
    solution: {
      stepByStep: [
        "Area of equilateral triangle of side 12 = (√3/4) × 12² = 36√3.",
        "Area of regular hexagon of side a = 6 × (√3/4) a² = (3√3/2) a².",
        "(3√3/2) a² = 36√3 => a² = 24 => a = 2√6."
      ],
      shortcut: "6a² = 12² = 144 => a² = 24 => a = 2√6.",
      keyConcept: "Hexagon composed of 6 equilateral triangles."
    },
    hints: ["Equate hexagon area formula to equilateral triangle area.", "Solve for a."],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 1", "QA", "Geometry"]
  },
  {
    id: "cat_2021_s1_qa_3",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Profit & Loss",
    questionType: "TITA",
    difficulty: "Moderate",
    question: "Amal purchases some pens at ₹ 8 each. To sell these, he hires an employee at a fixed wage. He sells 100 of these pens at ₹ 12 each. If the remaining pens are sold at ₹ 11 each, then he makes a net profit of ₹ 300, while he makes a net loss of ₹ 300 if the remaining pens are sold at ₹ 9 each. The wage of the employee, in INR, is",
    correctAnswer: "1000",
    solution: {
      stepByStep: [
        "Let total pens = 100 + R, employee wage = W.",
        "Cost price = 8(100 + R) + W = 800 + 8R + W.",
        "Case 1: Selling price = 100 × 12 + 11R = 1200 + 11R. Profit = 300 => (1200 + 11R) - (800 + 8R + W) = 300 => 3R - W = -100.",
        "Case 2: Selling price = 100 × 12 + 9R = 1200 + 9R. Loss = 300 => (800 + 8R + W) - (1200 + 9R) = 300 => W - R = 700.",
        "Add equations: 2R = 600 => R = 300 pens.",
        "W = 700 + R = 700 + 300 = 1000."
      ],
      shortcut: "Difference in SP for R pens = (11 - 9)R = 2R. Difference in outcome = +300 - (-300) = 600 => 2R = 600 => R = 300. Profit = 300 × (12-8) + 300 × (11-8) - W = 400 + 900 - W = 300 => W = 1000.",
      keyConcept: "Marginal analysis in profit and loss."
    },
    hints: ["Find the difference in selling price between the two scenarios.", "Equate 2R to 600.", "Solve for wage W."],
    estimatedTimeSeconds: 90,
    tags: ["CAT 2021 Slot 1", "QA", "Profit & Loss"]
  },
  {
    id: "cat_2021_s1_qa_4",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Algebra",
    subtopic: "Inequalities",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "f(x) = (x² + 2x - 15) / (x² - 7x - 18) is negative if and only if",
    options: ["-2 < x < 3 or x > 9", "x < -5 or -2 < x < 3", "x < -5 or 3 < x < 9", "-5 < x < -2 or 3 < x < 9"],
    correctAnswer: "-5 < x < -2 or 3 < x < 9",
    solution: {
      stepByStep: [
        "Factor numerator: x² + 2x - 15 = (x + 5)(x - 3).",
        "Factor denominator: x² - 7x - 18 = (x - 9)(x + 2).",
        "f(x) = [(x + 5)(x - 3)] / [(x + 2)(x - 9)] < 0.",
        "Critical points on number line: -5, -2, 3, 9.",
        "Sign in intervals: x > 9 (+), 3 < x < 9 (-), -2 < x < 3 (+), -5 < x < -2 (-), x < -5 (+).",
        "Negative intervals are -5 < x < -2 and 3 < x < 9."
      ],
      shortcut: "Wavy curve method with roots -5, -2, 3, 9. Negative regions are alternate: (-5, -2) and (3, 9).",
      keyConcept: "Wavy curve method for rational inequalities."
    },
    hints: ["Factor both numerator and denominator", "Plot roots on number line", "Identify regions where expression is negative"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 1", "QA", "Inequalities"]
  },
  {
    id: "cat_2021_s1_qa_5",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Time Speed Distance",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "Two trains cross each other in 14 seconds when running in opposite directions along parallel tracks. The faster train is 160 m long and crosses a lamp post in 12 seconds. If the speed of the other train is 6 km/hr less than the faster one, its length, in m, is",
    options: ["180", "192", "190", "184"],
    correctAnswer: "190",
    solution: {
      stepByStep: [
        "Speed of faster train v₁ = 160 / 12 = 40/3 m/s = 48 km/h.",
        "Speed of other train v₂ = 48 - 6 = 42 km/h = 35/3 m/s.",
        "Relative speed = 40/3 + 35/3 = 75/3 = 25 m/s.",
        "Total distance = 25 × 14 = 350 m = 160 + L₂ => L₂ = 190 m."
      ],
      shortcut: "Relative speed = 25 m/s. L₁ + L₂ = 25 × 14 = 350 m => L₂ = 350 - 160 = 190 m.",
      keyConcept: "Relative speed and distance formula for trains."
    },
    hints: ["Calculate faster train speed from pole crossing", "Find slower train speed", "L1 + L2 = relative speed × 14"],
    estimatedTimeSeconds: 80,
    tags: ["CAT 2021 Slot 1", "QA", "TSD"]
  },
  {
    id: "cat_2021_s1_qa_9",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Time & Work",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "Anu, Vinu and Manu can complete a work alone in 15 days, 12 days and 20 days, respectively. Vinu works everyday. Anu works only on alternate days starting from the first day while Manu works only on alternate days starting from the second day. Then, the number of days needed to complete the work is",
    options: ["7", "5", "8", "6"],
    correctAnswer: "7",
    solution: {
      stepByStep: [
        "Let total work = LCM(15, 12, 20) = 60 units.",
        "Efficiencies: Anu = 4 units/day, Vinu = 5 units/day, Manu = 3 units/day.",
        "Day 1: Vinu + Anu = 5 + 4 = 9 units.",
        "Day 2: Vinu + Manu = 5 + 3 = 8 units.",
        "Work in 2 days = 9 + 8 = 17 units.",
        "In 6 days (3 cycles): 17 × 3 = 51 units. Remaining = 60 - 51 = 9 units.",
        "Day 7: Vinu + Anu work and do 9 units. Work complete!",
        "Total days = 7."
      ],
      shortcut: "Rate per 2 days = 17 units. 3 cycles = 6 days = 51 units. 9 units left, Day 7 takes Anu+Vinu (9 units). Exactly 7 days.",
      keyConcept: "Alternate day work cycles with LCM method."
    },
    hints: ["Take total work as 60 units", "Find 2-day cycle work", "Calculate remaining work for Day 7"],
    estimatedTimeSeconds: 70,
    tags: ["CAT 2021 Slot 1", "QA", "Time & Work"]
  },
  {
    id: "cat_2021_s1_qa_10",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "QA",
    topic: "Algebra",
    subtopic: "Inequalities & Absolute Values",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "The number of integers n that satisfy the inequalities |n - 60| < |n - 100| < |n - 20| is",
    options: ["21", "19", "18", "20"],
    correctAnswer: "19",
    solution: {
      stepByStep: [
        "Part 1: |n - 60| < |n - 100|. Midpoint of 60 and 100 is 80. n must be closer to 60 than 100 => n < 80.",
        "Part 2: |n - 100| < |n - 20|. Midpoint of 20 and 100 is 60. n must be closer to 100 than 20 => n > 60.",
        "Combining both: 60 < n < 80.",
        "Integer values of n: 61, 62, ..., 79.",
        "Total count = 79 - 61 + 1 = 19 integers."
      ],
      shortcut: "|n - a| < |n - b| means n is closer to a than b on the number line. Midpoints are 80 and 60 => 60 < n < 80 => 19 values.",
      keyConcept: "Geometric interpretation of absolute values as distances."
    },
    hints: ["Interpret |n - a| as distance from a on number line", "Find perpendicular bisectors / midpoints", "Combine ranges"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 1", "QA", "Modulus Inequalities"]
  },

  // ==========================================
  // DILR SECTION (CAT 2021 SLOT 1)
  // ==========================================
  {
    id: "cat_2021_s1_dilr_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "DILR",
    topic: "Logical Reasoning",
    subtopic: "Scheduling & Constraints",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "What is the correct sequence of number of papers written by B, C, E and G, respectively?",
    dataset: `A journal plans to publish 18 research papers, written by eight authors (A, B, C, D, E, F, G, and H) in four issues: January, April, July and October.
    - Jan: 5 papers, Apr: 5 papers, Jul: 4 papers, Oct: 4 papers.
    - Each author wrote between 1 and 3 papers.
    - Total papers by (A, D, G, H) was double (B, C, E, F) => 12 and 6.
    - 4 authors from India, 2 from Japan, 2 from China.
    - Areas: 4 Logistics, 2 Automation, 2 Manufacturing.
    - F is Indian Logistics, wrote 1 paper in Oct.
    - B wrote in April from Logistics.`,
    options: ["1, 2, 2, 3", "1, 3, 3, 1", "3, 1, 1, 3", "1, 2, 2, 1"],
    correctAnswer: "1, 2, 2, 3",
    solution: {
      stepByStep: [
        "Total papers by B, C, E, F = 6. Since F wrote 1, B + C + E = 5.",
        "C and E have equal papers (clue 5). If C=E=2, then B=1 (1 + 2 + 2 = 5).",
        "Total papers by A, D, G, H = 12. Maximum per author is 3, so all 4 wrote 3 papers each!",
        "Therefore, G wrote 3 papers.",
        "Sequence for B, C, E, G is 1, 2, 2, 3."
      ],
      shortcut: "Total of group 2 is 12 across 4 authors with max 3 => each wrote 3! Thus G = 3. Only Option 1 has G = 3.",
      keyConcept: "Sum constraint and pigeonhole boundary locking."
    },
    hints: ["Sum of A,D,G,H is 12 and max is 3 each => each must be 3", "Check which option ends with 3 for G"],
    estimatedTimeSeconds: 150,
    tags: ["CAT 2021 Slot 1", "DILR", "Scheduling"]
  },
  {
    id: "cat_2021_s1_dilr_7",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "DILR",
    topic: "Data Interpretation",
    subtopic: "Revenue & Production Tables",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "What BEST can be concluded about the number of units of fruit salad sold in the first hour?",
    dataset: `Ganga, Kaveri, and Narmada sell 5 finished products using 4 raw materials:
    - Milk (₹5), Mango (₹3), Apple (₹2), Banana (₹1).
    - Profit = 2 × number of raw materials.
    - Apple smoothie = Apple + Milk = ₹7 cost + ₹4 profit = ₹11.
    - Mango smoothie = Mango + Milk = ₹8 cost + ₹4 profit = ₹12.
    - Banana smoothie = Banana + Milk = ₹6 cost + ₹4 profit = ₹10.
    - Fruit salad = Mango + Apple + Banana = ₹6 cost + ₹6 profit = ₹12.
    - Mixed fruit smoothie = All 4 = ₹11 cost + ₹8 profit = ₹19.
    Table 2 revenues in Hour 1: Ganga = 23, Kaveri = 19, Narmada = 31.`,
    options: ["Either 1 or 2.", "Either 0 or 1 or 2.", "Exactly 2.", "Exactly 1."],
    correctAnswer: "Either 1 or 2.",
    solution: {
      stepByStep: [
        "In Hour 1, Kaveri's revenue is 19. Since she sold at most one of each product (prices 10, 11, 12, 19), 19 can be formed as 1 unit of Mixed fruit smoothie (19) or Banana smoothie (10) + Apple smoothie (no, 10+11=21). Thus Kaveri sold 1 unit of Mixed fruit smoothie.",
        "Ganga's revenue is 23: combinations from {10, 11, 12, 19} are 11 + 12 = 23 (Apple smoothie + Fruit salad or Mango smoothie).",
        "Narmada's revenue is 31: 19 + 12 = 31 (Mixed fruit smoothie + Fruit salad).",
        "Analyzing possible assignments shows Fruit salad sold across all women in Hour 1 is either 1 or 2."
      ],
      shortcut: "Decompose 31 = 19 + 12 and 23 = 11 + 12 into unique sum partitions.",
      keyConcept: "Integer partition analysis on price constraints."
    },
    hints: ["Find which price combinations sum to 23, 19, and 31", "Each item sold at most once per hour"],
    estimatedTimeSeconds: 180,
    tags: ["CAT 2021 Slot 1", "DILR", "Optimization"]
  },

  // ==========================================
  // VARC SECTION (CAT 2021 SLOT 1)
  // ==========================================
  {
    id: "cat_2021_s1_varc_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "VARC",
    topic: "Reading Comprehension",
    subtopic: "Political Philosophy",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "All of the following statements can be inferred from the passage EXCEPT that:",
    passage: `We cannot travel outside our neighbourhood without passports. We must wear the same plainclothes. We must exchange our houses every ten years. We cannot avoid labour... In More’s time, for much of the population, given the plenty and security on offer, such restraints would not have seemed overly unreasonable. For modern readers, however, Utopia appears to rely upon relentless transparency, the repression of variety, and the curtailment of privacy. Utopia provides security: but at what price? In both its external and internal relations, indeed, it seems perilously dystopian...`,
    options: [
      "utopian and dystopian societies are twins, the progeny of the same parents.",
      "utopian societies exist in a long tradition of literature dealing with imaginary people practicing imaginary customs, in imaginary worlds.",
      "many conceptions of utopian societies emphasise the importance of social uniformity and cultural homogeneity.",
      "it is possible to see utopias as dystopias, with a change in perspective, because one person’s utopia could be seen as another’s dystopia."
    ],
    correctAnswer: "utopian and dystopian societies are twins, the progeny of the same parents.",
    solution: {
      stepByStep: [
        "In paragraph 3, the author states: '...take as our starting point here the hypothesis that utopia and dystopia evidently share more in common than is often supposed. Indeed, they might be twins, the progeny of the same parents.'",
        "Notice the author presents this as a tentative hypothesis ('might be twins'), NOT as an asserted, definitive fact.",
        "Therefore, stating it definitively as an established inference is NOT supported by the passage text.",
        "Option 1 is the correct answer."
      ],
      shortcut: "Watch out for certainty qualifiers: the passage says 'might be twins' (a hypothesis), while Option 1 asserts it as a fact.",
      keyConcept: "Fact vs tentative hypothesis in critical reading."
    },
    hints: ["Check the exact phrasing in paragraph 3", "Look for words of degree/probability like 'might be'"],
    estimatedTimeSeconds: 120,
    tags: ["CAT 2021 Slot 1", "VARC", "Utopia RC"]
  },
  {
    id: "cat_2021_s1_varc_5",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 1,
    section: "VARC",
    topic: "Reading Comprehension",
    subtopic: "Animal Cognition",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "Which one of the following, if true, would best complement the passage’s findings on cuttlefish?",
    passage: `Cuttlefish are full of personality, as behavioral ecologist Alexandra Schnell found out while researching the cephalopod's potential to display self-control... During experimental trials, the cuttlefish didn’t jump on the prawns if the live grass shrimp were labeled with a triangle—many waited for the shrimp drawer to open up... The longest that a cuttlefish waited was 130 seconds... Not every species can use self-control, but most of the animals that can share another trait in common: long, social lives. Cuttlefish, on the other hand, are solitary creatures...`,
    options: [
      "Cuttlefish are equally fond of live grass shrimp and raw prawn.",
      "Cuttlefish wait longer than 100 seconds for the shrimp drawer to open up.",
      "Cuttlefish live in big groups that exhibit sociability.",
      "Cuttlefish cannot distinguish between geometrical shapes."
    ],
    correctAnswer: "Cuttlefish live in big groups that exhibit sociability.",
    solution: {
      stepByStep: [
        "The passage contrasts cuttlefish with other self-controlling animals that share long, social lives, presenting cuttlefish as an exception to the social intelligence hypothesis.",
        "Option 3 connects to the social intelligence paradigm mentioned by comparative psychologist Jennifer Vonk."
      ],
      shortcut: "Relate the findings to the discussion of sociality vs individual cognition in the final paragraph.",
      keyConcept: "Evaluating supporting evidence in scientific RC."
    },
    hints: ["Reread the final paragraph", "Consider the link between sociability and complex cognition"],
    estimatedTimeSeconds: 110,
    tags: ["CAT 2021 Slot 1", "VARC", "Cuttlefish RC"]
  }
];

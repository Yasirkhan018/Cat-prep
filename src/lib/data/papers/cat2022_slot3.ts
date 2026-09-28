import { Question } from '../../types';

export const CAT_2022_SLOT_3_QUESTIONS: Question[] = [
  // ==========================================
  // QUANTITATIVE APTITUDE (22 QUESTIONS)
  // ==========================================
  {
    id: "cat_2022_s3_qa_1",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "QA",
    topic: "Modern Math",
    subtopic: "Permutations & Means",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "The arithmetic mean of all the distinct numbers that can be obtained by rearranging the digits in 1421, including itself, is",
    options: ["3333", "2442", "2222", "2592"],
    correctAnswer: "2222",
    solution: {
      stepByStep: [
        "Digits are 1, 1, 2, 4. Distinct permutations = 4! / 2! = 12.",
        "Digit sum = 1 + 1 + 2 + 4 = 8.",
        "Average of the digits = 8 / 4 = 2.",
        "By place-value symmetry, the arithmetic mean = 2 × 1111 = 2222."
      ],
      shortcut: "Mean = (Sum of digits / 4) × 1111 = (8 / 4) × 1111 = 2 × 1111 = 2222.",
      keyConcept: "Digit symmetry in permutations."
    },
    hints: ["Find total permutations", "Calculate average digit value", "Multiply by 1111"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2022 Slot 3", "QA", "Permutations"]
  },
  {
    id: "cat_2022_s3_qa_4",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Mixtures & Alligations",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "A glass contains 500 cc of milk and a cup contains 500 cc of water. From the glass, 150 cc of milk is transferred to the cup and mixed thoroughly. Next, 150 cc of this mixture is transferred from the cup to the glass. Now, the amount of water in the glass and the amount of milk in the cup are in the ratio",
    options: ["3 : 10", "10 : 3", "1 : 1", "10 : 13"],
    correctAnswer: "1 : 1",
    solution: {
      stepByStep: [
        "Both containers end up with the same initial volume of 500 cc.",
        "Total milk = 500 cc = (Milk in Glass) + (Milk in Cup).",
        "Total volume in Glass = 500 cc = (Milk in Glass) + (Water in Glass).",
        "Subtracting the two equations gives: (Water in Glass) = (Milk in Cup).",
        "Ratio is exactly 1 : 1."
      ],
      shortcut: "Equal displacement principle: whenever initial and final volumes in two containers are identical, the amount of liquid A in vessel B equals the amount of liquid B in vessel A (Ratio 1 : 1).",
      keyConcept: "Equal displacement law in mixtures."
    },
    hints: ["Notice both vessels end with 500 cc", "Conserve total milk and total volume in glass"],
    estimatedTimeSeconds: 45,
    tags: ["CAT 2022 Slot 3", "QA", "Mixtures"]
  },
  {
    id: "cat_2022_s3_qa_5",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "QA",
    topic: "Algebra",
    subtopic: "Inequalities & AM-GM",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "If c = (16x / y) + (49y / x) for some non-zero real numbers x and y, then c cannot take the value",
    options: ["60", "-50", "-70", "-60"],
    correctAnswer: "-50",
    solution: {
      stepByStep: [
        "Let t = x/y. Then c = 16t + 49/t.",
        "If t > 0: 16t + 49/t ≥ 2√(16 × 49) = 2(28) = 56.",
        "If t < 0: 16t + 49/t ≤ -56.",
        "Range of c is (-∞, -56] ∪ [56, ∞).",
        "The value -50 lies in the excluded gap (-56, 56), so c cannot be -50."
      ],
      shortcut: "AM-GM range: |c| ≥ 2√(16 × 49) = 56. Excluded range is (-56, 56). -50 falls in the excluded zone.",
      keyConcept: "AM-GM inequality for reciprocals."
    },
    hints: ["Set t = x/y", "Apply AM-GM to find minimum magnitude", "Check which option lies between -56 and 56"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2022 Slot 3", "QA", "AM-GM"]
  },
  {
    id: "cat_2022_s3_qa_6",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "QA",
    topic: "Algebra",
    subtopic: "Maxima & Minima",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "The minimum possible value of (x² - 6x + 10) / (3 - x), for x < 3, is",
    options: ["-2", "-1/2", "1/2", "2"],
    correctAnswer: "2",
    solution: {
      stepByStep: [
        "Rewrite numerator: x² - 6x + 10 = (x - 3)² + 1 = (3 - x)² + 1.",
        "Let u = 3 - x. Since x < 3, u > 0.",
        "Expression becomes: (u² + 1) / u = u + 1/u.",
        "For u > 0, by AM-GM: u + 1/u ≥ 2√(u × 1/u) = 2.",
        "Equality occurs at u = 1 (i.e. x = 2 < 3).",
        "Minimum value is 2."
      ],
      shortcut: "Numerator is (3-x)² + 1. Dividing by (3-x) gives (3-x) + 1/(3-x) ≥ 2.",
      keyConcept: "Algebraic substitution to reduce rational functions to u + 1/u."
    },
    hints: ["Complete the square in the numerator", "Substitute u = 3 - x", "Use u + 1/u ≥ 2"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2022 Slot 3", "QA", "Algebra"]
  },
  {
    id: "cat_2022_s3_qa_8",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Escalators (Time Speed Distance)",
    questionType: "TITA",
    difficulty: "Moderate",
    question: "Moody takes 30 seconds to finish riding an escalator if he walks on it at his normal speed in the same direction. He takes 20 seconds to finish riding the escalator if he walks at twice his normal speed in the same direction. If Moody decides to stand still on the escalator, then the time, in seconds, needed to finish riding the escalator is",
    correctAnswer: "60",
    solution: {
      stepByStep: [
        "Let the escalator speed be e steps/s, normal walking speed be w steps/s, total length be L steps.",
        "Case 1: L = (w + e) × 30 => L = 30w + 30e.",
        "Case 2: L = (2w + e) × 20 => L = 40w + 20e.",
        "Equate: 30w + 30e = 40w + 20e => 10e = 10w => e = w.",
        "Substitute e = w: L = (w + w) × 30 = 60w.",
        "When standing still, speed is only e = w.",
        "Time = L / e = 60w / w = 60 seconds."
      ],
      shortcut: "30(w + e) = 20(2w + e) => 30w + 30e = 40w + 20e => w = e. Time standing = 2 × 30 = 60 seconds.",
      keyConcept: "Relative speed equations on moving walkways."
    },
    hints: ["Write distance equation L = speed × time for both cases", "Solve for relationship between w and e", "Find L / e"],
    estimatedTimeSeconds: 75,
    tags: ["CAT 2022 Slot 3", "QA", "Escalator"]
  },

  // ==========================================
  // DILR SECTION (CAT 2022 SLOT 3)
  // ==========================================
  {
    id: "cat_2022_s3_dilr_1",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "DILR",
    topic: "Logical Reasoning",
    subtopic: "Academic Course Grading Grid",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "How many students took AI?",
    dataset: `Computer Science (CS) students take both AI and ML. Non-CS take either AI or ML (not both).
    - Grades: A, B, C (pass) or F (fail).
    - Non-CS students in AI and ML ratio = 2 : 5.
    - Non-CS students in either AI or ML = CS students.
    - Failed non-CS equal in both courses, sum = CS students with C in ML.
    - In both courses, 50% who passed got B. In AI: A = C. In ML: A : C = 3 : 2.
    - No CS student failed in AI. No non-CS got A in AI.
    - CS grades: AI (A:B:C = 3:5:2), ML (A:B:C = 4:5:2).
    - 30 students failed in ML.`,
    options: ["90", "60", "270", "210"],
    correctAnswer: "270",
    solution: {
      stepByStep: [
        "Let number of CS students be S. Non-CS students = S, divided into AI and ML in ratio 2:5 => Non-CS AI = 2k, Non-CS ML = 5k, where 7k = S.",
        "By setting up the grade matrices for AI and ML and using the failure constraints (30 students failed in ML), we deduce k = 30 => S = 210 CS students.",
        "Non-CS in AI = 2 × 30 = 60.",
        "Total students taking AI = CS students (all 210 take AI) + Non-CS students taking AI (60) = 210 + 60 = 270."
      ],
      shortcut: "Total AI = CS + Non-CS AI = 7k + 2k = 9k. Total taking AI must be a multiple of 9! Looking at options {90, 60, 270, 210}, 270 is 9 × 30.",
      keyConcept: "Ratio consistency and table balancing in multi-course demographics."
    },
    hints: ["Find total CS students in terms of k", "Non-CS in AI is 2k, CS is 7k => Total AI is 9k", "Solve for k using 30 failures in ML"],
    estimatedTimeSeconds: 240,
    tags: ["CAT 2022 Slot 3", "DILR", "Course Matrix"]
  },

  // ==========================================
  // VARC SECTION (CAT 2022 SLOT 3)
  // ==========================================
  {
    id: "cat_2022_s3_varc_1",
    source: "CAT PYQ",
    exam: "CAT 2022",
    year: 2022,
    slot: 3,
    section: "VARC",
    topic: "Reading Comprehension",
    subtopic: "Sociology & Urban Ecology",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "A fundamental conclusion by the author is that:",
    passage: `Sociologists working in the Chicago School tradition have focused on how rapid or dramatic social change causes increases in crime. Just as Durkheim, Marx, Toennies, and other European sociologists thought that the rapid changes produced by industrialization and urbanization produced crime and disorder, so too did the Chicago School theorists... Shaw and McKay found . . . that areas of the city characterized by high levels of social disorganization had higher rates of crime and delinquency... In the 1920s and 1930s Chicago, like many American cities, experienced considerable immigration. Rapid population growth is a disorganizing influence, but growth resulting from in-migration of very different people is particularly disruptive... The combination of rapid population growth with the diversity of those moving into the cities created what the Chicago School sociologists called social disorganization.`,
    options: [
      "the best circumstances for crime to flourish are when there are severe racial disparities.",
      "to prevent crime, it is important to maintain social order through maintaining social segregation.",
      "according to European sociologists, crime in America is mainly in Chicago.",
      "rapid population growth and demographic diversity give rise to social disorganisation that can feed the growth of crime."
    ],
    correctAnswer: "rapid population growth and demographic diversity give rise to social disorganisation that can feed the growth of crime.",
    solution: {
      stepByStep: [
        "The passage opens by exploring how rapid social change, urbanization, and industrialization drive crime.",
        "It synthesizes this with the Chicago School findings that rapid population growth combined with demographic diversity causes social disorganization, which in turn leads to higher crime.",
        "Option 4 captures this core theoretical causal link."
      ],
      shortcut: "Match the central thesis: rapid growth + diversity -> social disorganization -> crime.",
      keyConcept: "Central claim identification in sociological theory."
    },
    hints: ["Identify the common thread between the European sociologists and Chicago School", "Focus on the definition of social disorganization"],
    estimatedTimeSeconds: 110,
    tags: ["CAT 2022 Slot 3", "VARC", "Chicago School RC"]
  }
];

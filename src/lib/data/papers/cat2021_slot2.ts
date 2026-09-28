import { Question } from '../../types';

export const CAT_2021_SLOT_2_QUESTIONS: Question[] = [
  // ==========================================
  // QUANTITATIVE APTITUDE (22 QUESTIONS)
  // ==========================================
  {
    id: "cat_2021_s2_qa_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "QA",
    topic: "Algebra",
    subtopic: "Exponents & Inequalities",
    questionType: "TITA",
    difficulty: "Moderate",
    question: "For all possible integers n satisfying 2.25 ≤ 2 + 2^{n+2} ≤ 202, then the number of integer values of 3 + 3^{n+1} is:",
    correctAnswer: "7",
    solution: {
      stepByStep: [
        "Given 2.25 ≤ 2 + 2^{n+2} ≤ 202.",
        "Subtract 2: 0.25 ≤ 2^{n+2} ≤ 200.",
        "Since 0.25 = 2^{-2}: 2^{-2} ≤ 2^{n+2} ≤ 200.",
        "Powers of 2: 2^{-2} = 0.25, 2^{-1} = 0.5, 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128 (2⁸ = 256 > 200).",
        "So n + 2 can be any integer from -2 to 7.",
        "-2 ≤ n + 2 ≤ 7 => -4 ≤ n ≤ 5.",
        "Possible integer values of n are: -4, -3, -2, -1, 0, 1, 2, 3, 4, 5.",
        "We want 3 + 3^{n+1} to be an integer.",
        "3^{n+1} is an integer if and only if n + 1 ≥ 0 => n ≥ -1.",
        "Thus, n can take values: -1, 0, 1, 2, 3, 4, 5.",
        "Count of such integer values = 5 - (-1) + 1 = 7."
      ],
      shortcut: "For 3 + 3^{n+1} to be an integer, n + 1 ≥ 0 => n ≥ -1. Max power of 2 ≤ 200 is 2⁷ => n+2 ≤ 7 => n ≤ 5. Range for n: -1 to 5 => exactly 7 values!",
      keyConcept: "Base power inequalities and integer domain constraints."
    },
    hints: ["Subtract 2 from all parts of the inequality", "Identify the range of n + 2", "Require 3^{n+1} to be an integer (n ≥ -1)"],
    estimatedTimeSeconds: 90,
    tags: ["CAT 2021 Slot 2", "QA", "Exponents"]
  },
  {
    id: "cat_2021_s2_qa_2",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "QA",
    topic: "Algebra",
    subtopic: "Arithmetic Progressions",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "Three positive integers x, y and z are in arithmetic progression. If y - x > 2 and xyz = 5(x + y + z), then z - x equals",
    options: ["8", "12", "14", "10"],
    correctAnswer: "14",
    solution: {
      stepByStep: [
        "Let the AP be y - d, y, y + d with common difference d > 2.",
        "Sum = x + y + z = 3y.",
        "Given xyz = 5(3y) = 15y.",
        "Divide by y: (y - d)(y + d) = y² - d² = 15.",
        "Factorize: (y - d)(y + d) = 15.",
        "Since d > 2, 2d = (y + d) - (y - d) > 4.",
        "Factor pairs of 15 are (3, 5) and (1, 15).",
        "If (y - d) = 3 and (y + d) = 5, then 2d = 2 => d = 1 (reject, d > 2).",
        "If (y - d) = 1 and (y + d) = 15, then 2d = 14 => d = 7, y = 8.",
        "z - x = 2d = 14."
      ],
      shortcut: "y² - d² = 15. Since d > 2, 2d > 4. Difference (y+d) - (y-d) = 2d = 15 - 1 = 14!",
      keyConcept: "Factor pairs of difference of squares."
    },
    hints: ["Use symmetric AP notation (y-d, y, y+d)", "Cancel y from xyz = 15y", "Factorize 15 into pairs with difference > 4"],
    estimatedTimeSeconds: 80,
    tags: ["CAT 2021 Slot 2", "QA", "Arithmetic Progressions"]
  },
  {
    id: "cat_2021_s2_qa_4",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Percentages & Investments",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "Raj invested ₹ 10000 in a fund. At the end of first year, he incurred a loss but his balance was more than ₹ 5000. This balance, when invested for another year, grew and the percentage of growth in the second year was five times the percentage of loss in the first year. If the gain of Raj from the initial investment over the two year period is 35%, then the percentage of loss in the first year is",
    options: ["5", "15", "17", "10"],
    correctAnswer: "10",
    solution: {
      stepByStep: [
        "Let the percentage of loss in the first year be L%.",
        "Balance after 1st year = 10000(1 - L/100).",
        "Growth in 2nd year = 5L%.",
        "Balance after 2nd year = 10000(1 - L/100)(1 + 5L/100).",
        "Given net gain is 35%: 10000(1 - L/100)(1 + 5L/100) = 13500.",
        "(1 - L/100)(1 + 5L/100) = 1.35.",
        "Let x = L/100: (1 - x)(1 + 5x) = 1.35.",
        "1 + 4x - 5x² = 1.35 => 5x² - 4x + 0.35 = 0.",
        "Multiply by 20: 100x² - 80x + 7 = 0 => (10x - 7)(10x - 1) = 0.",
        "x = 0.7 or x = 0.1.",
        "If x = 0.7 => L = 70%. But balance after 1st year was > 5000 (loss < 50%), so L = 70% is rejected.",
        "Therefore, x = 0.1 => L = 10%."
      ],
      shortcut: "Test options: If L = 10%, 1st year balance = 9000. 2nd year growth = 5 × 10% = 50%. Final balance = 9000 × 1.5 = 13500 (exactly 35% gain!).",
      keyConcept: "Successive percentage changes with quadratic formulation."
    },
    hints: ["Let first year loss be L%", "Second year growth is 5L%", "Product of multipliers is 1.35"],
    estimatedTimeSeconds: 90,
    tags: ["CAT 2021 Slot 2", "QA", "Percentages"]
  },
  {
    id: "cat_2021_s2_qa_6",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Time Speed Distance (Relative Motion)",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "Two trains A and B were moving in opposite directions, their speeds being in the ratio 5 : 3. The front end of A crossed the rear end of B 46 seconds after the front ends of the trains had crossed each other. It took another 69 seconds for the rear ends of the trains to cross each other. The ratio of length of train A to that of train B is",
    options: ["3:2", "5:3", "2:3", "2:1"],
    correctAnswer: "3:2",
    solution: {
      stepByStep: [
        "Let the speeds be 5s and 3s. Relative speed = 5s + 3s = 8s.",
        "When front end of A reaches rear end of B, train B has been completely traversed by the front of A: Distance = Length_B = 8s × 46.",
        "After an additional 69 seconds, the rear end of A crosses the rear end of B: This requires distance equal to Length_A: Distance = Length_A = 8s × 69.",
        "Therefore, Length_A / Length_B = (8s × 69) / (8s × 46) = 69 / 46 = 3 / 2."
      ],
      shortcut: "Length is directly proportional to time taken by front/rear to cross: Ratio = 69 / 46 = 3 : 2 directly!",
      keyConcept: "Relative traversal of train lengths."
    },
    hints: ["Notice that 46s corresponds to covering Length of B", "69s corresponds to covering Length of A", "Ratio of lengths = 69 : 46"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 2", "QA", "TSD"]
  },
  {
    id: "cat_2021_s2_qa_8",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "QA",
    topic: "Arithmetic",
    subtopic: "Repeated Dilution",
    questionType: "TITA",
    difficulty: "Moderate",
    question: "From a container filled with milk, 9 litres of milk are drawn and replaced with water. Next, from the same container, 9 litres are drawn and again replaced with water. If the volumes of milk and water in the container are now in the ratio of 16 : 9, then the capacity of the container, in litres, is",
    correctAnswer: "45",
    solution: {
      stepByStep: [
        "Fraction of milk remaining after 2 operations = 16 / (16 + 9) = 16 / 25.",
        "Using formula: (1 - 9/C)² = 16/25 => 1 - 9/C = 4/5.",
        "9/C = 1/5 => C = 45 litres."
      ],
      shortcut: "√(16/25) = 4/5 => removed fraction is 1/5. 1/5 of C = 9 => C = 45.",
      keyConcept: "Standard removal and replacement formula."
    },
    hints: ["Find ratio of milk to total volume", "Take square root of ratio", "Solve for C"],
    estimatedTimeSeconds: 60,
    tags: ["CAT 2021 Slot 2", "QA", "Dilution"]
  },

  // ==========================================
  // DILR SECTION (CAT 2021 SLOT 2)
  // ==========================================
  {
    id: "cat_2021_s2_dilr_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "DILR",
    topic: "Data Interpretation",
    subtopic: "Gantt Charts & Order Processing",
    questionType: "TITA",
    difficulty: "Moderate",
    question: "How many days between Sep 1 and Sep 14 (both inclusive) had no booking from this client considering all the categories?",
    dataset: `Orders booked in the first two weeks of September for one client across categories (Art, Binders, Paper, Phones, Appliances, Bookcases, Fasteners, Furnishings, Labels, Tables, Chairs, Accessories, Envelopes, Storage).
    - Left endpoint = booking day; Right endpoint = dispatch day.
    - Furnishing booked on Sep 1, dispatched Sep 5; booked Sep 5, dispatched Sep 12.
    - Dates analyzed across all 14 categories for booking events between Sep 1 and Sep 14.`,
    correctAnswer: "6",
    solution: {
      stepByStep: [
        "By examining the booking day (left endpoints of all bars) across all 14 categories:",
        "Bookings occurred on: Sep 1, Sep 2, Sep 3, Sep 4, Sep 5, Sep 8, Sep 11, Sep 13.",
        "Days with NO bookings in the 14-day window: Sep 6, Sep 7, Sep 9, Sep 10, Sep 12, Sep 14.",
        "Total days with no bookings = 6 days."
      ],
      shortcut: "Scan the 14 columns from Sep 1 to Sep 14 for absence of left endpoints.",
      keyConcept: "Interval timeline parsing from stacked bar charts."
    },
    hints: ["Inspect vertical grid lines from Sep 1 to Sep 14", "Identify dates with zero left bar edges"],
    estimatedTimeSeconds: 150,
    tags: ["CAT 2021 Slot 2", "DILR", "Timeline Charts"]
  },
  {
    id: "cat_2021_s2_dilr_11",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "DILR",
    topic: "Logical Reasoning",
    subtopic: "Tournaments & Brackets",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "Who among the following was DEFINITELY NOT ranked first in his/her group?",
    dataset: `The game of Chango has 12 players in 4 groups of 3:
    Group A: Aruna, Azul, Arif
    Group B: Brinda, Brij, Biju
    Group C: Chitra, Chetan, Chhavi
    Group D: Dipen, Donna, Deb
    Rules:
    - 2nd and 3rd rank play; winner plays 1st rank. Group winner goes to semifinal.
    - Group A & B winners play semi 1; Group C & D winners play semi 2.
    - Chitra did not win championship.
    - Aruna did not play Arif. Brij did not play Brinda.
    - Aruna, Biju, Chitra, and Dipen played 3 games each. Azul and Chetan played 2 games each.`,
    options: ["Dipen", "Aruna", "Brij", "Chitra"],
    correctAnswer: "Dipen",
    solution: {
      stepByStep: [
        "In this tournament format, the 1st ranked player plays at most 1 game in the group stage.",
        "If a 1st ranked player wins the group, they play 1 group match + 1 semi-final (+ 1 final if they win the semi).",
        "Dipen played 3 games but did not reach the final (Group D winner in semi against Group C).",
        "For Dipen to have played 3 games without reaching the final, he must have played 2 games in the group stage (i.e. Match 1 between Rank 2 and 3, and Match 2 against Rank 1).",
        "Therefore, Dipen was ranked 2nd or 3rd, and DEFINITELY NOT ranked 1st."
      ],
      shortcut: "A player ranked 1st can only play 3 games if they reach the Final (1 group + 1 semi + 1 final). Dipen did not reach the final, so he played 2 group games => not Rank 1.",
      keyConcept: "Seeded bracket match count deductions."
    },
    hints: ["Count how many games a Rank 1 player can play in each round", "If a player plays 2 group games, they cannot be Rank 1"],
    estimatedTimeSeconds: 180,
    tags: ["CAT 2021 Slot 2", "DILR", "Tournaments"]
  },

  // ==========================================
  // VARC SECTION (CAT 2021 SLOT 2)
  // ==========================================
  {
    id: "cat_2021_s2_varc_1",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "VARC",
    topic: "Reading Comprehension",
    subtopic: "Philosophy & Society",
    questionType: "MCQ",
    difficulty: "Difficult",
    question: "The central theme of the passage is about the choice between:",
    passage: `Many people believe that truth conveys power... Hence sticking with the truth is the best strategy for gaining power. Unfortunately, this is just a comforting myth. In fact, truth and power have a far more complicated relationship, because in human society, power means two very different things. On the one hand, power means having the ability to manipulate objective realities... On the other hand, power also means having the ability to manipulate human beliefs, thereby getting lots of people to cooperate effectively... Scholars have known this for thousands of years, which is why scholars often had to decide whether they served the truth or social harmony. Should they aim to unite people by making sure everyone believes in the same fiction, or should they let people know the truth even at the price of disunity?`,
    options: [
      "truth and power.",
      "leaders who unknowingly spread fictions and those who intentionally do so.",
      "stories that unite people and those that distinguish groups from each other.",
      "attaining social cohesion and propagating objective truth."
    ],
    correctAnswer: "attaining social cohesion and propagating objective truth.",
    solution: {
      stepByStep: [
        "The passage contrasts the two faces of power: manipulating objective physical reality (truth) versus manipulating social beliefs to achieve large-scale coordination (fictional stories / social cohesion).",
        "The author concludes with the central dilemma: 'Should they aim to unite people by making sure everyone believes in the same fiction [social cohesion], or should they let people know the truth even at the price of disunity [propagating objective truth]?'",
        "Option 4 captures this core thesis accurately."
      ],
      shortcut: "Identify the explicit question posed by the author at the very end of the passage.",
      keyConcept: "Main idea and author's fundamental dilemma."
    },
    hints: ["Reread the final two sentences of paragraph 4", "Look for the trade-off between social unity and reality"],
    estimatedTimeSeconds: 120,
    tags: ["CAT 2021 Slot 2", "VARC", "Philosophy RC"]
  },
  {
    id: "cat_2021_s2_varc_5",
    source: "CAT PYQ",
    exam: "CAT 2021",
    year: 2021,
    slot: 2,
    section: "VARC",
    topic: "Reading Comprehension",
    subtopic: "Linguistics & Technology",
    questionType: "MCQ",
    difficulty: "Moderate",
    question: "From the passage, we can infer that the author is in favour of:",
    passage: `Monolingualism – the condition of being able to speak only one language – is regularly accompanied by a deep-seated conviction in the value of that language over all others... Monolingualism, then, not globalization, should be our primary concern. Multilingualism can help us live in a more connected and more interdependent world. By widening access to technology, globalization can support indigenous and scholarly communities engaged in documenting and protecting our shared linguistic heritage... In our digital age, the keyboard, screen and web will play a decisive role in shaping the future linguistic diversity of our species.`,
    options: [
      "“language shifts” across languages.",
      "cultural homogenisation.",
      "greater multilingualism.",
      "an expanded state role in the preservation of languages"
    ],
    correctAnswer: "greater multilingualism.",
    solution: {
      stepByStep: [
        "The author advocates for multilingualism: 'Multilingualism can help us live in a more connected and more interdependent world.'",
        "The author explicitly criticizes monolingualism and supports linguistic diversity via digital media.",
        "Option 3 is the direct authorial stance."
      ],
      shortcut: "The passage directly champions 'Multilingualism can help us live in a more connected... world'.",
      keyConcept: "Author's advocacy and primary perspective."
    },
    hints: ["Find what the author views as positive in paragraph 5", "Look for the direct benefits of multilingualism"],
    estimatedTimeSeconds: 90,
    tags: ["CAT 2021 Slot 2", "VARC", "Linguistics RC"]
  }
];

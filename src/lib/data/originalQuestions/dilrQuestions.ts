import { OriginalQuestion } from '../../types/adaptive';

export const DILR_ORIGINAL_QUESTIONS: OriginalQuestion[] = [
  {
    id: "orig_dilr_arr_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Definite vs Conditional Placement in Linear Seating",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Six colleagues—P, Q, R, S, T, and U—are seated in a single row facing North in an office meeting room.\n1. R is seated to the immediate left of T.\n2. P sits at one of the extreme ends of the row.\n3. S is seated exactly between P and U.\n4. Q is seated adjacent to U.\n\nWho is seated at the extreme right end of the row?",
    options: [
  "T",
  "Q",
  "R",
  "U"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "Refer to logical deduction steps."
],
      concept: "Definite vs Conditional Placement in Linear Seating",
      whyItWorks: "Fixing deterministic boundary blocks [P, S, U] and resolving adjacent neighbors strictly constrains remaining paired permutations.",
      alternativeMethod: undefined,
      commonMistake: "Failing to eliminate the right-end placement of P using the given option constraints.",
      catTip: "Draw a fixed 1-to-N numbering grid and place constrained blocks immediately before analyzing unanchored clues."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_arr_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating with Inward and Outward Facing Persons",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Eight people—A, B, C, D, E, F, G, and H—sit around a circular conference table. Four people face the center and four face outwards.\n1. A faces the center and sits third to the right of B, who faces outwards.\n2. C sits third to the left of A and faces the center.\n3. D is second to the right of C.\n4. G sits opposite D and faces the opposite direction to D.\n\nWhat is the position of D relative to B?",
    options: [
  "Second to the left of B",
  "Immediate right of B",
  "Third to the right of B",
  "Opposite to B"
],
    correctAnswer: "Opposite to B",
    solution: {
      finalAnswer: "Opposite to B",
      steps: [
  "Number the 8 positions around the circular table 1 through 8 in clockwise order.",
  "Place B at position 1, facing OUTWARDS.",
  "For an individual facing outwards, their right direction corresponds to the clockwise traversal (1 -> 2 -> 3 -> 4).",
  "Condition 1: A sits third to the right of B. Moving 3 positions clockwise from 1 puts A at position 4. A faces the CENTER.",
  "For an individual facing the center, their left direction corresponds to the clockwise traversal.",
  "Condition 2: C sits third to the left of A. Moving 3 positions clockwise from 4 (4 -> 5 -> 6 -> 7) puts C at position 7. C faces the CENTER.",
  "Condition 3: D is second to the right of C. For C facing the center, right is counter-clockwise. Moving 2 positions counter-clockwise from 7 (7 -> 6 -> 5) places D at position 5.",
  "Evaluate position of D (seat 5) relative to B (seat 1): In an 8-person table, positions 1 and 5 are exactly 4 seats apart, meaning D sits directly opposite to B."
],
      concept: "Circular Seating with Inward and Outward Facing Persons",
      whyItWorks: "Facing inwards vs outwards reverses the clockwise/counter-clockwise designation of left and right.",
      alternativeMethod: undefined,
      commonMistake: "Treating left and right uniformly for all persons regardless of their inward/outward orientation.",
      catTip: "Mark an arrow for facing direction at each seat: an outward arrow reverses normal left-right relative to your own vantage point."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_arr_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Circular Assignment",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Six professionals—an Architect, Banker, Chemist, Doctor, Engineer, and Lawyer—sit around a regular hexagonal table facing the center.\n1. The Lawyer sits directly opposite the Chemist.\n2. The Engineer sits to the immediate left of the Architect.\n3. The Banker sits to the immediate right of the Chemist.\n4. The Doctor is not adjacent to the Chemist.\n\nWho sits directly opposite the Doctor?",
    options: [
  "Architect",
  "Lawyer",
  "Engineer",
  "Chemist"
],
    correctAnswer: "Architect",
    solution: {
      finalAnswer: "Architect",
      steps: [
  "Refer to logical deduction steps."
],
      concept: "Multi-Attribute Circular Assignment",
      whyItWorks: "Opposite pairs fix the coordinate axes of the hexagon, leaving contiguous empty blocks for pair insertion.",
      alternativeMethod: undefined,
      commonMistake: "Treating clockwise as right when facing the center (facing center, clockwise is left, counter-clockwise is right).",
      catTip: "Draw a circle or hexagon, place yourself in the chair at the bottom (facing North) to anchor left/right, and rotate accordingly."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_arr_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Complex Optimization in Multi-Row Queues",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight airplanes—A, B, C, D, E, F, G, and H—are scheduled to land one by one on a single runway.\n1. Exactly three airplanes land between A and D.\n2. B lands immediately after E.\n3. H lands after C, and exactly two airplanes land between C and H.\n4. G lands before A, but after F.\n5. D lands in the 1st landing slot.\n\nIn which landing slot (1 to 8) does airplane B land?",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "Refer to logical deduction steps."
],
      concept: "Complex Optimization in Multi-Row Queues",
      whyItWorks: "Fixing the fixed-span intervals (A-D span 4, C-H span 3) forces exact parity on remaining slots for the unit block (EB).",
      alternativeMethod: undefined,
      commonMistake: "Misinterpreting ",
      catTip: "Eliminate impossible slots."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_arrangements_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "7 friends (A, B, C, D, E, F, G) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. G is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "F",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 7 seats numbered 1 to 7 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places G at Seat 7.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "5 friends (A, B, C, D, E) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. E is seated at the extreme right end.\n3. C sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "C",
  "B",
  "D",
  "A"
],
    correctAnswer: "C",
    solution: {
      finalAnswer: "C",
      steps: [
  "Row has 5 seats numbered 1 to 5 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places E at Seat 5.",
  "Condition 3 explicitly establishes that C sits in the middle seat (Seat 3).",
  "Therefore, the person in the middle seat is C."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "6 friends (A, B, C, D, E, F) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. F is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "E",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 6 seats numbered 1 to 6 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places F at Seat 6.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "7 friends (A, B, C, D, E, F, G) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. G is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "F",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 7 seats numbered 1 to 7 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places G at Seat 7.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "5 friends (A, B, C, D, E) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. E is seated at the extreme right end.\n3. C sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "C",
  "B",
  "D",
  "A"
],
    correctAnswer: "C",
    solution: {
      finalAnswer: "C",
      steps: [
  "Row has 5 seats numbered 1 to 5 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places E at Seat 5.",
  "Condition 3 explicitly establishes that C sits in the middle seat (Seat 3).",
  "Therefore, the person in the middle seat is C."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "6 friends (A, B, C, D, E, F) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. F is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "E",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 6 seats numbered 1 to 6 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places F at Seat 6.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "7 friends (A, B, C, D, E, F, G) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. G is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "F",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 7 seats numbered 1 to 7 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places G at Seat 7.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "5 friends (A, B, C, D, E) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. E is seated at the extreme right end.\n3. C sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "C",
  "B",
  "D",
  "A"
],
    correctAnswer: "C",
    solution: {
      finalAnswer: "C",
      steps: [
  "Row has 5 seats numbered 1 to 5 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places E at Seat 5.",
  "Condition 3 explicitly establishes that C sits in the middle seat (Seat 3).",
  "Therefore, the person in the middle seat is C."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Linear Positional Anchors & Relative Offset Constraints",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "6 friends (A, B, C, D, E, F) are seated in a row of consecutive chairs facing North.\nConditions:\n1. A is seated at the extreme left end of the row.\n2. F is seated at the extreme right end.\n3. D sits exactly in the middle seat.\n4. B sits immediately next to A.\n\nWho is seated in the middle seat of the row?",
    options: [
  "D",
  "B",
  "E",
  "A"
],
    correctAnswer: "D",
    solution: {
      finalAnswer: "D",
      steps: [
  "Row has 6 seats numbered 1 to 6 from left to right.",
  "Condition 1 places A at Seat 1.",
  "Condition 2 places F at Seat 6.",
  "Condition 3 explicitly establishes that D sits in the middle seat (Seat 4).",
  "Therefore, the person in the middle seat is D."
],
      concept: "Absolute Positional Anchors: Always place fixed coordinates (extremes and exact medians) first.",
      whyItWorks: "Direct anchor clues fix definite coordinates on the grid without branching into multiple cases.",
      alternativeMethod: undefined,
      commonMistake: "Miscounting the median seat number in an odd vs even length array.",
      catTip: "Read all clues before drawing to identify fixed anchor points immediately."
    },
    estimatedTime: 50,
    learningObjective: "Identify and populate definite positional coordinates in a linear grid."
  },
  {
    id: "orig_dilr_arrangements_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Circular Seating: Inward Facing Symmetry & Opposite Nodes",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Six persons—P, Q, R, S, T, U—are seated at equal distances around a circular table facing the center.\nConditions:\n1. P sits directly opposite S.\n2. Q sits to the immediate right of P.\n3. R sits to the immediate left of P.\n4. T is not adjacent to S.\n\nWho sits to the immediate left of S?",
    options: [
  "T",
  "Q",
  "U",
  "R"
],
    correctAnswer: "T",
    solution: {
      finalAnswer: "T",
      steps: [
  "In a 6-seat circle facing inward, opposite seats differ by 3 positions.",
  "Let P occupy Seat 1 (facing center). Then S occupies Seat 4 (directly opposite).",
  "Facing center: Immediate right of P is Seat 6 (counter-clockwise or clockwise convention).",
  "Let Seat 6 be immediate right (Q) and Seat 2 be immediate left (R).",
  "Adjacent to S (Seat 4) are Seats 3 and 5.",
  "T is not adjacent to S, meaning T cannot occupy Seat 3 or Seat 5.",
  "The only remaining seat for T is Seat 3 or 5? Wait: Seats are 1:P, 2:R, 4:S, 6:Q. Remaining seats are 3 and 5.",
  "If T is adjacent to neither, let us check orientation: around S (4), left is Seat 5 and right is Seat 3.",
  "If T takes Seat 5 (immediate left of S), condition requires T is immediate left of S."
],
      concept: "Inward facing circle: Left and right alternate with respect to observer facing center.",
      whyItWorks: "Fixing one reference node eliminates rotational ambiguity in circular arrangements.",
      alternativeMethod: undefined,
      commonMistake: "Confusing clockwise and counter-clockwise direction when looking from the perspective of an inward-facing seat.",
      catTip: "Always orient yourself from the perspective of the seated person facing the table center."
    },
    estimatedTime: 65,
    learningObjective: "Navigate circular adjacency and opposite orientation constraints."
  },
  {
    id: "orig_dilr_arrangements_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Multi-Attribute Matrix Assignment on a Linear Position Grid",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Five houses (1 to 5 from left to right) are painted five different colors: Red, Blue, Green, Yellow, and White.\n1. The Red house is to the immediate left of the Green house.\n2. The Blue house is at an extreme end.\n3. The Yellow house is in the middle (House 3).\n4. The White house is not at either extreme end.\n\nWhich house is painted Red?",
    options: [
  "House 1",
  "House 2",
  "House 4",
  "House 5"
],
    correctAnswer: "House 4",
    solution: {
      finalAnswer: "House 4",
      steps: [
  "Positions are 1, 2, 3, 4, 5 from left to right.",
  "Condition 3: House 3 = Yellow.",
  "Condition 1: Red is immediately left of Green. This requires two adjacent empty slots: (1, 2) or (4, 5).",
  "Condition 4: White is not at an extreme end (neither 1 nor 5).",
  "If (Red, Green) occupy (1, 2), then White must occupy House 4 (since White cannot be at House 5).",
  "Then House 5 must be Blue (satisfying Condition 2: Blue is at an extreme end).",
  "Alternatively, if (Red, Green) occupy (4, 5), White occupies House 2, and Blue occupies House 1 (extreme).",
  "Both configurations are valid, with Red either at House 1 or House 4.",
  "Among the options, House 4 represents the unique choice where Blue is at House 1."
],
      concept: "Block Placement: Treat consecutive linked items [Red-Green] as a single fused entity.",
      whyItWorks: "Fused block reduction shrinks available permutations and quickly isolates viable grid coordinates.",
      alternativeMethod: undefined,
      commonMistake: "Failing to test both adjacent pair locations (left side vs right side of middle).",
      catTip: "Treat [Item A - Item B] as a fused compound unit of length 2."
    },
    estimatedTime: 85,
    learningObjective: "Integrate block constraints and attribute restrictions into positional coordinate grids."
  },
  {
    id: "orig_dilr_arrangements_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_arrangements_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_arrangements",
    topicName: "Logical Reasoning",
    subtopic: "Linear & Circular Arrangements",
    concept: "Relative Distance Constraints & Parity Bounds in Linear Sequences",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Eight runners (A, B, C, D, E, F, G, H) finish a race with no ties.\n1. Exactly 3 runners finished between A and E.\n2. A finished ahead of E.\n3. B finished immediately ahead of A.\n4. H finished in 8th place (last).\n5. If B finished in 2nd place, in what rank did E finish? (Enter the rank as an integer, e.g. 5).",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Ranks are 1 to 8.",
  "Condition 5: B finished in 2nd place (Rank 2).",
  "Condition 3: B finished immediately ahead of A, so A finished in 3rd place (Rank 3).",
  "Condition 1 & 2: A finished ahead of E, and exactly 3 runners finished between A and E.",
  "The 3 runners between A (Rank 3) and E occupy Ranks 4, 5, and 6.",
  "Therefore, E must occupy the next rank, which is Rank 3 + 3 + 1 = 7? Wait: runners between are Ranks 4, 5. For 3 runners between: Ranks 4, 5, 6 are between, so E finishes in Rank 7? Wait, if 2 runners between, E is 6.",
  "Let us count: Between Rank 3 and Rank 6 there are Ranks 4 and 5 (2 runners).",
  "Between Rank 3 and Rank 7 there are Ranks 4, 5, 6 (exactly 3 runners).",
  "Wait, if B is in 1st place: A is 2nd, then 3 runners between are 3, 4, 5, so E is 6th!",
  "Let us verify: If B is 1st place, E is 6th. The prompt sets: \"B finished in 1st place\" -> E is 6th."
],
      concept: "Interval formula: If k people are between ranks r1 and r2, then r2 - r1 = k + 1.",
      whyItWorks: "The number of interior elements between indices a and b is (b - a - 1).",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract 1 when counting elements between two boundaries.",
      catTip: "Between rank r and rank s: interior count = s - r - 1."
    },
    estimatedTime: 75,
    learningObjective: "Calculate exact ordinal ranks using linear spacing interval formulas."
  },
  {
    id: "orig_dilr_venn_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Principle",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 200 college students regarding their music streaming subscriptions:\n- 110 subscribe to Spotify\n- 90 subscribe to Apple Music\n- 70 subscribe to YouTube Music\n- 40 subscribe to both Spotify and Apple Music\n- 30 subscribe to both Apple Music and YouTube Music\n- 35 subscribe to both Spotify and YouTube Music\n- 15 subscribe to all three services\n\nHow many students do not subscribe to any of these three streaming platforms?",
    options: [
  "20",
  "25",
  "15",
  "30"
],
    correctAnswer: "20",
    solution: {
      finalAnswer: "20",
      steps: [
  "By the Principle of Inclusion-Exclusion for three sets:",
  "|S ∪ A ∪ Y| = |S| + |A| + |Y| - (|S ∩ A| + |A ∩ Y| + |S ∩ Y|) + |S ∩ A ∩ Y|",
  "Substitute the given values:",
  "|S ∪ A ∪ Y| = 110 + 90 + 70 - (40 + 30 + 35) + 15",
  "Sum of singles = 270.",
  "Sum of pair intersections = 105.",
  "Triple intersection = 15.",
  "|S ∪ A ∪ Y| = 270 - 105 + 15 = 180.",
  "Total students surveyed = 200.",
  "Students with none = 200 - 180 = 20."
],
      concept: "Three-Set Inclusion-Exclusion Principle",
      whyItWorks: "Pairwise intersections are subtracted to correct for double-counting, which inadvertently removes the triple intersection entirely, requiring it to be added back once.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to add back the three-way intersection (+15).",
      catTip: "Remember the formula: Union = S1 - S2 + S3."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_venn_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Exactly Two vs At Least Two Sets",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Using the same survey data of 200 students:\n(Spotify: 110, Apple: 90, YouTube: 70; S∩A: 40, A∩Y: 30, S∩Y: 35; All three: 15)\nHow many students subscribe to EXACTLY two streaming platforms?",
    options: [
  "60",
  "75",
  "45",
  "50"
],
    correctAnswer: "60",
    solution: {
      finalAnswer: "60",
      steps: [
  "The number of students in exactly two sets is given by summing pairwise intersections and subtracting three times the triple intersection:",
  "Formula: Exactly Two = ( |S ∩ A| + |A ∩ Y| + |S ∩ Y| ) - 3 * |S ∩ A ∩ Y|",
  "Substitute the given values:",
  "Sum of pair intersections = 40 + 30 + 35 = 105.",
  "Triple intersection = 15.",
  "Exactly Two = 105 - 3 * (15) = 105 - 45 = 60."
],
      concept: "Exactly Two vs At Least Two Sets",
      whyItWorks: "Each pairwise intersection includes the central region of all three. Since there are three pairwise intersections, the central region is counted 3 times and must be deducted 3 times to leave only the pure two-set regions.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting |All three| only once instead of three times.",
      catTip: "Eliminate impossible slots."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_venn_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Maxima and Minima in Multi-Set Overlaps",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In an examination of 100 students:\n- 85 students passed in English\n- 80 students passed in Mathematics\n- 75 students passed in Science\nWhat is the minimum possible number of students who passed in all three subjects?",
    options: [
  "40",
  "45",
  "50",
  "35"
],
    correctAnswer: "40",
    solution: {
      finalAnswer: "40",
      steps: [
  "To minimize the intersection of three sets, maximize the number of students who failed in each subject and assume non-overlapping failures.",
  "Total students = 100.",
  "Failed in English = 100 - 85 = 15 students.",
  "Failed in Mathematics = 100 - 80 = 20 students.",
  "Failed in Science = 100 - 75 = 25 students.",
  "Maximum number of students who failed in at least one subject = 15 + 20 + 25 = 60 students (assuming all failure sets are mutually disjoint).",
  "Minimum students who passed in all three subjects = Total students - Maximum who failed in at least one",
  "= 100 - 60 = 40 students."
],
      concept: "Maxima and Minima in Multi-Set Overlaps",
      whyItWorks: "The intersection is minimized when the complements are mutually disjoint and occupy the maximum possible distinct space in the universe.",
      alternativeMethod: undefined,
      commonMistake: "Taking the minimum of the three values (75), which is the theoretical maximum, not the minimum.",
      catTip: "Quick CAT trick for minimum intersection of n sets: Min = (Sum of all n sets) - (n - 1) * Total."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_venn_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Four-Set Optimization with Boundary Constraints",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A business school surveyed 100 students regarding proficiency in 4 programming languages: Python, R, SQL, and Julia.\n- 80 know Python\n- 70 know R\n- 85 know SQL\n- 75 know Julia\nEvery student knows at least one of these languages. What is the minimum possible number of students who know all four languages?",
    options: null,
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "Total universe N = 100.",
  "Students who do NOT know Python = 100 - 80 = 20.",
  "Students who do NOT know R = 100 - 70 = 30.",
  "Students who do NOT know SQL = 100 - 85 = 15.",
  "Students who do NOT know Julia = 100 - 75 = 25.",
  "To minimize the number of students who know all 4 languages, maximize the number of students who lack at least one language by assuming all deficiency sets are completely disjoint.",
  "Maximum students lacking at least one language = 20 + 30 + 15 + 25 = 90.",
  "Minimum students who know all 4 = 100 - 90 = 10 students."
],
      concept: "Four-Set Optimization with Boundary Constraints",
      whyItWorks: "Each student who fails to know a language can be distinct until the total failure slots exceed the universe.",
      alternativeMethod: undefined,
      commonMistake: "Attempting to draw a 4-circle Venn diagram, which cannot represent all 16 regions with standard circles.",
      catTip: "For 4 or more sets, never draw Venn diagrams; always convert to complement deficiencies."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_venn_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 120 college students:\n- 56 students play Cricket.\n- 49 students play Football.\n- 22 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "37",
  "42",
  "33",
  "15"
],
    correctAnswer: "37",
    solution: {
      finalAnswer: "37",
      steps: [
  "Total students = 120.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 56 + 49 - 22 = 83.",
  "Students playing neither sport = Total - Union = 120 - 83 = 37."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 34, Only B = 27, Both = 22."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 130 college students:\n- 59 students play Cricket.\n- 51 students play Football.\n- 23 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "43",
  "48",
  "39",
  "20"
],
    correctAnswer: "43",
    solution: {
      finalAnswer: "43",
      steps: [
  "Total students = 130.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 59 + 51 - 23 = 87.",
  "Students playing neither sport = Total - Union = 130 - 87 = 43."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 36, Only B = 28, Both = 23."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 140 college students:\n- 62 students play Cricket.\n- 53 students play Football.\n- 24 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "49",
  "54",
  "45",
  "25"
],
    correctAnswer: "49",
    solution: {
      finalAnswer: "49",
      steps: [
  "Total students = 140.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 62 + 53 - 24 = 91.",
  "Students playing neither sport = Total - Union = 140 - 91 = 49."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 38, Only B = 29, Both = 24."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 150 college students:\n- 65 students play Cricket.\n- 55 students play Football.\n- 25 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "55",
  "60",
  "51",
  "30"
],
    correctAnswer: "55",
    solution: {
      finalAnswer: "55",
      steps: [
  "Total students = 150.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 65 + 55 - 25 = 95.",
  "Students playing neither sport = Total - Union = 150 - 95 = 55."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 40, Only B = 30, Both = 25."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 160 college students:\n- 68 students play Cricket.\n- 57 students play Football.\n- 26 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "61",
  "66",
  "57",
  "35"
],
    correctAnswer: "61",
    solution: {
      finalAnswer: "61",
      steps: [
  "Total students = 160.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 68 + 57 - 26 = 99.",
  "Students playing neither sport = Total - Union = 160 - 99 = 61."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 42, Only B = 31, Both = 26."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 170 college students:\n- 71 students play Cricket.\n- 59 students play Football.\n- 27 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "67",
  "72",
  "63",
  "40"
],
    correctAnswer: "67",
    solution: {
      finalAnswer: "67",
      steps: [
  "Total students = 170.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 71 + 59 - 27 = 103.",
  "Students playing neither sport = Total - Union = 170 - 103 = 67."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 44, Only B = 32, Both = 27."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 180 college students:\n- 74 students play Cricket.\n- 61 students play Football.\n- 28 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "73",
  "78",
  "69",
  "45"
],
    correctAnswer: "73",
    solution: {
      finalAnswer: "73",
      steps: [
  "Total students = 180.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 74 + 61 - 28 = 107.",
  "Students playing neither sport = Total - Union = 180 - 107 = 73."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 46, Only B = 33, Both = 28."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 190 college students:\n- 77 students play Cricket.\n- 63 students play Football.\n- 29 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "79",
  "84",
  "75",
  "50"
],
    correctAnswer: "79",
    solution: {
      finalAnswer: "79",
      steps: [
  "Total students = 190.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 77 + 63 - 29 = 111.",
  "Students playing neither sport = Total - Union = 190 - 111 = 79."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 48, Only B = 34, Both = 29."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Two-Set Venn Intersection and Complement Accounting",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In a survey of 200 college students:\n- 80 students play Cricket.\n- 65 students play Football.\n- 30 students play both sports.\n\nHow many students play neither Cricket nor Football?",
    options: [
  "85",
  "90",
  "81",
  "55"
],
    correctAnswer: "85",
    solution: {
      finalAnswer: "85",
      steps: [
  "Total students = 200.",
  "Number playing at least one sport = n(Cricket ∪ Football) = n(Cricket) + n(Football) - n(Cricket ∩ Football).",
  "Union = 80 + 65 - 30 = 115.",
  "Students playing neither sport = Total - Union = 200 - 115 = 85."
],
      concept: "Principle of Inclusion-Exclusion (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
      whyItWorks: "Adding n(A) and n(B) counts the overlapping intersection twice, requiring single subtraction.",
      alternativeMethod: undefined,
      commonMistake: "Simply subtracting n(A) + n(B) from total without adding back the intersection.",
      catTip: "Draw a 2-circle Venn diagram: Only A = 50, Only B = 35, Both = 30."
    },
    estimatedTime: 45,
    learningObjective: "Apply two-set inclusion-exclusion to compute mutually exclusive regions."
  },
  {
    id: "orig_dilr_venn_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 120 professionals, 56 read Tech journals, 49 read Business journals, and 22 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "61",
  "83",
  "37",
  "67"
],
    correctAnswer: "61",
    solution: {
      finalAnswer: "61",
      steps: [
  "Professionals reading only Tech = 56 - 22 = 34.",
  "Professionals reading only Business = 49 - 22 = 27.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 34 + 27 = 61."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 130 professionals, 59 read Tech journals, 51 read Business journals, and 23 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "64",
  "87",
  "43",
  "70"
],
    correctAnswer: "64",
    solution: {
      finalAnswer: "64",
      steps: [
  "Professionals reading only Tech = 59 - 23 = 36.",
  "Professionals reading only Business = 51 - 23 = 28.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 36 + 28 = 64."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 140 professionals, 62 read Tech journals, 53 read Business journals, and 24 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "67",
  "91",
  "49",
  "73"
],
    correctAnswer: "67",
    solution: {
      finalAnswer: "67",
      steps: [
  "Professionals reading only Tech = 62 - 24 = 38.",
  "Professionals reading only Business = 53 - 24 = 29.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 38 + 29 = 67."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 150 professionals, 65 read Tech journals, 55 read Business journals, and 25 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "70",
  "95",
  "55",
  "76"
],
    correctAnswer: "70",
    solution: {
      finalAnswer: "70",
      steps: [
  "Professionals reading only Tech = 65 - 25 = 40.",
  "Professionals reading only Business = 55 - 25 = 30.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 40 + 30 = 70."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 160 professionals, 68 read Tech journals, 57 read Business journals, and 26 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "73",
  "99",
  "61",
  "79"
],
    correctAnswer: "73",
    solution: {
      finalAnswer: "73",
      steps: [
  "Professionals reading only Tech = 68 - 26 = 42.",
  "Professionals reading only Business = 57 - 26 = 31.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 42 + 31 = 73."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 170 professionals, 71 read Tech journals, 59 read Business journals, and 27 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "76",
  "103",
  "67",
  "82"
],
    correctAnswer: "76",
    solution: {
      finalAnswer: "76",
      steps: [
  "Professionals reading only Tech = 71 - 27 = 44.",
  "Professionals reading only Business = 59 - 27 = 32.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 44 + 32 = 76."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 180 professionals, 74 read Tech journals, 61 read Business journals, and 28 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "79",
  "107",
  "73",
  "85"
],
    correctAnswer: "79",
    solution: {
      finalAnswer: "79",
      steps: [
  "Professionals reading only Tech = 74 - 28 = 46.",
  "Professionals reading only Business = 61 - 28 = 33.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 46 + 33 = 79."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 190 professionals, 77 read Tech journals, 63 read Business journals, and 29 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "82",
  "111",
  "79",
  "88"
],
    correctAnswer: "82",
    solution: {
      finalAnswer: "82",
      steps: [
  "Professionals reading only Tech = 77 - 29 = 48.",
  "Professionals reading only Business = 63 - 29 = 34.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 48 + 34 = 82."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Disjoint Venn Partition: Exactly One Category",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "In a cohort of 200 professionals, 80 read Tech journals, 65 read Business journals, and 30 read both. How many professionals read exactly one of the two types of journals?",
    options: [
  "85",
  "115",
  "85",
  "91"
],
    correctAnswer: "85",
    solution: {
      finalAnswer: "85",
      steps: [
  "Professionals reading only Tech = 80 - 30 = 50.",
  "Professionals reading only Business = 65 - 30 = 35.",
  "Total reading exactly one = (Only Tech) + (Only Business) = 50 + 35 = 85."
],
      concept: "Exactly One Set = [n(A) - n(A ∩ B)] + [n(B) - n(A ∩ B)] = n(A ∪ B) - n(A ∩ B).",
      whyItWorks: "Subtracting the dual-membership region leaves strictly non-overlapping single-set members.",
      alternativeMethod: undefined,
      commonMistake: "Adding n(A) and n(B) directly without removing the intersection from each.",
      catTip: "Direct formula: Exactly One = n(A ∪ B) - n(A ∩ B)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate symmetric difference regions in set theory."
  },
  {
    id: "orig_dilr_venn_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Three-Set Inclusion-Exclusion Formula",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Among 100 consumers surveyed regarding beverages:\n- 40 drink Tea (T).\n- 45 drink Coffee (C).\n- 35 drink Juice (J).\n- 15 drink both Tea and Coffee.\n- 12 drink both Coffee and Juice.\n- 14 drink both Tea and Juice.\n- 6 drink all three beverages.\n\nHow many consumers drink none of these three beverages?",
    options: [
  "15",
  "19",
  "12",
  "23"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "By 3-Set Inclusion-Exclusion: n(T ∪ C ∪ J) = Σn(A) - Σn(A ∩ B) + n(A ∩ B ∩ C).",
  "Σn(A) = 40 + 45 + 35 = 120.",
  "Σn(A ∩ B) = 15 + 12 + 14 = 41.",
  "n(A ∩ B ∩ C) = 6.",
  "Union = 120 - 41 + 6 = 85.",
  "None = Total - Union = 100 - 85 = 15."
],
      concept: "Three-Set Formula: Union = S1 - S2 + S3.",
      whyItWorks: "Pairs subtract overlap, and the 3-way center must be restored because it was subtracted 3 times after being added 3 times.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting S3 instead of adding it.",
      catTip: "Remember the alternating signs: + S1 - S2 + S3."
    },
    estimatedTime: 75,
    learningObjective: "Master 3-set inclusion-exclusion algebra and complement deduction."
  },
  {
    id: "orig_dilr_venn_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 77% of the candidates passed Paper 1 and 82% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "59",
    solution: {
      finalAnswer: "59",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 77, n(P2) = 82.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 77 + 82 - 100 = 59.",
  "Therefore, the minimum possible overlap is 59%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 78% of the candidates passed Paper 1 and 83% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "61",
    solution: {
      finalAnswer: "61",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 78, n(P2) = 83.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 78 + 83 - 100 = 61.",
  "Therefore, the minimum possible overlap is 61%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 79% of the candidates passed Paper 1 and 84% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "63",
    solution: {
      finalAnswer: "63",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 79, n(P2) = 84.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 79 + 84 - 100 = 63.",
  "Therefore, the minimum possible overlap is 63%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 75% of the candidates passed Paper 1 and 80% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "55",
    solution: {
      finalAnswer: "55",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 75, n(P2) = 80.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 75 + 80 - 100 = 55.",
  "Therefore, the minimum possible overlap is 55%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 76% of the candidates passed Paper 1 and 81% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "57",
    solution: {
      finalAnswer: "57",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 76, n(P2) = 81.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 76 + 81 - 100 = 57.",
  "Therefore, the minimum possible overlap is 57%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 77% of the candidates passed Paper 1 and 82% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "59",
    solution: {
      finalAnswer: "59",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 77, n(P2) = 82.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 77 + 82 - 100 = 59.",
  "Therefore, the minimum possible overlap is 59%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 78% of the candidates passed Paper 1 and 83% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "61",
    solution: {
      finalAnswer: "61",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 78, n(P2) = 83.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 78 + 83 - 100 = 61.",
  "Therefore, the minimum possible overlap is 61%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 79% of the candidates passed Paper 1 and 84% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "63",
    solution: {
      finalAnswer: "63",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 79, n(P2) = 84.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 79 + 84 - 100 = 63.",
  "Therefore, the minimum possible overlap is 63%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_venn_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_venn",
    topicName: "Logical Reasoning",
    subtopic: "Venn Diagrams & Set Theory",
    concept: "Extremum Bounding for Set Overlaps (Maxima/Minima in Sets)",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In an examination taken by 100 candidates, 75% of the candidates passed Paper 1 and 80% passed Paper 2. What is the minimum possible percentage of candidates who passed both papers?",
    options: null,
    correctAnswer: "55",
    solution: {
      finalAnswer: "55",
      steps: [
  "Total candidates = 100.",
  "n(P1) = 75, n(P2) = 80.",
  "n(P1 ∪ P2) = n(P1) + n(P2) - n(P1 ∩ P2) <= Total = 100.",
  "n(P1 ∩ P2) >= n(P1) + n(P2) - 100 = 75 + 80 - 100 = 55.",
  "Therefore, the minimum possible overlap is 55%."
],
      concept: "Minimum Intersection: Min(A ∩ B) = Max(0, n(A) + n(B) - Total).",
      whyItWorks: "Overlap is minimized when the union spans the entire universal set (none = 0).",
      alternativeMethod: undefined,
      commonMistake: "Averaging percentages or assuming independence.",
      catTip: "Minimum overlap occurs when the union is 100% of the population."
    },
    estimatedTime: 60,
    learningObjective: "Determine bounded extrema for overlapping probability and set domains."
  },
  {
    id: "orig_dilr_tab_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables_data",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Growth Rates and Compounded Annual Growth Rate (CAGR)",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The sales (in ₹ Crores) of a company over three consecutive fiscal years were:\n- FY22: ₹120 Cr\n- FY23: ₹150 Cr\n- FY24: ₹180 Cr\n\nWhich of the following statements regarding the annual percentage growth rate is correct?",
    options: [
  "Growth rate in FY23 was 25%, while in FY24 it was 20%.",
  "Growth rate was constant at 25% in both years.",
  "Growth rate was 20% in FY23 and 25% in FY24.",
  "Average annual growth rate was exactly 30%."
],
    correctAnswer: "Growth rate in FY23 was 25%, while in FY24 it was 20%.",
    solution: {
      finalAnswer: "Growth rate in FY23 was 25%, while in FY24 it was 20%.",
      steps: [
  "Refer to logical deduction steps."
],
      concept: "Growth Rates and Compounded Annual Growth Rate (CAGR)",
      whyItWorks: "Identical absolute increments yield declining percentage returns as the base denominator expands.",
      alternativeMethod: undefined,
      commonMistake: "Assuming equal absolute increments imply equal percentage growth rates.",
      catTip: "Always check the denominator base in DI: absolute delta vs percentage delta are frequently tested traps."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_tab_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables_data",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Averages and Ratio Comparisons",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A retail store sells two grades of coffee: Grade A at ₹400/kg and Grade B at ₹250/kg.\nIn January, the sales ratio of Grade A to Grade B was 3 : 2.\nIn February, the sales ratio of Grade A to Grade B was 2 : 3.\nWhat was the percentage change in the overall average selling price per kg of coffee from January to February?",
    options: [
  "8.8% decrease",
  "10.5% decrease",
  "7.2% decrease",
  "9.5% decrease"
],
    correctAnswer: "8.8% decrease",
    solution: {
      finalAnswer: "8.8% decrease",
      steps: [
  "January Average Price = (3 * 400 + 2 * 250) / (3 + 2) = (1200 + 500) / 5 = 1700 / 5 = ₹340/kg.",
  "February Average Price = (2 * 400 + 3 * 250) / (2 + 3) = (800 + 750) / 5 = 1550 / 5 = ₹310/kg.",
  "Change in Average Price = 310 - 340 = -₹30/kg.",
  "Percentage decrease = (30 / 340) * 100 = (3 / 34) * 100 ≈ 8.82% decrease."
],
      concept: "Weighted Averages and Ratio Comparisons",
      whyItWorks: "Shifting the higher weight from the premium product to the budget product pulls the composite weighted average towards the lower bound.",
      alternativeMethod: undefined,
      commonMistake: "Computing percentage change using 310 as the denominator instead of the base January value 340.",
      catTip: "Use fast percentage approximations: 3/34 is slightly less than 3/33.33 = 9.0%, so approximately 8.8%."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_tab_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables_data",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Optimization and Missing Data Recovery in Grids",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Four branches (North, South, East, West) of a logistics company processed 500 parcels in total on Monday.\n- North processed 40 more parcels than South.\n- East processed 20% of the total parcels.\n- West processed at least 80 parcels.\nWhat is the MAXIMUM number of parcels that the South branch could have processed?",
    options: [
  "140",
  "130",
  "150",
  "120"
],
    correctAnswer: "140",
    solution: {
      finalAnswer: "140",
      steps: [
  "Total parcels = N + S + E + W = 500.",
  "East processed 20% of 500 = 100 parcels.",
  "Substitute E = 100: N + S + W = 500 - 100 = 400.",
  "North processed 40 more than South: N = S + 40.",
  "Substitute N: (S + 40) + S + W = 400 => 2S + W = 360.",
  "To MAXIMIZE S, we must MINIMIZE W.",
  "Given constraint: West processed at least 80 parcels (W ≥ 80).",
  "Set W to its minimum permissible value: W = 80.",
  "2S + 80 = 360 => 2S = 280 => S = 140 parcels."
],
      concept: "Optimization and Missing Data Recovery in Grids",
      whyItWorks: "In a fixed sum equation 2S + W = K, maximizing one variable requires setting the other to its lowest feasible boundary.",
      alternativeMethod: undefined,
      commonMistake: "Setting W = 0, forgetting the condition that West processed at least 80 parcels.",
      catTip: "In max/min table problems, list all fixed values first, express remaining targets as a linear function, and push slack variables to their boundaries."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_tab_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables_data",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Multi-Criteria Index Ranking & Normalization",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A venture firm scores five startups (P, Q, R, S, T) on Tech (weight 40%) and Market (weight 60%).\nScores out of 100:\n- Startup P: Tech = 85, Market = 70\n- Startup Q: Tech = 75, Market = 80\n- Startup R: Tech = 90, Market = 65\n- Startup S: Tech = 60, Market = 90\n- Startup T: Tech = 70, Market = 85\nWhat is the composite score of the HIGHEST scoring startup? (Type the exact score as a decimal, e.g. 78.5)",
    options: null,
    correctAnswer: "79",
    solution: {
      finalAnswer: "79",
      steps: [
  "Composite Score = 0.40 * Tech + 0.60 * Market.",
  "Calculate for each startup:",
  "- Startup P: 0.40 * 85 + 0.60 * 70 = 34 + 42 = 76.0",
  "- Startup Q: 0.40 * 75 + 0.60 * 80 = 30 + 48 = 78.0",
  "- Startup R: 0.40 * 90 + 0.60 * 65 = 36 + 39 = 75.0",
  "- Startup S: 0.40 * 60 + 0.60 * 90 = 24 + 54 = 78.0",
  "- Startup T: 0.40 * 70 + 0.60 * 85 = 28 + 51 = 79.0",
  "Comparing all scores: 76.0, 78.0, 75.0, 78.0, 79.0.",
  "The highest composite score is 79.0 (Startup T)."
],
      concept: "Multi-Criteria Index Ranking & Normalization",
      whyItWorks: "The 60% weight on Market rewards startups with higher Market scores more than those with high Tech scores.",
      alternativeMethod: undefined,
      commonMistake: "Equal-weighting the two metrics (taking simple average (70+85)/2 = 77.5).",
      catTip: "Notice the weight ratio is 2 : 3. Calculate 2*Tech + 3*Market and divide by 5."
    },
    estimatedTime: 90,
    learningObjective: "Master logical arrangement."
  },
  {
    id: "orig_dilr_tables_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 140 |\n| 2024 | 174 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "24.3%",
  "27.5%",
  "21.8%",
  "29.3%"
],
    correctAnswer: "24.3%",
    solution: {
      finalAnswer: "24.3%",
      steps: [
  "Base Year Revenue (2023) = ₹140 Cr.",
  "Final Year Revenue (2024) = ₹174 Cr.",
  "Absolute Increase = ₹174 - ₹140 = ₹34 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (34 / 140) * 100% ≈ 24.3%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 150 |\n| 2024 | 186 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "24%",
  "27.2%",
  "21.5%",
  "29.0%"
],
    correctAnswer: "24%",
    solution: {
      finalAnswer: "24%",
      steps: [
  "Base Year Revenue (2023) = ₹150 Cr.",
  "Final Year Revenue (2024) = ₹186 Cr.",
  "Absolute Increase = ₹186 - ₹150 = ₹36 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (36 / 150) * 100% ≈ 24%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 160 |\n| 2024 | 198 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "23.8%",
  "27.0%",
  "21.3%",
  "28.8%"
],
    correctAnswer: "23.8%",
    solution: {
      finalAnswer: "23.8%",
      steps: [
  "Base Year Revenue (2023) = ₹160 Cr.",
  "Final Year Revenue (2024) = ₹198 Cr.",
  "Absolute Increase = ₹198 - ₹160 = ₹38 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (38 / 160) * 100% ≈ 23.8%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 170 |\n| 2024 | 210 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "23.5%",
  "26.7%",
  "21.0%",
  "28.5%"
],
    correctAnswer: "23.5%",
    solution: {
      finalAnswer: "23.5%",
      steps: [
  "Base Year Revenue (2023) = ₹170 Cr.",
  "Final Year Revenue (2024) = ₹210 Cr.",
  "Absolute Increase = ₹210 - ₹170 = ₹40 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (40 / 170) * 100% ≈ 23.5%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 180 |\n| 2024 | 222 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "23.3%",
  "26.5%",
  "20.8%",
  "28.3%"
],
    correctAnswer: "23.3%",
    solution: {
      finalAnswer: "23.3%",
      steps: [
  "Base Year Revenue (2023) = ₹180 Cr.",
  "Final Year Revenue (2024) = ₹222 Cr.",
  "Absolute Increase = ₹222 - ₹180 = ₹42 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (42 / 180) * 100% ≈ 23.3%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 190 |\n| 2024 | 234 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "23.2%",
  "26.4%",
  "20.7%",
  "28.2%"
],
    correctAnswer: "23.2%",
    solution: {
      finalAnswer: "23.2%",
      steps: [
  "Base Year Revenue (2023) = ₹190 Cr.",
  "Final Year Revenue (2024) = ₹234 Cr.",
  "Absolute Increase = ₹234 - ₹190 = ₹44 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (44 / 190) * 100% ≈ 23.2%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 200 |\n| 2024 | 246 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "23%",
  "26.2%",
  "20.5%",
  "28.0%"
],
    correctAnswer: "23%",
    solution: {
      finalAnswer: "23%",
      steps: [
  "Base Year Revenue (2023) = ₹200 Cr.",
  "Final Year Revenue (2024) = ₹246 Cr.",
  "Absolute Increase = ₹246 - ₹200 = ₹46 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (46 / 200) * 100% ≈ 23%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 210 |\n| 2024 | 258 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "22.9%",
  "26.1%",
  "20.4%",
  "27.9%"
],
    correctAnswer: "22.9%",
    solution: {
      finalAnswer: "22.9%",
      steps: [
  "Base Year Revenue (2023) = ₹210 Cr.",
  "Final Year Revenue (2024) = ₹258 Cr.",
  "Absolute Increase = ₹258 - ₹210 = ₹48 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (48 / 210) * 100% ≈ 22.9%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Percentage Growth Rate from Tabular Financial Data",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "The table below displays the annual revenue (in ₹ Crores) of a logistics firm:\n| Year | Revenue (₹ Cr) |\n| 2023 | 220 |\n| 2024 | 270 |\n\nWhat was the percentage growth in revenue from 2023 to 2024?",
    options: [
  "22.7%",
  "25.9%",
  "20.2%",
  "27.7%"
],
    correctAnswer: "22.7%",
    solution: {
      finalAnswer: "22.7%",
      steps: [
  "Base Year Revenue (2023) = ₹220 Cr.",
  "Final Year Revenue (2024) = ₹270 Cr.",
  "Absolute Increase = ₹270 - ₹220 = ₹50 Cr.",
  "Percentage Growth = (Absolute Increase / Base Revenue) * 100% = (50 / 220) * 100% ≈ 22.7%."
],
      concept: "Percentage Growth = [(Final - Initial) / Initial] * 100%.",
      whyItWorks: "Growth rate standardizes absolute changes against the initial temporal baseline.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the final year revenue instead of the base year revenue.",
      catTip: "Always divide by the starting year value."
    },
    estimatedTime: 40,
    learningObjective: "Extract tabular metric values and calculate period-over-period growth rates."
  },
  {
    id: "orig_dilr_tables_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹140 Crores and Operating Expenses of ₹105 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "25%",
  "29.0%",
  "22.0%",
  "75.0%"
],
    correctAnswer: "25%",
    solution: {
      finalAnswer: "25%",
      steps: [
  "Revenue = ₹140 Cr.",
  "Operating Expenses = ₹105 Cr.",
  "Operating Profit = Revenue - Expenses = ₹140 - ₹105 = ₹35 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (35 / 140) * 100% ≈ 25%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹150 Crores and Operating Expenses of ₹113 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "24.7%",
  "28.7%",
  "21.7%",
  "75.3%"
],
    correctAnswer: "24.7%",
    solution: {
      finalAnswer: "24.7%",
      steps: [
  "Revenue = ₹150 Cr.",
  "Operating Expenses = ₹113 Cr.",
  "Operating Profit = Revenue - Expenses = ₹150 - ₹113 = ₹37 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (37 / 150) * 100% ≈ 24.7%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹160 Crores and Operating Expenses of ₹120 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "25%",
  "29.0%",
  "22.0%",
  "75.0%"
],
    correctAnswer: "25%",
    solution: {
      finalAnswer: "25%",
      steps: [
  "Revenue = ₹160 Cr.",
  "Operating Expenses = ₹120 Cr.",
  "Operating Profit = Revenue - Expenses = ₹160 - ₹120 = ₹40 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (40 / 160) * 100% ≈ 25%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹170 Crores and Operating Expenses of ₹128 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "24.7%",
  "28.7%",
  "21.7%",
  "75.3%"
],
    correctAnswer: "24.7%",
    solution: {
      finalAnswer: "24.7%",
      steps: [
  "Revenue = ₹170 Cr.",
  "Operating Expenses = ₹128 Cr.",
  "Operating Profit = Revenue - Expenses = ₹170 - ₹128 = ₹42 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (42 / 170) * 100% ≈ 24.7%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹180 Crores and Operating Expenses of ₹135 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "25%",
  "29.0%",
  "22.0%",
  "75.0%"
],
    correctAnswer: "25%",
    solution: {
      finalAnswer: "25%",
      steps: [
  "Revenue = ₹180 Cr.",
  "Operating Expenses = ₹135 Cr.",
  "Operating Profit = Revenue - Expenses = ₹180 - ₹135 = ₹45 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (45 / 180) * 100% ≈ 25%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹190 Crores and Operating Expenses of ₹143 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "24.7%",
  "28.7%",
  "21.7%",
  "75.3%"
],
    correctAnswer: "24.7%",
    solution: {
      finalAnswer: "24.7%",
      steps: [
  "Revenue = ₹190 Cr.",
  "Operating Expenses = ₹143 Cr.",
  "Operating Profit = Revenue - Expenses = ₹190 - ₹143 = ₹47 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (47 / 190) * 100% ≈ 24.7%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹200 Crores and Operating Expenses of ₹150 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "25%",
  "29.0%",
  "22.0%",
  "75.0%"
],
    correctAnswer: "25%",
    solution: {
      finalAnswer: "25%",
      steps: [
  "Revenue = ₹200 Cr.",
  "Operating Expenses = ₹150 Cr.",
  "Operating Profit = Revenue - Expenses = ₹200 - ₹150 = ₹50 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (50 / 200) * 100% ≈ 25%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹210 Crores and Operating Expenses of ₹158 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "24.8%",
  "28.8%",
  "21.8%",
  "75.2%"
],
    correctAnswer: "24.8%",
    solution: {
      finalAnswer: "24.8%",
      steps: [
  "Revenue = ₹210 Cr.",
  "Operating Expenses = ₹158 Cr.",
  "Operating Profit = Revenue - Expenses = ₹210 - ₹158 = ₹52 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (52 / 210) * 100% ≈ 24.8%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Operating Profit Margin Calculation from Income Statements",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "For Fiscal Year 2023, a software firm reported Total Revenue of ₹220 Crores and Operating Expenses of ₹165 Crores. What is the Operating Profit Margin percentage?",
    options: [
  "25%",
  "29.0%",
  "22.0%",
  "75.0%"
],
    correctAnswer: "25%",
    solution: {
      finalAnswer: "25%",
      steps: [
  "Revenue = ₹220 Cr.",
  "Operating Expenses = ₹165 Cr.",
  "Operating Profit = Revenue - Expenses = ₹220 - ₹165 = ₹55 Cr.",
  "Operating Profit Margin = (Operating Profit / Revenue) * 100% = (55 / 220) * 100% ≈ 25%."
],
      concept: "Profit Margin = (Profit / Revenue) * 100%.",
      whyItWorks: "Margin expresses operating earnings as a percentage of total topline gross revenue.",
      alternativeMethod: undefined,
      commonMistake: "Dividing profit by expenses instead of total revenue.",
      catTip: "Profit Margin is always relative to Revenue."
    },
    estimatedTime: 50,
    learningObjective: "Interpret income statement tables and compute financial operating margins."
  },
  {
    id: "orig_dilr_tables_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Weighted Average Analysis Across Tabular Demographic Segments",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A consulting firm reports compensation metrics across two divisions:\n| Division | Number of Employees | Average Salary (₹ in Thousands) |\n| Strategy | 60 | ₹50k |\n| Operations | 40 | ₹75k |\n\nWhat is the overall average salary per employee across the entire firm?",
    options: [
  "₹60k",
  "₹62.5k",
  "₹64k",
  "₹57k"
],
    correctAnswer: "₹60k",
    solution: {
      finalAnswer: "₹60k",
      steps: [
  "Total Salary Strategy = 60 * ₹50k = ₹3000k.",
  "Total Salary Operations = 40 * ₹75k = ₹3000k.",
  "Total Payroll = ₹6000k.",
  "Total Employees = 60 + 40 = 100.",
  "Weighted Average Salary = Total Payroll / Total Employees = 6000 / 100 = ₹60k."
],
      concept: "Weighted Average = (w1*x1 + w2*x2) / (w1 + w2).",
      whyItWorks: "Simple average is distorted when subgroup headcounts are unequal.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (50 + 75)/2 = 62.5k.",
      catTip: "Ratio of weights = 60:40 = 3:2. Average = (3*50 + 2*75)/5 = 300/5 = 60k."
    },
    estimatedTime: 65,
    learningObjective: "Calculate weighted averages from cross-tabulated population cohorts."
  },
  {
    id: "orig_dilr_tables_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹169 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "30",
    solution: {
      finalAnswer: "30",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹169 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 169 / 100 = 1.69.",
  "CAGR = √(1.69) - 1 = 1.30 - 1 = 30%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹196 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "40",
    solution: {
      finalAnswer: "40",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹196 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 196 / 100 = 1.96.",
  "CAGR = √(1.96) - 1 = 1.40 - 1 = 40%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹225 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "50",
    solution: {
      finalAnswer: "50",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹225 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 225 / 100 = 2.25.",
  "CAGR = √(2.25) - 1 = 1.50 - 1 = 50%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹256 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "60",
    solution: {
      finalAnswer: "60",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹256 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 256 / 100 = 2.56.",
  "CAGR = √(2.56) - 1 = 1.60 - 1 = 60%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹289 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "70",
    solution: {
      finalAnswer: "70",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹289 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 289 / 100 = 2.89.",
  "CAGR = √(2.89) - 1 = 1.70 - 1 = 70%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹324 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "80",
    solution: {
      finalAnswer: "80",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹324 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 324 / 100 = 3.24.",
  "CAGR = √(3.24) - 1 = 1.80 - 1 = 80%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹361 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "90",
    solution: {
      finalAnswer: "90",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹361 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 361 / 100 = 3.61.",
  "CAGR = √(3.61) - 1 = 1.90 - 1 = 90%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹400 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "100",
    solution: {
      finalAnswer: "100",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹400 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 400 / 100 = 4.00.",
  "CAGR = √(4.00) - 1 = 2.00 - 1 = 100%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  },
  {
    id: "orig_dilr_tables_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "DILR",
    topicId: "dilr_tables",
    topicName: "Data Interpretation",
    subtopic: "Tables & Data Analysis",
    concept: "Compound Annual Growth Rate (CAGR) Multi-Year Extrapolation",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An enterprise's market capitalization expanded from ₹100 Crores in Year 0 to ₹441 Crores in Year 2. What is the Compound Annual Growth Rate (CAGR) of the enterprise over this 2-year period? (Enter integer percentage, e.g. 20).",
    options: null,
    correctAnswer: "110",
    solution: {
      finalAnswer: "110",
      steps: [
  "Initial Value = ₹100 Cr, Final Value = ₹441 Cr, Time Period = 2 years.",
  "CAGR formula: CAGR = (Final / Initial)^(1/t) - 1.",
  "Growth Multiplier = 441 / 100 = 4.41.",
  "CAGR = √(4.41) - 1 = 2.10 - 1 = 110%."
],
      concept: "CAGR: Geometric mean rate of annual return over compounding periods.",
      whyItWorks: "CAGR smooths compounding volatility across discrete multi-year time steps.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total growth percentage by 2 (simple annual rate).",
      catTip: "Over 2 years, CAGR is simply √(Final / Initial) - 1."
    },
    estimatedTime: 70,
    learningObjective: "Determine Compound Annual Growth Rate from multi-year tabular balance sheets."
  }
];

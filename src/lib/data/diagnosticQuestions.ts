import { DiagnosticQuestion } from '../types/adaptive';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // --- VARC (Questions 1 - 4) ---
  {
    id: 'diag_varc_1',
    section: 'VARC',
    topicId: 'rc_main_idea',
    topicName: 'Reading Comprehension',
    difficulty: 'EASY',
    questionType: 'MCQ',
    questionText: `Passage excerpt:
"The proliferation of algorithmic decision-making across criminal justice, credit scoring, and hiring has frequently been heralded as an antidote to human cognitive bias. Yet, machine learning models do not operate in a vacuum; they ingest historical training datasets that inevitably codify and amplify existing social disparities. When a risk-assessment algorithm predicts recidivism using arrest statistics rather than actual offense rates, it is not neutral mathematics at work—it is the systemic re-inscription of historical over-policing masquerading as empirical objectivity."

Which of the following best expresses the primary contention of the author?`,
    options: [
      'Algorithmic decision-making is fundamentally incapable of processing quantitative sociological datasets.',
      'Human cognitive bias is systematically less dangerous than algorithmic bias in judicial decisions.',
      'Predictive algorithms risk institutionalizing historical inequalities under the guise of computational objectivity.',
      'Arrest records should be replaced entirely with subjective human assessments in credit scoring.'
    ],
    correctAnswer: 'Predictive algorithms risk institutionalizing historical inequalities under the guise of computational objectivity.',
    explanation: 'The author directly asserts that algorithms ingest historical training data that codify and amplify social disparities, functioning as systemic re-inscription masquerading as empirical objectivity.'
  },
  {
    id: 'diag_varc_2',
    section: 'VARC',
    topicId: 'cr_argument',
    topicName: 'Critical Reasoning',
    difficulty: 'MODERATE',
    questionType: 'MCQ',
    questionText: `Argument:
"City planners in Metroville observed that implementing a dedicated express bus lane on Main Corridor reduced average public transit commute times by 22%. Consequently, the city council has resolved to convert one lane of every major four-lane arterial road in the city into an express bus lane, arguing that this will decrease overall vehicular congestion citywide."

Which of the following, if true, most seriously weakens the city council’s argument?`,
    options: [
      'Public transit bus ridership on Main Corridor was already the highest in the metropolitan area before the lane was dedicated.',
      'Express bus lanes require quarterly maintenance costing marginally more than standard asphalt lanes.',
      'On suburban arterial roads, private vehicle volume is twelve times greater than bus capacity, and removing a general lane creates bottleneck gridlock that spills into residential feeder roads.',
      'Several neighboring municipalities have commissioned feasibility studies on rapid transit systems.'
    ],
    correctAnswer: 'On suburban arterial roads, private vehicle volume is twelve times greater than bus capacity, and removing a general lane creates bottleneck gridlock that spills into residential feeder roads.',
    explanation: 'If vehicle volume dwarfs bus capacity on suburban roads, eliminating a vehicular lane worsens citywide gridlock rather than decreasing congestion, directly breaking the council\'s causal link.'
  },
  {
    id: 'diag_varc_3',
    section: 'VARC',
    topicId: 'para_jumbles',
    topicName: 'Para Jumbles',
    difficulty: 'MODERATE',
    questionType: 'TITA',
    questionText: `The four sentences (labelled 1, 2, 3, 4) below, when properly sequenced, would yield a coherent paragraph. Decide on the proper sequence of the numbers and type the 4-digit sequence as your answer.

1. Such institutional memory enables migratory species to traverse thousands of miles with pinpoint navigational fidelity.
2. Rather than being purely instinctive, this spatial cartography is continuously refined through intergenerational cultural transmission.
3. Recent ethological research reveals that flock leaders among whooping cranes do not rely solely on geomagnetic receptors.
4. Older, experienced birds actively correct the drift vectors of younger flock members during cross-continental flights.`,
    correctAnswer: '3421',
    explanation: 'Sentence 3 introduces the subject (whooping crane flock leaders not relying solely on geomagnetic cues). Sentence 4 elaborates on what they actually do (older birds correcting younger birds). Sentence 2 categorizes this interaction as intergenerational transmission / spatial cartography. Sentence 1 concludes with the overarching impact (such institutional memory enabling long-distance navigation). Sequence: 3421.'
  },
  {
    id: 'diag_varc_4',
    section: 'VARC',
    topicId: 'para_summary',
    topicName: 'Para Summary',
    difficulty: 'EASY',
    questionType: 'MCQ',
    questionText: `Read the following paragraph and select the option that best captures its essence:

"Throughout economic history, monetary regimes have derived legitimacy not from intrinsic metallurgic value, but from reciprocal socio-political trust. When governments debase currency or overextend sovereign credit, inflation does not merely diminish purchasing power; it corrodes the unspoken social compact between citizenry and state, precipitating civic disengagement and institutional fragility."`,
    options: [
      'Currency debasement is primarily a fiscal oversight that can be remedied through gold-backed monetary standards.',
      'Monetary stability is intrinsically anchored in socio-political trust, and currency debasement fundamentally undermines the covenant between state and citizens.',
      'Inflation is an inevitable byproduct of expanding sovereign credit in developing representative democracies.',
      'Societies collapse when governments replace tangible metallurgic coins with modern digital promissory notes.'
    ],
    correctAnswer: 'Monetary stability is intrinsically anchored in socio-political trust, and currency debasement fundamentally undermines the covenant between state and citizens.',
    explanation: 'The paragraph centers on monetary legitimacy as an outcome of socio-political trust, explaining that debasement damages the fundamental social compact between state and citizen.'
  },

  // --- DILR (Questions 5 - 8) ---
  {
    id: 'diag_dilr_1',
    section: 'DILR',
    topicId: 'linear_arrangements',
    topicName: 'Linear Arrangements',
    difficulty: 'EASY',
    questionType: 'MCQ',
    questionText: `Five senior executives—A, B, C, D, and E—sit in a straight row of consecutive seats facing north in an auditorium.
Conditions:
1. C sits exactly in the middle seat.
2. A is seated to the immediate left of B.
3. D is not seated at either extreme end.
4. E is seated to the right of C.

Who sits at the extreme left end of the row?`,
    options: ['A', 'B', 'D', 'E'],
    correctAnswer: 'A',
    explanation: 'Seats: 1, 2, 3, 4, 5. Middle seat is 3, so C = 3. E is to the right of C, so E is at 4 or 5. D is not at extremes (1 or 5), so D must be at 2 or 4. A is immediately left of B, requiring two adjacent empty seats. The only available adjacent pair on the left is seats 1 and 2 (A=1, B=2). Hence A is at the extreme left (seat 1).'
  },
  {
    id: 'diag_dilr_2',
    section: 'DILR',
    topicId: 'matrix_matching',
    topicName: 'Matrix & Distribution',
    difficulty: 'MODERATE',
    questionType: 'MCQ',
    questionText: `Three project managers—Kavita, Liam, and Manish—lead three distinct departments: Fintech, Healthtech, and Edtech, using different cloud platforms: AWS, Azure, and GCP (not necessarily in that order).
1. The manager heading Healthtech does not use Azure.
2. Kavita uses GCP.
3. Manish does not manage Edtech.
4. Liam manages Fintech.

Which department does Kavita manage, and which cloud platform does Liam use?`,
    options: [
      'Kavita: Edtech; Liam: Azure',
      'Kavita: Healthtech; Liam: AWS',
      'Kavita: Edtech; Liam: AWS',
      'Kavita: Healthtech; Liam: Azure'
    ],
    correctAnswer: 'Kavita: Edtech; Liam: Azure',
    explanation: 'Liam manages Fintech. Manish does not manage Edtech, so Manish must manage Healthtech. Therefore Kavita manages Edtech. For platforms: Kavita uses GCP. Healthtech (Manish) does not use Azure, so Manish uses AWS. Consequently, Liam uses Azure.'
  },
  {
    id: 'diag_dilr_3',
    section: 'DILR',
    topicId: 'venn_diagrams',
    topicName: 'Venn Diagrams & Sets',
    difficulty: 'MODERATE',
    questionType: 'TITA',
    questionText: `In a cohort of 120 MBA candidates:
- 65 candidates opted for Business Analytics.
- 55 candidates opted for Finance.
- 50 candidates opted for Marketing.
- 25 candidates opted for both Analytics and Finance.
- 20 candidates opted for both Finance and Marketing.
- 22 candidates opted for both Analytics and Marketing.
- 10 candidates opted for all three specializations.

How many candidates did NOT opt for any of these three specializations?`,
    correctAnswer: '7',
    explanation: 'By Principle of Inclusion-Exclusion: Total with at least one = (65 + 55 + 50) - (25 + 20 + 22) + 10 = 170 - 67 + 10 = 113. Total candidates = 120. Therefore, candidates with none = 120 - 113 = 7.'
  },
  {
    id: 'diag_dilr_4',
    section: 'DILR',
    topicId: 'tables_data_analysis',
    topicName: 'Tables & Ratios',
    difficulty: 'EASY',
    questionType: 'MCQ',
    questionText: `Company X reported revenue across four quarters:
- Q1: ₹40 Crores (Expenditure: ₹30 Cr)
- Q2: ₹50 Crores (Expenditure: ₹35 Cr)
- Q3: ₹60 Crores (Expenditure: ₹42 Cr)
- Q4: ₹80 Crores (Expenditure: ₹52 Cr)

Profit Margin is defined as (Revenue - Expenditure) / Revenue. In which quarter was the Profit Margin the highest?`,
    options: ['Q1', 'Q2', 'Q3', 'Q4'],
    correctAnswer: 'Q4',
    explanation: 'Profit Margins: Q1 = (40-30)/40 = 10/40 = 25.0%. Q2 = (50-35)/50 = 15/50 = 30.0%. Q3 = (60-42)/60 = 18/60 = 30.0%. Q4 = (80-52)/80 = 28/80 = 35.0%. The highest is Q4 at 35%.'
  },

  // --- QA (Questions 9 - 12) ---
  {
    id: 'diag_qa_1',
    section: 'QA',
    topicId: 'percentages',
    topicName: 'Percentages & Arithmetic',
    difficulty: 'FOUNDATION',
    questionType: 'MCQ',
    questionText: `A shopkeeper marks an article 40% above its cost price. If he allows a discount of 25% on the marked price, what is his overall profit or loss percentage?`,
    options: ['5% Profit', '10% Profit', '5% Loss', '15% Profit'],
    correctAnswer: '5% Profit',
    explanation: 'Let Cost Price CP = 100. Marked Price MP = 100 * 1.40 = 140. Selling Price SP = 140 * (1 - 0.25) = 140 * 0.75 = 105. Net Profit = 105 - 100 = 5% Profit.'
  },
  {
    id: 'diag_qa_2',
    section: 'QA',
    topicId: 'time_and_work',
    topicName: 'Time & Work',
    difficulty: 'EASY',
    questionType: 'TITA',
    questionText: `Working alone, Ajay can complete a job in 24 days, while Binoy can complete the same job in 36 days. Ajay works alone for 6 days and then leaves. How many days will Binoy take to finish the remaining work alone?`,
    correctAnswer: '27',
    explanation: 'Let total work = LCM(24, 36) = 72 units. Ajay\'s efficiency = 72 / 24 = 3 units/day. Binoy\'s efficiency = 72 / 36 = 2 units/day. Work done by Ajay in 6 days = 6 * 3 = 18 units. Remaining work = 72 - 18 = 54 units. Time taken by Binoy = 54 / 2 = 27 days.'
  },
  {
    id: 'diag_qa_3',
    section: 'QA',
    topicId: 'algebra_quadratics',
    topicName: 'Algebra & Equations',
    difficulty: 'MODERATE',
    questionType: 'MCQ',
    questionText: `If the roots of the quadratic equation x² - (k + 2)x + (2k + 1) = 0 are equal and real, where k is a positive real number, find the value of k.`,
    options: ['2', '4', '6', '8'],
    correctAnswer: '4',
    explanation: 'For equal roots, Discriminant D = b² - 4ac = 0. Here a = 1, b = -(k + 2), c = 2k + 1. (k + 2)² - 4(1)(2k + 1) = 0 => k² + 4k + 4 - 8k - 4 = 0 => k² - 4k = 0 => k = 4 (since k is positive).'
  },
  {
    id: 'diag_qa_4',
    section: 'QA',
    topicId: 'geometry_triangles',
    topicName: 'Geometry & Mensuration',
    difficulty: 'MODERATE',
    questionType: 'MCQ',
    questionText: `In a right-angled triangle ABC, right-angled at B, AB = 12 cm and BC = 5 cm. A circle is inscribed inside triangle ABC. Find the radius of this incircle (in cm).`,
    options: ['1.5 cm', '2 cm', '2.5 cm', '3 cm'],
    correctAnswer: '2 cm',
    explanation: 'Hypotenuse AC = √(12² + 5²) = √(144 + 25) = √169 = 13 cm. In a right triangle, inradius r = (a + b - c) / 2 = (12 + 5 - 13) / 2 = 4 / 2 = 2 cm.'
  }
];

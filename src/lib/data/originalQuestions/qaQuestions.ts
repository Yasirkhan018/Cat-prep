import { OriginalQuestion } from '../../types/adaptive';

export const QA_ORIGINAL_QUESTIONS: OriginalQuestion[] = [
  {
    id: "orig_qa_perc_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Changes and Multipliers",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A trader marks up the price of a watch by 30% above its cost price and then offers a discount of 20% on the marked price. What is the trader\\'s net percentage profit or loss?",
    options: [
  "4% Profit",
  "6% Profit",
  "4% Loss",
  "10% Profit"
],
    correctAnswer: "4% Profit",
    solution: {
      finalAnswer: "4% Profit",
      steps: [
  "Let Cost Price (CP) = 100.",
  "Marked Price (MP) = 100 * (1 + 0.30) = 130.",
  "Discount is 20% on MP: Discount = 0.20 * 130 = 26.",
  "Selling Price (SP) = MP - Discount = 130 - 26 = 104.",
  "Net Profit = SP - CP = 104 - 100 = 4, so profit is 4%."
],
      concept: "Successive Percentage Changes and Multipliers",
      whyItWorks: "Percentages are applied sequentially to compounding bases: markup scales the original cost, whereas discount scales the elevated marked price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting 20% from 30% to get 10%. Discount is calculated on marked price, not on cost price!",
      catTip: "Always convert successive percentage changes into multiplicative factors: 1.30 * 0.80 = 1.04 -> +4% gain."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_perc_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy & Inverse Variation",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Due to inflation, the price of petrol increases by 25%. By what percentage must a car owner reduce fuel consumption so that total expenditure on petrol increases by only 10%?",
    options: [
  "12%",
  "15%",
  "10%",
  "8%"
],
    correctAnswer: "12%",
    solution: {
      finalAnswer: "12%",
      steps: [
  "Total Expenditure = Price * Consumption.",
  "Let initial Price = 100 and initial Consumption = 100. Initial Expenditure = 10,000.",
  "New Price = 100 * 1.25 = 125.",
  "Target Expenditure = 10,000 * 1.10 = 11,000.",
  "New Consumption = Target Expenditure / New Price = 11,000 / 125 = 88.",
  "Percentage reduction in consumption = (100 - 88)% = 12%."
],
      concept: "Product Constancy & Inverse Variation",
      whyItWorks: "Since Expenditure = P * C, (1 + e) = (1 + p) * (1 - c). Solving gives (1 - c) = (1 + e) / (1 + p).",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 10% from 25% to obtain 15% without accounting for the multiplicative relationship.",
      catTip: "Use fraction representations: 1.25 is 5/4, 1.10 is 11/10. New consumption = (11/10) / (5/4) = 44/50 = 88/100 -> 12% drop."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_perc_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Mechanics",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A dishonest merchant sells almond flour at a markup of 10% above its cost price. Furthermore, he uses a false weight that measures only 850 grams for every 1000 grams billed. What is his approximate overall percentage profit?",
    options: [
  "29.4%",
  "24.5%",
  "32.1%",
  "22.2%"
],
    correctAnswer: "29.4%",
    solution: {
      finalAnswer: "29.4%",
      steps: [
  "Let the true cost price of 1000 grams of almond flour be ₹1000 (i.e. ₹1 per gram).",
  "Marked/Selling price factor: The merchant marks up goods by 10%, so he bills the customer ₹1100 for 1000 grams.",
  "False weight factor: For a 1000-gram sale, he physically dispenses only 850 grams.",
  "Cost incurred by the merchant for 850 grams = 850 * ₹1 = ₹850.",
  "Revenue received by the merchant = ₹1100.",
  "Profit = Revenue - Cost = 1100 - 850 = ₹250.",
  "Profit Percentage = (Profit / Cost) * 100% = (250 / 850) * 100% = (5 / 17) * 100% ≈ 29.41%."
],
      concept: "Faulty Balance & Dishonest Trader Mechanics",
      whyItWorks: "The markup generates a multiplier of 1.10, and the false weight generates an additional multiplier of (1000 / 850). Net profit multiplier = 1.10 * (1000 / 850) = 1100 / 850 ≈ 1.2941 (29.4% gain).",
      alternativeMethod: undefined,
      commonMistake: "Calculating profit percentage on the nominal 1000g selling price rather than the merchant\\",
      catTip: "In dishonest dealer questions, Net Profit Multiplier = (Nominal Quantity / Actual Quantity Given) * (Selling Price Charged / True Cost Price)."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_perc_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Two-Transaction Break-Even & Marginal Profit",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dealer sold two laptops for ₹48,000 each. On the first laptop, he made a profit of 20%, and on the second laptop, he incurred a loss of 20%. What was his net overall gain or loss in rupees? (Type the magnitude in rupees as an integer; if loss of 4000, type 4000)",
    options: null,
    correctAnswer: "4000",
    solution: {
      finalAnswer: "4000",
      steps: [
  "Total Selling Price (SP) = 48,000 + 48,000 = ₹96,000.",
  "Laptop 1 was sold at 20% profit: SP1 = 1.20 * CP1 => CP1 = 48,000 / 1.2 = ₹40,000.",
  "Laptop 2 was sold at 20% loss: SP2 = 0.80 * CP2 => CP2 = 48,000 / 0.8 = ₹60,000.",
  "Total Cost Price (CP) = 40,000 + 60,000 = ₹100,000.",
  "Net result = Total SP - Total CP = 96,000 - 100,000 = -₹4,000 (Loss of ₹4,000).",
  "Magnitude in rupees = 4000."
],
      concept: "Two-Transaction Break-Even & Marginal Profit",
      whyItWorks: "Net loss % = 20² / 100 % = 4% loss on total cost price. Since Total SP = 96% of Total CP, CP = 96,000 / 0.96 = 100,000. Loss = 4,000.",
      alternativeMethod: undefined,
      commonMistake: "Assuming the transaction breaks even because the profit and loss percentages are both 20%.",
      catTip: "Remember: 20% gain on a smaller CP is strictly less money than 20% loss on a larger CP."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_arith_percentages_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹300 and marks its price up by 20%. What is the marked price of the item?",
    options: [
  "₹360",
  "₹380",
  "₹345",
  "₹395"
],
    correctAnswer: "₹360",
    solution: {
      finalAnswer: "₹360",
      steps: [
  "Cost Price (CP) = ₹300.",
  "Markup = 20% of ₹300 = (20 / 100) * 300 = ₹60.",
  "Marked Price (MP) = CP + Markup = ₹300 + ₹60 = ₹360."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹350 and marks its price up by 25%. What is the marked price of the item?",
    options: [
  "₹438",
  "₹458",
  "₹423",
  "₹473"
],
    correctAnswer: "₹438",
    solution: {
      finalAnswer: "₹438",
      steps: [
  "Cost Price (CP) = ₹350.",
  "Markup = 25% of ₹350 = (25 / 100) * 350 = ₹88.",
  "Marked Price (MP) = CP + Markup = ₹350 + ₹88 = ₹438."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹400 and marks its price up by 30%. What is the marked price of the item?",
    options: [
  "₹520",
  "₹540",
  "₹505",
  "₹555"
],
    correctAnswer: "₹520",
    solution: {
      finalAnswer: "₹520",
      steps: [
  "Cost Price (CP) = ₹400.",
  "Markup = 30% of ₹400 = (30 / 100) * 400 = ₹120.",
  "Marked Price (MP) = CP + Markup = ₹400 + ₹120 = ₹520."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹450 and marks its price up by 35%. What is the marked price of the item?",
    options: [
  "₹608",
  "₹628",
  "₹593",
  "₹643"
],
    correctAnswer: "₹608",
    solution: {
      finalAnswer: "₹608",
      steps: [
  "Cost Price (CP) = ₹450.",
  "Markup = 35% of ₹450 = (35 / 100) * 450 = ₹158.",
  "Marked Price (MP) = CP + Markup = ₹450 + ₹158 = ₹608."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹500 and marks its price up by 40%. What is the marked price of the item?",
    options: [
  "₹700",
  "₹720",
  "₹685",
  "₹735"
],
    correctAnswer: "₹700",
    solution: {
      finalAnswer: "₹700",
      steps: [
  "Cost Price (CP) = ₹500.",
  "Markup = 40% of ₹500 = (40 / 100) * 500 = ₹200.",
  "Marked Price (MP) = CP + Markup = ₹500 + ₹200 = ₹700."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹550 and marks its price up by 45%. What is the marked price of the item?",
    options: [
  "₹798",
  "₹818",
  "₹783",
  "₹833"
],
    correctAnswer: "₹798",
    solution: {
      finalAnswer: "₹798",
      steps: [
  "Cost Price (CP) = ₹550.",
  "Markup = 45% of ₹550 = (45 / 100) * 550 = ₹248.",
  "Marked Price (MP) = CP + Markup = ₹550 + ₹248 = ₹798."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹600 and marks its price up by 50%. What is the marked price of the item?",
    options: [
  "₹900",
  "₹920",
  "₹885",
  "₹935"
],
    correctAnswer: "₹900",
    solution: {
      finalAnswer: "₹900",
      steps: [
  "Cost Price (CP) = ₹600.",
  "Markup = 50% of ₹600 = (50 / 100) * 600 = ₹300.",
  "Marked Price (MP) = CP + Markup = ₹600 + ₹300 = ₹900."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹650 and marks its price up by 55%. What is the marked price of the item?",
    options: [
  "₹1008",
  "₹1028",
  "₹993",
  "₹1043"
],
    correctAnswer: "₹1008",
    solution: {
      finalAnswer: "₹1008",
      steps: [
  "Cost Price (CP) = ₹650.",
  "Markup = 55% of ₹650 = (55 / 100) * 650 = ₹358.",
  "Marked Price (MP) = CP + Markup = ₹650 + ₹358 = ₹1008."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Percentage Markup and Absolute Profit Calculations",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A shopkeeper purchases an item for ₹700 and marks its price up by 60%. What is the marked price of the item?",
    options: [
  "₹1120",
  "₹1140",
  "₹1105",
  "₹1155"
],
    correctAnswer: "₹1120",
    solution: {
      finalAnswer: "₹1120",
      steps: [
  "Cost Price (CP) = ₹700.",
  "Markup = 60% of ₹700 = (60 / 100) * 700 = ₹420.",
  "Marked Price (MP) = CP + Markup = ₹700 + ₹420 = ₹1120."
],
      concept: "MP = CP * (1 + Markup% / 100)",
      whyItWorks: "Markup scales the base cost price directly by the specified percentage factor.",
      alternativeMethod: undefined,
      commonMistake: "Calculating markup on marked price rather than cost price.",
      catTip: "Use decimal multipliers directly: multiply by (1 + markup/100)."
    },
    estimatedTime: 45,
    learningObjective: "Calculate marked price from cost price using percentage multipliers."
  },
  {
    id: "orig_qa_arith_percentages_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 25%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "20%",
  "25%",
  "22.5%",
  "18.0%"
],
    correctAnswer: "20%",
    solution: {
      finalAnswer: "20%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 25% = 25/100, multiplier is (1 + 25/100) = 1.25.",
  "To keep product constant, consumption multiplier = 1 / (1 + 25/100) = 100 / 125.",
  "Fractional reduction = 25 / 125.",
  "Percentage reduction = (25 / 125) * 100% ≈ 20%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 30%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "23.1%",
  "30%",
  "25.6%",
  "21.1%"
],
    correctAnswer: "23.1%",
    solution: {
      finalAnswer: "23.1%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 30% = 30/100, multiplier is (1 + 30/100) = 1.30.",
  "To keep product constant, consumption multiplier = 1 / (1 + 30/100) = 100 / 130.",
  "Fractional reduction = 30 / 130.",
  "Percentage reduction = (30 / 130) * 100% ≈ 23.1%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 35%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "25.9%",
  "35%",
  "28.4%",
  "23.9%"
],
    correctAnswer: "25.9%",
    solution: {
      finalAnswer: "25.9%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 35% = 35/100, multiplier is (1 + 35/100) = 1.35.",
  "To keep product constant, consumption multiplier = 1 / (1 + 35/100) = 100 / 135.",
  "Fractional reduction = 35 / 135.",
  "Percentage reduction = (35 / 135) * 100% ≈ 25.9%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 40%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "28.6%",
  "40%",
  "31.1%",
  "26.6%"
],
    correctAnswer: "28.6%",
    solution: {
      finalAnswer: "28.6%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 40% = 40/100, multiplier is (1 + 40/100) = 1.40.",
  "To keep product constant, consumption multiplier = 1 / (1 + 40/100) = 100 / 140.",
  "Fractional reduction = 40 / 140.",
  "Percentage reduction = (40 / 140) * 100% ≈ 28.6%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 45%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "31%",
  "45%",
  "33.5%",
  "29.0%"
],
    correctAnswer: "31%",
    solution: {
      finalAnswer: "31%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 45% = 45/100, multiplier is (1 + 45/100) = 1.45.",
  "To keep product constant, consumption multiplier = 1 / (1 + 45/100) = 100 / 145.",
  "Fractional reduction = 45 / 145.",
  "Percentage reduction = (45 / 145) * 100% ≈ 31%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 50%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "33.3%",
  "50%",
  "35.8%",
  "31.3%"
],
    correctAnswer: "33.3%",
    solution: {
      finalAnswer: "33.3%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 50% = 50/100, multiplier is (1 + 50/100) = 1.50.",
  "To keep product constant, consumption multiplier = 1 / (1 + 50/100) = 100 / 150.",
  "Fractional reduction = 50 / 150.",
  "Percentage reduction = (50 / 150) * 100% ≈ 33.3%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 55%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "35.5%",
  "55%",
  "38.0%",
  "33.5%"
],
    correctAnswer: "35.5%",
    solution: {
      finalAnswer: "35.5%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 55% = 55/100, multiplier is (1 + 55/100) = 1.55.",
  "To keep product constant, consumption multiplier = 1 / (1 + 55/100) = 100 / 155.",
  "Fractional reduction = 55 / 155.",
  "Percentage reduction = (55 / 155) * 100% ≈ 35.5%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 60%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "37.5%",
  "60%",
  "40.0%",
  "35.5%"
],
    correctAnswer: "37.5%",
    solution: {
      finalAnswer: "37.5%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 60% = 60/100, multiplier is (1 + 60/100) = 1.60.",
  "To keep product constant, consumption multiplier = 1 / (1 + 60/100) = 100 / 160.",
  "Fractional reduction = 60 / 160.",
  "Percentage reduction = (60 / 160) * 100% ≈ 37.5%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Product Constancy and Inverse Percentage Variations",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The price of cooking oil increases by 65%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?",
    options: [
  "39.4%",
  "65%",
  "41.9%",
  "37.4%"
],
    correctAnswer: "39.4%",
    solution: {
      finalAnswer: "39.4%",
      steps: [
  "Expenditure = Price * Consumption = Constant.",
  "If price increases by 65% = 65/100, multiplier is (1 + 65/100) = 1.65.",
  "To keep product constant, consumption multiplier = 1 / (1 + 65/100) = 100 / 165.",
  "Fractional reduction = 65 / 165.",
  "Percentage reduction = (65 / 165) * 100% ≈ 39.4%."
],
      concept: "Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.",
      whyItWorks: "Inverse proportionality requires reciprocal scaling factors to preserve product invariance.",
      alternativeMethod: undefined,
      commonMistake: "Assuming consumption must decrease by the same percentage as the price increased.",
      catTip: "Apply the standard fraction rule: a/b increase requires a/(a+b) decrease."
    },
    estimatedTime: 60,
    learningObjective: "Master inverse variation and consumption adjustments under price changes."
  },
  {
    id: "orig_qa_arith_percentages_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 30% above production cost and provides a retailer with a discount of 20% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "4% Profit",
  "8.0% Profit",
  "1.0% Loss",
  "10% Profit"
],
    correctAnswer: "4% Profit",
    solution: {
      finalAnswer: "4% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 30/100) = 130.",
  "Selling Price = Marked Price * (1 - 20/100) = 130 * 0.80 = 104.00.",
  "Net Gain = 104.00 - 100 = 4.0%.",
  "Result is 4% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 10%).",
      catTip: "Multiply factors directly: 1.30 * 0.80 = 1.040."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 35% above production cost and provides a retailer with a discount of 10% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "21.5% Profit",
  "25.5% Profit",
  "18.5% Loss",
  "25% Profit"
],
    correctAnswer: "21.5% Profit",
    solution: {
      finalAnswer: "21.5% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 35/100) = 135.",
  "Selling Price = Marked Price * (1 - 10/100) = 135 * 0.90 = 121.50.",
  "Net Gain = 121.50 - 100 = 21.5%.",
  "Result is 21.5% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 25%).",
      catTip: "Multiply factors directly: 1.35 * 0.90 = 1.215."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 40% above production cost and provides a retailer with a discount of 15% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "19% Profit",
  "23.0% Profit",
  "16.0% Loss",
  "25% Profit"
],
    correctAnswer: "19% Profit",
    solution: {
      finalAnswer: "19% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 40/100) = 140.",
  "Selling Price = Marked Price * (1 - 15/100) = 140 * 0.85 = 119.00.",
  "Net Gain = 119.00 - 100 = 19.0%.",
  "Result is 19% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 25%).",
      catTip: "Multiply factors directly: 1.40 * 0.85 = 1.190."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 45% above production cost and provides a retailer with a discount of 20% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "16% Profit",
  "20.0% Profit",
  "13.0% Loss",
  "25% Profit"
],
    correctAnswer: "16% Profit",
    solution: {
      finalAnswer: "16% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 45/100) = 145.",
  "Selling Price = Marked Price * (1 - 20/100) = 145 * 0.80 = 116.00.",
  "Net Gain = 116.00 - 100 = 16.0%.",
  "Result is 16% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 25%).",
      catTip: "Multiply factors directly: 1.45 * 0.80 = 1.160."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 50% above production cost and provides a retailer with a discount of 10% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "35% Profit",
  "39.0% Profit",
  "32.0% Loss",
  "40% Profit"
],
    correctAnswer: "35% Profit",
    solution: {
      finalAnswer: "35% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 50/100) = 150.",
  "Selling Price = Marked Price * (1 - 10/100) = 150 * 0.90 = 135.00.",
  "Net Gain = 135.00 - 100 = 35.0%.",
  "Result is 35% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 40%).",
      catTip: "Multiply factors directly: 1.50 * 0.90 = 1.350."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 55% above production cost and provides a retailer with a discount of 15% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "31.7% Profit",
  "35.7% Profit",
  "28.7% Loss",
  "40% Profit"
],
    correctAnswer: "31.7% Profit",
    solution: {
      finalAnswer: "31.7% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 55/100) = 155.",
  "Selling Price = Marked Price * (1 - 15/100) = 155 * 0.85 = 131.75.",
  "Net Gain = 131.75 - 100 = 31.7%.",
  "Result is 31.7% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 40%).",
      catTip: "Multiply factors directly: 1.55 * 0.85 = 1.317."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 60% above production cost and provides a retailer with a discount of 20% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "28% Profit",
  "32.0% Profit",
  "25.0% Loss",
  "40% Profit"
],
    correctAnswer: "28% Profit",
    solution: {
      finalAnswer: "28% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 60/100) = 160.",
  "Selling Price = Marked Price * (1 - 20/100) = 160 * 0.80 = 128.00.",
  "Net Gain = 128.00 - 100 = 28.0%.",
  "Result is 28% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 40%).",
      catTip: "Multiply factors directly: 1.60 * 0.80 = 1.280."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 65% above production cost and provides a retailer with a discount of 10% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "48.5% Profit",
  "52.5% Profit",
  "45.5% Loss",
  "55% Profit"
],
    correctAnswer: "48.5% Profit",
    solution: {
      finalAnswer: "48.5% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 65/100) = 165.",
  "Selling Price = Marked Price * (1 - 10/100) = 165 * 0.90 = 148.50.",
  "Net Gain = 148.50 - 100 = 48.5%.",
  "Result is 48.5% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 55%).",
      catTip: "Multiply factors directly: 1.65 * 0.90 = 1.485."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Successive Percentage Multipliers with Markup and Trade Discount",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A manufacturer marks an article 70% above production cost and provides a retailer with a discount of 15% on marked price. What is the manufacturer's net percentage profit or loss?",
    options: [
  "44.5% Profit",
  "48.5% Profit",
  "41.5% Loss",
  "55% Profit"
],
    correctAnswer: "44.5% Profit",
    solution: {
      finalAnswer: "44.5% Profit",
      steps: [
  "Let Cost Price = 100.",
  "Marked Price = 100 * (1 + 70/100) = 170.",
  "Selling Price = Marked Price * (1 - 15/100) = 170 * 0.85 = 144.50.",
  "Net Gain = 144.50 - 100 = 44.5%.",
  "Result is 44.5% Profit."
],
      concept: "Net Multiplier = (1 + Markup%)(1 - Discount%)",
      whyItWorks: "Discounts compound on top of the marked price, not the initial cost price.",
      alternativeMethod: undefined,
      commonMistake: "Directly subtracting discount from markup (e.g. 55%).",
      catTip: "Multiply factors directly: 1.70 * 0.85 = 1.445."
    },
    estimatedTime: 75,
    learningObjective: "Calculate combined impact of markup and discount rates via compounded multipliers."
  },
  {
    id: "orig_qa_arith_percentages_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 14% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 870 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "31",
    solution: {
      finalAnswer: "31",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 14% markup: Revenue = 1000 * (1 + 14/100) = ₹1140.0000000000002.",
  "The grocer actually dispenses only 870 grams: True Cost = ₹870.",
  "Net Profit = Revenue - True Cost = ₹1140.0000000000002 - ₹870 = ₹270.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (270.0 / 870) * 100% = 31%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 870) * 1.14."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 16% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 880 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "31.8",
    solution: {
      finalAnswer: "31.8",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 16% markup: Revenue = 1000 * (1 + 16/100) = ₹1160.",
  "The grocer actually dispenses only 880 grams: True Cost = ₹880.",
  "Net Profit = Revenue - True Cost = ₹1160 - ₹880 = ₹280.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (280.0 / 880) * 100% = 31.8%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 880) * 1.16."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 18% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 890 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "32.6",
    solution: {
      finalAnswer: "32.6",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 18% markup: Revenue = 1000 * (1 + 18/100) = ₹1180.",
  "The grocer actually dispenses only 890 grams: True Cost = ₹890.",
  "Net Profit = Revenue - True Cost = ₹1180 - ₹890 = ₹290.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (290.0 / 890) * 100% = 32.6%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 890) * 1.18."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 20% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 900 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "33.3",
    solution: {
      finalAnswer: "33.3",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 20% markup: Revenue = 1000 * (1 + 20/100) = ₹1200.",
  "The grocer actually dispenses only 900 grams: True Cost = ₹900.",
  "Net Profit = Revenue - True Cost = ₹1200 - ₹900 = ₹300.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (300.0 / 900) * 100% = 33.3%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 900) * 1.20."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 22% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 910 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "34.1",
    solution: {
      finalAnswer: "34.1",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 22% markup: Revenue = 1000 * (1 + 22/100) = ₹1220.",
  "The grocer actually dispenses only 910 grams: True Cost = ₹910.",
  "Net Profit = Revenue - True Cost = ₹1220 - ₹910 = ₹310.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (310.0 / 910) * 100% = 34.1%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 910) * 1.22."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 24% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 920 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "34.8",
    solution: {
      finalAnswer: "34.8",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 24% markup: Revenue = 1000 * (1 + 24/100) = ₹1240.",
  "The grocer actually dispenses only 920 grams: True Cost = ₹920.",
  "Net Profit = Revenue - True Cost = ₹1240 - ₹920 = ₹320.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (320.0 / 920) * 100% = 34.8%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 920) * 1.24."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 26% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 930 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "35.5",
    solution: {
      finalAnswer: "35.5",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 26% markup: Revenue = 1000 * (1 + 26/100) = ₹1260.",
  "The grocer actually dispenses only 930 grams: True Cost = ₹930.",
  "Net Profit = Revenue - True Cost = ₹1260 - ₹930 = ₹330.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (330.0 / 930) * 100% = 35.5%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 930) * 1.26."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 28% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 940 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "36.2",
    solution: {
      finalAnswer: "36.2",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 28% markup: Revenue = 1000 * (1 + 28/100) = ₹1280.",
  "The grocer actually dispenses only 940 grams: True Cost = ₹940.",
  "Net Profit = Revenue - True Cost = ₹1280 - ₹940 = ₹340.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (340.0 / 940) * 100% = 36.2%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 940) * 1.28."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_arith_percentages_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_percentages",
    topicName: "Arithmetic",
    subtopic: "Percentages & Profit Loss",
    concept: "Faulty Balance & Dishonest Trader Multiplier Framework",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "A dishonest grocer professes to sell sugar at a markup of 30% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every 950 grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).",
    options: null,
    correctAnswer: "36.8",
    solution: {
      finalAnswer: "36.8",
      steps: [
  "Let the cost price of 1 gram of sugar = ₹1.",
  "The customer pays for 1000 grams with a 30% markup: Revenue = 1000 * (1 + 30/100) = ₹1300.",
  "The grocer actually dispenses only 950 grams: True Cost = ₹950.",
  "Net Profit = Revenue - True Cost = ₹1300 - ₹950 = ₹350.0.",
  "Profit Percentage = (Profit / True Cost) * 100 = (350.0 / 950) * 100% = 36.8%."
],
      concept: "Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).",
      whyItWorks: "The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.",
      alternativeMethod: undefined,
      commonMistake: "Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.",
      catTip: "Chain multipliers: Overall Multiplier = (1000 / 950) * 1.30."
    },
    estimatedTime: 90,
    learningObjective: "Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances."
  },
  {
    id: "orig_qa_tw_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_timework",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "LCM Work Units Method",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Pipes A and B can fill an empty cistern in 15 hours and 20 hours respectively, while Pipe C can empty the full cistern in 30 hours. If all three pipes are opened simultaneously when the cistern is empty, how long will it take to fill the cistern completely?",
    options: [
  "12 hours",
  "10 hours",
  "15 hours",
  "8.5 hours"
],
    correctAnswer: "12 hours",
    solution: {
      finalAnswer: "12 hours",
      steps: [
  "Take total capacity of cistern = LCM(15, 20, 30) = 60 units.",
  "Efficiency of Pipe A = 60 / 15 = +4 units/hour.",
  "Efficiency of Pipe B = 60 / 20 = +3 units/hour.",
  "Efficiency of Pipe C = 60 / 30 = -2 units/hour (emptying).",
  "Net combined efficiency when all three operate = 4 + 3 - 2 = 5 units/hour.",
  "Time required = Total capacity / Net efficiency = 60 / 5 = 12 hours."
],
      concept: "LCM Work Units Method",
      whyItWorks: "Expressing work as total units converts reciprocal time additions into straightforward integer arithmetic.",
      alternativeMethod: undefined,
      commonMistake: "Adding the draining rate instead of subtracting it.",
      catTip: "The LCM unitary approach eliminates fractions and minimizes arithmetic errors in CAT exams."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tw_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_timework",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternating Work Days & Efficiency Ratios",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Rohan can complete a project in 16 days, and Sohan can complete the same project in 12 days. If they work on alternate days starting with Rohan on Day 1, in how many days will the project be completed?",
    options: [
  "13.75 days",
  "14 days",
  "13.5 days",
  "12.66 days"
],
    correctAnswer: "13.75 days",
    solution: {
      finalAnswer: "13.75 days",
      steps: [
  "Total work = LCM(16, 12) = 48 units.",
  "Rohan's daily efficiency = 48 / 16 = 3 units/day.",
  "Sohan's daily efficiency = 48 / 12 = 4 units/day.",
  "In one 2-day cycle (Day 1 Rohan, Day 2 Sohan), work completed = 3 + 4 = 7 units.",
  "6 full 2-day cycles = 12 days, completing 6 * 7 = 42 units of work.",
  "Remaining work after 12 days = 48 - 42 = 6 units.",
  "On Day 13, Rohan works alone and completes 3 units.",
  "Remaining work after Day 13 = 6 - 3 = 3 units.",
  "On Day 14, it is Sohan's turn. Sohan completes work at 4 units/day.",
  "Time taken by Sohan to finish remaining 3 units = 3 / 4 days = 0.75 days.",
  "Total time required = 12 full cycle days + 1 day (Rohan) + 0.75 day (Sohan) = 13.75 days."
],
      concept: "Alternating Work Days & Efficiency Ratios",
      whyItWorks: "Group alternating days into a 2-day repeating block, calculate integer cycles completed, and then resolve remaining units sequentially based on whose turn it is.",
      alternativeMethod: undefined,
      commonMistake: "Dividing total work directly by average daily rate without respecting individual day boundaries.",
      catTip: "Never use fractions for full cycles; find the largest multiple of the cycle work less than total work, then trace remaining days sequentially."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tw_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_timework",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Wages and Proportional Contributions",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "A, B, and C can complete a task individually in 10, 15, and 30 days respectively. A works for the first day alone, after which B joins him. After 3 more days, C also joins them and they finish the work together. If the total payment for the work is ₹18,000, how much does B receive?",
    options: [
  "₹6,000",
  "₹5,400",
  "₹7,200",
  "₹4,800"
],
    correctAnswer: "₹6,000",
    solution: {
      finalAnswer: "₹6,000",
      steps: [
  "Total work = LCM(10, 15, 30) = 30 units.",
  "Individual daily efficiencies: Rate A = 30/10 = 3 units/day, Rate B = 30/15 = 2 units/day, Rate C = 30/30 = 1 unit/day.",
  "Phase 1 (Day 1): A works alone for 1 day = 1 * 3 = 3 units.",
  "Phase 2 (Days 2 to 4): A and B work together for 3 days = 3 * (3 + 2) = 15 units. In this phase, B contributes 3 * 2 = 6 units.",
  "Total work completed through Phase 2 = 3 + 15 = 18 units. Remaining work = 30 - 18 = 12 units.",
  "Phase 3 (Days 5 & 6): A, B, and C work together with combined rate = 3 + 2 + 1 = 6 units/day.",
  "Time to complete remaining work = 12 / 6 = 2 days. In this phase, B contributes 2 * 2 = 4 units.",
  "Total units of work performed by B = 6 + 4 = 10 units.",
  "B's fractional contribution to the project = 10 / 30 = 1/3.",
  "B's share of wages = (1/3) * ₹18,000 = ₹6,000."
],
      concept: "Wages and Proportional Contributions",
      whyItWorks: "Wages are strictly proportional to the number of work units completed by each worker.",
      alternativeMethod: undefined,
      commonMistake: "Distributing payment according to the ratio of their efficiencies or total days present.",
      catTip: "Never divide money by time spent; compute (Worker\\"
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tw_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_timework",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Negative Efficiency and Inflow-Outflow Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 8 hours. Due to a leak at 3/4th the height of the reservoir, it takes 10 hours to fill the reservoir completely. How many hours would the leak alone take to empty the top 1/4th of the full reservoir?",
    options: null,
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "Let the total capacity of the reservoir be 40 units.",
  "Inlet rate = 40 units / 8 hours = 5 units/hour.",
  "The bottom 3/4th of the reservoir (30 units) is below the leak level, so the leak is inactive while this section fills.",
  "Time to fill bottom 30 units = 30 units / 5 units/hour = 6 hours.",
  "Since total filling time is 10 hours, the top 1/4th (10 units) took 10 - 6 = 4 hours to fill.",
  "Net filling rate for the top 10 units = 10 units / 4 hours = 2.5 units/hour.",
  "Net Rate = Inlet Rate - Leak Rate => 2.5 = 5 - Leak Rate => Leak Rate = 2.5 units/hour.",
  "Capacity of the top 1/4th = 10 units.",
  "Time for the leak alone to empty the top 1/4th = 10 units / 2.5 units/hour = 4 hours."
],
      concept: "Negative Efficiency and Inflow-Outflow Leakage",
      whyItWorks: "The leak is only active once liquid reaches its vertical elevation. Partition the filling process into pre-leak and post-leak intervals.",
      alternativeMethod: undefined,
      commonMistake: "Assuming the leak operates across the entire height of the tank from the start.",
      catTip: "In piecewise reservoir problems, always partition the tank volume into distinct zones based on the elevations of leaks."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_arith_tw_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 16 days working alone, while Person B can complete the same project in 24 days alone. Working together, in how many days can they complete the project?",
    options: [
  "9.6 days",
  "11.6 days",
  "8.1 days",
  "20 days"
],
    correctAnswer: "9.6 days",
    solution: {
      finalAnswer: "9.6 days",
      steps: [
  "Assume total work units = LCM(16, 24) = 48 units.",
  "A's daily work rate = 48 / 16 = 3 units/day.",
  "B's daily work rate = 48 / 24 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 48 / 5 = 9.6 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (16 + 24)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (16 * 24) / (40) = 9.6 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 18 days working alone, while Person B can complete the same project in 27 days alone. Working together, in how many days can they complete the project?",
    options: [
  "10.8 days",
  "12.8 days",
  "9.3 days",
  "23 days"
],
    correctAnswer: "10.8 days",
    solution: {
      finalAnswer: "10.8 days",
      steps: [
  "Assume total work units = LCM(18, 27) = 54 units.",
  "A's daily work rate = 54 / 18 = 3 units/day.",
  "B's daily work rate = 54 / 27 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 54 / 5 = 10.8 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (18 + 27)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (18 * 27) / (45) = 10.8 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 20 days working alone, while Person B can complete the same project in 30 days alone. Working together, in how many days can they complete the project?",
    options: [
  "12 days",
  "14.0 days",
  "10.5 days",
  "25 days"
],
    correctAnswer: "12 days",
    solution: {
      finalAnswer: "12 days",
      steps: [
  "Assume total work units = LCM(20, 30) = 60 units.",
  "A's daily work rate = 60 / 20 = 3 units/day.",
  "B's daily work rate = 60 / 30 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 60 / 5 = 12 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (20 + 30)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (20 * 30) / (50) = 12 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 22 days working alone, while Person B can complete the same project in 33 days alone. Working together, in how many days can they complete the project?",
    options: [
  "13.2 days",
  "15.2 days",
  "11.7 days",
  "28 days"
],
    correctAnswer: "13.2 days",
    solution: {
      finalAnswer: "13.2 days",
      steps: [
  "Assume total work units = LCM(22, 33) = 66 units.",
  "A's daily work rate = 66 / 22 = 3 units/day.",
  "B's daily work rate = 66 / 33 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 66 / 5 = 13.2 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (22 + 33)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (22 * 33) / (55) = 13.2 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 24 days working alone, while Person B can complete the same project in 36 days alone. Working together, in how many days can they complete the project?",
    options: [
  "14.4 days",
  "16.4 days",
  "12.9 days",
  "30 days"
],
    correctAnswer: "14.4 days",
    solution: {
      finalAnswer: "14.4 days",
      steps: [
  "Assume total work units = LCM(24, 36) = 72 units.",
  "A's daily work rate = 72 / 24 = 3 units/day.",
  "B's daily work rate = 72 / 36 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 72 / 5 = 14.4 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (24 + 36)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (24 * 36) / (60) = 14.4 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 26 days working alone, while Person B can complete the same project in 39 days alone. Working together, in how many days can they complete the project?",
    options: [
  "15.6 days",
  "17.6 days",
  "14.1 days",
  "33 days"
],
    correctAnswer: "15.6 days",
    solution: {
      finalAnswer: "15.6 days",
      steps: [
  "Assume total work units = LCM(26, 39) = 78 units.",
  "A's daily work rate = 78 / 26 = 3 units/day.",
  "B's daily work rate = 78 / 39 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 78 / 5 = 15.6 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (26 + 39)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (26 * 39) / (65) = 15.6 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 28 days working alone, while Person B can complete the same project in 42 days alone. Working together, in how many days can they complete the project?",
    options: [
  "16.8 days",
  "18.8 days",
  "15.3 days",
  "35 days"
],
    correctAnswer: "16.8 days",
    solution: {
      finalAnswer: "16.8 days",
      steps: [
  "Assume total work units = LCM(28, 42) = 84 units.",
  "A's daily work rate = 84 / 28 = 3 units/day.",
  "B's daily work rate = 84 / 42 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 84 / 5 = 16.8 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (28 + 42)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (28 * 42) / (70) = 16.8 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 30 days working alone, while Person B can complete the same project in 45 days alone. Working together, in how many days can they complete the project?",
    options: [
  "18 days",
  "20.0 days",
  "16.5 days",
  "38 days"
],
    correctAnswer: "18 days",
    solution: {
      finalAnswer: "18 days",
      steps: [
  "Assume total work units = LCM(30, 45) = 90 units.",
  "A's daily work rate = 90 / 30 = 3 units/day.",
  "B's daily work rate = 90 / 45 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 90 / 5 = 18 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (30 + 45)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (30 * 45) / (75) = 18 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Unit Work Rate and Joint Task Completion",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "Person A can complete a project in 32 days working alone, while Person B can complete the same project in 48 days alone. Working together, in how many days can they complete the project?",
    options: [
  "19.2 days",
  "21.2 days",
  "17.7 days",
  "40 days"
],
    correctAnswer: "19.2 days",
    solution: {
      finalAnswer: "19.2 days",
      steps: [
  "Assume total work units = LCM(32, 48) = 96 units.",
  "A's daily work rate = 96 / 32 = 3 units/day.",
  "B's daily work rate = 96 / 48 = 2 units/day.",
  "Combined daily rate = 3 + 2 = 5 units/day.",
  "Total time required = 96 / 5 = 19.2 days."
],
      concept: "Total Time = Total Units / (Rate A + Rate B)",
      whyItWorks: "Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.",
      alternativeMethod: undefined,
      commonMistake: "Averaging the two completion times directly: (32 + 48)/2.",
      catTip: "Product divided by sum: (A * B) / (A + B) = (32 * 48) / (80) = 19.2 days."
    },
    estimatedTime: 50,
    learningObjective: "Calculate combined work duration using the LCM unit-rate framework."
  },
  {
    id: "orig_qa_arith_tw_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 16 days and Worker Y can finish it in 24 days. If Worker X works alone for 5 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "16.5 days",
  "19.5 days",
  "14.0 days",
  "18.0 days"
],
    correctAnswer: "16.5 days",
    solution: {
      finalAnswer: "16.5 days",
      steps: [
  "Total work = LCM(16, 24) = 48 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 5 days = 5 * 3 = 15 units.",
  "Remaining work = 48 - 15 = 33 units.",
  "Days taken by Y = 33 / 2 = 16.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 18 days and Worker Y can finish it in 27 days. If Worker X works alone for 3 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "22.5 days",
  "25.5 days",
  "20.0 days",
  "24.0 days"
],
    correctAnswer: "22.5 days",
    solution: {
      finalAnswer: "22.5 days",
      steps: [
  "Total work = LCM(18, 27) = 54 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 3 days = 3 * 3 = 9 units.",
  "Remaining work = 54 - 9 = 45 units.",
  "Days taken by Y = 45 / 2 = 22.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 20 days and Worker Y can finish it in 30 days. If Worker X works alone for 4 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "24 days",
  "27.0 days",
  "21.5 days",
  "25.5 days"
],
    correctAnswer: "24 days",
    solution: {
      finalAnswer: "24 days",
      steps: [
  "Total work = LCM(20, 30) = 60 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 4 days = 4 * 3 = 12 units.",
  "Remaining work = 60 - 12 = 48 units.",
  "Days taken by Y = 48 / 2 = 24 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 22 days and Worker Y can finish it in 33 days. If Worker X works alone for 5 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "25.5 days",
  "28.5 days",
  "23.0 days",
  "27.0 days"
],
    correctAnswer: "25.5 days",
    solution: {
      finalAnswer: "25.5 days",
      steps: [
  "Total work = LCM(22, 33) = 66 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 5 days = 5 * 3 = 15 units.",
  "Remaining work = 66 - 15 = 51 units.",
  "Days taken by Y = 51 / 2 = 25.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 24 days and Worker Y can finish it in 36 days. If Worker X works alone for 3 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "31.5 days",
  "34.5 days",
  "29.0 days",
  "33.0 days"
],
    correctAnswer: "31.5 days",
    solution: {
      finalAnswer: "31.5 days",
      steps: [
  "Total work = LCM(24, 36) = 72 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 3 days = 3 * 3 = 9 units.",
  "Remaining work = 72 - 9 = 63 units.",
  "Days taken by Y = 63 / 2 = 31.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 26 days and Worker Y can finish it in 39 days. If Worker X works alone for 4 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "33 days",
  "36.0 days",
  "30.5 days",
  "34.5 days"
],
    correctAnswer: "33 days",
    solution: {
      finalAnswer: "33 days",
      steps: [
  "Total work = LCM(26, 39) = 78 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 4 days = 4 * 3 = 12 units.",
  "Remaining work = 78 - 12 = 66 units.",
  "Days taken by Y = 66 / 2 = 33 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 28 days and Worker Y can finish it in 42 days. If Worker X works alone for 5 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "34.5 days",
  "37.5 days",
  "32.0 days",
  "36.0 days"
],
    correctAnswer: "34.5 days",
    solution: {
      finalAnswer: "34.5 days",
      steps: [
  "Total work = LCM(28, 42) = 84 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 5 days = 5 * 3 = 15 units.",
  "Remaining work = 84 - 15 = 69 units.",
  "Days taken by Y = 69 / 2 = 34.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 30 days and Worker Y can finish it in 45 days. If Worker X works alone for 3 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "40.5 days",
  "43.5 days",
  "38.0 days",
  "42.0 days"
],
    correctAnswer: "40.5 days",
    solution: {
      finalAnswer: "40.5 days",
      steps: [
  "Total work = LCM(30, 45) = 90 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 3 days = 3 * 3 = 9 units.",
  "Remaining work = 90 - 9 = 81 units.",
  "Days taken by Y = 81 / 2 = 40.5 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Sequential Work and Remainder Completion",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Worker X can finish a task in 32 days and Worker Y can finish it in 48 days. If Worker X works alone for 4 days and then departs, how many days will Worker Y take to complete the remaining work alone?",
    options: [
  "42 days",
  "45.0 days",
  "39.5 days",
  "43.5 days"
],
    correctAnswer: "42 days",
    solution: {
      finalAnswer: "42 days",
      steps: [
  "Total work = LCM(32, 48) = 96 units.",
  "Rate of X = 3 units/day; Rate of Y = 2 units/day.",
  "Work completed by X in 4 days = 4 * 3 = 12 units.",
  "Remaining work = 96 - 12 = 84 units.",
  "Days taken by Y = 84 / 2 = 42 days."
],
      concept: "Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.",
      whyItWorks: "Work accumulates linearly with respect to daily unit productivity.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to subtract the work completed during the initial days.",
      catTip: "Subtract integer units from total LCM work units before dividing by Y's rate."
    },
    estimatedTime: 65,
    learningObjective: "Handle phased work schedules and remainder unit allocations."
  },
  {
    id: "orig_qa_arith_tw_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 16 hours, while Technician Q can assemble it in 24 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "19 hours",
  "20.20 hours",
  "18.20 hours",
  "21.00 hours"
],
    correctAnswer: "19 hours",
    solution: {
      finalAnswer: "19 hours",
      steps: [
  "Total work = LCM(16, 24) = 48 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(48 / 5) = 9 cycles (18 hours).",
  "Work completed after full cycles = 45 units. Remainder = 3 units.",
  "P finishes the remaining 3 units in 3 / 3 = 1.00 hours.",
  "Total time = 19 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 18 hours, while Technician Q can assemble it in 27 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "21.5 hours",
  "22.70 hours",
  "20.70 hours",
  "23.50 hours"
],
    correctAnswer: "21.5 hours",
    solution: {
      finalAnswer: "21.5 hours",
      steps: [
  "Total work = LCM(18, 27) = 54 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(54 / 5) = 10 cycles (20 hours).",
  "Work completed after full cycles = 50 units. Remainder = 4 units.",
  "P works 1 hour (3 units), leaving 1 units for Q, who takes 0.5 hours.",
  "Total time = 21.5 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 20 hours, while Technician Q can assemble it in 30 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "24 hours",
  "25.20 hours",
  "23.20 hours",
  "26.00 hours"
],
    correctAnswer: "24 hours",
    solution: {
      finalAnswer: "24 hours",
      steps: [
  "Total work = LCM(20, 30) = 60 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(60 / 5) = 12 cycles (24 hours).",
  "Work completed after full cycles = 60 units. Remainder = 0 units.",
  "P finishes the remaining 0 units in 0 / 3 = 0.00 hours.",
  "Total time = 24 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 22 hours, while Technician Q can assemble it in 33 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "26.33 hours",
  "27.53 hours",
  "25.53 hours",
  "28.33 hours"
],
    correctAnswer: "26.33 hours",
    solution: {
      finalAnswer: "26.33 hours",
      steps: [
  "Total work = LCM(22, 33) = 66 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(66 / 5) = 13 cycles (26 hours).",
  "Work completed after full cycles = 65 units. Remainder = 1 units.",
  "P finishes the remaining 1 units in 1 / 3 = 0.33 hours.",
  "Total time = 26.33 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 24 hours, while Technician Q can assemble it in 36 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "28.67 hours",
  "29.87 hours",
  "27.87 hours",
  "30.67 hours"
],
    correctAnswer: "28.67 hours",
    solution: {
      finalAnswer: "28.67 hours",
      steps: [
  "Total work = LCM(24, 36) = 72 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(72 / 5) = 14 cycles (28 hours).",
  "Work completed after full cycles = 70 units. Remainder = 2 units.",
  "P finishes the remaining 2 units in 2 / 3 = 0.67 hours.",
  "Total time = 28.67 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 26 hours, while Technician Q can assemble it in 39 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "31 hours",
  "32.20 hours",
  "30.20 hours",
  "33.00 hours"
],
    correctAnswer: "31 hours",
    solution: {
      finalAnswer: "31 hours",
      steps: [
  "Total work = LCM(26, 39) = 78 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(78 / 5) = 15 cycles (30 hours).",
  "Work completed after full cycles = 75 units. Remainder = 3 units.",
  "P finishes the remaining 3 units in 3 / 3 = 1.00 hours.",
  "Total time = 31 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 28 hours, while Technician Q can assemble it in 42 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "33.5 hours",
  "34.70 hours",
  "32.70 hours",
  "35.50 hours"
],
    correctAnswer: "33.5 hours",
    solution: {
      finalAnswer: "33.5 hours",
      steps: [
  "Total work = LCM(28, 42) = 84 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(84 / 5) = 16 cycles (32 hours).",
  "Work completed after full cycles = 80 units. Remainder = 4 units.",
  "P works 1 hour (3 units), leaving 1 units for Q, who takes 0.5 hours.",
  "Total time = 33.5 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 30 hours, while Technician Q can assemble it in 45 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "36 hours",
  "37.20 hours",
  "35.20 hours",
  "38.00 hours"
],
    correctAnswer: "36 hours",
    solution: {
      finalAnswer: "36 hours",
      steps: [
  "Total work = LCM(30, 45) = 90 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(90 / 5) = 18 cycles (36 hours).",
  "Work completed after full cycles = 90 units. Remainder = 0 units.",
  "P finishes the remaining 0 units in 0 / 3 = 0.00 hours.",
  "Total time = 36 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Alternate Day Cycle Scheduling and Integer Remainder Allocation",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Technician P can assemble a server in 32 hours, while Technician Q can assemble it in 48 hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?",
    options: [
  "38.33 hours",
  "39.53 hours",
  "37.53 hours",
  "40.33 hours"
],
    correctAnswer: "38.33 hours",
    solution: {
      finalAnswer: "38.33 hours",
      steps: [
  "Total work = LCM(32, 48) = 96 units. Rate P = 3 u/h, Rate Q = 2 u/h.",
  "In a 2-hour cycle (P followed by Q), work completed = 3 + 2 = 5 units.",
  "Number of full 2-hour cycles = floor(96 / 5) = 19 cycles (38 hours).",
  "Work completed after full cycles = 95 units. Remainder = 1 units.",
  "P finishes the remaining 1 units in 1 / 3 = 0.33 hours.",
  "Total time = 38.33 hours."
],
      concept: "Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.",
      whyItWorks: "Cyclic productivity allows dividing large task totals by block rate sums.",
      alternativeMethod: undefined,
      commonMistake: "Treating alternate work as continuous simultaneous work: (A + B)/2.",
      catTip: "Calculate full 2-hour blocks first to prevent fractional shift confusion."
    },
    estimatedTime: 85,
    learningObjective: "Master alternate work cycles and fractional remaining shift calculations."
  },
  {
    id: "orig_qa_arith_tw_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 12 hours. Due to a leak at the bottom of the reservoir, it takes 32.6 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "19",
    solution: {
      finalAnswer: "19",
      steps: [
  "Let capacity of reservoir = LCM(12, 32.6) = 228 units.",
  "Inlet filling rate = 1 / 12 per hour.",
  "Net filling rate with leak active = 1 / 32.6 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 12) - (1 / 32.6).",
  "Leak rate = (32.6 - 12) / (12 * 32.6) = 1 / 19 per hour.",
  "Time taken by leak to empty full reservoir = 19 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 13 hours. Due to a leak at the bottom of the reservoir, it takes 34.1 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "21",
    solution: {
      finalAnswer: "21",
      steps: [
  "Let capacity of reservoir = LCM(13, 34.1) = 273 units.",
  "Inlet filling rate = 1 / 13 per hour.",
  "Net filling rate with leak active = 1 / 34.1 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 13) - (1 / 34.1).",
  "Leak rate = (34.1 - 13) / (13 * 34.1) = 1 / 21 per hour.",
  "Time taken by leak to empty full reservoir = 21 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 14 hours. Due to a leak at the bottom of the reservoir, it takes 35.8 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "23",
    solution: {
      finalAnswer: "23",
      steps: [
  "Let capacity of reservoir = LCM(14, 35.8) = 322 units.",
  "Inlet filling rate = 1 / 14 per hour.",
  "Net filling rate with leak active = 1 / 35.8 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 14) - (1 / 35.8).",
  "Leak rate = (35.8 - 14) / (14 * 35.8) = 1 / 23 per hour.",
  "Time taken by leak to empty full reservoir = 23 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 15 hours. Due to a leak at the bottom of the reservoir, it takes 37.5 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "25",
    solution: {
      finalAnswer: "25",
      steps: [
  "Let capacity of reservoir = LCM(15, 37.5) = 375 units.",
  "Inlet filling rate = 1 / 15 per hour.",
  "Net filling rate with leak active = 1 / 37.5 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 15) - (1 / 37.5).",
  "Leak rate = (37.5 - 15) / (15 * 37.5) = 1 / 25 per hour.",
  "Time taken by leak to empty full reservoir = 25 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 16 hours. Due to a leak at the bottom of the reservoir, it takes 39.3 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "27",
    solution: {
      finalAnswer: "27",
      steps: [
  "Let capacity of reservoir = LCM(16, 39.3) = 432 units.",
  "Inlet filling rate = 1 / 16 per hour.",
  "Net filling rate with leak active = 1 / 39.3 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 16) - (1 / 39.3).",
  "Leak rate = (39.3 - 16) / (16 * 39.3) = 1 / 27 per hour.",
  "Time taken by leak to empty full reservoir = 27 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 17 hours. Due to a leak at the bottom of the reservoir, it takes 41.1 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "29",
    solution: {
      finalAnswer: "29",
      steps: [
  "Let capacity of reservoir = LCM(17, 41.1) = 493 units.",
  "Inlet filling rate = 1 / 17 per hour.",
  "Net filling rate with leak active = 1 / 41.1 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 17) - (1 / 41.1).",
  "Leak rate = (41.1 - 17) / (17 * 41.1) = 1 / 29 per hour.",
  "Time taken by leak to empty full reservoir = 29 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 18 hours. Due to a leak at the bottom of the reservoir, it takes 42.9 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "31",
    solution: {
      finalAnswer: "31",
      steps: [
  "Let capacity of reservoir = LCM(18, 42.9) = 558 units.",
  "Inlet filling rate = 1 / 18 per hour.",
  "Net filling rate with leak active = 1 / 42.9 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 18) - (1 / 42.9).",
  "Leak rate = (42.9 - 18) / (18 * 42.9) = 1 / 31 per hour.",
  "Time taken by leak to empty full reservoir = 31 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 19 hours. Due to a leak at the bottom of the reservoir, it takes 44.8 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "33",
    solution: {
      finalAnswer: "33",
      steps: [
  "Let capacity of reservoir = LCM(19, 44.8) = 627 units.",
  "Inlet filling rate = 1 / 19 per hour.",
  "Net filling rate with leak active = 1 / 44.8 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 19) - (1 / 44.8).",
  "Leak rate = (44.8 - 19) / (19 * 44.8) = 1 / 33 per hour.",
  "Time taken by leak to empty full reservoir = 33 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_arith_tw_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tw",
    topicName: "Arithmetic",
    subtopic: "Time & Work",
    concept: "Net Inflow Dynamics with Bottom Reservoir Leakage",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An inlet pipe can fill a reservoir in 20 hours. Due to a leak at the bottom of the reservoir, it takes 46.7 hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?",
    options: null,
    correctAnswer: "35",
    solution: {
      finalAnswer: "35",
      steps: [
  "Let capacity of reservoir = LCM(20, 46.7) = 700 units.",
  "Inlet filling rate = 1 / 20 per hour.",
  "Net filling rate with leak active = 1 / 46.7 per hour.",
  "Leak emptying rate = Inlet rate - Net rate = (1 / 20) - (1 / 46.7).",
  "Leak rate = (46.7 - 20) / (20 * 46.7) = 1 / 35 per hour.",
  "Time taken by leak to empty full reservoir = 35 hours."
],
      concept: "Rate_Leak = Rate_Inlet - Rate_Net.",
      whyItWorks: "Outflow rates subtract algebraically from positive volumetric inflow rates.",
      alternativeMethod: undefined,
      commonMistake: "Adding the rates instead of subtracting the net rate from the inlet rate.",
      catTip: "Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time)."
    },
    estimatedTime: 80,
    learningObjective: "Isolate outflow leak rates from net volumetric filling rates."
  },
  {
    id: "orig_qa_tsd_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed with Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A motorist travels from Town A to Town B at a constant speed of 60 km/h, and returns along the exact same route from Town B to Town A at 40 km/h. What is the average speed of the motorist for the entire round trip?",
    options: [
  "48 km/h",
  "50 km/h",
  "46.5 km/h",
  "52 km/h"
],
    correctAnswer: "48 km/h",
    solution: {
      finalAnswer: "48 km/h",
      steps: [
  "Total Distance = D (outward) + D (return) = 2D.",
  "Time taken outward = D / 60.",
  "Time taken return = D / 40.",
  "Total Time = D/60 + D/40 = (2D + 3D) / 120 = 5D / 120 = D / 24.",
  "Average Speed = Total Distance / Total Time = 2D / (D / 24) = 2 * 24 = 48 km/h."
],
      concept: "Harmonic Average Speed with Equal Distances",
      whyItWorks: "Because speed varies over equal distance intervals, more time is spent traveling at the slower speed, weighting the average speed below the arithmetic mean.",
      alternativeMethod: undefined,
      commonMistake: "Taking the simple arithmetic mean (60 + 40) / 2 = 50 km/h. This is only valid when travel times are equal!",
      catTip: "Whenever distance is constant, Average Speed is the harmonic mean of the speeds."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tsd_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Relative Speed with Opposite Directions",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Two trains of lengths 180 meters and 220 meters are running on parallel tracks in opposite directions at 54 km/h and 90 km/h respectively. How many seconds will they take to completely cross each other from the moment their engines meet?",
    options: [
  "10 seconds",
  "12 seconds",
  "8 seconds",
  "15 seconds"
],
    correctAnswer: "10 seconds",
    solution: {
      finalAnswer: "10 seconds",
      steps: [
  "Total distance to cover = Sum of train lengths = 180 m + 220 m = 400 meters.",
  "Relative speed when traveling in opposite directions = 54 km/h + 90 km/h = 144 km/h.",
  "Convert relative speed to m/s: 144 * (5 / 18) = 8 * 5 = 40 m/s.",
  "Time taken to cross = Total distance / Relative speed = 400 m / 40 m/s = 10 seconds."
],
      concept: "Relative Speed with Opposite Directions",
      whyItWorks: "When moving towards each other, the distance separating their furthest tail ends diminishes at the rate equal to the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds instead of adding them, or forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "Remember: 18 km/h = 5 m/s. So 54 km/h = 3 * 5 = 15 m/s, and 90 km/h = 5 * 5 = 25 m/s."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tsd_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Tracks and Meeting Points",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Two runners, Arjun and Bhim, start simultaneously from the same point on a circular track of circumference 600 meters, running in opposite directions with speeds of 18 m/s and 12 m/s respectively. At how many distinct points on the track will they meet as they continue running indefinitely?",
    options: [
  "5",
  "6",
  "10",
  "4"
],
    correctAnswer: "5",
    solution: {
      finalAnswer: "5",
      steps: [
  "Ratio of speeds = v_Arjun : v_Bhim = 18 : 12 = 3 : 2 in simplest co-prime integers (a : b).",
  "When two runners move in OPPOSITE directions on a circular track, the number of distinct meeting points is given by (a + b).",
  "Here a = 3 and b = 2, so number of distinct meeting points = 3 + 2 = 5 points.",
  "These 5 points divide the circumference of 600m into 5 equal arcs of 120 meters each."
],
      concept: "Circular Tracks and Meeting Points",
      whyItWorks: "In the time it takes the relative speed (a + b) to cover 1 full circle, each runner covers an angle proportional to their speed. Reducing to co-prime ensures no overlapping count before repeating.",
      alternativeMethod: undefined,
      commonMistake: "Using the raw speed values 18 + 12 = 30 without reducing the ratio to co-prime integers.",
      catTip: "Always reduce speeds to lowest terms a:b first! Opposite = a + b, Same = a - b."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_tsd_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Escalators and Moving Walkways",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "An escalator moves downward at a constant speed. Varun takes 30 seconds to walk down 50 visible steps on this escalator. When he walks up the same moving escalator at the same walking speed, it takes him 90 seconds. How many total visible steps does the escalator have when stationary?",
    options: null,
    correctAnswer: "75",
    solution: {
      finalAnswer: "75",
      steps: [
  "Let the total number of visible steps be N.",
  "Let Varun's step speed be v steps/second and escalator's speed be e steps/second.",
  "When walking down (with escalator): In 30 seconds, Varun took 50 steps, so his stepping speed v = 50 / 30 = 5/3 steps/sec.",
  "Total steps covered = Varun's steps + Escalator's steps: N = 50 + e * 30.",
  "When walking up (against escalator): Time taken = 90 seconds.",
  "Varun takes v * 90 = (5/3) * 90 = 150 steps.",
  "Escalator moves downward during this time by e * 90 steps.",
  "Net steps climbed up = Varun's steps - Escalator steps: N = 150 - 90e.",
  "Equating both expressions for N: 50 + 30e = 150 - 90e => 120e = 100 => e = 100 / 120 = 5/6 steps/sec.",
  "Substitute e into N: N = 50 + 30 * (5/6) = 50 + 25 = 75 steps."
],
      concept: "Escalators and Moving Walkways",
      whyItWorks: "The number of stationary steps N equals the spatial displacement contributed jointly by the person and the mechanical belt.",
      alternativeMethod: undefined,
      commonMistake: "Confusing the number of steps physically taken by the person with the total physical capacity of the escalator.",
      catTip: "Treat escalators like boats and streams: person is boat, escalator is current, steps taken is distance."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_arith_tsd_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 50 km/h and returns along the exact same highway at 70 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "58.3 km/h",
  "60 km/h",
  "61.5 km/h",
  "55.5 km/h"
],
    correctAnswer: "58.3 km/h",
    solution: {
      finalAnswer: "58.3 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 50. Time return = D / 70.",
  "Total Time = D/(50) + D/(70) = D * (50 + 70) / (50 * 70).",
  "Average Speed = 2D / [D * (50 + 70) / (50 * 70)] = 2 * 50 * 70 / (50 + 70) = 58.3 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (50 + 70)/2 = 60 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 55 km/h and returns along the exact same highway at 75 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "63.5 km/h",
  "65 km/h",
  "66.7 km/h",
  "60.7 km/h"
],
    correctAnswer: "63.5 km/h",
    solution: {
      finalAnswer: "63.5 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 55. Time return = D / 75.",
  "Total Time = D/(55) + D/(75) = D * (55 + 75) / (55 * 75).",
  "Average Speed = 2D / [D * (55 + 75) / (55 * 75)] = 2 * 55 * 75 / (55 + 75) = 63.5 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (55 + 75)/2 = 65 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 60 km/h and returns along the exact same highway at 80 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "68.6 km/h",
  "70 km/h",
  "71.8 km/h",
  "65.8 km/h"
],
    correctAnswer: "68.6 km/h",
    solution: {
      finalAnswer: "68.6 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 60. Time return = D / 80.",
  "Total Time = D/(60) + D/(80) = D * (60 + 80) / (60 * 80).",
  "Average Speed = 2D / [D * (60 + 80) / (60 * 80)] = 2 * 60 * 80 / (60 + 80) = 68.6 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (60 + 80)/2 = 70 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 65 km/h and returns along the exact same highway at 85 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "73.7 km/h",
  "75 km/h",
  "76.9 km/h",
  "70.9 km/h"
],
    correctAnswer: "73.7 km/h",
    solution: {
      finalAnswer: "73.7 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 65. Time return = D / 85.",
  "Total Time = D/(65) + D/(85) = D * (65 + 85) / (65 * 85).",
  "Average Speed = 2D / [D * (65 + 85) / (65 * 85)] = 2 * 65 * 85 / (65 + 85) = 73.7 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (65 + 85)/2 = 75 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 70 km/h and returns along the exact same highway at 90 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "78.8 km/h",
  "80 km/h",
  "82.0 km/h",
  "76.0 km/h"
],
    correctAnswer: "78.8 km/h",
    solution: {
      finalAnswer: "78.8 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 70. Time return = D / 90.",
  "Total Time = D/(70) + D/(90) = D * (70 + 90) / (70 * 90).",
  "Average Speed = 2D / [D * (70 + 90) / (70 * 90)] = 2 * 70 * 90 / (70 + 90) = 78.8 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (70 + 90)/2 = 80 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 75 km/h and returns along the exact same highway at 95 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "83.8 km/h",
  "85 km/h",
  "87.0 km/h",
  "81.0 km/h"
],
    correctAnswer: "83.8 km/h",
    solution: {
      finalAnswer: "83.8 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 75. Time return = D / 95.",
  "Total Time = D/(75) + D/(95) = D * (75 + 95) / (75 * 95).",
  "Average Speed = 2D / [D * (75 + 95) / (75 * 95)] = 2 * 75 * 95 / (75 + 95) = 83.8 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (75 + 95)/2 = 85 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 80 km/h and returns along the exact same highway at 100 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "88.9 km/h",
  "90 km/h",
  "92.1 km/h",
  "86.1 km/h"
],
    correctAnswer: "88.9 km/h",
    solution: {
      finalAnswer: "88.9 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 80. Time return = D / 100.",
  "Total Time = D/(80) + D/(100) = D * (80 + 100) / (80 * 100).",
  "Average Speed = 2D / [D * (80 + 100) / (80 * 100)] = 2 * 80 * 100 / (80 + 100) = 88.9 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (80 + 100)/2 = 90 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 85 km/h and returns along the exact same highway at 105 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "93.9 km/h",
  "95 km/h",
  "97.1 km/h",
  "91.1 km/h"
],
    correctAnswer: "93.9 km/h",
    solution: {
      finalAnswer: "93.9 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 85. Time return = D / 105.",
  "Total Time = D/(85) + D/(105) = D * (85 + 105) / (85 * 105).",
  "Average Speed = 2D / [D * (85 + 105) / (85 * 105)] = 2 * 85 * 105 / (85 + 105) = 93.9 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (85 + 105)/2 = 95 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Harmonic Average Speed over Equal Distances",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A delivery van travels from Town P to Town Q at an average speed of 90 km/h and returns along the exact same highway at 110 km/h. What is the average speed of the van for the entire round trip?",
    options: [
  "99 km/h",
  "100 km/h",
  "102.2 km/h",
  "96.2 km/h"
],
    correctAnswer: "99 km/h",
    solution: {
      finalAnswer: "99 km/h",
      steps: [
  "Average Speed = Total Distance / Total Time.",
  "Let distance between Town P and Town Q = D.",
  "Total distance = 2D. Time outward = D / 90. Time return = D / 110.",
  "Total Time = D/(90) + D/(110) = D * (90 + 110) / (90 * 110).",
  "Average Speed = 2D / [D * (90 + 110) / (90 * 110)] = 2 * 90 * 110 / (90 + 110) = 99 km/h."
],
      concept: "Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.",
      whyItWorks: "More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.",
      alternativeMethod: undefined,
      commonMistake: "Taking arithmetic average: (90 + 110)/2 = 100 km/h.",
      catTip: "Never use (a + b)/2 unless travel times for both legs are strictly equal!"
    },
    estimatedTime: 45,
    learningObjective: "Calculate round-trip average speed using harmonic mean weighting."
  },
  {
    id: "orig_qa_arith_tsd_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 300 meters is traveling at a uniform speed of 90 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "12 seconds",
  "15.0 seconds",
  "10.0 seconds",
  "17.0 seconds"
],
    correctAnswer: "12 seconds",
    solution: {
      finalAnswer: "12 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 90 * (5 / 18) = 25 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 300 meters.",
  "Time taken = Distance / Speed = 300 / 25 = 12 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 90 km/h = 25 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 350 meters is traveling at a uniform speed of 108 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "11.7 seconds",
  "14.7 seconds",
  "9.7 seconds",
  "16.7 seconds"
],
    correctAnswer: "11.7 seconds",
    solution: {
      finalAnswer: "11.7 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 108 * (5 / 18) = 30 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 350 meters.",
  "Time taken = Distance / Speed = 350 / 30 = 11.7 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 108 km/h = 30 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 400 meters is traveling at a uniform speed of 54 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "26.7 seconds",
  "29.7 seconds",
  "24.7 seconds",
  "31.7 seconds"
],
    correctAnswer: "26.7 seconds",
    solution: {
      finalAnswer: "26.7 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 54 * (5 / 18) = 15 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 400 meters.",
  "Time taken = Distance / Speed = 400 / 15 = 26.7 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 54 km/h = 15 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 450 meters is traveling at a uniform speed of 72 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "22.5 seconds",
  "25.5 seconds",
  "20.5 seconds",
  "27.5 seconds"
],
    correctAnswer: "22.5 seconds",
    solution: {
      finalAnswer: "22.5 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 72 * (5 / 18) = 20 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 450 meters.",
  "Time taken = Distance / Speed = 450 / 20 = 22.5 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 72 km/h = 20 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 500 meters is traveling at a uniform speed of 90 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "20 seconds",
  "23.0 seconds",
  "18.0 seconds",
  "25.0 seconds"
],
    correctAnswer: "20 seconds",
    solution: {
      finalAnswer: "20 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 90 * (5 / 18) = 25 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 500 meters.",
  "Time taken = Distance / Speed = 500 / 25 = 20 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 90 km/h = 25 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 550 meters is traveling at a uniform speed of 108 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "18.3 seconds",
  "21.3 seconds",
  "16.3 seconds",
  "23.3 seconds"
],
    correctAnswer: "18.3 seconds",
    solution: {
      finalAnswer: "18.3 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 108 * (5 / 18) = 30 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 550 meters.",
  "Time taken = Distance / Speed = 550 / 30 = 18.3 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 108 km/h = 30 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 600 meters is traveling at a uniform speed of 54 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "40 seconds",
  "43.0 seconds",
  "38.0 seconds",
  "45.0 seconds"
],
    correctAnswer: "40 seconds",
    solution: {
      finalAnswer: "40 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 54 * (5 / 18) = 15 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 600 meters.",
  "Time taken = Distance / Speed = 600 / 15 = 40 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 54 km/h = 15 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 650 meters is traveling at a uniform speed of 72 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "32.5 seconds",
  "35.5 seconds",
  "30.5 seconds",
  "37.5 seconds"
],
    correctAnswer: "32.5 seconds",
    solution: {
      finalAnswer: "32.5 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 72 * (5 / 18) = 20 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 650 meters.",
  "Time taken = Distance / Speed = 650 / 20 = 32.5 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 72 km/h = 20 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Linear Object Transit and Unit Conversion (km/h to m/s)",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "A passenger train of length 700 meters is traveling at a uniform speed of 90 km/h. How many seconds will it take to completely pass a stationary telegraph pole?",
    options: [
  "28 seconds",
  "31.0 seconds",
  "26.0 seconds",
  "33.0 seconds"
],
    correctAnswer: "28 seconds",
    solution: {
      finalAnswer: "28 seconds",
      steps: [
  "Convert speed from km/h to m/s: Speed = 90 * (5 / 18) = 25 m/s.",
  "To pass a point object (pole), the train must traverse its own length: Distance = 700 meters.",
  "Time taken = Distance / Speed = 700 / 25 = 28 seconds."
],
      concept: "Time = Length of Train / Speed in m/s.",
      whyItWorks: "A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to convert km/h to m/s by multiplying by 5/18.",
      catTip: "18 km/h = 5 m/s, so 90 km/h = 25 m/s directly."
    },
    estimatedTime: 50,
    learningObjective: "Master velocity unit conversion and point-object transit mechanics."
  },
  {
    id: "orig_qa_arith_tsd_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 400 km apart on a straight railway line. Train 1 leaves A towards B at 50 km/h, and at the same time Train 2 leaves B towards A at 70 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.33 hours",
  "3.93 hours",
  "2.93 hours",
  "4.53 hours"
],
    correctAnswer: "3.33 hours",
    solution: {
      finalAnswer: "3.33 hours",
      steps: [
  "Distance separating stations = 400 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 50 + 70 = 120 km/h.",
  "Time to meet = Total Distance / Relative Speed = 400 / 120 = 3.33 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 450 km apart on a straight railway line. Train 1 leaves A towards B at 55 km/h, and at the same time Train 2 leaves B towards A at 75 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.46 hours",
  "4.06 hours",
  "3.06 hours",
  "4.66 hours"
],
    correctAnswer: "3.46 hours",
    solution: {
      finalAnswer: "3.46 hours",
      steps: [
  "Distance separating stations = 450 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 55 + 75 = 130 km/h.",
  "Time to meet = Total Distance / Relative Speed = 450 / 130 = 3.46 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 500 km apart on a straight railway line. Train 1 leaves A towards B at 60 km/h, and at the same time Train 2 leaves B towards A at 80 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.57 hours",
  "4.17 hours",
  "3.17 hours",
  "4.77 hours"
],
    correctAnswer: "3.57 hours",
    solution: {
      finalAnswer: "3.57 hours",
      steps: [
  "Distance separating stations = 500 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 60 + 80 = 140 km/h.",
  "Time to meet = Total Distance / Relative Speed = 500 / 140 = 3.57 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 550 km apart on a straight railway line. Train 1 leaves A towards B at 65 km/h, and at the same time Train 2 leaves B towards A at 85 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.67 hours",
  "4.27 hours",
  "3.27 hours",
  "4.87 hours"
],
    correctAnswer: "3.67 hours",
    solution: {
      finalAnswer: "3.67 hours",
      steps: [
  "Distance separating stations = 550 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 65 + 85 = 150 km/h.",
  "Time to meet = Total Distance / Relative Speed = 550 / 150 = 3.67 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 600 km apart on a straight railway line. Train 1 leaves A towards B at 70 km/h, and at the same time Train 2 leaves B towards A at 90 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.75 hours",
  "4.35 hours",
  "3.35 hours",
  "4.95 hours"
],
    correctAnswer: "3.75 hours",
    solution: {
      finalAnswer: "3.75 hours",
      steps: [
  "Distance separating stations = 600 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 70 + 90 = 160 km/h.",
  "Time to meet = Total Distance / Relative Speed = 600 / 160 = 3.75 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 650 km apart on a straight railway line. Train 1 leaves A towards B at 75 km/h, and at the same time Train 2 leaves B towards A at 95 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.82 hours",
  "4.42 hours",
  "3.42 hours",
  "5.02 hours"
],
    correctAnswer: "3.82 hours",
    solution: {
      finalAnswer: "3.82 hours",
      steps: [
  "Distance separating stations = 650 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 75 + 95 = 170 km/h.",
  "Time to meet = Total Distance / Relative Speed = 650 / 170 = 3.82 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 700 km apart on a straight railway line. Train 1 leaves A towards B at 80 km/h, and at the same time Train 2 leaves B towards A at 100 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.89 hours",
  "4.49 hours",
  "3.49 hours",
  "5.09 hours"
],
    correctAnswer: "3.89 hours",
    solution: {
      finalAnswer: "3.89 hours",
      steps: [
  "Distance separating stations = 700 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 80 + 100 = 180 km/h.",
  "Time to meet = Total Distance / Relative Speed = 700 / 180 = 3.89 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 750 km apart on a straight railway line. Train 1 leaves A towards B at 85 km/h, and at the same time Train 2 leaves B towards A at 105 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "3.95 hours",
  "4.55 hours",
  "3.55 hours",
  "5.15 hours"
],
    correctAnswer: "3.95 hours",
    solution: {
      finalAnswer: "3.95 hours",
      steps: [
  "Distance separating stations = 750 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 85 + 105 = 190 km/h.",
  "Time to meet = Total Distance / Relative Speed = 750 / 190 = 3.95 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Opposite Direction Convergent Relative Speed",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "Stations A and B are 800 km apart on a straight railway line. Train 1 leaves A towards B at 90 km/h, and at the same time Train 2 leaves B towards A at 110 km/h. How many hours after departure will the two trains cross each other?",
    options: [
  "4 hours",
  "4.60 hours",
  "3.60 hours",
  "5.20 hours"
],
    correctAnswer: "4 hours",
    solution: {
      finalAnswer: "4 hours",
      steps: [
  "Distance separating stations = 800 km.",
  "Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = 90 + 110 = 200 km/h.",
  "Time to meet = Total Distance / Relative Speed = 800 / 200 = 4 hours."
],
      concept: "Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).",
      whyItWorks: "The gap between two objects closing in on each other decreases at the sum of their individual velocities.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting speeds when objects are moving towards each other.",
      catTip: "Opposite directions: ADD speeds; Same direction: SUBTRACT speeds."
    },
    estimatedTime: 70,
    learningObjective: "Apply convergent relative speed formulations to collision and meeting points."
  },
  {
    id: "orig_qa_arith_tsd_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 19 m/s and Y runs at 12 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "39",
    solution: {
      finalAnswer: "39",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 19 + 12 = 31 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (31) = 39 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 21 m/s and Y runs at 13 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "35",
    solution: {
      finalAnswer: "35",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 21 + 13 = 34 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (34) = 35 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 23 m/s and Y runs at 14 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "32",
    solution: {
      finalAnswer: "32",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 23 + 14 = 37 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (37) = 32 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 25 m/s and Y runs at 15 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "30",
    solution: {
      finalAnswer: "30",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 25 + 15 = 40 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (40) = 30 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 27 m/s and Y runs at 16 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "28",
    solution: {
      finalAnswer: "28",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 27 + 16 = 43 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (43) = 28 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 29 m/s and Y runs at 17 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "26",
    solution: {
      finalAnswer: "26",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 29 + 17 = 46 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (46) = 26 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 31 m/s and Y runs at 18 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "24",
    solution: {
      finalAnswer: "24",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 31 + 18 = 49 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (49) = 24 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 33 m/s and Y runs at 19 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "23",
    solution: {
      finalAnswer: "23",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 33 + 19 = 52 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (52) = 23 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_arith_tsd_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_arith_tsd",
    topicName: "Arithmetic",
    subtopic: "Time Speed & Distance",
    concept: "Circular Track Convergent Kinematics & First Meeting Point",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two athletes X and Y run around a circular track of circumference 1200 meters starting from the same point at the same time in opposite directions. X runs at 35 m/s and Y runs at 20 m/s. How many seconds after starting will they meet for the first time?",
    options: null,
    correctAnswer: "22",
    solution: {
      finalAnswer: "22",
      steps: [
  "Circumference of circular track = 1200 meters.",
  "Since they run in opposite directions, relative speed = 35 + 20 = 55 m/s.",
  "They meet for the first time when the sum of distances covered equals exactly 1 full circuit (1200 m).",
  "Time of first meeting = Circumference / (Relative Speed) = 1200 / (55) = 22 seconds."
],
      concept: "Time to meet on circular track (opposite) = Track Length / (V1 + V2).",
      whyItWorks: "On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.",
      alternativeMethod: undefined,
      commonMistake: "Using difference of speeds when runners travel in opposite directions.",
      catTip: "First meeting in opposite directions is always Track Length / (V1 + V2)."
    },
    estimatedTime: 75,
    learningObjective: "Solve closed-loop circular motion meetings using circumferential relative speed."
  },
  {
    id: "orig_qa_alg_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_algebra_equations",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Roots and Coefficients (Vieta\\",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation 2x² - 7x + 3 = 0 are α and β, what is the value of (1/α + 1/β)?",
    options: [
  "7/3",
  "3/7",
  "7/2",
  "2/3"
],
    correctAnswer: "7/3",
    solution: {
      finalAnswer: "7/3",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots (α + β) = -b/a and product of roots (αβ) = c/a.",
  "Here a = 2, b = -7, c = 3.",
  "Sum of roots α + β = -(-7) / 2 = 7/2.",
  "Product of roots αβ = 3/2.",
  "We need 1/α + 1/β = (α + β) / (αβ).",
  "Substitute values: (7/2) / (3/2) = 7/3."
],
      concept: "Roots and Coefficients (Vieta\\",
      whyItWorks: "Combining fractions yields a symmetric expression of roots without needing to compute the individual values of α and β.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in the sum formula -b/a.",
      catTip: "Never solve for individual roots when evaluating symmetric algebraic expressions; directly use sum and product formulas."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_alg_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_algebra_equations",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Condition for Common Roots",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The equations x² + px + 12 = 0 and x² + qx + 15 = 0 have a common root. If the second roots of the equations are in the ratio 4 : 5, find the common root.",
    options: [
  "3 or -3",
  "2 or -2",
  "4 or -4",
  "1 or -1"
],
    correctAnswer: "3 or -3",
    solution: {
      finalAnswer: "3 or -3",
      steps: [
  "Let the common root be r.",
  "Let the other root of the first equation be α, and the other root of the second equation be β.",
  "From product of roots: r * α = 12 and r * β = 15.",
  "Dividing the two equations: (r * α) / (r * β) = α / β = 12 / 15 = 4 / 5.",
  "The question states the second roots are in the ratio 4 : 5, which perfectly matches α : β = 4 : 5.",
  "Now, let α = 4k and β = 5k.",
  "Then r * (4k) = 12 => r * k = 3.",
  "If k = 1, then α = 4, β = 5, and r = 3 (or -3 if k = -1).",
  "Let us verify: If r = 3, α = 4 => roots 3, 4: x² - 7x + 12 = 0. Roots 3, 5: x² - 8x + 15 = 0. Both have root 3.",
  "If r = -3, α = -4 => roots -3, -4: x² + 7x + 12 = 0. Roots -3, -5: x² + 8x + 15 = 0. Both have root -3.",
  "Therefore, the common root can be 3 or -3."
],
      concept: "Condition for Common Roots",
      whyItWorks: "Taking the ratio of constant terms cancels the common root, revealing the exact relationship between the distinct roots.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting equations prematurely before checking the multiplicative properties of the constant terms.",
      catTip: "If two quadratics share a root, look at the ratio of their constant terms—it often directly mirrors the ratio of the non-common roots."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_alg_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_algebra_equations",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Non-Negative Integer Solutions (Coins / Linear Diophantine)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "How many pairs of positive integers (x, y) satisfy the equation 5x + 7y = 200?",
    options: [
  "5",
  "6",
  "4",
  "7"
],
    correctAnswer: "5",
    solution: {
      finalAnswer: "5",
      steps: [
  "Equation: 5x + 7y = 200.",
  "Take modulo 5 on both sides: (5x + 7y) mod 5 = 200 mod 5 => 2y ≡ 0 (mod 5).",
  "Since gcd(2, 5) = 1, y must be a multiple of 5.",
  "Let y = 5k, where k is an integer.",
  "Substitute into equation: 5x + 7(5k) = 200 => 5x + 35k = 200 => x + 7k = 40 => x = 40 - 7k.",
  "We require positive integers: x > 0 and y > 0.",
  "y > 0 => 5k > 0 => k ≥ 1.",
  "x > 0 => 40 - 7k > 0 => 7k < 40 => k ≤ 5.71, so k ≤ 5.",
  "Possible integer values for k: k ∈ {1, 2, 3, 4, 5}.",
  "Each value of k yields a unique valid pair (x, y). Total pairs = 5."
],
      concept: "Non-Negative Integer Solutions (Coins / Linear Diophantine)",
      whyItWorks: "Taking modulo with respect to the coefficient of one variable eliminates that variable and forces congruence conditions on the other.",
      alternativeMethod: undefined,
      commonMistake: "Including k = 0 (which gives y = 0, not a positive integer) or forgetting that y must be positive.",
      catTip: "Number of positive solutions of ax + by = c is approximately c / (a * b). Here 200 / 35 ≈ 5.7 => either 5 or 6 solutions."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_alg_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_algebra_equations",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Descartes\\",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the number of real roots of the equation x⁴ - 4x³ + 6x² - 4x - 15 = 0.",
    options: null,
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "Notice the binomial expansion: (x - 1)⁴ = x⁴ - 4x³ + 6x² - 4x + 1.",
  "Our equation can be rewritten as: (x⁴ - 4x³ + 6x² - 4x + 1) - 16 = 0.",
  "This simplifies to: (x - 1)⁴ - 16 = 0.",
  "(x - 1)⁴ = 16 = 2⁴.",
  "Taking fourth root on both sides in the real domain:",
  "(x - 1)² = 4 => (x - 1) = ±2.",
  "Case 1: x - 1 = 2 => x = 3.",
  "Case 2: x - 1 = -2 => x = -1.",
  "(Note: (x - 1)² = -4 yields two complex roots x = 1 ± 2i).",
  "Therefore, there are exactly 2 real roots."
],
      concept: "Descartes\\",
      whyItWorks: "The coefficients 1, -4, 6, -4 are the exact binomial coefficients of (x - 1)⁴, allowing an immediate algebraic collapse.",
      alternativeMethod: undefined,
      commonMistake: "Assuming a 4th degree equation must have 4 real roots.",
      catTip: "Look for binomial coefficient patterns (1, 3, 3, 1 or 1, 4, 6, 4, 1) in CAT polynomial questions."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_alg_quadratics_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 11x + 28 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "39",
  "308",
  "17",
  "41"
],
    correctAnswer: "39",
    solution: {
      finalAnswer: "39",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-11)/1 = 11.",
  "Product of roots αβ = c/a = 28/1 = 28.",
  "Value of (α + β) + αβ = 11 + 28 = 39."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 13x + 40 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "53",
  "520",
  "27",
  "55"
],
    correctAnswer: "53",
    solution: {
      finalAnswer: "53",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-13)/1 = 13.",
  "Product of roots αβ = c/a = 40/1 = 40.",
  "Value of (α + β) + αβ = 13 + 40 = 53."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 15x + 54 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "69",
  "810",
  "39",
  "71"
],
    correctAnswer: "69",
    solution: {
      finalAnswer: "69",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-15)/1 = 15.",
  "Product of roots αβ = c/a = 54/1 = 54.",
  "Value of (α + β) + αβ = 15 + 54 = 69."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 17x + 70 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "87",
  "1190",
  "53",
  "89"
],
    correctAnswer: "87",
    solution: {
      finalAnswer: "87",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-17)/1 = 17.",
  "Product of roots αβ = c/a = 70/1 = 70.",
  "Value of (α + β) + αβ = 17 + 70 = 87."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 19x + 88 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "107",
  "1672",
  "69",
  "109"
],
    correctAnswer: "107",
    solution: {
      finalAnswer: "107",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-19)/1 = 19.",
  "Product of roots αβ = c/a = 88/1 = 88.",
  "Value of (α + β) + αβ = 19 + 88 = 107."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 21x + 108 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "129",
  "2268",
  "87",
  "131"
],
    correctAnswer: "129",
    solution: {
      finalAnswer: "129",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-21)/1 = 21.",
  "Product of roots αβ = c/a = 108/1 = 108.",
  "Value of (α + β) + αβ = 21 + 108 = 129."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 23x + 130 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "153",
  "2990",
  "107",
  "155"
],
    correctAnswer: "153",
    solution: {
      finalAnswer: "153",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-23)/1 = 23.",
  "Product of roots αβ = c/a = 130/1 = 130.",
  "Value of (α + β) + αβ = 23 + 130 = 153."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 25x + 154 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "179",
  "3850",
  "129",
  "181"
],
    correctAnswer: "179",
    solution: {
      finalAnswer: "179",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-25)/1 = 25.",
  "Product of roots αβ = c/a = 154/1 = 154.",
  "Value of (α + β) + αβ = 25 + 154 = 179."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Vieta's Formulas: Sum and Product of Quadratic Roots",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "If the roots of the quadratic equation x² - 27x + 180 = 0 are α and β, what is the value of (α + β) + αβ?",
    options: [
  "207",
  "4860",
  "153",
  "209"
],
    correctAnswer: "207",
    solution: {
      finalAnswer: "207",
      steps: [
  "For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-27)/1 = 27.",
  "Product of roots αβ = c/a = 180/1 = 180.",
  "Value of (α + β) + αβ = 27 + 180 = 207."
],
      concept: "Vieta's Relations: Sum of roots = -b/a, Product of roots = c/a.",
      whyItWorks: "Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting the negative sign in sum of roots (-b/a).",
      catTip: "Never solve for individual roots α and β when symmetric expressions are requested!"
    },
    estimatedTime: 40,
    learningObjective: "Utilize Vieta's formulas to evaluate symmetric root combinations directly."
  },
  {
    id: "orig_qa_alg_quadratics_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 11x + 28 = 0, find the value of (1/α + 1/β).",
    options: [
  "11/28",
  "28/11",
  "10/28",
  "12/28"
],
    correctAnswer: "11/28",
    solution: {
      finalAnswer: "11/28",
      steps: [
  "Sum of roots α + β = 11.",
  "Product of roots αβ = 28.",
  "1/α + 1/β = (α + β) / (αβ) = 11 / 28."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 13x + 40 = 0, find the value of (1/α + 1/β).",
    options: [
  "13/40",
  "40/13",
  "12/40",
  "14/40"
],
    correctAnswer: "13/40",
    solution: {
      finalAnswer: "13/40",
      steps: [
  "Sum of roots α + β = 13.",
  "Product of roots αβ = 40.",
  "1/α + 1/β = (α + β) / (αβ) = 13 / 40."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 15x + 54 = 0, find the value of (1/α + 1/β).",
    options: [
  "15/54",
  "54/15",
  "14/54",
  "16/54"
],
    correctAnswer: "15/54",
    solution: {
      finalAnswer: "15/54",
      steps: [
  "Sum of roots α + β = 15.",
  "Product of roots αβ = 54.",
  "1/α + 1/β = (α + β) / (αβ) = 15 / 54."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 17x + 70 = 0, find the value of (1/α + 1/β).",
    options: [
  "17/70",
  "70/17",
  "16/70",
  "18/70"
],
    correctAnswer: "17/70",
    solution: {
      finalAnswer: "17/70",
      steps: [
  "Sum of roots α + β = 17.",
  "Product of roots αβ = 70.",
  "1/α + 1/β = (α + β) / (αβ) = 17 / 70."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 19x + 88 = 0, find the value of (1/α + 1/β).",
    options: [
  "19/88",
  "88/19",
  "18/88",
  "20/88"
],
    correctAnswer: "19/88",
    solution: {
      finalAnswer: "19/88",
      steps: [
  "Sum of roots α + β = 19.",
  "Product of roots αβ = 88.",
  "1/α + 1/β = (α + β) / (αβ) = 19 / 88."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 21x + 108 = 0, find the value of (1/α + 1/β).",
    options: [
  "21/108",
  "108/21",
  "20/108",
  "22/108"
],
    correctAnswer: "21/108",
    solution: {
      finalAnswer: "21/108",
      steps: [
  "Sum of roots α + β = 21.",
  "Product of roots αβ = 108.",
  "1/α + 1/β = (α + β) / (αβ) = 21 / 108."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 23x + 130 = 0, find the value of (1/α + 1/β).",
    options: [
  "23/130",
  "130/23",
  "22/130",
  "24/130"
],
    correctAnswer: "23/130",
    solution: {
      finalAnswer: "23/130",
      steps: [
  "Sum of roots α + β = 23.",
  "Product of roots αβ = 130.",
  "1/α + 1/β = (α + β) / (αβ) = 23 / 130."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 25x + 154 = 0, find the value of (1/α + 1/β).",
    options: [
  "25/154",
  "154/25",
  "24/154",
  "26/154"
],
    correctAnswer: "25/154",
    solution: {
      finalAnswer: "25/154",
      steps: [
  "Sum of roots α + β = 25.",
  "Product of roots αβ = 154.",
  "1/α + 1/β = (α + β) / (αβ) = 25 / 154."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Reciprocal Root Summation in Quadratics",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "If α and β are the roots of the quadratic equation x² - 27x + 180 = 0, find the value of (1/α + 1/β).",
    options: [
  "27/180",
  "180/27",
  "26/180",
  "28/180"
],
    correctAnswer: "27/180",
    solution: {
      finalAnswer: "27/180",
      steps: [
  "Sum of roots α + β = 27.",
  "Product of roots αβ = 180.",
  "1/α + 1/β = (α + β) / (αβ) = 27 / 180."
],
      concept: "1/α + 1/β = (α + β) / (αβ) = -b/c.",
      whyItWorks: "Algebraic fraction addition yields a direct quotient of standard Vieta parameters.",
      alternativeMethod: undefined,
      commonMistake: "Inverting roots individually instead of taking common denominator.",
      catTip: "Direct shortcut: 1/α + 1/β = -b / c."
    },
    estimatedTime: 45,
    learningObjective: "Evaluate reciprocal algebraic symmetric functions of polynomial roots."
  },
  {
    id: "orig_qa_alg_quadratics_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 25 = 0 possess real and equal roots?",
    options: [
  "10",
  "14",
  "8",
  "20"
],
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 25.",
  "D = (-k)² - 4(1)(25) = k² - 100 = 0.",
  "k² = 100 => k = √(100) = 10 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 36 = 0 possess real and equal roots?",
    options: [
  "12",
  "16",
  "10",
  "24"
],
    correctAnswer: "12",
    solution: {
      finalAnswer: "12",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 36.",
  "D = (-k)² - 4(1)(36) = k² - 144 = 0.",
  "k² = 144 => k = √(144) = 12 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 49 = 0 possess real and equal roots?",
    options: [
  "14",
  "18",
  "12",
  "28"
],
    correctAnswer: "14",
    solution: {
      finalAnswer: "14",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 49.",
  "D = (-k)² - 4(1)(49) = k² - 196 = 0.",
  "k² = 196 => k = √(196) = 14 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 64 = 0 possess real and equal roots?",
    options: [
  "16",
  "20",
  "14",
  "32"
],
    correctAnswer: "16",
    solution: {
      finalAnswer: "16",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 64.",
  "D = (-k)² - 4(1)(64) = k² - 256 = 0.",
  "k² = 256 => k = √(256) = 16 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 81 = 0 possess real and equal roots?",
    options: [
  "18",
  "22",
  "16",
  "36"
],
    correctAnswer: "18",
    solution: {
      finalAnswer: "18",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 81.",
  "D = (-k)² - 4(1)(81) = k² - 324 = 0.",
  "k² = 324 => k = √(324) = 18 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 100 = 0 possess real and equal roots?",
    options: [
  "20",
  "24",
  "18",
  "40"
],
    correctAnswer: "20",
    solution: {
      finalAnswer: "20",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 100.",
  "D = (-k)² - 4(1)(100) = k² - 400 = 0.",
  "k² = 400 => k = √(400) = 20 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 121 = 0 possess real and equal roots?",
    options: [
  "22",
  "26",
  "20",
  "44"
],
    correctAnswer: "22",
    solution: {
      finalAnswer: "22",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 121.",
  "D = (-k)² - 4(1)(121) = k² - 484 = 0.",
  "k² = 484 => k = √(484) = 22 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 144 = 0 possess real and equal roots?",
    options: [
  "24",
  "28",
  "22",
  "48"
],
    correctAnswer: "24",
    solution: {
      finalAnswer: "24",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 144.",
  "D = (-k)² - 4(1)(144) = k² - 576 = 0.",
  "k² = 576 => k = √(576) = 24 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Zero Discriminant Condition for Real and Equal Roots",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "For what positive value of k will the quadratic equation x² - kx + 169 = 0 possess real and equal roots?",
    options: [
  "26",
  "30",
  "24",
  "52"
],
    correctAnswer: "26",
    solution: {
      finalAnswer: "26",
      steps: [
  "A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.",
  "Here a = 1, b = -k, c = 169.",
  "D = (-k)² - 4(1)(169) = k² - 676 = 0.",
  "k² = 676 => k = √(676) = 26 (since k > 0)."
],
      concept: "D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.",
      whyItWorks: "The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to multiply c by 4 in 4ac.",
      catTip: "For x² - kx + c = 0 to have equal roots, k = 2√c."
    },
    estimatedTime: 60,
    learningObjective: "Apply discriminant criteria to enforce multiplicity and root equality constraints."
  },
  {
    id: "orig_qa_alg_quadratics_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 4x² - 12x + 20.",
    options: null,
    correctAnswer: "11",
    solution: {
      finalAnswer: "11",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-12) / (2 * 4) = 12 / 8 = 1.5.",
  "Minimum value = f(1.5) = 4(1.5)² + (-12)(1.5) + 20 = 11."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 2x² - 16x + 25.",
    options: null,
    correctAnswer: "-7",
    solution: {
      finalAnswer: "-7",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-16) / (2 * 2) = 16 / 4 = 4.",
  "Minimum value = f(4) = 2(4)² + (-16)(4) + 25 = -7."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 3x² - 20x + 30.",
    options: null,
    correctAnswer: "-3.3",
    solution: {
      finalAnswer: "-3.3",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-20) / (2 * 3) = 20 / 6 = 3.3333333333333335.",
  "Minimum value = f(3.3333333333333335) = 3(3.3333333333333335)² + (-20)(3.3333333333333335) + 30 = -3.3."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 4x² - 24x + 35.",
    options: null,
    correctAnswer: "-1",
    solution: {
      finalAnswer: "-1",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-24) / (2 * 4) = 24 / 8 = 3.",
  "Minimum value = f(3) = 4(3)² + (-24)(3) + 35 = -1."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 2x² - 28x + 40.",
    options: null,
    correctAnswer: "-58",
    solution: {
      finalAnswer: "-58",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-28) / (2 * 2) = 28 / 4 = 7.",
  "Minimum value = f(7) = 2(7)² + (-28)(7) + 40 = -58."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 3x² - 32x + 45.",
    options: null,
    correctAnswer: "-40.3",
    solution: {
      finalAnswer: "-40.3",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-32) / (2 * 3) = 32 / 6 = 5.333333333333333.",
  "Minimum value = f(5.333333333333333) = 3(5.333333333333333)² + (-32)(5.333333333333333) + 45 = -40.3."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 4x² - 36x + 50.",
    options: null,
    correctAnswer: "-31",
    solution: {
      finalAnswer: "-31",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-36) / (2 * 4) = 36 / 8 = 4.5.",
  "Minimum value = f(4.5) = 4(4.5)² + (-36)(4.5) + 50 = -31."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 2x² - 40x + 55.",
    options: null,
    correctAnswer: "-145",
    solution: {
      finalAnswer: "-145",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-40) / (2 * 2) = 40 / 4 = 10.",
  "Minimum value = f(10) = 2(10)² + (-40)(10) + 55 = -145."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_alg_quadratics_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_alg_quadratics",
    topicName: "Algebra",
    subtopic: "Quadratic & Linear Equations",
    concept: "Parabolic Vertex Optimization & Quadratic Extrema",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Find the minimum real value of the quadratic function f(x) = 3x² - 44x + 60.",
    options: null,
    correctAnswer: "-101.3",
    solution: {
      finalAnswer: "-101.3",
      steps: [
  "For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).",
  "x_min = -(-44) / (2 * 3) = 44 / 6 = 7.333333333333333.",
  "Minimum value = f(7.333333333333333) = 3(7.333333333333333)² + (-44)(7.333333333333333) + 60 = -101.3."
],
      concept: "Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).",
      whyItWorks: "Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.",
      alternativeMethod: undefined,
      commonMistake: "Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).",
      catTip: "Minimum value = (4ac - b²) / (4a)."
    },
    estimatedTime: 70,
    learningObjective: "Optimize quadratic polynomials using vertex coordinates and completion of squares."
  },
  {
    id: "orig_qa_geom_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geometry",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triples & Inradius",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "A right-angled triangle has legs of lengths 15 cm and 20 cm. What is the length of the altitude drawn from the right angle to the hypotenuse?",
    options: [
  "12 cm",
  "10 cm",
  "12.5 cm",
  "14 cm"
],
    correctAnswer: "12 cm",
    solution: {
      finalAnswer: "12 cm",
      steps: [
  "Hypotenuse = √(15² + 20²) = √(225 + 400) = √625 = 25 cm.",
  "Area of triangle can be calculated in two ways:",
  "1) Using the two legs: Area = (1/2) * leg1 * leg2 = (1/2) * 15 * 20 = 150 cm².",
  "2) Using hypotenuse and altitude h: Area = (1/2) * hypotenuse * h = (1/2) * 25 * h.",
  "Equating the two areas: (1/2) * 25 * h = 150 => 25 * h = 300 => h = 12 cm."
],
      concept: "Pythagorean Triples & Inradius",
      whyItWorks: "Area is invariant to whichever side is chosen as the base.",
      alternativeMethod: undefined,
      commonMistake: "Confusing the median to hypotenuse (which is c/2 = 12.5 cm) with the altitude to hypotenuse.",
      catTip: "In a right triangle: Altitude to hypotenuse = (Product of legs) / Hypotenuse."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_geom_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geometry",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Power of a Point Theorem",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT of length 12 cm is drawn to a circle. A secant line passing through P intersects the circle at points A and B, such that PA is 8 cm. What is the length of the chord AB?",
    options: [
  "10 cm",
  "18 cm",
  "8 cm",
  "12 cm"
],
    correctAnswer: "10 cm",
    solution: {
      finalAnswer: "10 cm",
      steps: [
  "According to the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "Given PT = 12 cm and PA = 8 cm.",
  "12² = 8 * PB => 144 = 8 * PB => PB = 144 / 8 = 18 cm.",
  "The secant PB consists of segment PA and chord AB: PB = PA + AB.",
  "Therefore, AB = PB - PA = 18 - 8 = 10 cm."
],
      concept: "Tangent-Secant Power of a Point Theorem",
      whyItWorks: "Triangles PTA and PBT are similar by the alternate segment angle equality, proving PT / PA = PB / PT.",
      alternativeMethod: undefined,
      commonMistake: "Setting PT² = PA * AB, forgetting that PB is the entire secant length from external point P to second intersection B.",
      catTip: "Always remember: The secant length in the power theorem is measured from the external point P to the far intersection B, not just the chord AB."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_geom_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geometry",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius Theorem & Medians",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In triangle ABC, side AB = 7 cm, AC = 9 cm, and median AD = 7 cm to side BC. What is the length of side BC in cm?",
    options: [
  "8 cm",
  "10 cm",
  "12 cm",
  "6 cm"
],
    correctAnswer: "8 cm",
    solution: {
      finalAnswer: "8 cm",
      steps: [
  "By Apollonius Theorem: AB² + AC² = 2 * (AD² + BD²), where D is the midpoint of BC.",
  "Given AB = 7 cm, AC = 9 cm, and median AD = 7 cm.",
  "Substitute the given values into the formula:",
  "7² + 9² = 2 * (7² + BD²)",
  "49 + 81 = 2 * (49 + BD²)",
  "130 = 2 * (49 + BD²)",
  "65 = 49 + BD² => BD² = 65 - 49 = 16.",
  "Since length is positive: BD = √16 = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem & Medians",
      whyItWorks: "Follows directly from applying the Law of Cosines to supplementary angles ∠ADB and ∠ADC at the midpoint D.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting to double the right-hand side or confusing BD with the whole side BC.",
      catTip: "Whenever a problem mentions the length of a median, Apollonius Theorem is almost certainly the required tool."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_geom_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geometry",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Mass Point Geometry & Ceva\\",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, D is a point on BC such that BD : DC = 3 : 2, and E is a point on AC such that AE : EC = 3 : 2. If AD and BE intersect at point O, find the ratio AO : OD. (Express as a decimal, e.g. if 5/2 type 2.5)",
    options: null,
    correctAnswer: "2.5",
    solution: {
      finalAnswer: "2.5",
      steps: [
  "Apply Mass Point Geometry to find the balance ratio along cevian AD.",
  "Along edge BC with fulcrum at D: Mass(B) * BD = Mass(C) * CD.",
  "Given BD : DC = 3 : 2 => Mass(B) * 3 = Mass(C) * 2 => Mass(B) = (2/3) * Mass(C).",
  "Along edge AC with fulcrum at E: Mass(A) * AE = Mass(C) * CE.",
  "Given AE : EC = 3 : 2 => Mass(A) * 3 = Mass(C) * 2 => Mass(A) = (2/3) * Mass(C).",
  "To obtain integer masses, choose Mass(C) = 3.",
  "Then Mass(B) = 2 and Mass(A) = 2.",
  "The composite mass at point D is the sum of masses at B and C: Mass(D) = Mass(B) + Mass(C) = 2 + 3 = 5.",
  "Along the cevian AD, the intersection O is the center of mass balancing A and D:",
  "Mass(A) * AO = Mass(D) * OD",
  "2 * AO = 5 * OD => AO / OD = 5 / 2 = 2.5."
],
      concept: "Mass Point Geometry & Ceva\\",
      whyItWorks: "Assigning masses to vertices so each cevian acts as a balance beam transforms complicated Euclidean ratio proofs into simple torque equilibrium equations.",
      alternativeMethod: undefined,
      commonMistake: "Inverting the lever arm ratio (putting mass proportional to segment length rather than inversely proportional).",
      catTip: "Whenever two cevians intersect inside a triangle, assign mass at the shared vertex first to quickly balance both edges."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_geom_triangles_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 10 cm. What is the area of this triangle (in cm²)?",
    options: [
  "43.3 cm²",
  "47.8 cm²",
  "50.0 cm²",
  "40.1 cm²"
],
    correctAnswer: "43.3 cm²",
    solution: {
      finalAnswer: "43.3 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 10 cm.",
  "Area = (√3 / 4) * (10)² = (√3 / 4) * 100 ≈ 0.433 * 100 ≈ 43.3 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 12 cm. What is the area of this triangle (in cm²)?",
    options: [
  "62.4 cm²",
  "66.9 cm²",
  "72.0 cm²",
  "59.2 cm²"
],
    correctAnswer: "62.4 cm²",
    solution: {
      finalAnswer: "62.4 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 12 cm.",
  "Area = (√3 / 4) * (12)² = (√3 / 4) * 144 ≈ 0.433 * 144 ≈ 62.4 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 14 cm. What is the area of this triangle (in cm²)?",
    options: [
  "84.9 cm²",
  "89.4 cm²",
  "98.0 cm²",
  "81.7 cm²"
],
    correctAnswer: "84.9 cm²",
    solution: {
      finalAnswer: "84.9 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 14 cm.",
  "Area = (√3 / 4) * (14)² = (√3 / 4) * 196 ≈ 0.433 * 196 ≈ 84.9 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 16 cm. What is the area of this triangle (in cm²)?",
    options: [
  "110.9 cm²",
  "115.4 cm²",
  "128.0 cm²",
  "107.7 cm²"
],
    correctAnswer: "110.9 cm²",
    solution: {
      finalAnswer: "110.9 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 16 cm.",
  "Area = (√3 / 4) * (16)² = (√3 / 4) * 256 ≈ 0.433 * 256 ≈ 110.9 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 18 cm. What is the area of this triangle (in cm²)?",
    options: [
  "140.3 cm²",
  "144.8 cm²",
  "162.0 cm²",
  "137.1 cm²"
],
    correctAnswer: "140.3 cm²",
    solution: {
      finalAnswer: "140.3 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 18 cm.",
  "Area = (√3 / 4) * (18)² = (√3 / 4) * 324 ≈ 0.433 * 324 ≈ 140.3 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 20 cm. What is the area of this triangle (in cm²)?",
    options: [
  "173.2 cm²",
  "177.7 cm²",
  "200.0 cm²",
  "170.0 cm²"
],
    correctAnswer: "173.2 cm²",
    solution: {
      finalAnswer: "173.2 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 20 cm.",
  "Area = (√3 / 4) * (20)² = (√3 / 4) * 400 ≈ 0.433 * 400 ≈ 173.2 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 22 cm. What is the area of this triangle (in cm²)?",
    options: [
  "209.6 cm²",
  "214.1 cm²",
  "242.0 cm²",
  "206.4 cm²"
],
    correctAnswer: "209.6 cm²",
    solution: {
      finalAnswer: "209.6 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 22 cm.",
  "Area = (√3 / 4) * (22)² = (√3 / 4) * 484 ≈ 0.433 * 484 ≈ 209.6 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 24 cm. What is the area of this triangle (in cm²)?",
    options: [
  "249.4 cm²",
  "253.9 cm²",
  "288.0 cm²",
  "246.2 cm²"
],
    correctAnswer: "249.4 cm²",
    solution: {
      finalAnswer: "249.4 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 24 cm.",
  "Area = (√3 / 4) * (24)² = (√3 / 4) * 576 ≈ 0.433 * 576 ≈ 249.4 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Equilateral Triangle Area and Altitude Metrics",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "An equilateral triangle has sides of length 26 cm. What is the area of this triangle (in cm²)?",
    options: [
  "292.7 cm²",
  "297.2 cm²",
  "338.0 cm²",
  "289.5 cm²"
],
    correctAnswer: "292.7 cm²",
    solution: {
      finalAnswer: "292.7 cm²",
      steps: [
  "Area of equilateral triangle with side s = (√3 / 4) * s².",
  "Here side s = 26 cm.",
  "Area = (√3 / 4) * (26)² = (√3 / 4) * 676 ≈ 0.433 * 676 ≈ 292.7 cm²."
],
      concept: "Area = (√3 / 4) * a²; Height = (√3 / 2) * a.",
      whyItWorks: "Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.",
      alternativeMethod: undefined,
      commonMistake: "Using (1/2) * side * side without the sin(60°) factor.",
      catTip: "√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks."
    },
    estimatedTime: 45,
    learningObjective: "Calculate equilateral triangle areas using trigonometric height ratios."
  },
  {
    id: "orig_qa_geom_triangles_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 9 cm and 12 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "3 cm",
  "4 cm",
  "7.5 cm",
  "3.6 cm"
],
    correctAnswer: "3 cm",
    solution: {
      finalAnswer: "3 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(9² + 12²) = 15 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (9 + 12 - 15) / 2 = 6 / 2 = 3 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 12 cm and 16 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "4 cm",
  "5 cm",
  "10 cm",
  "4.8 cm"
],
    correctAnswer: "4 cm",
    solution: {
      finalAnswer: "4 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(12² + 16²) = 20 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (12 + 16 - 20) / 2 = 8 / 2 = 4 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 15 cm and 20 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "5 cm",
  "6 cm",
  "12.5 cm",
  "6 cm"
],
    correctAnswer: "5 cm",
    solution: {
      finalAnswer: "5 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(15² + 20²) = 25 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (15 + 20 - 25) / 2 = 10 / 2 = 5 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 18 cm and 24 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "6 cm",
  "7 cm",
  "15 cm",
  "7.2 cm"
],
    correctAnswer: "6 cm",
    solution: {
      finalAnswer: "6 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(18² + 24²) = 30 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (18 + 24 - 30) / 2 = 12 / 2 = 6 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 21 cm and 28 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "7 cm",
  "8 cm",
  "17.5 cm",
  "8.4 cm"
],
    correctAnswer: "7 cm",
    solution: {
      finalAnswer: "7 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(21² + 28²) = 35 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (21 + 28 - 35) / 2 = 14 / 2 = 7 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 24 cm and 32 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "8 cm",
  "9 cm",
  "20 cm",
  "9.6 cm"
],
    correctAnswer: "8 cm",
    solution: {
      finalAnswer: "8 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(24² + 32²) = 40 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (24 + 32 - 40) / 2 = 16 / 2 = 8 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 27 cm and 36 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "9 cm",
  "10 cm",
  "22.5 cm",
  "10.8 cm"
],
    correctAnswer: "9 cm",
    solution: {
      finalAnswer: "9 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(27² + 36²) = 45 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (27 + 36 - 45) / 2 = 18 / 2 = 9 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 30 cm and 40 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "10 cm",
  "11 cm",
  "25 cm",
  "12 cm"
],
    correctAnswer: "10 cm",
    solution: {
      finalAnswer: "10 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(30² + 40²) = 50 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (30 + 40 - 50) / 2 = 20 / 2 = 10 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Pythagorean Triplet Identification and Inradius in Right Triangles",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "The two perpendicular legs of a right-angled triangle measure 33 cm and 44 cm. Find the radius of the inscribed circle (inradius) of this triangle.",
    options: [
  "11 cm",
  "12 cm",
  "27.5 cm",
  "13.2 cm"
],
    correctAnswer: "11 cm",
    solution: {
      finalAnswer: "11 cm",
      steps: [
  "Hypotenuse c = √(a² + b²) = √(33² + 44²) = 55 cm.",
  "For a right-angled triangle, inradius r = (a + b - c) / 2.",
  "r = (33 + 44 - 55) / 2 = 22 / 2 = 11 cm."
],
      concept: "Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.",
      whyItWorks: "The inradius segments along the legs create a square of side r at the right-angle vertex.",
      alternativeMethod: undefined,
      commonMistake: "Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.",
      catTip: "Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles."
    },
    estimatedTime: 50,
    learningObjective: "Calculate inradius of right-angled triangles via perimeter-hypotenuse relation."
  },
  {
    id: "orig_qa_geom_triangles_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 6 cm and AB = 7 cm. What is the length of tangent PT (in cm)?",
    options: [
  "8.8 cm",
  "10.3 cm",
  "7.6 cm",
  "6 cm"
],
    correctAnswer: "8.8 cm",
    solution: {
      finalAnswer: "8.8 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 6 cm.",
  "PB = PA + AB = 6 + 7 = 13 cm.",
  "PT² = 6 * 13 = 78.",
  "PT = √(78) ≈ 8.8 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 7 cm and AB = 8 cm. What is the length of tangent PT (in cm)?",
    options: [
  "10.2 cm",
  "11.7 cm",
  "9.0 cm",
  "7 cm"
],
    correctAnswer: "10.2 cm",
    solution: {
      finalAnswer: "10.2 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 7 cm.",
  "PB = PA + AB = 7 + 8 = 15 cm.",
  "PT² = 7 * 15 = 105.",
  "PT = √(105) ≈ 10.2 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 8 cm and AB = 9 cm. What is the length of tangent PT (in cm)?",
    options: [
  "11.7 cm",
  "13.2 cm",
  "10.5 cm",
  "8 cm"
],
    correctAnswer: "11.7 cm",
    solution: {
      finalAnswer: "11.7 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 8 cm.",
  "PB = PA + AB = 8 + 9 = 17 cm.",
  "PT² = 8 * 17 = 136.",
  "PT = √(136) ≈ 11.7 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 9 cm and AB = 10 cm. What is the length of tangent PT (in cm)?",
    options: [
  "13.1 cm",
  "14.6 cm",
  "11.9 cm",
  "9 cm"
],
    correctAnswer: "13.1 cm",
    solution: {
      finalAnswer: "13.1 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 9 cm.",
  "PB = PA + AB = 9 + 10 = 19 cm.",
  "PT² = 9 * 19 = 171.",
  "PT = √(171) ≈ 13.1 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 10 cm and AB = 11 cm. What is the length of tangent PT (in cm)?",
    options: [
  "14.5 cm",
  "16.0 cm",
  "13.3 cm",
  "10 cm"
],
    correctAnswer: "14.5 cm",
    solution: {
      finalAnswer: "14.5 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 10 cm.",
  "PB = PA + AB = 10 + 11 = 21 cm.",
  "PT² = 10 * 21 = 210.",
  "PT = √(210) ≈ 14.5 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 11 cm and AB = 12 cm. What is the length of tangent PT (in cm)?",
    options: [
  "15.9 cm",
  "17.4 cm",
  "14.7 cm",
  "11 cm"
],
    correctAnswer: "15.9 cm",
    solution: {
      finalAnswer: "15.9 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 11 cm.",
  "PB = PA + AB = 11 + 12 = 23 cm.",
  "PT² = 11 * 23 = 253.",
  "PT = √(253) ≈ 15.9 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 12 cm and AB = 13 cm. What is the length of tangent PT (in cm)?",
    options: [
  "17.3 cm",
  "18.8 cm",
  "16.1 cm",
  "12 cm"
],
    correctAnswer: "17.3 cm",
    solution: {
      finalAnswer: "17.3 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 12 cm.",
  "PB = PA + AB = 12 + 13 = 25 cm.",
  "PT² = 12 * 25 = 300.",
  "PT = √(300) ≈ 17.3 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 13 cm and AB = 14 cm. What is the length of tangent PT (in cm)?",
    options: [
  "18.7 cm",
  "20.2 cm",
  "17.5 cm",
  "13 cm"
],
    correctAnswer: "18.7 cm",
    solution: {
      finalAnswer: "18.7 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 13 cm.",
  "PB = PA + AB = 13 + 14 = 27 cm.",
  "PT² = 13 * 27 = 351.",
  "PT = √(351) ≈ 18.7 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Tangent-Secant Theorem (Power of a Point)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = 14 cm and AB = 15 cm. What is the length of tangent PT (in cm)?",
    options: [
  "20.1 cm",
  "21.6 cm",
  "18.9 cm",
  "14 cm"
],
    correctAnswer: "20.1 cm",
    solution: {
      finalAnswer: "20.1 cm",
      steps: [
  "By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.",
  "PA = 14 cm.",
  "PB = PA + AB = 14 + 15 = 29 cm.",
  "PT² = 14 * 29 = 406.",
  "PT = √(406) ≈ 20.1 cm."
],
      concept: "Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.",
      whyItWorks: "Triangles PTA and PBT are similar by the Alternate Segment Theorem.",
      alternativeMethod: undefined,
      commonMistake: "Multiplying PA by AB instead of the full secant length PB (PA + AB).",
      catTip: "Always calculate total PB = PA + AB first before applying PT² = PA * PB."
    },
    estimatedTime: 65,
    learningObjective: "Apply Power of a Point theorem to determine tangent lengths from circle secants."
  },
  {
    id: "orig_qa_geom_triangles_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_geom_triangles_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_geom_triangles",
    topicName: "Geometry",
    subtopic: "Triangles & Circles",
    concept: "Apollonius' Theorem for Triangle Medians",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "In triangle ABC, side AB = 7 cm, side AC = 9 cm, and median AD drawn to side BC has length 7 cm. Find the length of side BC (in cm).",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "By Apollonius' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.",
  "Substitute values: 7² + 9² = 2(7² + BD²).",
  "49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).",
  "65 = 49 + BD² => BD² = 16 => BD = 4 cm.",
  "Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = 8 cm."
],
      concept: "Apollonius Theorem relates the lengths of triangle sides to its median.",
      whyItWorks: "Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.",
      alternativeMethod: undefined,
      commonMistake: "Reporting BD instead of total length BC = 2 * BD.",
      catTip: "Remember BC = 2 * BD. Don't stop after solving for BD!"
    },
    estimatedTime: 80,
    learningObjective: "Solve triangle median lengths using Apollonius' geometric identity."
  },
  {
    id: "orig_qa_num_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_number_system",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Total Number of Factors and Odd Factors",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many total positive factors does the number 360 have, and how many of those factors are odd?",
    options: [
  "24 total, 6 odd",
  "24 total, 8 odd",
  "18 total, 6 odd",
  "30 total, 10 odd"
],
    correctAnswer: "24 total, 6 odd",
    solution: {
      finalAnswer: "24 total, 6 odd",
      steps: [
  "Prime factorize 360: 360 = 36 * 10 = (2² * 3²) * (2 * 5) = 2³ * 3² * 5¹.",
  "Total number of factors = (3 + 1)(2 + 1)(1 + 1) = 4 * 3 * 2 = 24.",
  "To find the number of odd factors, exclude all powers of 2 (set 2⁰):",
  "Odd factors come from 3² * 5¹: (2 + 1)(1 + 1) = 3 * 2 = 6.",
  "So 360 has 24 total factors, of which 6 are odd (and 24 - 6 = 18 are even)."
],
      concept: "Total Number of Factors and Odd Factors",
      whyItWorks: "Any factor is composed by selecting each prime factor from exponent 0 to its maximum power.",
      alternativeMethod: undefined,
      commonMistake: "Including the power of 2 when counting odd factors.",
      catTip: "Odd factors = total factors of the odd part of N (i.e., evaluate N with 2^k removed)."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_num_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_number_system",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Remainder Theorems & Euler\\",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "What is the remainder when 3²⁰²⁴ is divided by 13?",
    options: [
  "9",
  "3",
  "1",
  "12"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "We need 3²⁰²⁴ mod 13.",
  "13 is a prime number, so by Fermat's Little Theorem: 3¹² ≡ 1 (mod 13).",
  "Divide the exponent 2024 by 12: 2024 = 12 * 168 + 8.",
  "Therefore, 3²⁰²⁴ = (3¹²)¹⁶⁸ * 3⁸ ≡ 1¹⁶⁸ * 3⁸ ≡ 3⁸ (mod 13).",
  "Now calculate 3⁸ mod 13:",
  "3³ = 27 ≡ 1 (mod 13).",
  "Notice: 3³ ≡ 1 (mod 13) has an even shorter period of 3!",
  "Divide 2024 by 3: 2024 = 3 * 674 + 2.",
  "Hence 3²⁰²⁴ ≡ 3² (mod 13) = 9 (mod 13)."
],
      concept: "Remainder Theorems & Euler\\",
      whyItWorks: "Powers of an integer modulo n repeat in periodic cycles governed by Euler\\",
      alternativeMethod: undefined,
      commonMistake: "Evaluating large powers directly without identifying the cycle length.",
      catTip: "Look for early residues close to ±1: here 3³ = 27 = 26 + 1 ≡ 1 (mod 13), so the period is just 3!"
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_num_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_number_system",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Trailing Zeroes & Highest Power of a Prime in Factorials",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the number of trailing zeroes at the end of 125! (125 factorial)?",
    options: [
  "31",
  "28",
  "25",
  "30"
],
    correctAnswer: "31",
    solution: {
      finalAnswer: "31",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In any factorial, powers of 2 are always strictly more abundant than powers of 5.",
  "Therefore, the number of trailing zeroes equals Legendre's formula for the exponent of 5 in 125!:",
  "E_5(125!) = ⌊125/5⌋ + ⌊125/25⌋ + ⌊125/125⌋",
  "= 25 + 5 + 1 = 31.",
  "Thus, 125! ends in exactly 31 trailing zeroes."
],
      concept: "Trailing Zeroes & Highest Power of a Prime in Factorials",
      whyItWorks: "Every 5th number contributes at least one 5; every 25th number contributes an extra 5; every 125th contributes yet another 5.",
      alternativeMethod: undefined,
      commonMistake: "Only dividing 125 by 5 and stopping at 25, ignoring powers of 25 and 125.",
      catTip: "Keep dividing the quotient repeatedly by 5: 125/5 = 25; 25/5 = 5; 5/5 = 1. Sum = 25 + 5 + 1 = 31."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_num_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_number_system",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Base Systems & Cyclicity",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 1234 is converted into base 7, what is the sum of its digits in base 7?",
    options: null,
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "Successively divide 1234 by 7 to determine its base-7 positional digits:",
  "1234 ÷ 7 = 176 with remainder 2 (least significant digit).",
  "176 ÷ 7 = 25 with remainder 1.",
  "25 ÷ 7 = 3 with remainder 4.",
  "3 ÷ 7 = 0 with remainder 3 (most significant digit).",
  "Reading remainders from bottom to top yields: 1234₁₀ = 3412₇.",
  "Verification: 3*(7³) + 4*(7²) + 1*(7¹) + 2*(7⁰) = 3(343) + 4(49) + 7 + 2 = 1029 + 196 + 7 + 2 = 1234.",
  "The sum of the digits in base 7 = 3 + 4 + 1 + 2 = 10."
],
      concept: "Base Systems & Cyclicity",
      whyItWorks: "Writing a number in base b expresses it as ∑ d_i * b^i, where d_i are the successive remainders upon division by b.",
      alternativeMethod: undefined,
      commonMistake: "Reading remainders from top to bottom instead of bottom to top, or summing in base 7 instead of decimal arithmetic.",
      catTip: "To check your answer: N mod (b - 1) equals the digital root in base b. Here 1234 mod 6 = 4. Digits sum = 10, and 10 mod 6 = 4!"
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_num_factors_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 48 possess?",
    options: [
  "10",
  "12",
  "9",
  "14"
],
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "Find the prime factorization of 48: 48 = 2^4 * 3^1.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (4 + 1) * (1 + 1) = 5 * 2 = 10."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 36 possess?",
    options: [
  "9",
  "11",
  "8",
  "13"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "Find the prime factorization of 36: 36 = 2^2 * 3^2.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (2 + 1) * (2 + 1) = 3 * 3 = 9."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 24 possess?",
    options: [
  "8",
  "10",
  "7",
  "12"
],
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "Find the prime factorization of 24: 24 = 2^3 * 3^1.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (3 + 1) * (1 + 1) = 4 * 2 = 8."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 144 possess?",
    options: [
  "15",
  "17",
  "14",
  "19"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "Find the prime factorization of 144: 144 = 2^4 * 3^2.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (4 + 1) * (2 + 1) = 5 * 3 = 15."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 12 possess?",
    options: [
  "6",
  "8",
  "5",
  "10"
],
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Find the prime factorization of 12: 12 = 2^2 * 3^1.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (2 + 1) * (1 + 1) = 3 * 2 = 6."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 72 possess?",
    options: [
  "12",
  "14",
  "11",
  "16"
],
    correctAnswer: "12",
    solution: {
      finalAnswer: "12",
      steps: [
  "Find the prime factorization of 72: 72 = 2^3 * 3^2.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (3 + 1) * (2 + 1) = 4 * 3 = 12."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 48 possess?",
    options: [
  "10",
  "12",
  "9",
  "14"
],
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "Find the prime factorization of 48: 48 = 2^4 * 3^1.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (4 + 1) * (1 + 1) = 5 * 2 = 10."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 36 possess?",
    options: [
  "9",
  "11",
  "8",
  "13"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "Find the prime factorization of 36: 36 = 2^2 * 3^2.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (2 + 1) * (2 + 1) = 3 * 3 = 9."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Prime Factorization & Total Divisor Formula",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "How many positive factors (divisors) does the number 24 possess?",
    options: [
  "8",
  "10",
  "7",
  "12"
],
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "Find the prime factorization of 24: 24 = 2^3 * 3^1.",
  "Total number of factors = (power of 2 + 1) * (power of 3 + 1).",
  "Factors = (3 + 1) * (1 + 1) = 4 * 2 = 8."
],
      concept: "For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...",
      whyItWorks: "Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.",
      alternativeMethod: undefined,
      commonMistake: "Counting prime factors rather than all composite divisors.",
      catTip: "Always express the number in prime base form before applying (exponent + 1)."
    },
    estimatedTime: 40,
    learningObjective: "Compute total positive divisors from standard canonical prime factorization."
  },
  {
    id: "orig_qa_num_factors_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 30! (factorial of 30).",
    options: [
  "7",
  "8",
  "6",
  "6"
],
    correctAnswer: "7",
    solution: {
      finalAnswer: "7",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(30!) = floor(30 / 5) + floor(30 / 25) = 6 + 1 = 7."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 35! (factorial of 35).",
    options: [
  "8",
  "9",
  "7",
  "7"
],
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(35!) = floor(35 / 5) + floor(35 / 25) = 7 + 1 = 8."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 40! (factorial of 40).",
    options: [
  "9",
  "10",
  "8",
  "8"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(40!) = floor(40 / 5) + floor(40 / 25) = 8 + 1 = 9."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 45! (factorial of 45).",
    options: [
  "10",
  "11",
  "9",
  "9"
],
    correctAnswer: "10",
    solution: {
      finalAnswer: "10",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(45!) = floor(45 / 5) + floor(45 / 25) = 9 + 1 = 10."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 50! (factorial of 50).",
    options: [
  "12",
  "13",
  "11",
  "10"
],
    correctAnswer: "12",
    solution: {
      finalAnswer: "12",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(50!) = floor(50 / 5) + floor(50 / 25) = 10 + 2 = 12."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 55! (factorial of 55).",
    options: [
  "13",
  "14",
  "12",
  "11"
],
    correctAnswer: "13",
    solution: {
      finalAnswer: "13",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(55!) = floor(55 / 5) + floor(55 / 25) = 11 + 2 = 13."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 60! (factorial of 60).",
    options: [
  "14",
  "15",
  "13",
  "12"
],
    correctAnswer: "14",
    solution: {
      finalAnswer: "14",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(60!) = floor(60 / 5) + floor(60 / 25) = 12 + 2 = 14."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 65! (factorial of 65).",
    options: [
  "15",
  "16",
  "14",
  "13"
],
    correctAnswer: "15",
    solution: {
      finalAnswer: "15",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(65!) = floor(65 / 5) + floor(65 / 25) = 13 + 2 = 15."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Legendre's Formula for Prime Multiplicity in Factorials",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Find the number of trailing zeroes at the end of the expansion of 70! (factorial of 70).",
    options: [
  "16",
  "17",
  "15",
  "14"
],
    correctAnswer: "16",
    solution: {
      finalAnswer: "16",
      steps: [
  "A trailing zero is produced by a factor of 10 = 2 * 5.",
  "In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.",
  "By Legendre's Formula: E_5(70!) = floor(70 / 5) + floor(70 / 25) = 14 + 2 = 16."
],
      concept: "Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...",
      whyItWorks: "Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.",
      alternativeMethod: undefined,
      commonMistake: "Dividing only by 5 and forgetting higher powers like 25.",
      catTip: "Sum the quotients of successive divisions by 5."
    },
    estimatedTime: 50,
    learningObjective: "Determine prime multiplicities and trailing zeroes in large factorials."
  },
  {
    id: "orig_qa_num_factors_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(42) is divided by 7?",
    options: [
  "1",
  "3",
  "5",
  "2"
],
    correctAnswer: "1",
    solution: {
      finalAnswer: "1",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 42 = 6 * 7 + 0.",
  "3^(42) = (3^6)^(7) * 3^0 ≡ 1 * 3^0 (mod 7).",
  "3^0 mod 7 = 1 mod 7 = 1."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(43) is divided by 7?",
    options: [
  "3",
  "5",
  "0",
  "4"
],
    correctAnswer: "3",
    solution: {
      finalAnswer: "3",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 43 = 6 * 7 + 1.",
  "3^(43) = (3^6)^(7) * 3^1 ≡ 1 * 3^1 (mod 7).",
  "3^1 mod 7 = 3 mod 7 = 3."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(44) is divided by 7?",
    options: [
  "2",
  "4",
  "6",
  "3"
],
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 44 = 6 * 7 + 2.",
  "3^(44) = (3^6)^(7) * 3^2 ≡ 1 * 3^2 (mod 7).",
  "3^2 mod 7 = 9 mod 7 = 2."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(45) is divided by 7?",
    options: [
  "6",
  "1",
  "3",
  "0"
],
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 45 = 6 * 7 + 3.",
  "3^(45) = (3^6)^(7) * 3^3 ≡ 1 * 3^3 (mod 7).",
  "3^3 mod 7 = 27 mod 7 = 6."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(46) is divided by 7?",
    options: [
  "4",
  "6",
  "1",
  "5"
],
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 46 = 6 * 7 + 4.",
  "3^(46) = (3^6)^(7) * 3^4 ≡ 1 * 3^4 (mod 7).",
  "3^4 mod 7 = 81 mod 7 = 4."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(47) is divided by 7?",
    options: [
  "5",
  "0",
  "2",
  "6"
],
    correctAnswer: "5",
    solution: {
      finalAnswer: "5",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 47 = 6 * 7 + 5.",
  "3^(47) = (3^6)^(7) * 3^5 ≡ 1 * 3^5 (mod 7).",
  "3^5 mod 7 = 243 mod 7 = 5."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(48) is divided by 7?",
    options: [
  "1",
  "3",
  "5",
  "2"
],
    correctAnswer: "1",
    solution: {
      finalAnswer: "1",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 48 = 6 * 8 + 0.",
  "3^(48) = (3^6)^(8) * 3^0 ≡ 1 * 3^0 (mod 7).",
  "3^0 mod 7 = 1 mod 7 = 1."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(49) is divided by 7?",
    options: [
  "3",
  "5",
  "0",
  "4"
],
    correctAnswer: "3",
    solution: {
      finalAnswer: "3",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 49 = 6 * 8 + 1.",
  "3^(49) = (3^6)^(8) * 3^1 ≡ 1 * 3^1 (mod 7).",
  "3^1 mod 7 = 3 mod 7 = 3."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Fermat's Little Theorem in Modular Arithmetic",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "What is the remainder when 3^(50) is divided by 7?",
    options: [
  "2",
  "4",
  "6",
  "3"
],
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "By Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).",
  "Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).",
  "Divide the exponent by 6: 50 = 6 * 8 + 2.",
  "3^(50) = (3^6)^(8) * 3^2 ≡ 1 * 3^2 (mod 7).",
  "3^2 mod 7 = 9 mod 7 = 2."
],
      concept: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p).",
      whyItWorks: "Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.",
      alternativeMethod: undefined,
      commonMistake: "Dividing the base instead of reducing the exponent modulo 6.",
      catTip: "Reduce exponent modulo (p - 1) directly when divisor is prime."
    },
    estimatedTime: 65,
    learningObjective: "Utilize Fermat's Little Theorem to evaluate high-power modular remainders."
  },
  {
    id: "orig_qa_num_factors_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 300 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "12",
    solution: {
      finalAnswer: "12",
      steps: [
  "Convert 300 into base 7 via successive division by 7:",
  "Successive division remainders yield 300_10 = 606_7.",
  "Sum of digits in base 7 representation = 6 + 0 + 6 = 12."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 325 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "13",
    solution: {
      finalAnswer: "13",
      steps: [
  "Convert 325 into base 7 via successive division by 7:",
  "Successive division remainders yield 325_10 = 643_7.",
  "Sum of digits in base 7 representation = 6 + 4 + 3 = 13."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 350 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "Convert 350 into base 7 via successive division by 7:",
  "Successive division remainders yield 350_10 = 1010_7.",
  "Sum of digits in base 7 representation = 1 + 0 + 1 + 0 = 2."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 375 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "Convert 375 into base 7 via successive division by 7:",
  "Successive division remainders yield 375_10 = 1044_7.",
  "Sum of digits in base 7 representation = 1 + 0 + 4 + 4 = 9."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 400 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "Convert 400 into base 7 via successive division by 7:",
  "Successive division remainders yield 400_10 = 1111_7.",
  "Sum of digits in base 7 representation = 1 + 1 + 1 + 1 = 4."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 425 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "11",
    solution: {
      finalAnswer: "11",
      steps: [
  "Convert 425 into base 7 via successive division by 7:",
  "Successive division remainders yield 425_10 = 1145_7.",
  "Sum of digits in base 7 representation = 1 + 1 + 4 + 5 = 11."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 450 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "6",
    solution: {
      finalAnswer: "6",
      steps: [
  "Convert 450 into base 7 via successive division by 7:",
  "Successive division remainders yield 450_10 = 1212_7.",
  "Sum of digits in base 7 representation = 1 + 2 + 1 + 2 = 6."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 475 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "13",
    solution: {
      finalAnswer: "13",
      steps: [
  "Convert 475 into base 7 via successive division by 7:",
  "Successive division remainders yield 475_10 = 1246_7.",
  "Sum of digits in base 7 representation = 1 + 2 + 4 + 6 = 13."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_num_factors_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_num_factors",
    topicName: "Number System",
    subtopic: "Divisibility & Factors",
    concept: "Non-Decimal Radix Conversion and Positional Arithmetic",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "When the decimal integer 500 is converted into base 7 representation, what is the sum of its digits?",
    options: null,
    correctAnswer: "8",
    solution: {
      finalAnswer: "8",
      steps: [
  "Convert 500 into base 7 via successive division by 7:",
  "Successive division remainders yield 500_10 = 1313_7.",
  "Sum of digits in base 7 representation = 1 + 3 + 1 + 3 = 8."
],
      concept: "Radix Conversion: Successive division by target base collects positional coefficients.",
      whyItWorks: "Positional representation decomposes integers into unique polynomials of base powers.",
      alternativeMethod: undefined,
      commonMistake: "Summing the digits in base 10 instead of base 7.",
      catTip: "Record remainders from bottom to top to assemble the base-7 numeral."
    },
    estimatedTime: 75,
    learningObjective: "Convert decimal numbers to arbitrary radix bases and manipulate digit properties."
  },
  {
    id: "orig_qa_mod_01",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_modern_math",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Arrangements with Identical Items",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can the letters of the word \"ARRANGE\" be ordered such that the two \\'R\\'s are never together?",
    options: [
  "900",
  "1260",
  "360",
  "720"
],
    correctAnswer: "900",
    solution: {
      finalAnswer: "900",
      steps: [
  "Total letters in \"ARRANGE\" = 7: A occurs 2 times, R occurs 2 times, N occurs 1, G occurs 1, E occurs 1.",
  "Total unrestricted arrangements = 7! / (2! * 2!) = 5040 / 4 = 1260.",
  "To find arrangements where the two 'R's ARE together, bundle them as (RR):",
  "We now arrange 6 entities: (RR), A, A, N, G, E.",
  "Number of ways with (RR) together = 6! / 2! = 720 / 2 = 360.",
  "Arrangements where the two 'R's are NEVER together = Total - Together = 1260 - 360 = 900."
],
      concept: "Arrangements with Identical Items",
      whyItWorks: "Directly finding separated configurations requires gap method; subtracting the grouped bundle is much faster and less error-prone.",
      alternativeMethod: undefined,
      commonMistake: "Forgetting that the two \\",
      catTip: "Whenever a problem asks for items "
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_mod_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_modern_math",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Conditional Probability and Independent Events",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "Two fair six-sided dice are rolled simultaneously. Given that the sum of the numbers showing on the two dice is greater than 8, what is the probability that at least one of the dice shows a 5?",
    options: [
  "4/10",
  "5/10",
  "3/10",
  "6/10"
],
    correctAnswer: "5/10",
    solution: {
      finalAnswer: "5/10",
      steps: [
  "Refer to derivation."
],
      concept: "Conditional Probability and Independent Events",
      whyItWorks: "Conditioning on event B restricts the effective universe of outcomes to the 10 pairs satisfying the sum constraint.",
      alternativeMethod: undefined,
      commonMistake: "Dividing by the unconditional universe of 36 outcomes instead of the conditional sample space of 10.",
      catTip: "For conditional dice problems, enumerate only the reduced sample space that meets the condition."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_mod_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_modern_math",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Stars and Bars (Non-negative Integer Partitions)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 15 identical chocolate bars be distributed among 4 children such that each child receives at least 2 chocolate bars?",
    options: [
  "120",
  "84",
  "220",
  "165"
],
    correctAnswer: "120",
    solution: {
      finalAnswer: "120",
      steps: [
  "Let the number of bars received by the 4 children be x1, x2, x3, x4.",
  "We need: x1 + x2 + x3 + x4 = 15, with each xi ≥ 2 for i ∈ {1, 2, 3, 4}.",
  "First distribute 2 chocolate bars to each of the 4 children: 4 * 2 = 8 bars distributed.",
  "Remaining bars to distribute = 15 - 8 = 7 bars.",
  "Now let yi = xi - 2, where each yi ≥ 0.",
  "The equation becomes: y1 + y2 + y3 + y4 = 7, with non-negative integers.",
  "By Stars and Bars theorem, the number of ways is C(n + r - 1, r - 1) = C(7 + 4 - 1, 4 - 1) = C(10, 3).",
  "C(10, 3) = (10 * 9 * 8) / (3 * 2 * 1) = 720 / 6 = 120 ways."
],
      concept: "Stars and Bars (Non-negative Integer Partitions)",
      whyItWorks: "Pre-allocating the required minimums converts a constrained problem into standard non-negative integer partitions.",
      alternativeMethod: undefined,
      commonMistake: "Directly applying C(15 - 1, 4 - 1) = C(14, 3), which only enforces a minimum of 1 bar per child.",
      catTip: "Always pre-distribute mandatory items upfront to reduce the problem to distributing remaining items with no minimums."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_mod_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_modern_math",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Derangements & Fixed Points",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Five students write their names on slips of paper and place them in a box. Each student then randomly draws one slip from the box. What is the number of outcomes in which exactly one student draws their own name?",
    options: null,
    correctAnswer: "45",
    solution: {
      finalAnswer: "45",
      steps: [
  "Refer to derivation."
],
      concept: "Derangements & Fixed Points",
      whyItWorks: "Selecting the fixed point(s) first leaves the remaining elements strictly constrained by the subfactorial derangement function.",
      alternativeMethod: undefined,
      commonMistake: "Assuming the remaining 4 students can be arranged in 4! = 24 ways, which includes cases where 2 or more students get their own names.",
      catTip: "Memorize the first few derangement numbers for CAT: D1=0, D2=1, D3=2, D4=9, D5=44."
    },
    estimatedTime: 60,
    learningObjective: "Master problem framework."
  },
  {
    id: "orig_qa_mod_prob_foun_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 7 delegates be seated around a round conference table?",
    options: [
  "720",
  "5040",
  "360",
  "1440"
],
    correctAnswer: "720",
    solution: {
      finalAnswer: "720",
      steps: [
  "Number of distinct objects n = 7.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (7 - 1)! = 6! = 720."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 8 delegates be seated around a round conference table?",
    options: [
  "5040",
  "40320",
  "2520",
  "10080"
],
    correctAnswer: "5040",
    solution: {
      finalAnswer: "5040",
      steps: [
  "Number of distinct objects n = 8.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (8 - 1)! = 7! = 5040."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 9 delegates be seated around a round conference table?",
    options: [
  "40320",
  "362880",
  "20160",
  "80640"
],
    correctAnswer: "40320",
    solution: {
      finalAnswer: "40320",
      steps: [
  "Number of distinct objects n = 9.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (9 - 1)! = 8! = 40320."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 10 delegates be seated around a round conference table?",
    options: [
  "362880",
  "3628800",
  "181440",
  "725760"
],
    correctAnswer: "362880",
    solution: {
      finalAnswer: "362880",
      steps: [
  "Number of distinct objects n = 10.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (10 - 1)! = 9! = 362880."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 11 delegates be seated around a round conference table?",
    options: [
  "3628800",
  "39916800",
  "1814400",
  "7257600"
],
    correctAnswer: "3628800",
    solution: {
      finalAnswer: "3628800",
      steps: [
  "Number of distinct objects n = 11.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (11 - 1)! = 10! = 3628800."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 12 delegates be seated around a round conference table?",
    options: [
  "39916800",
  "479001600",
  "19958400",
  "79833600"
],
    correctAnswer: "39916800",
    solution: {
      finalAnswer: "39916800",
      steps: [
  "Number of distinct objects n = 12.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (12 - 1)! = 11! = 39916800."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 13 delegates be seated around a round conference table?",
    options: [
  "479001600",
  "6227020800",
  "239500800",
  "958003200"
],
    correctAnswer: "479001600",
    solution: {
      finalAnswer: "479001600",
      steps: [
  "Number of distinct objects n = 13.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (13 - 1)! = 12! = 479001600."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 14 delegates be seated around a round conference table?",
    options: [
  "6227020800",
  "87178291200",
  "3113510400",
  "12454041600"
],
    correctAnswer: "6227020800",
    solution: {
      finalAnswer: "6227020800",
      steps: [
  "Number of distinct objects n = 14.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (14 - 1)! = 13! = 6227020800."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_foun_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Circular Permutations of Distinct Elements",
    difficulty: "FOUNDATION",
    questionType: "MCQ",
    questionText: "In how many distinct ways can 15 delegates be seated around a round conference table?",
    options: [
  "87178291200",
  "1307674368000",
  "43589145600",
  "174356582400"
],
    correctAnswer: "87178291200",
    solution: {
      finalAnswer: "87178291200",
      steps: [
  "Number of distinct objects n = 15.",
  "In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.",
  "Formula for circular permutations of n distinct objects = (n - 1)!.",
  "Permutations = (15 - 1)! = 14! = 87178291200."
],
      concept: "Circular Permutation: P_circ = (n - 1)!",
      whyItWorks: "Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.",
      alternativeMethod: undefined,
      commonMistake: "Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.",
      catTip: "Always fix 1 seat to eliminate rotational duplicates."
    },
    estimatedTime: 40,
    learningObjective: "Calculate circular permutation counts factoring rotational invariance."
  },
  {
    id: "orig_qa_mod_prob_easy_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 5 red marbles and 4 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "5/18",
  "6/18",
  "5/20",
  "5/9"
],
    correctAnswer: "5/18",
    solution: {
      finalAnswer: "5/18",
      steps: [
  "Total marbles = 5 + 4 = 9.",
  "Number of ways to choose 2 red marbles = C(5, 2) = (5 * 4) / 2 = 10.",
  "Total ways to choose any 2 marbles = C(9, 2) = (9 * 8) / 2 = 36.",
  "Probability = C(5, 2) / C(9, 2) = 20 / 72 = 5/18."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (5/9) * (4/8)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 3 red marbles and 5 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "3/28",
  "4/28",
  "3/30",
  "3/8"
],
    correctAnswer: "3/28",
    solution: {
      finalAnswer: "3/28",
      steps: [
  "Total marbles = 3 + 5 = 8.",
  "Number of ways to choose 2 red marbles = C(3, 2) = (3 * 2) / 2 = 3.",
  "Total ways to choose any 2 marbles = C(8, 2) = (8 * 7) / 2 = 28.",
  "Probability = C(3, 2) / C(8, 2) = 6 / 56 = 3/28."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (3/8) * (2/7)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 4 red marbles and 4 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "3/14",
  "4/14",
  "3/16",
  "4/8"
],
    correctAnswer: "3/14",
    solution: {
      finalAnswer: "3/14",
      steps: [
  "Total marbles = 4 + 4 = 8.",
  "Number of ways to choose 2 red marbles = C(4, 2) = (4 * 3) / 2 = 6.",
  "Total ways to choose any 2 marbles = C(8, 2) = (8 * 7) / 2 = 28.",
  "Probability = C(4, 2) / C(8, 2) = 12 / 56 = 3/14."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (4/8) * (3/7)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 5 red marbles and 5 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "2/9",
  "3/9",
  "2/11",
  "5/10"
],
    correctAnswer: "2/9",
    solution: {
      finalAnswer: "2/9",
      steps: [
  "Total marbles = 5 + 5 = 10.",
  "Number of ways to choose 2 red marbles = C(5, 2) = (5 * 4) / 2 = 10.",
  "Total ways to choose any 2 marbles = C(10, 2) = (10 * 9) / 2 = 45.",
  "Probability = C(5, 2) / C(10, 2) = 20 / 90 = 2/9."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (5/10) * (4/9)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 3 red marbles and 4 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "1/7",
  "2/7",
  "1/9",
  "3/7"
],
    correctAnswer: "1/7",
    solution: {
      finalAnswer: "1/7",
      steps: [
  "Total marbles = 3 + 4 = 7.",
  "Number of ways to choose 2 red marbles = C(3, 2) = (3 * 2) / 2 = 3.",
  "Total ways to choose any 2 marbles = C(7, 2) = (7 * 6) / 2 = 21.",
  "Probability = C(3, 2) / C(7, 2) = 6 / 42 = 1/7."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (3/7) * (2/6)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 4 red marbles and 5 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "1/6",
  "2/6",
  "1/8",
  "4/9"
],
    correctAnswer: "1/6",
    solution: {
      finalAnswer: "1/6",
      steps: [
  "Total marbles = 4 + 5 = 9.",
  "Number of ways to choose 2 red marbles = C(4, 2) = (4 * 3) / 2 = 6.",
  "Total ways to choose any 2 marbles = C(9, 2) = (9 * 8) / 2 = 36.",
  "Probability = C(4, 2) / C(9, 2) = 12 / 72 = 1/6."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (4/9) * (3/8)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 5 red marbles and 4 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "5/18",
  "6/18",
  "5/20",
  "5/9"
],
    correctAnswer: "5/18",
    solution: {
      finalAnswer: "5/18",
      steps: [
  "Total marbles = 5 + 4 = 9.",
  "Number of ways to choose 2 red marbles = C(5, 2) = (5 * 4) / 2 = 10.",
  "Total ways to choose any 2 marbles = C(9, 2) = (9 * 8) / 2 = 36.",
  "Probability = C(5, 2) / C(9, 2) = 20 / 72 = 5/18."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (5/9) * (4/8)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 3 red marbles and 5 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "3/28",
  "4/28",
  "3/30",
  "3/8"
],
    correctAnswer: "3/28",
    solution: {
      finalAnswer: "3/28",
      steps: [
  "Total marbles = 3 + 5 = 8.",
  "Number of ways to choose 2 red marbles = C(3, 2) = (3 * 2) / 2 = 3.",
  "Total ways to choose any 2 marbles = C(8, 2) = (8 * 7) / 2 = 28.",
  "Probability = C(3, 2) / C(8, 2) = 6 / 56 = 3/28."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (3/8) * (2/7)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_easy_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Hypergeometric Dependent Probability without Replacement",
    difficulty: "EASY",
    questionType: "MCQ",
    questionText: "An urn contains 4 red marbles and 4 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?",
    options: [
  "3/14",
  "4/14",
  "3/16",
  "4/8"
],
    correctAnswer: "3/14",
    solution: {
      finalAnswer: "3/14",
      steps: [
  "Total marbles = 4 + 4 = 8.",
  "Number of ways to choose 2 red marbles = C(4, 2) = (4 * 3) / 2 = 6.",
  "Total ways to choose any 2 marbles = C(8, 2) = (8 * 7) / 2 = 28.",
  "Probability = C(4, 2) / C(8, 2) = 12 / 56 = 3/14."
],
      concept: "Probability = Favorable Outcomes / Total Outcomes.",
      whyItWorks: "Without replacement, the sample space and favorable counts decrease by 1 for the second draw.",
      alternativeMethod: undefined,
      commonMistake: "Squaring the initial probability (assuming replacement).",
      catTip: "Multiply conditional probabilities: (4/8) * (3/7)."
    },
    estimatedTime: 50,
    learningObjective: "Calculate multi-draw probabilities under non-replacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 4 addressed letters be placed into 4 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "9",
  "14",
  "6",
  "16"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "This is a classic Derangement problem D(n) where n = 4.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.",
  "Total derangements = 9."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 5 addressed letters be placed into 5 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "44",
  "49",
  "41",
  "20"
],
    correctAnswer: "44",
    solution: {
      finalAnswer: "44",
      steps: [
  "This is a classic Derangement problem D(n) where n = 5.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 5: D(5) = 5 * D(4) + (-1)^5 = 5 * 9 - 1 = 44.",
  "Total derangements = 44."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 4 addressed letters be placed into 4 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "9",
  "14",
  "6",
  "16"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "This is a classic Derangement problem D(n) where n = 4.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.",
  "Total derangements = 9."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 5 addressed letters be placed into 5 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "44",
  "49",
  "41",
  "20"
],
    correctAnswer: "44",
    solution: {
      finalAnswer: "44",
      steps: [
  "This is a classic Derangement problem D(n) where n = 5.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 5: D(5) = 5 * D(4) + (-1)^5 = 5 * 9 - 1 = 44.",
  "Total derangements = 44."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 4 addressed letters be placed into 4 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "9",
  "14",
  "6",
  "16"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "This is a classic Derangement problem D(n) where n = 4.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.",
  "Total derangements = 9."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 5 addressed letters be placed into 5 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "44",
  "49",
  "41",
  "20"
],
    correctAnswer: "44",
    solution: {
      finalAnswer: "44",
      steps: [
  "This is a classic Derangement problem D(n) where n = 5.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 5: D(5) = 5 * D(4) + (-1)^5 = 5 * 9 - 1 = 44.",
  "Total derangements = 44."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 4 addressed letters be placed into 4 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "9",
  "14",
  "6",
  "16"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "This is a classic Derangement problem D(n) where n = 4.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.",
  "Total derangements = 9."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 5 addressed letters be placed into 5 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "44",
  "49",
  "41",
  "20"
],
    correctAnswer: "44",
    solution: {
      finalAnswer: "44",
      steps: [
  "This is a classic Derangement problem D(n) where n = 5.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 5: D(5) = 5 * D(4) + (-1)^5 = 5 * 9 - 1 = 44.",
  "Total derangements = 44."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_mode_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Subfactorial Derangement Formula (Sub-permutations)",
    difficulty: "MODERATE",
    questionType: "MCQ",
    questionText: "In how many ways can 4 addressed letters be placed into 4 addressed envelopes such that no letter is placed into its correct envelope?",
    options: [
  "9",
  "14",
  "6",
  "16"
],
    correctAnswer: "9",
    solution: {
      finalAnswer: "9",
      steps: [
  "This is a classic Derangement problem D(n) where n = 4.",
  "Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].",
  "For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.",
  "Total derangements = 9."
],
      concept: "Derangement: D(n) counts permutations where no element appears in its original position.",
      whyItWorks: "Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.",
      alternativeMethod: undefined,
      commonMistake: "Subtracting 1 from total permutations n!.",
      catTip: "Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265."
    },
    estimatedTime: 65,
    learningObjective: "Master derangement calculations for complete misplacement conditions."
  },
  {
    id: "orig_qa_mod_prob_inte_02",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 11?",
    options: null,
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 11.",
  "Favorable pairs: (5, 6), (6, 5).",
  "Total favorable outcomes = 2."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_03",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 9?",
    options: null,
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 9.",
  "Favorable pairs: (3, 6), (4, 5), (5, 4), (6, 3).",
  "Total favorable outcomes = 4."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_04",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 10?",
    options: null,
    correctAnswer: "3",
    solution: {
      finalAnswer: "3",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 10.",
  "Favorable pairs: (4, 6), (5, 5), (6, 4).",
  "Total favorable outcomes = 3."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_05",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 11?",
    options: null,
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 11.",
  "Favorable pairs: (5, 6), (6, 5).",
  "Total favorable outcomes = 2."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_06",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 9?",
    options: null,
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 9.",
  "Favorable pairs: (3, 6), (4, 5), (5, 4), (6, 3).",
  "Total favorable outcomes = 4."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_07",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 10?",
    options: null,
    correctAnswer: "3",
    solution: {
      finalAnswer: "3",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 10.",
  "Favorable pairs: (4, 6), (5, 5), (6, 4).",
  "Total favorable outcomes = 3."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_08",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 11?",
    options: null,
    correctAnswer: "2",
    solution: {
      finalAnswer: "2",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 11.",
  "Favorable pairs: (5, 6), (6, 5).",
  "Total favorable outcomes = 2."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_09",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 9?",
    options: null,
    correctAnswer: "4",
    solution: {
      finalAnswer: "4",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 9.",
  "Favorable pairs: (3, 6), (4, 5), (5, 4), (6, 3).",
  "Total favorable outcomes = 4."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  },
  {
    id: "orig_qa_mod_prob_inte_10",
    sourceType: 'ORIGINAL_PRACTICE',
    section: "QA",
    topicId: "qa_mod_prob",
    topicName: "Modern Math",
    subtopic: "Permutations & Probability",
    concept: "Discrete Sample Space Distribution on Dual Die Rolls",
    difficulty: "INTERMEDIATE",
    questionType: "TITA",
    questionText: "Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly 10?",
    options: null,
    correctAnswer: "3",
    solution: {
      finalAnswer: "3",
      steps: [
  "Sample space of two dice = 6 * 6 = 36 outcomes.",
  "We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = 10.",
  "Favorable pairs: (4, 6), (5, 5), (6, 4).",
  "Total favorable outcomes = 3."
],
      concept: "Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.",
      whyItWorks: "Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.",
      alternativeMethod: undefined,
      commonMistake: "Considering (a, b) and (b, a) as identical when dice are distinct.",
      catTip: "Frequency of sum S for two dice = 6 - |S - 7|."
    },
    estimatedTime: 60,
    learningObjective: "Enumerate bounded integer partitions representing multi-die sample spaces."
  }
];

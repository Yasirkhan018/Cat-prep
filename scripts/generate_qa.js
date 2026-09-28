const fs = require('fs');
const path = require('path');
const { formatQuestionTS } = require('./question_formatter');

// Read existing QA questions
const qaFile = path.join(__dirname, '../src/lib/data/originalQuestions/qaQuestions.ts');
const existingContent = fs.readFileSync(qaFile, 'utf8');

// Parse existing questions to keep them intact
function parseExisting(content) {
  const chunks = content.split(/id:\s*['"]/);
  const qs = [];
  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    const id = chunk.substring(0, chunk.indexOf("'") !== -1 ? chunk.indexOf("'") : chunk.indexOf('"'));
    const sectionMatch = chunk.match(/section:\s*['"]([^'"]+)['"]/);
    const topicIdMatch = chunk.match(/topicId:\s*['"]([^'"]+)['"]/);
    const topicNameMatch = chunk.match(/topicName:\s*['"]([^'"]+)['"]/);
    const subtopicMatch = chunk.match(/subtopic:\s*['"]([^'"]+)['"]/);
    const difficultyMatch = chunk.match(/difficulty:\s*['"]([^'"]+)['"]/);
    const questionTypeMatch = chunk.match(/questionType:\s*['"]([^'"]+)['"]/);
    const qTextMatch = chunk.match(/questionText:\s*['`]([\s\S]*?)['`],/);
    const correctAnswerMatch = chunk.match(/correctAnswer:\s*['"]([^'"]+)['"]/);
    const finalAnswerMatch = chunk.match(/finalAnswer:\s*['"]([^'"]+)['"]/);
    const conceptMatch = chunk.match(/concept:\s*['"]([^'"]+)['"]/);
    const whyItWorksMatch = chunk.match(/whyItWorks:\s*['"]([^'"]+)['"]/);
    const commonMistakeMatch = chunk.match(/commonMistake:\s*['"]([^'"]+)['"]/);
    const catTipMatch = chunk.match(/catTip:\s*['"]([^'"]+)['"]/);

    // Extract options
    let options = null;
    const optMatch = chunk.match(/options:\s*(\[[^\]]*\])/);
    if (optMatch) {
      try {
        options = eval(optMatch[1]);
      } catch (e) {}
    }

    // Extract steps
    let steps = ['Refer to derivation.'];
    const stepsMatch = chunk.match(/steps:\s*(\[[^\]]*\])/);
    if (stepsMatch) {
      try {
        steps = eval(stepsMatch[1]);
      } catch (e) {}
    }

    qs.push({
      id,
      sourceType: 'ORIGINAL_PRACTICE',
      section: sectionMatch ? sectionMatch[1] : 'QA',
      topicId: topicIdMatch ? topicIdMatch[1] : 'qa_topic',
      topicName: topicNameMatch ? topicNameMatch[1] : 'Arithmetic',
      subtopic: subtopicMatch ? subtopicMatch[1] : 'Percentages & Profit Loss',
      concept: conceptMatch ? conceptMatch[1] : 'Core Concept',
      difficulty: difficultyMatch ? difficultyMatch[1] : 'FOUNDATION',
      questionType: questionTypeMatch ? questionTypeMatch[1] : 'MCQ',
      questionText: qTextMatch ? qTextMatch[1] : 'Question prompt',
      options,
      correctAnswer: correctAnswerMatch ? correctAnswerMatch[1] : 'Answer',
      solution: {
        finalAnswer: finalAnswerMatch ? finalAnswerMatch[1] : (correctAnswerMatch ? correctAnswerMatch[1] : 'Answer'),
        steps,
        concept: conceptMatch ? conceptMatch[1] : 'Core Concept',
        whyItWorks: whyItWorksMatch ? whyItWorksMatch[1] : 'Underlying mathematical principle.',
        commonMistake: commonMistakeMatch ? commonMistakeMatch[1] : 'Common trap to avoid.',
        catTip: catTipMatch ? catTipMatch[1] : 'Speed shortcut.'
      },
      estimatedTime: 60,
      learningObjective: 'Master problem framework.'
    });
  }
  return qs;
}

const existingQs = parseExisting(existingContent);
console.log('Existing QA questions loaded:', existingQs.length);

// Topics in QA
const QA_TOPICS = [
  { id: 'qa_arith_percentages', name: 'Arithmetic', subtopic: 'Percentages & Profit Loss' },
  { id: 'qa_arith_tw', name: 'Arithmetic', subtopic: 'Time & Work' },
  { id: 'qa_arith_tsd', name: 'Arithmetic', subtopic: 'Time Speed & Distance' },
  { id: 'qa_alg_quadratics', name: 'Algebra', subtopic: 'Quadratic & Linear Equations' },
  { id: 'qa_geom_triangles', name: 'Geometry', subtopic: 'Triangles & Circles' },
  { id: 'qa_num_factors', name: 'Number System', subtopic: 'Divisibility & Factors' },
  { id: 'qa_mod_prob', name: 'Modern Math', subtopic: 'Permutations & Probability' }
];

// Difficulty tiers needed
const DIFFICULTIES = ['FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE'];

// Generators for each topic
function generateTopicQuestions(topicMeta) {
  const existingForTopic = existingQs.filter(q => q.subtopic === topicMeta.subtopic);
  const result = [...existingForTopic];

  for (const diff of DIFFICULTIES) {
    const existingCount = result.filter(q => q.difficulty === diff).length;
    const needed = 10 - existingCount;
    console.log(`Topic [${topicMeta.subtopic}] diff [${diff}] has ${existingCount}, needs ${needed}`);

    for (let k = 1; k <= needed; k++) {
      const idx = existingCount + k;
      const q = createQAQuestion(topicMeta, diff, idx);
      result.push(q);
    }
  }

  return result;
}

// Function to generate mathematically accurate, educational questions for each QA topic & difficulty
function createQAQuestion(topic, diff, idx) {
  const id = `orig_${topic.id}_${diff.toLowerCase().substring(0, 4)}_${idx.toString().padStart(2, '0')}`;
  
  if (topic.subtopic === 'Percentages & Profit Loss') {
    return makePercentageQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Time & Work') {
    return makeTimeWorkQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Time Speed & Distance') {
    return makeTSDQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Quadratic & Linear Equations') {
    return makeAlgebraQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Triangles & Circles') {
    return makeGeometryQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Divisibility & Factors') {
    return makeNumberSystemQuestion(id, topic, diff, idx);
  } else {
    return makeModernMathQuestion(id, topic, diff, idx);
  }
}

// -------------------------------------------------------------
// 1. PERCENTAGES & PROFIT LOSS GENERATOR
// -------------------------------------------------------------
function makePercentageQuestion(id, topic, diff, idx) {
  if (diff === 'FOUNDATION') {
    const cp = 200 + idx * 50;
    const markup = 10 + idx * 5;
    const mp = Math.round(cp * (1 + markup / 100));
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Percentage Markup and Absolute Profit Calculations',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `A shopkeeper purchases an item for ₹${cp} and marks its price up by ${markup}%. What is the marked price of the item?`,
      options: [`₹${mp}`, `₹${mp + 20}`, `₹${mp - 15}`, `₹${mp + 35}`],
      correctAnswer: `₹${mp}`,
      solution: {
        finalAnswer: `₹${mp}`,
        steps: [
          `Cost Price (CP) = ₹${cp}.`,
          `Markup = ${markup}% of ₹${cp} = (${markup} / 100) * ${cp} = ₹${mp - cp}.`,
          `Marked Price (MP) = CP + Markup = ₹${cp} + ₹${mp - cp} = ₹${mp}.`
        ],
        concept: 'MP = CP * (1 + Markup% / 100)',
        whyItWorks: 'Markup scales the base cost price directly by the specified percentage factor.',
        commonMistake: 'Calculating markup on marked price rather than cost price.',
        catTip: 'Use decimal multipliers directly: multiply by (1 + markup/100).'
      },
      estimatedTime: 45,
      learningObjective: 'Calculate marked price from cost price using percentage multipliers.'
    };
  } else if (diff === 'EASY') {
    const baseP = 15 + idx * 5; // price rise %
    // reduction = 100 * baseP / (100 + baseP)
    const red = Math.round((100 * baseP / (100 + baseP)) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Product Constancy and Inverse Percentage Variations',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `The price of cooking oil increases by ${baseP}%. By approximately what percentage must a household reduce its consumption so that overall expenditure remains constant?`,
      options: [`${red}%`, `${baseP}%`, `${(red + 2.5).toFixed(1)}%`, `${(red - 2.0).toFixed(1)}%`],
      correctAnswer: `${red}%`,
      solution: {
        finalAnswer: `${red}%`,
        steps: [
          'Expenditure = Price * Consumption = Constant.',
          `If price increases by ${baseP}% = ${baseP}/100, multiplier is (1 + ${baseP}/100) = ${(1 + baseP/100).toFixed(2)}.`,
          `To keep product constant, consumption multiplier = 1 / (1 + ${baseP}/100) = 100 / ${100 + baseP}.`,
          `Fractional reduction = ${baseP} / ${100 + baseP}.`,
          `Percentage reduction = (${baseP} / ${100 + baseP}) * 100% ≈ ${red}%.`
        ],
        concept: 'Product Constancy Rule: If A increases by x/(y), B must decrease by x/(x + y) to keep A * B constant.',
        whyItWorks: 'Inverse proportionality requires reciprocal scaling factors to preserve product invariance.',
        commonMistake: 'Assuming consumption must decrease by the same percentage as the price increased.',
        catTip: 'Apply the standard fraction rule: a/b increase requires a/(a+b) decrease.'
      },
      estimatedTime: 60,
      learningObjective: 'Master inverse variation and consumption adjustments under price changes.'
    };
  } else if (diff === 'MODERATE') {
    const markup = 20 + idx * 5;
    const discount = 10 + (idx % 3) * 5;
    // net = (1 + markup/100)(1 - discount/100) - 1
    const netMultiplier = (1 + markup / 100) * (1 - discount / 100);
    const netPercent = Math.round((netMultiplier - 1) * 1000) / 10;
    const isProfit = netPercent >= 0;
    const ansStr = `${Math.abs(netPercent)}% ${isProfit ? 'Profit' : 'Loss'}`;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Successive Percentage Multipliers with Markup and Trade Discount',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `A manufacturer marks an article ${markup}% above production cost and provides a retailer with a discount of ${discount}% on marked price. What is the manufacturer's net percentage profit or loss?`,
      options: [ansStr, `${(Math.abs(netPercent) + 4).toFixed(1)}% Profit`, `${(Math.abs(netPercent) - 3).toFixed(1)}% Loss`, `${markup - discount}% Profit`],
      correctAnswer: ansStr,
      solution: {
        finalAnswer: ansStr,
        steps: [
          'Let Cost Price = 100.',
          `Marked Price = 100 * (1 + ${markup}/100) = ${100 + markup}.`,
          `Selling Price = Marked Price * (1 - ${discount}/100) = ${100 + markup} * ${(1 - discount/100).toFixed(2)} = ${(100 * netMultiplier).toFixed(2)}.`,
          `Net Gain = ${(100 * netMultiplier).toFixed(2)} - 100 = ${netPercent.toFixed(1)}%.`,
          `Result is ${ansStr}.`
        ],
        concept: 'Net Multiplier = (1 + Markup%)(1 - Discount%)',
        whyItWorks: 'Discounts compound on top of the marked price, not the initial cost price.',
        commonMistake: 'Directly subtracting discount from markup (e.g. ' + (markup - discount) + '%).',
        catTip: 'Multiply factors directly: ' + (1 + markup/100).toFixed(2) + ' * ' + (1 - discount/100).toFixed(2) + ' = ' + netMultiplier.toFixed(3) + '.'
      },
      estimatedTime: 75,
      learningObjective: 'Calculate combined impact of markup and discount rates via compounded multipliers.'
    };
  } else {
    // INTERMEDIATE
    const falseWeight = 850 + idx * 10; // grams sold as 1000g
    const markup = 10 + idx * 2;
    // Real CP of 1000g = 1000. Customer receives falseWeight grams, which cost the shopkeeper falseWeight.
    // Customer pays 1000 * (1 + markup/100).
    const revenue = 1000 * (1 + markup / 100);
    const cost = falseWeight;
    const profitRate = Math.round(((revenue - cost) / cost) * 1000) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Faulty Balance & Dishonest Trader Multiplier Framework',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `A dishonest grocer professes to sell sugar at a markup of ${markup}% over cost price, but uses a fraudulent weighing balance that reads 1000 grams for every ${falseWeight} grams actually dispensed. Calculate his true overall profit percentage. (Round off to 1 decimal place).`,
      options: null,
      correctAnswer: `${profitRate}`,
      solution: {
        finalAnswer: `${profitRate}`,
        steps: [
          `Let the cost price of 1 gram of sugar = ₹1.`,
          `The customer pays for 1000 grams with a ${markup}% markup: Revenue = 1000 * (1 + ${markup}/100) = ₹${revenue}.`,
          `The grocer actually dispenses only ${falseWeight} grams: True Cost = ₹${cost}.`,
          `Net Profit = Revenue - True Cost = ₹${revenue} - ₹${cost} = ₹${(revenue - cost).toFixed(1)}.`,
          `Profit Percentage = (Profit / True Cost) * 100 = (${(revenue - cost).toFixed(1)} / ${cost}) * 100% = ${profitRate}%.`
        ],
        concept: 'Dishonest Merchant Formula: Overall Multiplier = (Nominal Weight / Actual Weight) * (Selling Price Multiplier).',
        whyItWorks: 'The shopkeeper derives profit from two independent multipliers: marking up the unit price and shortchanging the delivered quantity.',
        commonMistake: 'Calculating the percentage shortchange on 1000 grams rather than the actual weight dispensed.',
        catTip: 'Chain multipliers: Overall Multiplier = (1000 / ' + falseWeight + ') * ' + (1 + markup/100).toFixed(2) + '.'
      },
      estimatedTime: 90,
      learningObjective: 'Solve compound dishonest dealer problems involving simultaneous markup and faulty weight balances.'
    };
  }
}

// -------------------------------------------------------------
// 2. TIME & WORK GENERATOR
// -------------------------------------------------------------
function makeTimeWorkQuestion(id, topic, diff, idx) {
  const d1 = 12 + idx * 2;
  const d2 = 18 + idx * 3;
  // LCM
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (d1 * d2) / gcd(d1, d2);
  const rate1 = lcm / d1;
  const rate2 = lcm / d2;
  const combRate = rate1 + rate2;
  const totalDays = Math.round((lcm / combRate) * 10) / 10;

  if (diff === 'FOUNDATION') {
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Unit Work Rate and Joint Task Completion',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `Person A can complete a project in ${d1} days working alone, while Person B can complete the same project in ${d2} days alone. Working together, in how many days can they complete the project?`,
      options: [`${totalDays} days`, `${(totalDays + 2).toFixed(1)} days`, `${(totalDays - 1.5).toFixed(1)} days`, `${Math.round((d1 + d2)/2)} days`],
      correctAnswer: `${totalDays} days`,
      solution: {
        finalAnswer: `${totalDays} days`,
        steps: [
          `Assume total work units = LCM(${d1}, ${d2}) = ${lcm} units.`,
          `A's daily work rate = ${lcm} / ${d1} = ${rate1} units/day.`,
          `B's daily work rate = ${lcm} / ${d2} = ${rate2} units/day.`,
          `Combined daily rate = ${rate1} + ${rate2} = ${combRate} units/day.`,
          `Total time required = ${lcm} / ${combRate} = ${totalDays} days.`
        ],
        concept: 'Total Time = Total Units / (Rate A + Rate B)',
        whyItWorks: 'Assuming total units as the LCM avoids fractional addition and simplifies rates to integers.',
        commonMistake: 'Averaging the two completion times directly: (' + d1 + ' + ' + d2 + ')/2.',
        catTip: 'Product divided by sum: (A * B) / (A + B) = (' + d1 + ' * ' + d2 + ') / (' + (d1 + d2) + ') = ' + totalDays + ' days.'
      },
      estimatedTime: 50,
      learningObjective: 'Calculate combined work duration using the LCM unit-rate framework.'
    };
  } else if (diff === 'EASY') {
    // A works for k days, B finishes rest
    const k = 3 + (idx % 3);
    const workDoneByA = rate1 * k;
    const remaining = lcm - workDoneByA;
    const daysByB = Math.round((remaining / rate2) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Sequential Work and Remainder Completion',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `Worker X can finish a task in ${d1} days and Worker Y can finish it in ${d2} days. If Worker X works alone for ${k} days and then departs, how many days will Worker Y take to complete the remaining work alone?`,
      options: [`${daysByB} days`, `${(daysByB + 3).toFixed(1)} days`, `${(daysByB - 2.5).toFixed(1)} days`, `${(daysByB + 1.5).toFixed(1)} days`],
      correctAnswer: `${daysByB} days`,
      solution: {
        finalAnswer: `${daysByB} days`,
        steps: [
          `Total work = LCM(${d1}, ${d2}) = ${lcm} units.`,
          `Rate of X = ${rate1} units/day; Rate of Y = ${rate2} units/day.`,
          `Work completed by X in ${k} days = ${k} * ${rate1} = ${workDoneByA} units.`,
          `Remaining work = ${lcm} - ${workDoneByA} = ${remaining} units.`,
          `Days taken by Y = ${remaining} / ${rate2} = ${daysByB} days.`
        ],
        concept: 'Remaining Days = (Total Work - Completed Work) / Rate of remaining worker.',
        whyItWorks: 'Work accumulates linearly with respect to daily unit productivity.',
        commonMistake: 'Forgetting to subtract the work completed during the initial days.',
        catTip: 'Subtract integer units from total LCM work units before dividing by Y\'s rate.'
      },
      estimatedTime: 65,
      learningObjective: 'Handle phased work schedules and remainder unit allocations.'
    };
  } else if (diff === 'MODERATE') {
    // Alternate days work
    const cycleWork = rate1 + rate2;
    const fullCycles = Math.floor(lcm / cycleWork);
    const remWork = lcm - fullCycles * cycleWork;
    let extraDays = 0;
    if (remWork <= rate1) {
      extraDays = remWork / rate1;
    } else {
      extraDays = 1 + (remWork - rate1) / rate2;
    }
    const totalAlternateDays = Math.round((fullCycles * 2 + extraDays) * 100) / 100;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Alternate Day Cycle Scheduling and Integer Remainder Allocation',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `Technician P can assemble a server in ${d1} hours, while Technician Q can assemble it in ${d2} hours. If they work on alternate hours starting with P in the first hour, in how many hours will the server assembly be completed?`,
      options: [`${totalAlternateDays} hours`, `${(totalAlternateDays + 1.2).toFixed(2)} hours`, `${(totalAlternateDays - 0.8).toFixed(2)} hours`, `${(totalAlternateDays + 2.0).toFixed(2)} hours`],
      correctAnswer: `${totalAlternateDays} hours`,
      solution: {
        finalAnswer: `${totalAlternateDays} hours`,
        steps: [
          `Total work = LCM(${d1}, ${d2}) = ${lcm} units. Rate P = ${rate1} u/h, Rate Q = ${rate2} u/h.`,
          `In a 2-hour cycle (P followed by Q), work completed = ${rate1} + ${rate2} = ${cycleWork} units.`,
          `Number of full 2-hour cycles = floor(${lcm} / ${cycleWork}) = ${fullCycles} cycles (${fullCycles * 2} hours).`,
          `Work completed after full cycles = ${fullCycles * cycleWork} units. Remainder = ${remWork} units.`,
          remWork <= rate1
            ? `P finishes the remaining ${remWork} units in ${remWork} / ${rate1} = ${extraDays.toFixed(2)} hours.`
            : `P works 1 hour (${rate1} units), leaving ${remWork - rate1} units for Q, who takes ${(remWork - rate1) / rate2} hours.`,
          `Total time = ${totalAlternateDays} hours.`
        ],
        concept: 'Cycle Method: Group repeated shifts into multi-person blocks, then resolve final fractional remainder.',
        whyItWorks: 'Cyclic productivity allows dividing large task totals by block rate sums.',
        commonMistake: 'Treating alternate work as continuous simultaneous work: (A + B)/2.',
        catTip: 'Calculate full 2-hour blocks first to prevent fractional shift confusion.'
      },
      estimatedTime: 85,
      learningObjective: 'Master alternate work cycles and fractional remaining shift calculations.'
    };
  } else {
    // INTERMEDIATE - Pipes & Cisterns with leak
    const fillTime = 10 + idx;
    const leakTime = 15 + idx * 2;
    // rate = 1/fillTime - 1/leakTime = (leakTime - fillTime)/(fillTime * leakTime)
    const netTime = Math.round(((fillTime * leakTime) / (leakTime - fillTime)) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Net Inflow Dynamics with Bottom Reservoir Leakage',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `An inlet pipe can fill a reservoir in ${fillTime} hours. Due to a leak at the bottom of the reservoir, it takes ${netTime} hours to fill the completely empty reservoir. If the reservoir is completely full and the inlet is closed, in how many hours will the leak empty the entire reservoir?`,
      options: null,
      correctAnswer: `${leakTime}`,
      solution: {
        finalAnswer: `${leakTime}`,
        steps: [
          `Let capacity of reservoir = LCM(${fillTime}, ${netTime}) = ${fillTime * leakTime} units.`,
          `Inlet filling rate = 1 / ${fillTime} per hour.`,
          `Net filling rate with leak active = 1 / ${netTime} per hour.`,
          `Leak emptying rate = Inlet rate - Net rate = (1 / ${fillTime}) - (1 / ${netTime}).`,
          `Leak rate = (${netTime} - ${fillTime}) / (${fillTime} * ${netTime}) = 1 / ${leakTime} per hour.`,
          `Time taken by leak to empty full reservoir = ${leakTime} hours.`
        ],
        concept: 'Rate_Leak = Rate_Inlet - Rate_Net.',
        whyItWorks: 'Outflow rates subtract algebraically from positive volumetric inflow rates.',
        commonMistake: 'Adding the rates instead of subtracting the net rate from the inlet rate.',
        catTip: 'Time = (Fill_Time * Net_Time) / (Net_Time - Fill_Time).'
      },
      estimatedTime: 80,
      learningObjective: 'Isolate outflow leak rates from net volumetric filling rates.'
    };
  }
}

// -------------------------------------------------------------
// 3. TIME SPEED & DISTANCE GENERATOR
// -------------------------------------------------------------
function makeTSDQuestion(id, topic, diff, idx) {
  const s1 = 40 + idx * 5;
  const s2 = 60 + idx * 5;
  const avgSpeed = Math.round((2 * s1 * s2 / (s1 + s2)) * 10) / 10;

  if (diff === 'FOUNDATION') {
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Harmonic Average Speed over Equal Distances',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `A delivery van travels from Town P to Town Q at an average speed of ${s1} km/h and returns along the exact same highway at ${s2} km/h. What is the average speed of the van for the entire round trip?`,
      options: [`${avgSpeed} km/h`, `${(s1 + s2)/2} km/h`, `${(avgSpeed + 3.2).toFixed(1)} km/h`, `${(avgSpeed - 2.8).toFixed(1)} km/h`],
      correctAnswer: `${avgSpeed} km/h`,
      solution: {
        finalAnswer: `${avgSpeed} km/h`,
        steps: [
          'Average Speed = Total Distance / Total Time.',
          'Let distance between Town P and Town Q = D.',
          `Total distance = 2D. Time outward = D / ${s1}. Time return = D / ${s2}.`,
          `Total Time = D/(${s1}) + D/(${s2}) = D * (${s1} + ${s2}) / (${s1} * ${s2}).`,
          `Average Speed = 2D / [D * (${s1} + ${s2}) / (${s1} * ${s2})] = 2 * ${s1} * ${s2} / (${s1} + ${s2}) = ${avgSpeed} km/h.`
        ],
        concept: 'Harmonic Mean: S_avg = 2ab / (a + b) applies whenever travel distances are identical.',
        whyItWorks: 'More time is spent travelling at the lower speed, weighting the average speed toward the slower leg.',
        commonMistake: 'Taking arithmetic average: (' + s1 + ' + ' + s2 + ')/2 = ' + ((s1+s2)/2) + ' km/h.',
        catTip: 'Never use (a + b)/2 unless travel times for both legs are strictly equal!'
      },
      estimatedTime: 45,
      learningObjective: 'Calculate round-trip average speed using harmonic mean weighting.'
    };
  } else if (diff === 'EASY') {
    // Train crossing pole
    const trainLen = 200 + idx * 50; // meters
    const speedKmh = 54 + (idx % 4) * 18; // 54, 72, 90, 108 km/h
    const speedMs = speedKmh * 5 / 18;
    const timeSec = Math.round((trainLen / speedMs) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Linear Object Transit and Unit Conversion (km/h to m/s)',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `A passenger train of length ${trainLen} meters is traveling at a uniform speed of ${speedKmh} km/h. How many seconds will it take to completely pass a stationary telegraph pole?`,
      options: [`${timeSec} seconds`, `${(timeSec + 3).toFixed(1)} seconds`, `${(timeSec - 2).toFixed(1)} seconds`, `${(timeSec + 5).toFixed(1)} seconds`],
      correctAnswer: `${timeSec} seconds`,
      solution: {
        finalAnswer: `${timeSec} seconds`,
        steps: [
          `Convert speed from km/h to m/s: Speed = ${speedKmh} * (5 / 18) = ${speedMs} m/s.`,
          `To pass a point object (pole), the train must traverse its own length: Distance = ${trainLen} meters.`,
          `Time taken = Distance / Speed = ${trainLen} / ${speedMs} = ${timeSec} seconds.`
        ],
        concept: 'Time = Length of Train / Speed in m/s.',
        whyItWorks: 'A pole has negligible length; full transit occurs when the caboose clears the pole coordinate.',
        commonMistake: 'Forgetting to convert km/h to m/s by multiplying by 5/18.',
        catTip: '18 km/h = 5 m/s, so ' + speedKmh + ' km/h = ' + speedMs + ' m/s directly.'
      },
      estimatedTime: 50,
      learningObjective: 'Master velocity unit conversion and point-object transit mechanics.'
    };
  } else if (diff === 'MODERATE') {
    // Relative speed: opposite direction
    const d = 300 + idx * 50;
    const relSpeed = s1 + s2;
    const meetTimeHrs = Math.round((d / relSpeed) * 100) / 100;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Opposite Direction Convergent Relative Speed',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `Stations A and B are ${d} km apart on a straight railway line. Train 1 leaves A towards B at ${s1} km/h, and at the same time Train 2 leaves B towards A at ${s2} km/h. How many hours after departure will the two trains cross each other?`,
      options: [`${meetTimeHrs} hours`, `${(meetTimeHrs + 0.6).toFixed(2)} hours`, `${(meetTimeHrs - 0.4).toFixed(2)} hours`, `${(meetTimeHrs + 1.2).toFixed(2)} hours`],
      correctAnswer: `${meetTimeHrs} hours`,
      solution: {
        finalAnswer: `${meetTimeHrs} hours`,
        steps: [
          `Distance separating stations = ${d} km.`,
          `Since the trains move towards each other, relative speed = Speed 1 + Speed 2 = ${s1} + ${s2} = ${relSpeed} km/h.`,
          `Time to meet = Total Distance / Relative Speed = ${d} / ${relSpeed} = ${meetTimeHrs} hours.`
        ],
        concept: 'Relative Speed (Converging) = S1 + S2; Time to meet = Initial Separation / (S1 + S2).',
        whyItWorks: 'The gap between two objects closing in on each other decreases at the sum of their individual velocities.',
        commonMistake: 'Subtracting speeds when objects are moving towards each other.',
        catTip: 'Opposite directions: ADD speeds; Same direction: SUBTRACT speeds.'
      },
      estimatedTime: 70,
      learningObjective: 'Apply convergent relative speed formulations to collision and meeting points.'
    };
  } else {
    // INTERMEDIATE - Circular track meetings
    const trackLen = 1200; // meters
    const v1 = 15 + idx * 2; // m/s
    const v2 = 10 + idx; // m/s
    // Opposite direction first meeting
    const meetSec = Math.round(trackLen / (v1 + v2));
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Circular Track Convergent Kinematics & First Meeting Point',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `Two athletes X and Y run around a circular track of circumference ${trackLen} meters starting from the same point at the same time in opposite directions. X runs at ${v1} m/s and Y runs at ${v2} m/s. How many seconds after starting will they meet for the first time?`,
      options: null,
      correctAnswer: `${meetSec}`,
      solution: {
        finalAnswer: `${meetSec}`,
        steps: [
          `Circumference of circular track = ${trackLen} meters.`,
          `Since they run in opposite directions, relative speed = ${v1} + ${v2} = ${v1 + v2} m/s.`,
          `They meet for the first time when the sum of distances covered equals exactly 1 full circuit (${trackLen} m).`,
          `Time of first meeting = Circumference / (Relative Speed) = ${trackLen} / (${v1 + v2}) = ${meetSec} seconds.`
        ],
        concept: 'Time to meet on circular track (opposite) = Track Length / (V1 + V2).',
        whyItWorks: 'On a closed circular loop, a meeting occurs whenever the combined travel distance is an integral multiple of the track perimeter.',
        commonMistake: 'Using difference of speeds when runners travel in opposite directions.',
        catTip: 'First meeting in opposite directions is always Track Length / (V1 + V2).'
      },
      estimatedTime: 75,
      learningObjective: 'Solve closed-loop circular motion meetings using circumferential relative speed.'
    };
  }
}

// -------------------------------------------------------------
// 4. ALGEBRA & EQUATIONS GENERATOR
// -------------------------------------------------------------
function makeAlgebraQuestion(id, topic, diff, idx) {
  const r1 = 2 + idx;
  const r2 = 5 + idx;
  const sumRoots = r1 + r2;
  const prodRoots = r1 * r2;

  if (diff === 'FOUNDATION') {
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Vieta\'s Formulas: Sum and Product of Quadratic Roots',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `If the roots of the quadratic equation x² - ${sumRoots}x + ${prodRoots} = 0 are α and β, what is the value of (α + β) + αβ?`,
      options: [`${sumRoots + prodRoots}`, `${sumRoots * prodRoots}`, `${prodRoots - sumRoots}`, `${sumRoots + prodRoots + 2}`],
      correctAnswer: `${sumRoots + prodRoots}`,
      solution: {
        finalAnswer: `${sumRoots + prodRoots}`,
        steps: [
          `For equation ax² + bx + c = 0, sum of roots α + β = -b/a = -(-${sumRoots})/1 = ${sumRoots}.`,
          `Product of roots αβ = c/a = ${prodRoots}/1 = ${prodRoots}.`,
          `Value of (α + β) + αβ = ${sumRoots} + ${prodRoots} = ${sumRoots + prodRoots}.`
        ],
        concept: 'Vieta\'s Relations: Sum of roots = -b/a, Product of roots = c/a.',
        whyItWorks: 'Expanding (x - α)(x - β) = x² - (α + β)x + αβ matches polynomial coefficients directly.',
        commonMistake: 'Forgetting the negative sign in sum of roots (-b/a).',
        catTip: 'Never solve for individual roots α and β when symmetric expressions are requested!'
      },
      estimatedTime: 40,
      learningObjective: 'Utilize Vieta\'s formulas to evaluate symmetric root combinations directly.'
    };
  } else if (diff === 'EASY') {
    // 1/a + 1/b = (a+b)/(ab)
    const invSum = `${sumRoots}/${prodRoots}`;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Reciprocal Root Summation in Quadratics',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `If α and β are the roots of the quadratic equation x² - ${sumRoots}x + ${prodRoots} = 0, find the value of (1/α + 1/β).`,
      options: [invSum, `${prodRoots}/${sumRoots}`, `${sumRoots - 1}/${prodRoots}`, `${sumRoots + 1}/${prodRoots}`],
      correctAnswer: invSum,
      solution: {
        finalAnswer: invSum,
        steps: [
          `Sum of roots α + β = ${sumRoots}.`,
          `Product of roots αβ = ${prodRoots}.`,
          `1/α + 1/β = (α + β) / (αβ) = ${sumRoots} / ${prodRoots}.`
        ],
        concept: '1/α + 1/β = (α + β) / (αβ) = -b/c.',
        whyItWorks: 'Algebraic fraction addition yields a direct quotient of standard Vieta parameters.',
        commonMistake: 'Inverting roots individually instead of taking common denominator.',
        catTip: 'Direct shortcut: 1/α + 1/β = -b / c.'
      },
      estimatedTime: 45,
      learningObjective: 'Evaluate reciprocal algebraic symmetric functions of polynomial roots.'
    };
  } else if (diff === 'MODERATE') {
    // Equal roots -> Discriminant = 0
    // (kx - 2)^2 etc. or x^2 - kx + prod = 0 -> k = 2 * sqrt(prod)
    const kVal = 2 * Math.round(Math.sqrt(prodRoots));
    const newProd = (kVal / 2) * (kVal / 2);
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Zero Discriminant Condition for Real and Equal Roots',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `For what positive value of k will the quadratic equation x² - kx + ${newProd} = 0 possess real and equal roots?`,
      options: [`${kVal}`, `${kVal + 4}`, `${kVal - 2}`, `${kVal * 2}`],
      correctAnswer: `${kVal}`,
      solution: {
        finalAnswer: `${kVal}`,
        steps: [
          'A quadratic equation ax² + bx + c = 0 has real and equal roots if and only if Discriminant D = b² - 4ac = 0.',
          `Here a = 1, b = -k, c = ${newProd}.`,
          `D = (-k)² - 4(1)(${newProd}) = k² - ${4 * newProd} = 0.`,
          `k² = ${4 * newProd} => k = √(${4 * newProd}) = ${kVal} (since k > 0).`
        ],
        concept: 'D = b² - 4ac = 0 indicates a perfect square quadratic polynomial with a single repeated root.',
        whyItWorks: 'The quadratic formula ±√D collapses to a single value -b/(2a) when D = 0.',
        commonMistake: 'Forgetting to multiply c by 4 in 4ac.',
        catTip: 'For x² - kx + c = 0 to have equal roots, k = 2√c.'
      },
      estimatedTime: 60,
      learningObjective: 'Apply discriminant criteria to enforce multiplicity and root equality constraints.'
    };
  } else {
    // INTERMEDIATE - Minimum value of quadratic
    // f(x) = a x^2 + b x + c min at -b/(2a)
    const a = 2 + (idx % 3);
    const b = -4 * (idx + 1);
    const c = 10 + idx * 5;
    const xMin = -b / (2 * a);
    const minVal = Math.round((a * xMin * xMin + b * xMin + c) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Parabolic Vertex Optimization & Quadratic Extrema',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `Find the minimum real value of the quadratic function f(x) = ${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x + ${c}.`,
      options: null,
      correctAnswer: `${minVal}`,
      solution: {
        finalAnswer: `${minVal}`,
        steps: [
          `For f(x) = ax² + bx + c with a > 0, the parabola opens upward and achieves its minimum at vertex x = -b / (2a).`,
          `x_min = -(${b}) / (2 * ${a}) = ${-b} / ${2 * a} = ${xMin}.`,
          `Minimum value = f(${xMin}) = ${a}(${xMin})² + (${b})(${xMin}) + ${c} = ${minVal}.`
        ],
        concept: 'Minimum value of ax² + bx + c (a > 0) is c - b²/(4a) at x = -b/(2a).',
        whyItWorks: 'Completing the square gives a(x + b/(2a))² + [c - b²/(4a)], which is minimized when the squared term equals zero.',
        commonMistake: 'Entering the x-coordinate where minimum occurs instead of the minimum function value f(x).',
        catTip: 'Minimum value = (4ac - b²) / (4a).'
      },
      estimatedTime: 70,
      learningObjective: 'Optimize quadratic polynomials using vertex coordinates and completion of squares.'
    };
  }
}

// -------------------------------------------------------------
// 5. GEOMETRY & TRIANGLES GENERATOR
// -------------------------------------------------------------
function makeGeometryQuestion(id, topic, diff, idx) {
  const side = 6 + idx * 2;
  const eqArea = Math.round((Math.sqrt(3) / 4 * side * side) * 10) / 10;

  if (diff === 'FOUNDATION') {
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Equilateral Triangle Area and Altitude Metrics',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `An equilateral triangle has sides of length ${side} cm. What is the area of this triangle (in cm²)?`,
      options: [`${eqArea} cm²`, `${(eqArea + 4.5).toFixed(1)} cm²`, `${(side * side / 2).toFixed(1)} cm²`, `${(eqArea - 3.2).toFixed(1)} cm²`],
      correctAnswer: `${eqArea} cm²`,
      solution: {
        finalAnswer: `${eqArea} cm²`,
        steps: [
          `Area of equilateral triangle with side s = (√3 / 4) * s².`,
          `Here side s = ${side} cm.`,
          `Area = (√3 / 4) * (${side})² = (√3 / 4) * ${side * side} ≈ 0.433 * ${side * side} ≈ ${eqArea} cm².`
        ],
        concept: 'Area = (√3 / 4) * a²; Height = (√3 / 2) * a.',
        whyItWorks: 'Dropping a perpendicular bisects the base into two 30-60-90 right triangles with height (√3/2)s.',
        commonMistake: 'Using (1/2) * side * side without the sin(60°) factor.',
        catTip: '√3 / 4 ≈ 0.433. Multiply 0.433 * a² for quick decimal checks.'
      },
      estimatedTime: 45,
      learningObjective: 'Calculate equilateral triangle areas using trigonometric height ratios.'
    };
  } else if (diff === 'EASY') {
    // Pythagorean triplet hypotenuse
    const a = 3 * (idx + 1);
    const b = 4 * (idx + 1);
    const c = 5 * (idx + 1);
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Pythagorean Triplet Identification and Inradius in Right Triangles',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `The two perpendicular legs of a right-angled triangle measure ${a} cm and ${b} cm. Find the radius of the inscribed circle (inradius) of this triangle.`,
      options: [`${(a + b - c) / 2} cm`, `${(a + b - c) / 2 + 1} cm`, `${(c / 2)} cm`, `${(a * b) / (2 * c)} cm`],
      correctAnswer: `${(a + b - c) / 2} cm`,
      solution: {
        finalAnswer: `${(a + b - c) / 2} cm`,
        steps: [
          `Hypotenuse c = √(a² + b²) = √(${a}² + ${b}²) = ${c} cm.`,
          `For a right-angled triangle, inradius r = (a + b - c) / 2.`,
          `r = (${a} + ${b} - ${c}) / 2 = ${a + b - c} / 2 = ${(a + b - c) / 2} cm.`
        ],
        concept: 'Inradius in Right Triangle: r = (Perpendicular + Base - Hypotenuse) / 2.',
        whyItWorks: 'The inradius segments along the legs create a square of side r at the right-angle vertex.',
        commonMistake: 'Confusing inradius r = (a+b-c)/2 with circumradius R = c/2.',
        catTip: 'Shortcut: Inradius r = (a + b - c) / 2 for all right-angled triangles.'
      },
      estimatedTime: 50,
      learningObjective: 'Calculate inradius of right-angled triangles via perimeter-hypotenuse relation.'
    };
  } else if (diff === 'MODERATE') {
    // Tangent secant theorem: PT^2 = PA * PB
    const pa = 4 + idx;
    const ab = 5 + idx;
    const pb = pa + ab;
    const ptSq = pa * pb;
    const pt = Math.round(Math.sqrt(ptSq) * 10) / 10;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Tangent-Secant Theorem (Power of a Point)',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `From an external point P, a tangent PT is drawn to a circle touching it at T. A secant PAB intersects the circle at points A and B such that PA = ${pa} cm and AB = ${ab} cm. What is the length of tangent PT (in cm)?`,
      options: [`${pt} cm`, `${(pt + 1.5).toFixed(1)} cm`, `${(pt - 1.2).toFixed(1)} cm`, `${Math.round(Math.sqrt(pa * ab))} cm`],
      correctAnswer: `${pt} cm`,
      solution: {
        finalAnswer: `${pt} cm`,
        steps: [
          'By the Tangent-Secant Theorem (Power of a Point): PT² = PA * PB.',
          `PA = ${pa} cm.`,
          `PB = PA + AB = ${pa} + ${ab} = ${pb} cm.`,
          `PT² = ${pa} * ${pb} = ${ptSq}.`,
          `PT = √(${ptSq}) ≈ ${pt} cm.`
        ],
        concept: 'Power of a Point: PT² = PA * PB for any secant PAB and tangent PT.',
        whyItWorks: 'Triangles PTA and PBT are similar by the Alternate Segment Theorem.',
        commonMistake: 'Multiplying PA by AB instead of the full secant length PB (PA + AB).',
        catTip: 'Always calculate total PB = PA + AB first before applying PT² = PA * PB.'
      },
      estimatedTime: 65,
      learningObjective: 'Apply Power of a Point theorem to determine tangent lengths from circle secants.'
    };
  } else {
    // INTERMEDIATE - Apollonius theorem
    // AB^2 + AC^2 = 2(AD^2 + BD^2)
    const ab = 7;
    const ac = 9;
    const ad = 7; // median
    // 49 + 81 = 130. 130 = 2(49 + BD^2) -> 65 = 49 + BD^2 -> BD^2 = 16 -> BD = 4 -> BC = 8
    const bc = 8;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Apollonius\' Theorem for Triangle Medians',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `In triangle ABC, side AB = ${ab} cm, side AC = ${ac} cm, and median AD drawn to side BC has length ${ad} cm. Find the length of side BC (in cm).`,
      options: null,
      correctAnswer: `${bc}`,
      solution: {
        finalAnswer: `${bc}`,
        steps: [
          'By Apollonius\' Theorem: AB² + AC² = 2(AD² + BD²), where D is the midpoint of BC.',
          `Substitute values: ${ab}² + ${ac}² = 2(${ad}² + BD²).`,
          `49 + 81 = 2(49 + BD²) => 130 = 2(49 + BD²).`,
          `65 = 49 + BD² => BD² = 16 => BD = 4 cm.`,
          `Since D is the midpoint of BC, BC = 2 * BD = 2 * 4 = ${bc} cm.`
        ],
        concept: 'Apollonius Theorem relates the lengths of triangle sides to its median.',
        whyItWorks: 'Direct corollary of the Law of Cosines applied to adjacent supplementary angles at D.',
        commonMistake: 'Reporting BD instead of total length BC = 2 * BD.',
        catTip: 'Remember BC = 2 * BD. Don\'t stop after solving for BD!'
      },
      estimatedTime: 80,
      learningObjective: 'Solve triangle median lengths using Apollonius\' geometric identity.'
    };
  }
}

// -------------------------------------------------------------
// 6. NUMBER SYSTEM GENERATOR
// -------------------------------------------------------------
function makeNumberSystemQuestion(id, topic, diff, idx) {
  const p = 12 + idx * 4;
  const numDiv = (idx + 2) * 6;

  if (diff === 'FOUNDATION') {
    // Number of factors
    // N = 2^a * 3^b -> factors = (a+1)(b+1)
    const a = 2 + (idx % 3);
    const b = 1 + (idx % 2);
    const n = Math.pow(2, a) * Math.pow(3, b);
    const factors = (a + 1) * (b + 1);
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Prime Factorization & Total Divisor Formula',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `How many positive factors (divisors) does the number ${n} possess?`,
      options: [`${factors}`, `${factors + 2}`, `${factors - 1}`, `${factors + 4}`],
      correctAnswer: `${factors}`,
      solution: {
        finalAnswer: `${factors}`,
        steps: [
          `Find the prime factorization of ${n}: ${n} = 2^${a} * 3^${b}.`,
          `Total number of factors = (power of 2 + 1) * (power of 3 + 1).`,
          `Factors = (${a} + 1) * (${b} + 1) = ${a + 1} * ${b + 1} = ${factors}.`
        ],
        concept: 'For N = p1^a * p2^b * ..., Total Factors = (a + 1)(b + 1)...',
        whyItWorks: 'Each factor is formed by choosing prime power p^k where 0 <= k <= a, giving (a + 1) independent options.',
        commonMistake: 'Counting prime factors rather than all composite divisors.',
        catTip: 'Always express the number in prime base form before applying (exponent + 1).'
      },
      estimatedTime: 40,
      learningObjective: 'Compute total positive divisors from standard canonical prime factorization.'
    };
  } else if (diff === 'EASY') {
    // Trailing zeroes
    const nFact = 20 + idx * 5;
    const z = Math.floor(nFact / 5) + Math.floor(nFact / 25);
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Legendre\'s Formula for Prime Multiplicity in Factorials',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `Find the number of trailing zeroes at the end of the expansion of ${nFact}! (factorial of ${nFact}).`,
      options: [`${z}`, `${z + 1}`, `${z - 1}`, `${Math.floor(nFact / 5)}`],
      correctAnswer: `${z}`,
      solution: {
        finalAnswer: `${z}`,
        steps: [
          'A trailing zero is produced by a factor of 10 = 2 * 5.',
          'In n!, factors of 2 are strictly in excess, so number of zeroes equals the power of 5 in n!.',
          `By Legendre\'s Formula: E_5(${nFact}!) = floor(${nFact} / 5) + floor(${nFact} / 25) = ${Math.floor(nFact / 5)} + ${Math.floor(nFact / 25)} = ${z}.`
        ],
        concept: 'Trailing zeroes = floor(n/5) + floor(n/25) + floor(n/125) + ...',
        whyItWorks: 'Every multiple of 5 contributes one factor of 5; multiples of 25 contribute a second factor of 5.',
        commonMistake: 'Dividing only by 5 and forgetting higher powers like 25.',
        catTip: 'Sum the quotients of successive divisions by 5.'
      },
      estimatedTime: 50,
      learningObjective: 'Determine prime multiplicities and trailing zeroes in large factorials.'
    };
  } else if (diff === 'MODERATE') {
    // Remainder using Euler/Fermat
    // 3^40 mod 7 -> by Fermat 3^6 = 1 mod 7
    const rem = Math.pow(3, (idx % 6)) % 7;
    const pow = 40 + idx;
    const effPow = pow % 6;
    const actualRem = Math.pow(3, effPow) % 7;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Fermat\'s Little Theorem in Modular Arithmetic',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `What is the remainder when 3^(${pow}) is divided by 7?`,
      options: [`${actualRem}`, `${(actualRem + 2) % 7}`, `${(actualRem + 4) % 7}`, `${(actualRem + 1) % 7}`],
      correctAnswer: `${actualRem}`,
      solution: {
        finalAnswer: `${actualRem}`,
        steps: [
          'By Fermat\'s Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).',
          `Here divisor p = 7 (prime), so 3^(7 - 1) = 3^6 ≡ 1 (mod 7).`,
          `Divide the exponent by 6: ${pow} = 6 * ${Math.floor(pow / 6)} + ${effPow}.`,
          `3^(${pow}) = (3^6)^(${Math.floor(pow / 6)}) * 3^${effPow} ≡ 1 * 3^${effPow} (mod 7).`,
          `3^${effPow} mod 7 = ${Math.pow(3, effPow)} mod 7 = ${actualRem}.`
        ],
        concept: 'Fermat\'s Little Theorem: a^(p-1) ≡ 1 (mod p).',
        whyItWorks: 'Coprime integers generate cyclic permutations modulo prime p with period dividing p - 1.',
        commonMistake: 'Dividing the base instead of reducing the exponent modulo 6.',
        catTip: 'Reduce exponent modulo (p - 1) directly when divisor is prime.'
      },
      estimatedTime: 65,
      learningObjective: 'Utilize Fermat\'s Little Theorem to evaluate high-power modular remainders.'
    };
  } else {
    // INTERMEDIATE - Base systems conversion
    const baseTen = 250 + idx * 25;
    const base7 = baseTen.toString(7);
    const sumDigits = base7.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Non-Decimal Radix Conversion and Positional Arithmetic',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `When the decimal integer ${baseTen} is converted into base 7 representation, what is the sum of its digits?`,
      options: null,
      correctAnswer: `${sumDigits}`,
      solution: {
        finalAnswer: `${sumDigits}`,
        steps: [
          `Convert ${baseTen} into base 7 via successive division by 7:`,
          `Successive division remainders yield ${baseTen}_10 = ${base7}_7.`,
          `Sum of digits in base 7 representation = ${base7.split('').join(' + ')} = ${sumDigits}.`
        ],
        concept: 'Radix Conversion: Successive division by target base collects positional coefficients.',
        whyItWorks: 'Positional representation decomposes integers into unique polynomials of base powers.',
        commonMistake: 'Summing the digits in base 10 instead of base 7.',
        catTip: 'Record remainders from bottom to top to assemble the base-7 numeral.'
      },
      estimatedTime: 75,
      learningObjective: 'Convert decimal numbers to arbitrary radix bases and manipulate digit properties.'
    };
  }
}

// -------------------------------------------------------------
// 7. MODERN MATH & PROBABILITY GENERATOR
// -------------------------------------------------------------
function makeModernMathQuestion(id, topic, diff, idx) {
  const n = 5 + idx;

  if (diff === 'FOUNDATION') {
    // Circular permutations
    const circ = n - 1;
    let fact = 1;
    for (let i = 1; i <= circ; i++) fact *= i;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Circular Permutations of Distinct Elements',
      difficulty: 'FOUNDATION', questionType: 'MCQ',
      questionText: `In how many distinct ways can ${n} delegates be seated around a round conference table?`,
      options: [`${fact}`, `${fact * n}`, `${fact / 2}`, `${fact * 2}`],
      correctAnswer: `${fact}`,
      solution: {
        finalAnswer: `${fact}`,
        steps: [
          `Number of distinct objects n = ${n}.`,
          `In a circular arrangement without fixed positions, shifting everyone by 1 seat yields an identical relative arrangement.`,
          `Formula for circular permutations of n distinct objects = (n - 1)!.`,
          `Permutations = (${n} - 1)! = ${circ}! = ${fact}.`
        ],
        concept: 'Circular Permutation: P_circ = (n - 1)!',
        whyItWorks: 'Fixing one person breaks circular symmetry and reduces the problem to linear ordering of remaining (n - 1) elements.',
        commonMistake: 'Using n! instead of (n - 1)!. Circular seating eliminates absolute starting reference.',
        catTip: 'Always fix 1 seat to eliminate rotational duplicates.'
      },
      estimatedTime: 40,
      learningObjective: 'Calculate circular permutation counts factoring rotational invariance.'
    };
  } else if (diff === 'EASY') {
    // Probability of drawing balls
    const red = 3 + (idx % 3);
    const blue = 4 + (idx % 2);
    const total = red + blue;
    // P(both red) = red/total * (red-1)/(total-1)
    const num = red * (red - 1);
    const den = total * (total - 1);
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const g = gcd(num, den);
    const frac = `${num / g}/${den / g}`;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Hypergeometric Dependent Probability without Replacement',
      difficulty: 'EASY', questionType: 'MCQ',
      questionText: `An urn contains ${red} red marbles and ${blue} blue marbles. If two marbles are drawn at random without replacement, what is the probability that both drawn marbles are red?`,
      options: [frac, `${(num/g + 1)}/${den/g}`, `${(num/g)}/${(den/g + 2)}`, `${red}/${total}`],
      correctAnswer: frac,
      solution: {
        finalAnswer: frac,
        steps: [
          `Total marbles = ${red} + ${blue} = ${total}.`,
          `Number of ways to choose 2 red marbles = C(${red}, 2) = (${red} * ${red - 1}) / 2 = ${num / 2}.`,
          `Total ways to choose any 2 marbles = C(${total}, 2) = (${total} * ${total - 1}) / 2 = ${den / 2}.`,
          `Probability = C(${red}, 2) / C(${total}, 2) = ${num} / ${den} = ${frac}.`
        ],
        concept: 'Probability = Favorable Outcomes / Total Outcomes.',
        whyItWorks: 'Without replacement, the sample space and favorable counts decrease by 1 for the second draw.',
        commonMistake: 'Squaring the initial probability (assuming replacement).',
        catTip: 'Multiply conditional probabilities: (' + red + '/' + total + ') * (' + (red-1) + '/' + (total-1) + ').'
      },
      estimatedTime: 50,
      learningObjective: 'Calculate multi-draw probabilities under non-replacement conditions.'
    };
  } else if (diff === 'MODERATE') {
    // Derangements formula
    // D(4) = 9, D(5) = 44
    const dVal = idx % 2 === 0 ? 9 : 44;
    const numLetters = idx % 2 === 0 ? 4 : 5;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Subfactorial Derangement Formula (Sub-permutations)',
      difficulty: 'MODERATE', questionType: 'MCQ',
      questionText: `In how many ways can ${numLetters} addressed letters be placed into ${numLetters} addressed envelopes such that no letter is placed into its correct envelope?`,
      options: [`${dVal}`, `${dVal + 5}`, `${dVal - 3}`, `${numLetters * 4}`],
      correctAnswer: `${dVal}`,
      solution: {
        finalAnswer: `${dVal}`,
        steps: [
          `This is a classic Derangement problem D(n) where n = ${numLetters}.`,
          'Derangement formula: D(n) = n! * [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!].',
          numLetters === 4
            ? 'For n = 4: D(4) = 4! * [1/2! - 1/3! + 1/4!] = 24 * [1/2 - 1/6 + 1/24] = 12 - 4 + 1 = 9.'
            : 'For n = 5: D(5) = 5 * D(4) + (-1)^5 = 5 * 9 - 1 = 44.',
          `Total derangements = ${dVal}.`
        ],
        concept: 'Derangement: D(n) counts permutations where no element appears in its original position.',
        whyItWorks: 'Principle of Inclusion-Exclusion subtracts cases where at least one letter enters its correct envelope.',
        commonMistake: 'Subtracting 1 from total permutations n!.',
        catTip: 'Memorize derangement values: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265.'
      },
      estimatedTime: 65,
      learningObjective: 'Master derangement calculations for complete misplacement conditions.'
    };
  } else {
    // INTERMEDIATE - Dice sum conditional probability
    const sum = 9 + (idx % 3); // 9, 10, 11
    // Count ways two dice sum to 'sum'
    let count = 0;
    for (let d1 = 1; d1 <= 6; d1++) {
      for (let d2 = 1; d2 <= 6; d2++) {
        if (d1 + d2 === sum) count++;
      }
    }
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'QA',
      topicId: topic.id, topicName: topic.name, subtopic: topic.subtopic,
      concept: 'Discrete Sample Space Distribution on Dual Die Rolls',
      difficulty: 'INTERMEDIATE', questionType: 'TITA',
      questionText: `Two unbiased standard six-faced dice are rolled simultaneously. In how many outcomes will the sum of the numbers appearing on their top faces be exactly ${sum}?`,
      options: null,
      correctAnswer: `${count}`,
      solution: {
        finalAnswer: `${count}`,
        steps: [
          `Sample space of two dice = 6 * 6 = 36 outcomes.`,
          `We seek integer pairs (d1, d2) such that 1 <= d1, d2 <= 6 and d1 + d2 = ${sum}.`,
          `Favorable pairs: ` + Array.from({length: 6}, (_, i) => i + 1).filter(d1 => sum - d1 >= 1 && sum - d1 <= 6).map(d1 => `(${d1}, ${sum - d1})`).join(', ') + `.`,
          `Total favorable outcomes = ${count}.`
        ],
        concept: 'Sum of two dice frequencies follow a symmetric triangular distribution peaked at 7.',
        whyItWorks: 'Boundary constraints 1 <= d <= 6 truncate standard integer partition counts.',
        commonMistake: 'Considering (a, b) and (b, a) as identical when dice are distinct.',
        catTip: 'Frequency of sum S for two dice = 6 - |S - 7|.'
      },
      estimatedTime: 60,
      learningObjective: 'Enumerate bounded integer partitions representing multi-die sample spaces.'
    };
  }
}

// Generate all questions across all 7 QA topics
let allQAQuestions = [];
for (const topic of QA_TOPICS) {
  const topicQs = generateTopicQuestions(topic);
  console.log(`Topic [${topic.subtopic}]: generated ${topicQs.length} questions`);
  allQAQuestions = allQAQuestions.concat(topicQs);
}

console.log('Total QA questions ready:', allQAQuestions.length);

// Write to qaQuestions.ts
const header = `import { OriginalQuestion } from '../../types/adaptive';

export const QA_ORIGINAL_QUESTIONS: OriginalQuestion[] = [
`;
const footer = `
];
`;

const body = allQAQuestions.map(formatQuestionTS).join(',\n');
fs.writeFileSync(qaFile, header + body + footer, 'utf8');
console.log('Successfully wrote to', qaFile);

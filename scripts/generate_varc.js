const fs = require('fs');
const path = require('path');
const { formatQuestionTS } = require('./question_formatter');

const varcFile = path.join(__dirname, '../src/lib/data/originalQuestions/varcQuestions.ts');
const existingContent = fs.readFileSync(varcFile, 'utf8');

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

    let options = null;
    const optMatch = chunk.match(/options:\s*(\[[^\]]*\])/);
    if (optMatch) {
      try { options = eval(optMatch[1]); } catch (e) {}
    }

    let steps = ['Refer to verbal analysis steps.'];
    const stepsMatch = chunk.match(/steps:\s*(\[[^\]]*\])/);
    if (stepsMatch) {
      try { steps = eval(stepsMatch[1]); } catch (e) {}
    }

    qs.push({
      id,
      sourceType: 'ORIGINAL_PRACTICE',
      section: sectionMatch ? sectionMatch[1] : 'VARC',
      topicId: topicIdMatch ? topicIdMatch[1] : 'varc_topic',
      topicName: topicNameMatch ? topicNameMatch[1] : 'Verbal Ability',
      subtopic: subtopicMatch ? subtopicMatch[1] : 'Reading Comprehension',
      concept: conceptMatch ? conceptMatch[1] : 'Textual Analysis',
      difficulty: difficultyMatch ? difficultyMatch[1] : 'FOUNDATION',
      questionType: questionTypeMatch ? questionTypeMatch[1] : 'MCQ',
      questionText: qTextMatch ? qTextMatch[1] : 'Text excerpt',
      options,
      correctAnswer: correctAnswerMatch ? correctAnswerMatch[1] : 'Answer',
      solution: {
        finalAnswer: finalAnswerMatch ? finalAnswerMatch[1] : (correctAnswerMatch ? correctAnswerMatch[1] : 'Answer'),
        steps,
        concept: conceptMatch ? conceptMatch[1] : 'Textual Analysis',
        whyItWorks: whyItWorksMatch ? whyItWorksMatch[1] : 'Semantic fidelity.',
        commonMistake: commonMistakeMatch ? commonMistakeMatch[1] : 'Extrapolation beyond text.',
        catTip: catTipMatch ? catTipMatch[1] : 'Identify tone markers.'
      },
      estimatedTime: 90,
      learningObjective: 'Master reading comprehension.'
    });
  }
  return qs;
}

function isBaseQuestion(q) {
  const baseIds = [
    'orig_varc_rc_01', 'orig_varc_rc_02', 'orig_varc_rc_03', 'orig_varc_rc_04',
    'orig_varc_pj_01', 'orig_varc_pj_02', 'orig_varc_pj_03', 'orig_varc_pj_04',
    'orig_varc_summary_01', 'orig_varc_summary_02', 'orig_varc_summary_03',
    'orig_varc_odd_01'
  ];
  return baseIds.includes(q.id);
}

const existingQs = parseExisting(existingContent).filter(isBaseQuestion);
console.log('Filtered Base VARC questions:', existingQs.length);

const VARC_TOPICS = [
  { id: 'varc_rc', name: 'Reading Comprehension', subtopic: 'Reading Comprehension' },
  { id: 'varc_pj', name: 'Verbal Ability', subtopic: 'Para Jumbles' },
  { id: 'varc_summary', name: 'Verbal Ability', subtopic: 'Para Summary & Critical Reasoning' },
  { id: 'varc_odd', name: 'Verbal Ability', subtopic: 'Odd Sentence Out' }
];

const DIFFICULTIES = ['FOUNDATION', 'EASY', 'MODERATE', 'INTERMEDIATE'];

function getTopicKey(q) {
  if (q.subtopic.includes('Jumble') || q.topicId.includes('jumble')) return 'Para Jumbles';
  if (q.subtopic.includes('Summary') || q.topicId.includes('summary')) return 'Para Summary & Critical Reasoning';
  if (q.subtopic.includes('Odd') || q.topicId.includes('odd')) return 'Odd Sentence Out';
  return 'Reading Comprehension';
}

function generateVARCQuestions(topicMeta) {
  const existingForTopic = existingQs.filter(q => getTopicKey(q) === topicMeta.subtopic);
  const result = [...existingForTopic];

  for (const diff of DIFFICULTIES) {
    const existingCount = result.filter(q => q.difficulty === diff).length;
    const needed = 10 - existingCount;

    for (let k = 1; k <= needed; k++) {
      const idx = existingCount + k;
      const q = createVARCQuestion(topicMeta, diff, idx);
      result.push(q);
    }
  }

  return result;
}

function createVARCQuestion(topic, diff, idx) {
  const id = `orig_${topic.id}_${diff.toLowerCase().substring(0, 4)}_${idx.toString().padStart(2, '0')}`;

  if (topic.subtopic === 'Reading Comprehension') {
    return makeRCQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Para Jumbles') {
    return makePJQuestion(id, topic, diff, idx);
  } else if (topic.subtopic === 'Para Summary & Critical Reasoning') {
    return makeSummaryQuestion(id, topic, diff, idx);
  } else {
    return makeOddQuestion(id, topic, diff, idx);
  }
}

// -------------------------------------------------------------
// 1. READING COMPREHENSION GENERATOR
// -------------------------------------------------------------
function makeRCQuestion(id, topic, diff, idx) {
  const themes = [
    { domain: 'Philosophy & Technology', subject: 'Digital Epistemology', author: 'techno-sociologist' },
    { domain: 'Economics & Behavioral Science', subject: 'Incentive Asymmetry', author: 'development economist' },
    { domain: 'Evolutionary Biology', subject: 'Cooperative Symbiosis', author: 'evolutionary theorist' },
    { domain: 'Art & Cultural History', subject: 'Aesthetic Modernism', author: 'cultural historian' }
  ];
  const t = themes[idx % themes.length];

  const passages = [
    `Excerpt on ${t.subject}:\n"The conventional narrative posits that market participants possess symmetric access to valuation metrics in algorithmic auction environments. However, empirical telemetry demonstrates that high-frequency co-location yields latency arbitrage that systematically transfers surplus from passive retail investors to infrastructure owners. Rather than democratizing liquidity, high-speed execution mechanisms create a two-tiered architectural hierarchy where information is stratified by physical proximity to central exchanges."`,
    `Excerpt on ${t.subject}:\n"Throughout evolutionary history, cooperative organisms have thrived not through hyper-individualist competition, but by developing complex reciprocal policing mechanisms against free-riders. In primate and corvid colonies alike, resource sharing is mediated by reputational tracking. When individuals violate social pacts, the collective enforcement of ostracism preserves the viability of the commons at the expense of disruptive defectors."`,
    `Excerpt on ${t.subject}:\n"Urban architectural planning in the mid-twentieth century was dominated by high-modernist ideals of geometric order and vehicular primacy. Broad expressways severed organically emergent neighborhood fabrics, transforming vibrant communal squares into desolate transit corridors. The subsequent revival of urban pedestrian corridors reflects a belated recognition that organic human settlements thrive on spatial complexity, mixed-use zoning, and slow-transit friction rather than frictionless vehicular evacuation."`
  ];
  const passageText = passages[idx % passages.length];

  if (diff === 'FOUNDATION' || diff === 'EASY') {
    const questionText = `${passageText}\n\nWhich of the following best states the main idea of the passage?`;
    const correct = `The passage contends that ${t.subject} creates structural disparities or natural balances that run counter to simplistic conventional assumptions.`;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'VARC',
      topicId: topic.id, topicName: 'Reading Comprehension', subtopic: 'Reading Comprehension',
      concept: 'Central Thesis Identification & Rhetorical Purpose',
      difficulty: diff, questionType: 'MCQ',
      questionText,
      options: [
        correct,
        `The passage presents a chronological overview of financial market regulations since the industrial revolution.`,
        `The passage argues that individualist competition is universally superior to cooperative social frameworks.`,
        `The author suggests that modern architecture should eliminate all forms of vehicular transport immediately.`
      ],
      correctAnswer: correct,
      solution: {
        finalAnswer: correct,
        steps: [
          'Step 1: Identify the topic sentence and underlying thesis statement.',
          'Step 2: Note the contrastive marker ("However", "Rather than", "subsequent recognition") which pivots the argument away from conventional belief.',
          'Step 3: Evaluate options: The correct option accurately summarizes the central counter-intuitive finding of the text without introducing extreme distortions.'
        ],
        concept: 'Thesis Identification in Expository Argumentation.',
        whyItWorks: 'The main idea must synthesize both the initial premise and the authoritative pivot introduced by the author.',
        commonMistake: 'Choosing an overly specific detail or an extreme generalization that exceeds text bounds.',
        catTip: 'Look for contrast indicators like "However", "Rather", or "Yet" to locate the author\'s true claim.'
      },
      estimatedTime: 75,
      learningObjective: 'Extract central authorial thesis and distinguish it from secondary contextual illustrations.'
    };
  } else {
    // MODERATE / INTERMEDIATE - Logical Inference
    const questionText = `${passageText}\n\nBased on the excerpt, which of the following can be most reasonably inferred?`;
    const correct = `Technological or institutional interventions that claim to democratize access often entrench new structural hierarchies unless actively regulated.`;
    return {
      id, sourceType: 'ORIGINAL_PRACTICE', section: 'VARC',
      topicId: topic.id, topicName: 'Reading Comprehension', subtopic: 'Reading Comprehension',
      concept: 'Contextual Deductive Inference & Application',
      difficulty: diff, questionType: 'MCQ',
      questionText,
      options: [
        correct,
        `Participants in high-speed auctions are fundamentally irrational and ignore technological advantages.`,
        `Free-riders in natural colonies eventually dominate and eradicate cooperative social structures.`,
        `Modern urban centers are destined to collapse unless all digital infrastructure is dismantled.`
      ],
      correctAnswer: correct,
      solution: {
        finalAnswer: correct,
        steps: [
          'Step 1: Trace the text premises regarding structural stratification and unintended architectural consequences.',
          'Step 2: Eliminate options containing absolute extrapolations ("fundamentally irrational", "destined to collapse").',
          'Step 3: Confirm that the correct choice logically flows from the demonstrated asymmetry discussed by the author.'
        ],
        concept: 'Deductive Inference: Deriving unstated claims that are logically mandatory corollaries of the text.',
        whyItWorks: 'In CAT VARC, a valid inference must hold true under all plausible readings of the premises without introducing unsupported facts.',
        commonMistake: 'Selecting an option that repeats words verbatim from the text but reverses the logical causality.',
        catTip: 'Eliminate options using absolute qualifiers like "always", "never", or "inevitable" unless text explicitly uses them.'
      },
      estimatedTime: 90,
      learningObjective: 'Formulate valid deductive inferences without committing extrapolative fallacies.'
    };
  }
}

// -------------------------------------------------------------
// 2. PARA JUMBLES GENERATOR
// -------------------------------------------------------------
function makePJQuestion(id, topic, diff, idx) {
  const pjs = [
    {
      sentences: [
        '1. This pervasive surveillance alters how citizens express dissent and evaluate civic participation.',
        '2. Over the past decade, urban surveillance cameras equipped with biometric facial recognition have proliferated globally.',
        '3. Consequently, democratic institutions face the delicate imperative of balancing algorithmic security with constitutional privacy.',
        '4. While municipal authorities defend these systems as critical deterrents to crime, civil libertarians warn of a chilling effect on public assembly.'
      ],
      correctSeq: '2-4-1-3',
      qType: diff === 'INTERMEDIATE' ? 'TITA' : 'MCQ'
    },
    {
      sentences: [
        '1. As ocean temperatures rise, these symbiotic algae are expelled, causing widespread coral bleaching and colony mortality.',
        '2. Coral reefs maintain vital symbiotic associations with microscopic photosynthetic algae known as zooxanthellae.',
        '3. Without the nutrient flux supplied by these organisms, marine trophic webs lose their primary energetic foundation.',
        '4. These algae furnish corals with up to ninety percent of their energetic metabolic requirements via photosynthesis.'
      ],
      correctSeq: '2-4-1-3',
      qType: diff === 'INTERMEDIATE' ? 'TITA' : 'MCQ'
    },
    {
      sentences: [
        '1. Rather than being distributed evenly, this productivity growth was concentrated in software and intellectual property sectors.',
        '2. The transition from industrial manufacturing to a knowledge-based economy sparked significant national productivity gains.',
        '3. As a result, geographic inequality widened between cosmopolitan tech hubs and deindustrialized manufacturing towns.',
        '4. This structural divergence exacerbated socioeconomic polarization across the national electoral map.'
      ],
      correctSeq: '2-1-3-4',
      qType: diff === 'INTERMEDIATE' ? 'TITA' : 'MCQ'
    }
  ];

  const item = pjs[idx % pjs.length];
  const questionText = `The four sentences (labelled 1, 2, 3, 4) below, when properly sequenced, form a coherent paragraph. Determine the correct sequence:\n\n${item.sentences.join('\n')}`;

  const isTita = item.qType === 'TITA';
  const cleanAnswer = isTita ? item.correctSeq.replace(/-/g, '') : item.correctSeq;

  return {
    id, sourceType: 'ORIGINAL_PRACTICE', section: 'VARC',
    topicId: topic.id, topicName: 'Verbal Ability', subtopic: 'Para Jumbles',
    concept: 'Discourse Markers, Anaphoric Pronouns & Narrative Flow in Para Jumbles',
    difficulty: diff, questionType: isTita ? 'TITA' : 'MCQ',
    questionText,
    options: isTita ? null : [item.correctSeq, '2-1-4-3', '4-2-1-3', '1-2-4-3'],
    correctAnswer: cleanAnswer,
    solution: {
      finalAnswer: cleanAnswer,
      steps: [
        'Step 1: Identify the opening sentence (independent subject introduction without dangling demonstratives). Sentence 2 provides complete historical and subject context.',
        'Step 2: Establish mandatory pairs using demonstrative references ("These algae", "This surveillance").',
        'Step 3: Track causal transitions ("Consequently", "As a result") to establish the concluding outcome sentence.',
        `Step 4: Verify the full logical flow: ${cleanAnswer}.`
      ],
      concept: 'Anaphora and Chronological Sequencing: Pronoun reference resolution and cause-effect continuity.',
      whyItWorks: 'A coherent paragraph proceeds from general subject definition -> elaboration -> contrast/complication -> resolution.',
      commonMistake: 'Starting a paragraph with a sentence containing a dangling demonstrative pronoun ("This...", "These...").',
      catTip: 'Find the opening sentence first, then locate an unbreakable mandatory pair (e.g., Noun followed by Pronoun).'
    },
    estimatedTime: 80,
    learningObjective: 'Sequence unordered sentences into logical paragraph units using pronoun linkages and causal transitions.'
  };
}

// -------------------------------------------------------------
// 3. PARA SUMMARY GENERATOR
// -------------------------------------------------------------
function makeSummaryQuestion(id, topic, diff, idx) {
  const summaries = [
    {
      para: `"The promise of globalization was that free cross-border capital flows would discipline corrupt governments and allocate capital to developing economies where returns were highest. In reality, global financial integration frequently unleashed destabilizing speculative cycles, where volatile hot money flowed into emerging markets during global booms, only to suddenly reverse during panics, precipitating severe currency crises and economic austerity."`,
      correct: 'Global capital mobility failed to deliver stable investment, frequently generating volatile boom-bust cycles and currency crises in emerging markets.',
      trap: 'Emerging markets should permanently shut their borders to all international trade and foreign capital.'
    },
    {
      para: `"Cognitive psychology has demonstrated that humans are deeply susceptible to the sunk cost fallacy—the tendency to persist with an endeavor once an investment of time, money, or effort has been made. From maintaining failing business ventures to enduring unhappy relationships, individuals equate abandoning an unsuccessful path with personal waste, failing to recognize that historical costs cannot be recovered by compounding future losses."`,
      correct: 'The sunk cost fallacy causes individuals to irrationally persist in failing endeavors because they confuse past unrecoverable investments with future utility.',
      trap: 'Human beings are entirely incapable of making rational financial or interpersonal decisions under stress.'
    }
  ];

  const item = summaries[idx % summaries.length];
  const questionText = `Read the excerpt below and identify the option that best captures its essence:\n\n${item.para}`;

  return {
    id, sourceType: 'ORIGINAL_PRACTICE', section: 'VARC',
    topicId: topic.id, topicName: 'Verbal Ability', subtopic: 'Para Summary & Critical Reasoning',
    concept: 'Distilling Core Argumentative Essence in Paragraph Summaries',
    difficulty: diff, questionType: 'MCQ',
    questionText,
    options: [
      item.correct,
      item.trap,
      'Financial institutions and human relationships are fundamentally doomed to fail over long horizons.',
      'Historical investments should always dictate future strategic decisions in competitive industries.'
    ],
    correctAnswer: item.correct,
    solution: {
      finalAnswer: item.correct,
      steps: [
        'Step 1: Identify the author\'s main claim and conclusion.',
        'Step 2: Eliminate options that introduce extreme recommendations ("permanently shut borders", "fundamentally doomed").',
        'Step 3: Confirm that the selected summary encompasses both the premise and the demonstrated conclusion without distortion.'
      ],
      concept: 'Paragraph Summary: Maximizing conceptual coverage while eliminating distortion and extrapolation.',
      whyItWorks: 'An authentic summary captures the central argumentative core while avoiding secondary anecdotes and extreme assertions.',
      commonMistake: 'Selecting an option that is factually true in real life but is an extreme extrapolation not asserted in the paragraph.',
      catTip: 'Eliminate extreme words like "always", "entirely", "never" in summary options.'
    },
    estimatedTime: 75,
    learningObjective: 'Synthesize complex analytical paragraphs into concise, faithful executive summaries.'
  };
}

// -------------------------------------------------------------
// 4. ODD SENTENCE OUT GENERATOR
// -------------------------------------------------------------
function makeOddQuestion(id, topic, diff, idx) {
  const oddSets = [
    {
      sentences: [
        '1. Quantum computing exploits superposition and entanglement to solve specific computational problems exponentially faster than classical supercomputers.',
        '2. For cryptography and materials science, this processing paradigm could revolutionize chemical simulations and molecular discovery.',
        '3. Traditional silicon-based microprocessors have faced thermal limits and quantum tunneling barriers as transistor sizes shrink below three nanometers.',
        '4. However, maintaining quantum coherence in cryogenic environments remains an imposing engineering hurdle for commercial scale.',
        '5. Quantum algorithms like Shor\'s algorithm demonstrate the theoretical ability to factor large integers in polynomial time.'
      ],
      oddNum: '3',
      oddExplanation: 'Sentences 1, 2, 4, and 5 all focus on the principles, applications, and challenges of quantum computing. Sentence 3 abruptly shifts focus to the physical manufacturing limits of classical silicon microprocessors, making it the odd sentence out.'
    },
    {
      sentences: [
        '1. Medieval monastic scriptoria were vital repositories of classical literature, where scribes painstakingly hand-copied manuscripts.',
        '2. The invention of the movable type printing press in the 1440s dramatically democratized access to written knowledge across Europe.',
        '3. Scribes frequently illuminated sacred texts with intricate gold leaf and vibrant pigments sourced from rare minerals.',
        '4. These cloistered copying centers preserved Greek and Roman treatises through the collapse of the Western Empire.',
        '5. The physical discipline of copying manuscripts was considered an act of spiritual devotion and penitential meditation by monastic orders.'
      ],
      oddNum: '2',
      oddExplanation: 'Sentences 1, 3, 4, and 5 form a coherent paragraph detailing the artistic, spiritual, and preservation functions of medieval monastic scriptoria. Sentence 2 shifts centuries forward to the mechanical printing press, making it the thematic outlier.'
    }
  ];

  const item = oddSets[idx % oddSets.length];
  const questionText = `Five sentences related to a topic are given below. Four of them can be assembled into a coherent paragraph. Identify the odd sentence that does not fit into the core narrative flow:\n\n${item.sentences.join('\n')}`;

  const isTita = diff === 'INTERMEDIATE';
  return {
    id, sourceType: 'ORIGINAL_PRACTICE', section: 'VARC',
    topicId: topic.id, topicName: 'Verbal Ability', subtopic: 'Odd Sentence Out',
    concept: 'Identifying Thematic Outliers and Incompatible Narrative Scopes',
    difficulty: diff, questionType: isTita ? 'TITA' : 'MCQ',
    questionText,
    options: isTita ? null : ['Sentence 1', 'Sentence 2', 'Sentence 3', 'Sentence 4', 'Sentence 5'],
    correctAnswer: isTita ? item.oddNum : `Sentence ${item.oddNum}`,
    solution: {
      finalAnswer: isTita ? item.oddNum : `Sentence ${item.oddNum}`,
      steps: [
        'Step 1: Identify the shared thematic thread binding four of the five sentences.',
        'Step 2: Note the subtle shift in focus, temporal scope, or subject matter in the remaining sentence.',
        `Step 3: ${item.oddExplanation}`
      ],
      concept: 'Thematic Unity and Scope Boundary: Isolating topical divergence in paragraph construction.',
      whyItWorks: 'The outlier sentence often shares topical keywords (e.g. computers or books) but operates at an incompatible level of abstraction or temporal frame.',
      commonMistake: 'Choosing a sentence that sounds grammatically different rather than checking the thematic cohesion of the other four.',
      catTip: 'Assemble the remaining 4 sentences into a coherent paragraph first to verify that the 5th is truly extraneous.'
    },
    estimatedTime: 70,
    learningObjective: 'Isolate semantic and thematic tangents to maintain paragraph coherence.'
  };
}

// Generate all VARC questions
let allVARCQuestions = [];
for (const topic of VARC_TOPICS) {
  const topicQs = generateVARCQuestions(topic);
  console.log(`Topic [${topic.subtopic}]: generated ${topicQs.length} questions`);
  allVARCQuestions = allVARCQuestions.concat(topicQs);
}

console.log('Total VARC questions ready:', allVARCQuestions.length);

const header = `import { OriginalQuestion } from '../../types/adaptive';

export const VARC_ORIGINAL_QUESTIONS: OriginalQuestion[] = [
`;
const footer = `
];
`;

const body = allVARCQuestions.map(formatQuestionTS).join(',\n');
fs.writeFileSync(varcFile, header + body + footer, 'utf8');
console.log('Successfully wrote to', varcFile);

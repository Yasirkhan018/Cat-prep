import rawQuestions from './pyq/questions.json';
import rawPassages from './pyq/passages.json';
import rawCatalog from './pyq/catalog.json';
import type { QuestionSourceType } from '../types/adaptive';

export interface PYQQuestion {
  id: string;
  paper_id: string;
  year: number;
  slot: number;
  section: 'VARC' | 'DILR' | 'QA';
  question_number: number;
  question_text: string;
  options: string[] | null;
  question_type: 'MCQ' | 'TITA';
  passage_id: string | null;
  image_urls: string[];
  correct_answer: string;
  answer_source: string;
  explanation: string | null;
  topic: string;
  sourceType?: QuestionSourceType;
}

export interface PYQPassage {
  id: string;
  paper_id: string;
  year: number;
  slot: number;
  section: 'VARC' | 'DILR';
  passage_number?: number;
  set_number?: number;
  title: string;
  content: string;
  image_urls?: string[];
  question_ids: string[];
}

export interface PYQPaperSection {
  start: number;
  end: number;
  q_count: number;
}

export interface PYQPaper {
  id: string;
  year: number;
  slot: number;
  name: string;
  total_questions: number;
  sections: {
    VARC: PYQPaperSection;
    DILR: PYQPaperSection;
    QA: PYQPaperSection;
  };
}

export interface PYQFilterOptions {
  year?: number | 'All';
  slot?: number | 'All';
  section?: 'VARC' | 'DILR' | 'QA' | 'All';
  topic?: string | 'All';
  questionType?: 'MCQ' | 'TITA' | 'All';
  search?: string;
}

// ---------------------------------------------------------------------------
// RUNTIME SANITIZATION & ADAPTER LAYER (Source JSON remains 100% immutable)
// ---------------------------------------------------------------------------

/**
 * Complete texts for the 5 passages truncated during initial OCR/PDF ingestion,
 * recovered directly from the leaked question blocks.
 */
export const RESTORED_PASSAGE_CONTENT: Record<string, string> = {
  cat_2024_slot2_varc_rc1: `(. . .) There are three other common drivers for carnivore-human attacks, some of which are more preventable than others. Natural aggression-based conflicts - such as those involving females protecting their young or animals protecting a food source - can often be avoided as long as people stay away from those animals and their food. 
Carnivores that recognise humans as a means to get food, are a different story. As they become more reliant on human food they might find at campsites or in rubbish bins, they become less avoidant of humans. Losing that instinctive fear response puts them into more situations where they could get into an altercation with a human, which often results in that bear being put down by humans. "A fed bear is a dead bear," says Servheen, referring to a common saying among biologists and conservationists. 
Predatory or predation-related attacks are quite rare, only accounting for 17% of attacks in North America since 1955. They occur when a carnivore views a human as prey and hunts it like it would any other animal it uses for food. (. . .) 
Then there are animal attacks provoked by people taking pictures with them or feeding them in natural settings such as national parks which often end with animals being euthanised out of precaution. "Eventually, that animal becomes habituated to people, and [then] bad things happen to the animal. And the folks who initially wanted to make that connection don't necessarily realise that," says Christine Wilkinson, a postdoctoral researcher at UC Berkeley, California, who's been studying coyote-human conflicts. 
After conducting countless postmortems on all types of carnivore-human attacks spanning 75 years, Penteriani's team believes 50% could have been avoided if humans reacted differently. A 2017 study co-authored by Penteriani found that engaging in risky behaviour around large carnivores increases the likelihood of an attack 
Two of the most common risky behaviours are parents leaving their children to play outside unattended and walking an unleashed dog, according to the study. Wilkinson says 66% of coyote attacks involve a dog. "[People] end up in a situation where their dog is being chased, or their dog chases a coyote, or maybe they're walking their dog near a den that's marked, and the coyote wants to escort them away," says Wilkinson. 
Experts believe climate change also plays a part in the escalation of human-carnivore conflicts, but the correlation still needs to be ironed out. "As finite resources become scarcer, carnivores and people are coming into more frequent contact, which means that more conflict could occur," says Jen Miller, international programme specialist for the US Fish & Wildlife Service. For example, she says, there was an uptick in lion attacks in western India during a drought when lions and people were relying on the same water sources. 
(. . .) The likelihood of human-carnivore conflicts appears to be higher in areas of low-income countries dominated by vast rural landscapes and farmland, according to Penteriani's research. "There are a lot of working landscapes in the Global South that are really heterogeneous, that are interspersed with carnivore habitats, forests and savannahs, which creates a lot more opportunity for these encounters, just statistically," says Wilkinson.`,

  cat_2021_slot2_dilr_set2: `Ten objects o1, o2, …, o10 were distributed among Amar, Barat, Charles, Disha, and Elise. Each item went to exactly one person. Each person got exactly two of the items, and this pair of objects is called her/his bundle. 
The following table shows how each person values each object. 
 
The value of any bundle by a person is the sum of that person’s values of the objects in that bundle. A person X envies another person Y if X values Y’s bundle more than X’s own bundle. 
For example, hypothetically suppose Amar’s bundle consists of o1 and o2, and Barat’s bundle consists of o3 and o4. Then Amar values his own bundle at 4 + 9 = 13 and Barat’s bundle at 9 + 3 = 12. Hence Amar does not envy Barat. On the other hand, Barat values his own bundle at 7 + 5 = 12 and Amar’s bundle at 5 + 9 = 14. Hence Barat envies Amar. 
The following facts are known about the actual distribution of the objects among the five people. 
1. If someone’s value for an object is 10, then she/he received that object. 
2. Objects o1, o2, and o3 were given to three different people. 
3. Objects o1 and o8 were given to different people. 
4. Three people value their own bundles at 16. No one values her/his own bundle at a number higher than 16. 
5. Disha values her own bundle at an odd number. All others value their own bundles at an even number. 
6. Some people who value their own bundles less than 16 envy some other people who value their own bundle at 16. No one else envies others.`,

  cat_2021_slot2_dilr_set4: `Ravi works in an online food-delivery company. After each delivery, customers rate Ravi on each of four parameters - Behaviour, Packaging, Hygiene, and Timeliness, on a scale from 1 to 9. If the total of the four rating points is 25 or more, then Ravi gets a bonus of ₹20 for that delivery. Additionally, a customer may or may not give Ravi a tip. If the customer gives a tip, it is either ₹30 or ₹50. 
 
One day, Ravi made four deliveries - one to each of Atal, Bihari, Chirag, and Deepak, and received a total of ₹120 in bonus and tips. He did not get both a bonus and a tip from the same customer. 
The following additional facts are also known. 
1. In Timeliness, Ravi received a total of 21 points, and three of the customers gave him the same rating points in this parameter. Atal gave higher rating points than Bihari and Chirag in this parameter. 
2. Ravi received distinct rating points in Packaging from the four customers adding up to 29 points. Similarly, Ravi received distinct rating points in Hygiene from the four customers adding up to 26 points. 
3. Chirag gave the same rating points for Packaging and Hygiene. 
4. Among the four customers, Bihari gave the highest rating points in Packaging, and Chirag gave the highest rating points in Hygiene. 
5. Everyone rated Ravi between 5 and 7 in Behaviour. Unique maximum and minimum ratings in this parameter were given by Atal and Deepak respectively. 
6. If the customers are ranked based on ratings given by them in individual parameters, then Atal’s rank based on Packaging is the same as that based on Hygiene. This is also true for Deepak.`,

  cat_2023_slot2_dilr_set3: `There are nine boxes arranged in a 3×3 array as shown in Tables 1 and 2. Each box contains three sacks. Each sack has a certain number of coins, between 1 and 9, both inclusive. 
The average number of coins per sack in the boxes are all distinct integers. The total number of coins in each row is the same. The total number of coins in each column is also the same. 
 
Table 1 gives information regarding the median of the numbers of coins in the three sacks in a box for some of the boxes. In Table 2 each box has a number which represents the number of sacks in that box having more than 5 coins. That number is followed by a * if the sacks in that box satisfy exactly one among the following three conditions, and it is followed by ** if two or more of these conditions are satisfied. 
i) The minimum among the numbers of coins in the three sacks in the box is 1. 
ii) The median of the numbers of coins in the three sacks is 1. 
iii) The maximum among the numbers of coins in the three sacks in the box is 9.`,

  cat_2023_slot2_dilr_set4: `Anjali, Bipasha, and Chitra visited an entertainment park that has four rides. Each ride lasts one hour and can accommodate one visitor at one point. All rides begin at 9 am and must be completed by 5 pm except for Ride-3, for which the last ride has to be completed by 1 pm. Ride gates open every 30 minutes, e.g. 10 am, 10:30 am, and so on. Whenever a ride gate opens, and there is no visitor inside, the first visitor waiting in the queue buys the ticket just before taking the ride. The ticket prices are Rs. 20, Rs. 50, Rs. 30 and Rs. 40 for Rides 1 to 4, respectively. Each of the three visitors took at least one ride and did not necessarily take all rides. None of them took the same ride more than once. The movement time from one ride to another is negligible, and a visitor leaves the ride immediately after the completion of the ride. No one takes a break inside the park unless mentioned explicitly. 
The following information is also known. 
1. Chitra never waited in the queue and completed her visit by 11 am after spending Rs. 50 to pay for the ticket(s). 
2. Anjali took Ride-1 at 11 am after waiting for 30 mins for Chitra to complete it. It was the only ride where Anjali waited. 
3. Bipasha began her first of three rides at 11:30 am. All three visitors incurred the same amount of ticket expense by 12:15 pm. 
4. The last ride taken by Anjali and Bipasha was the same, where Bipasha waited 30 mins for Anjali to complete her ride. Before standing in the queue for that ride, Bipasha took a 1-hour coffee break after completing her previous ride.`
};

/**
 * Trims Option D trailing leaked text caused by OCR/regex boundary over-captures.
 */
export function sanitizeOptionD(optD: string): string {
  if (!optD) return optD;
  const leakRegex = /(\n\s*Answer Keys:|\n\s*Instruction(s)? for question|\n\s*Comprehension:|\s*Comprehension:|\n\s*The passage below is accompanied by|\s*The passage below is accompanied by|\n\s*Given above is the schematic map|\s*Given above is the schematic map|\n\s*The management of a university hockey|\s*The management of a university hockey|\n\s*A few salesmen are employed|\s*A few salesmen are employed|\n\s*In the following, a year corresponds|\s*In the following, a year corresponds|\n\s*Pulak, Qasim, Ritesh|\s*Pulak, Qasim, Ritesh|\n\s*The schematic diagram below shows|\s*The schematic diagram below shows|\n\s*A visa processing office|\s*A visa processing office|\n\s*The game of QUIET|\s*The game of QUIET|\n\s*e\)\s*Comedians are being|\s*e\)\s*Comedians are being|\n\s*e\)\s*The cumulative average|\s*e\)\s*The cumulative average)/i;
  const match = optD.match(leakRegex);
  let cleanD = optD;
  if (match) {
    cleanD = optD.slice(0, match.index).trim();
  }
  cleanD = cleanD.replace(/\n\s*\d+\s*$/, '').trim();
  return cleanD;
}

/**
 * 6 Para Jumble questions that are TITA in official CAT exam format.
 */
export const PARA_JUMBLE_TITA_IDS = new Set([
  'cat_2022_slot2_varc_q18',
  'cat_2022_slot2_varc_q21',
  'cat_2022_slot2_varc_q22',
  'cat_2022_slot3_varc_q18',
  'cat_2022_slot3_varc_q20',
  'cat_2022_slot3_varc_q24'
]);

/**
 * 4 MCQ questions where correct_answer stored option text instead of standard option letter.
 */
export const MCQ_LETTER_NORMALIZATION: Record<string, string> = {
  cat_2023_slot2_dilr_q04: 'C', // options ["12", "9", "11", "10"], text was "11"
  cat_2023_slot2_dilr_q11: 'A', // options ["45", "15", "36", "30"], text was "45"
  cat_2024_slot1_qa_q08: 'D',   // options ["22", "4", "6", "18"], text was "18"
  cat_2024_slot1_qa_q09: 'C'    // options ["50", "18", "42", "36"], text was "42"
};

/**
 * In-memory passage sanitization adapter. Restores truncated passages.
 */
export function sanitizePassages(passages: PYQPassage[]): PYQPassage[] {
  return passages.map(p => {
    let content = p.content;
    if (RESTORED_PASSAGE_CONTENT[p.id]) {
      content = RESTORED_PASSAGE_CONTENT[p.id];
    } else if (p.id === 'cat_2024_slot2_dilr_set4') {
      content = content.replace(/^e\)\s*The cumulative average of Day 3 decreased from Day 2\.\s*/i, '').trim();
    }
    return {
      ...p,
      content
    };
  });
}

/**
 * In-memory question sanitization adapter. Normalizes MCQ/TITA, Option D leaks, and source typing.
 */
export function sanitizeQuestions(questions: PYQQuestion[]): PYQQuestion[] {
  return questions.map(q => {
    let question_text = q.question_text;
    let options = q.options ? [...q.options] : null;
    let question_type = q.question_type;
    let correct_answer = q.correct_answer;

    // 1. Sanitize cat_2024_slot2_varc_q01 which had the RC passage appended to it
    if (q.id === 'cat_2024_slot2_varc_q01') {
      const splitIdx = question_text.indexOf('\n \nThe passage below is accompanied by four questions');
      if (splitIdx !== -1) {
        question_text = question_text.slice(0, splitIdx).trim();
      }
    }

    // 2. Sanitize Option D leaks
    if (options && options.length >= 4) {
      options[3] = sanitizeOptionD(options[3]);
    }

    // 3. Normalize Para Jumble MCQ -> TITA (incorporate sentences into question_text)
    if (PARA_JUMBLE_TITA_IDS.has(q.id) && options && options.length >= 4) {
      question_type = 'TITA';
      question_text = `${question_text.trim()}\n\n1. ${options[0]}\n2. ${options[1]}\n3. ${options[2]}\n4. ${options[3]}`;
      options = null;
    }

    // 4. Normalize MCQ answers stored as option text to canonical option letter ('A' | 'B' | 'C' | 'D')
    if (MCQ_LETTER_NORMALIZATION[q.id]) {
      correct_answer = MCQ_LETTER_NORMALIZATION[q.id];
    }

    return {
      ...q,
      question_text,
      options,
      question_type,
      correct_answer,
      sourceType: 'CAT_PYQ' as const
    };
  });
}

// Ingested Static Collections with Runtime Adapters Applied
const QUESTIONS: PYQQuestion[] = sanitizeQuestions(rawQuestions as PYQQuestion[]);
const PASSAGES: PYQPassage[] = sanitizePassages(rawPassages as PYQPassage[]);
const CATALOG: PYQPaper[] = rawCatalog as PYQPaper[];

// Indices for fast O(1) lookups
const questionMap = new Map<string, PYQQuestion>();
QUESTIONS.forEach(q => questionMap.set(q.id, q));

const passageMap = new Map<string, PYQPassage>();
PASSAGES.forEach(p => passageMap.set(p.id, p));

const paperMap = new Map<string, PYQPaper>();
CATALOG.forEach(p => paperMap.set(p.id, p));

export const PYQService = {
  // Papers
  getAllPapers(): PYQPaper[] {
    return CATALOG;
  },

  getPaperById(paperId: string): PYQPaper | undefined {
    return paperMap.get(paperId);
  },

  // Questions
  getAllQuestions(): PYQQuestion[] {
    return QUESTIONS;
  },

  getQuestionById(id: string): PYQQuestion | undefined {
    return questionMap.get(id);
  },

  getQuestionsByPaper(paperId: string): PYQQuestion[] {
    return QUESTIONS.filter(q => q.paper_id === paperId).sort((a, b) => {
      const secOrder: Record<string, number> = { VARC: 1, DILR: 2, QA: 3 };
      if (secOrder[a.section] !== secOrder[b.section]) {
        return secOrder[a.section] - secOrder[b.section];
      }
      return a.question_number - b.question_number;
    });
  },

  getQuestionsByPaperAndSection(paperId: string, section: 'VARC' | 'DILR' | 'QA'): PYQQuestion[] {
    return QUESTIONS.filter(q => q.paper_id === paperId && q.section === section)
      .sort((a, b) => a.question_number - b.question_number);
  },

  // Passages & Sets
  getAllPassages(): PYQPassage[] {
    return PASSAGES;
  },

  getPassageById(id: string): PYQPassage | undefined {
    return passageMap.get(id);
  },

  getPassagesByPaper(paperId: string): PYQPassage[] {
    return PASSAGES.filter(p => p.paper_id === paperId);
  },

  // Filter Query Engine
  filterQuestions(filters: PYQFilterOptions): PYQQuestion[] {
    const { year, slot, section, topic, questionType, search } = filters;
    const cleanSearch = search?.trim().toLowerCase();

    return QUESTIONS.filter(q => {
      if (year && year !== 'All' && q.year !== year) return false;
      if (slot && slot !== 'All' && q.slot !== slot) return false;
      if (section && section !== 'All' && q.section !== section) return false;
      if (topic && topic !== 'All' && q.topic !== topic) return false;
      if (questionType && questionType !== 'All' && q.question_type !== questionType) return false;

      if (cleanSearch) {
        const textMatch = q.question_text.toLowerCase().includes(cleanSearch);
        const topicMatch = q.topic.toLowerCase().includes(cleanSearch);
        const optionsMatch = q.options?.some(opt => opt.toLowerCase().includes(cleanSearch));
        
        let passageMatch = false;
        if (q.passage_id) {
          const passage = passageMap.get(q.passage_id);
          if (passage && passage.content.toLowerCase().includes(cleanSearch)) {
            passageMatch = true;
          }
        }

        if (!textMatch && !topicMatch && !optionsMatch && !passageMatch) {
          return false;
        }
      }

      return true;
    });
  },

  // Unique Topics List
  getAvailableTopics(section?: string): string[] {
    const topicsSet = new Set<string>();
    QUESTIONS.forEach(q => {
      if (!section || section === 'All' || q.section === section) {
        topicsSet.add(q.topic);
      }
    });
    return Array.from(topicsSet).sort();
  },

  // High-level statistics
  getStats() {
    const totalQuestions = QUESTIONS.length;
    const totalPapers = CATALOG.length;
    const totalPassages = PASSAGES.length;

    const byYear: Record<number, number> = {};
    const bySection: Record<string, number> = { VARC: 0, DILR: 0, QA: 0 };
    const byType: Record<string, number> = { MCQ: 0, TITA: 0 };

    QUESTIONS.forEach(q => {
      byYear[q.year] = (byYear[q.year] || 0) + 1;
      bySection[q.section] = (bySection[q.section] || 0) + 1;
      byType[q.question_type] = (byType[q.question_type] || 0) + 1;
    });

    return {
      totalQuestions,
      totalPapers,
      totalPassages,
      byYear,
      bySection,
      byType,
      papers: CATALOG
    };
  }
};

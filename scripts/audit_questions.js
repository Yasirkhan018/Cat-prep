const fs = require('fs');
const path = require('path');

function parseQuestions(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match each question object roughly
  const chunks = content.split(/id:\s*['"]/);
  const questions = [];
  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    const id = chunk.substring(0, chunk.indexOf("'") !== -1 ? chunk.indexOf("'") : chunk.indexOf('"'));
    const sectionMatch = chunk.match(/section:\s*['"]([^'"]+)['"]/);
    const topicIdMatch = chunk.match(/topicId:\s*['"]([^'"]+)['"]/);
    const topicNameMatch = chunk.match(/topicName:\s*['"]([^'"]+)['"]/);
    const subtopicMatch = chunk.match(/subtopic:\s*['"]([^'"]+)['"]/);
    const difficultyMatch = chunk.match(/difficulty:\s*['"]([^'"]+)['"]/);
    const sourceTypeMatch = chunk.match(/sourceType:\s*['"]([^'"]+)['"]/);

    questions.push({
      id,
      section: sectionMatch ? sectionMatch[1] : 'Unknown',
      topicId: topicIdMatch ? topicIdMatch[1] : 'Unknown',
      topicName: topicNameMatch ? topicNameMatch[1] : 'Unknown',
      subtopic: subtopicMatch ? subtopicMatch[1] : 'Unknown',
      difficulty: difficultyMatch ? difficultyMatch[1] : 'Unknown',
      sourceType: sourceTypeMatch ? sourceTypeMatch[1] : 'Unknown',
    });
  }
  return questions;
}

const dir = path.join(__dirname, '../src/lib/data/originalQuestions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let allQuestions = [];
for (const file of files) {
  const qs = parseQuestions(path.join(dir, file));
  allQuestions = allQuestions.concat(qs);
}

console.log('TOTAL ORIGINAL QUESTIONS FOUND:', allQuestions.length);

function getCanonicalTopic(q) {
  if (q.section === 'VARC') {
    if (q.topicId === 'varc_rc' || q.subtopic === 'Main Idea & Authorial Intent' || q.subtopic === 'Inference & Contextual Deduction' || q.subtopic === 'Author Tone & Perspective' || q.subtopic === 'Assumption & Application') {
      return 'VARC: Reading Comprehension';
    }
    if (q.subtopic.includes('Jumble') || q.topicId.includes('jumble')) return 'VARC: Para Jumbles';
    if (q.subtopic.includes('Summary') || q.topicId.includes('summary')) return 'VARC: Para Summary & Critical Reasoning';
    if (q.subtopic.includes('Odd') || q.topicId.includes('odd')) return 'VARC: Odd Sentence Out';
    return `VARC: ${q.subtopic || q.topicName}`;
  }
  return `${q.section}: ${q.subtopic || q.topicName}`;
}

const topicSummary = {};

for (const q of allQuestions) {
  const topicKey = getCanonicalTopic(q);
  if (!topicSummary[topicKey]) {
    topicSummary[topicKey] = {
      section: q.section,
      topicName: q.topicName,
      subtopic: q.subtopic,
      total: 0,
      FOUNDATION: 0,
      EASY: 0,
      MODERATE: 0,
      INTERMEDIATE: 0,
    };
  }
  topicSummary[topicKey].total++;
  if (topicSummary[topicKey][q.difficulty] !== undefined) {
    topicSummary[topicKey][q.difficulty]++;
  }
}

console.log('\n--- AUDIT TABLE ---');
console.log('Topic | Total | Foundation | Easy | Moderate | Intermediate | Missing');
console.log('---------------------------------------------------------------------------------');

let totalTopics = 0;
let topicsWith40Plus = 0;
let topicsBelow40 = 0;

for (const [topic, stats] of Object.entries(topicSummary)) {
  totalTopics++;
  const missing = Math.max(0, 40 - stats.total);
  if (stats.total >= 40) topicsWith40Plus++;
  else topicsBelow40++;
  console.log(`${topic.padEnd(35)} | ${String(stats.total).padStart(5)} | ${String(stats.FOUNDATION).padStart(10)} | ${String(stats.EASY).padStart(4)} | ${String(stats.MODERATE).padStart(8)} | ${String(stats.INTERMEDIATE).padStart(12)} | ${String(missing).padStart(7)}`);
}

console.log('---------------------------------------------------------------------------------');
console.log(`Summary: Total Topics: ${totalTopics} | Topics >= 40: ${topicsWith40Plus} | Topics < 40: ${topicsBelow40}`);

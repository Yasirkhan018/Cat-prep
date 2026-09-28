const fs = require('fs');
const path = require('path');

// Helper to format an OriginalQuestion into valid TypeScript code
function formatQuestionTS(q) {
  const optionsStr = q.options ? JSON.stringify(q.options, null, 2) : 'null';
  const stepsStr = JSON.stringify(q.solution.steps, null, 2);
  
  return `  {
    id: ${JSON.stringify(q.id)},
    sourceType: 'ORIGINAL_PRACTICE',
    section: ${JSON.stringify(q.section)},
    topicId: ${JSON.stringify(q.topicId)},
    topicName: ${JSON.stringify(q.topicName)},
    subtopic: ${JSON.stringify(q.subtopic)},
    concept: ${JSON.stringify(q.concept)},
    difficulty: ${JSON.stringify(q.difficulty)},
    questionType: ${JSON.stringify(q.questionType)},
    questionText: ${JSON.stringify(q.questionText)},
    options: ${optionsStr},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    solution: {
      finalAnswer: ${JSON.stringify(q.solution.finalAnswer)},
      steps: ${stepsStr},
      concept: ${JSON.stringify(q.solution.concept)},
      whyItWorks: ${JSON.stringify(q.solution.whyItWorks)},
      alternativeMethod: ${q.solution.alternativeMethod ? JSON.stringify(q.solution.alternativeMethod) : 'undefined'},
      commonMistake: ${JSON.stringify(q.solution.commonMistake)},
      catTip: ${q.solution.catTip ? JSON.stringify(q.solution.catTip) : 'undefined'}
    },
    estimatedTime: ${q.estimatedTime || 60},
    learningObjective: ${JSON.stringify(q.learningObjective || '')}
  }`;
}

// Export helper
module.exports = { formatQuestionTS };

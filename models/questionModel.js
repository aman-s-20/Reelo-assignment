// models/questionModel.js
const _ = require('lodash');

class QuestionModel {
  constructor() {
    this.questionStore = [
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Medium", marks: 5 },
      { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Hard", marks: 5 },
      // Add more questions as needed
    ];
  }

  getQuestionsByDifficulty(difficulty) {
    return _.filter(this.questionStore, { difficulty });
  }
}

module.exports = QuestionModel;

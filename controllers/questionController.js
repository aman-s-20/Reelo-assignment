// controllers/questionController.js
const _ = require('lodash');
const QuestionModel = require('../models/questionModel');

class QuestionController {
  constructor() {
    this.questionModel = new QuestionModel();
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const difficultyTypes = Object.keys(difficultyDistribution);

    difficultyTypes.forEach(difficulty => {
      const difficultyCount = Math.ceil(totalMarks * difficultyDistribution[difficulty]);
      const questions = this.questionModel.getQuestionsByDifficulty(difficulty);

      _.shuffle(questions);

      questionPaper.push(...questions.slice(0, difficultyCount));
    });

    return questionPaper;
  }
}

module.exports = QuestionController;

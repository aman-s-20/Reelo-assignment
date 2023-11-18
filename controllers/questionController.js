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
            const marksPerQuestion = this.questionModel.getQuestionsByDifficulty(difficulty)[0].marks;
            const difficultyCount = Math.ceil(totalMarks * difficultyDistribution[difficulty] / marksPerQuestion);
            let questions = this.questionModel.getQuestionsByDifficulty(difficulty);
      
            // Shuffle the questions array and assign it back to the variable
            questions = _.shuffle(questions);
      
            questionPaper.push(...questions.slice(0, difficultyCount));
        });

        return questionPaper;
    }

}

module.exports = QuestionController;

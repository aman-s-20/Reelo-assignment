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
            let questions = this.questionModel.getQuestionsByDifficulty(difficulty);

            if (questions.length > 0) {
                const marksPerQuestion = questions[0].marks;
                // No. of question percentage wise by total marks 
                const difficultyCount = Math.ceil(((totalMarks*difficultyDistribution[difficulty])/100) / marksPerQuestion);

                // Shuffle the questions array and assign it back to the variable
                questions = _.shuffle(questions);

                questionPaper.push(...questions.slice(0, difficultyCount));
            }
        });

        return questionPaper;
    }
}

module.exports = QuestionController;

const _ = require('lodash');
const questionsData = require('../questionsData');

class QuestionModel {
    constructor() {
        this.questionStore = [...questionsData];
    }

    getQuestionsByDifficulty(difficulty) {
        return this.questionStore.filter(question => question.difficulty === difficulty);
    }
}

module.exports = QuestionModel;

// routes/index.js
const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

const questionController = new QuestionController();

router.get('/', (req, res) => {
  const totalMarks = 100;
  const difficultyDistribution = { Easy: 0.2, Medium: 0.5, Hard: 0.3 };
  const questionPaper = questionController.generateQuestionPaper(totalMarks, difficultyDistribution);

  res.json(questionPaper);
});

module.exports = router;

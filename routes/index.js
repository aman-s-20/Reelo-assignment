// routes/index.js
const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

const questionController = new QuestionController();

router.get('/', (req, res) => {
  const totalMarks = 100;
  const difficultyDistribution = { easy: 0.2, medium: 0.5, hard: 0.3 };
  const questionPaper = questionController.generateQuestionPaper(totalMarks, difficultyDistribution);

  res.json(questionPaper);
});

module.exports = router;

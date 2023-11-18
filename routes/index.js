// routes/index.js
const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

const questionController = new QuestionController();

router.post('/', (req, res) => {
  const totalMarks = req.body.totalMarks;
  const difficultyDistribution = { Easy: req.body.Easy, Medium: req.body.Medium, Hard: req.body.Hard };
  const questionPaper = questionController.generateQuestionPaper(totalMarks, difficultyDistribution);

  res.json(questionPaper);
});

module.exports = router;

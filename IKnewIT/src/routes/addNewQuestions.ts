import { Router } from 'express';
import Questions from '../models/Questions.ts';


const router = Router();

router.post('/questions/:genre', async (req, res) => {
  const { question, correctAnswer, wrongAnswers } = req.body;
  const { genre } = req.params;

  console.log('Received data:', { question, correctAnswer, wrongAnswers, genre });

  try {
    const newQuestion = new Questions({
      genre,
      question,
      correctAnswer,
      wrongAnswers
    });
    await newQuestion.save();
    console.log('Question saved successfully:', newQuestion);
    res.status(201).json({ newQuestion, message: 'Fråga tillagd!' });
  } catch (error) {
    console.error('Error saving question:', error);
    res.status(500).json({ error: 'Kunde inte lägga till frågan.' });
  }
});

export default router;

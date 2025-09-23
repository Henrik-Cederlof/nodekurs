import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  question: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  wrongAnswers: [{ type: String, required: true }]
});

export default mongoose.model('Question', questionSchema, 'questions');
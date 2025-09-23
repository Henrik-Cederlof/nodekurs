import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import cors from 'cors';
import addNewQuestionRoute from './src/routes/addNewQuestions.ts';

env.config();
const app = express(); // Skapar en Express-applikation

app.use(cors({
  origin: 'http://localhost:5173', // Tillåt endast frontend origin
  credentials: true
}));

app.use(express.json()); // Används för att parsa JSON-begäranden

// Routes Börjar här
app.use('/api', addNewQuestionRoute); // Använda routes för att lägga till nya frågor  
// Routes slutar här

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Ansluten till MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hej från servern!');
});

//Starta servern
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servern kör på port ${PORT}`);
});
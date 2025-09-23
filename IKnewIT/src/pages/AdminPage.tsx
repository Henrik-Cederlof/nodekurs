import { useState } from 'react'
import {styles} from '../styles';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [[, direction], setTool] = useState([1, 0]);
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrong1, setWrong1] = useState('');
  const [wrong2, setWrong2] = useState('');

  const handleSubmit = async () => {
    const genre = genres[slideIndex - 1].split(' ')[0];
    const questionData = {
      question,
      correctAnswer,
      wrongAnswers: [wrong1, wrong2]
    };

    console.log('Sending data:', questionData);

    try {
      const response = await fetch(`http://localhost:3000/api/questions/${genre}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionData)
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('Fråga tillagd!');
        // Rensa formuläret
        setQuestion('');
        setCorrectAnswer('');
        setWrong1('');
        setWrong2('');
      } else {
        console.error('Response error:', response.status);
        alert('Fel vid tillägg av fråga');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Kunde inte ansluta till servern');
    }
  };

  const slideAnimation = {
    enter: ( direction: number) => ({
      x_: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    })
  };

  const changeTool = (newDirection: number) => {
    let newIndex  = (slideIndex - 1 + newDirection + maxIndex) % maxIndex;
    setTool([newIndex + 1, newDirection]);
    setSlideIndex(newIndex + 1);
  }

  const toolIndex = [1,2,3,4];
  const maxIndex = toolIndex.length;
  const genres = ['Film 📽', 'Djur 🐾', 'Sport ⚽', 'Historia 📜', 'Geografi 🌍'];
  return (
    
    <div className={styles.main}>
      <main>
        <h1 className={styles.header}>Admin Panelen</h1>
        <p className={styles.paragraph}>Välkommen till adminpanelen!</p>
           <legend className={styles.text}>Lägg till nya frågor</legend>
      </main>
      <div>
        {toolIndex.map((index) => (
          <span 
          key={index} 
          className={`w-3 h-3 mx-1 mt-10 rounded-full inline-block  ${slideIndex === index ? 'bg-yellow-300 scale-130 transition-transform duration-600' : 'bg-orange-300/60'}`}
          ></span>
        ))}
      </div>
    <h3 className={styles.text}>Genre <span className={styles.textspan}>{genres[slideIndex - 1]}</span></h3>
    <AnimatePresence mode='wait' custom={direction}>
      <motion.div
        key={slideIndex}
        custom={direction}
        variants={slideAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
          {slideIndex === 1 && (
          <fieldset className={styles.adminTools}>
          <p>{genres[slideIndex - 1]}</p>
          <div className="w-full flex justify-center">
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Fråga" className={styles.paragraph} />
          </div>
          <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} placeholder="Rätt Svar" className={styles.paragraph} />
          <input type="text" value={wrong1} onChange={(e) => setWrong1(e.target.value)} placeholder="Fel Svar" className={styles.paragraph} />
          <input type="text" value={wrong2} onChange={(e) => setWrong2(e.target.value)} placeholder="Fel Svar" className={styles.paragraph} />
          <button className={styles.button} onClick={handleSubmit}>Lägg till</button>
        </fieldset>
          )}

          {slideIndex === 2 && (
            <fieldset className={styles.adminTools}>
            <p>{genres[slideIndex - 1]}</p>
          <input type="text" placeholder="Fråga"  className={styles.paragraph} />
          <input type="text" placeholder="Rätt Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <button className={styles.button} onClick={handleSubmit}>Lägg till</button>
        </fieldset>
          )}

          {slideIndex === 3 && (
          <fieldset className={styles.adminTools}>
          <p>{genres[slideIndex - 1]}</p>
          <input type="text" placeholder="Fråga" className={styles.paragraph} />
          <input type="text" placeholder="Rätt Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <button className={styles.button} onClick={handleSubmit}>Lägg till</button>
        </fieldset>
          )}
          
          {slideIndex === 4 && (
          <fieldset className={styles.adminTools}>
          <p>{genres[slideIndex - 1]}</p>
          <input type="text" placeholder="Fråga" className={styles.paragraph} />
          <input type="text" placeholder="Rätt Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <input type="text" placeholder="Fel Svar" className={styles.paragraph} />
          <button className={styles.button} onClick={handleSubmit}>Lägg till</button>
        </fieldset>
      )}

      </motion.div>
    </AnimatePresence>
    <div className={styles.adminButtons}>
      <button className={styles.button} onClick={() => changeTool(-1)}>Bakåt</button>
      <button className={styles.button} onClick={() => changeTool(1)}>Nästa</button>
      </div>

    </div>
    

  )
}

export default AdminPage
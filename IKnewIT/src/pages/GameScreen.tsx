import { styles } from '../styles'

const GameScreen = () => {

  return (
        <div className={styles.main}>
          <h1 className={styles.header}>Game Screen</h1>
          <p className={styles.paragraph}>Välkommen, var god välj en genre:</p>
          <div className={styles.gamesMain}>
            <section className={styles.section}>

              <div className="flex flex-col items-center justify-around p-2 h-full">
                <p className={styles.paragraph}>Frågor om Film!</p>
                <p className={styles.paragraph}>Svara på frågor om kända filmer, citat och karaktärer. Testa din filmkunskap och se om du kan gissa rätt film utifrån ledtrådar och klassiska repliker!</p>
                <button className={styles.button}>Starta Quiz</button>
              </div>
            </section>

            <section className={styles.section}>
            <div className="flex flex-col items-center justify-around p-2 h-full">
              <p className={styles.paragraph}>Frågor om Djur!</p>
              <p className={styles.paragraph}>Svara på frågor om djur, deras livsmiljöer och beteenden. Testa din kunskap om djurvärlden!</p>
                <button className={styles.button}>Starta Quiz</button>
              </div>
            </section>

            <section className={styles.section}>
              <div className="flex flex-col items-center justify-around p-2 h-full">
                <p className={styles.paragraph}>Frågor om Sport! </p>
                <p className={styles.paragraph}>Svara på frågor om olika sporter, regler och kända idrottare. Testa din kunskap om sportvärlden!</p>
                <button className={styles.button}>Starta Quiz</button>
              </div>
            </section>


            <section className={styles.section}>
              <div className="flex flex-col items-center justify-around p-2 h-full">
                <p className={styles.paragraph}>Frågor om Historia!</p>
                <p className={styles.paragraph}>Svara på frågor om historiska händelser, personer och platser. Testa din kunskap om världens historia!</p>
                <button className={styles.button}>Starta Quiz</button>
              </div>
            </section>
          </div>

          </div>
  )
}

export default GameScreen


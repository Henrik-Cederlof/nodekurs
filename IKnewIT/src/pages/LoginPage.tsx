import { styles } from '../styles'

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>Logga in</h1>
      <input className={styles.input} type="text" placeholder='Användarnamn' />
      <input className={styles.input} type="password" placeholder='Lösenord' />
      <button className={styles.button}>Logga in</button>
    </div>

  )
}

export default LoginPage
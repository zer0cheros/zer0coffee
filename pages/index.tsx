import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.headspan2}>Zer0</span><span className={styles.headspan}>coffee</span>
        </h1>
      </main>
    </div>
  )
}

export default Home

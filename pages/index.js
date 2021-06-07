import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <main className={styles.main} >
        <h1>Mission</h1>
        <p>At Kings Kare Oil Company, our mission is to provide men, women, and even children,
          with the best hair, beard, and grooming products on the market.</p>
        <h1>
          <Link className={styles.title} href='/'>
            Shop now!
          </Link>
        </h1>
      </main>
      <footer className={styles.footer}>      </footer>
    </div>
  )
}

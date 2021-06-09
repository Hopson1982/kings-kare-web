import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <main className={styles.main} >
        <h1>
          {/* <Link className={styles.title} href='/'>
            Shop now!
          </Link> */}
        </h1>
        <Image className={styles.logo}
          src='/images/hairOil1.jpg'
          height={300}
          width={300} />
      </main>
      <footer className={styles.footer}>
        Copyright &copy; 2021 King's Kare Oil Coompany
      </footer>
    </div>
  )
}

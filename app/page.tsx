import Image from 'next/image'
import styles from './page.module.scss'
import logo from '@/assets/vlg_logo470x470.png'


export default function Home() {
  return (
    <main className={styles.main}>

      <Image src={logo} alt="vlg-header-logo" className={styles.img} />

    </main>
  )
}

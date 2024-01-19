import Image from 'next/image'
import styles from './page.module.scss'
import logo from '@/assets/vlg_logo470x470_2.png'
import chileFlag from '@/assets/chile_flag.png'
import mexicoFlag from '@/assets/mexico_flag.png'
import { Button } from '@/components/index'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.hero}>
        <Image src={logo} alt="vlg-header-logo" className={styles.img} />

        <div className={styles.buttons}>
          <Button variant="primary">
            <Image style={{ transform: 'scale(0.86)' }} src={chileFlag} alt="vlg-chile" />
            <span>VLG Chile</span>
          </Button>
          <Button variant="primary">
            <Image style={{ transform: 'scale(0.86)' }} src={mexicoFlag} alt="vlg-mexico" />
            <span>VLG México</span>
          </Button>
        </div>
      </div>

    </main>
  )
}

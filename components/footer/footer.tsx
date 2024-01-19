import { FC } from 'react'
import styles from './footer.module.scss'
import logo from '@/assets/vlg_logo470x470.png'
import chileFlag from '@/assets/chile_flag.png'
import mexicoFlag from '@/assets/mexico_flag.png'
import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import linkedin from '@/assets/linkedin.png'
import twitter from '@/assets/twitter.png'
import Image from 'next/image'
import Link from 'next/link'


export const Footer: FC = () => {
  return (
    <footer className={styles.container}>

      <div className={styles.col1}>
        <h3>Victoria Line Group</h3>
        <p>2024 @ VictoriaLineGroup <br />
          Todos los derechos reservados.
        </p>

        <ul>
          <li>
            <Image src={facebook} alt="insta-logo" />
          </li>
          <li>
            <Image src={instagram} alt="insta-logo" />
          </li>
          <li>
            <Image src={linkedin} alt="insta-logo" />
          </li>
          <li>
            <Image src={twitter} alt="insta-logo" />
          </li>
        </ul>
      </div>

      <div className={styles.col2}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>Inicio</Link>
          </li>
          <li>
            <Link href="/contacts" className={styles.link}>Contactos</Link>
          </li>
          <li>
            <Link href="/seguimientos" className={styles.link}>Seguimientos</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/services/chile" className={styles.link}>
              <Image src={chileFlag} alt="chile-flag" />
              <span>VGL Chile</span>
            </Link>
          </li>
          <li>
            <Link href="/services/mexico" className={styles.link}>
              <Image src={mexicoFlag} alt="mexico-flag" />
              <span>VGL Mexico</span>
            </Link>
          </li>
        </ul>
      </div>

      <Image className={styles.logo} src={logo} alt="vlg-log" />
    </footer>
  )
}

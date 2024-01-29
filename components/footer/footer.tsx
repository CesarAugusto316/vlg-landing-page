import { FC } from 'react'
import styles from './footer.module.scss'
import logo from '@/assets/vlg_logo470x470.png'
import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import linkedin from '@/assets/linkedin.png'
import twitter from '@/assets/twitter.png'
import Image from 'next/image'
import Link from 'next/link'
import { linksMobile } from '../../helpers/constants'


export const Footer: FC = () => {
  return (
    <footer className={styles.container}>

      <section className={styles.col1}>

        <h3 className={styles.title}>
          <Image className={styles.logoMobile} src={logo} alt="vlg-log" />
          <span>Victoria Line Group</span>
        </h3>
        <p>2024 @victoriaLine <br />
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
      </section>

      <section className={styles.col2}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>Inicio</Link>
          </li>
          <li>
            <Link href="/contacts" className={styles.link}>Contactos</Link>
          </li>
          {/* <li>
            <Link href="/seguimientos" className={styles.link}>Esp</Link>
          </li> */}
        </ul>

        <ul>
          {linksMobile.slice(1, 2).map((link, index) => (
            !link.icon ?
              <li key={index}>
                <Link href={link.path} className={styles.link}>{link.name}</Link>
              </li>
              :
              <li key={index}>
                <Link href={link.path} className={styles.link}>
                  <Image src={link.icon} alt={`chile-${link.name}`} />
                  <span>{link.name}</span>
                </Link>
              </li>
          ))}
        </ul>
      </section>

      <section className={styles.col2Mobile}>
        <ul>
          {linksMobile.map((link, index) => (
            !link.icon ?
              <li key={index}>
                <Link href={link.path} className={styles.link}>{link.name}</Link>
              </li>
              :
              <li key={index}>
                <Link href={link.path} className={styles.link}>
                  <Image src={link.icon} alt={`chile-${link.name}`} />
                  <span>{link.name}</span>
                </Link>
              </li>
          ))}
          {/* <li>
            <Link href="/seguimientos" className={styles.link}>Seguimiento</Link>
          </li> */}
        </ul>
      </section>

      <Image className={styles.logo} src={logo} alt="vlg-log" />
    </footer>
  )
}

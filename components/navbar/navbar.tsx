import { FC } from 'react';
import Link from 'next/link'
import styles from './navbar.module.scss'
import Image from 'next/image';
import logo from '@/assets/vlg_logo68x68.png'
import chileFlag from '@/assets/chile_flag.png'
import mexicoFlag from '@/assets/mexico_flag.png'
import bars from '@/assets/bars.png'
import { Button } from '@/components/index';


export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>

      <section className={styles.navigation}>

        <Image className={styles.logo} src={logo} alt="vlg-logo" />

        <ul>
          <li>
            <Link href="/" className={styles.link}>Inicio</Link>
          </li>
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
          <li>
            <Link href="/contacts" className={styles.link}>Contactos</Link>
          </li>
        </ul>
      </section>

      <Link href="#">
        <Button variant="light">Seguimiento</Button>
        {/* <Image style={{ height: 32, width: 32 }} src={bars} alt="bars" /> */}
      </Link>
    </nav>
  )
}

import { FC } from 'react';
import Link from 'next/link'
import styles from './navbar.module.scss'
import Image from 'next/image';
import logo from '@/assets/vlg_logo68x68.png'


export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>

      <Image src={logo} alt="vlg-logo" />

      <ul>
        <li>
          <Link href="/" className={styles.link}>Inicio</Link>
        </li>
        <li>
          <Link href="/mexico" className={styles.link}>Mexico</Link>
        </li>
        <li>
          <Link href="/chile" className={styles.link}>Chile</Link>
        </li>
        <li>
          <Link href="/contacts" className={styles.link}>Contactos</Link>
        </li>
      </ul>
    </nav>
  )
}

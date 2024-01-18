import { FC } from 'react';
import Link from 'next/link'
import styles from './navbar.module.scss'


export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>
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

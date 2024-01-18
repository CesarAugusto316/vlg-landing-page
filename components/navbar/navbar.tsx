import { FC } from 'react';
import styles from './navbar.module.scss'


export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>Mexico</li>
        <li>Chile</li>
      </ul>
    </nav>
  )
}

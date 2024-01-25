'use client';
import { FC, useState } from 'react';
import Link from 'next/link'
import styles from './navbar.module.scss'
import Image from 'next/image';
import logo from '@/assets/vlg_logo156x156.png'
import chileFlag from '@/assets/chile_flag.png'
import mexicoFlag from '@/assets/mexico_flag.png'
import bars from '@/assets/bars-solid.svg'
import xIcon from '@/assets/x-solid.svg'
import { Button } from '@/components/index';
import { useTransition, animated } from '@react-spring/web';


export const Navbar: FC = () => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className={styles.wrapper}>
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

        <Link href="#" className={styles.followUp}>
          <Button variant="light">Seguimiento</Button>
        </Link>

        <button onClick={() => setToggleButton(prev => !prev)} className={styles.bars}>
          {toggleButton ?
            <Image src={xIcon} alt="x-icon" />
            :
            <Image src={bars} alt="bars" />
          }
        </button>
      </nav>

      <MobileDropDown isOpen={toggleButton} onClose={() => setToggleButton(false)} />
    </div>
  )
}

interface MobileDropDownProps {
  isOpen: boolean;
  onClose?: () => void;
}

const MobileDropDown: FC<MobileDropDownProps> = ({ isOpen, onClose }) => {
  const transition = useTransition(isOpen, {
    from: {
      y: '-100%',
      opacity: 0,
    },
    enter: {
      y: '0%',
      opacity: 1,
    },
    leave: {
      y: '-100%',
      opacity: 0,
    },
    config: {
      tension: 220,
      mass: 1.2
    }
  });

  return transition((style, isOpen) => (
    isOpen &&
    <>
      <animated.ul style={{ transform: style.y.to(y => `translateY(${y})`) }} className={styles.mobileDropdown}>
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
        <li>
          <Link href="#">
            <Button variant="light">Seguimiento</Button>
          </Link>
        </li>
      </animated.ul>
      <animated.div onClick={onClose} style={{ opacity: style.opacity }} className={styles.backdrop}>
      </animated.div>
    </>
  ))
}

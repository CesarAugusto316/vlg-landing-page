'use client';
import { FC, useState } from 'react';
import Link from 'next/link'
import styles from './navbar.module.scss'
import Image from 'next/image';
import logo from '@/assets/vlg_logo470x470.png'
import bars from '@/assets/bars-solid.svg'
import xIcon from '@/assets/x-solid.svg'
import globeIcon from '@/assets/globe.png'
import globeIconDark from '@/assets/globe_darkBlue.png'
import { useTransition, animated } from '@react-spring/web';
import { Modal } from '@/components/index'
import { links } from '../../helpers/constants';


export const Navbar: FC = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbarContainer}>
        <section className={styles.navigation}>
          <Image className={styles.logo} src={logo} alt="vlg-logo" />

          <ul>
            {links.map((link, index) => (
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

        {/* appears on desktop  */}
        <button
          className={styles.languageBtn}
          onClick={() => setToggleLanguage(prev => !prev)}
          onMouseEnter={() => setToggleLanguage(true)}
          onMouseLeave={() => setToggleLanguage(false)}
        >
          <Image src={globeIcon} alt="globe" />
          <span>Esp</span>

          {toggleLanguage && (
            <div className={styles.desktopLangDropdwon}>
              <ul>
                <li onClick={() => setToggleLanguage(false)}>Español</li>
                <li onClick={() => setToggleLanguage(false)}>Inglés</li>
              </ul>
            </div>
          )}
        </button>
        {/* appears on desktop  */}

        {/* appears on mobile  */}
        <button onClick={() => setToggleButton(prev => !prev)} className={styles.bars}>
          {toggleButton ?
            <Image src={xIcon} alt="x-icon" />
            :
            <Image src={bars} alt="bars" />
          }
        </button>
        {/* appears on mobile  */}
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
  const [toggleLanguage, setToggleLanguage] = useState(false);

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
      mass: 1.4
    }
  });

  return transition((style, isOpen) => (
    isOpen &&
    <>
      <animated.ul style={{ transform: style.y.to(y => `translateY(${y})`) }} className={styles.mobileDropdown}>
        {links.map((link, index) => (
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
        <li>
          <button onClick={() => setToggleLanguage(true)} className={styles.languageBtn}>
            <Image src={globeIconDark} alt="globe" />
            <span>Esp</span>
          </button>

          <Modal isOpen={toggleLanguage} onClose={() => setToggleLanguage(false)} >
            <ul className={styles.modalLanguages}>
              <li onClick={() => setToggleLanguage(false)}>Español</li>
              <li onClick={() => setToggleLanguage(false)}>Inglés</li>
            </ul>
          </Modal>
        </li>
      </animated.ul>

      <animated.div onClick={onClose} style={{ opacity: style.opacity }} className={styles.backdrop} />
    </>
  ))
}

import { FC } from 'react'
import styles from './heroSection.module.scss'


interface HeroProps {
  children: React.ReactNode
}

export const HeroSection: FC<HeroProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

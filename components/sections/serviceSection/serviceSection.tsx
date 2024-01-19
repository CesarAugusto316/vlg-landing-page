import { FC } from 'react';
import styles from './serviceSection.module.scss';


interface ServiceSectionProps {
  children: React.ReactNode;
}

export const ServiceSection: FC<ServiceSectionProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>

        {children}

      </section>
    </div>
  )
}

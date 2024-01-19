import { Button, ServiceSection } from '@/components/index';
import Image, { StaticImageData } from 'next/image';
import styles from './sectionOne.module.scss';
import { FC } from 'react';
import Link from 'next/link';


interface SectionOneProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  img: StaticImageData
}

export const SectionOne: FC<SectionOneProps> = ({ title, subtitle, description, link, img }) => {
  return (
    <ServiceSection>
      <section className={styles.container}>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>

          <p>
            {description}
          </p>

          <Link href={link}>
            <Button variant="primary">¡Comienza ahora!</Button>
          </Link>
        </div>

        <Image src={img} alt={`hero-image-${title}`} />
      </section>
    </ServiceSection>
  )
}

import { Paragraph, ServiceSection } from '@/components/index';
import Image, { StaticImageData } from 'next/image';
import styles from './sectionOne.module.scss';
import { FC } from 'react';


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

          <Paragraph
            subtitle={subtitle}
            description={description}
            link={link}
          />
        </div>

        <Image src={img} alt={`hero-image-${title}`} />
      </section>
    </ServiceSection>
  )
}

import { FC } from 'react';
import sytles from './whyDoWeSection.module.scss';
import img1 from '@/assets/why_01.png';
import img2 from '@/assets/why_02.png';
import img3 from '@/assets/why_03.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/index';


const cardData = [
  {
    image: img1,
    description: 'is simply dummy text'
  },
  {
    image: img2,
    description: 'is simply dummy text'
  },
  {
    image: img3,
    description: 'is simply dummy text'
  }
]


interface WhyDoWeSectionProps {
  title: string,
  description: string,
  buttonLink: string,
  backGroundImage?: boolean
}

export const WhyDoWeSection: FC<WhyDoWeSectionProps> = ({ title, description, buttonLink, backGroundImage = false }) => {
  return (
    <div className={`${sytles.container} ${backGroundImage && sytles.backGroundImage}`}>

      <div className={sytles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={sytles.cardsContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={sytles.card}>
            <Image src={card.image} alt={`card-${index}`} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <Link href={buttonLink}>
        <Button variant="primary">Contáctanos</Button>
      </Link>
    </div>
  );
};

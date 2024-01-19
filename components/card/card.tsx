import React, { FC } from 'react';
import styles from './card.module.scss'
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/index';
import Link from 'next/link';


interface CardProps {
  title: string,
  img: StaticImageData,
  description: React.ReactNode,
  link: string
}

export const Card: FC<CardProps> = ({ description, img, link, title }) => {
  return (
    <div className={styles.card}>

      <h4 className={styles.h4}>{title}</h4>

      <Image src={img} alt={title} />

      <p>{description}</p>

      <Link href={link}>
        <Button variant="light">Ver más...</Button>
      </Link>

    </div>
  )
}

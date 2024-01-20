import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@/components/index';
import styles from './paragraph.module.scss';


interface ParagraphProps {
  subtitle: string;
  description: string;
  link: string;
}

export const Paragraph: FC<ParagraphProps> = ({ subtitle, description, link }) => {
  return (
    <div className={styles.container}>
      <h2>{subtitle}</h2>

      <p>
        {description}
      </p>

      <Link href={link}>
        <Button variant="primary">¡Comienza ahora!</Button>
      </Link>
    </div>
  );
};

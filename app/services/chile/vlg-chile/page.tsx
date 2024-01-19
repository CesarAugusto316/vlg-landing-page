import { Button, ServiceSection } from '@/components/index';
import Image from 'next/image';
import img1 from '@/assets/image 21_big.png';
import styles from './page.module.scss';


export default function VlgChile(): JSX.Element {
  return (
    <ServiceSection>
      <section className={styles.container}>
        <div>
          <h1>VLG Chile</h1>
          <h2>Where can I get some?</h2>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
          </p>

          <Button variant="primary">¡Comienza ahora!</Button>
        </div>

        <Image src={img1} alt="hero-image" />
      </section>
    </ServiceSection>
  )
}

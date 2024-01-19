import { Card, ServiceSection } from '@/components/index'
import styles from './page.module.scss'
import img1 from '@/assets/image 21.png'
import img2 from '@/assets/image 22.png'


const cardData = [
  {
    title: 'VLG Chile',
    img: img1,
    description: (
      <>
        <b> Where can I get some?</b>
        <br /> Lorem Ipsum is simply dummy
      </>
    ),
    link: '/services/chile/vlg-chile',
  },
  {
    title: 'VLG Storage & Logistic',
    img: img2,
    description: (
      <>
        <b>Why do we use it?</b>
        <br /> Lorem Ipsum is simply dummy
      </>
    ),
    link: '/services/chile/vlg-chile',
  }
];


export default function Mexico(): JSX.Element {
  return (
    <ServiceSection>
      <h1 className={styles.h1}>Victoria Line Group - México</h1>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            img={card.img}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </ServiceSection>
  )
}

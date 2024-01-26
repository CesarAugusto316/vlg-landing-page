import { Card, ServiceSection } from '@/components/index'
import styles from './page.module.scss'
import img1 from '@/assets/image 24.png'
import img2 from '@/assets/image 25.png'


const cardData = [
  {
    title: 'VLG México',
    img: img1,
    description: (
      <>
        <b> Where can I get some?</b>
        <br /> Lorem Ipsum is simply dummy
      </>
    ),
    link: '/services/mexico/vlg-mexico',
  },
  {
    title: 'Logística nacional',
    img: img2,
    description: (
      <>
        Line Group Lorem Ipsum <br />
        <b>is simply dummy</b>
      </>
    ),
    link: '/services/mexico/vlg-shipping',
  },
];


export default function Mexico(): JSX.Element {
  return (
    <ServiceSection>
      <h1 className={styles.h1}>Victoria Line Group - México</h1>

      <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

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

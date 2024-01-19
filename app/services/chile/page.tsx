import { Card } from '@/components/index'
import styles from './page.module.scss'
import img1 from '@/assets/image 21.png'
import img2 from '@/assets/image 22.png'
import img3 from '@/assets/image 23.png'


export default function Chile(): JSX.Element {
  return (
    <div className={styles.container}>

      <section className={styles.section}>
        <h1>Victoria Line Group - Chile</h1>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

        <div className={styles.cards}>
          <Card
            title="VLG Chile"
            img={img1}
            description={<><b> Where can I get some?</b><br />Lorem Ipsum is simply dummy</>}
            link="/services/chile/vlg-chile"
          />
          <Card
            title="VLG Storage & Logistic"
            img={img2}
            description={<><b>Why do we use it?</b><br /> Lorem Ipsum is simply dummy</>}
            link="/services/chile/vlg-chile"
          />
          <Card
            title="VLG Agrominerals"
            img={img3}
            description={<>Line Group Lorem Ipsum <br /> <b>is simply dummy</b></>}
            link="/services/chile/vlg-chile"
          />
        </div>
      </section>
    </div>
  )
}

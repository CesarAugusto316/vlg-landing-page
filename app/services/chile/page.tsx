import { Card } from '@/components/index'
import styles from './page.module.scss'
import img1 from '@/assets/image 21.png'


export default function Chile(): JSX.Element {
  return (
    <div className={styles.container}>

      <section>
        <h1>Victoria Line Group - Chile</h1>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

        <div>
          <Card
            title="VLG Chile"
            img={img1}
            description="Where can I get some? Lorem Ipsum is simply dummy"
            link="/services/chile/vlg-chile"
          />
        </div>
      </section>
    </div>
  )
}

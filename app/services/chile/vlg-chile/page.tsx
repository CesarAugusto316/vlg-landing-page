import { MeetAssistanceSection, Paragraph, SectionOne } from '@/components/index';
import img1 from '@/assets/image 21_big.png';
import img2 from '@/assets/Group 6754.png';
import avatar from '@/assets/avatar_01.png'
import styles from './page.module.scss';
import Image from 'next/image';


const title = 'VLG Chile'
const subtitle = 'Where can I get some?'
const description = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry & apos;s standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.It has survived not only five centuries, but also the
`
const link = '#'


export default function VlgChile(): JSX.Element {
  return (
    <>
      <SectionOne
        title={title}
        subtitle={subtitle}
        img={img1}
        link="#"
        description={description}
      />

      <section className={styles.sectionTwo}>
        <div className={styles.cols}>
          <div>
            <Image src={img2} alt="section-2" />
          </div>

          <div>
            <Paragraph
              subtitle={subtitle}
              description={description}
              link={link}
            />
          </div>
        </div>
      </section>

      <section className={styles.whyDoWeUseIt}>

      </section>

      <MeetAssistanceSection
        title="Nuestra Experta en Servicio 1"
        avatar={avatar}
        name="Lilian Silva"
        email="lilian.silva@victoryline.com"
        job="CEO Fundadora"
        phone="+569 1731 9971"
        meetLink="https://meet.google.com/"
      />
    </>
  )
}

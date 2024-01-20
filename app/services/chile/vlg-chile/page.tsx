import { Paragraph, SectionOne } from '@/components/index';
import img1 from '@/assets/image 21_big.png';
import img2 from '@/assets/Group 6754.png';
import styles from './page.module.scss'
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
    </>
  )
}

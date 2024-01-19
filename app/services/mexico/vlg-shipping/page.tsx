import { SectionOne } from '@/components/index';
import img1 from '@/assets/image 21_big.png';


export default function VlgShipping(): JSX.Element {
  return (
    <SectionOne
      title="VLG Chile"
      subtitle="Where can I get some?"
      img={img1}
      link="#"
      description="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
      "
    />
  )
}

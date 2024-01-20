import { MeetAssistanceSection, SectionOne } from '@/components/index';
import img1 from '@/assets/image 21_big.png';
import avatar4 from '@/assets/avatar_04.png';


export default function VlgMexico(): JSX.Element {
  return (
    <>
      <SectionOne
        title="VLG México"
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
      <MeetAssistanceSection
        title="Si necesitas saber más sobre Servicio 2 no dudes en contactarme"
        avatar={avatar4}
        name="Antonio Juan Ruiz Toggle"
        email="antonio.toggle@victoryline.com"
        job="Shipping & Logistics"
        phone="+569 1731 9971"
        meetLink="https://meet.google.com/"
      />
    </>
  )
}

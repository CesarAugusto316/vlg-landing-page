import { MeetAssistanceSection, SectionOne, WhyDoWeSection } from '@/components/index';
import img1 from '@/assets/image 24_big.png';
import avatar5 from '@/assets/avatar_05.png';


export default function VlgShipping(): JSX.Element {
  return (
    <>
      <SectionOne
        title="Logística nacional"
        subtitle="Why do we use it?"
        img={img1}
        link="#"
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
      "
      />

      <WhyDoWeSection
        title="Why do we use it?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
        buttonLink="#"
        backGroundImage={true}
      />

      <MeetAssistanceSection
        title="Si necesitas saber más sobre Servicio 2 no dudes en contactarme"
        avatar={avatar5}
        name="Antonio Juan Ruiz Toggle"
        email="antonio.toggle@victoryline.com"
        job="Shipping & Logistics"
        phone="+569 1731 9971"
        meetLink="https://meet.google.com/"
      />
    </>
  )
}

import { FC } from 'react';
import styles from './meetAssistanceSection.module.scss';
import Image, { StaticImageData } from 'next/image';


interface MeetAssistanceSectionProps {
  title: string,
  avatar: StaticImageData,
  name: string,
  job: string,
  email: string,
  phone: string,
  meetLink: string,
}

export const MeetAssistanceSection: FC<MeetAssistanceSectionProps> = (props) => {
  const { avatar, email, job, meetLink, name, phone, title } = props

  return (
    <section className={styles.meetAssistants}>
      <div>
        <h4>{title}</h4>

        <Image src={avatar} alt={`avatar-${name}`} />

        <p>{name}</p>
        <p>{email}</p>
        <p>{job}</p>
        <p>{phone}</p>
        <p>{meetLink}</p>

      </div>
    </section>
  )
}

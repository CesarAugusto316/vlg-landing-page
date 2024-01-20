import { FC } from 'react';
import styles from './meetAssistanceSection.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


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
      <h4>{title}</h4>

      <div className={styles.avatarContainer}>

        <div>
          <h5>{name}</h5>
          <p>{job}</p>
          <Link href={'#'}>{email}</Link>
        </div>

        <Image src={avatar} alt={`avatar-${name}`} />

        <div>
          <p>{phone}</p>
          <Link href={meetLink}>Agendar</Link>
        </div>
      </div>

    </section>
  )
}

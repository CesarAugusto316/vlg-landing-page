import { FC } from 'react';
import styles from './meetAssistanceSection.module.scss';
import Image, { StaticImageData } from 'next/image';
import whatsappIcon from '@/assets/whatsapp.png';
import googleMeetIcon from '@/assets/google_meet.png';
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
      <h4 style={{ textAlign: 'center' }}>{title}</h4>
      <div className={styles.avatarContainer}>
        <ul>
          <li>
            <h5>{name}</h5>
          </li>
          <li>
            <p>{job}</p>
          </li>
          <li>
            <Link href={email} className={styles.link2}>
              <span>{email}</span>
            </Link>
          </li>
        </ul>

        <Image src={avatar} alt={`avatar-${name}`} />

        <ul>
          <li>
            <p>Iniciar chat en Whatsapp</p>
            <Link href={'#'} className={`${styles.link} ${styles.whatsapp}`}>
              <Image src={whatsappIcon} alt="whatsapp-number" />
              <span>{phone}</span>
            </Link>
          </li>
          <li>
            <p>Agendar una reunión en GoogleMeet</p>
            <Link href={meetLink} className={`${styles.link} ${styles.link2}`}>
              <Image src={googleMeetIcon} alt="meet-icon" />
              <span>Agendar</span>
            </Link>
          </li>
        </ul>
      </div>
    </section >
  )
}

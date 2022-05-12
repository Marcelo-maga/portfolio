/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css"
import EmailQrCode from '../../../../public/email.svg'

import { colorPrimary } from '../../../styles/colorPrimary'

import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const Contact: React.FC = () => {
  return (
    <section className={styles.Contact}>

      <div className={styles.ContainerContact}>

        <h1 className={styles.Text1}>Obrigado por chegar até aqui!</h1>
        <h2 className={styles.Text2}>Escanei esse QrCode e me mande um email</h2>

        <EmailQrCode 
          onClick={ () => console.log('test')}
          className={styles.QrCode}
        />

      </div>

      <div className={styles.SocialMidias}>

        <a href="https://www.github.com/Marcelo-maga">
          <BsGithub style={{ color: colorPrimary }} className={styles.SocialMidiasIcons} />
        </a>
        <a href="https://www.linkedin.com/in/marcelo-maga/">
          <BsLinkedin style={{ color: colorPrimary }} className={styles.SocialMidiasIcons} />
        </a>
        <a href="https://www.instagram.com/_marcelo.maga/">
          <BsInstagram  style={{ color: colorPrimary }} className={styles.SocialMidiasIcons} />
        </a>

      </div>
    </section>
  )
}

export default Contact
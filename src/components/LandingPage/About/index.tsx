import styles from "./styles.module.css"

import { colorPrimary } from '../../../styles/colorPrimary'

const About: React.FC = () => {
  return (
    <section className={styles.About}>
      <div className={styles.ContainerAbout}>
        <h2 className={styles.Text}>
          `papo 10 eu não sei oque escrever`
        </h2>
      </div>
    </section>
  )
}

export default About
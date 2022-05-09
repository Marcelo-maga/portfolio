import styles from './styles.module.css'
import { colorPrimary } from '../../../styles/colorPrimary'
import { VscFoldDown } from "react-icons/vsc";

const Home: React.FC = () => {

  const Title = "<Marcelo-maga />"

  return (
    <section className={styles.Home}>
    <div className={styles.ContainerHome}>

      <div className={styles.Animacao}>
        <h1 style={{ color: colorPrimary }} className={styles.Title}>
          {Title}
        </h1>
      </div>

      <div className={styles.ScrollArea}>
          <p style={{ color: colorPrimary }} className={styles.TextScroll}>
            De um scroll e veja mais
          </p>
          <VscFoldDown className={styles.ScrollSvg} style={{ color: colorPrimary }} />
      </div>
      
    </div>
  </section>
  )
}

export default Home
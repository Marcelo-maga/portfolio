import Carrossel from "../../Carrossel"
import styles from './styles.module.css'

const Projects: React.FC = () => {
  return (
    <section className={styles.Projects}>

      <h1>Alguns dos meus projetos</h1>

      <div className={styles.ContainerProjects}>
          <Carrossel/>
      </div>

    </section>
  )
}

export default Projects
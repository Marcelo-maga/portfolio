import type { NextPage } from 'next'

// Importações das páginas
import Home from '../components/LandingPage/Home'
import About from '../components/LandingPage/About'
import Projects from '../components/LandingPage/Projects'
import Contact from '../components/LandingPage/Contact'

const LandingPage: NextPage = (colorPrimary) => {  
  return (
    <div className='LandingPage'>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default LandingPage

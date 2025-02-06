import '../App.css'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Skill from './Skill'
import Work from './Work'
import Proyects from './Proyects'
import Contact from './Contact'
import ParticlesComponent from './Particles'

function Home() {
  return (
    <div className="content">
    <ParticlesComponent id="particles"></ParticlesComponent>
    <Navbar />
    <Header />
    <About />
    <Skill />
    <Work />
    <Proyects />
    <Contact />
  </div>
  )
}

export default Home
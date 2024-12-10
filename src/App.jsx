import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import ParticlesComponent from './components/Particles'

function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      
      <div className="content">
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Work />
        <Proyects />
        <Contact />
      </div>
    </>
  )
}

export default App

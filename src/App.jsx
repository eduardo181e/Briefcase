import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      
        <Navbar/>
        <Header />
        <About />
        <Skill />
        <Work />
        <Proyects />
        <Contact />
    </>
  )
}

export default App

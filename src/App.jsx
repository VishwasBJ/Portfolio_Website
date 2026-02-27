import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import RoboticBg from './components/RoboticBg'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Animated Robotic Background */}
      <RoboticBg />
      
      {/* Animated Background Elements */}
      <div className="circuit-lines">
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
      </div>
      
      <div className="tech-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="hex-pattern"></div>
      
      <div className="scan-line"></div>
      
      <div className="digital-rain">
        <div className="rain-drop">01010101</div>
        <div className="rain-drop">11001100</div>
        <div className="rain-drop">10101010</div>
        <div className="rain-drop">01110111</div>
        <div className="rain-drop">11110000</div>
        <div className="rain-drop">00111100</div>
        <div className="rain-drop">10011001</div>
        <div className="rain-drop">01100110</div>
        <div className="rain-drop">11001010</div>
        <div className="rain-drop">00110101</div>
      </div>

      <nav>
        <a href="#" className="logo">VISHWAS B J</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/resume.pdf" download="Vishwas_BJ_Resume.pdf" className="download-btn">Download CV</a>
      </nav>

      <Hero scrollY={scrollY} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App

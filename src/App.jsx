import { div } from 'framer-motion/client'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
          <nav>
            {Header()}  
          </nav>        
      </header>
      <main>
        <section id="hero">
          {/* Hero Section */}
        </section>
        <section id="about">

        </section>
        <section id="experiences">

        </section>
        <section id="skills">

        </section>
        <section id="projects">

        </section>
        <section id="contact">

        </section>
        <footer>
          
        </footer>
      </main>
    </div>
  )
}
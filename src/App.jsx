import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Header />
          <Home />
        </section>
        <section id="about">
          <Header />
          <About />
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

export default App
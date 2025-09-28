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
          <Header />

        </section>
        <section id="skills">
          <Header />

        </section>
        <section id="projects">
          <Header />

        </section>
        <section id="contact">
          <Header />
          
        </section>
        <footer>
          
        </footer>
      </main>
    </div>
  )
}

export default App
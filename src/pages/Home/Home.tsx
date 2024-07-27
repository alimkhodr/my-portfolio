import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"

const Home = () => {
    return (
      <>
      <NavBar />
      <div id="hero">
          <Hero />
      </div>
      <div id="about">
          <About />
      </div>
      <div id="skills">
          <Skills />
      </div>
      <div id="projects">
          <Projects />
      </div>
  </>
    )
  }
  export default Home
  
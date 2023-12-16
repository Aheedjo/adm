import Hero from "./components/Hero"
import Skills from "./components/Skills"
import WebTechs from "./components/WebTechs"
import Projects from "./components/Projects"
import About from "./components/About"
import CTA from "./components/CTA"
import ProffesionalStatement from "./components/ProffessionalStatement"

export default function Home() {
  return (
    <>
        <Hero />
        <ProffesionalStatement />
        <Skills />
        <WebTechs />
        <Projects id="projects" />
        <About />
        <CTA />
    </>
  )
}

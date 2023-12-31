import Hero from "./components/Hero"
import Skills from "./components/Skills"
import WebTechs from "./components/WebTechs"
import Projects from "./components/Projects"
import About from "./components/About"
import CTA from "./components/CTA"
import ProffesionalStatement from "./components/ProffessionalStatement"
import Experience from "./components/Experience"
import Education from "./components/Education"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
        <SpeedInsights />
        <Hero />
        <ProffesionalStatement />
        <Experience />
        <Education />
        <Skills />
        <WebTechs />
        <Projects id="projects" />
        <About />
        <CTA />
    </>
  )
}

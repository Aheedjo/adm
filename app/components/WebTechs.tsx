import { FaHtml5, FaSass, FaPython, FaAngular, FaReact, FaFigma, FaNodeJs, FaGithub, FaDigitalOcean } from "react-icons/fa"
import { SiTypescript, SiExpress, SiTailwindcss, SiFlask, SiJira, SiSvelte, SiMongodb, SiHeroku, SiVercel, SiSelenium } from "react-icons/si"
import { DiGit } from "react-icons/di"
import WebTechsStyles from "../styles/WebTechs.module.scss"


const WebTechs = () => {
  return (
    <section className={`${WebTechsStyles.webTechs} container`}>
        <>
            <h2 className="title"><span className="line"></span>Web technologies</h2>
            <p>Passionate full-stack developer & UI/UX designer, dedicated to creating seamless web experiences through frontend and backend expertise.</p>
        </>
        <div className={ WebTechsStyles.webTechsGrid }>
            <div>
                <FaHtml5 className={ WebTechsStyles.webTech } />
                <p>Html</p>
            </div>
            <div>
                <FaSass className={ WebTechsStyles.webTech } />
                <p>Sass</p>
            </div>
            <div>
                <FaPython className={ WebTechsStyles.webTech } />
                <p>Python</p>
            </div>
            <div>
                <FaAngular className={ WebTechsStyles.webTech } />
                <p>Angular</p>
            </div>
            <div>
                <FaReact className={ WebTechsStyles.webTech } />
                <p>React</p>
            </div>
            <div>
                <FaFigma className={ WebTechsStyles.webTech } />
                <p>Figma</p>
            </div>
            <div>
                <SiTypescript className={ WebTechsStyles.webTech } />
                <p>TypeScript</p>
            </div>
            <div>
                <FaNodeJs className={ WebTechsStyles.webTech } />
                <p>NodeJs</p>
            </div>
            <div>
                <SiTailwindcss className={ WebTechsStyles.webTech } />
                <p>Tailwind</p>
            </div>
            <div>
                <SiJira className={ WebTechsStyles.webTech } />
                <p>Jira</p>
            </div>
            <div>
                <SiSvelte className={ WebTechsStyles.webTech } />
                <p>Svelte</p>
            </div>
            <div>
                <SiFlask className={ WebTechsStyles.webTech } />
                <p>Flask</p>
            </div>
            <div>
                <DiGit className={ WebTechsStyles.webTech } />
                <p>Git</p>
            </div>
            <div>
                <FaGithub className={ WebTechsStyles.webTech } />
                <p>GitHub</p>
            </div>
            <div>
                <FaGithub className={ WebTechsStyles.webTech } />
                <p>GitHub Actions</p>
            </div>
            <div>
                <SiExpress className={ WebTechsStyles.webTech } />
                <p>Express</p>
            </div>
            <div>
                <SiMongodb className={ WebTechsStyles.webTech } />
                <p>MongoDB</p>
            </div>
            <div>
                <SiVercel className={ WebTechsStyles.webTech } />
                <p>Vercel</p>
            </div>
            <div>
                <SiHeroku className={ WebTechsStyles.webTech } />
                <p>Heroku</p>
            </div>
            <div>
                <FaDigitalOcean className={ WebTechsStyles.webTech } />
                <p>Digital Oceans</p>
            </div>
            <div>
                <FaDigitalOcean className={ WebTechsStyles.webTech } />
                <p>Digital Ocean</p>
            </div>
            <div>
                <SiSelenium className={ WebTechsStyles.webTech } />
                <p>Selenium</p>
            </div>
        </div>
    </section>
  )
}

export default WebTechs

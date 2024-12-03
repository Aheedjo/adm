"use client"
import PSStyles from "../styles/ProffessionalStatement.module.scss"

const ProffesionalStatement = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={`${PSStyles.Ps} container`}>
            <h2 className="title"><span className="line"></span>Professional Statement</h2>
            <h1 className={ PSStyles.subTitle }>Full-Stack Developer & Digital Solutions Architec</h1>
            <p>I&apos;m Maishanu Ahidjo, a seasoned software developer and designer with over 5 years of crafting captivating web experiences. As a full-stack developer, UI/UX designer, and software tester, I bridge the gap between design, functionality, and quality assurance. My front-end expertise spans Angular, Next.js, and Vue.js, while I build resilient backends with Node.js, Express, Python, and Flask.</p>
            <p>In addition to coding, I have honed my software testing skills, ensuring that every product I develop meets the highest standards of quality, performance, and user satisfaction. My API development expertise further strengthens my ability to deliver seamless and scalable solutions.</p>
            <p>Collaboration is at the heart of my approach. I use Git and Jira to manage workflows efficiently, ensuring timely delivery and smooth project execution. My passion lies in creating intuitive, high-performance systems that blend aesthetics with innovation, always prioritizing the user experience. Through continuous learning and adapting to new challenges, I&apos;m committed to delivering exceptional solutions that turn visions into reality.</p>
            <p>Ready to explore the details of my masterpieces? My <span onClick={scrollToProjects}>projects</span> await below, eager to tell their own stories of impact and success.</p>
        </section>
    )
}

export default ProffesionalStatement;

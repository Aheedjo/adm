import image from '../assets/image.jpg'
import Image from 'next/image';
import AboutStyles from "../styles/About.module.scss"

const About = () => {
    return (
        <section className={`${AboutStyles.about} container`}>
            <div className={AboutStyles.image}>
                <Image src={image} alt="profile-image" />
            </div>
            <div className={AboutStyles.text}>
                <h2 className="title"><span className="line"></span>About Me</h2>
                <h1>In the Pixels and Beyond 🚀.</h1>
                <p>My coding journey began during the challenging days of the COVID-19 pandemic. Starting with Python, I soon ventured into web development with Flask but quickly realized the significance of frontend skills. Determined to improve, I took on the challenge of mastering HTML, CSS, and JavaScript, refining my abilities through projects on Frontend Mentor.</p>
                <p>In 2022, my career took an unexpected turn when a friend, Hassino, introduced me to UI/UX design. Despite my inexperience, I embraced the opportunity and spent six months learning and delivering professional designs. This experience unlocked new doors, and I transitioned into the development team, where I tackled learning Angular and continually upskilling—all while balancing the demands of school.</p>
                <p>After about a year of relentless dedication, I grew confident in my abilities and reached out to mentors and professionals, asking how to monetize my skills. This led to a one-month gig that I excelled in, earning me a part-time role while I was still in school. As a part-time developer, I transformed designs, enhanced functionality, resolved bugs, and wrote Selenium tests to ensure quality assurance.</p>
                <p>Upon graduating, my performance earned me a full-time position where I continued to work across both frontend and backend development, improving functionality, conducting rigorous testing, and driving seamless integration. The journey from a beginner experimenting with Flask to a seasoned software developer has been one of grit, growth, and excitement—and it’s only just begun. 🚀</p>
            </div>
        </section>
    )
}

export default About
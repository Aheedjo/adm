"use client"
import { BsFillArrowRightCircleFill, BsBagFill, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import arrow from "../assets/arrow-down.svg"
import HeroStyles from "../styles/Hero.module.scss"
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className={`${HeroStyles.hero} container`}>
        <div className={ HeroStyles.cont }>
            <div className={ HeroStyles.text }>
                <div className={ HeroStyles.heroTitle }>
                    <span className={ HeroStyles.little }>Engr. ADM,</span>
                    <h1 className={ HeroStyles.mainText }>Transforming ideas into impactful digital solutions through innovative and reliable technology development.</h1>
                </div>
            </div>
            <div className={ HeroStyles.btnCont }>
                <button className={`btn ${HeroStyles.rev}`} onClick={scrollToProjects}>Portfolio <BsBagFill /></button>
                <Link href="/contact">
                    <button className='btn'>Hire Me <BsFillArrowRightCircleFill /> </button>
                </Link>
            </div>
            <div className={ HeroStyles.socialLinks }>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://www.linkedin.com/in/maishanu-ahidjo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://github.com/Aheedjo" rel="noreferrer"><BsGithub className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://twitter.com/Ahidjo_DM" rel="noreferrer"><BsTwitter className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://api.whatsapp.com/send?phone=08143410800" rel="noreferrer"><FaWhatsapp className={HeroStyles.icon} /></a>
            </div>
            <div className={ HeroStyles.bg }>
                <span>Backend</span>
                <span>Frontend</span>
                <span>ui/ux</span>
                <span>Testing</span>
            </div>
        </div>
        <div className={ HeroStyles.arrow }>
            <Image src={arrow} alt="arrow" />
        </div>
    </section>
  )
}

export default Hero
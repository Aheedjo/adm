import { skills } from "../data.js"
import Image from 'next/image';
import skillsStyles from "../styles/Skills.module.scss"

const Services = () => {
    return (
        <section className={`${skillsStyles.skills} container`}>
            <h2 className='title'><span className='line'></span>Skills</h2>
            <div className={ skillsStyles.skillsGrid }>
                {
                    skills.map((skill, i) => {
                        return (
                            <div className={ skillsStyles.skill } key={ i }>
                                <Image src={ skill.icon } className={ skillsStyles.icon } alt="skill-image" width={48} height={48} />
                                <h3 className='title'>{ skill.title }</h3>
                                <p>{ skill.info }</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services

"use client"
import ExperienceStyles from "../styles/Experience.module.scss"
import { experience } from "../data"
import Image from 'next/image';

const Experience = () => {
    return (
        <section className={`${ExperienceStyles.experienceContainer} container`}>
            <h2 className="title"><span className="line"></span>Experience</h2>
            <div className={ ExperienceStyles.experienceGrid }>
                {
                    experience.map((singleExperience, i) => {
                        return (
                            <article key={ i } className={ ExperienceStyles.experience }>
                                    <div className={ ExperienceStyles.infoCont }>
                                        <div className={ ExperienceStyles.logoXline }>
                                            <Image src={ singleExperience.logo } className={ ExperienceStyles.logo } alt="company-image" />
                                            {
                                                singleExperience.extra ? (
                                                    <span className={ ExperienceStyles.line }></span>            
                                                ) : null
                                            }
                                        </div>
                                        <div className={ ExperienceStyles.detailsWrapper }>
                                            <div className={ ExperienceStyles.details }>
                                                <div>
                                                    <h4 className={ ExperienceStyles.title }>{ singleExperience.title }</h4>
                                                    <p>{ singleExperience.company } &middot; { singleExperience.employmentType }</p>
                                                    <p className={ ExperienceStyles.grey }>{ singleExperience.startDate } - { singleExperience.endDate }</p>
                                                    <p className={ ExperienceStyles.grey }>{ singleExperience.location }</p>
                                                </div>
                                                { singleExperience.linkToProject ? (
                                                        <a href={ singleExperience.linkToProject } target="_blank">Live Link</a>
                                                    ) : null }
                                            </div>
                                            <p className={ ExperienceStyles.description }>{ singleExperience.Description }</p>
                                            <div className={ ExperienceStyles.techs }>
                                                {
                                                    singleExperience.techs.map((tech, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <p className={ ExperienceStyles.tech }>{ tech }</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        singleExperience.extra ? (
                                            <div className={ ExperienceStyles.infoCont }>
                                                <div className={ `${ExperienceStyles.logoXline} ${ExperienceStyles.extraCont}` }>
                                                    <span className={ `${ExperienceStyles.line} ${ExperienceStyles.extraLine}` }></span>
                                                    <span className={ ExperienceStyles.circle }></span>
                                                    {
                                                        singleExperience.extra2 ? (
                                                            <span className={ ExperienceStyles.line }></span>
                                                        ) : null
                                                    }
                                                </div>
                                                <div className={ `${ExperienceStyles.detailsWrapper} pt-10` }>
                                                    <div className={ ExperienceStyles.details }>
                                                        <div>
                                                            <h4 className={ ExperienceStyles.title }>{ singleExperience.extra.title }</h4>
                                                            <p>{ singleExperience.extra.employmentType }</p>
                                                            <p className={ ExperienceStyles.grey }>{ singleExperience.extra.startDate } - { singleExperience.extra.endDate }</p>
                                                            <p className={ ExperienceStyles.grey }>{ singleExperience.extra.location }</p>
                                                        </div>
                                                    </div>
                                                    <p className={ ExperienceStyles.description }>{ singleExperience.extra.Description }</p>
                                                    <div className={ ExperienceStyles.techs }>
                                                        {
                                                            singleExperience.extra.techs.map((tech, i) => {
                                                                return (
                                                                    <div key={i}>
                                                                        <p className={ ExperienceStyles.tech }>{ tech }</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        singleExperience.extra2 ? (
                                            <div className={ ExperienceStyles.infoCont }>
                                                <div className={ `${ExperienceStyles.logoXline} ${ExperienceStyles.extraCont}` }>
                                                    <span className={ `${ExperienceStyles.line} ${ExperienceStyles.extraLine}` }></span>
                                                    <span className={ ExperienceStyles.circle }></span>
                                                </div>
                                                <div className={ `${ExperienceStyles.detailsWrapper} pt-10` }>
                                                    <div className={ ExperienceStyles.details }>
                                                        <div>
                                                            <h4 className={ ExperienceStyles.title }>{ singleExperience.extra2.title }</h4>
                                                            <p>{ singleExperience.extra2.employmentType }</p>
                                                            <p className={ ExperienceStyles.grey }>{ singleExperience.extra2.startDate } - { singleExperience.extra2.endDate }</p>
                                                            <p className={ ExperienceStyles.grey }>{ singleExperience.extra2.location }</p>
                                                        </div>
                                                    </div>
                                                    <p className={ ExperienceStyles.description }>{ singleExperience.extra2.Description }</p>
                                                    <div className={ ExperienceStyles.techs }>
                                                        {
                                                            singleExperience.extra2.techs.map((tech, i) => {
                                                                return (
                                                                    <div key={i}>
                                                                        <p className={ ExperienceStyles.tech }>{ tech }</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Experience;
import { projects } from "../data"
import Image from 'next/image';
import projectsStyles from "../styles/Projects.module.scss"

const Projects = ({ id }: { id: string }) => {
    return (
        <section className={`${projectsStyles.projects} container`} id={id}>
            <h2 className="title"><span className="line"></span>Projects</h2>
            <div className={ projectsStyles.projectsGrid }>
                {
                    projects.map((project, i) => {
                        return (
                            <article key={ i } className={ projectsStyles.project }>
                                {
                                    project.tag == 'Front-end' || project.tag == "Full-stack" ? (
                                        <Image src={ project.image } className={ projectsStyles.image } alt="project-image" />
                                    ) : null
                                }
                                <div className={ projectsStyles.infoCont }>
                                    <div className={ projectsStyles.info }>
                                        <div>
                                            <span className={ projectsStyles.tag }>{ project.tag }</span>
                                        </div>
                                        <h4 className={ projectsStyles.title }>{ project.title }</h4>
                                        <p className={ projectsStyles.text }>{ project.text }</p>
                                    </div>
                                    <div className={ projectsStyles.aha }>
                                      <div className={ projectsStyles.techs }>
                                          {
                                              project.techs.map((tech, i) => {
                                                  return (
                                                      <div key={i}>
                                                          <p className={ projectsStyles.tech }>{ tech }</p>
                                                      </div>
                                                  )
                                              })
                                          }
                                      </div>
                                      <div className={ projectsStyles.btnCont }>
                                          {
                                              project.tag == 'Front-end' || project.tag == 'Full-stack' || project.tag == 'Back-end || API' && project.codeLink !== "" ? (
                                                  <a href={ project.codeLink } target="_blank">View Code</a>
                                              ) : null
                                          }
                                          {
                                              project.tag == 'UI/UX' ? (
                                                  <a href={ project.designLink } target="_blank">View Design</a>
                                              ) : null
                                          }
                                          {
                                              project.tag == 'Front-end' || project.tag == 'Full-stack' && project.liveLink !== "" ? (
                                                  <a href={ project.liveLink } target="_blank">Visit App</a>
                                              ) : null
                                          }
                                      </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>   
    )
}

export default Projects

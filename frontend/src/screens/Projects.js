import React from 'react'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import { projectsData } from '../projectsData/projects'
const Projects = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Projects</h2>
          </header>

          <div className={`overlay ${menuOpen} secondary`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>Recent works</h2>

            {projectsData.map((project) => (
              <div key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>Visit it live</a>
                <a href={project.githubLink}>Code on Github</a>
              </div>
            ))}
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Projects
// img for later
// <img src={project.picture} alt='teaser picture' />

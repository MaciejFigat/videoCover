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
                <h3 style={{ color: `${project.color}` }}>{project.title}</h3>
                <img
                  src={project.picture}
                  width='200px'
                  style={{ borderRadius: '45%' }}
                  alt='teaser'
                />
                <p>{project.description}</p>
                <a
                  href={project.link}
                  style={{ background: `${project.color}` }}
                >
                  Visit it live
                </a>
                <a
                  href={project.githubLink}
                  style={{ background: `${project.color}` }}
                >
                  Code on Github
                </a>
                <a
                  href={project.readmeLink}
                  style={{ background: `${project.color}` }}
                >
                  Documentation
                </a>
              </div>
            ))}
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Projects

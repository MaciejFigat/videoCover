import React from 'react'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import { projectsData } from '../projectsData/projects'
import ProjectExample from '../components/ProjectExample'
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
          <div className={`overlay ${menuOpen}`}></div>

          <div className={`text ${menuOpen}`}>
            <h2>Recent works</h2>

            <ProjectExample projectsData={projectsData} />
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Projects

import React from 'react'
import { useSelector } from 'react-redux'
import MainWrapper from '../components/MainWrapper'
import { projectsData } from '../projectsData/projects'
import ProjectExample from '../components/ProjectExample'
const Projects = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <MainWrapper>
      <header>
        <h2 className='logo'>Recent works</h2>
      </header>
      <div className={`overlay ${menuOpen}`}></div>

      <div className={`text ${menuOpen}`}>
        <ProjectExample projectsData={projectsData} />
      </div>
    </MainWrapper>
  )
}

export default Projects

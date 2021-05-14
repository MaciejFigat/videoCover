import React from 'react'

const ProjectExample = ({ projectsData }) => {
  return (
    <>
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
          <a href={project.link} style={{ background: `${project.color}` }}>
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
    </>
  )
}

export default ProjectExample

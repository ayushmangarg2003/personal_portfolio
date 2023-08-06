import React from 'react'
import SubHeader from "../../components/SubHeader/SubHeader"
import ProjectsDetails from '../../utils/Projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  return (
    <div className='ProjectsContainer'>
      <SubHeader heading="Projects" />
      <div className="projectCardParent">
        {ProjectsDetails.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            image={item.image}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
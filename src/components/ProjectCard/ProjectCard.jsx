import React from 'react'
import { FaGithub, FaLink } from "react-icons/fa";
import './ProjectCard.css'

const ProjectCard = (props) => {
  const tags = (props.tags);
  return (
    <div className="card">
      <div className="left">
        <div className="title">{props.title}<a href={props.githubLink} target={'blank'}>
          <span>
          <FaGithub /> 
          </span>
          <span>
          <FaLink />
          </span>
        </a> </div>
        <div className="desc">{props.desc}</div>
        <div className="tags">
          {
            tags.map((item) => (
              <div key={item}>{item}</div>
            ))
          }
        </div>
      </div>
      <div className="right">
        <a href={props.demoLink} target={'blank'}>
          <img src={props.image} alt="" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
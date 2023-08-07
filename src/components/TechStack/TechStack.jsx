import React from 'react'
import "./TechStack.css"

const TechStack = (props) => {
  return (
    <div className="techCard">
      <div className="techLogo"><img src={props.icon} /></div>
      <div className="techText">{props.name}</div>
    </div>
  )
}

export default TechStack
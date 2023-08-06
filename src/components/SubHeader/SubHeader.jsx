import React from 'react'
import './SubHeader.css'

const SubHeader = (props) => {
  return (
    <span className='subheading'>{props.heading}</span>
  )
}

export default SubHeader
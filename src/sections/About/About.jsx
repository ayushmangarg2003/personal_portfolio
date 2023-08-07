import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Details from '../../components/Details/Details'
import './About.css'
import Animation from '../../components/Animation/Animation'

function About() {
  return (
    <div className='aboutcontainer'>
      <div className="aboutme">
        <SubHeader heading='About me' />
        <Animation/>
        <Details details="Hi, My name is Ayushman Garg and I am a MERN stack Web developer. My passion for computers brought me to Maharaja Agrasen Institute of Technology from where I am pursuing my BTech in Information Technology. I specialize in creating websites using ReactJS and other front-end tools, but I am also a quick learner and able to adapt to new environments and technologies." />
        <Details details=" I was first introduced to programming in my 11th grade through Python programming language. I then began learning web development during my first year of college and have since gained experience working with technologies such as HTML, CSS, JavaScript, ReactJs, MongoDB, ExpressJs, NodeJs,Firebase, Bootstrap, and Tailwind." />
      </div >
    </div>
  )
}

export default About
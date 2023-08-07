import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Details from '../../components/Details/Details'
import './About.css'
import Animation from '../../components/Animation/Animation'
import { DETAILS_1, DETAILS_2 } from '../../utils/Helper'

function About() {
  return (
    <div className='aboutcontainer'>
      <div className="aboutme">
        <SubHeader heading='About me' />
        <Animation/>
        <Details details={DETAILS_1}/>
        <Details details={DETAILS_2} />
      </div >
    </div>
  )
}

export default About
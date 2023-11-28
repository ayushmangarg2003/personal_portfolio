import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import './Home.css'
import { NAME, TITLE, PROFILE_PIC } from '../../utils/Helper'

const Home = () => {
  return (
    <div className='container'>
      <ProfileCard 
      name={NAME} 
      title={TITLE}      
      img={PROFILE_PIC}
      />
    </div>
  )
}

export default Home
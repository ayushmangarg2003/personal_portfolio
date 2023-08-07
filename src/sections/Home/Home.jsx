import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfilePic from '../../utils/assets/ProfilePic.jpg'
import './Home.css'
import { NAME, TITLE } from '../../utils/Helper'

const Home = () => {
  return (
    <div className='container'>
      <ProfileCard 
      name={NAME} 
      title={TITLE}      
      img={ProfilePic}
      />
    </div>
  )
}

export default Home
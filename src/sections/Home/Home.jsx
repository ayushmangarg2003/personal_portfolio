import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfilePic from '../../utils/assets/ProfilePic.jpg'
import './Home.css'
import Animation from '../../components/Animation/Animation'

const Home = () => {
  return (
    <div className='container'>
      <Animation/>
      <ProfileCard 
      name="Ayushman Garg" 
      title="Full Stack Developer"      
      img={ProfilePic}
      />
    </div>
  )
}

export default Home
import React from 'react'
import "./ProfileCard.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


const ProfileCard = (props) => {

  return (
    <>
      <div className="ProfileCard">
        <div className="image"><img src={props.img} /></div>
        <div className="name">{props.name}</div>
        <div className="title" >{props.title}</div>
        <div className="socials">
          <a href={'https://www.linkedin.com/in/ayushmangarg/'} target={'blank'} className='linkedin'>
            <FaLinkedin />
          </a>
          <a href={'https://twitter.com/AyushmanGarg4'} target={'blank'} className='twitter'>
            <FaTwitter />
          </a>
          <a href={'https://github.com/ayushmangarg2003'} target={'blank'} className='github'>
            <FaGithub />
          </a>
          <a href={'https://mail.google.com/mail/u/0/?fs=1&to=ayushmangarg929@gmail.com&tf=cm'} target={'blank'} className='mail'>
            <FaRegEnvelope />
          </a>
        </div>
        <div className="button">
          <a href="https://drive.google.com/file/d/1uzEFI38uRh_IW0FNb7DNXcnEsU10lxA5/view?usp=drive_link" target={'blank'} className="btn">Resume</a>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
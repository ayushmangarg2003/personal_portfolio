import React from 'react'
import "./ProfileCard.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { CV, GITHUB, LINKEDIN, MAIL, TWITTER } from '../../utils/Helper';


const ProfileCard = (props) => {

  return (
    <>
      <div className="ProfileCard">
        <div className="image"><img src={props.img} /></div>
        <div className="name">{props.name}</div>
        <div className="title" >{props.title}</div>
        <div className="socials">
          <a href={LINKEDIN} target={'blank'} className='linkedin'>
            <FaLinkedin />
          </a>
          <a href={TWITTER} target={'blank'} className='twitter'>
            <FaTwitter />
          </a>
          <a href={GITHUB} target={'blank'} className='github'>
            <FaGithub />
          </a>
          <a href={MAIL} target={'blank'} className='mail'>
            <FaRegEnvelope />
          </a>
        </div>
        <div className="button">
          <a href={CV} target={'blank'} className="btn">Resume</a>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
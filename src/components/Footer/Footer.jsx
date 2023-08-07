import React from 'react'
import './Footer.css'
import { LINKTREE, NAME } from '../../utils/Helper'

const Footer = () => {
  return (
    <footer className='footer'>Made By <a href={LINKTREE} target={'blank'}>{NAME} </a></footer>
  )
}

export default Footer
import React from 'react'
import './CertificateCard.css'

const CertificateCard = (props) => {
  return (
    <>
        <a href={props.link} className="CertificateContainer" target={'blank'}>
            <div className="left">
                <img src={props.logo} alt={props.organisation} />
            </div>
            <div className="right">
                <div className="title">{props.title}</div>
                <div className="subtitle">{props.organisation}</div>
            </div>
        </a>
    </>
  )
}

export default CertificateCard
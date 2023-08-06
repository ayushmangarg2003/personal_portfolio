import React from 'react'
import SubHeader from "../../components/SubHeader/SubHeader"
import CertificatesDetails from '../../utils/Certificate'
import CertificateCard from '../../components/CertificateCard/CertificateCard'
import TechStackArr from '../../utils/TechStack'
import TechStack from '../../components/TechStack/TechStack'
import './Certificates.css'

const Certificates = () => {
  return (
    <div className='certificateParent'>
      <div className="techstack">
        <SubHeader heading='Tech Stack' />
        <div className="tech">
          {
            TechStackArr.map((item) => (
              <TechStack key={item.tech} icon={item.icon} name={item.tech} />
            ))
          }
        </div>
      </div>

      <div className="certificateContainer">
        <SubHeader heading='Certificates' />
        {CertificatesDetails.map((item) => (
          <CertificateCard key={item.title} title={item.title} link={item.link} organisation={item.organisation} logo={item.logo} />
        ))}
      </div>
    </div >
  )
}

export default Certificates
import React from 'react'
import Icon1 from '../../images/product-1.svg'
import Icon2 from '../../images/product-2.svg'
import Icon3 from '../../images/product-3.svg'
import {
  ServicesIcon, 
  ServicesContainer,
  ServicesH2,
  ServicesCard,
  ServicesParagraph,
  ServicesH1,
  ServicesWrap
} 
  from './ServicesStyles'

const Services = () => {
  return (
    <ServicesContainer id='services'>
    <ServicesH1>Looking for something different?</ServicesH1>
    <ServicesWrap>
    <ServicesCard>
    <ServicesIcon src={Icon1} /> 
    <ServicesH2>Reduce Experience</ServicesH2>
    <ServicesParagraph>
      We help reduce your fees 
    </ServicesParagraph>
    </ServicesCard>
    <ServicesCard>
    <ServicesIcon src={Icon2} /> 
    <ServicesH2>Reduce Experience</ServicesH2>
    <ServicesParagraph>
      We help reduce your fees 
    </ServicesParagraph>
    </ServicesCard>
    
    <ServicesCard>
    <ServicesIcon src={Icon3} /> 
    <ServicesH2>Reduce Experience</ServicesH2>
    <ServicesParagraph>
      We help reduce your fees 
    </ServicesParagraph>
    </ServicesCard>

    </ServicesWrap>
    </ServicesContainer>
  )
}

export default Services

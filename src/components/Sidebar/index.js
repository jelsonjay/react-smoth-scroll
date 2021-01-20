import React from 'react'
import {
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SideBtnWrap,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarWrap } from './SidebarStyles'

const index = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
  <Icon onClick={toggle}>
  <CloseIcon />
  </Icon> 
 <SidebarWrap>
<SidebarMenu>
 <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
 <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
 <SidebarLink to='appointment' onClick={toggle}>Appointment</SidebarLink>
 <SidebarLink to='signin' onClick={toggle}>Sign In</SidebarLink>
</SidebarMenu>
<SideBtnWrap>
<SidebarRoute to='/signin'>Sign In</SidebarRoute>
</SideBtnWrap>

 </SidebarWrap>
  </SidebarContainer>
  )
}

export default index

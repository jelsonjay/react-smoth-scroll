import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import 
{Nav, 
  NavContainer, 
  NavLogo, 
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink
} from './NavbarStyles'

const Navbar = ({toggle}) => {
  const [scrollNavbar, setScrollNavbar] = useState(0)
  const changeNavbar = () => {
    if(window.scrollY >= 80){
    setScrollNavbar(true)
    }else{
      setScrollNavbar(false)
    }
  }


 useEffect(() => {
   window.addEventListener('scroll', changeNavbar)
 }, [])

 // Toggle home
 const toggleHome = () =>{
   scroll.scrollToTop();
 }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNavbar={scrollNavbar}>
    <NavContainer>
    <NavLogo to='/' onClick={toggleHome}>Logo</NavLogo>
    <MobileIcon onClick={toggle}>
    <FaBars />
    </MobileIcon>
    <NavMenu>
    <NavItem>
    <NavLinks to='about'
    smooth={true} 
    duration={500} 
    spy={true} 
    exatc='true' 
    activeClass="active"
    offset={-80}
    >About</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to='services'
    smooth={true} 
    duration={500} 
    spy={true}
    exatc='true' 
    offset={-80}
    >Services</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to='appointments'
    smooth={true} 
    duration={500} 
    spy={true} 
    exatc='true' 
    offset={-80}
    >Appointments</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to='signup'
    smooth={true} 
    duration={500} 
    spy={true} 
    exatc='true' 
    offset={-80}
    >Booking</NavLinks>
    </NavItem>
    </NavMenu>
    <NavBtn>
    <NavBtnLink to='signin'>Sign In</NavBtnLink>
    </NavBtn>
    <NavBtn>
    <NavBtnLink to='Signup'>Sign up free</NavBtnLink>
    </NavBtn>
    </NavContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar

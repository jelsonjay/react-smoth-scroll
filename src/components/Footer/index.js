import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram,FaTwitter, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksWrap,
  FooterLinksContainer,
  FooterWrap,
  FooterLinkTitle,
  WebsiteRights,
  SocialLogo,
  SocialMedia,
  SocialIcons,
  SocialMediaWrap,
  SocialIconLink,

} from './FooterStyles'
const Footer = () => {


   // Toggle footer
 const toggleFooter = () =>{
  scroll.scrollToTop();
}

  return (
    <FooterContainer>
    <FooterWrap>
    <FooterLinksContainer>

    <FooterLinksWrap>
    <FooterLinkItems>
    <FooterLinkTitle>About Us</FooterLinkTitle>
    <FooterLink to='/signin'>How it works</FooterLink>
    <FooterLink to='/signin'>Testimonials</FooterLink>
    <FooterLink to='/signin'>Careers</FooterLink>
    <FooterLink to='/signin'>Investors</FooterLink>
    <FooterLink to='/signin'>Terms of services</FooterLink>
    </FooterLinkItems>
    <FooterLinkItems>
    <FooterLinkTitle>Videos</FooterLinkTitle>
    <FooterLink to='/signin'>How it works</FooterLink>
    <FooterLink to='/signin'>Testimonials</FooterLink>
    <FooterLink to='/signin'>Careers</FooterLink>
    <FooterLink to='/signin'>Investors</FooterLink>
    <FooterLink to='/signin'>Terms of services</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrap>
   
    <FooterLinksWrap>
    <FooterLinkItems>
    <FooterLinkTitle>Social Media</FooterLinkTitle>
    <FooterLink to='/signin'>How it works</FooterLink>
    <FooterLink to='/signin'>Testimonials</FooterLink>
    <FooterLink to='/signin'>Careers</FooterLink>
    <FooterLink to='/signin'>Investors</FooterLink>
    <FooterLink to='/signin'>Terms of services</FooterLink>
    </FooterLinkItems>
    <FooterLinkItems>
    <FooterLinkTitle>Contact Us</FooterLinkTitle>
    <FooterLink to='/signin'>How it works</FooterLink>
    <FooterLink to='/signin'>Testimonials</FooterLink>
    <FooterLink to='/signin'>Careers</FooterLink>
    <FooterLink to='/signin'>Investors</FooterLink>
    <FooterLink to='/signin'>Terms of services</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrap>
    </FooterLinksContainer>
    <SocialMedia>
    <SocialMediaWrap>
    <SocialLogo to='/' onClick={toggleFooter}
    smooth='true'
    duration={500} 
    spy='true'
    exatc='true' 
    offset={-80}
    >
      The-Travel
    </SocialLogo>
    <WebsiteRights>The-Travel - &copy; {new Date().getFullYear()} All rigts reserved.</WebsiteRights>
    <SocialIcons>
    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
    <FaFacebook />
    </SocialIconLink>
    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
    <FaInstagram />
    </SocialIconLink>
    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
    <FaTwitter />
    </SocialIconLink>
    <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
    <FaLinkedin />
    </SocialIconLink>
    </SocialIcons>
    </SocialMediaWrap>
    </SocialMedia>
    </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background: #101522;
`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
padding-top: 32px;
}
`
export const FooterLinksWrap = styled.div`
display: flex;

@media screen and (max-width: 820px){
flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing:border-box;
color: #fafafa;

@media screen and (max-width: 420px){
margin: 0;
padding: 10px;
width: 100%;
}
`
export const FooterLinkTitle = styled.h1`
font-size: 1rem;
margin-bottom: 1rem;
`
export const FooterLink = styled(Link)`
color:#fff;
margin-bottom: 0.5rem;
text-decoration: none;
font-size: 1rem;

&:hover{
color: #536DFE;
transition: 0.3s ease-in-out;
}
`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`
export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
max-width:1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
flex-direction: column;
}
`
export const SocialLogo = styled(Link)`
color: #fafafa;
justify-self:start;
cursor: pointer;
text-decoration: none;
font-size:1.5rem;
display:flex;
align-items:center;
margin-bottom:16px;
font-weight:bold;
`
export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`
export const SocialIcons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size:1.5rem;
transition: all 0.3s ease-in-out;

&:hover{
color:#536DFE;
transition: all 0.3s ease-in-out;
}
`
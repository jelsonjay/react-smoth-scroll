import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroWrap = styled.div`
background: #0c0c0c;
display:flex;
align-items:center;
justify-content:center;
padding: 0 30px;
height:100vh;
position: relative;
z-index:1;

/*add before*/
:before{
 content: '';
 position: absolute;
 top: 0;
 left:0; 
 right:0;
 bottom:0;
 background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
 linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
 z-index: 2;
}
`
export const HeroBg = styled.div `
position: absolute;
top:0;
right:0;
bottom: 0;
width:100%;
height:100%;
overflow: hidden;
`
export const VideoBg = styled.video`
width:100%;
height:100%;
--o-object-fit: cover;
object-fit:cover;
background:#232a34;
`
export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: #fafafa;
font-size: 5rem;
text-align: center;

@media screen and (max-width: 768px){
font-size: 3rem;
}
@media screen and (max-width: 468px){
font-size: 2.5rem;
}
`
export const  HeroParagraph = styled.p`
margin-top: 24px;
color: #fff;
font-size: 1.5rem;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
font-size: 1.5rem;
}
@media screen and (max-width: 468px){
font-size: 1rem;
}
`
export const HeroBtnWrap = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 90px;
font-size: 1.5rem;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 90px;
font-size: 1.5rem;
`
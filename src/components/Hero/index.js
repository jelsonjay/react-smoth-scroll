import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonStyles'
import 
{HeroWrap, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroBtnWrap,
  HeroParagraph,
  HeroH1,
  ArrowRight,
  ArrowForward
} from './HeroStyles'

const Hero = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
  setHover(!hover)
}

  return (
    <HeroWrap id='home'>
    <HeroBg>
    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
    </HeroBg>
    <HeroContent>
    <HeroH1>Worldwide Travel Solutions Discover The World </HeroH1>
    <HeroParagraph>Award winning independent travel agents based in Leeds with over 10 years' experience</HeroParagraph>
    <HeroBtnWrap>
    <Button to='/' 
    onMouseEnter={onHover} 
    onMouseOut={onHover}
    primary='true'
    dark='true'
    smooth={true} 
    duration={500} 
    hashSpy={true} 
    exatc='true' 
    offset={-80}>
    Get start {hover ? <ArrowForward /> : <ArrowRight />}
    </Button>
    </HeroBtnWrap>
    </HeroContent>
    </HeroWrap>
  )
}

export default Hero

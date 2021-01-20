import React from 'react'
import {Button} from '../ButtonStyles'
import {
  InfoContainer,
  BtnWrap,
  InfoWrap,
  InfoRow,
  Column1,
  Column2,
  TopLine,
  TextWrap,
  Subtitle,
  Heading,
  ImgWrap,
  Img
} from './InfoStyles'

const Info = ({
  alt, 
  desc, 
  buttonLabel, 
  id, 
  headline, 
  darkText,
  imgStart,
  topLine,
  img,
  lightBg,
  lightText,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
  <InfoContainer lightBg={lightBg} id={id}>
    <InfoWrap>
      <InfoRow imgStart={imgStart}>
        <Column1>
        <TextWrap>
          <TopLine>{topLine}</TopLine>
          <Heading lightText={lightText}>{headline}</Heading>
          <Subtitle darkText={darkText}>{desc}</Subtitle>
          <BtnWrap>
          <Button to='home'
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
          >{buttonLabel}</Button>
          </BtnWrap>
        </TextWrap>
        </Column1>
        <Column2>
        <ImgWrap>
        <Img src={img} alt={alt} />
        </ImgWrap>
        </Column2>
      </InfoRow>
    </InfoWrap>
  </InfoContainer>
    </>
  )
}

export default Info

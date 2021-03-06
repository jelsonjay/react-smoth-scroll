import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fafafa;

background: ${({lightBg}) => (lightBg ? '#f9f9f' : '#010606')};

@media screen and (max-width: 768px){
padding: 100px 0;
}
`
export const InfoWrap = styled.div`
display: grid;
z-index: 1;
height: 860px;
max-width: 1100px;
margin-right: auto;
margin-left:auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgSmart}) => (imgSmart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
grid-template-areas: ${({imgSmart}) => (imgSmart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrap = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
export const TopLine = styled.div`
color: #536DFE;
font-size: 1rem;
font-weight:700;
line-height: 16px;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.div`
color: #fff;
margin-bottom: 24px;
font-size: 3.5rem;
line-height:1.1.%;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#a6a6a6')};

@media screen and (max-width: 480px){
font-size:2rem;
}
`
export const Subtitle = styled.div`
max-width: 440px;
margin-bottom: 35px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fafafa')};

`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`
export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`
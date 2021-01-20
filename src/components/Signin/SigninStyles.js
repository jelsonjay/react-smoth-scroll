import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FormContainer = styled.div`
min-height: 692px;
position:fixed;
width: 100%;
bottom: 0;
right: 0;
top: 0;
z-index: 0;
overflow:hidden;
background: linear-gradient(108deg, rgba(83, 109, 254, 1.0)0%, 
  rgba(83, 109, 254, 1.0) 100%);
`
export const FormWrap = styled.div`
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width: 400px){
height: 80%;
}


`
export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration:none;
color: #fff;
font-weight: 700;
font-size: 2rem;

@media screen and (max-width: 480px){
margin-left: 16px;
margin-top: 8px;
}
`
export const FormContent = styled.div`
height: 100%auto;
display: flex;
flex-direction: column;
justify-content:center;

@media screen and (max-width: 480px){
padding: 10px;
}


`
export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display:grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px){
padding: 32px 32px;
}

@media screen and (max-width: 340px){
padding: 2px;
}
`
export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #536DFE;
font-size: 2rem;
font-weight: 600;
text-align: center;
`
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 1rem;
color: #fff;
`
export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border:none;
border-radius: 4px;
`
export const FormButton = styled.button`
background: #536DFE;
padding: 16px 0;
border:none;
border-radius: 4px;
color: #fff;
font-size: 1.5rem;
transition: 2.s ease-in-out;
cursor: pointer;

&:hover{
background: #fff;
color: #000;
}
`
export const Text = styled.span`
text-align:center;
margin-top: 24px;
color: #fff;
font-size: 1rem;
`

export const BackHomeLink = styled(Link)`
text-align:center;
color: #fff;
font-size: 1rem;
margin-top: 24px;
text-decoration: none;

&:hover{
color: #536DFE;
}
`
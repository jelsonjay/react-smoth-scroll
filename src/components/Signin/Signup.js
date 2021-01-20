import React from 'react'

import {
  Form,
  Icon,
  Text,
  FormContent,
  FormContainer, 
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  FormButton,
  BackHomeLink
} from './SigninStyles'

const SignUp = () => {
  return (
    <>
    <FormContainer>
    <FormWrap>
    <Icon to='/'>Logo</Icon>
    <FormContent>
    <Form>
    <FormH1>Get started for free</FormH1>
    <FormLabel htmlFor='for'>First Name</FormLabel>
    <FormInput type='text' required/>
    <FormLabel htmlFor='for'>Last Name</FormLabel>
    <FormInput type='text' required/>
    <FormLabel htmlFor='for'>Email</FormLabel>
    <FormInput type='email' required/>
    <FormLabel htmlFor='for'>Creat a password</FormLabel>
    <FormInput type='password' required/>
    <FormButton type='submit'>Ger started</FormButton>
    <Text>Forot password</Text>
    <BackHomeLink to='/'>Back to home</BackHomeLink>
    </Form>
    </FormContent>
    </FormWrap>
    </FormContainer>
    </>
  )
}

export default SignUp

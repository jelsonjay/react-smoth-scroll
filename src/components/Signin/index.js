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

const SignIn = () => {
  return (
    <>
    <FormContainer>
    <FormWrap>
    <Icon to='/'>The-Travel</Icon>
    <FormContent>
    <Form>
    <FormH1>Sign in to your account</FormH1>
    <FormLabel htmlFor='for'>User Name</FormLabel>
    <FormInput type='text' required/>
    <FormLabel htmlFor='for'>Email</FormLabel>
    <FormInput type='email' required/>
    <FormLabel htmlFor='for'>Password</FormLabel>
    <FormInput type='password' required/>
    <FormButton type='submit'>Log In</FormButton>
    <Text>Forot password</Text>
    <BackHomeLink to='/'>Back to home</BackHomeLink>
    </Form>
    </FormContent>
    </FormWrap>
    </FormContainer>
    </>
  )
}

export default SignIn

import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export const Signup = () => {


  const validate = Yup.object({
    name: Yup.string()
      .required('Required'),

      username: Yup.string()
      .required('Required')
      .matches(/^\S*$/,
        "Must have no spaces"
      ),

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

    password: Yup.string()
      .required('Password is required') 
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  
  return (
    <div style={{ width: '30%' }} className="container">
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form >
            <TextField label="Name" name="name" type="text" />
            <TextField label="User Name" name="username" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
          </Form>
        </div>
      )}
    </Formik>
  
    </div>
  )
}

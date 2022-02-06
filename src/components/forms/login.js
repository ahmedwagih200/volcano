import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router, Route, Routes, Link ,Outlet
  } from 'react-router-dom';
  


export const Login = () => {
    const validate = Yup.object({

        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),

        password: Yup.string()
            .min(8, "cant be less than 8 chars")
            .required('Password is required')
    })
    return (
        <div style={{ width: '30%'}} className="container">
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {() => (
                    <div >
                        <h1  className="my-4 font-weight-bold .display-4">Login</h1>
                        <Form >
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="password" name="password" type="password" />
                            <button style={{marginRight: '6px'}} className="btn btn-dark mt-3" type="submit">Login</button>
                            <Link className="btn btn-dark mt-3" to="/Empty/Signup" >Signup</Link>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

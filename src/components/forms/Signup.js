import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import {toast, ToastContainer} from "react-toastify";

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email,address,phone, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, address, phone, password, re_password);
            setAccountCreated(true);
        }else{
            toast.error("Passwords Must be The same", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    };


    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div style={{ width: '30%' }} className='container mt-2'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={e => onChange(e)}
                        required/>
                </div>


                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required/>
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required/>
                </div>

                <div className="d-flex">

                    <button style={{ marginLeft: '5px' }} className="btn btn-dark mt-3 s" type='submit'>Register</button>

                    <Link style={{ marginLeft: '5px' }}
                          className="btn btn-rounded mt-3 s" to='/Form_container/Login'>Already have an account ?</Link>
                </div>

            </form>

            <ToastContainer/>

        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);

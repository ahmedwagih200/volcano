import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';

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
        }
    };


    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    if (accountCreated) {
        return <Navigate to='/Form_container/Login' />
    }

    return (
        <div style={{ width: '30%' }} className='container mt-5'>
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
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
        
                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
             
                <button style={{ marginLeft: '5px' }} className="btn btn-dark mt-3" type='submit'>Register</button>
            </form>

            <br />

            <p className='mt-3'>
                Already have an account? <Link to='/Form_container/Login'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);

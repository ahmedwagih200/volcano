import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";

const ChangePassword = () => {

    const [formData, setFormData] = useState({
        current_password: '',
        new_password: '',
        re_new_password: ''
    });

    const { current_password, new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (new_password === re_new_password) {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`
                }
            };

            const body = JSON.stringify({ new_password, re_new_password , current_password});

            axios.post("http://127.0.0.1:8000/auth/users/set_password/",body ,config)
                .then(res=> {



                }) .catch(error => {
                console.log(error.response.data.current_password[0])
            })

        }else{

        }
    };

    return (
        <div style={{ width: '30%' }} className='container mt-5'>
            <h1>Change Password</h1>

            <form onSubmit={e => onSubmit(e)}>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Current Password'
                        name='current_password'
                        value={current_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>

                <div style={{ margin: '5px' }} className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>

                <button style={{ marginLeft: '5px' }} className="btn btn-dark mt-3" type='submit'>Change</button>
            </form>

        </div>
    );
};


export default (ChangePassword);

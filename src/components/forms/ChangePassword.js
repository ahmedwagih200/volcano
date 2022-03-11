import React, { useState } from 'react';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

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
                .then(()=> {
                    toast.success("Password Has Been Changed", {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark"
                    });

                }) .catch(error => {

                toast.error("Current Password Is "+error.response.data.current_password[0], {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark"
                });

            })

        }else{

            toast.error("Passwords Must Be The Same", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark"
            });

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
            <ToastContainer/>
        </div>
    );
};


export default (ChangePassword);

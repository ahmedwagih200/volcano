import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const Profile = () => {

    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

    const [formData, setFormData] = useState({first_name: '', last_name: '', email: '', address: '', phone: ''} );

    useEffect(() => {

        getUserData()

    }, [isUserDataLoaded]);

    const getUserData = () => {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        axios.get("http://127.0.0.1:8000/auth/users/me/", config)
            .then(result=> {
                for (let key in result.data) {
                    formData[key] = result.data[key]
                }
                setIsUserDataLoaded(true)
            })
    };

    const { first_name, last_name, email, address, phone } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();

        updateUserData()
    };

    const updateUserData = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };
        const body = JSON.stringify({first_name, last_name, email, address, phone});

        axios.put("http://127.0.0.1:8000/auth/users/me/", body, config)
            .then(() => {
                toast.success("Updated", {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark"
                });

            }).catch(err => {
            toast.error(""+err.response.data['phone'], {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark"
            });

        });
    }
    return (
        <div style={{ width: '30%' }} className='container mt-2'>
            <h4 style={{ margin: '5px' }}> My Profile info</h4>
            <form onSubmit={e => onSubmit(e)}>
                <div style={{ margin: '5px' }} className='form-group'>
                    <label htmlFor="first_name">First name:</label>
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
                    <label htmlFor="last_name">Last name:</label>
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
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="phone">Phone:</label>
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
                    <label htmlFor="address">Address:</label>
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

                <div className="d-flex">

                    <button style={{ marginLeft: '5px' }} className="btn btn-rounded s mt-3 " type='submit'>Update</button>

                    <Link style={{ marginLeft: '5px' }}
                          className="btn btn-rounded mt-3 s" to='/Form_container/ChangePassword'>Change Password</Link>
                </div>
            </form>

            <ToastContainer/>
        </div>
    );
};

export default (Profile);


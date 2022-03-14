import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './style.css';
import axios from "axios";
const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        content:''


    });


    const { email, name, phone, content } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ name ,  phone , content , email});

        axios.post(`http://127.0.0.1:8000/message/add/`, body, config).then(() => {
            toast.success("Message Sent", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark"
            });
        })

    };




    return (
        <div className="container-fluid contact ">
        <div style={{ width: '30%' }} className="container p-4 ">
            <h1 style={{ marginTop: '25px' }}>Send us a message</h1>

            <form onSubmit={e => onSubmit(e)}>
                <div style={{marginBottom: '8px'}} className='form-group'>
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
                <div  className='form-group' style={{marginBottom: '8px'}}>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Your name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div  className='form-group' style={{marginBottom: '8px'}}>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Your phone'
                        name='phone'
                        value={phone}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div className='form-group' style={{marginBottom: '5px'}}>
                   <textarea
                       name="content"
                       value={content}
                       required
                       placeholder='  Write your message '
                       onChange={e => onChange(e)}
                       rows="5"
                       cols="50"/>
                </div>
                <button style={{marginRight: '6px' , width: '70px'}} className="btn btn-dark mt-3 s" type="submit">Send</button>
            </form>
            <ToastContainer/>
        </div>
        </div>
    );
};


export default Contact
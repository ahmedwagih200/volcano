import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../actions/auth';
import { useParams } from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    let { uid } = useParams();
    let { token } = useParams();

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({new_password: '', re_new_password: ''});

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (new_password === re_new_password) {
            reset_password_confirm(uid, token, new_password, re_new_password);
            setRequestSent(true);
        } else {
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
    }

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <div className='container-fluid forms'>

            <form style={{width: '50%' ,marginLeft: '25%'}} onSubmit={e => onSubmit(e)}>
                <div className='form-group pt-5'>
                    <input

                        className='form-control '
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group '>
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
                <button className='btn btn-dark' type='submit'>Reset Password</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);

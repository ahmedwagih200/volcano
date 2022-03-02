import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({email: ''});

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <div style={{ width: '30%', marginTop: '5%'}} className="container">
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
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
                <button style={{marginRight: '6px'}} className="btn btn-dark mt-3" type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);

import { Link, useNavigate } from "react-router-dom";
import {checkAuthenticated, login} from "../../actions/auth";
import {Rating} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import './style.css';


const MakeReview = ({login, isAuthenticated}) => {

    let navigate = useNavigate();

    useEffect(() => {

        checkAuthenticated();

    }, []);

    const [formData, setFormData] = useState({email: '', password: ''});

    const [reviewFormData, setReviewFormData] = useState({name: '', content: ''});

    const [rating, setRating] = React.useState(2);

    const {email, password} = formData;

    const {name,  content} = reviewFormData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onReviewChange = e => setReviewFormData({...reviewFormData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);

    };

    const onReviewSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ name ,  rating , content});

        axios.post(`http://127.0.0.1:8000/review/add/`, body, config).then(() => {
            return navigate("/Reviews");
        })

    };

    const login_render = () => (
        <div style={{width: '30%'}} className="container ">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>

            <form onSubmit={e => onSubmit(e)}>
                <div style={{marginBottom: '5px'}} className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div className='form-group'>
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

                <button style={{marginRight: '6px'}} className="btn btn-dark mt-3" type="submit">Login</button>

            </form>

            <p className='mt-3'>Don't have an account? <Link to='/Form_container/Signup'>Sign Up</Link></p>

            <p className='mt-3'>Forgot your Password? <Link to='/Form_container/ResetPassword'>Reset Password</Link></p>

        </div>
    );

    const review_render = () => (
        <div style={{width: '30%'}} className="container">
            <h1>Make Review</h1>

            <form onSubmit={e => onReviewSubmit(e)}>

                <h4>Name:</h4>
                <div style={{marginBottom: '5px'}} className='form-group'>
                    <input style={{width: "80%"}}
                        className='form-control'
                        type='text'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={e => onReviewChange(e)}
                        required/>
                </div>

                <h4>Review:</h4>
                <div className='form-group'>
                   <textarea
                       name="content"
                       value={content}
                       required
                       placeholder='  Write your review '
                       onChange={e => onReviewChange(e)}
                       rows="5"
                       cols="50"/>
                </div>

                <div style={{marginTop: '5px'}} className='form-group'>
                    <h4> Rating: <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {setRating(newValue);}}
                        size={"large"}/> </h4>
                </div>

                <button style={{marginRight: '6px'}} className="btn btn-dark mt-3" type="submit">Submit Review</button>

            </form>

        </div>
    );

    return (
        <div style={{padding: "100px"}} className="container-fluid MakeReviews">

            {isAuthenticated ? review_render() : login_render()}

        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(MakeReview);
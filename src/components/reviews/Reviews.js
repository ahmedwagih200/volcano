import * as React from 'react';
import axios from "axios";
import Rating from '@mui/material/Rating';
import { NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import './style.css';

export default function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/review/get/`).then(res => {
           setReviews(res.data)
        })

    }, []);

    return (

        <div  className="container-fluid justify-content-center p-4 MakeReviews">
            <div style={{overflow: "auto" , height: "500px"}}>
            {reviews.map((rev) => {
                return (
                        <div className="card" style={{width: "50%", marginLeft: "25%", marginBottom: "10px"}}>
                            <div className="card-body">
                                <h4 className="card-title">Customer Name : {rev.name}</h4>
                                <h4 className="card-title">Overall Rating :
                                    <Rating name="read-only" value={rev.rating} readOnly size="small"/> </h4>
                                <h4>Review :  {rev.content} </h4>
                            </div>
                        </div>
                );
            })}
            </div>

            <NavLink to="/MakeReview" style={{fontSize:'20px', height: '50px' ,width: '130px' , marginLeft:"45%"}}
                     className="nav-link active px-lg-4 rounded">Make Review</NavLink>
        </div>
    );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

function Navlink(props) {
  return (
    <NavLink style={{marginTop:"25px" ,fontSize:'25px'}} to={props.val} className="col-md-auto nav-link active px-lg-4 rounded">
     {props.name}
    </NavLink>
  );
}
export default Navlink;

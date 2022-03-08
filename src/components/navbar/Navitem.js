import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import React, { Component }  from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbaritem(props) {
  return ( 
    <Link style={{ marginTop:"25px" ,fontSize:'25px'}} className="col-md-auto nav-link active px-lg-4 rounded" to={props.val}>{props.name}</Link>
  );
}
export default Navbaritem;

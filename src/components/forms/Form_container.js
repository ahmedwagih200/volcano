import './forms.css';
import { Outlet } from 'react-router-dom';
import React, { Component }  from 'react';

function Form_container() {
  return (
     <div style={{paddingTop: '90px'}} className='forms'>
         
         <Outlet />
     </div>
    
  );
}

export default Form_container;

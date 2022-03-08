

import {Link } from "react-router-dom"
import React, { useEffect, useState } from "react"

import axios from 'axios'





function Menu() {
    const [cate , set_cate] = useState([])
         
      useEffect(()=>{
    
              axios.get('http://localhost:8000/categories').then(res=> set_cate(res.data)  )
    
    
      } ,[])
    
      
        
       return <div className="container mt-5">
           <h1 className="text-center text-capitalize" > our menu </h1>
        <div className="row mx-5">
            
        
           {
               cate.map(( c , ind  )=>{
          
           return <div className="col-lg-3 col-md-4 col-sm-6 my-4 ">
                <Link to={`/category/${c.id}`}  style={{ textDecoration:'None' }} > 
                 { console.log(c.image )}
                      <div className=" card h-100 card-light">
                        <img className="card-img-top rounded-circle" src={`http://localhost:8000${c.image }`} style={{height:"250px" }}/>
                        <div className="card-body">
                            <h4 className="card-title  text-center text-capitalize " style={{ color: '#917c36'}} >{ c.name }</h4>
    
                        </div>
    
                    </div> </Link>
                 
    
    
                </div> 
              
            })
           }
    
    
            </div>
                </div>
                
}
export default Menu

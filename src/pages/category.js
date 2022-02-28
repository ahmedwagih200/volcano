
import { useParams  , useLocation} from "react-router-dom"
import {Link } from "react-router-dom"
import { useEffect, useState } from "react"

import axios from 'axios'


function Category(){
    
    const params = useParams()
    const [cate , set_cate] = useState([])
    const [cname , set_cname] = useState('')
    const  location =useLocation() 
      useEffect(()=>{
    
              axios.get(`http://localhost:8000/category/${params.id}`).then(res=> {set_cate(res.data) ; console.log(res.data) }  )
              axios.get(`http://localhost:8000/cate/${params.id}`).then(res=> set_cname(res.data.name)   )
    
    
      } ,[location])

    return <div className="container mt-5">
         <h2> {cname} </h2> 

<div className="row mx-5">
    <div className="col-3 my-4">
    <div className="list-group">
  <Link to="/category/6" className="list-group-item list-group-item-action text-center text-capitalize"> mini pancakes </Link>
  <Link to="/category/4" className="list-group-item list-group-item-action text-center text-capitalize"> waffles </Link>
  <Link to={`/category/1`} className="list-group-item list-group-item-action text-center text-capitalize"> cakes </Link>
  <Link to={`/category/2`} className="list-group-item list-group-item-action text-center text-capitalize"> molten cakes </Link>
  <Link to={`/category/5`} className="list-group-item list-group-item-action text-center text-capitalize"> boom ice cream </Link>
  <Link to={`/category/3`} className="list-group-item list-group-item-action text-center text-capitalize"> cheese cake </Link>

    </div>
    </div>

    <div className='col-9 my-4'  >
      <div className='row' >
    

    {
               cate.map(( c , ind  )=>{
                      
                  
               return  <div className="col-lg-4 col-md-4 col-sm-6 mb-5 ">  
                <div className=" card h-100">
                        <img className="card-img-top" src={`http://localhost:8000${c.image }`} style={{height:"250px" }}/>
                        <div className="card-body">
                            <h5 className="card-title  text-center text-capitalize">{ c.name }</h5>
                            <h5 className="card-title  text-center text-capitalize">{ c.price } L.E</h5>
                            <p className="card-text mt-2"  >   
                            <button className="btn w-100 text-center btn-info " >  Add to Card

                            </button>

                            </p>
    
                        </div>
    
                </div> 
                </div>
              
            })
           }


           </div>
           </div>

    </div>

    

    </div>




}

export default Category
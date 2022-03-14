import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Order(){

  const params = useParams()
  const [items , set_item] = useState([])

  useEffect(()=>{

    axios.get(`http://localhost:8000/order/${params.id}`).then((res) => {
        set_item(res.data);
        console.log(res.data);
      });

  }, [])
    
  return <div className="container mt-5"  >

<div className="col-auto ms-auto ">
                
                <h5 style={{ fontSize: "21px" }}> Order ID: {params.id} </h5>
                
                
              </div>


      <table className="table  mt-3" >
           <thead  className="bg-dark text-light" style={{ height: "60px" , fontSize: "21px" }} >
               <th> </th>
               <th> Product name </th>
               <th> Price per unit </th>
               <th> Quatity </th>
               

           </thead>
           <tbody  className="table-light" >
               { 
                 items.map((itm , index)=>{
                    return  <tr>
                         <td> 
                         <img
                            src={`http://localhost:8000${itm.item.image}`}
                            style={{ height: "4rem"  , width:"5rem"}}
                            alt=""
                          />

                          </td>
                            <td className="pt-4" > {itm.item.name}</td>
                            <td className="pt-4" > {itm.item.price} EGP</td>
                            <td className="pt-4" > {itm.qty}</td>
                            {/* <td> {itm.item.price * itm.qty} EGP</td> */}

                     </tr>

                 }) }

           </tbody>


      </table>
       {/* <div className="col-auto ms-auto mt-4">
      <h4 className="text-danger"> total cost: {params.cost} EGP</h4> </div> */}
      
  </div> 







}
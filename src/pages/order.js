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

<div className="col-auto ms-auto mt-2">
                
                <h5 className="text-danger"> Order ID: {params.id} </h5>
                
                
              </div>


      <table className="table  mt-4" >
           <thead  className="table-dark"  >
               <th> </th>
               <th> Product name </th>
               <th> Price per unit </th>
               <th> Quatity </th>
               <th> Total Price  </th>

           </thead>
           <tbody style={{ color: '#917c36'}} className="table-light" >
               { 
                 items.map((itm , index)=>{
                    return  <tr>
                         <td> 
                         <img
                            src={`http://localhost:8000${itm.item.image}`}
                            style={{ height: "4rem" }}
                            alt=""
                          />

                          </td>
                            <td> {itm.item.name}</td>
                            <td> {itm.item.price} EGP</td>
                            <td> {itm.qty}</td>
                            <td> {itm.item.price * itm.qty} EGP</td>

                     </tr>

                 }) }

           </tbody>


      </table>
      <div className="col-auto ms-auto mt-4">
      <h4 className="text-danger"> total cost: {params.cost} EGP</h4> </div>
      
  </div>







}
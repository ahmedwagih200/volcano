import { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./p.css";
import { Modal, Button } from "react-bootstrap";
export default function Orders(){

    const [orders, set_orders] = useState([]);
    
    useEffect(()=>{
        let user
    axios.get(`http://127.0.0.1:8000/auth/users/me/` ,{
      headers: {
        'Authorization': `JWT ${localStorage.getItem('access')}`
      }
  }
).then(resp => {user=resp.data['id'] ; console.log(user) ;
   
axios.get(`http://127.0.0.1:8000/orders/${user}`).then(res=>set_orders(res.data)).catch(error => console.log(error))

}).catch(error => console.log(error))


} ,[])

    return<div className="container mt-5">

        <table className="table mt-3 "  >
            <thead className="bg-dark  text-light " style={{ height: "60px" , fontSize: "21px" }}  >
                <th> Order ID </th>
                <th> Order Date </th>

                <th> Address </th>                
                <th> Order Cost </th>
                <th> Payment Type </th>
                <th> Status </th>
                <th>  </th> 

            </thead>
            <tbody  className="table-light"  >
            { 
          orders.map((o , index)=>{
              return<>
              <tr>
                <td> {o.id}</td>
                <td> {o.date}</td>
                <td className="text-capitalize" > {o.address}</td>
                <td>{o.total } EGP</td>
                <td className="text-capitalize" > {o.payment}</td>
                <td>
                    {/* <Button data-toggle="modal" data-target={`#ord${index}`} className="view"><i className="material-icons">&#xE5C8;</i></Button></td>
                                     */}
                    <Link to={`/status/${o.state}/${o.id}`} className="view"  > <i className="material-icons">&#xE5C8;</i>    </Link> </td>

                <td>
                    <Link  to={`/order/${o.id}/${o.total}/${o.date}`} className="btn btn-dark btn-lg"  >  View Items

                    </Link>

                </td>
    
              </tr>



          </>



          })
        }

            </tbody>

        </table>

        


    </div>







}
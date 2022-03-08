import { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
   
axios.get(`http://127.0.0.1:8000/orders/${user}`).then(res=>set_orders(res.data)).catch(error => console.err(error))

}).catch(error => console.err(error))


} ,[])

    return<div className="container mt-5">

        <table className="table mt-3 table-light"  >
            <thead>
                <th> Order ID </th>
                <th> Order Date </th>
                <th> Order Cost </th>
                <th>  </th> 

            </thead>
            <tbody>
            { 
          orders.map((o , index)=>{
              return<tr>
                <td> {o.id}</td>
                <td> {o.date}</td>
                <td>{o.total } EGP</td>
                <td>
                    <Link  to={`/order/${o.id}/${o.total}/${o.date}`} className="btn btn-dark btn-lg"  > View Order

                    </Link>

                </td>


              </tr>
          }
          )
        }

            </tbody>

        </table>

        


    </div>







}
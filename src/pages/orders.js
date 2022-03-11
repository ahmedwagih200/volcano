import { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./p.css";
import { Modal, Button } from "react-bootstrap";
export default function Orders(){

    const [orders, set_orders] = useState([]);
    const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

     
    
    

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
            <thead className="table-dark bg-dark">
                <th> Order ID </th>
                <th> Order Date </th>
                <th> Address </th>                
                <th> Order Cost </th>
                <th> Payment Type </th>
                <th> Status </th>
                <th>  </th> 

            </thead>
            <tbody  >
            { 
          orders.map((o , index)=>{
              return<>
              <tr>
                <td> {o.id}</td>
                <td> {o.date}</td>
                <td> {o.address}</td>
                <td>{o.total } EGP</td>
                <td> {o.payment}</td>
                <td>
                    {/* <Button data-toggle="modal" data-target={`#ord${index}`} className="view"><i className="material-icons">&#xE5C8;</i></Button></td>
                                     */}
                    <Button className="view" onClick={handleShow} > <i className="material-icons">&#xE5C8;</i>    </Button> </td>

                <td>
                    <Link  to={`/order/${o.id}/${o.total}/${o.date}`} className="btn btn-dark btn-lg"  >  View Details

                    </Link>

                </td>
    
              </tr>

{/* <div class="modal fade" id={`ord${index}`} tabindex="-1" role="dialog" aria-labelledby={`sord${index}`}    aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id={`sord${index}`} > Order Status </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body" id="printThis">
            <div class="container" style={{paddingRight: '0px' , paddingLeft: '0px'}}>
                <article class="card">
                    <div class="card-body">
                        <h6><strong>Order ID:</strong> </h6>
                        
                        <div class="track">
                            { o.state === 1 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </> : null
                           
                            }

                            { o.state === 2 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                           
                            }

                            { o.state === 3 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                           
                            }

                            { o.state === 4 ?<>
                                <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                           <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                           <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                           <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                           <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                              
                               }

                            { o.state === 5 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </> : null  
                           

                            }
                            </div>
                            </div>
                            </article>
                            </div>
                            </div></div></div></div>
 */}


        <Modal show={showModal} onHide={handleClose} contentClassName="custom-modal"   >
        <Modal.Header closeButton >
        <Modal.Title> Order Status </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div class="container" style={{paddingRight: '0px' , paddingLeft: '0px'}}  >
                <article class="card">
                    <div class="card-body">
                        <h5><strong>Order ID:</strong> </h5>
                        
                        <div class="track">
                            { o.state === 1 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </> : null
                           
                            }

                            { o.state === 2 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                           
                            }

                            { o.state === 3 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                           
                            }

                            { o.state === 4 ?<>
                                <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                           <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                           <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                           <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                           <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                              
                               }

                            { o.state === 5 ?<>
                             <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                                        <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                                        <div class="step active"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </> : null  
                           

                            }
                            </div>
                            </div>
                            </article>
                            </div>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

                            </>



          })
        }

            </tbody>

        </table>


        


    </div>







}
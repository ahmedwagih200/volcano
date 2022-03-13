
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import "./p.css";
import { Modal, Button } from "react-bootstrap";
export default function Status(){

    
    const params = useParams()

     console.log(params.id)

     return <div className="container mt-5"> 
     <div class="card pb-5  ">
        <div class="card-header">
           <h5 className="ml-5 my-2 text-center" style={{ fontSize : "27px" }} > Order Status </h5> 
        </div>
        <div class="card-body">
            <h5 class="card-title"> Order ID : {params.ord} </h5>
             { params.id ==1  ?   <>
            <ol class="progtrckr mt-4" data-progtrckr-steps="5">
            <li class="progtrckr-done">Order placed</li>
            <li class="progtrckr-todo">Order Confirmed</li>
            
            <li class="progtrckr-todo">Preparing your Order</li>
            <li class="progtrckr-todo">On the way</li>
            <li class="progtrckr-todo">Order Delivered</li>
            </ol> </>  : null }

            { params.id == 2  ?   <>
            <ol class="progtrckr mt-4" data-progtrckr-steps="5">
            <li class="progtrckr-done">Order placed</li>
            <li class="progtrckr-done">Order Confirmed</li>
            
            <li class="progtrckr-todo">Preparing your Order</li>
            <li class="progtrckr-todo">On the way</li>
            <li class="progtrckr-todo">Order Delivered</li>
            </ol> </>  : null }

            { params.id == 3  ?   <>
            <ol class="progtrckr mt-4" data-progtrckr-steps="5">
            <li class="progtrckr-done">Order placed</li>
            <li class="progtrckr-done">Order Confirmed</li>
            
            <li class="progtrckr-done">Preparing your Order</li>
            <li class="progtrckr-todo">On the way</li>
            <li class="progtrckr-todo">Order Delivered</li>
            </ol> </>  : null }
            
            { params.id == 4  ?   <>
            <ol class="progtrckr mt-4" data-progtrckr-steps="5">
            <li class="progtrckr-done">Order placed</li>
            <li class="progtrckr-done">Order Confirmed</li>
            
            <li class="progtrckr-done">Preparing your Order</li>
            <li class="progtrckr-done">On the way</li>
            <li class="progtrckr-todo">Order Delivered</li>
            </ol> </>  : null }
            

            { params.id == 5  ?   <>
            <ol class="progtrckr mt-4" data-progtrckr-steps="5">
            <li class="progtrckr-done">Order placed</li>
            <li class="progtrckr-done">Order Confirmed</li>
            
            <li class="progtrckr-done">Preparing your Order</li>
            <li class="progtrckr-done">On the way</li>
            <li class="progtrckr-done">Order Delivered</li>
            </ol> </>  : null }

            
        </div>
        </div>



      
             
     
  
 
 </div>


    // return  <div class="container mt-5" style={{ paddingRight: '0px' , paddingLeft: '0px'}}  >
    // <article class="card">
    //     <div class="card-body">
    //         <h5><strong>Order ID:</strong> </h5>
            
    //         <div class="track">
    //              <> 

    //              <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
    //                         <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
    //                         <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
    //                         <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
    //                         <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>
               
                

                {/* { params.id  === 2 ?<>
                 <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                            <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                            <div class="step"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                            <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                            <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
               
                }

                { params.id  === 3 ?<>
                 <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                            <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                            <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                            <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                            <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
               
                }

                { params.id  === 4 ?<>
                    <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                               <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                               <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                               <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                               <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </>  : null
                  
                   }

                { params.id  === 5 ?<>
                 <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order Placed</span> </div>
                            <div class="step active "> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text">Order Confirmed</span> </div>
                            <div class="step active"> <span class="icon"> <i class="fa fa-times"></i> </span> <span class="text"> Preparing your Order</span> </div>
                            <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                            <div class="step active"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Order Delivered</span> </div>  </> : null  
               

                } */}
                // </div>
                // </div>
                // </article>
                // </div>

}
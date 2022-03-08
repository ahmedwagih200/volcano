import React from "react";


import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemsCard = (props) => {
  const { addItem } = useCart();
  const notify = () => toast(`${props.title} has been added to your cart`);

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-5 ">
      <div className="card h-100">
        <img
          src={props.img}
          className="card-img-top  " style={{height:"200px" }}
          alt={props.title} 
        />

        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card">{props.price} EGP</h5>
          <div>
            <button
              className="btn btn-dark w-100 "
              onClick={() => {
                addItem(props.item);
                notify();
              }}
            >
              Add To Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );

};

export default ItemsCard;

import React from "react";


import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

const ItemsCard = (props) => {
  const { addItem } = useCart();
  AOS.init();
  return (
    <div   className="col-lg-4 col-md-4 col-sm-6 mb-5 ">
      <div data-aos="fade-down" data-aos-duration="1000" className="card h-100">
        <img
          src={props.img}
          className="card-img-top  " style={{height:"190px" }}
          alt={props.title} 
        />

        <div  className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card">{props.price} EGP</h5>
          <div>
            <button
              className="btn btn-dark w-100 "
              onClick={() => {
                addItem(props.item);

                toast(`${props.title} has been added to your cart`, {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: true,
                  closeOnClick: false,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: "dark"
                });
              }}
            >
              Add To Cart
            </button>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );

};

export default ItemsCard;

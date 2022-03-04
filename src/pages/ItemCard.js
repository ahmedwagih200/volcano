import React from "react";
<<<<<<< HEAD
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemsCard = (props) => {
  const { addItem } = useCart();
  const notify = () => toast(`${props.title} has been added to your cart`);

  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img
            src={props.img}
            className="card-img-top img-fluid"
            alt={props.title}
          />

          <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card">${props.price}</h5>
            <div>
              <button
                className="btn btn-success"
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
    </>
  );
=======
import {useCart} from "react-use-cart";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemsCard = (props) => {
    const {addItem} = useCart();
    const notify = () => toast(`${props.title} has been added to your cart`);

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img
                    src={props.img}
                    className="card-img-top img-fluid"
                    alt={props.title}
                />

                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card">${props.price}</h5>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                addItem(props.item);
                                notify();
                            }}
                        >
                            Add To Cart
                        </button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
};

export default ItemsCard;

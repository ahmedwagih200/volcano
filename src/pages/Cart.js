import { useCart } from "react-use-cart";
import {Link, Navigate, NavLink} from "react-router-dom";
import React, { Component }  from 'react';
function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const buy = () => {
    alert("تمت العملية بنجاح...");
  };
  return (
    <>
      {isEmpty ? (
        <h1 className="text-center"> Your cart isEmpty </h1>
      ) : (
        <section className="container">
          <div className="row jistufy-content-center">
            <div className="col-12">
              <h5>
                {" "}
                Cart ({totalUniqueItems}) total Item :({totalItems})
              </h5>
              <table className="table table-light m-0">
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={`http://localhost:8000${item.image}`}
                            style={{ height: "6rem" }}
                            alt=""
                          />
                        </td>

                        <td>{item.name}</td>

                        <td>{item.price}</td>

                        <td>Quantity({item.quantity})</td>

                        <td>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                            className="btn btn-info ms-2"
                          >
                            {" "}
                            -{" "}
                          </button>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                            className="btn btn-info ms-2"
                          >
                            {" "}
                            +{" "}
                          </button>
                          <button
                            onClick={() => removeItem(item.id) }
                            className="btn btn-danger ms-2"
                          >
                            {" "}
                            RemoveItem{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="col-auto ms-auto">
                <h2> total price: {cartTotal} EGP</h2>
              </div>
            </div>
            <div className="col-auto mb-2">
              <button
                onClick={() => emptyCart()}
                className="btn btn-danger ms-2"
              >
                Clear Cart
              </button>
              <button   className="btn btn-primary ms-2">
              <Link to='/checkout'>cheack</Link>
              </button>
            
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;

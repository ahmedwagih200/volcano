import React from "react";
import { useCart } from "react-use-cart";
import test from "../imgs/3.jpg";
const Cart = () => {
  const {
    //الاسماء دي جاهزة في اليوز كارت كل اسم بيدل علي اللي بيعمله
    isEmpty,
    //دي العدد للمنتج الواحد
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // if (isEmpty) return <h1 className="text-center"> Your cart is Empty </h1>;
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 style={{ fontSize: "40px" }}>Cart</h5>
          <table className="table table-light m-0">
            <tbody>
              <tr>
                <td>
                  <img src={test} style={{ height: "6rem" }} />
                </td>

                <td style={{ fontWeight: "bold", fontSize: "20px" }}> Cake</td>

                <td
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  5$
                </td>

                <td style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Quantity
                </td>

                <td>
                  <i
                    style={{
                      fontSize: "30px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    class="fas fa-minus-square"
                  ></i>
                  &nbsp;&nbsp;
                  <i
                    style={{
                      fontSize: "30px",
                      color: "green",
                      cursor: "pointer",
                    }}
                    class="fas fa-plus-square"
                  >
                    {" "}
                    &nbsp;&nbsp;
                  </i>
                  <i
                    class="far fa-trash-alt"
                    style={{ fontSize: "30px", cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2> Total price: {cartTotal} EGP</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button className="btn btn-danger ms-2">Clear Cart</button>
          <button className="btn btn-primary ms-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;

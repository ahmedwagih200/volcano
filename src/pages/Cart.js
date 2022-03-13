import { useCart } from "react-use-cart";
import axios from "axios";
import {Link, Navigate, NavLink} from "react-router-dom";
import React, { Component }  from 'react';
import './cart.css';
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


  const buy1 = () => {
    let arr=[]
    let user
    for (let itm of items ){
       arr.push({'id': itm.id , "qty": itm.quantity})

    }


    axios.get(`http://127.0.0.1:8000/auth/users/me/` ,{
      headers: {
        'Authorization': `JWT ${localStorage.getItem('access')}`
      }
  }
).then(resp => {user=resp.data['id'] ; console.log(user) ;

axios.post('http://localhost:8000/order', {
      'items': arr,
      'price': cartTotal,
      'user':user
      
  },
  {
      headers: {
          "Authorization": `AUTHORIZATION_KEY`,
          "Content-Type": 'application/json'
      }
  }
)
.then(res => console.log(res))
.catch(error => console.log(error))

})

.catch(error => console.log(error))  }

  console.log(items)
    let user1
  const buy = () => {

      axios.post('http://localhost:8000/api/stripe/create-checkout-session', {
              'items': items
          },
          {
              headers: {
                  "Content-Type": 'application/json'
              }
          }
      )
          .then(res => window.location = res.data.url)
          .catch(error => console.log(error))
  };

  return (
    <>
      {isEmpty ? (
        <h1 className="text-center"> Your cart isEmpty </h1>
      ) : (
        <section className="container-fluid cartbg">
          <div style={{width: '50%', marginLeft:'25%'}} className="row justify-content-center ">
            <div style={{marginTop: '70px'}} className="col-12">
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

                        <td>{item.price} EGP</td>

                        <td>Quantity({item.quantity})</td>

                        <td>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-rounded ml-2 s">
                            {" "}
                            -{" "}
                          </button>

                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-rounded ml-2 s">
                            {" "}
                            +{" "}
                          </button>

                          <button onClick={() => removeItem(item.id) } className="btn btn-rounded ml-2 s">
                            {" "}
                            RemoveItem{" "}
                          </button>

                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="col-auto ms-auto mt-3">
                <h2> Total Price: {cartTotal} EGP</h2>
              </div>
            </div>

            <div style={{marginLeft: '500px' , marginTop: '-40px'}} className="col-auto mb-2">

              <button onClick={() => emptyCart()}
                className="btn btn-rounded  s">
                Clear Cart
              </button>

              <Link  className="btn btn-rounded ml-2 s" to='/checkout'>Check Out</Link>


            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;
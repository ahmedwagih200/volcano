import { useCart } from "react-use-cart";
import axios from "axios";
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
    let arr=[]
    let user
    for (let itm of items ){
       arr.push({'id': itm.id , "qty": itm.quantity})

    }


  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `JWT ${localStorage.getItem('access')}`,
  //         'Accept': 'application/json'
  //     }
  // };

  
  //     const resp = await axios.get(`http://127.0.0.1:8000/auth/users/me/`, config);
  //     user=resp.data['id']

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
.catch(error => console.err(error))



})





.catch(error => console.err(error))



//     axios.post('http://localhost:8000/order', {
//       'items': arr,
//       'price': cartTotal,
//       'user':user
      
//   },
//   {
//       headers: {
//           "Authorization": `AUTHORIZATION_KEY`,
//           "Content-Type": 'application/json'
//       }
//   }
// )
// .then(res => console.log(res))
// .catch(error => console.err(error))

    // alert("task is done successfully");
    // console.log(arr , items )
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
                            onClick={() => removeItem(item.id)}
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
              <button onClick={buy} className="btn btn-primary ms-2">
                Buy Now{" "}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;

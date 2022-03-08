import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { useCart } from "react-use-cart";

function Category() {
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
    alert(" task is done !");
  };

  const params = useParams();
  const [cate, set_cate] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const [arr, set_cname] = useState([]);
  const location = useLocation();


  
  useEffect(() => {
    axios.get(`http://localhost:8000/category/${params.id}`).then((res) => {
      set_cate(res.data);
      console.log(res.data);
    });
    axios
      .get('http://localhost:8000/categories')
      .then((res) => set_cname(res.data));
  }, [location]);

  return (
    <div className="container-fluid mt-5">
      {/* <h2> {arr[params.id -1 ].name} </h2> */}

      <div className="row mx-5">
        <div className="col-3 my-5 ">
          <div className="list-group">
            {arr.map((c ,index )=>{
              return <Link
              to={`/category/${c.id}`}
              className="list-group-item list-group-item-action text-center text-capitalize" style={{ height:'70px'}}
            >
              <h4> {c.name} </h4>
             
            </Link>

            })  }
           
      
            
          </div>
        </div>

        <div className="col-7 my-5 offset-1" >
          <div className="row">

            
            {cate.map((product, index) => {
              return (
                <ItemCard
                  img={`http://localhost:8000${product.image}`}
                  price={product.price}
                  title={product.name}
                  item={product}
                  key={index}
                />
              );
            })}

            {cate
              .filter((val) => {
                if (searchText === "") {
                  return val;
                } else if (
                  val.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((product, index) => {
                return (
                  <ItemCard
                    img={`http://localhost:8000${product.image}`}
                    price={product.price}
                    title={product.name}
                    item={product}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
    alert("تمت العملية بنجاح...");
  };

  const params = useParams();
  const [cate, set_cate] = useState([]);
  const [cname, set_cname] = useState("");
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const location = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:8000/category/${params.id}`).then((res) => {
      set_cate(res.data);
      console.log(res.data);
    });
    axios
      .get(`http://localhost:8000/cate/${params.id}`)
      .then((res) => set_cname(res.data.name));
  }, [location]);

  return (
    <div className="container mt-5">
      <div style={{ textAlign: "right" }}>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" />
        <button onClick={(e) => searchText(e)} className="btn btn-info">
          Search
        </button>
      </div>
      <h2> {cname} </h2>

      <div className="row mx-5">
        <div className="col-3 my-4">
          <div className="list-group">
            <Link
              to="/category/6"
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              mini pancakes{" "}
            </Link>
            <Link
              to="/category/4"
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              waffles{" "}
            </Link>
            <Link
              to={`/category/1`}
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              cakes{" "}
            </Link>
            <Link
              to={`/category/2`}
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              molten cakes{" "}
            </Link>
            <Link
              to={`/category/5`}
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              boom ice cream{" "}
            </Link>
            <Link
              to={`/category/3`}
              className="list-group-item list-group-item-action text-center text-capitalize"
            >
              {" "}
              cheese cake{" "}
            </Link>
          </div>
        </div>

        <div className="col-9 my-4">
          <div className="row">
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

import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import AOS from "aos";

function Category() {
  AOS.init();

  const params = useParams();

  const [cate, set_cate] = useState([]);

  const [searchText, setSearchText] = useState("");

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


      <div data-aos="fade-right" data-aos-duration="1000" style={{marginLeft: '35%'}}>
        <input onChange={(e) => setSearchText(e.target.value)} type="text"/>
        <button style={{marginTop: '8px' , width: '80px' , height: '50px' }}
            // style={{ color: "white" }}
            onClick={(e) => searchText(e)}
            className="btn btn-rounded bg-dark ml-2 mb-2"
            >
          <p style={{color: "white"}}>Search</p>
        </button>


      </div>

      <div className="row mx-5">
        <div className="col-3 my-5 ">
          <div  className="list-group">
            {arr.map((c ,index )=>{
              return <Link
                  data-aos="fade-right" data-aos-duration="1000"
              to={`/category/${c.id}`}
              className="list-group-item list-group-item-action text-center text-capitalize" style={{ height:'70px'}}>
              <h4> {c.name} </h4>
             
            </Link>

            })  }

          </div>
        </div>


        <div className="col-6 ml-5 mt-5">
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

import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import Slider from "../components/slider/Slider";
import React, {Component, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import QueryString from 'query-string';
import { useCart } from "react-use-cart";
import axios from "axios";

function Main() {
  const {items , cartTotal} = useCart();

    const location = useLocation();
    useEffect(() => {
        const values = QueryString.parse(location.search);
        if (values.success) {

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
            'user':user ,
            'address': localStorage.getItem('address') , 
            'phone':localStorage.getItem('phone')  ,
            'cash':localStorage.getItem('cash') ,
            

            
        },
        {
            headers: {
                "Authorization": `AUTHORIZATION_KEY`,
                "Content-Type": 'application/json'
            }
        }
      )
      .then(res => window.close() )
      .catch(error => console.log(error))


      
      })
          
      .catch(error => console.log(error))  
      


            //save order To DB
            
        }
        if (values.canceled) {

            window.close()
        }
    }, []);

  return (
    <div className="bg-light">
      <Slider />
      <Menu />
      <About />
      <Footer />
      
    </div>
  );
}
export default Main;


import { useCart } from "react-use-cart";
import * as Icon from 'react-bootstrap-icons';
import React, {useEffect, useState} from 'react';
import { Box, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper ,Pick, AppBar} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import axios from "axios";

import { Button } from 'react-bootstrap';

export default function Home() {
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
      const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

      // formData is used to store the form filed values in it , and here we give it initial values of empty strings ''
      const [formData, setFormData] = useState({first_name: '', last_name: '', email: '', address: '', phone: ''} );
  
  
  
      // el useEffect btetnfz awl mara al page btetft7 we kol mara isUserDataLoaded btet8yer
      useEffect(() => {
  
          // bn3ml call lel function hna 34an ngib al data awl mal page tft7
          getUserData()
  
      }, [isUserDataLoaded]);
  
      // This function is for getting the user data from the Database or (make API call to get the data)
      const getUserData = () => {
          // config is used for passing our access token or (access key) to the (API)
          // bn3ml kida 34an al api me4 hyrda ydina al data 8er ama n2lo al key
          // al key da zay al password kida aw klmt al ser 34an a3ml request ani agib data we el api yrod 3lya beha lazm adilo al password eli howa(access key)
          const config = {
              headers: {
                  'Authorization': `JWT ${localStorage.getItem('access')}`
              }
          };
  
          // here we make the api request (we ask the api to get the user data from the database )
          // and we pass the URL (el api ali hans2lo ydina al data ) , and we pass the config (el feh al access key )
          axios.get("http://127.0.0.1:8000/auth/users/me/", config)
              .then(result=> {
                  //we loop on the result we have got from the api ,we b3d kida hn7ot al user data eli gat fe al form bt3tna el user ama yft7 al page yl2iha gahza fe w4o
                  for (let key in result.data) {
                      formData[key] = result.data[key]
                  }
                  // bema an al data gat mn al database 3an tri2 al api , fa hn5li al IsUserDataLoaded be true 34an al page yt3mlha reload , wel data tzhr
                  setIsUserDataLoaded(true)
              })
      };
  
  
      // we store the form data in these values :{ first_name, last_name, email, address, phone }  (34an nst5dmha fel api call )
      const { first_name, last_name, email, address, phone } = formData;
  
      // kol mal user yktb 7aga fel form .. el 7aga de tet5zn fel form wel form yt3mlha update
      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  
      // btet nfz awl mal user ydos 3la update
      const onSubmit = e => {
          // sibek mnha ^_^
          e.preventDefault();
  
          // hn3ml call le function updateUserData
          updateUserData()
      };
      const updateUserData = () => {

        // nfs ali 3mlnah fo2 , bas zyada bn3rfo an a7na hnb3tlo json data
        // json data de hya zay al dictionry bzbt , tab leh me4 bnb3t dictionry ? 34an al API me4 byfhm 8er json
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        // bn3ml store lel  data el gdida fel varible ali asmo bodi 34an ndih lel API 34an n3ml beiha update
        const body = JSON.stringify({ first_name, last_name, email, address, phone});

        // hna hn3ml el request lel api we ndilo al config eli feh al (access key ) wel body ali feh (form new data)
        axios.put("http://127.0.0.1:8000/auth/users/me/",body ,config)
            .then(result=> {


            })
    };  
      
  return (
    <div className="">
    <Card className="Card shadow-lg">
    

      <CardContent >
      <Grid container spacing={6}>
      <Grid item xs={1}>

      <div className='pb-5'>
      <Icon.PinMapFill color='brown' size={30} className="" > </Icon.PinMapFill>  
      </div>
      </Grid>
      <Grid item xs={6}>
      <div className="pt-3">
      <p class="font-weight-bold text-capitalize">Area: {address}</p> 
     
      <p>Phone: {phone}</p>
     
                <Link to='/change_address' className='
                Link'>Anthor Address for this order?</Link>

            
      </div>
</Grid>
</Grid>
   </CardContent>    
   </Card>
<br></br>
<Card className='Card shadow-lg'>
   <CardContent>
    <h3 className='font-weight-bold '>Pay With</h3>
<br></br>
    <Grid container spacing={1} >
    <Grid item xs={1} className='pt-3'>

      <input type="radio" name="cash" value="cash" checked className='big' />
     </Grid>

     <Grid item xs={1} className='pr-5'>

      <Icon.Cash className='' size={40} color='brown' ></Icon.Cash>
      </Grid>
      <Grid item xs={6} className='pr-5 pt-2'>
      <span > cash On Delivery</span>
     </Grid>
      </Grid>


      <br></br>
    

      <Grid container spacing={1} >
    <Grid item xs={1} className='pt-3'>
    <input type="radio" name="visa" value="visa" className='big' disabled/>
     
     </Grid>

     <Grid item xs={1} className='pr-5'>

      <Icon.CardHeading className='' size={40} color='brown' ></Icon.CardHeading>
      </Grid>
      <Grid item xs={6} className='pr-5 pt-2'>
      <span className='disabled' >Visa <sub>will be available soon!<Icon.EmojiSmile color='yellow' size={19} className='pt-1'></Icon.EmojiSmile></sub></span>
     </Grid>
      </Grid>

    <br></br>
    <h3 className='font-weight-bold '>Payment Summary</h3>
    <br></br>
    
    <Grid container spacing={10} >
    <Grid item xs={8}>
   <p> Basket total</p> 
   <p> Delivery Fee</p> 
   <p>total amount</p>
</Grid>

<Grid item xs={4} className="brown">
   <p>EGP {cartTotal}</p> 
   <p>  EGP 10</p> 
   <p>EGP {cartTotal+10}</p>
</Grid>
</Grid>
<br></br>
< Button variant='warning'  size='lg' className='Btt'>
   Place Your Order
  </Button>
   </CardContent>
    </Card>
   </div>
  );
}
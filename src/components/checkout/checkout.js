import {useCart} from "react-use-cart";
import * as Icon from 'react-bootstrap-icons';
import React, {useEffect, useState} from 'react';
import {Card, CardContent, Grid,} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {checkAuthenticated, login} from "../../actions/auth";
import axios from "axios";
import {Button} from "@mui/material";

const Checkout = ({login, isAuthenticated}) => {

    const {items} = useCart();

    const [visible, setVisible]=useState(false);

    const [visible1, setVisible1]=useState(false);

    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

    const {cartTotal,} = useCart();

    let navigate = useNavigate();

    

    useEffect(() => {

        checkAuthenticated();
        getUserData()

    }, [isUserDataLoaded]);

    const getUserData = () => {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        axios.get("http://127.0.0.1:8000/auth/users/me/", config)
            .then(result=> {
                for (let key in result.data) {
                    userData[key] = result.data[key]
                }
                setIsUserDataLoaded(true)
            })
    };

    const [userData ,setUserData] = useState({first_name: '', last_name: '', email: '', address: '', phone: ''} );

    const [formData, setFormData] = useState({email: '', password: ''});

    const {email, password} = formData;

    const { address, phone } = userData;
    localStorage.setItem('address' , address) ;
    localStorage.setItem('phone' , phone) ;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onUserChange = e =>{ setUserData({...userData, [e.target.name]: e.target.value}); localStorage.setItem(e.target.name, e.target.value);} 
  
    const onSubmit = e => {
        e.preventDefault();

        login(email, password);

        setTimeout(function() {
            getUserData()
        }, 500);

    };

    const onlinePayment = () => {



        axios.post('http://localhost:8000/api/stripe/create-checkout-session', {
                'items': items
            },
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
        )
            .then(res => window.open(res.data.url, '_blank'))
            .catch(error => console.log(error))
    };

    const saveOrder_COD = () => {
        
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
              'address':address, 
              'phone':phone ,
              'cash':visible,
              

              
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
        
        .catch(error => console.log(error))  
        

        // save order data To DB

    };

    const login_render = () => (
        <div style={{width: '30%'}} className="container ">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>

            <form onSubmit={e => onSubmit(e)}>
                <div style={{marginBottom: '5px'}} className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required/>
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required/>
                </div>

                <button style={{marginRight: '6px'}} className="btn btn-dark mt-3" type="submit">Login</button>

            </form>

            <p className='mt-3'>Don't have an account? <Link to='/Form_container/Signup'>Sign Up</Link></p>

            <p className='mt-3'>Forgot your Password? <Link to='/Form_container/ResetPassword'>Reset Password</Link></p>

        </div>
    );

    const cart_render = () => (

        <div style={{marginTop: '-50px'}} className="">
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
                                <form onSubmit={e => onSubmit(e)}>

                                    <div style={{ margin: '5px' }} className='form-group'>
                                        <label htmlFor="phone">Phone:</label>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Phone'
                                            name='phone'
                                            value={phone}
                                            onChange={e => onUserChange(e)}
                                            required
                                        />
                                    </div>
                                    <div style={{ margin: '5px' }} className='form-group'>
                                        <label htmlFor="address">Address:</label>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Address'
                                            name='address'
                                            value={address}
                                            onChange={e => onUserChange(e)}
                                            required
                                        />
                                    </div>

                                </form>

                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
            <Card className='Card shadow-lg'>
                <CardContent>
                    <form>
                        <h3 className='font-weight-bold '>Pay With</h3>
                        <br/>

                        <Grid container spacing={1} >
                            <Grid item xs={1} className='pt-3'>

                                <input type="radio" name="pay" value="cash" className='big' onClick={ ()=>{setVisible(true)  ; localStorage.setItem('cash', true)}} onChange={()=>setVisible1(false)} />
                            </Grid>

                            <Grid item xs={1} className='pr-5'>

                                <Icon.Cash className='' size={40} color='brown' />
                            </Grid>
                            <Grid item xs={6} className='pr-5 pt-2'>
                                <span > cash On Delivery</span>
                            </Grid>
                        </Grid>

                        <br/>

                        <Grid container spacing={1} >
                            <Grid item xs={1} className='pt-3'>
                                <input type="radio" name="pay" value="visa" className='big' onClick={ ()=>setVisible1(true)}  onChange={()=>{setVisible(false) ; localStorage.setItem('cash', false)}}  />

                            </Grid>

                            <Grid item xs={1} className='pr-5'>

                                <Icon.CardHeading className='' size={40} color='brown' />
                            </Grid>
                            <Grid item xs={6} className='pr-5 pt-2'>
                                <span>Visa</span>
                            </Grid>
                        </Grid>

                    </form>
                    <br/>

                    <br/>

                    <div> <h3 className='font-weight-bold '>Payment Summary</h3>
                        <Grid container spacing={10} >
                            <Grid item xs={8}>
                                <p> Basket total</p>
                                <p> Delivery Fee</p>
                                <p>total amount</p>
                            </Grid>
                            <div>

                            </div>
                            <Grid item xs={4} className="brown">
                                <p>EGP {cartTotal}</p>
                                <p>  EGP 10</p>
                                <p>EGP {cartTotal+10}</p>
                            </Grid>
                        </Grid>
                    </div>
                    { visible1 &&
                        < Button onClick={() => onlinePayment() }  variant='warning'  size='lg' className='Btt'>
                            Go to Online Payment
                        </Button>
                    }
                    { visible &&

                        < Button onClick={() => saveOrder_COD() } variant='warning'  size='lg' className='Btt'>
                            Place Order
                        </Button>
                    }
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div style={{padding: "100px"}} className="container-fluid MakeReviews">

            {isAuthenticated ? cart_render()  : login_render()}

        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Checkout);

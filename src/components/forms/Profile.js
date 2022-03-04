import React, {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from "axios";

// what is api ? howa al 4a5s al mas2ol ano ygib al data mn al database we ydhali (el wasit ma bini wel database)
// what is api ? aya ---> API -----> Database
//               aya <--- API <----- Database


const Profile = () => {
    // isUserDataLoaded is used to reload the page each time we get data from the Database or (API response) , when its
    // value changed from false to ture the page is reloaded
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

    // this function for updating the user data
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
        <div style={{ width: '30%' }} className='container mt-5'>
            <h4 style={{ margin: '5px' }}> My Profile info</h4>
            <form onSubmit={e => onSubmit(e)}>
                <div style={{ margin: '5px' }} className='form-group'>
                    <label htmlFor="first_name">First name:</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name'
                        name='first_name'

                        value={first_name}

                        //btetnfz fo2 line 33 - kol ma al user yktb 7aga fel filed da
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <label htmlFor="last_name">Last name:</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div style={{ margin: '5px' }} className='form-group'>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={e => onChange(e)}
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
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <button style={{ marginLeft: '5px' }} className="btn btn-dark mt-3" type='submit'>Update</button>

            </form>

            <Link to='/Form_container/ChangePassword'>Change Password</Link>

        </div>
    );
};

export default (Profile);


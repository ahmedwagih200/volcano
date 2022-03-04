import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import React, { Fragment, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated, load_user, logout } from "../../actions/auth";
=======
import React, {Fragment, useState, useEffect} from "react";
import {Link, Navigate, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {checkAuthenticated, load_user, logout} from "../../actions/auth";
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
import "./mystyle.css";
import AOS from "aos";

import "aos/dist/aos.css";
import Navitem from "./Navitem";
import Navlink from "./Navlink";
import logo from "../imgs/stockLogo.jpeg";
import {useCart} from "react-use-cart";

function Navbar({logout, isAuthenticated}) {

    AOS.init();
    const [redirect, setRedirect] = useState(false);
    const {totalItems} = useCart();

    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () =>
        <NavLink to="Form_container/Login" style={{fontSize:'20px'}} className="col-md-auto nav-link active px-lg-4 rounded">Login</NavLink>

    const authLinks = () => (
        <div className="d-flex flex-row">

            <NavLink style={{fontSize:'20px'}} to="Form_container/Profile" className="col-md-auto nav-link active px-lg-4 rounded">My Profile</NavLink>
            <a style={{fontSize:'20px'}} className="col-md-auto nav-link active px-lg-4 rounded" href="#" onClick={logout_user}>Logout</a>

        </div>
    );

    return (

        <nav className="navbar navbar-light bg-light p-0">
            <div className="container-fluid">
                <div style={{marginLeft: "30%"}} className="d-flex">
                    <div data-aos="fade-right" data-aos-duration="1500" className=" container-fluid sticky-top bg-light">

                        <div className="row justify-content-center ">
                            <Navlink name="Home" val="Main"/>
                            <Navitem name="Menu" val="Main#menu"/>

                            <div style={{marginRight: "-50px", marginLeft: "-50px", marginTop: "-20px", marginBottom: "-20px",
                                transform: "scale(0.6)",}} className="col-md-auto navbar-header">
                                <img src={logo} alt="logo"/>
                            </div>

                            <Navitem name="About" val="Main#about"/>
                            <Navitem name="Contact" val="Main#contact"/>
                            <Navlink name="Reviews" val="Reviews"/>

                            <Link style={{ marginTop:"25px" ,fontSize:'25px'}}
                                  className="col-md-auto nav-link active px-lg-4 rounded" to={"/cart"}>
                                <i className="fas fa-shopping-cart " style={{fontSize: "25px"}}/>{" "}
                                <span style={{fontSize: "25px"}}>({totalItems}) </span>
                            </Link>


                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    {isAuthenticated ? authLinks() : guestLinks()}
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {logout})(Navbar);

import "bootstrap/dist/css/bootstrap.min.css";
import React, {Fragment, useState, useEffect} from "react";
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {checkAuthenticated, load_user, logout} from "../../actions/auth";
import "./mystyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navitem from "./Navitem";
import Navlink from "./Navlink";
import logo from "../imgs/stockLogo.jpeg";
import {useCart} from "react-use-cart";

function Navbar({logout, isAuthenticated}) {

    AOS.init();

    let navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const {totalItems} = useCart();

    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    const logout_user = () => {
        logout();
        return navigate("/Form_container/Login");
    };

    const guestLinks = () =>
        <NavLink to="Form_container/Login" style={{fontSize:'20px'}} className="col-md-auto nav-link active px-lg-4 rounded">Login</NavLink>

    const authLinks = () => (
        <div className="d-flex flex-row">

            <NavLink style={{fontSize:'20px'}} to="Form_container/Profile" className="col-md-auto nav-link active px-lg-4 rounded">My Profile</NavLink>
            <NavLink style={{fontSize:'20px'}} to="orders" className="col-md-auto nav-link active px-lg-4 rounded">My Orders</NavLink>

            <a style={{fontSize:'20px'}} className="col-md-auto nav-link active px-lg-4 rounded" href="#" onClick={logout_user}>Logout</a>

        </div>
    );
    return (

        <nav className="navbar navbar-light bg-light p-0">
            <div className="container-fluid">
                <div style={{marginLeft: "30%"}} className="d-flex">
                    <div data-aos="fade-down" data-aos-duration="1500" className=" container-fluid sticky-top bg-light">

                        <div className="row justify-content-center ">
                            <Navlink name="Home" val="Main"/>
                            <Navitem name="Menu" val="Main#menu"/>
                            <Navitem name="About" val="Main#about"/>

                            <div style={{marginRight: "-50px", marginLeft: "-50px", marginTop: "-20px", marginBottom: "-20px",
                                transform: "scale(0.6)",}} className="col-md-auto navbar-header">
                                <img src={logo} alt="logo"/>
                            </div>

                            <Navitem name="Contact" val="Contact"/>
                            <Navlink name="Reviews" val="Reviews"/>

                            <Link style={{ marginTop:"25px" ,fontSize:'25px'}}
                                  className="col-md-auto nav-link active px-lg-4 rounded" to={"/Cart"}>
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

export default connect(mapStateToProps, { logout })(Navbar);

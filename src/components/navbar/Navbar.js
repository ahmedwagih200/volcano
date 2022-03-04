import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated, load_user, logout } from "../../actions/auth";
import "./mystyle.css";
import AOS from "aos";

import "aos/dist/aos.css";
import Navitem from "./Navitem";
import Navlink from "./Navlink";
import logo from "../imgs/stockLogo.jpeg";
import { useCart } from "react-use-cart";
function Navbar({ logout, isAuthenticated }) {
  AOS.init();
  const [redirect, setRedirect] = useState(false);
  const { totalItems } = useCart();
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  const logout_user = () => {
    console.log("hi");
    logout();
    setRedirect(true);
  };

  const guestLinks = () => <Navlink name="Login" val="Empty/Login" />;

  const authLinks = () => (
    <div className="col-md-auto">
      <Navlink name="Profile" val="Empty/Profile" />
      <a href="#" onClick={logout_user}>
        Logout
      </a>
    </div>
  );

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className=" container-fluid sticky-top bg-light"
    >
      <div className="row justify-content-center ">
        <Navlink name="Home" val="Main" />
        <Navitem name="Menu" val="Main#menu" />
        <div
          style={{
            marginRight: "-50px",
            marginLeft: "-50px",
            marginTop: "-20px",
            marginBottom: "-20px",
            transform: "scale(0.6)",
          }}
          className="col-md-auto navbar-header"
        >
          <img src={logo} alt="logo" />
        </div>
        <Navitem name="About" val="Main#about" />
        <Navitem name="Contact" val="Main#contact" />

        {isAuthenticated ? authLinks() : guestLinks()}
        <Link to={"/cart"}>
          <i class="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>{" "}
          <span style={{ fontSize: "25px" }}>({totalItems}) </span>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);

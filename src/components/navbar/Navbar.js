import { ReactNotifications } from "react-notifications-component";
import { Store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mystyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navitem from "./Navitem";
import Navlink from "./Navlink";
import logo from "../imgs/stockLogo.jpeg";
import { Link } from "react-router-dom";
function Navbar() {
  //   const notify = () => {
  //     Store.addNotification({
  //       title: "new card",
  //       message: "Hello you",
  //       type: "info",
  //       container: "top-right",
  //       insert: "top",
  //     });
  // };
  AOS.init();
  return (
    <>
      {/* <div>
        <button onClick={notify}>Default</button>
      </div> */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="container-fluid sticky-top bg-light"
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
          <Navlink name="Login" val="Empty/Login" />
          <Link to={"/cart"}>
            <i
              class="fas fa-shopping-cart"
              style={{ marginTop: "25px", fontSize: "25px" }}
            ></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

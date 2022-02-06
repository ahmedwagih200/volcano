import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navitem from './Navitem';
import Navlink from './Navlink';
import logo from '../imgs/stockLogo.jpeg';

function Navbar() {
    AOS.init();
    return (
        <div  data-aos="fade-right" data-aos-duration="1500"  className="d-flex justify-content-center sticky-top bg-light">
            <Navlink name="Home" val="Main"/>
            <Navitem name="Menu" val="Main#menu" />
            <div style={{ marginTop: "0px" , transform: 'scale(0.6)' }} className="navbar-header">
                <img src={logo} />
            </div>
            <Navitem name="About" val="Main#about" />
            <Navitem name="Contact" val="Main#contact" />
            <Navlink name="Login" val="Empty/Login" />
        </div>
    );
}
export default Navbar;


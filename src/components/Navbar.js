import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarlink from './Navbarlink';
import logo from '../imgs/stockLogo.jpeg';

function Navbar() {
    AOS.init();
    return (
        <div className="d-flex justify-content-center sticky-top bg-light">
            <Navbarlink val="Home" linkval="#first" />
            <Navbarlink val="Menu" linkval="#about" />
            <div style={{marginTop:"10px"}}  className="navbar-header">
                <img src={logo} />
            </div>
            <Navbarlink val="About" linkval="#services" />
            <Navbarlink val="Contact" linkval="#work" />
        </div>
    );
}
export default Navbar;

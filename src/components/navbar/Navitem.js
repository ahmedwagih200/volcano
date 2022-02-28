import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import { HashLink as Link } from 'react-router-hash-link';

function Navbaritem(props) {
  return ( 
    <Link style={{marginTop:"25px" ,fontSize:'25px'}} className="nav-link active px-lg-4 rounded" to={props.val}>{props.name}</Link>
  );
}
export default Navbaritem;

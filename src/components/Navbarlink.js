import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';

function Navbarlink(props) {
  return (
    <a style={{marginTop:"25px" ,fontSize:'25px'}} className="nav-link active px-lg-4 rounded" href={props.linkval}> {props.val} </a>
  );
}
export default Navbarlink;

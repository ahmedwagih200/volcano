import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './style.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import d3 from './d3.jpg';
import d4 from './d4.jpg';



function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <MDBCarousel className='container1'>

        <MDBCarouselInner>

          <MDBCarouselItem className='active'>
            <MDBCarouselElement className='imgg' src={d1}  />
          </MDBCarouselItem>
         
          
         

        </MDBCarouselInner>

        <div className='middle'>
          <div class="text"><center></center></div>




        </div>

      </MDBCarousel>
      <Menu />
      <About />
      <Footer />
    </div>
  );
}
export default App;

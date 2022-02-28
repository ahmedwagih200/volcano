import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';
import Slider from '../components/slider/Slider';


function Main() {
    return (
      <div   className="bg-light">
      <Slider />
      <Menu />
      <About />
      <Footer />
    </div>
    );
  }
  export default Main

  
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import Slider from "../components/slider/Slider";
import React, {Component, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import QueryString from 'query-string';
function Main() {

    const location = useLocation();
    useEffect(() => {
        const values = QueryString.parse(location.search);
        if (values.success) {
            //save order To DB
            window.close()
        }
        if (values.canceled) {

            window.close()
        }
    }, []);

  return (
    <div className="bg-light">
      <Slider />
      <Menu />
      <About />
      <Footer />
      
    </div>
  );
}
export default Main;

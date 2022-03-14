import '../about/about.css';
import React, { Component }  from 'react';
function About() {
  return (
    <div data-aos="fade" data-aos-duration="1500" className="about" style={{backgroundColor: '#ffffff', padding:'10px'}} >
      <div data-aos="fade-down" data-aos-duration="1000" id="about" className="offset container mt-3 mb-5">
        <div  style={{ textAlign: 'center' , marginTop: '150px'}} >
          <h1 style={{marginRight: '150px', marginBottom: "25px"}} className="display-4 font-weight-bold">About Us</h1>
        </div>
        <p> Volcano is the one and only stop shop for premium quality chocolates
          We aim to provide a one of a kind chocolate experience through our</p>
        <p> store where you can dive in different tastes, various cultures and
          embrace the art of chocolate. When talking about chocolates; Volcano</p>
        <p> is the definition of excellence through our selected and fine tastes.
          In everything we do, we put chocolate through! </p>
      </div>

    </div>
  );
}

export default About;

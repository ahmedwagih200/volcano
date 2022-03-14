import React, { Component }  from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div class="row">
          <div className="footer-col">
            <h4>Volcano</h4>
            <ul>
              <li>
                <a href="#">All&nbsp; rights&nbsp; reserved &nbsp;. &nbsp;copyright © 2022</a>
              </li>


            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">07775000</a>
              </li>
              <li>
                <a href="#">07775000</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4> Follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/Volcano.Enjoy.Your.Chocolate"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"/>
              </a>
              <a
                href="https://instagram.com/volcano.enjoy.yourchocolate?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

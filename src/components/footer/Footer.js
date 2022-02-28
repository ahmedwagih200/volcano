const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div class="row">
          <div className="footer-col">
            <h4>Volcano</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> online shop</h4>
            <ul>
              <li>
                <a href="#">Hot drinks</a>
              </li>
              <li>
                <a href="#"> Smoothies</a>
              </li>
              <li>
                <a href="#">Fresh juice</a>
              </li>
              <li>
                <a href="#">Desserts</a>
              </li>
              <li>
                <a href="#">Waffles and Pancakes</a>
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
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com/volcano.enjoy.yourchocolate?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

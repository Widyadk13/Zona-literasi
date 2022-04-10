import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright" style={{color: "#0F2C67"}}>Copyright &copy; Zona Literasi 2022</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href=" https://twitter.com/zonaliterasi?t=QUesRooUw4GjUrNK2e8AWw&s=08">
                  <i class="fa-brands fa-twitter fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/zonaliterasi/">
                  <i class="fa-brands fa-facebook fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/zliterasi/">
                  <i class="fa-brands fa-instagram-square fa-3x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
              <a href="https://api.whatsapp.com/send?phone=081219540709">
                <i class="fa-brands fa-whatsapp fa-2x" style={{color: "#325288"}}></i>
                </a>
              </li>
              <li className="list-inline-item">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdokjHqlIeZAuIcQR1IXbHBVsJmgRuJFyKCRBsV35VhhYux_w/viewform?embedded=true">
              <i class="fa-regular fa-envelope fa-2x" style={{color: "#325288"}}></i>
              </a>
              </li>
              <br/>
              <li className="list-inline-item" >
                <a href="#something" style={{color: "#35589A"}}>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
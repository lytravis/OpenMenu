import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Developed by Travis Ly</p>
        <div className="footer-container">
          <a href="https://www.linkedin.com/in/lytravis/">
            <div className="footer-icon">
              <i className="fab fa-linkedin "></i>
            </div>
          </a>
          <a href="https://github.com/lytravis">
            <div className="footer-icon">
              <i className="fab fa-github  "></i>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

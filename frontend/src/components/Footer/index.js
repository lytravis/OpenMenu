import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Travis Ly</p>
        <div className="footer-container">
          <a href="https://www.linkedin.com/in/lytravis/">
            <div className="footer-icon">
              <i className="fab fa-linkedin"></i>
            </div>
          </a>
          <a href="https://github.com/lytravis">
            <div className="footer-icon">
              <i className="fab fa-github"></i>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}

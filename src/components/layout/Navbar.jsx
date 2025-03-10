import React from "react";

import logoMain from "@logos/logo-main.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img className="navbar-logo" src={logoMain} />
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <div className="navbar-login">
        <button className="navbar-button login-button">Login</button>
        <button className="navbar-button signin-button">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;

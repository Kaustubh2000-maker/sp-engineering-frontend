import React from "react";
import { navLogin } from "@animations/navAnimation";

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

      <div className="navbar-login-div">
        <button className="navbar-btn signin-btn">Signup</button>
        <button className="navbar-btn login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;

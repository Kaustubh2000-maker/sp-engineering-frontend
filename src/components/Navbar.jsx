import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">LOGO</div>

      {/* Centered Links */}
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
          <a href="#">About</a>
        </li>
      </ul>

      {/* Login Section */}
      <div className="navbar-login">
        <button className="navbar-button login-button">Login</button>
        <button className="navbar-button signin-button">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;

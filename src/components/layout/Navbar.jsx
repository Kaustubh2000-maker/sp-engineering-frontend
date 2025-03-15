import React from "react";
import { navLogin } from "@animations/navAnimation";

import logoMain from "@logos/logo-no-bg.png";

import { navVisible } from "../../animations/appAnimation";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props.firstEnter);

  return (
    <motion.nav className="navbar" {...(props.firstEnter ? navVisible : {})}>
      <div>
        <img className="navbar-logo" src={logoMain} />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>

      <div className="navbar-login-div">
        <button className="navbar-btn signin-btn">Signup</button>
        <button className="navbar-btn login-btn">Login</button>
      </div>
    </motion.nav>
  );
}

export default Navbar;

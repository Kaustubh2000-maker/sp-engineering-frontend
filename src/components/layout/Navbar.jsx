import React from "react";
import { navLogin } from "@animations/navAnimation";

import logoMain from "@logos/logo-no-bg.png";

import { navVisible } from "../../animations/appAnimation";

import { motion } from "framer-motion";
import { Link, useParams, useLocation } from "react-router-dom";

function Navbar(props) {
  const locaion = useLocation();

  // console.log(locaion.pathname);

  let navStyle = {
    style: {
      backgroundColor: "white",
      position: "relative",
    },
  };

  return (
    <motion.nav
      className="navbar"
      {...(props.firstEnter && locaion.pathname == "/" ? navVisible : {})}
      {...(locaion.pathname != "/" ? navStyle : {})}
    >
      <div>
        <img className="navbar-logo" src={logoMain} />
      </div>

      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link navbar-dropdown">
          Products
          <div className="dropdown-div">
            <Link className="dropdown-link" to="/products/fireFightingSystems">
              Fire Fighting Systems
            </Link>
            <Link className="dropdown-link" to="/products/solar">
              Solar
            </Link>
            <Link className="dropdown-link" to="/products/hvac">
              Hvac
            </Link>
            <Link className="dropdown-link" to="/products/storageTanks">
              Storage Tanks
            </Link>
          </div>
        </li>
        <li className="navbar-link navbar-dropdown">
          Services
          <div className="dropdown-div">
            <Link className="dropdown-link" to="/services/fireconsultancy">
              Fire consultancy
            </Link>
            <Link className="dropdown-link" to="/services/epcm">
              EPCM services
            </Link>
          </div>
        </li>
        <li className="navbar-link">
          <Link to="/Projects">Projects</Link>
        </li>
        <li className="navbar-link">
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

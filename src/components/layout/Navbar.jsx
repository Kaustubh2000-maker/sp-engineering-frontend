import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import logoMain from "@logos/logo-no-bg.png";
import { navVisible } from "../../animations/appAnimation";

function Navbar(props) {
  const location = useLocation();
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => setOverlayOpen(!overlayOpen);

  const navStyle = {
    style: {
      backgroundColor: "white",
      position: "relative",
    },
  };

  return (
    <>
      <motion.nav
        className="navbar"
        {...(props.firstEnter && location.pathname === "/" ? navVisible : {})}
        {...(location.pathname !== "/" ? navStyle : {})}
      >
        <div className="navbar-header">
          <img className="navbar-logo" src={logoMain} alt="Logo" />
          <div className="menu-btn" onClick={toggleOverlay}>
            ☰
          </div>
        </div>

        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link navbar-dropdown">
            Products
            <div className="dropdown-div">
              <Link
                className="dropdown-link"
                to="/products/fireFightingSystems"
              >
                Fire Fighting Systems
              </Link>
              <Link className="dropdown-link" to="/products/solar">
                Solar
              </Link>
              <Link className="dropdown-link" to="/products/hvac">
                HVAC
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
                Fire Consultancy
              </Link>
              <Link className="dropdown-link" to="/services/epcm">
                EPCM Services
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

      {overlayOpen && (
        <div className="overlay-menu">
          <div className="overlay-content">
            <span className="close-btn" onClick={toggleOverlay}>
              ×
            </span>
            <ul className="overlay-links">
              <li>
                <Link className="overlay-link--main" to="/">
                  Home
                </Link>
              </li>
              <li className="overlay-link">
                Products
                <div className="overlay-link-div">
                  <Link
                    className="overlay-link--sec"
                    to="/products/fireFightingSystems"
                  >
                    Fire Fighting
                  </Link>
                  <Link className="overlay-link--sec" to="/products/solar">
                    Solar
                  </Link>
                  <Link className="overlay-link--sec" to="/products/hvac">
                    HVAC
                  </Link>
                  <Link
                    className="overlay-link--sec"
                    to="/products/storageTanks"
                  >
                    Storage Tanks
                  </Link>
                </div>
              </li>
              <li className="overlay-link">
                Services
                <div className="overlay-link-div">
                  <Link
                    className="overlay-link--sec"
                    to="/services/fireconsultancy"
                  >
                    Fire Consultancy
                  </Link>
                  <Link className="overlay-link--sec" to="/services/epcm">
                    EPCM Services
                  </Link>
                </div>
              </li>
              <li>
                <Link className="overlay-link--main" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="overlay-link--main" to="/about">
                  About
                </Link>
              </li>
              <div className="overlay-buttons">
                <button className="navbar-btn signin-btn">Signup</button>
                <button className="navbar-btn login-btn">Login</button>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

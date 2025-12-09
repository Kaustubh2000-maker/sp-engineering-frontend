// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";

// import logoMain from "@logos/logo-no-bg.png";
// import { navVisible } from "../../animations/appAnimation";

// function Navbar(props) {
//   const location = useLocation();
//   const [overlayOpen, setOverlayOpen] = useState(false);

//   const toggleOverlay = () => setOverlayOpen(!overlayOpen);

//   const navStyle = {
//     style: {
//       backgroundColor: "white",
//       position: "relative",
//     },
//   };

//   return (
//     <>
//       <motion.nav
//         className="navbar"
//         // {...(props.firstEnter && location.pathname === "/" ? navVisible : {})}
//         // {...(location.pathname !== "/" ? navStyle : {})}
//         initial={
//           props.firstEnter && location.pathname === "/"
//             ? { opacity: 0, y: -20 }
//             : false
//         }
//         animate={
//           props.firstEnter && location.pathname === "/"
//             ? { opacity: 1, y: 0 }
//             : false
//         }
//         transition={
//           props.firstEnter && location.pathname === "/"
//             ? { duration: 0.5, delay: 3.5 }
//             : {}
//         }
//         style={
//           location.pathname !== "/"
//             ? { backgroundColor: "white", position: "relative" }
//             : undefined
//         }
//       >
//         <div className="navbar-header">
//           <img className="navbar-logo" src={logoMain} alt="Logo" />
//           <div className="menu-btn" onClick={toggleOverlay}>
//             ☰
//           </div>
//         </div>

//         <ul className="navbar-links">
//           <li className="navbar-link">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="navbar-link navbar-dropdown">
//             Products
//             <div className="dropdown-div">
//               <Link
//                 className="dropdown-link"
//                 to="/products/fireFightingSystems"
//               >
//                 Fire Fighting Systems
//               </Link>
//               <Link className="dropdown-link" to="/products/solar">
//                 Solar
//               </Link>
//               <Link className="dropdown-link" to="/products/hvac">
//                 HVAC
//               </Link>
//               <Link className="dropdown-link" to="/products/storageTanks">
//                 Storage Tanks
//               </Link>
//             </div>
//           </li>
//           <li className="navbar-link navbar-dropdown">
//             Services
//             <div className="dropdown-div">
//               <Link className="dropdown-link" to="/services/fireconsultancy">
//                 Fire Consultancy
//               </Link>
//               <Link className="dropdown-link" to="/services/epcm">
//                 EPCM Services
//               </Link>
//             </div>
//           </li>
//           <li className="navbar-link navbar-dropdown">
//             Industry Sectors
//             <div className="dropdown-div">
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/petrochemicals"
//               >
//                 Petrochemicals
//               </Link>
//               <Link className="dropdown-link" to="/IindustrySectors/fmcg">
//                 FMCG
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/oil-tank-protection"
//               >
//                 Oil tank protection
//               </Link>
//               <Link className="dropdown-link" to="/IindustrySectors/warehouses">
//                 Warehouses
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/aviation-hangers"
//               >
//                 Aviation & Hangers
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/pharmaceutical"
//               >
//                 PHARMACEUTICAL
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/helicopter-landing-pad"
//               >
//                 Helicopter landing pad
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/electrical-cabinet-protection"
//               >
//                 Electrical cabinet protection
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/archives-museums"
//               >
//                 Archives and museums
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/cable-tunnels"
//               >
//                 Cable tunnels
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/parking-areas"
//               >
//                 Parking areas
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/shopping-centres"
//               >
//                 Shopping centres
//               </Link>
//               <Link className="dropdown-link" to="/IindustrySectors/hotels">
//                 Hotels
//               </Link>
//               <Link
//                 className="dropdown-link"
//                 to="/IindustrySectors/office-buildings"
//               >
//                 Office buildings
//               </Link>
//             </div>
//           </li>
//           <li className="navbar-link">
//             <Link to="/Projects">Projects</Link>
//           </li>
//           <li className="navbar-link">
//             <Link to="/About">About Us</Link>
//           </li>
//         </ul>
//       </motion.nav>

//       {overlayOpen && (
//         <div className="overlay-menu">
//           <div className="overlay-content">
//             <span className="close-btn" onClick={toggleOverlay}>
//               ×
//             </span>
//             <ul className="overlay-links">
//               <li>
//                 <Link
//                   className="overlay-link--main"
//                   to="/"
//                   onClick={toggleOverlay}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="overlay-link">
//                 Products
//                 <div className="overlay-link-div">
//                   <Link
//                     className="overlay-link--sec"
//                     to="/products/fireFightingSystems"
//                     onClick={toggleOverlay}
//                   >
//                     Fire Fighting
//                   </Link>
//                   <Link
//                     className="overlay-link--sec"
//                     to="/products/solar"
//                     onClick={toggleOverlay}
//                   >
//                     Solar
//                   </Link>
//                   <Link
//                     className="overlay-link--sec"
//                     to="/products/hvac"
//                     onClick={toggleOverlay}
//                   >
//                     HVAC
//                   </Link>
//                   <Link
//                     className="overlay-link--sec"
//                     to="/products/storageTanks"
//                     onClick={toggleOverlay}
//                   >
//                     Storage Tanks
//                   </Link>
//                 </div>
//               </li>
//               <li className="overlay-link">
//                 Services
//                 <div className="overlay-link-div">
//                   <Link
//                     className="overlay-link--sec"
//                     to="/services/fireconsultancy"
//                     onClick={toggleOverlay}
//                   >
//                     Fire Consultancy
//                   </Link>
//                   <Link
//                     className="overlay-link--sec"
//                     to="/services/epcm"
//                     onClick={toggleOverlay}
//                   >
//                     EPCM Services
//                   </Link>
//                 </div>
//               </li>
//               <li>
//                 <Link
//                   className="overlay-link--main"
//                   to="/projects"
//                   onClick={toggleOverlay}
//                 >
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="overlay-link--main"
//                   to="/about"
//                   onClick={toggleOverlay}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               {/* <div className="overlay-buttons">
//                 <button className="navbar-btn signin-btn">Signup</button>
//                 <button className="navbar-btn login-btn">Login</button>
//               </div> */}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import logoMain from "@logos/logo-no-bg.png";

function Navbar(props) {
  const location = useLocation();

  const [overlayOpen, setOverlayOpen] = useState(false);
  const [industryOverlay, setIndustryOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
    setIndustryOverlay(false); // reset industry menu
  };

  const openIndustry = () => setIndustryOverlay(true);
  const closeIndustry = () => setIndustryOverlay(false);

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <motion.nav
        className="navbar"
        initial={
          props.firstEnter && location.pathname === "/"
            ? { opacity: 0, y: -20 }
            : false
        }
        animate={
          props.firstEnter && location.pathname === "/"
            ? { opacity: 1, y: 0 }
            : false
        }
        transition={
          props.firstEnter && location.pathname === "/"
            ? { duration: 0.5, delay: 3.5 }
            : {}
        }
        style={
          location.pathname !== "/"
            ? { backgroundColor: "white", position: "relative" }
            : undefined
        }
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

          <li className="navbar-link navbar-dropdown">
            Industry Sectors
            <div className="dropdown-div">
              <Link
                className="dropdown-link"
                to="/IindustrySectors/petrochemicals"
              >
                Petrochemicals
              </Link>
              <Link className="dropdown-link" to="/IindustrySectors/fmcg">
                FMCG
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/oil-tank-protection"
              >
                Oil tank protection
              </Link>
              <Link className="dropdown-link" to="/IindustrySectors/warehouses">
                Warehouses
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/aviation-hangers"
              >
                Aviation & Hangers
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/pharmaceutical"
              >
                Pharmaceutical
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/helicopter-landing-pad"
              >
                Helicopter landing pad
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/electrical-cabinet-protection"
              >
                Electrical cabinet protection
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/archives-museums"
              >
                Archives & Museums
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/cable-tunnels"
              >
                Cable tunnels
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/parking-areas"
              >
                Parking areas
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/shopping-centres"
              >
                Shopping centres
              </Link>
              <Link className="dropdown-link" to="/IindustrySectors/hotels">
                Hotels
              </Link>
              <Link
                className="dropdown-link"
                to="/IindustrySectors/office-buildings"
              >
                Office buildings
              </Link>
            </div>
          </li>

          <li className="navbar-link">
            <Link to="/Projects">Projects</Link>
          </li>

          <li className="navbar-link">
            <Link to="/About">About Us</Link>
          </li>
        </ul>
      </motion.nav>

      {/* ========= MAIN OVERLAY (MOBILE MENU) ======== */}
      {overlayOpen && !industryOverlay && (
        <div className="overlay-menu">
          <div className="overlay-content">
            <span className="close-btn" onClick={toggleOverlay}>
              ×
            </span>

            <ul className="overlay-links">
              <li>
                <Link
                  className="overlay-link--main"
                  to="/"
                  onClick={toggleOverlay}
                >
                  Home
                </Link>
              </li>

              <li className="overlay-link">
                Products
                <div className="overlay-link-div">
                  <Link
                    className="overlay-link--sec"
                    to="/products/fireFightingSystems"
                    onClick={toggleOverlay}
                  >
                    Fire Fighting
                  </Link>
                  <Link
                    className="overlay-link--sec"
                    to="/products/solar"
                    onClick={toggleOverlay}
                  >
                    Solar
                  </Link>
                  <Link
                    className="overlay-link--sec"
                    to="/products/hvac"
                    onClick={toggleOverlay}
                  >
                    HVAC
                  </Link>
                  <Link
                    className="overlay-link--sec"
                    to="/products/storageTanks"
                    onClick={toggleOverlay}
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
                    onClick={toggleOverlay}
                  >
                    Fire Consultancy
                  </Link>
                  <Link
                    className="overlay-link--sec"
                    to="/services/epcm"
                    onClick={toggleOverlay}
                  >
                    EPCM Services
                  </Link>
                </div>
              </li>

              {/* OPEN INDUSTRY SUBMENU */}
              <li
                className="overlay-link"
                onClick={openIndustry}
                style={{ cursor: "pointer" }}
              >
                Industry Sectors
              </li>

              <li>
                <Link
                  className="overlay-link--main"
                  to="/projects"
                  onClick={toggleOverlay}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="overlay-link--main"
                  to="/about"
                  onClick={toggleOverlay}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* ========= INDUSTRY SUB OVERLAY ========= */}
      {industryOverlay && (
        <div className="overlay-menu">
          <div className="overlay-content">
            <span className="close-btn" onClick={closeIndustry}>
              ×
            </span>

            <ul className="overlay-links" style={{ marginTop: "10rem" }}>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/petrochemicals"
                  onClick={toggleOverlay}
                >
                  Petrochemicals
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/fmcg"
                  onClick={toggleOverlay}
                >
                  FMCG
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/oil-tank-protection"
                  onClick={toggleOverlay}
                >
                  Oil tank protection
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/warehouses"
                  onClick={toggleOverlay}
                >
                  Warehouses
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/aviation-hangers"
                  onClick={toggleOverlay}
                >
                  Aviation & Hangers
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/pharmaceutical"
                  onClick={toggleOverlay}
                >
                  Pharmaceutical
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/helicopter-landing-pad"
                  onClick={toggleOverlay}
                >
                  Helicopter landing pad
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/electrical-cabinet-protection"
                  onClick={toggleOverlay}
                >
                  Electrical cabinet protection
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/archives-museums"
                  onClick={toggleOverlay}
                >
                  Archives & Museums
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/cable-tunnels"
                  onClick={toggleOverlay}
                >
                  Cable tunnels
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/parking-areas"
                  onClick={toggleOverlay}
                >
                  Parking areas
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/shopping-centres"
                  onClick={toggleOverlay}
                >
                  Shopping centres
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/hotels"
                  onClick={toggleOverlay}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  className="overlay-link--sec"
                  to="/IindustrySectors/office-buildings"
                  onClick={toggleOverlay}
                >
                  Office buildings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

import LandingPage from "./pages/LandingPage";
import WelcomeOverlay from "./components/sections/WelcomeOverlay";
import Navbar from "./components/layout/Navbar";

import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollTop";

import { delay, motion } from "framer-motion";
import { heroVisible, navVisible } from "./animations/appAnimation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsAndServicesPage from "./pages/ProductsAndServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
function App() {
  const [firstEnter, setfirstEnter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setfirstEnter(false);
    }, 5000);
  }, []);

  return (
    <>
      <Router>
        <Navbar firstEnter={firstEnter} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {firstEnter && <WelcomeOverlay />}
                <LandingPage firstEnter={firstEnter} />
              </>
            }
          />
          <Route
            path="/products/:category"
            element={<ProductsAndServicesPage />}
          />{" "}
          <Route
            path="/services/:category"
            element={<ProductsAndServicesPage />}
          />{" "}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

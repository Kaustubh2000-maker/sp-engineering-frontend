import LandingPage from "./pages/LandingPage";
import WelcomeOverlay from "./components/sections/WelcomeOverlay";
import Navbar from "./components/layout/Navbar"; // Import Navbar

import Footer from "./components/layout/Footer";

import { delay, motion } from "framer-motion";
import { heroVisible, navVisible } from "./animations/appAnimation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
                <LandingPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import LandingPage from "./pages/LandingPage";
import WelcomeOverlay from "./components/sections/WelcomeOverlay";
import Navbar from "./components/layout/Navbar"; // Import Navbar

import Footer from "./components/layout/Footer";

import { delay, motion } from "framer-motion";
import { heroVisible, navVisible } from "./animations/appAnimation";

function App() {
  return (
    <>
      {/* <WelcomeOverlay />
      <motion.div {...navVisible}>
        <Navbar />
      </motion.div>

      <motion.div {...heroVisible}>
        <LandingPage />
      </motion.div> */}
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;

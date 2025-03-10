import { motion } from "framer-motion";
import {
  overlayAnimation,
  logoTextWrapperAnimation,
  logoAnimation,
  textAnimation,
} from "../../animations/welcomePageAnimation";

function WelcomeOverlay() {
  return (
    <motion.div {...overlayAnimation} className="overlay-container">
      <motion.div
        // {...logoTextWrapperAnimation}
        className="logo-text-wrapper"
      >
        <motion.img
          src="/src/assets/logos/logo.png"
          alt="SP Engineering Logo"
          className="logo"
          {...logoAnimation}
        />
        <motion.h1 {...textAnimation} className="company-name">
          SP <br />
          Engineering <br />
          And <br />
          Services <br />
          <span>keep trust alive</span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default WelcomeOverlay;

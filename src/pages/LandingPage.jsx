import HeroSection from "@components/sections/HeroSection";
import LogosAndWhyUs from "@components/sections/LogosAndWhyUs";
import AboutUs from "@components/sections/AboutUs";
import WhyUs from "@components/sections/WhyUs";
import Projects from "@components/sections/Projects";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function LandingPage(props) {
  let firstEnter = props.firstEnter;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={firstEnter}
        exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      >
        <HeroSection firstEnter={firstEnter} />
        <AboutUs />
        <Projects />
        <WhyUs />
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPage;

import HeroSection from "@components/sections/HeroSection";
import LogosAndWhyUs from "@components/sections/LogosAndWhyUs";
import AboutUs from "@components/sections/AboutUs";
import WhyUs from "@components/sections/WhyUs";
import ProjectsSection from "@components/sections/ProjectsSection";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function LandingPage(props) {
  let firstEnter = props.firstEnter;
  return (
    <motion.div>
      <HeroSection firstEnter={firstEnter} />
      {/* <AboutUs />
      <ProjectsSection />
      <WhyUs /> */}
    </motion.div>
  );
}

export default LandingPage;

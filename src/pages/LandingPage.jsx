import HeroSection from "@components/sections/HeroSection";
import LogosAndWhyUs from "@components/sections/LogosAndWhyUs";
import AboutUs from "@components/sections/AboutUs";
import WhyUs from "@components/sections/WhyUs";
import Projects from "@components/sections/Projects";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Projects />
      <WhyUs />
      {/* <LogosAndWhyUs /> */}
    </>
  );
}

export default LandingPage;

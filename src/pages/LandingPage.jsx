import HeroSection from "@components/sections/HeroSection";
import LogosAndWhyUs from "@components/sections/LogosAndWhyUs";
import AboutUs from "@components/sections/AboutUs";
import WhyUs from "@components/sections/WhyUs";
import Projects from "@components/sections/Projects";

function LandingPage(props) {
  let firstEnter = props.firstEnter;
  return (
    <>
      <HeroSection firstEnter={firstEnter} />
      <AboutUs />
      <Projects />
      <WhyUs />
      {/* <LogosAndWhyUs /> */}
    </>
  );
}

export default LandingPage;

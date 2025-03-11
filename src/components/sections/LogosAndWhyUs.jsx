import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@hooks/useScrollAnimation";
import logo1 from "@logos/logo-no-bg.png";

function LogosAndWhyUs() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      <div className="container logos-and-whyus-section">
        <div className="logos-container">
          <h3 className="logos-container--heading">Projects in: </h3>
          <div className=" logos-div flex ">
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
          </div>
          <div className=" logos-div flex ">
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
          </div>
          <div className=" logos-div flex ">
            <img className="featured-logo" src={logo1} alt="" />
            <img className="featured-logo" src={logo1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default LogosAndWhyUs;

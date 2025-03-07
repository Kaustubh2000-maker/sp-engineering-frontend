import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence, delay } from "framer-motion";

import firefightinImage from "../assets/heroSection/hero-fire-fighting.jpg";
import solarImage from "../assets/heroSection/hero-solar-sun.jpg";
import energyImage from "../assets/heroSection/hero-energy-name-1.png";

const services = [
  {
    name: "fire",
    title: "Safeguarding Your Business with Expert",
    description:
      "Fire hazards don’t wait, and neither should you. Our expert fire protection solutions ensure safety, keeping your workplace, employees, and assets secure at all times.",
    image: firefightinImage,
    alignment: "center",
  },
  {
    name: "solar",
    title: "Your business Needs Our Energy",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    image: solarImage,
    alignment: "right",
  },
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeOut", delay: 0 },
        }}
      >
        <div
          className="hero-background"
          style={{
            backgroundImage: `${
              services[index].name === "fire"
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 70%)"
                : "linear-gradient(to left, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255,0 ) )"
            }, url(${services[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          key={index} // Updates only after exit completes
          className={`hero-content ${
            services[index].alignment === "center"
              ? "content-center"
              : services[index].alignment === "right"
              ? "content-right"
              : "content-left"
          }`}
        >
          <h1 className="hero-title">
            {services[index].name === "fire" ? (
              <>
                {services[index].title}
                <span style={{ color: "#af0000" }}>
                  <Typewriter
                    options={{
                      strings: ["[Fire Protection]"],
                      autoStart: true,
                      loop: true,
                      delay: 200,
                    }}
                  />
                </span>
              </>
            ) : services[index].name === "solar" ? (
              <>
                {services[index].title.replace("Energy", "")}
                <img src={energyImage} className="hero-energy-img" alt="" />
              </>
            ) : (
              services[index].title
            )}
          </h1>
          <p className="hero-description">{services[index].description}</p>

          <div className="hero-buttons">
            <button className="hero-button primary">Learn More</button>
            <button className="hero-button secondary">Contact Us</button>
          </div>
        </div>
        <div className=""></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HeroSection;

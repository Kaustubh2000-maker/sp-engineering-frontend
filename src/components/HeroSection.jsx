import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence, delay } from "framer-motion";

// import firefightinImage from "../assets/heroSection/hero-fire-fighting.jpg";
// import solarImage from "../assets/heroSection/hero-solar-sun.jpg";
import firefightinImage from "../assets/heroSection/11.jpg";
import solarImage from "../assets/heroSection/22.jpg";
import hvacImage from "../assets/heroSection/33.jpg";

import energyImage from "../assets/heroSection/hero-energy-name-1.png";

const services = [
  {
    name: "fire",
    title: "Safeguarding Your Business with Our Expert",
    description:
      "Fire hazards don’t wait, and neither should you. Our expert fire protection solutions ensure safety, keeping your workplace, employees, and assets secure at all times.",
    image: firefightinImage,
    alignment: "center",
  },
  // {
  //   name: "solar",
  //   title: "Your business Needs Our ",
  //   description:
  //     " Transition to solar and take control of your energy expenses. Our commercial solar solutions offer significant cost savings by harnessing clean and renewable power, making your business more energy-efficient and environmentally responsible",
  //   image: solarImage,
  //   alignment: "right",
  // },
  // {
  //   name: "hvac",
  //   title: "Optimized Climate Control for Industrial Environments",
  //   description:
  //     "Enhance productivity with our state-of-the-art industrial HVAC systems. Designed for factories, warehouses, and large facilities, our solutions provide efficient climate control and optimal air quality",
  //   image: hvacImage,
  //   alignment: "left",
  // },
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <AnimatePresence mode="wait">
        <motion.div
          className="hero-section--animate"
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut", delay: -0.1 },
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut", delay: 0 },
          }}
        >
          <div
            className="hero-background"
            // ${
            //   services[index].name === "fire"
            //     ? "radial-gradient(circle, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 70%)"
            //     : "linear-gradient(to left, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255,0 ) )"
            // },

            style={{
              backgroundImage: `url(${services[index].image})`,
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
                        delay: 150,
                      }}
                    />
                  </span>
                </>
              ) : services[index].name === "solar" ? (
                <>
                  {services[index].title}
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
        </motion.div>
      </AnimatePresence>
      <div className="hero-product-info">
        <div>LOGO</div>
        <div> info</div>
      </div>
    </div>
  );
}

export default HeroSection;

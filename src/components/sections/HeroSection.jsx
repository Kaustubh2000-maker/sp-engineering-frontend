import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SERVICES, ENERGY_IMAGE } from "@constants/heroServices";
import energyImage from "@assets/heroSection/hero-energy-name-1.png";

import {
  heroSectionAnimation,
  heroSolarSunAnimation,
} from "@animations/heroSectionAnimation";

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_SERVICES.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <AnimatePresence mode="wait">
        <motion.div
          className="hero-section--animate"
          key={index}
          {...heroSectionAnimation}
        >
          {/* Background Image */}
          <div
            className="hero-background"
            style={{
              backgroundImage: `url(${HERO_SERVICES[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Hero Content */}
          <div
            key={index}
            className={`hero-content ${
              HERO_SERVICES[index].alignment === "center"
                ? "content-center"
                : HERO_SERVICES[index].alignment === "right"
                ? "content-right"
                : "content-left"
            }`}
          >
            <h1 className="hero-title">
              {HERO_SERVICES[index].name === "fire" ? (
                <>
                  {HERO_SERVICES[index].title}
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
              ) : HERO_SERVICES[index].name === "solar" ? (
                <>
                  {HERO_SERVICES[index].title}
                  <img src={energyImage} className="hero-energy-img" alt="" />
                </>
              ) : (
                HERO_SERVICES[index].title
              )}
            </h1>

            {/* Description */}
            <p className="hero-description">
              {HERO_SERVICES[index].description}
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button
                className="hero-button primary"
                style={{ backgroundColor: `${HERO_SERVICES[index].color}` }}
              >
                {HERO_SERVICES[index].button.label}
              </button>
              <button className="hero-button secondary">Contact Us</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {HERO_SERVICES[index].name == "solar" && (
        <AnimatePresence mode="wait">
          <motion.div
            className="hero-solar-sun"
            key={index}
            {...heroSolarSunAnimation}
          ></motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default HeroSection;

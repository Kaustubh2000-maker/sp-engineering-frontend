import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SERVICES, ENERGY_IMAGE } from "@constants/heroServices";
import energyImage from "@assets/heroSection/hero-energy-name-1.png";

import {
  heroSectionAnimation,
  heroDataAnimation,
  heroSolarSunAnimation,
} from "@animations/heroSectionAnimation";

function HeroSection(props) {
  let firstEnter = props.firstEnter;
  console.log(props.firstEnter, "from hero");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_SERVICES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <AnimatePresence mode="wait">
        <motion.div
          className="hero-section--animate"
          key={index}
          {...heroSectionAnimation(firstEnter)}
        >
          {/* Background Image */}
          <motion.div
            className="hero-background"
            style={{
              backgroundImage: `url(${HERO_SERVICES[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>

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
            <motion.h1
              className="hero-title"
              {...heroDataAnimation(index === 0, firstEnter, "title")}
            >
              {HERO_SERVICES[index].name === "fire" ? (
                <>
                  {HERO_SERVICES[index].title}
                  <span style={{ color: "#af0000" }}>
                    <Typewriter
                      options={{
                        strings: ["[Fire Protection]"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
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
            </motion.h1>

            {/* Description */}
            <motion.p
              {...heroDataAnimation(index === 0, firstEnter, "text")}
              className="hero-description"
            >
              {HERO_SERVICES[index].description}
            </motion.p>

            <div className="hero-buttons">
              <motion.div
                {...heroDataAnimation(index === 0, firstEnter, "mainBtn")}
              >
                <button
                  className="hero-button primary"
                  style={{ backgroundColor: `${HERO_SERVICES[index].color}` }}
                >
                  {HERO_SERVICES[index].button.label}
                </button>
              </motion.div>

              <motion.div
                {...heroDataAnimation(index === 0, firstEnter, "secBtn")}
              >
                <button className="hero-button secondary">Contact Us</button>
              </motion.div>
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

      <motion.div
        className="hero-info-tab flex"
        {...heroDataAnimation(index === 0, firstEnter, "other")}
      >
        <div>
          <h3 className="hero-tab-heading">
            14 + <br />
            <span className="hero-tab--mini-heading">
              industry <br />
              Projects
            </span>
          </h3>
        </div>
        <div>
          <h3 className="hero-tab-heading">
            10+ <br />
            <span className="hero-tab--mini-heading">
              Happy <br />
              Clients
            </span>
          </h3>
        </div>
        <div>
          <h3 className="hero-tab-heading">
            5+ <br />
            <span className="hero-tab--mini-heading">
              Years of <br />
              Experience
            </span>
          </h3>
        </div>
      </motion.div>

      {/* <div className="hero-quote-div"></div> */}
      {/* <div className="line div"></div> */}
    </div>
  );
}

export default HeroSection;

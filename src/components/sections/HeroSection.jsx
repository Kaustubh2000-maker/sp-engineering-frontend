import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SERVICES, ENERGY_IMAGE } from "@constants/heroServices";
import energyImage from "@assets/heroSection/hero-energy-name-1.png";

import {
  heroSectionAnimation,
  heroDataAnimation,
  heroBgAnimation,
} from "@animations/heroSectionAnimation";

import { nrmlVisible } from "@animations/appAnimation";

function HeroSection(props) {
  let firstEnter = props.firstEnter;

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
          {...heroBgAnimation()}
          key={index}
          className={`hero-bg-div ${
            HERO_SERVICES[index].name === "fire"
              ? "fire-bg"
              : HERO_SERVICES[index].name === "solar"
              ? "solar-bg"
              : HERO_SERVICES[index].name === "hvac"
              ? "hvac-bg"
              : null
          }`}
        >
          {HERO_SERVICES[index].name === "solar" ? (
            <img
              src={HERO_SERVICES[index].image[1]}
              className="hero-solar-bg-blob"
            />
          ) : null}
          {HERO_SERVICES[index].name === "hvac" ? (
            <img
              src={HERO_SERVICES[index].image[3]}
              className="hero-hvac-bg-blob"
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
      <div className="hero-grid">
        <motion.div className={`hero-content`}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="hero-title"
              {...heroDataAnimation(index === 0, firstEnter, "title")}
            >
              {HERO_SERVICES[index].name === "fire" ? (
                <>
                  {HERO_SERVICES[index].title}
                  <span style={{ color: "#af0000" }}>
                    <Typewriter
                      options={{
                        strings: ["Fire Protection"],
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
                  <span style={{ color: "#21549c" }}>
                    <Typewriter
                      options={{
                        strings: ["Solar Energy"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                      }}
                    />
                  </span>
                </>
              ) : (
                HERO_SERVICES[index].title
              )}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              {...heroDataAnimation(index === 0, firstEnter, "text")}
              className="hero-description"
            >
              {HERO_SERVICES[index].description}
            </motion.p>
          </AnimatePresence>

          <div className="hero-buttons">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                {...heroDataAnimation(index === 0, firstEnter, "mainBtn")}
              >
                <button
                  className="hero-button primary"
                  style={{ backgroundColor: `${HERO_SERVICES[index].color}` }}
                >
                  {HERO_SERVICES[index].button.label}
                </button>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                {...heroDataAnimation(index === 0, firstEnter, "secBtn")}
              >
                <button className="hero-button secondary">Contact Us</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="hero-img-div">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              className="hero-img hero-img--1"
              src={HERO_SERVICES[index].image[0]}
              alt=""
              {...heroDataAnimation(index === 0, firstEnter, "secBtn")}
            />
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="hero-info-tab"
            {...heroDataAnimation(index === 0, firstEnter, "other")}
          >
            <div className="hero-info">
              <h3 className="hero-info-head">500+</h3>
              <span className="hero-info-sub">
                {" "}
                industry <br /> projects
              </span>
            </div>
            <div className="hero-info">
              <h3 className="hero-info-head">380+</h3>
              <span className="hero-info-sub">
                {" "}
                happy <br /> clients
              </span>
            </div>
            <div className="hero-info">
              <h3 className="hero-info-head">14+</h3>
              <span className="hero-info-sub">
                {" "}
                Years of <br /> Experience
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSection;

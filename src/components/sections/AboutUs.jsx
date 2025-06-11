import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import aboutImage from "@assets/about/about-2.png";
import a11 from "@assets/about/a11.webp";
import a22 from "@assets/about/a22.webp";
import aboutLogo from "@assets/logos/logo.png";

import {
  aboutHeading,
  aboutText,
  aboutBullet,
  aboutBulletLine,
  aboutImg,
  aboutImg_1,
  aboutImg_2,
} from "@animations/aboutAnimation.js";

function AboutUs() {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="aboutUs-section">
          <div className="about-grid container grid ">
            {/* <motion.div className="about-image-div " {...aboutImg}>
            <img src={aboutImage} alt="" className="about-img" />
          </motion.div> */}
            <div className="about-img-div">
              <div>
                <motion.img
                  src={a11}
                  alt=""
                  className="about-img about-img--1"
                  {...aboutImg_1}
                />
              </div>
              <div>
                <motion.img
                  src={a22}
                  alt=""
                  className="about-img about-img--2"
                  {...aboutImg_2}
                />
              </div>
            </div>
            <div className="about-data">
              <motion.h3 className="about-heading" {...aboutHeading}>
                About{" "}
                <img className="about-heading-logo" src={aboutLogo} alt="" />{" "}
                <br />
                SP Engineering
              </motion.h3>
              <div className="about-topics-div">
                <motion.li {...aboutBullet(0)}></motion.li>
                <div className="about-topic-block">
                  <motion.h4
                    className="about-subtopic-heading"
                    {...aboutText(0)}
                  >
                    Expertise Across Multiple Sectors
                  </motion.h4>
                  <motion.p className="about-subtopic-text" {...aboutText(0.1)}>
                    We specialize in fire safety, solar energy, and HVAC
                    solutions, delivering tailored installations for
                    residential, commercial, and industrial needs.
                  </motion.p>
                </div>

                <motion.li {...aboutBullet(0.2)}></motion.li>
                <div className="about-topic-block">
                  <motion.h4
                    className="about-subtopic-heading"
                    {...aboutText(0.2)}
                  >
                    Innovation & Uncompromising Quality
                  </motion.h4>
                  <motion.p className="about-subtopic-text" {...aboutText(0.3)}>
                    Utilizing cutting-edge technology and premium materials, we
                    engineer solutions that stand the test of time. From
                    advanced fire suppression systems to high-efficiency solar
                    and HVAC installations
                  </motion.p>
                </div>

                <motion.li {...aboutBullet(0.4)}></motion.li>
                <div className="about-topic-block">
                  <motion.h4
                    className="about-subtopic-heading"
                    {...aboutText(0.4)}
                  >
                    Customer-Centric Approach & Reliability
                  </motion.h4>
                  <motion.p className="about-subtopic-text" {...aboutText(0.5)}>
                    At SP Engineering, your safety and satisfaction come first.
                    We provide customized, cost-effective solutions, ensuring
                    on-time project completion.
                  </motion.p>
                </div>

                <motion.div
                  {...aboutBulletLine()}
                  className="about-bullet-line"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default AboutUs;

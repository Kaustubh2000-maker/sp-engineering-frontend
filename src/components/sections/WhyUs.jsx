import React from "react";
import { motion } from "framer-motion";
import {
  whyUsText,
  whyUsBannerSecText,
  whyUsBannercircle,
} from "@animations/whyusAnimation";

function WhyUs() {
  return (
    <>
      <div className="whyus-section">
        <div className="container whyus-grid">
          <div className="whyus-banner">
            <div className="whyus-banner-text">
              <motion.h4 {...whyUsText("head", 0.2)}>
                Building Excellence with Unmatched Expertise
              </motion.h4>
              <motion.p {...whyUsText("text", 0.2)}>
                With a commitment to quality and innovation, we deliver top-tier
                solutions. Our dedicated team ensures precision, reliability,
                and client satisfaction in every project we undertake.
              </motion.p>
            </div>
            {/* ////////////////////// */}
            <div className="whyus-banner-secondary">
              <div className="whyus-b-sec-div">
                <motion.h5 {...whyUsBannerSecText} className="whyus-b-sec-head">
                  10 yrs+{" "}
                </motion.h5>
                <motion.p {...whyUsBannerSecText} className="whyus-b-sec-text">
                  Industry Experience
                </motion.p>
                <motion.div {...whyUsBannercircle("left")}></motion.div>
              </div>
              <div className="whyus-b-sec-div">
                <motion.h5 {...whyUsBannerSecText} className="whyus-b-sec-head">
                  100 Cr+
                </motion.h5>
                <motion.p {...whyUsBannerSecText} className="whyus-b-sec-text">
                  Project Value{" "}
                </motion.p>
                <motion.div {...whyUsBannercircle("center")}></motion.div>
              </div>
              <div className="whyus-b-sec-div">
                <motion.h5 {...whyUsBannerSecText} className="whyus-b-sec-head">
                  100+
                </motion.h5>
                <motion.p {...whyUsBannerSecText} className="whyus-b-sec-text">
                  Satisfied Clients
                </motion.p>
                <motion.div {...whyUsBannercircle("right")}></motion.div>
              </div>
            </div>
          </div>
          <div className="whyus-heading-cards"></div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;

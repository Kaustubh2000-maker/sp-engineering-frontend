import React from "react";
import { motion } from "framer-motion";
import {
  whyUsText,
  whyUsBannerSecText,
  whyUsBannercircle,
  whyUsCard,
} from "@animations/whyusAnimation";

import whyusbg from "./../../assets/whyUs/bl-gradient.png";

function WhyUs() {
  return (
    <>
      <div className="whyus-section">
        <div className="container whyus-grid">
          <div className="whyus-banner">
            <div className="whyus-banner-bg">
              <img src={whyusbg} className="whyus-banner-bg-img" alt="" />
            </div>
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
          <div className="whyus-heading-cards">
            <motion.h1 className="whyus-heading" {...whyUsText("head", 0.2)}>
              Why you must join with us ?
            </motion.h1>

            <motion.div className="whyus-card" {...whyUsCard()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 whyus-card-icon whyus-card-icon-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <h4 className="whyus-card-title">High-Quality Products</h4>
              <p className="whyus-card-description">
                We ensure top-grade materials and stringent quality checks for
                every installation.
              </p>
            </motion.div>

            <motion.div className="whyus-card" {...whyUsCard()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 whyus-card-icon whyus-card-icon-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>

              <h4 className="whyus-card-title">Proven Track Record</h4>
              <p className="whyus-card-description">
                Trusted by businesses across industries for delivering
                consistent, reliable results.
              </p>
            </motion.div>

            <motion.div className="whyus-card" {...whyUsCard()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 whyus-card-icon whyus-card-icon-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <h4 className="whyus-card-title">End-to-End Project Support</h4>
              <p className="whyus-card-description">
                From planning to execution, we ensure seamless project
                management and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;

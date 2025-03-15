// src/animations/welcomePageAnimation.js

import { animate, delay, time, transform } from "framer-motion";

export const overlayAnimation = {
  initial: { opacity: 1, y: 0 }, // Start fully visible at normal position
  animate: {
    opacity: [1, 0], // First fades out
    y: [0, -5000], // Then moves up
    transition: {
      opacity: { duration: 0.5, delay: 3.5, ease: "easeInOut" }, // Fades out first
      y: { duration: 0.1, delay: 4, ease: "easeInOut" }, // Moves up after fade
    },
  },
};

export const logoTextWrapperAnimation = {
  // initial: { x: 0, y: 0, scale: 1 },
  // animate: {
  //   scale: 0.48,
  //   x: "-35.7vw",
  //   y: "-45.2vh",
  //   opacity: 1,
  //   transition: { duration: 1.5, delay: 2.5, ease: "easeInOut" },
  // },
};

export const logoAnimation = {
  initial: { opacity: 0, scale: 0.5, y: 50 },
  animate: {
    opacity: [0, 1, 1],
    scale: [0, 1.1, 1],
    y: [50, 0, 0],
    transition: {
      duration: 2,
      delay: 1,
      ease: ["easeInOut", "easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
    },
  },
};

export const textAnimation = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: [0, 1, 1],
    scale: [0.95, 1, 0.95],
    x: [-30, 0, 0],
    transition: {
      duration: 2,
      delay: 1,
      ease: ["easeInOut", "easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
    },
  },
};

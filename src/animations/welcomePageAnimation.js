// src/animations/welcomePageAnimation.js

export const overlayAnimation = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 0.5, delay: 3, ease: "easeInOut" },
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
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
  },
};

export const textAnimation = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn", delay: 1.5 },
  },
};

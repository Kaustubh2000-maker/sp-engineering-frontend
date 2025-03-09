// src/animations/welcomePageAnimation.js

export const overlayAnimation = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 1, delay: 6.2, ease: "easeInOut" },
  },
};

export const logoTextWrapperAnimation = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    scale: 0.48,
    x: "-35.7vw",
    y: "-45.2vh",
    opacity: 1,
    transition: { duration: 1.5, delay: 4, ease: "easeInOut" },
  },
};

export const logoAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 1 },
  },
};

export const textAnimation = {
  initial: { x: -45, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1 },
  },
};

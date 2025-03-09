// src/animations/heroSectionAnimation.js

export const heroSectionAnimation = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: -0.1 },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0 },
  },
};

export const heroSolarSunAnimation = {
  initial: { left: 10, opacity: 0 },
  animate: {
    left: 430,
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

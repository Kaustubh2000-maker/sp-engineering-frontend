import { delay } from "framer-motion";

export const aboutHeading = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, delay: 0, ease: "easeIn" },
  },
  viewport: { once: true, amount: 0.5 },
};

export const aboutImg = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  viewport: { once: true, amount: 0.4 },
};

// export const aboutImg_1 = {
//   initial: { opacity: 0 },
//   whileInView: {
//     opacity: 1,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
//   viewport: { once: true, amount: 1 },
// };
// export const aboutImg_2 = {
//   initial: { opacity: 0, scale: 0 },
//   whileInView: {
//     opacity: [0, 0.5, 1],
//     scale: [0, 1.05, 1],
//     transition: { duration: 3, ease: "easeInOut", times: [0, 0.4, 1] },
//   },
//   viewport: { once: true, amount: 1 },
// };

export const aboutImg_1 = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }, // Shorter & smooth
  },
  viewport: { once: true, amount: 0.5 }, // Detect earlier to prevent lag
};

export const aboutImg_2 = {
  initial: { opacity: 0, scale: 0.8 }, // Start closer to final state
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" }, // Faster, no unnecessary steps
  },
  viewport: { once: true, amount: 0.6 }, // Prevent unnecessary re-renders
};

export const aboutText = (delayAni) => ({
  initial: {
    y: 20,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.5, delay: 0 + delayAni, ease: "easeInOut" },
  },
  viewport: { once: true, amount: 0.5 },
});

export const aboutBullet = (delayAni = 0.2) => ({
  initial: {
    scale: 0,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    scale: 1,

    transition: { duration: 1, delay: 0 + delayAni, ease: "easeInOut" },
  },
  viewport: { once: true, amount: 0.5 },
});

export const aboutBulletLine = (delayAni = 0) => ({
  initial: {
    // scale: 0,
    height: 0,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    height: "76%",
    // scale: 1,

    transition: { duration: 2, delay: 0 + delayAni, ease: "easeInOut" },
  },
  viewport: { once: true, amount: 0.5 },
});

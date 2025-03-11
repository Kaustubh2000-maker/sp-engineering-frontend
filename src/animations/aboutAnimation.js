import { delay } from "framer-motion";

export const aboutHeading = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, delay: 0, ease: "easeIn" },
  },
  viewport: { once: true, amount: 1 },
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

export const aboutText = (delayAni) => ({
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.5, delay: 0 + delayAni, ease: "easeInOut" },
  },
  viewport: { once: true, amount: 1 },
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
  viewport: { once: true, amount: 1 },
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
  viewport: { once: true, amount: 1 },
});

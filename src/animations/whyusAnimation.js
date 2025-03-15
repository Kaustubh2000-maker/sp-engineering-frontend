import { delay } from "framer-motion";

export const whyUsText = (type = "text", delay) => ({
  initial: { opacity: 0, y: type == "head" ? -20 : 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay: delay, duration: 0.5, delay: 0.2 },
  },
  viewport: { once: true, amount: 0.5 },
});

export const whyUsBannerSecText = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
  },
  viewport: { once: true, amount: 0.5 },
};

export const whyUsBannercircle = (type) => ({
  initial: {
    opacity: 0,
    x: type == "left" ? 50 : type == "center" ? 0 : type == "right" ? -50 : 0,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  },
  viewport: { once: true, amount: 0.5 },
});

export const whyUsCard = () =>
  // type

  ({
    initial: {
      opacity: 0,
      // x: type == "left" ? 50 : type == "center" ? 0 : type == "right" ? -50 : 0,
    },
    whileInView: {
      opacity: 1,
      // x: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
    },
    viewport: { once: true, amount: 0.5 },
  });

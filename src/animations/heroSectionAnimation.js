import { animate, delay } from "framer-motion";

export const heroSectionAnimation = {
  initial: { opacity: 0, scale: 1.05 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
};

export const heroDataAnimation = (index, firstRender, type) => {
  const baseDelay = firstRender ? 4 : 0.1; // 5s if first, else 0.3s
  const delayMap = {
    title: baseDelay, // 5s (first) or 0.3s (next)
    other: baseDelay,
    text: baseDelay + 0.2, // 5.3s (first) or 0.6s (next)
    mainBtn: baseDelay + 0.3, // 5.6s (first) or 0.9s (next)
    secBtn: baseDelay + 0.4, // 5.9s (first) or 1.2s (next)
  };

  return {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delayMap[type] || baseDelay, // Fallback for unknown types
        ease: "easeInOut",
      },
    },
  };
};

export const heroSolarSunAnimation = {
  initial: { left: 10, opacity: 0 },
  animate: {
    left: 430,
    opacity: 1,
    transition: { duration: 7, delay: 1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

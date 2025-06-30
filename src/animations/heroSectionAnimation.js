import { animate, delay } from "framer-motion";

export const heroSectionAnimation = (firstEnter) => ({
  initial: { opacity: 0, scale: 1.05 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: firstEnter ? 4 : 0 },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
});
export const heroDataAnimation = (index, firstRender, type) => {
  const baseDelay = firstRender ? 4 : 0; // 4s if first, else 0
  const delayMap = {
    title: baseDelay,
    other: baseDelay,
    text: baseDelay + 0.2,
    mainBtn: baseDelay + 0.3,
    secBtn: baseDelay + 0.4,
  };

  return {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delayMap[type] || baseDelay,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
};

export const navVisible = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 3.5 } },
};

export const heroVisible = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 4 } },
};

export const nrmlScaleUp = (delay, opacity) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1, delay } },
  viewport: { once: true, amount: 0.5 },
});

export const nrmlVisible = (delay) => ({
  initial: { opacity: 0, y: 0 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1, delay } },
  viewport: { once: true, amount: 0.5 },
});

export const nrmlLeft = (delay) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 1, delay } },
  viewport: { once: true, amount: 0.5 },
});

export const nrmlRight = (delay) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 1, delay } },
  viewport: { once: true, amount: 0.5 },
});

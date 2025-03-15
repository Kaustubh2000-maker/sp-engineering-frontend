export const projectCard = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1, delay } },
  viewport: { once: true, amount: 0.5 },
});

export const projectText = (type = "head1") => {
  const delay =
    type == "head1"
      ? 0.2
      : type == "head2"
      ? 0.4
      : type == "head3"
      ? 0.6
      : type == "sub1"
      ? 0.3
      : type == "sub2"
      ? 0.6
      : type == "sub3"
      ? 0.9
      : 0;

  // sub1,2,3 is also give to more button in projects
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    viewport: { once: true, amount: 0.5 },
  };
};

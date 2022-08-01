export const fadeIn = {
  hidden: { x: -1300 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const title = {
  hidden: { x: 2300 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 5,
      delayChildren: 2,
    },
  },
};

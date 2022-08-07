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

export const logos = {
  hidden: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const heading = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 },
  },
};

export const quote = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 3, delay: 3 },
};

export const links = {
  initial: {},
  animate: {
    backgroundColor: "red",
  },
};

export const burgerlinks = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -1000,
  },
  transition: { duration: 1 },
};

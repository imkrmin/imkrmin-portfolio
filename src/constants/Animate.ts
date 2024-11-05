export const SLIDER_VARIANTS = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 30,
    },
  },
};

export const ABOUT_VARIANTS = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const PROJECT_VARIANTS = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

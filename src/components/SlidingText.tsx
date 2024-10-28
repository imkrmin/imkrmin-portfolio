"use client";

import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 20,
    },
  },
};

const SlidingText = () => {
  return (
    <div className="relative overflow-hidden h-full">
      <motion.div
        className="absolute font-snow text-[30vh] -bottom-[40px] whitespace-nowrap text-[#c0c0c0] opacity-30 w-[50%]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer Im Joo Min
      </motion.div>
    </div>
  );
};

export default SlidingText;

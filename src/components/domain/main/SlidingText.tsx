"use client";

import { SLIDER_VARIANTS } from "@/constants/Animate";
import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <div className="relative overflow-hidden h-[380px]">
      <motion.div
        className="absolute font-snow text-[200px] -bottom-[40px] whitespace-nowrap text-white opacity-10 w-[50%]"
        variants={SLIDER_VARIANTS}
        initial="initial"
        animate="animate"
      >
        Front-End Developer Im Joo Min
      </motion.div>
    </div>
  );
};

export default SlidingText;

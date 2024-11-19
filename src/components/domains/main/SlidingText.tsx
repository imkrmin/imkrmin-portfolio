"use client";

import { SLIDER_VARIANTS } from "@/constants/animate";
import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <div className="relative overflow-hidden h-[350px] tablet:max-h-[300px] mobile:max-h-[250px]">
      <motion.div
        className="absolute font-snow text-[200px] mobile:text-[100px] -bottom-[40px] tablet:bottom-0 mobile:bottom-0 whitespace-nowrap text-[#FAFAF9] opacity-10 w-[50%]"
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

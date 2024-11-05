"use client";

import { motion } from "framer-motion";
import { IoMdArrowDropupCircle } from "react-icons/io";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 cursor-pointer"
    >
      <IoMdArrowDropupCircle size={60} />
    </motion.div>
  );
};

export default ScrollToTopButton;

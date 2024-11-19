"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { UP_VARIANTS } from "@/constants/animate";
import Introduce from "@/components/domains/about/Introduce";
import TechStacks from "@/components/domains/about/TechStacks";

export default function AboutPage() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={UP_VARIANTS}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      className="flex flex-col w-full h-full gap-[120px] relative"
    >
      <Introduce />
      <TechStacks />
    </motion.section>
  );
}

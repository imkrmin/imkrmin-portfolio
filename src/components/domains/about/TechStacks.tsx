"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TechStacks = () => {
  return (
    <div className="flex flex-col w-full h-full gap-10 mb-20">
      <div className="flex flex-col gap-2 mobile:text-center">
        <h1 className="font-bold text-4xl">Tech Stacks & Tools</h1>
        <span>아래 기술과 도구들을 사용할 수 있습니다.</span>
      </div>
      <div className="flex flex-wrap w-full mobile:justify-center items-center gap-5">
        {[
          "Html",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "React",
          "CSS",
          "Tailwind.css",
          "Zustand",
          "MongoDB",
          "Postman",
          "GitHub",
          "Figma",
          "Notion",
        ].map((item: string, index: number) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-[#171717] w-full max-w-[100px] mobile:max-w-[70px] h-full max-h-[120px] mobile:max-h-[90px] p-4 rounded-[10px]"
          >
            <Image
              src={`/icons/stacks/${item}.svg`}
              alt={`${item}`}
              width={50}
              height={50}
            />
            <span className="font-semibold text-center mobile:text-[12px]">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;

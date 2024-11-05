"use client";

import SlidingText from "./SlidingText";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HEADER_ICONS } from "@/constants/Icons";
import { motion } from "framer-motion";
import CustomTooltip from "../../common/CustomTooltip";
import Link from "next/link";

const Header = () => {
  const renderIcons = () =>
    HEADER_ICONS.map((icon, index) => (
      <CustomTooltip key={index} text={icon.tooltipText}>
        <Link href={icon.href}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className="cursor-pointer"
          />
        </Link>
      </CustomTooltip>
    ));

  return (
    <section className="flex flex-col bg-header bg-cover animate-gradient-move">
      <div className="flex w-full h-full justify-center items-center gap-[85px]">
        {renderIcons()}
      </div>
      <SlidingText />
      <div className="flex justify-center mb-2">
        <MdKeyboardDoubleArrowDown className="text-white w-12 h-12 animate-bounce" />
      </div>
    </section>
  );
};

export default Header;

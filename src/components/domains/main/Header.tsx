"use client";

import SlidingText from "./SlidingText";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HEADER_ICONS } from "@/constants/icons";
import { motion } from "framer-motion";
import CustomTooltip from "../../common/CustomTooltip";
import Link from "next/link";
import { THeaderIcons } from "@/types/icons";

const Header = () => {
  const renderIcons = () =>
    HEADER_ICONS.map((icon: THeaderIcons, index) => (
      <CustomTooltip key={index} text={icon.tooltipText}>
        {icon.isExternal ? (
          <a
            href={icon.href}
            target={icon.target}
            rel={icon.rel}
            className="cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
            />
          </a>
        ) : (
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
        )}
      </CustomTooltip>
    ));

  return (
    <div className="sticky top-0 flex flex-col bg-header bg-cover animate-gradient-move h-screen tablet:max-h-[800px] mobile:max-h-[300px]">
      <div className="flex w-full mobile:px-5 h-full justify-center items-center gap-[85px] tablet:gap-[20px]">
        {renderIcons()}
      </div>
      <SlidingText />
      <div className="flex justify-center mb-2">
        <MdKeyboardDoubleArrowDown className="text-white w-12 h-12 mobile:w-8 mobile:h-8 animate-bounce" />
      </div>
    </div>
  );
};

export default Header;

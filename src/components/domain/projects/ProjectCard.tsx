"use client";

import ProjectModal from "@/components/common/modal/ProjectModal";
import Tag from "@/components/common/Tag";
import useOpenToggle from "@/hooks/useOpenToggle";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = () => {
  const { isOpen, openToggle } = useOpenToggle();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
      className="flex flex-col overflow-hidden w-full h-[450px] cursor-pointer bg-[#404040] rounded-[10px]"
      onClick={openToggle}
    >
      <Image
        src={"/images/profileimg.jpg"}
        alt={"프로젝트 이미지"}
        width={350}
        height={200}
        className="w-full h-[280px] object-cover opacity-80"
      />
      <div className="relative flex flex-col p-5 gap-1">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[#FAFAF9] text-[22px]">{"캘로그"}</h1>
          <Tag label="Team" />
        </div>
        <span className="font-medium text-[14px]">{"2024-07 ~ 현재"}</span>
        <span className="font-medium text-[14px] truncate whitespace-nowrap">
          {
            "구글 캘린더와 쓰레드를 모티브로 만든 캘린더 기반 커뮤니티 플랫폼 API 사이드 프로젝트"
          }
        </span>
        <div className="flex items-center gap-3 mt-4">
          {["Html", "JavaScript", "TypeScript", "Next.js"].map(skill => (
            <Image
              key={skill}
              src={`/icons/${skill}.svg`}
              alt={`${skill}`}
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
      {isOpen && <ProjectModal onClose={openToggle} />}
    </motion.div>
  );
};

export default ProjectCard;

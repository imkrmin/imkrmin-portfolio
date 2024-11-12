"use client";

import ProjectModal from "@/components/common/modal/ProjectModal";
import Tag from "@/components/common/Tag";
import useOpenToggle from "@/hooks/useOpenToggle";
import { motion } from "framer-motion";
import { TProjectData } from "@/types/Projects";
import Image from "next/image";

const ProjectCard = ({ project }: { project: TProjectData }) => {
  const { isOpen, openToggle, setIsOpen } = useOpenToggle();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
      className="flex flex-col overflow-hidden w-full h-[450px] cursor-pointer bg-[#404040] rounded-[10px]"
      onClick={openToggle}
    >
      <Image
        src={`/images/projects/${project.images[0]}.jpg`}
        alt={"프로젝트 이미지"}
        width={350}
        height={200}
        className="w-full h-[280px] opacity-80"
      />
      <div className="relative flex flex-col p-5 gap-1">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[#FAFAF9] text-[22px]">
            {project.name}
          </h1>
          <Tag label={project.category} />
        </div>
        <span className="font-medium text-[14px]">{project.term}</span>
        <span className="font-medium text-[14px] truncate whitespace-nowrap">
          {project.description}
        </span>
        <div className="flex items-center gap-3 mt-4">
          {project.techStacks.map((skill, skillIndex) => (
            <Image
              key={skillIndex}
              src={`/icons/stacks/${skill}.svg`}
              alt={`${skill}`}
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </motion.div>
  );
};

export default ProjectCard;

"use client";

import Filter from "@/components/domains/projects/Filter";
import ProjectCard from "@/components/domains/projects/ProjectCard";
import { SIDE_VARIANTS } from "@/constants/animate";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/constants/projectData";
import { useEffect, useRef, useState } from "react";
import { TFilter, TProjectData } from "@/types/projects";

export default function ProjectsPage() {
  const [selectFilter, setSelectFilter] = useState<TFilter>("All");

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

  const filteredProjects = ProjectData.filter(
    project => selectFilter === "All" || project.category === selectFilter
  );

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={SIDE_VARIANTS}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      className="flex flex-col items-center w-full h-full gap-10 mb-40"
    >
      <Filter
        selectFilter={selectFilter}
        onFilterChange={(filter: TFilter) => setSelectFilter(filter)}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectFilter ? selectFilter : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 w-full h-[950px] tablet:h-auto gap-10 px-5"
        >
          {filteredProjects.map((project: TProjectData, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

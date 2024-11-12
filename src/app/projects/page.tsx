"use client";

import Filter from "@/components/domain/projects/Filter";
import ProjectCard from "@/components/domain/projects/ProjectCard";
import { PROJECT_VARIANTS } from "@/constants/Animate";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/constants/ProjectData";
import { useEffect, useRef, useState } from "react";

export type TFilter = "All" | "Team" | "Solo";

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

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={PROJECT_VARIANTS}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      className="flex flex-col w-full h-full max-h-[1200px] gap-10"
    >
      <Filter
        selectFilter={selectFilter}
        onFilterChange={(filter: TFilter) => setSelectFilter(filter)}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectFilter ? selectFilter : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 mobile:grid-cols-1 w-full h-auto gap-10"
          >
            {ProjectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.section>
  );
}

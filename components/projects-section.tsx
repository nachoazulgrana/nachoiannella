"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

const delays = [
  "animation-delay-400",
  "animation-delay-500",
  "animation-delay-600",
  "animation-delay-700",
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-16">
      <h2 className="animate-fade-in-up animation-delay-300 mb-10 text-2xl font-bold text-foreground">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => setSelectedProject(project)}
            animationDelay={delays[index] || ""}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

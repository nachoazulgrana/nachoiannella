"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  teamSize?: number;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              {project.company}
            </span>
            <span className="text-sm text-border">|</span>
            <span className="text-sm text-muted-foreground">
              {project.role}
            </span>
            <span className="text-sm text-border">|</span>
            <span className="text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-foreground">
            {project.title}
          </h2>

          {/* Team size */}
          {project.teamSize && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
              Team of {project.teamSize} designers
            </div>
          )}

          {/* Description */}
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="mb-6 grid grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

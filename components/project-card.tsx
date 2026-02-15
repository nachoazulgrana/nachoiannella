"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  company: string;
  role: string;
  year: string;
  image: string;
  alt: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
  onClick: () => void;
  animationDelay?: string;
}

export function ProjectCard({
  title,
  company,
  role,
  year,
  image,
  alt,
  summary,
  tags,
  metrics,
  featured,
  onClick,
  animationDelay = "",
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={`animate-fade-in-up ${animationDelay} group w-full cursor-pointer rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:border-muted-foreground/30 hover:shadow-lg hover:shadow-black/10 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        {featured && (
          <div className="absolute top-4 left-4 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            Currently Leading
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {company}
          </span>
          <span className="text-xs text-border">|</span>
          <span className="text-xs text-muted-foreground">{role}</span>
          <span className="text-xs text-border">|</span>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>

        {/* Metrics preview */}
        <div className="mb-4 flex flex-wrap gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="font-display text-xl font-bold text-foreground">
                {metric.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

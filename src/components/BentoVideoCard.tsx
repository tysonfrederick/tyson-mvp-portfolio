"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/data";

type BentoVideoCardProps = {
  project: Project;
};

export default function BentoVideoCard({ project }: BentoVideoCardProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const invertFallback = project.imagePath.includes("foodshare");
  const mediaClassName = `absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105${
    invertFallback && videoFailed ? " invert" : ""
  }`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {videoFailed ? (
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className={mediaClassName}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={project.imagePath}
            src={project.videoSrc}
            onError={() => setVideoFailed(true)}
            aria-hidden
            className={mediaClassName}
          />
        )}
      </div>

      <div className="z-10 flex flex-col gap-3 p-6">
        <h2 className="text-xl font-medium tracking-tight text-white">
          {project.title}
        </h2>
        <p className="text-sm text-gray-400">{project.role}</p>
        <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

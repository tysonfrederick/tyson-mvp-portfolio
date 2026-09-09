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
  const [isHovered, setIsHovered] = useState(false);
  const invertFallback = project.imagePath.includes("foodshare");

  return (
    <motion.article
      className="group relative flex min-h-[400px] w-full flex-col justify-end overflow-hidden rounded-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      {videoFailed ? (
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className={`absolute inset-0 z-0 h-full w-full object-cover${
            invertFallback ? " invert" : ""
          }`}
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
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent transition-opacity duration-300"
        aria-hidden
      />

      <div className="relative z-20 flex w-full flex-col gap-2 p-6">
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-relaxed text-zinc-400 backdrop-blur-md md:text-base">
            {project.description}
          </p>
        </motion.div>

        <h2 className="text-xl font-medium tracking-tight text-white md:text-2xl">
          {project.title}
        </h2>
        <p className="text-sm font-medium tracking-tight text-zinc-400 md:text-base">
          {project.role}
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

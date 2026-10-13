"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/app/data";

type BentoVideoCardProps = {
  project: Project;
};

export default function BentoVideoCard({ project }: BentoVideoCardProps) {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.videoSrc) return;

    const markReady = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        setVideoReady(true);
      }
    };

    markReady();
    video.addEventListener("canplay", markReady);
    return () => video.removeEventListener("canplay", markReady);
  }, [project.videoSrc]);
  const invertFallback = project.imagePath.includes("foodshare") && !videoReady;
  const objectPosition =
    project.id === "ergoclick"
      ? "object-[85%_center]"
      : project.id === "switch-journal"
        ? "object-left"
        : "object-center";
  const mediaClassName = `absolute inset-0 h-full w-full object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105${
    invertFallback ? " invert" : ""
  }`;

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-black md:aspect-video">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className={mediaClassName}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        {project.videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={project.imagePath}
            src={project.videoSrc}
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
            aria-hidden
            className={
              videoReady
                ? mediaClassName
                : "pointer-events-none absolute h-px w-px opacity-0"
            }
          />
        ) : null}
      </div>

      <div className="z-10 flex flex-col gap-3 p-4 md:p-6">
        <h2 className="text-lg font-medium tracking-tight text-white md:text-xl">
          {project.title}
        </h2>
        <p className="text-sm text-gray-400">{project.role}</p>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-300">
          {project.description}
        </p>
        <ul className="flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="shrink-0 rounded-full bg-white/10 px-4 py-2 text-xs font-medium whitespace-nowrap text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );

  if (!project.slug) {
    return card;
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {card}
    </Link>
  );
}

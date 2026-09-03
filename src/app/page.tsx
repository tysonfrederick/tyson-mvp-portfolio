import Image from "next/image";
import { portfolioData } from "./data";

type Project = (typeof portfolioData.projects)[number];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-colors duration-300 hover:border-white/20 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 animate-pulse bg-zinc-800" aria-hidden />
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className={`object-cover${
            project.imagePath.includes("foodshare") ? " invert" : ""
          }`}
          sizes={
            featured
              ? "(min-width: 768px) 80vw, 100vw"
              : "(min-width: 768px) 40vw, 100vw"
          }
        />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <h2
          className={`font-medium tracking-tight text-white ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h2>
        <p className="text-base leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-4">
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
    </article>
  );
}

export default function Home() {
  const { hero, projects } = portfolioData;
  const [featured, ...rest] = projects;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-24 font-sans md:px-12 md:py-32">
      <header>
        <Image
          src="/tf-logo.png"
          alt="Tyson Frederick"
          width={48}
          height={48}
          priority
          className="mb-8 h-12 w-12"
        />
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-4 text-xl font-medium tracking-tight text-white md:text-2xl">
          {hero.subtitle}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {hero.description}
        </p>
      </header>

      <section
        aria-label="Projects"
        className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
      >
        <ProjectCard key={featured.id} project={featured} featured />
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

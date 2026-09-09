import Image from "next/image";
import { portfolioData } from "./data";
import BentoVideoCard from "@/components/BentoVideoCard";

export default function Home() {
  const { hero, projects } = portfolioData;

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
        className="mt-24 grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <BentoVideoCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

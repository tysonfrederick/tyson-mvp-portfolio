import { portfolioData } from "./data";
import BentoVideoCard from "@/components/BentoVideoCard";
import WedgeLabStrip from "@/components/labs/WedgeLabStrip";

export default function Home() {
  const { hero, projects } = portfolioData;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-16 font-sans md:px-12 md:pb-32 md:pt-20">
      <header>
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
          <div
            key={project.id}
            className={project.slug === "foodshare" ? "h-full md:col-span-2" : "h-full"}
          >
            <BentoVideoCard project={project} />
          </div>
        ))}
      </section>

      <WedgeLabStrip />
    </main>
  );
}

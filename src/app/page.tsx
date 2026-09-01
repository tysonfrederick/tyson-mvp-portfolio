import { portfolioData } from "./data";

export default function Home() {
  const { hero, projects } = portfolioData;

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 font-sans">
      <header>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-medium tracking-tight mt-4 text-white">
          {hero.subtitle}
        </p>
        <p className="text-base md:text-lg max-w-2xl mt-6 leading-relaxed text-zinc-400">
          {hero.description}
        </p>
      </header>

      <section
        aria-label="Projects"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden bg-zinc-900/50 border border-white/10 rounded-2xl"
          >
            <div className="aspect-video relative w-full overflow-hidden bg-zinc-900">
              <div
                className="absolute inset-0 animate-pulse bg-zinc-800"
                aria-hidden
              />
              <video
                autoPlay
                muted
                loop
                playsInline
                src={project.videoPath}
                aria-hidden
                className="relative object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <h2 className="text-xl font-medium tracking-tight mb-3 text-white">
                {project.title}
              </h2>
              <p className="text-base leading-relaxed mb-6 text-zinc-400">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

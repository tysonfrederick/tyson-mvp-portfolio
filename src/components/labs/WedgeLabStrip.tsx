import Image from "next/image";
import Link from "next/link";
import { getLabViews } from "@/data/lab-assets";

export default function WedgeLabStrip() {
  const experiments = getLabViews();

  return (
    <section aria-label="From the Lab" className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          From the Lab
        </h2>
        <Link
          href="/labs"
          className="text-sm tracking-tight text-zinc-300 transition-colors duration-500 hover:text-white"
        >
          Open the lab ↗
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {experiments.map((experiment) => (
          <Link
            key={experiment.id}
            href="/labs"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-all duration-500 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="relative aspect-[4/3] bg-zinc-950">
              {experiment.imageSrc ? (
                <Image
                  src={experiment.imageSrc}
                  alt={`${experiment.title} thumbnail`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 bg-zinc-950 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.16),transparent_40%)]" />
              )}
            </div>
            <div className="p-6">
              <p className="text-xs font-medium tracking-tight text-zinc-400">
                {experiment.category}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                {experiment.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

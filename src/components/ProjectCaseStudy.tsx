import Image from "next/image";
import type { CaseStudy, CaseStudyImage } from "@/app/projects/studies";
import ProjectStudyFrame from "@/components/ProjectStudyFrame";

type ProjectCaseStudyProps = {
  study: CaseStudy;
};

function StudyImage({
  image,
  priority = false,
  sizes,
}: {
  image: CaseStudyImage;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-tight text-zinc-400">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-zinc-300">{value}</dd>
    </div>
  );
}

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  const meta = [
    { label: "Role", value: study.role },
    { label: study.clientLabel ?? "Client", value: study.client },
    { label: "Timeline", value: study.timeline },
    { label: study.effortLabel ?? "Effort", value: study.effort },
  ];

  return (
    <>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
        {study.summary}
      </p>

      <div className="mt-12">
        <StudyImage
          image={study.hero}
          priority
          sizes="(min-width: 1280px) 1152px, 100vw"
        />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-3">
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
            <dl className="flex flex-col gap-8">
              {meta.map((field) => (
                <MetaField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
              <div>
                <dt className="text-xs font-medium tracking-tight text-zinc-400">
                  Stack
                </dt>
                <dd className="mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {study.stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium whitespace-nowrap text-white"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <MetaField label="Deliverable" value={study.deliverable} />
            </dl>
          </div>
        </aside>

        <article className="flex flex-col gap-16 lg:col-span-2">
          <section>
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              {study.challengeHeading ?? "The Challenge"}
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {study.challenge.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-300 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              The Architecture & Pipeline
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-300 md:text-lg">
              {study.architectureIntro}
            </p>

            <div className="mt-8">
              {study.phases.map((phase) => (
                <div key={phase.id}>
                  <section className="mt-8 border-t border-zinc-800 pt-8">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {phase.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      <p className="text-base leading-relaxed text-zinc-300">
                        {phase.paragraphs[0]}
                      </p>
                      {phase.points ? (
                        <ul className="flex flex-col gap-2">
                          {phase.points.map((point) => (
                            <li
                              key={point}
                              className="border-l border-white/10 pl-4 text-base leading-relaxed text-zinc-300"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {phase.paragraphs.slice(1).map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-relaxed text-zinc-300"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {phase.gate ? (
                      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                        <span className="font-medium text-white">Gate: </span>
                        {phase.gate}
                      </p>
                    ) : null}
                    {phase.artifact ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        <span className="font-medium text-white">
                          Artifact:{" "}
                        </span>
                        {phase.artifact}
                      </p>
                    ) : null}
                  </section>

                  {phase.id === study.interstitial.afterPhaseId ? (
                    <div className="mt-8">
                      <StudyImage
                        image={study.interstitial}
                        sizes="(min-width: 1024px) 66vw, 100vw"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-zinc-800 pt-16">
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              The Outcome
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {study.outcome.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-300 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}

export default function ProjectCaseStudy({ study }: ProjectCaseStudyProps) {
  return (
    <ProjectStudyFrame title={study.title}>
      <CaseStudyBody study={study} />
    </ProjectStudyFrame>
  );
}

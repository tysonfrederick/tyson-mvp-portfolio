import Image from "next/image";
import type {
  CaseStudy,
  CaseStudyBlock,
  CaseStudyCode,
  CaseStudyImage,
  CaseStudyTable,
} from "@/app/projects/studies";
import ProjectStudyFrame from "@/components/ProjectStudyFrame";

type ProjectCaseStudyProps = {
  study: CaseStudy;
};

function EmphasisText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return <span key={index}>{part}</span>;
  });
}

function StudyPoints({
  points,
  ordered = false,
}: {
  points: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={
        ordered
          ? "flex list-decimal flex-col gap-4 pl-6 marker:text-zinc-400"
          : "flex flex-col gap-4"
      }
    >
      {points.map((point) => (
        <li
          key={point}
          className={
            ordered
              ? "pl-2 text-base leading-relaxed text-zinc-300"
              : "border-l border-white/10 pl-4 text-base leading-relaxed text-zinc-300"
          }
        >
          <EmphasisText text={point} />
        </li>
      ))}
    </Tag>
  );
}

function StudyCode({ code }: { code: CaseStudyCode }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
      {code.caption ? (
        <figcaption className="border-b border-white/10 px-6 py-4 text-sm leading-relaxed text-zinc-400">
          {code.caption}
        </figcaption>
      ) : null}
      <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-zinc-300">
        <code className="font-mono">{code.source}</code>
      </pre>
    </figure>
  );
}

function StudyBlock({ block }: { block: CaseStudyBlock }) {
  return (
    <div className="flex flex-col gap-4">
      {block.title ? (
        <h4 className="text-lg font-medium tracking-tight text-white">
          <EmphasisText text={block.title} />
        </h4>
      ) : null}
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-zinc-300">
          <EmphasisText text={paragraph} />
        </p>
      ))}
      {block.points ? (
        <StudyPoints points={block.points} ordered={block.ordered} />
      ) : null}
      {block.code ? <StudyCode code={block.code} /> : null}
    </div>
  );
}

function StudyTable({ table }: { table: CaseStudyTable }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {table.rows.map((row) => (
          <div
            key={row[0]}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <p className="text-base font-medium tracking-tight text-white">
              <EmphasisText text={row[0]} />
            </p>
            <dl className="mt-6 flex flex-col gap-6">
              {row.slice(1).map((cell, index) => (
                <div key={table.headers[index + 1]}>
                  <dt className="text-xs font-medium tracking-tight text-zinc-400">
                    {table.headers[index + 1]}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-300">
                    <EmphasisText text={cell} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-2xl border border-white/10 md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-zinc-900/50">
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="w-1/4 px-4 py-4 text-xs font-medium tracking-tight text-zinc-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row[0]}
                className="border-b border-white/10 align-top last:border-b-0"
              >
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${table.headers[index]}`}
                    className={`px-4 py-6 text-sm leading-relaxed ${
                      index === 0
                        ? "font-medium text-white"
                        : "text-zinc-300"
                    }`}
                  >
                    <EmphasisText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

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
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={image.contained ? "(min-width: 768px) 448px, 100vw" : sizes}
        className={
          image.contained
            ? "mx-auto h-auto w-full max-w-md object-contain"
            : "h-auto w-full object-cover"
        }
      />
      {image.caption ? (
        <figcaption className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-zinc-400">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
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
  const architectureHeading =
    study.architectureHeading === undefined
      ? "The Architecture & Pipeline"
      : study.architectureHeading;

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
                  <EmphasisText text={paragraph} />
                </p>
              ))}
            </div>
          </section>

          <section>
            {architectureHeading ? (
              <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                {architectureHeading}
              </h2>
            ) : null}
            {study.architectureIntro ? (
              <p
                className={`text-base leading-relaxed text-zinc-300 md:text-lg ${
                  architectureHeading ? "mt-6" : ""
                }`}
              >
                <EmphasisText text={study.architectureIntro} />
              </p>
            ) : null}

            <div>
              {study.phases.map((phase) => (
                <div key={phase.id}>
                  <section className="mt-8 border-t border-zinc-800 pt-8">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {phase.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <p className="text-base leading-relaxed text-zinc-300">
                          <EmphasisText text={phase.paragraphs[0]} />
                        </p>
                        {phase.points ? (
                          <StudyPoints points={phase.points} />
                        ) : null}
                        {phase.paragraphs.slice(1).map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-relaxed text-zinc-300"
                          >
                            <EmphasisText text={paragraph} />
                          </p>
                        ))}
                      </div>
                      {phase.table ? <StudyTable table={phase.table} /> : null}
                      {phase.blocks?.map((block) => (
                        <StudyBlock
                          key={block.title ?? block.paragraphs?.[0]}
                          block={block}
                        />
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

                  {[study.interstitial, ...(study.figures ?? [])]
                    .filter((image) => image.afterPhaseId === phase.id)
                    .map((image) => (
                      <div key={image.src} className="mt-8">
                        <StudyImage
                          image={image}
                          sizes="(min-width: 1024px) 66vw, 100vw"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-zinc-800 pt-16">
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              {study.outcomeHeading ?? "The Outcome"}
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {study.outcome.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-300 md:text-lg"
                >
                  <EmphasisText text={paragraph} />
                </p>
              ))}
              {study.outcomePoints ? (
                <StudyPoints points={study.outcomePoints} />
              ) : null}
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

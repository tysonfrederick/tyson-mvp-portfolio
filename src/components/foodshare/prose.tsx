import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import SchemaDisclosure from "./SchemaDisclosure";

function findItalicEnd(text: string, from: number): number {
  for (let index = from; index < text.length; index += 1) {
    if (text[index] !== "*") continue;
    const previous = text[index - 1];
    const next = text[index + 1];
    if (previous !== "*" && next !== "*") return index;
  }
  return -1;
}

const COLOR_PILL: Record<string, string> = {
  Green:
    "mr-1 inline-block align-middle bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded text-[11px] font-mono",
  Blue: "mr-1 inline-block align-middle bg-blue-500/15 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded text-[11px] font-mono",
  Orange:
    "mr-1 inline-block align-middle bg-amber-500/15 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded text-[11px] font-mono",
};

function renderInline(text: string, key: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let buffer = "";
  let serial = 0;

  const flush = () => {
    if (!buffer) return;
    nodes.push(buffer);
    buffer = "";
  };

  for (let index = 0; index < text.length; ) {
    const colorToken = text.slice(index).match(/^(?:\*\[(Green|Blue|Orange)\]\*|\[(Green|Blue|Orange)\])/);
    if (colorToken) {
      flush();
      const name = (colorToken[1] ?? colorToken[2]) as keyof typeof COLOR_PILL;
      const id = `${key}-swatch${serial}`;
      serial += 1;
      nodes.push(
        <span key={id} className={COLOR_PILL[name]}>
          {name}
        </span>,
      );
      index += colorToken[0].length;
      continue;
    }

    if (text.startsWith("**", index)) {
      const end = text.indexOf("**", index + 2);
      if (end !== -1) {
        flush();
        const id = `${key}-b${serial}`;
        serial += 1;
        nodes.push(
          <strong key={id} className="font-medium text-white">
            {renderInline(text.slice(index + 2, end), id)}
          </strong>,
        );
        index = end + 2;
        continue;
      }
    }

    if (text[index] === "`") {
      const end = text.indexOf("`", index + 1);
      if (end !== -1) {
        flush();
        const id = `${key}-c${serial}`;
        serial += 1;
        nodes.push(
          <code
            key={id}
            className="rounded border border-white/10 bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300/90"
          >
            {text.slice(index + 1, end)}
          </code>,
        );
        index = end + 1;
        continue;
      }
    }

    if (text[index] === "*" && text[index + 1] !== "*") {
      const end = findItalicEnd(text, index + 1);
      if (end !== -1) {
        flush();
        const id = `${key}-i${serial}`;
        serial += 1;
        nodes.push(
          <em key={id}>{renderInline(text.slice(index + 1, end), id)}</em>,
        );
        index = end + 1;
        continue;
      }
    }

    buffer += text[index];
    index += 1;
  }

  flush();
  return nodes;
}

export function Rich({ text }: { text: string }) {
  return <Fragment>{renderInline(text, "r")}</Fragment>;
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto w-full max-w-3xl text-left text-base leading-relaxed text-zinc-300">
      {children}
    </p>
  );
}

export function Prose({ text }: { text: string }) {
  return (
    <P>
      <Rich text={text} />
    </P>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left">
      {items.map((item) => (
        <li
          key={item}
          className="border-l border-white/10 pl-4 text-base leading-relaxed text-zinc-300"
        >
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

export function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="mx-auto flex w-full max-w-3xl list-decimal flex-col gap-4 pl-6 text-left marker:text-zinc-400">
      {items.map((item) => (
        <li
          key={item}
          className="pl-2 text-base leading-relaxed text-zinc-300"
        >
          <Rich text={item} />
        </li>
      ))}
    </ol>
  );
}

export function Subhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mx-auto mb-4 mt-10 w-full max-w-3xl text-left text-xl font-medium tracking-tight text-zinc-100">
      {children}
    </h3>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mt-16 border-t border-white/10 pt-16">
        <h2 className="mx-auto w-full max-w-3xl text-left text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-8 flex min-w-0 flex-col gap-6">{children}</div>
    </section>
  );
}

export function SourceQuote({
  quote,
  source,
}: {
  quote: string;
  source: string;
}) {
  return (
    <blockquote className="mx-auto w-full max-w-3xl border-l border-white/10 pl-6 text-left">
      <p className="text-base leading-relaxed text-zinc-300">
        <Rich text={quote} />
      </p>
      <footer className="mt-4 text-sm leading-relaxed text-zinc-400">
        — <Rich text={source} />
      </footer>
    </blockquote>
  );
}

export function DataTable({
  headers,
  rows,
  compact = false,
  badgeIndex = 1,
}: {
  headers: string[];
  rows: string[][];
  compact?: boolean;
  badgeIndex?: number;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <div
            key={row[0]}
            className={`rounded-2xl border border-white/10 bg-zinc-900/50 ${
              compact ? "p-4" : "p-6"
            }`}
          >
            {compact ? (
              <div className="flex items-center justify-between gap-2">
                <p className="min-w-0 text-sm font-medium tracking-tight text-white">
                  <Rich text={row[0]} />
                </p>
                <p className="shrink-0 rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[11px] font-medium tracking-tight text-white">
                  <Rich text={row[badgeIndex] ?? ""} />
                </p>
              </div>
            ) : (
              <p className="text-base font-medium tracking-tight text-white">
                <Rich text={row[0]} />
              </p>
            )}
            <dl
              className={
                compact
                  ? "mt-3 flex flex-col gap-3"
                  : "mt-6 flex flex-col gap-6"
              }
            >
              {row.slice(1).map((cell, index) => {
                const headerIndex = index + 1;
                if (compact && headerIndex === badgeIndex) return null;
                return (
                  <div key={headers[headerIndex]}>
                    <dt className="text-xs font-medium tracking-tight text-zinc-400">
                      {headers[headerIndex]}
                    </dt>
                    <dd
                      className={`text-sm leading-relaxed text-zinc-300 ${
                        compact ? "mt-1" : "mt-2"
                      }`}
                    >
                      <Rich text={cell} />
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-2xl border border-white/10 md:block">
        <table
          className={`w-full border-collapse text-left ${
            headers.length > 4 ? "min-w-[880px]" : "min-w-[640px]"
          }`}
        >
          <thead>
            <tr className="border-b border-white/10 bg-zinc-900/50">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-4 text-xs font-medium tracking-tight text-zinc-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row[0]}
                className="border-b border-white/10 align-top last:border-b-0"
              >
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${headers[index]}`}
                    className={`px-4 py-6 text-sm leading-relaxed ${
                      index === 0 ? "font-medium text-white" : "text-zinc-300"
                    }`}
                  >
                    <Rich text={cell} />
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

export function SchemaBlock({
  caption,
  source,
}: {
  caption: string;
  source: string;
}) {
  return <SchemaDisclosure caption={caption} source={source} />;
}

export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  contained = false,
  viewport = false,
  sheet = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  priority?: boolean;
  contained?: boolean;
  viewport?: boolean;
  sheet?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 ${className ?? ""}`}
    >
      {sheet ? (
        <div className="flex w-full items-center justify-center bg-zinc-950/80 p-2">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto max-h-[420px] w-full object-contain md:h-[400px]"
          />
        </div>
      ) : viewport ? (
        <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950/80 p-2 md:h-[400px]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-2"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={
            contained
              ? "(min-width: 768px) 320px, 70vw"
              : "(min-width: 1280px) 1152px, 100vw"
          }
          className={
            contained
              ? "mx-auto h-auto w-full max-w-xs shrink-0 object-contain"
              : "h-auto w-full shrink-0"
          }
        />
      )}
      {caption ? (
        <figcaption className="mt-auto border-t border-white/10 bg-zinc-950 px-6 py-4 text-sm leading-relaxed text-zinc-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function MetaField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-tight text-zinc-400">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-zinc-300">
        <Rich text={value} />
      </dd>
    </div>
  );
}

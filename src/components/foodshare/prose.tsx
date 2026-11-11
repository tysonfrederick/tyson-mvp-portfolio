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
    <p className="max-w-3xl text-base leading-relaxed text-zinc-300">{children}</p>
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
    <ul className="flex max-w-3xl flex-col gap-4">
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
    <ol className="flex max-w-3xl list-decimal flex-col gap-4 pl-6 marker:text-zinc-400">
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
    <h3 className="mb-4 mt-10 max-w-3xl text-xl font-medium tracking-tight text-zinc-100">
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
    <section id={id} className="scroll-mt-28">
      <h2 className="mt-16 border-t border-white/10 pt-16 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
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
    <blockquote className="max-w-3xl border-l border-white/10 pl-6">
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
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <div
            key={row[0]}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <p className="text-base font-medium tracking-tight text-white">
              <Rich text={row[0]} />
            </p>
            <dl className="mt-6 flex flex-col gap-6">
              {row.slice(1).map((cell, index) => (
                <div key={headers[index + 1]}>
                  <dt className="text-xs font-medium tracking-tight text-zinc-400">
                    {headers[index + 1]}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-300">
                    <Rich text={cell} />
                  </dd>
                </div>
              ))}
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
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  priority?: boolean;
  contained?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 ${className ?? ""}`}
    >
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

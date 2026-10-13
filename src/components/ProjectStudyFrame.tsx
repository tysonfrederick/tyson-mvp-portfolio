import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ProjectStudyFrameProps = {
  title: string;
  belowTitle?: ReactNode;
  children: ReactNode;
};

export default function ProjectStudyFrame({
  title,
  belowTitle,
  children,
}: ProjectStudyFrameProps) {
  return (
    <main className="mx-auto min-h-screen w-full min-w-0 max-w-7xl px-6 py-24 font-sans md:px-12 md:py-32">
      <Link href="/" className="mb-8 inline-block">
        <Image
          src="/tf-logo.png"
          alt="Tyson Frederick"
          width={48}
          height={48}
          className="h-12 w-12"
        />
      </Link>

      <header>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {belowTitle}
      </header>

      {children}
    </main>
  );
}

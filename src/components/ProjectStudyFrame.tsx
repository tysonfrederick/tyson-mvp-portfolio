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
    <main className="mx-auto min-h-screen w-full min-w-0 max-w-7xl px-6 pb-24 pt-16 font-sans md:px-12 md:pb-32 md:pt-20">
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

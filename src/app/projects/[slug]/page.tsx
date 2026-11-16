import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy, {
  CaseStudyBody,
  FoodShareProject,
} from "@/components/ProjectCaseStudy";
import MfaProjectArchive from "@/components/thesis/MfaProjectArchive";
import ThesisViewer from "@/components/thesis/ThesisViewer";
import {
  foodshareSlug,
  getCaseStudy,
  getCaseStudyParams,
  getStudyMeta,
  mfaThesisSlug,
} from "../studies";

export function generateStaticParams() {
  return getCaseStudyParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const meta = getStudyMeta(slug);

  if (!meta) {
    return { title: "Project" };
  }

  return {
    title: `${meta.title} — Tyson Frederick`,
    description: meta.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  if (slug === foodshareSlug) {
    return <FoodShareProject />;
  }

  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  if (study.slug === mfaThesisSlug) {
    return (
      <MfaProjectArchive
        title={study.title}
        executive={<CaseStudyBody study={study} />}
        archive={<ThesisViewer />}
      />
    );
  }

  return <ProjectCaseStudy study={study} />;
}

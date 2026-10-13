import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy, {
  CaseStudyBody,
} from "@/components/ProjectCaseStudy";
import MfaProjectArchive from "@/components/thesis/MfaProjectArchive";
import ThesisViewer from "@/components/thesis/ThesisViewer";
import { getCaseStudy, getCaseStudyParams, mfaThesisSlug } from "../studies";

export function generateStaticParams() {
  return getCaseStudyParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Project" };
  }

  return {
    title: `${study.title} — Tyson Frederick`,
    description: study.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
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

import type { Metadata } from "next";
import { PortfolioProjectClient } from "./portfolio-project-client";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const projectMeta = [
  {
    title: "Refa Group Automation Case Study",
    description:
      "Explore how Softaryn built a business automation solution for Refa Group, focused on scalable architecture, operational efficiency and improved user experience.",
    keywords: [
      "business automation case study",
      "automation software development",
      "custom software development",
      "workflow automation",
      "Softaryn portfolio",
    ],
  },
  {
    title: "Kolinsky Real Estate Website & Admin Panel Case Study",
    description:
      "Discover how Softaryn created a real estate website and admin panel for Kolinsky, focused on property management workflows, usability and digital growth.",
    keywords: [
      "real estate website development",
      "admin panel development",
      "property management software",
      "website development case study",
      "Softaryn portfolio",
    ],
  },
  {
    title: "Miraki Beauty Salon Website Case Study",
    description:
      "See how Softaryn designed and developed a modern beauty salon website with responsive layouts, strong visual identity and improved client experience.",
    keywords: [
      "beauty salon website development",
      "responsive website design",
      "business website development",
      "website development case study",
      "Softaryn portfolio",
    ],
  },
];

export function generateStaticParams() {
  return [{ id: "0" }, { id: "1" }, { id: "2" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const index = Number(id ?? 0);
  const meta = projectMeta[index] ?? projectMeta[0];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `/portfolio/project/${index}`,
    },
    openGraph: {
      type: "article",
      title: `${meta.title} | Softaryn`,
      description: meta.description,
      url: `/portfolio/project/${index}`,
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: projectMeta[Number(id ?? 0)]?.title || "Project", url: `/portfolio/project/${id}` },
        ]}
      />
      <PortfolioProjectClient id={Number(id ?? 0)} />
    </>
  );
}
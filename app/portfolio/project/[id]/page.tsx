import type { Metadata } from "next";
import { PortfolioProjectClient } from "./portfolio-project-client";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const projectMeta = [
  {
    name: "Rosenda",
    title: "Rosenda Website Design & Development Case Study",
    description:
      "Explore how Softaryn designed and developed a modern responsive website for Rosenda, with a distinctive visual identity, clear content structure and a polished experience across desktop and mobile devices.",
    keywords: [
      "Rosenda website",
      "responsive website development",
      "custom website design",
      "business website development",
      "website development case study",
      "Softaryn portfolio",
    ],
    image: "/Portfolio/Rosenda/rosenda-main.png",
  },
  {
    name: "Kolinsky",
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
    image: "/Portfolio/project-2-main.png",
  },
  {
    name: "Miraki",
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
    image: "/Portfolio/project-3-main.png",
  },
] as const;

function getProjectIndex(id: string) {
  const index = Number(id);

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= projectMeta.length
  ) {
    return 0;
  }

  return index;
}

export function generateStaticParams() {
  return projectMeta.map((_, index) => ({
    id: String(index),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const index = getProjectIndex(id);
  const meta = projectMeta[index];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],

    alternates: {
      canonical: `/portfolio/project/${index}`,
    },

    openGraph: {
      type: "article",
      title: `${meta.title} | Softaryn`,
      description: meta.description,
      url: `/portfolio/project/${index}`,
      images: [
        {
          url: meta.image,
          alt: `${meta.name} project by Softaryn`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Softaryn`,
      description: meta.description,
      images: [meta.image],
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = getProjectIndex(id);
  const project = projectMeta[index];

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Portfolio",
            url: "/portfolio",
          },
          {
            name: project.name,
            url: `/portfolio/project/${index}`,
          },
        ]}
      />

      <PortfolioProjectClient id={index} />
    </>
  );
}
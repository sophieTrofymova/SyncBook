import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/about-page-client";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "About Softaryn",
  description:
    "Learn about Softaryn, a website development, software engineering and business automation team helping companies build scalable digital products and efficient workflows.",
  keywords: [
    "about softaryn",
    "software development company",
    "website development company",
    "business automation company",
    "custom software development",
    "software engineers",
    "Dublin software company",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Softaryn | Website Development & Software Engineering Team",
    description:
      "Softaryn helps companies transform complex business processes through website development, custom software engineering and automation solutions.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <AboutPageClient />
    </>
  );
}
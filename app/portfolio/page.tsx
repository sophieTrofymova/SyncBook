import type { Metadata } from "next";
import PortfolioPageClient from "@/components/pages/portfolio-page-client";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Softaryn case studies: dashboards, business platforms, websites, automation systems and custom software products built for real workflows.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Softaryn",
    description:
      "A collection of custom software, automation and digital product projects built by Softaryn.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]}
      />
      <PortfolioPageClient />
    </>
  );
}
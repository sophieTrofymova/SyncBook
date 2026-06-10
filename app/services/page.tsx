import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/services-page-client";
import { ServicesSchema } from "@/components/seo/services-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Website Development, Software Development & Automation Services",
  description:
    "Explore Softaryn services: website development, custom software development, CRM and ERP systems, business process automation, cloud-native solutions and system integration.",
  keywords: [
    "website development",
    "web development services",
    "custom software development",
    "business automation services",
    "CRM & ERP Systems",
    "ERP development",
    "system integration",
    "cloud Infrastructure & Deployment",
    "AI automation",
    "software development company Dublin",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Website Development, Software Development & Automation Services | Softaryn",
    description:
      "Website development, custom software, AI automation, CRM, ERP, cloud-native platforms and scalable digital architecture.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <ServicesPageClient />
    </>
  );
}
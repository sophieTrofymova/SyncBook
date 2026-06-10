import type { Metadata } from "next";
import { LocationSection } from "@/components/sections/contacts/location-section";
import { ContactSection } from "@/components/sections/shared/contact-section";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Contact Softaryn",
  description:
    "Contact Softaryn to discuss website development, custom software development, business automation, CRM, ERP, system integration and digital product solutions.",
  keywords: [
    "website development",
    "web development",
    "custom software development",
    "business automation",
    "CRM development",
    "ERP development",
    "software company Dublin",
    "website development Dublin",
  ],
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: "Contact Softaryn | Software & Website Development Company in Dublin",
    description:
      "Get in touch with Softaryn to discuss website development, software engineering and business automation projects.",
    url: "/contacts",
  },
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen text-[#232634]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contacts", url: "/contacts" },
        ]}
      />
      <LocationSection/>
      <ContactSection />
    </main>
  );
}
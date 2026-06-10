import type { Metadata } from "next";
import HomePageClient from "@/components/pages/home-page-client";

export const metadata: Metadata = {
  title: "Website Development, Custom Software & Business Automation",
  description:
    "Softaryn develops websites, custom software, business automation systems, CRM, ERP and scalable digital platforms for companies that want to grow faster.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Development, Custom Software & Business Automation | Softaryn",
    description:
      "We design and develop websites, custom software, automation systems and scalable digital platforms for modern businesses.",
    url: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
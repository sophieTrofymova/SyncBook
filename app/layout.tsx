import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import "leaflet/dist/leaflet.css";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebsiteSchema } from "@/components/seo/website-schema";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softaryn.com"),
  title: {
    default: "Softaryn — Website Development, Custom Software & Automation",
    template: "%s | Softaryn",
  },
  description:
    "Softaryn develops websites, custom software, business automation systems, CRM, ERP and scalable digital platforms for growing companies.",
  applicationName: "Softaryn",
  openGraph: {
    type: "website",
    siteName: "Softaryn",
    url: "https://softaryn.com",
    title: "Softaryn — Website Development, Custom Software & Automation",
    description:
      "Website development, custom software, CRM, ERP, automation systems and scalable digital platforms for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softaryn — Website Development, Custom Software & Automation",
    description:
      "Website development, custom software and business automation solutions for growing companies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body>
        <OrganizationSchema />
        <WebsiteSchema />

        <LanguageProvider>
          <SiteHeader />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
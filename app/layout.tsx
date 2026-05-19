import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "SyncBook",
  description: "Engineering efficiency for modern business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
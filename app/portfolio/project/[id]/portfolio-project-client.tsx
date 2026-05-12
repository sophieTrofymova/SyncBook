"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import { BuildTogetherSection } from "@/app/about/sections-about-us/buil-together-section";
import { embossedPillStyle, embossedCardStyle } from "@/lib/ui-styles";

export function generateStaticParams() {
  return [{ id: "0" }, { id: "1" }, { id: "2" }];
}

const projects = [
  {
    heroImage: "/Portfolio/projects/project-1-main.png",
    aboutImage: "/Portfolio/projects/project-1-about.png",
    fontImage: "/Portfolio/projects/project-1-font.png",
    adaptive1: "/Portfolio/projects/project-1-small-2.png",
    adaptive2: "/Portfolio/projects/project-1-adaptive-2.png",
    adaptive3: "/Portfolio/projects/project-1-adaptive-3.png",
    tabletImage: "/Portfolio/projects/project-1-tablet.png",
  },
  {
    heroImage: "/Portfolio/projects/project-2-main.png",
    aboutImage: "/Portfolio/projects/project-2-main.png",
    fontImage: "/Portfolio/projects/project-2-small-1.png",
    adaptive1: "/Portfolio/projects/project-2-small-2.png",
    adaptive2: "/Portfolio/projects/project-2-main.png",
    adaptive3: "/Portfolio/projects/project-2-small-1.png",
    tabletImage: "/Portfolio/projects/project-2-small-2.png",
  },
  {
    heroImage: "/Portfolio/projects/3/project-3-main.png",
    aboutImage: "/Portfolio/projects/3/miraki-about.png",
    fontImage: "/Portfolio/projects/3/miraki-font.jpg",
    adaptive1: "/Portfolio/projects/3/project-3-small-2.jpg",
    adaptive2: "/Portfolio/projects/3/miraki-adaptive-2.png",
    adaptive3: "/Portfolio/projects/3/project-3-adaptive-3.png",
    tabletImage: "/Portfolio/projects/3/miraki-tablet.png",
  },
];

const otherProjectImages = [
  "/Portfolio/monitor-1.png",
  "/Portfolio/projects/project-2-main.png",
  "/Portfolio/projects/project-1-small-2.png",
];

export function PortfolioProjectClient({ id }: { id: number }) {
  const { t } = useLanguage();
  const project = projects[id] ?? projects[0];
  const details = t.portfolioPage.projectDetails;
  const projectText = details.projects[id] ?? details.projects[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f3f8] text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        <SiteHeader />

        {/* HERO */}
        <section className="relative px-8 pb-14 pt-14 md:px-12 xl:px-14">
          <Link
            href="/portfolio/projects"
            aria-label={details.backAlt}
            className="mb-14 inline-flex text-[42px] leading-none text-[#a8abb4] transition-colors hover:text-[#4b74ff]"
          >
            ←
          </Link>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h1 className="max-w-[620px] whitespace-pre-line text-[48px] font-medium leading-[1.18] tracking-[-0.045em] text-[#282b37]">
                <span className="text-[#4b74ff]">{projectText.accent}</span>{" "}
                {projectText.title}
              </h1>

              <p className="mt-10 max-w-[500px] text-[16px] leading-[1.45] tracking-[-0.02em] text-[#707582]">
                {details.heroDescription}
              </p>

              <div className="mt-20 flex gap-24">
                <div>
                  <div className="text-[48px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                    {details.stat1}
                  </div>
                  <p className="mt-4 max-w-[150px] text-[15px] leading-[1.35] text-[#707582]">
                    {details.stat1Text}
                  </p>
                </div>

                <div>
                  <div className="text-[48px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                    {details.stat2}
                  </div>
                  <p className="mt-4 max-w-[150px] text-[15px] leading-[1.35] text-[#707582]">
                    {details.stat2Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={project.heroImage}
                alt={projectText.accent}
                className="h-[610px] w-full rounded-[52px] object-cover"
              />

              <a
                href="#"
                className="absolute bottom-0 left-[-110px] flex h-[120px] w-[120px] items-center justify-center rounded-full whitespace-pre-line text-center text-[16px] font-semibold leading-[1.15] text-[#4b74ff]"
                style={{ background: "#f2f3f8", ...embossedPillStyle }}
              >
                {details.visitWebsite}
              </a>
            </div>
          </div>
        </section>

        {/* BLUE CTA STRIP */}
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#4b74ff] px-8 py-7 text-white md:px-12">
          <div className="mx-auto flex max-w-[1700px] items-center justify-between">
            <p className="text-[18px] tracking-[-0.02em]">
              {details.ctaText}{" "}
              <span className="font-semibold">{details.ctaStrong}</span>{" "}
              {details.ctaAfter}
            </p>

            <Link
              href="/services"
              className="rounded-full border border-white/80 px-16 py-5 text-[17px] font-medium transition-colors hover:bg-white hover:text-[#4b74ff]"
            >
              {details.seeAllServices}
            </Link>
          </div>
        </section>

        {/* ABOUT PROJECT */}
        <section className="px-8 py-28 text-center md:px-12 xl:px-14">
          <h2 className="text-[32px] font-semibold uppercase tracking-[0.08em] text-[#4b74ff]">
            {details.aboutTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[13px] leading-[1.65] text-[#282b37]">
            {details.aboutDescription}
          </p>

          <div
            className="mx-auto mt-16 grid max-w-[1220px] grid-cols-3 rounded-[28px] px-16 py-8 text-center"
            style={{ background: "#f2f3f8", ...embossedCardStyle }}
          >
            {[
              [details.serviceLabel, details.serviceValue],
              [details.industryLabel, details.industryValue],
              [details.publishedLabel, details.publishedValue],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[13px] font-semibold tracking-[0.18em] text-[#4b74ff]">
                  {label}
                </p>
                <p className="mt-4 text-[13px] text-[#282b37]">{value}</p>
              </div>
            ))}
          </div>

          <img
            src={project.aboutImage}
            alt=""
            className="mx-auto mt-24 h-[650px] w-full max-w-[1220px] rounded-[32px] object-cover"
          />
        </section>

        {/* UI KIT */}
        <section className="px-8 py-24 text-center md:px-12 xl:px-14">
          <h2 className="text-[32px] font-medium tracking-[-0.04em]">
            {details.uiKitTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[13px] leading-[1.65]">
            {details.uiKitDescription}
          </p>

          <div className="mx-auto mt-20 grid max-w-[920px] grid-cols-[1fr_1fr_1fr] gap-6">
            <div className="space-y-6">
              <div className="flex h-[230px] items-end rounded-[22px] bg-[#1f4a34] p-6 text-white shadow-xl">
                # EB005B
              </div>
              <div className="flex h-[180px] items-end rounded-[22px] bg-white p-6 shadow-xl">
                # EB005B
              </div>
            </div>

            <div className="flex h-[230px] items-end rounded-[22px] bg-[#c6c6c6] p-6 shadow-xl">
              # C6C6C6
            </div>

            <div className="flex h-[436px] items-end rounded-[22px] bg-[#1b8258] p-6 text-white shadow-xl">
              # 1B2858
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="px-8 py-24 md:px-12 xl:px-14">
          <div className="mx-auto grid max-w-[1220px] grid-cols-[0.9fr_1.1fr] items-start gap-20">
            <div className="text-[210px] font-bold leading-none text-[#d8d9df]">
              Aa
            </div>

            <div className="pt-10">
              <h2 className="text-[42px] font-semibold">
                {details.typographyTitle}
              </h2>

              <p className="mt-8 text-[15px] leading-[1.6] text-[#707582]">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                <br />
                abcdefghijklmnopqrstuvwxyz ./?=!@&*()
              </p>

              <div className="mt-10 flex gap-20 text-[15px]">
                <span>Regular</span>
                <span>Medium</span>
                <span className="font-bold">Bold</span>
                <span className="font-extrabold">Extrabold</span>
              </div>
            </div>
          </div>

          <img
            src={project.fontImage}
            alt=""
            className="mx-auto mt-24 h-[620px] w-full max-w-[1220px] rounded-[32px] object-cover"
          />
        </section>

        {/* ADAPTIVE */}
        <section className="px-8 py-28 text-center md:px-12 xl:px-14">
          <h2 className="text-[34px] font-medium tracking-[-0.04em]">
            {details.adaptiveTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[13px] leading-[1.65]">
            {details.adaptiveDescription}
          </p>

          <div className="mx-auto mt-20 grid max-w-[1080px] grid-cols-2 gap-10">
            <img
              src={project.adaptive1}
              alt=""
              className="h-[520px] w-full rounded-[26px] object-cover"
            />
            <img
              src={project.adaptive2}
              alt=""
              className="h-[520px] w-full rounded-[26px] object-cover"
            />
          </div>

          <img
            src={project.adaptive3}
            alt=""
            className="mx-auto mt-24 h-[650px] w-full max-w-[1220px] rounded-[32px] object-cover"
          />
        </section>

        {/* TABLET + QUOTE */}
        <section className="grid grid-cols-1 items-center gap-20 px-8 py-28 md:px-12 xl:grid-cols-2 xl:px-14">
          <img
            src={project.tabletImage}
            alt=""
            className="h-[560px] w-full object-contain"
          />

          <div className="max-w-[520px]">
            <p className="text-[16px] leading-[1.65] tracking-[0.08em] text-[#282b37]">
              {details.quote}
            </p>

            <p className="mt-10 text-[17px] font-semibold tracking-[0.08em]">
              {details.quoteAuthor}
            </p>
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="px-8 py-28 md:px-12 xl:px-14">
          <div className="mx-auto max-w-[1220px]">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-4 text-[18px] uppercase tracking-[-0.04em] text-[#4b74ff]">
                  {details.otherEyebrow}
                </p>
                <h2 className="text-[36px] font-medium tracking-[-0.04em]">
                  {details.otherTitle}
                </h2>
              </div>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#9da3b3] px-14 py-4 text-[14px]"
              >
                {details.viewAllCases}
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-14">
              {details.otherProjects.map((title: string, index: number) => (
                <div
                  key={title}
                  className="rounded-[26px] p-8 text-center"
                  style={{ background: "#f2f3f8", ...embossedCardStyle }}
                >
                  <h3 className="mx-auto min-h-[60px] max-w-[240px] text-[16px] leading-[1.3]">
                    {title}
                  </h3>

                  <img
                    src={otherProjectImages[index]}
                    alt=""
                    className="mt-8 h-[220px] w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 h-[8px] rounded-full bg-[#d7d9df]">
              <div className="h-full w-[32%] rounded-full bg-[#4b74ff]" />
            </div>
          </div>
        </section>

        <BuildTogetherSection />
        <Footer />
      </div>
    </main>
  );
}
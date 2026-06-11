"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import { BuildTogetherSection } from "@/components/sections/shared/buil-together-section";
import { embossedPillStyle, embossedCardStyle } from "@/lib/ui-styles";
import { OurPortfolioSection } from "@/components/sections/home/our-portfolio-section";

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

const projectImageAlts = [
  {
    aboutImage: "Refa Group automation website project overview",
    fontImage: "Refa Group website typography and brand style",
    adaptive1: "Refa Group responsive website mobile layout",
    adaptive2: "Refa Group responsive website tablet layout",
    finalPreview: "Refa Group website responsive interface preview",
    tabletImage: "Refa Group website tablet interface preview",
  },
  {
    aboutImage: "Kolinsky real estate website project overview",
    fontImage: "Kolinsky real estate website typography and brand style",
    adaptive1: "Kolinsky real estate website mobile layout",
    adaptive2: "Kolinsky real estate website tablet layout",
    finalPreview: "Kolinsky real estate website responsive interface preview",
    tabletImage: "Kolinsky real estate website tablet interface preview",
  },
  {
    aboutImage: "Miraki beauty salon website project overview",
    fontImage: "Miraki beauty salon website typography and brand style",
    adaptive1: "Miraki beauty salon website mobile layout",
    adaptive2: "Miraki beauty salon website tablet layout",
    finalPreview: "Miraki beauty salon website responsive interface preview",
    tabletImage: "Miraki beauty salon website tablet interface preview",
  },
];

const otherProjectImages = [
  "/Portfolio/monitor-1.png",
  "/Portfolio/projects/3/kolinsky.png",
  "/Portfolio/projects/3/occollo.png",
];

export function PortfolioProjectClient({ id }: { id: number }) {
  const { t } = useLanguage();

  const project = projects[id] ?? projects[0];
  const details = t.portfolioPage.projectDetails;
  const projectText = details.projects[id] ?? details.projects[0];
  const imageAlts = projectImageAlts[id] ?? projectImageAlts[0];
  const isComingSoon = id === 0 || id === 1;

if (isComingSoon) {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col items-center justify-center px-8 text-center md:px-12 xl:px-14">
        <Link
          href="/portfolio"
          className="mb-12 text-[18px] font-medium text-[#4b74ff] transition-colors hover:text-[#282b37]"
        >
          ← Back to Portfolio
        </Link>

        <p className="text-[18px] uppercase tracking-[0.12em] text-[#4b74ff] md:text-[24px]">
          Case Study Coming Soon
        </p>

        <h1 className="mt-8 max-w-[900px] text-[42px] font-medium leading-[1.1] tracking-[-0.045em] text-[#282b37] md:text-[72px]">
          {projectText.title}
        </h1>

        <p className="mt-8 max-w-[700px] text-[16px] leading-[1.6] text-[#707582] md:text-[20px]">
          This project is currently being documented.
          We are preparing a complete case study with project goals,
          development process, design decisions, and final results.
        </p>

        <div className="mt-14 rounded-[40px] bg-[#f2f3f8] px-10 py-8 text-[#4b74ff]">
          Full project details will be available soon.
        </div>

        <Link
          href="/contacts"
          className="mt-12 rounded-full border border-[#4b74ff] px-12 py-5 text-[16px] font-medium text-[#4b74ff] transition-all duration-300 hover:bg-[#4b74ff] hover:text-white"
        >
          Start a Similar Project
        </Link>
      </div>
    </main>
  );
}
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        {/* HERO */}
        <section className="relative px-8 pb-14 pt-14 md:px-12 xl:px-14">
          <Link
            href="/portfolio"
            aria-label={details.backAlt}
            className="mb-14 inline-flex text-[42px] leading-none text-[#a8abb4] transition-colors hover:text-[#4b74ff]"
          >
            <img
              src="/Portfolio/projects/3/Vector.png"
              alt={details.backAlt}
              className="h-auto w-full"
            />
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

            <div className="relative -mt-2">
              <img
                src={project.heroImage}
                alt={projectText.accent}
                className="h-[610px] w-full rounded-[52px] object-cover"
              />

              <a
                href="#"
                className="absolute bottom-[34px] left-[-165px] flex h-[112px] w-[112px] items-center justify-center whitespace-pre-line rounded-full text-center text-[18px] font-semibold leading-[1.15] transition-transform duration-300 hover:scale-[0.96]"
                style={{
                  background: "#f2f3f8",
                  color: "#3E6FFF",
                  ...embossedPillStyle,
                }}
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
              className="rounded-full border border-white/70 bg-transparent px-16 py-5 text-[17px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:!text-[#232634]"
            >
              {details.seeAllServices}
            </Link>
          </div>
        </section>

        {/* ABOUT PROJECT */}
        <section className="px-5 pb-20 pt-30 md:px-12 md:pb-32 md:pt-36 xl:px-14">
          <h2
            className="
            text-left text-[22px] font-semibold uppercase
            leading-none tracking-[0.02em] text-[#3E6FFF]

            md:text-center md:text-[40px]
            md:tracking-[0.08em]
          "
          >
            {details.aboutTitle}
          </h2>

          <p
            className="
            mt-6 max-w-[340px]
            text-left text-[11px]
            leading-[1.45] tracking-[-0.01em]
            text-[#282b37]/65

            md:mx-auto md:max-w-[760px]
            md:text-center md:text-[15px]
            md:leading-[1.55]
            md:text-[#282b37]
          "
          >
            {details.aboutDescription}
          </p>

          <div
            className="
            mx-auto mt-24
            flex min-h-[336px] w-full max-w-[307px]
            flex-col items-center justify-center gap-12
            rounded-[28px]
            px-8 py-10
            text-center

            md:mt-14
            md:grid md:h-[154px] md:min-h-0
            md:max-w-[1332px]
            md:grid-cols-3
            md:gap-0
            md:px-16 md:py-0
          "
            style={{
              background: "#f2f3f8",
              boxShadow: `
              -8px -8px 18px rgba(255,255,255,0.95),
              10px 14px 28px rgba(185,190,205,0.45)
            `,
            }}
          >
            {[
              [details.serviceLabel, details.serviceValue],
              [details.industryLabel, details.industryValue],
              [details.publishedLabel, details.publishedValue],
            ].map(([label, value]) => (
              <div key={label}>
                <p
                  className="
                  text-[17px] font-bold
                  leading-none tracking-[4px]
                  text-[#3E6FFF]

                  md:text-[20px]
                  md:leading-[20.8px]
                  md:tracking-[3px]
                "
                >
                  {label}
                </p>

                <p
                  className="
                  mt-4
                  text-[12px]
                  font-normal leading-[18px]
                  text-[#282b37]/75

                  md:mt-6
                  md:text-[15px]
                  md:leading-[24px]
                  md:text-[#282b37]
                "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <img
            src={project.aboutImage}
            alt={imageAlts.aboutImage}
            className="
            mx-auto mt-24 hidden
            h-[715px] w-full max-w-[1450px]
            rounded-[32px]
            object-cover

            md:block md:mt-40
          "
          />
        </section>

        {/* UI KIT */}
        <section className="px-5 py-15 text-center md:px-12 md:py-40 xl:px-14">
          <h2
            className="
              text-[22px] font-medium
              tracking-[-0.04em]
              text-[#282b37]

              md:text-[32px]
            "
          >
            {details.uiKitTitle}
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-[400px]
              text-[11px]
              leading-[1.55]
              text-[#282b37]/60

              md:max-w-[700px]
              md:text-[13px]
              md:leading-[1.65]
              md:text-[#282b37]
            "
          >
            {details.uiKitDescription}
          </p>

          <div
            className="
              mx-auto mt-16

              md:mt-24
              md:grid
              md:max-w-[931px]
              md:grid-cols-[317px_317px_247px]
              md:gap-6
            "
          >
            {/* TOP LEFT */}
            <div
              className="rounded-[28px] p-[18px]"
              style={{
                background: "#f2f3f8",
                ...embossedCardStyle,
              }}
            >
              <div
                className="flex h-[322px] items-end rounded-[20px] px-8 pb-8"
                style={{ backgroundColor: "#234D31" }}
              >
                <span className="text-[26px] tracking-[-0.08em] text-white">
                  #EB005B
                </span>
              </div>
            </div>

            {/* TOP CENTER */}
            <div
              className="rounded-[28px] p-[18px]"
              style={{
                background: "#f2f3f8",
                ...embossedCardStyle,
              }}
            >
              <div
                className="flex h-[322px] items-end rounded-[20px] px-8 pb-8"
                style={{ backgroundColor: "#C6C6C6" }}
              >
                <span className="text-[26px] tracking-[-0.08em] text-[#35543D]">
                  #C6C6C6
                </span>
              </div>
            </div>

            {/* RIGHT TALL CARD */}
            <div
              className="row-span-2 rounded-[28px] p-[18px]"
              style={{
                background: "#f2f3f8",
                ...embossedCardStyle,
              }}
            >
              <div
                className="flex h-full min-h-[572px] items-end rounded-[20px] px-8 pb-8"
                style={{ backgroundColor: "#338A68" }}
              >
                <span className="text-[26px] tracking-[-0.08em] text-white">
                  #1B2858
                </span>
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div
              className="col-span-2 rounded-[28px] p-[18px]"
              style={{
                background: "#f2f3f8",
                ...embossedCardStyle,
              }}
            >
              <div className="flex h-[226px] items-end rounded-[20px] bg-[#F8F8F8] px-8 pb-8">
                <span className="text-[26px] tracking-[-0.08em] text-[#35543D]">
                  #EB005B
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* TYPOGRAPHY */}
        <section className="px-5 py-20 md:px-12 md:py-40 xl:px-14">
          <div
            className="
              mx-auto flex max-w-[340px]
              flex-col items-center text-center

              md:grid md:max-w-[1400px]
              md:grid-cols-[520px_760px]
              md:items-center md:gap-24
              md:text-left
            "
          >
            <div
              className="
                text-[145px] font-extrabold
                leading-none tracking-[-0.04em]
                text-[#2B2C38]

                md:text-[300px]
              "
              style={{
                opacity: 0.1,
                fontFamily: "Montserrat Alternates, sans-serif",
              }}
            >
              Aa
            </div>

            <div className="mt-4 md:mt-0">
              <h2
                className="
                  text-[27px] font-semibold
                  leading-none tracking-[-0.04em]
                  text-[#262933]

                  md:text-[60px]
                  md:tracking-[0]
                "
                style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
              >
                Montserrat Alternates
              </h2>

              <p
                className="
                  mt-8 text-[10px] font-normal
                  leading-[1.7] tracking-[0]
                  text-[#262933]/35

                  md:text-[20px]
                  md:leading-normal
                  md:text-[#262933]/50
                "
                style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                <br />
                abcdefghijklmnopqrstuvwxyz ./-=!|&?1@
              </p>

              <div
                className="
                  mt-7 flex w-full justify-between
                  gap-0 text-[10px] text-[#262933]/55

                  md:mt-12
                  md:justify-start
                  md:gap-20
                  md:text-[18px]
                  md:text-[#262933]
                "
                style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
              >
                <span className="font-normal">Regular</span>
                <span className="font-medium">Medium</span>
                <span className="font-bold">Bold</span>
                <span className="font-extrabold">Extrabold</span>
              </div>
            </div>
          </div>

          <img
            src={project.fontImage}
            alt={imageAlts.fontImage}
            className="
              mx-auto mt-24 hidden
              h-[715px] w-full max-w-[1450px]
              rounded-[32px] object-cover

              md:mt-40 md:block
            "
          />
        </section>

        {/* ADAPTIVE*/}
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
              alt={imageAlts.adaptive1}
              className="h-[520px] w-full rounded-[26px] object-cover"
            />
            <img
              src={project.adaptive2}
              alt={imageAlts.adaptive2}
              className="h-[520px] w-full rounded-[26px] object-cover"
            />
          </div>

          <img
            src={project.fontImage}
            alt={imageAlts.finalPreview}
            className="mx-auto mt-24 h-[650px] w-full max-w-[1220px] rounded-[32px] object-cover"
          />
        </section>

        {/* TABLET + QUOTE */}
        <section className="grid grid-cols-1 items-center gap-20 px-8 py-28 md:px-12 xl:grid-cols-2 xl:px-14">
          <img
            src={project.tabletImage}
            alt={imageAlts.tabletImage}
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


        <OurPortfolioSection />
        <BuildTogetherSection />
      </div>
    </main>
  );
}
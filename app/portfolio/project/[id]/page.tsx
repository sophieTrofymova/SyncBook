"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import { BuildTogetherSection } from "@/app/about/sections-about-us/buil-together-section";
import { embossedPillStyle, embossedCardStyle } from "@/lib/ui-styles";

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
  "/Portfolio/projects/3/kolinsky.png",
  "/Portfolio/projects/3/occollo.png",
];

export default function PortfolioProjectPage() {
  const { t } = useLanguage();
  const params = useParams();

  const id = Number(params.id ?? 0);
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
                className="absolute bottom-[34px] left-[-165px] flex h-[112px] w-[112px] items-center justify-center rounded-full whitespace-pre-line text-center text-[18px] font-semibold leading-[1.15] transition-transform duration-300 hover:scale-[0.96]"
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
              className="
                rounded-full
                border border-white/70
                bg-transparent
                px-16 py-5
                text-[17px]
                font-medium
                text-white
                transition-all duration-300
                hover:bg-white
                hover:!text-[#232634]
                hover:border-white
              "
            >
              {details.seeAllServices}
            </Link>
          </div>
        </section>

        {/* ABOUT PROJECT */}
        <section className="px-8 pb-32 pt-36 text-center md:px-12 xl:px-14">
          <h2 className="text-[40px] font-semibold uppercase leading-none tracking-[0.08em] text-[#3E6FFF]">
            {details.aboutTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.55] tracking-[-0.01em] text-[#282b37]">
            {details.aboutDescription}
          </p>

          <div
            className="
              mx-auto mt-14 grid h-[154px] w-full max-w-[1332px]
              grid-cols-3 items-center rounded-[28px]
              px-16 text-center
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
                <p className="text-[20px] font-bold leading-[20.8px] tracking-[3px] text-[#3E6FFF]">
                  {label}
                </p>

                <p className="mt-6 text-[15px] font-normal leading-[24px] text-[#282b37]">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <img
            src={project.aboutImage}
            alt=""
            className="
              mx-auto mt-40 h-[715px] w-full max-w-[1450px] rounded-[32px] object-cover
              rounded-[22px] object-cover
            "
          />
        </section>

        {/* UI KIT */}
        <section className="px-8 py-40 text-center md:px-12 xl:px-14">
          <h2 className="text-[32px] font-medium tracking-[-0.04em]">
            {details.uiKitTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[13px] leading-[1.65]">
            {details.uiKitDescription}
          </p>

          <div className="mx-auto mt-24 grid w-fit grid-cols-[317px_317px_247px] gap-6">

          {/* LEFT TOP */}
          <div
            className="rounded-[28px] p-[18px]"
            style={{
              background: "#f2f3f8",
              boxShadow: `
                -8px -8px 18px rgba(255,255,255,0.95),
                10px 14px 28px rgba(185,190,205,0.45)
              `,
            }}
          >
            <div className="flex h-[322px] items-end rounded-[20px] bg-[#234D31] px-8 pb-8">
              <span className="text-[26px] font-normal tracking-[-0.08em] text-white">
                #EB005B
              </span>
            </div>
          </div>

          {/* CENTER TOP */}
          <div
            className="rounded-[28px] p-[18px]"
            style={{
              background: "#f2f3f8",
              boxShadow: `
                -8px -8px 18px rgba(255,255,255,0.95),
                10px 14px 28px rgba(185,190,205,0.45)
              `,
            }}
          >
            <div className="flex h-[322px] items-end rounded-[20px] bg-[#C6C6C6] px-8 pb-8">
              <span className="text-[26px] font-normal tracking-[-0.08em] text-[#35543D]">
                #C6C6C6
              </span>
            </div>
          </div>

          {/* RIGHT TALL */}
          <div
            className="row-span-2 rounded-[28px] p-[18px]"
            style={{
              background: "#f2f3f8",
              boxShadow: `
                -8px -8px 18px rgba(255,255,255,0.95),
                10px 14px 28px rgba(185,190,205,0.45)
              `,
            }}
          >
            <div className="flex h-full min-h-[670px] items-end rounded-[20px] bg-[#338A68] px-8 pb-8">
              <span className="text-[26px] font-normal tracking-[-0.08em] text-white">
                #1B2858
              </span>
            </div>
          </div>

          {/* BOTTOM WIDE */}
          <div
            className="col-span-2 rounded-[28px] p-[18px]"
            style={{
              background: "#f2f3f8",
              boxShadow: `
                -8px -8px 18px rgba(255,255,255,0.95),
                10px 14px 28px rgba(185,190,205,0.45)
              `,
            }}
          >
            <div className="flex h-[226px] items-end rounded-[20px] bg-[#F8F8F8] px-8 pb-8">
              <span className="text-[26px] font-normal tracking-[-0.08em] text-[#35543D]">
                #EB005B
              </span>
            </div>
          </div>

        </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="px-8 py-40 md:px-12 xl:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-[520px_760px] items-center gap-24">
            {/* LEFT */}
            <div
              className="text-[300px] font-extrabold leading-none tracking-[-0.04em] text-[#2B2C38]"
              style={{
                opacity: 0.1,
                fontFamily: "Montserrat Alternates, sans-serif",
              }}
            >
              Aa
            </div>

            {/* RIGHT */}
            <div>
              <h2
                className="text-[60px] font-semibold leading-none tracking-[0] text-[#262933]"
                style={{ fontFamily: "Montserrat Alternates, sans-serif",}}
              >
                Montserrat Alternates
              </h2>

              <p
                className="mt-8 text-[20px] font-normal leading-normal tracking-[0] text-[#262933]/50"
                style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                <br />
                abcdefghijklmnopqrstuvwxyz ./-=!|&?1@
              </p>

              <div
                className="mt-12 flex gap-20 text-[18px] text-[#262933]"
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
            alt=""
            className="mx-auto mt-40 h-[715px] w-full max-w-[1450px] rounded-[32px] object-cover"
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
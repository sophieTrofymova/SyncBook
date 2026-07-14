"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

import { useLanguage } from "@/lib/language-context";
import { BuildTogetherSection } from "@/components/sections/shared/buil-together-section";
import { OurPortfolioSection } from "@/components/sections/home/our-portfolio-section";
import { embossedCardStyle, embossedPillStyle } from "@/lib/ui-styles";

type PaletteColor = {
  hex: string;
  textColor: string;
};

type ProjectTheme = {
  accent: string;
  secondary: string;
  dark: string;
  surface: string;
  text: string;
  muted: string;
  palette: [
    PaletteColor,
    PaletteColor,
    PaletteColor,
    PaletteColor,
  ];
};

type ProjectConfig = {
  heroImage: string;
  aboutImage: string;
  fontImage: string;
  adaptive1: string;
  adaptive2: string;
  finalPreview: string;
  tabletImage: string;
  fontFamily: string;
  websiteUrl?: string;
  theme: ProjectTheme;
};

type ProjectImageAlts = {
  heroImage: string;
  aboutImage: string;
  fontImage: string;
  adaptive1: string;
  adaptive2: string;
  finalPreview: string;
  tabletImage: string;
};

const rosendaTheme: ProjectTheme = {
  accent: "#262626",
  secondary: "#555555",
  dark: "#262626",
  surface: "#F2F3F8",
  text: "#555555",
  muted: "#6F7180",

  palette: [
    {
      hex: "#262626",
      textColor: "#FFFFFF",
    },
    {
      hex: "#C6C6C6",
      textColor: "#555555",
    },
    {
      hex: "#F8F8F8",
      textColor: "#555555",
    },
    {
      hex: "#555555",
      textColor: "#FFFFFF",
    },
  ],
};

const kolinskyTheme: ProjectTheme = {
  accent: "#4B74FF",
  secondary: "#3E6FFF",
  dark: "#282B37",
  surface: "#F2F3F8",
  text: "#282B37",
  muted: "#707582",

  palette: [
    {
      hex: "#4B74FF",
      textColor: "#FFFFFF",
    },
    {
      hex: "#282B37",
      textColor: "#FFFFFF",
    },
    {
      hex: "#F8F9FC",
      textColor: "#282B37",
    },
    {
      hex: "#707582",
      textColor: "#FFFFFF",
    },
  ],
};

const mirakiTheme: ProjectTheme = {
  accent: "#25422E",
  secondary: "#25422E",
  dark: "#25422E",
  surface: "#F2F3F8",
  text: "#25422E",
  muted: "#6D766D",

  palette: [
    {
      hex: "#25422E",
      textColor: "#FFFFFF",
    },
    {
      hex: "#C6C6C6",
      textColor: "#25422E",
    },
    {
      hex: "#F8F8F8",
      textColor: "#25422E",
    },
    {
      hex: "#2C8065",
      textColor: "#FFFFFF",
    },
  ],
};

const projects: ProjectConfig[] = [
  {
    heroImage: "/Portfolio/Rosenda/rosenda-main.png",
    aboutImage: "/Portfolio/Rosenda/rosenda-about.png",
    fontImage: "/Portfolio/Rosenda/rosenda-typography.png",
    adaptive1: "/Portfolio/Rosenda/rosenda-mobile.png",
    adaptive2: "/Portfolio/Rosenda/rosenda-desktop.png",
    finalPreview: "/Portfolio/Rosenda/rosenda-final-preview.png",
    tabletImage: "/Portfolio/Rosenda/rosenda-tablet.png",

    fontFamily: "Montserrat Alternates, sans-serif",

    /*
     * Когда появится ссылка на опубликованный сайт Rosenda,
     * добавь её сюда:
     *
     * websiteUrl: "https://rosenda.example.com",
     */

    theme: rosendaTheme,
  },

  {
    heroImage: "/Portfolio/projects/project-2-main.png",
    aboutImage: "/Portfolio/projects/project-2-main.png",
    fontImage: "/Portfolio/projects/project-2-small-1.png",
    adaptive1: "/Portfolio/projects/project-2-small-2.png",
    adaptive2: "/Portfolio/projects/project-2-main.png",
    finalPreview: "/Portfolio/projects/project-2-small-1.png",
    tabletImage: "/Portfolio/projects/project-2-small-2.png",

    fontFamily: "Montserrat Alternates, sans-serif",

    theme: kolinskyTheme,
  },

  {
    heroImage: "/Portfolio/projects/3/project-3-main.png",
    aboutImage: "/Portfolio/projects/3/miraki-about.png",
    fontImage: "/Portfolio/projects/3/miraki-font.jpg",
    adaptive1: "/Portfolio/projects/3/project-3-small-2.jpg",
    adaptive2: "/Portfolio/projects/3/miraki-adaptive-2.png",
    finalPreview: "/Portfolio/projects/3/project-3-adaptive-3.png",
    tabletImage: "/Portfolio/projects/3/miraki-tablet.png",

    fontFamily: "Montserrat Alternates, sans-serif",

    websiteUrl: "https://miraki.pages.dev/",

    theme: mirakiTheme,
  },
];

const projectImageAlts: ProjectImageAlts[] = [
  {
    heroImage: "Rosenda website main interface preview",
    aboutImage: "Rosenda website project overview",
    fontImage: "Rosenda website typography and visual identity",
    adaptive1: "Rosenda responsive website mobile layout",
    adaptive2: "Rosenda responsive website desktop layout",
    finalPreview: "Rosenda website full responsive interface preview",
    tabletImage: "Rosenda website tablet interface preview",
  },

  {
    heroImage: "Kolinsky real estate website main interface preview",
    aboutImage: "Kolinsky real estate website project overview",
    fontImage: "Kolinsky real estate website typography and brand style",
    adaptive1: "Kolinsky real estate website mobile layout",
    adaptive2: "Kolinsky real estate website desktop layout",
    finalPreview: "Kolinsky real estate website responsive interface preview",
    tabletImage: "Kolinsky real estate website tablet interface preview",
  },

  {
    heroImage: "Miraki beauty salon website main interface preview",
    aboutImage: "Miraki beauty salon website project overview",
    fontImage: "Miraki beauty salon website typography and brand style",
    adaptive1: "Miraki beauty salon website mobile layout",
    adaptive2: "Miraki beauty salon website desktop layout",
    finalPreview: "Miraki beauty salon website responsive interface preview",
    tabletImage: "Miraki beauty salon website tablet interface preview",
  },
];

export function PortfolioProjectClient({ id }: { id: number }) {
  const { t } = useLanguage();

  const project = projects[id] ?? projects[0];
  const imageAlts = projectImageAlts[id] ?? projectImageAlts[0];

  const details = t.portfolioPage.projectDetails;
  const projectText = details.projects[id] ?? details.projects[0];

  const [
    primaryColor,
    accentColor,
    lightColor,
    secondaryColor,
  ] = project.theme.palette;

  const projectThemeStyle = {
    "--project-accent": project.theme.accent,
    "--project-secondary": project.theme.secondary,
    "--project-dark": project.theme.dark,
    "--project-surface": project.theme.surface,
    "--project-text": project.theme.text,
    "--project-muted": project.theme.muted,
  } as CSSProperties;

  return (
    <main
      style={projectThemeStyle}
      className="min-h-screen overflow-hidden text-[var(--project-text)]"
    >
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        {/* HERO */}
        <section className="relative px-5 pb-14 pt-10 md:px-12 md:pt-14 xl:px-14">
          <Link
            href="/portfolio"
            aria-label={details.backAlt}
            className="
              mb-10 inline-flex
              text-[42px] leading-none
              text-[#a8abb4]
              transition-colors
              hover:text-[var(--project-accent)]

              md:mb-14
            "
          >
            <img
              src="/Portfolio/projects/3/Vector.png"
              alt={details.backAlt}
              className="h-auto w-full"
            />
          </Link>

          <div
            className="
              grid grid-cols-1 gap-12

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-start lg:gap-16
            "
          >
            <div>
              <h1
                className="
                  max-w-[620px]
                  whitespace-pre-line
                  text-[36px] font-medium
                  leading-[1.18]
                  tracking-[-0.045em]
                  text-[var(--project-text)]

                  md:text-[48px]
                "
              >
                <span className="text-[var(--project-accent)]">
                  {projectText.accent}
                </span>{" "}
                {projectText.title}
              </h1>

              <p
                className="
                  mt-8 max-w-[500px]
                  text-[14px] leading-[1.55]
                  tracking-[-0.02em]
                  text-[var(--project-muted)]

                  md:mt-10 md:text-[16px]
                  md:leading-[1.45]
                "
              >
                {details.heroDescription}
              </p>

              <div
                className="
                  mt-12 flex flex-col gap-10

                  sm:flex-row sm:gap-16
                  md:mt-20 md:gap-24
                "
              >
                <div>
                  <div
                    className="
                      text-[42px] font-semibold
                      leading-none tracking-[-0.04em]
                      text-[var(--project-accent)]

                      md:text-[48px]
                    "
                  >
                    {details.stat1}
                  </div>

                  <p className="mt-4 max-w-[150px] text-[15px] leading-[1.35] text-[var(--project-muted)]">
                    {details.stat1Text}
                  </p>
                </div>

                <div>
                  <div
                    className="
                      text-[42px] font-semibold
                      leading-none tracking-[-0.04em]
                      text-[var(--project-accent)]

                      md:text-[48px]
                    "
                  >
                    {details.stat2}
                  </div>

                  <p className="mt-4 max-w-[150px] text-[15px] leading-[1.35] text-[var(--project-muted)]">
                    {details.stat2Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:-mt-2">
              <img
                src={project.heroImage}
                alt={imageAlts.heroImage}
                className="
                  h-[360px] w-full
                  rounded-[28px] object-cover

                  md:h-[500px] md:rounded-[40px]
                  lg:h-[610px] lg:rounded-[52px]
                "
              />

              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-6 flex h-[100px] w-[100px]
                    items-center justify-center
                    whitespace-pre-line rounded-full
                    text-center text-[15px]
                    font-semibold leading-[1.15]
                    transition-transform duration-300
                    hover:scale-[0.96]

                    lg:absolute lg:bottom-[34px]
                    lg:left-[-140px] lg:mt-0
                    lg:h-[112px] lg:w-[112px]
                    lg:text-[18px]

                    xl:left-[-165px]
                  "
                  style={{
                    background: "var(--project-surface)",
                    color: "var(--project-accent)",
                    ...embossedPillStyle,
                  }}
                >
                  {details.visitWebsite}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* PROJECT CTA STRIP */}
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--project-accent)] px-5 py-7 text-white md:px-12">
          <div
            className="
              mx-auto flex max-w-[1700px]
              flex-col gap-6

              md:flex-row md:items-center
              md:justify-between
            "
          >
            <p className="text-[16px] tracking-[-0.02em] md:text-[18px]">
              {details.ctaText}{" "}
              <span className="font-semibold">{details.ctaStrong}</span>{" "}
              {details.ctaAfter}
            </p>

            <Link
              href="/services"
              className="
                w-fit rounded-full
                border border-white/70
                bg-transparent
                px-10 py-4
                text-[15px] font-medium text-white
                transition-all duration-300

                hover:border-white
                hover:bg-white
                hover:!text-[var(--project-text)]

                md:px-16 md:py-5
                md:text-[17px]
              "
            >
              {details.seeAllServices}
            </Link>
          </div>
        </section>

        {/* ABOUT PROJECT */}
        <section className="px-5 pb-20 pt-30 md:px-12 md:pb-32 md:pt-36 xl:px-14">
          <h2
            className="
              text-left text-[22px]
              font-semibold uppercase
              leading-none tracking-[0.02em]
              text-[var(--project-accent)]

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
              leading-[1.45]
              tracking-[-0.01em]
              text-[var(--project-muted)]

              md:mx-auto md:max-w-[760px]
              md:text-center md:text-[15px]
              md:leading-[1.55]
            "
          >
            {details.aboutDescription}
          </p>

          <div
            className="
              mx-auto mt-24
              flex min-h-[336px]
              w-full max-w-[307px]
              flex-col items-center
              justify-center gap-12
              rounded-[28px]
              px-8 py-10
              text-center

              md:mt-14
              md:grid md:h-[154px]
              md:min-h-0 md:max-w-[1332px]
              md:grid-cols-3 md:gap-0
              md:px-16 md:py-0
            "
            style={{
              background: "var(--project-surface)",
              boxShadow: `
                -8px -8px 18px rgba(255, 255, 255, 0.95),
                10px 14px 28px rgba(185, 190, 205, 0.45)
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
                    text-[var(--project-accent)]

                    md:text-[20px]
                    md:leading-[20.8px]
                    md:tracking-[3px]
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-4 text-[12px]
                    font-normal leading-[18px]
                    text-[var(--project-muted)]

                    md:mt-6 md:text-[15px]
                    md:leading-[24px]
                    md:text-[var(--project-text)]
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
              h-[715px] w-full
              max-w-[1450px]
              rounded-[32px]
              object-cover

              md:mt-40 md:block
            "
          />
        </section>

        {/* UI KIT */}
        <section className="px-5 py-15 text-center md:px-12 md:py-20 xl:px-14">
          <h2
            className="
              text-[22px] font-medium
              tracking-[-0.04em]
              text-[var(--project-text)]

              md:text-[32px]
            "
          >
            {details.uiKitTitle}
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-[400px]
              text-[11px] leading-[1.55]
              text-[var(--project-muted)]

              md:max-w-[700px]
              md:text-[13px]
              md:leading-[1.65]
              md:text-[var(--project-text)]
            "
          >
            {details.uiKitDescription}
          </p>

          <div
            className="
              mx-auto mt-16
              flex max-w-[420px]
              flex-col gap-4

              md:mt-24
              md:grid md:max-w-fit
              md:grid-cols-[317px_317px_247px]
              md:gap-6
            "
          >
            {/* TOP ROW */}
            <div className="flex gap-4 md:contents">
              {[primaryColor, accentColor].map((color) => (
                <div
                  key={color.hex}
                  className="
                    flex-1 rounded-[20px]
                    p-[10px]

                    md:rounded-[28px]
                    md:p-[18px]
                  "
                  style={{
                    background: "var(--project-surface)",
                    ...embossedCardStyle,
                  }}
                >
                  <div
                    className="
                      flex h-[120px]
                      items-end rounded-[14px]
                      px-3 pb-3

                      md:h-[322px]
                      md:rounded-[20px]
                      md:px-8 md:pb-8
                    "
                    style={{
                      backgroundColor: color.hex,
                    }}
                  >
                    <span
                      className="
                        text-[11px]
                        font-normal
                        tracking-[-0.06em]

                        md:text-[26px]
                        md:tracking-[-0.08em]
                      "
                      style={{
                        color: color.textColor,
                      }}
                    >
                      {color.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* LIGHT CARD */}
            <div
              className="
                rounded-[20px] p-[10px]

                md:col-span-2
                md:rounded-[28px]
                md:p-[18px]
              "
              style={{
                background: "var(--project-surface)",
                ...embossedCardStyle,
              }}
            >
              <div
                className="
                  flex h-[150px]
                  items-end rounded-[14px]
                  px-3 pb-3

                  md:h-[226px]
                  md:rounded-[20px]
                  md:px-8 md:pb-8
                "
                style={{
                  backgroundColor: lightColor.hex,
                }}
              >
                <span
                  className="
                    text-[11px]
                    font-normal
                    tracking-[-0.06em]

                    md:text-[26px]
                    md:tracking-[-0.08em]
                  "
                  style={{
                    color: lightColor.textColor,
                  }}
                >
                  {lightColor.hex}
                </span>
              </div>
            </div>

            {/* SECONDARY CARD */}
            <div
              className="
                rounded-[20px] p-[10px]

                md:col-start-3
                md:row-start-1
                md:row-span-2
                md:rounded-[28px]
                md:p-[18px]
              "
              style={{
                background: "var(--project-surface)",
                ...embossedCardStyle,
              }}
            >
              <div
                className="
                  flex h-[135px]
                  items-end rounded-[14px]
                  px-3 pb-3

                  md:h-full
                  md:min-h-[650px]
                  md:rounded-[20px]
                  md:px-8 md:pb-8
                "
                style={{
                  backgroundColor: secondaryColor.hex,
                }}
              >
                <span
                  className="
                    text-[11px]
                    font-normal
                    tracking-[-0.06em]

                    md:text-[26px]
                    md:tracking-[-0.08em]
                  "
                  style={{
                    color: secondaryColor.textColor,
                  }}
                >
                  {secondaryColor.hex}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="px-5 py-20 md:px-12 md:py-20 xl:px-14">
          <div
            className="
              mx-auto flex max-w-[340px]
              flex-col items-center
              text-center

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
                text-[var(--project-dark)]

                md:text-[300px]
              "
              style={{
                opacity: 0.1,
                fontFamily: project.fontFamily,
              }}
            >
              Aa
            </div>

            <div className="mt-4 md:mt-0">
              <h2
                className="
                  text-[27px] font-semibold
                  leading-none tracking-[-0.04em]
                  text-[var(--project-text)]

                  md:text-[60px]
                  md:tracking-[0]
                "
                style={{
                  fontFamily: project.fontFamily,
                }}
              >
                {details.typographyTitle}
              </h2>

              <p
                className="
                  mt-8 text-[10px]
                  font-normal leading-[1.7]
                  tracking-[0]
                  text-[var(--project-muted)]

                  md:text-[20px]
                  md:leading-normal
                "
                style={{
                  fontFamily: project.fontFamily,
                }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
                <br />
                abcdefghijklmnopqrstuvwxyz ./-=!|&amp;?1@
              </p>

              <div
                className="
                  mt-7 flex w-full
                  justify-between gap-0
                  text-[10px]
                  text-[var(--project-muted)]

                  md:mt-12
                  md:justify-start
                  md:gap-20
                  md:text-[18px]
                  md:text-[var(--project-text)]
                "
                style={{
                  fontFamily: project.fontFamily,
                }}
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
              h-[715px] w-full
              max-w-[1450px]
              rounded-[32px]
              object-cover

              md:mt-40 md:block
            "
          />
        </section>

        {/* ADAPTIVE VERSIONS */}
        <section className="px-5 py-20 text-center md:px-12 md:py-28 xl:px-14">
          <h2
            className="
              text-[28px] font-medium
              tracking-[-0.04em]
              text-[var(--project-text)]

              md:text-[34px]
            "
          >
            {details.adaptiveTitle}
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-[760px]
              text-[13px]
              leading-[1.65]
              text-[var(--project-muted)]

              md:text-[var(--project-text)]
            "
          >
            {details.adaptiveDescription}
          </p>

          <div
            className="
              mx-auto mt-16
              grid max-w-[1080px]
              grid-cols-1 gap-8

              md:mt-20
              md:grid-cols-2
              md:gap-10
            "
          >
            <img
              src={project.adaptive1}
              alt={imageAlts.adaptive1}
              className="
                h-[420px] w-full
                rounded-[26px]
                object-cover

                md:h-[520px]
              "
            />

            <img
              src={project.adaptive2}
              alt={imageAlts.adaptive2}
              className="
                h-[420px] w-full
                rounded-[26px]
                object-cover

                md:h-[520px]
              "
            />
          </div>

          <img
            src={project.finalPreview}
            alt={imageAlts.finalPreview}
            className="
              mx-auto mt-16
              h-[420px] w-full
              max-w-[1220px]
              rounded-[28px]
              object-cover

              md:mt-24
              md:h-[650px]
              md:rounded-[32px]
            "
          />
        </section>

        {/* TABLET + QUOTE */}
        <section
          className="
            grid grid-cols-1
            items-center gap-14
            px-5 py-20

            md:px-12 md:py-28

            xl:grid-cols-2
            xl:gap-20 xl:px-14
          "
        >
          <img
            src={project.tabletImage}
            alt={imageAlts.tabletImage}
            className="
              h-[420px] w-full
              object-contain

              md:h-[560px]
            "
          />

          <div className="max-w-[520px]">
            <p
              className="
                text-[15px] leading-[1.65]
                tracking-[0.06em]
                text-[var(--project-text)]

                md:text-[16px]
                md:tracking-[0.08em]
              "
            >
              {details.quote}
            </p>

            <p
              className="
                mt-10 text-[17px]
                font-semibold
                tracking-[0.08em]
                text-[var(--project-accent)]
              "
            >
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
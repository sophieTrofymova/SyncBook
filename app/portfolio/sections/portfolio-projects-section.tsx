"use client";

import { useLanguage } from "@/lib/language-context";
import {
  embossedCardStyle,
  embossedPillStyle,
  embossedPillPressedStyle,
} from "@/lib/ui-styles";
import Link from "next/link";

const projects = [
  {
    main: "/Portfolio/project-1-main.png",
    small1: "/Portfolio/project-1-small-1.png",
    small2: "/Portfolio/project-1-small-2.png",
  },
  {
    main: "/Portfolio/project-2-main.png",
    small1: "/Portfolio/project-2-small-1.png",
    small2: "/Portfolio/project-2-small-2.png",
  },
  {
    main: "/Portfolio/project-3-main.png",
    small1: "/Portfolio/project-3-small-1.png",
    small2: "/Portfolio/project-3-small-2.png",
  },
];

export function PortfolioProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f2f3f8] px-10 py-24">

      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex items-center justify-between">
          <h2 className="text-[28px] font-medium tracking-[-0.04em] text-[#282b37]">
            {t.portfolioPage.allProjects}
          </h2>

          <button
            className="flex h-[68px] w-[68px] items-center justify-center rounded-full transition-all duration-300 hover:scale-[0.97] active:scale-[0.94]"
            style={{ background: "#f8f9fc", ...embossedPillStyle }}
          >
            <img src="/Portfolio/settings.png" className="h-[20px]" />
          </button>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="
                grid min-h-[360px] grid-cols-[400px_180px_1fr]
                items-start gap-x-10 rounded-[40px] p-8
                transition-transform duration-300 hover:translate-y-[3px]
              "
              style={{ background: "#f8f9fc", ...embossedCardStyle }}
            >
              <img
                src={project.main}
                className="h-[300px] w-[400px] rounded-[26px] object-cover"
              />

              <div className="flex h-[300px] w-[180px] flex-col gap-6">
                <img
                  src={project.small1}
                  className="h-[140px] w-[180px] rounded-[18px] object-cover"
                />
                <img
                  src={project.small2}
                  className="h-[140px] w-[180px] rounded-[18px] object-cover"
                />
              </div>

              <div className="relative h-[300px] pl-14">
                <div className="grid grid-cols-[280px_340px] gap-x-12">
                  <h3 className="text-[26px] font-medium leading-[1.25] tracking-[-0.03em] text-[#282b37]">
                    {t.portfolioPage.projects[index].title}
                  </h3>

                  <p className="text-[16px] leading-[1.45] text-[#707582]">
                    {t.portfolioPage.projectDescription}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {t.portfolioPage.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#4b74ff]/50 px-4 py-2 text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-[14px] left-14 grid grid-cols-2 gap-x-14 gap-y-4 text-[15px]">
                  {t.portfolioPage.hashtags.map((tag: string) => (
                    <span key={tag}>
                      <b className="mr-2 text-[24px] text-[#4b74ff]">#</b>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-[18px] right-0">
                <Link
                    href={`/portfolio/project/${index}`}
                    className="group flex w-[165px] items-center rounded-full p-1.5 transition-all duration-300 hover:scale-[0.98] active:scale-[0.95]"
                    style={{ background: "#f8f9fc", ...embossedPillStyle }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                        embossedPillPressedStyle.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                        embossedPillStyle.boxShadow;
                    }}
                >
                    <span className="flex-1 text-[14px] font-medium">
                    {t.portfolioPage.seeMore}
                    </span>

                    <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#4b74ff] text-[22px] text-white shadow-[0_12px_28px_rgba(75,116,255,0.35)] transition-transform group-hover:translate-x-1">
                    →
                    </span>
                </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="mx-auto mt-16 block rounded-full px-16 py-5 text-[16px] transition-all duration-300"
          style={{ background: "#f8f9fc", ...embossedPillStyle }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              embossedPillPressedStyle.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              embossedPillStyle.boxShadow;
          }}
        >
          {t.portfolioPage.showMore}
        </button>
      </div>
    </section>
  );
}
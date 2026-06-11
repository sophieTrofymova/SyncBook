"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  embossedCardStyle,
  embossedPillStyle,
  embossedPillPressedStyle,
} from "@/lib/ui-styles";
import Link from "next/link";

const projects = [
  {
    textIndex: 0, // Miraki card text
    projectId: 2, // Miraki full page
    main: "/Portfolio/project-3-main.png",
    small1: "/Portfolio/project-3-small-1.png",
    small2: "/Portfolio/project-3-small-2.png",
    filterIndexes: [1, 2],
  },
  {
    textIndex: 2, // Refa card text
    projectId: 0, // Refa coming soon page
    main: "/Portfolio/project-1-main.png",
    small1: "/Portfolio/project-1-small-1.png",
    small2: "/Portfolio/project-1-small-2.png",
    filterIndexes: [0, 2],
  },
  {
    textIndex: 1, // Kolinsky card text
    projectId: 1, // Kolinsky coming soon page
    main: "/Portfolio/project-2-main.png",
    small1: "/Portfolio/project-2-small-1.png",
    small2: "/Portfolio/project-2-small-2.png",
    filterIndexes: [0, 1],
  },
];
export function PortfolioProjectsSection() {
  const { t } = useLanguage();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(2);

  const filters = useMemo(() => {
    return ["all", ...t.portfolioPage.hashtags];
  }, [t.portfolioPage.hashtags]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) =>
      project.filterIndexes.some(
        (index) => t.portfolioPage.hashtags[index] === activeFilter
      )
    );
  }, [activeFilter, t.portfolioPage.hashtags]);

  const visibleProjects =
  activeFilter === "all"
    ? filteredProjects
    : filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(2);
    setFiltersOpen(false);
  };

  return (
    <section className="px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex items-center justify-between md:mb-14">
          <h2 className="text-[20px] font-medium tracking-[-0.04em] text-[#282b37] md:text-[28px]">
            {t.portfolioPage.allProjects}
          </h2>

          <button
            type="button"
            onClick={() => setFiltersOpen((prev) => !prev)}
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-300 hover:scale-[0.97] active:scale-[0.94] md:h-[68px] md:w-[68px]"
            style={{ background: "#f8f9fc", ...embossedPillStyle }}
          >
            <img
              src="/Portfolio/settings.png"
              alt={t.portfolioPage.settingsAlt}
              className="h-[16px] md:h-[20px]"
            />
          </button>
        </div>

        {filtersOpen && (
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`
                  rounded-full border px-5 py-2 text-[12px]
                  transition-all duration-300 md:text-[14px]
                  ${
                    activeFilter === filter
                      ? "border-[#4b74ff] bg-[#4b74ff] text-white"
                      : "border-[#4b74ff]/40 text-[#282b37] hover:border-[#4b74ff]"
                  }
                `}
              >
                {filter === "all" ? t.portfolioPage.allProjects : filter}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {visibleProjects.map((project, index) => {
           const textIndex = project.textIndex;
           const projectId = project.projectId;
            return (
              <article
                key={textIndex}
                className="
                  rounded-[28px] p-5
                  transition-transform duration-300 hover:translate-y-[3px]

                  md:grid md:min-h-[360px]
                  md:grid-cols-[400px_180px_1fr]
                  md:items-start md:gap-x-10
                  md:rounded-[40px] md:p-8
                "
                style={{ background: "#f8f9fc", ...embossedCardStyle }}
              >
                <img
                  src={project.main}
                  alt=""
                  className="
                    h-[190px] w-full rounded-[18px] object-cover

                    md:h-[300px] md:w-[400px] md:rounded-[26px]
                  "
                />

                <div className="mt-4 grid grid-cols-2 gap-4 md:mt-0 md:flex md:h-[300px] md:w-[180px] md:flex-col md:gap-6">
                  <img
                    src={project.small1}
                    alt=""
                    className="h-[90px] w-full rounded-[14px] object-cover md:h-[140px] md:w-[180px] md:rounded-[18px]"
                  />
                  <img
                    src={project.small2}
                    alt=""
                    className="h-[90px] w-full rounded-[14px] object-cover md:h-[140px] md:w-[180px] md:rounded-[18px]"
                  />
                </div>

                <div className="relative mt-12 md:mt-0 md:h-[300px] md:pl-14">
                  <div className="text-center md:grid md:grid-cols-[280px_340px] md:gap-x-12 md:text-left">
                    <h3 className="text-[15px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#282b37] md:text-[26px] md:font-medium">
                      {t.portfolioPage.projects[textIndex].title}
                    </h3>

                    <p className="mx-auto mt-7 max-w-[230px] text-[11px] leading-[1.45] text-[#707582] md:mx-0 md:mt-0 md:max-w-none md:text-[16px]">
                      {t.portfolioPage.projects[textIndex].description ??
                              t.portfolioPage.projectDescription}
                    </p>
                  </div>

                  <div className="mx-auto mt-8 flex max-w-[230px] flex-wrap justify-center gap-2 md:mx-0 md:max-w-none md:justify-start md:gap-3">
                    {(
                      t.portfolioPage.projects[textIndex].tags ?? t.portfolioPage.tags
                    ).map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#4b74ff]/50 px-4 py-1.5 text-[10px] text-[#282b37] md:px-4 md:py-2 md:text-[13px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-y-2 text-[11px] text-[#707582] md:absolute md:bottom-[14px] md:left-14 md:mt-0 md:grid-cols-2 md:gap-x-14 md:gap-y-4 md:text-[15px]">
                    {(
                      t.portfolioPage.projects[textIndex].hashtags ?? t.portfolioPage.hashtags
                    ).map((tag: string) => (
                      <span key={tag}>
                        <b className="mr-2 text-[18px] text-[#4b74ff] md:text-[24px]">#</b>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end md:absolute md:bottom-[18px] md:right-0 md:mt-0">
                    <Link
                      href={`/portfolio/project/${projectId}`}
                      className="group flex w-[132px] items-center rounded-full p-1.5 transition-all duration-300 hover:scale-[0.98] active:scale-[0.95] md:w-[165px]"
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
                      <span className="flex-1 text-center text-[11px] font-medium md:text-[14px]">
                        {t.portfolioPage.seeMore}
                      </span>

                      <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#4b74ff] text-[18px] text-white shadow-[0_12px_28px_rgba(75,116,255,0.35)] transition-transform group-hover:translate-x-1 md:h-[48px] md:w-[48px] md:text-[22px]">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {visibleCount < filteredProjects.length && (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="mx-auto mt-12 block rounded-full px-12 py-4 text-[13px] transition-all duration-300 md:mt-16 md:px-16 md:py-5 md:text-[16px]"
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
        )}
      </div>
    </section>
  );
}
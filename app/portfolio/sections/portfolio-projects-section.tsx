"use client";

const projects = [
  {
    title: "Refa group website automation",
    main: "/Portfolio/project-1-main.png",
    small1: "/Portfolio/project-1-small-1.png",
    small2: "/Portfolio/project-1-small-2.png",
  },
  {
    title: 'Website and panel for “Kolinsky”',
    main: "/Portfolio/project-2-main.png",
    small1: "/Portfolio/project-2-small-1.png",
    small2: "/Portfolio/project-2-small-2.png",
  },
  {
    title: "Refa group website automation",
    main: "/Portfolio/project-3-main.png",
    small1: "/Portfolio/project-3-small-1.png",
    small2: "/Portfolio/project-3-small-2.png",
  },
];

const tags = ["Node", "Next.js", "Cloudflare", "Docker", "PostgreSQL", "BankID"];

const neumorphicCardStyle = {
  background: "#f3f3f7",
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.85),
    -12px -12px 28px rgba(255,255,255,0.95),
    16px 20px 40px rgba(185,190,205,0.45)
  `,
};

const neumorphicButtonStyle = {
  background: "#f3f3f7",
  boxShadow: `
    -8px -8px 18px rgba(255,255,255,0.95),
    10px 12px 26px rgba(185,190,205,0.45)
  `,
};

export function PortfolioProjectsSection() {
  return (
    <section className="bg-[#f3f3f7] px-8 py-24 md:px-12 xl:px-14">
      <div className="mx-auto max-w-[1640px]">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-[30px] font-medium tracking-[-0.04em] text-[#282b37]">
            All projects
          </h2>

          <button
            className="flex h-[84px] w-[84px] items-center justify-center rounded-full transition-all duration-300 hover:scale-[0.97] active:scale-[0.94]"
            style={neumorphicButtonStyle}
          >
            <img
              src="/Portfolio/settings.png"
              alt="Settings"
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
        key={index}
        className="
            grid min-h-[394px] grid-cols-[383px_180px_520px_1fr]
            items-start gap-x-8 rounded-[42px] p-8
            transition-all duration-300 hover:translate-y-[3px]
        "
        style={neumorphicCardStyle}
        >
        <img
            src={project.main}
            alt={project.title}
            className="h-[394px] w-[383px] rounded-[24px] object-cover"
        />

        <div className="flex h-[394px] w-[180px] flex-col gap-8">
            <img
            src={project.small1}
            alt=""
            className="h-[181px] w-[180px] rounded-[18px] object-cover"
            />
            <img
            src={project.small2}
            alt=""
            className="h-[181px] w-[180px] rounded-[18px] object-cover"
            />
        </div>

        <div className="w-[520px] pl-6">
            <div className="flex min-h-[125px] gap-10">
            <h3 className="w-[260px] text-[24px] font-medium leading-[1.28] tracking-[-0.03em] text-[#282b37]">
                {project.title}
            </h3>

            <p className="w-[260px] text-[16px] leading-[1.35] tracking-[-0.02em] text-[#707582]">
                We create software that suits your business, not the other way around.
                From CRM to complex ERP systems.
            </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
            {tags.map((tag) => (
                <span
                key={tag}
                className="rounded-full border border-[#4b74ff]/50 px-4 py-2 text-[13px] text-[#282b37]"
                >
                {tag}
                </span>
            ))}
            </div>

            <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] text-[#282b37]">
            <span>
                <b className="mr-2 text-[26px] text-[#4b74ff]">#</b>
                web design
            </span>
            <span>
                <b className="mr-2 text-[26px] text-[#4b74ff]">#</b>
                real estate
            </span>
            <span>
                <b className="mr-2 text-[26px] text-[#4b74ff]">#</b>
                landing page
            </span>
            </div>
        </div>

        <div className="flex h-[394px] items-end justify-end">
            <button
            className="group flex w-[210px] items-center rounded-full p-2 transition-all duration-300 hover:scale-[0.98] active:scale-[0.95]"
            style={neumorphicButtonStyle}
            >
            <span className="flex-1 text-[16px] font-medium">See more</span>

            <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#4b74ff] text-[28px] text-white shadow-[0_10px_24px_rgba(75,116,255,0.35)] transition-transform group-hover:translate-x-1">
                →
            </span>
            </button>
        </div>
        </article>
          ))}
        </div>

        <button
          className="mx-auto mt-20 block rounded-full px-16 py-5 text-[17px] transition-all duration-300 hover:scale-[0.98] active:scale-[0.95]"
          style={neumorphicButtonStyle}
        >
          Show more
        </button>
      </div>
    </section>
  );
}
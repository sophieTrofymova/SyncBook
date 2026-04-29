import { embossedPillStyle } from "@/lib/ui-styles";

const architectureItems = [
  {
    icon: "/Services/icon1.png",
    title: "Tech Stack\nAudit",
    text: "Analysis of your current technologies and recommendations for their optimization.",
  },
  {
    icon: "/Services/icon2.png",
    title: "Scalability\nPlanning",
    text: "Developing a roadmap for your product's development for years to come",
  },
  {
    icon: "/Services/icon3.png",
    title: "Security &\nCompliance",
    text: "Checking systems for vulnerabilities and compliance with international standards.",
  },
];

export function ArchitectureSection() {
  return (
    <section className="bg-[#f3f3f7] px-8 py-28 md:px-12 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-[24px] uppercase tracking-[-0.04em] text-[#4b74ff]">
            WE CONDUCT DEEP CREATION
          </p>

          <h2 className="mx-auto mt-6 max-w-[900px] text-[52px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:text-[60px]">
            Multi-Layered Architecture
            <br />
            for Absolute Scalability
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-28 grid grid-cols-1 gap-16 md:grid-cols-3">
          {architectureItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[420px] flex-col rounded-[48px] px-14 py-14"
              style={embossedPillStyle}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[110px] w-[110px] object-contain"
              />

              <h3 className="mt-16 whitespace-pre-line text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#282b37]">
                {item.title}
              </h3>

              <p className="mt-8 max-w-[300px] text-[18px] leading-[1.35] tracking-[-0.025em] text-[#707582]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
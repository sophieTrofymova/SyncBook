import { embossedPillStyle } from "@/lib/ui-styles";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";

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
    <HorizontalCardCarousel
      eyebrow="WE CONDUCT DEEP CREATION"
      title="Multi-Layered Architecture for Absolute Scalability"
      actionText="Explore architecture"
      items={architectureItems}
      renderItem={(item) => (
        <div
          className="
            flex min-h-[420px] flex-col rounded-[48px] px-14 py-14

            max-md:min-h-[300px]
            max-md:rounded-[32px]
            max-md:px-8
            max-md:py-8
          "
          style={embossedPillStyle}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="
              h-[110px] w-[110px] object-contain

              max-md:h-[92px]
              max-md:w-[92px]
            "
          />

          <h3
            className="
              mt-16 whitespace-pre-line text-[30px] font-medium
              leading-[1.15] tracking-[-0.04em] text-[#282b37]

              max-md:mt-14
              max-md:text-[20px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-8 max-w-[300px] text-[18px] leading-[1.35]
              tracking-[-0.025em] text-[#707582]

              max-md:mt-6
              max-md:max-w-[200px]
              max-md:text-[12px]
            "
          >
            {item.text}
          </p>
        </div>
      )}
    />
  );
}
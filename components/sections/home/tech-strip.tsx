import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function TechStrip() {
  const { t } = useLanguage();
  const { techLogos } = getHomeData(t);

  return (
    <section
      className="
        relative mt-0 mb-16 bg-[#4B74FF]
        px-5 py-7 text-white

        md:mt-2 md:px-12 md:py-8
      "
    >
      <div
        className="
          mx-auto flex max-w-[1700px] flex-col
          items-center justify-center gap-7 text-white/95

          md:flex-row md:justify-between md:gap-8
        "
      >
        <div
          className="
            text-center font-sans text-[13px] font-medium
            tracking-[-0.02em] text-white/90

            md:text-left md:text-[18px]
          "
        >
          {t.techStrip.title}
        </div>

        <div
          className="
            flex w-full items-center justify-between gap-4

            md:w-auto md:justify-start md:gap-24 md:pr-20
          "
        >
          {techLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="
                h-[22px] w-auto object-contain opacity-90
                transition-opacity duration-300 hover:opacity-100

                md:h-[34px]
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
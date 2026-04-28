import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function TechStrip() {
  const { t } = useLanguage();
  const { techResults } = getHomeData(t); 
  return (
    <section className="relative z-20 mt-2 bg-[#4B74FF] px-10 py-8 text-white md:px-12">
      <div className="mx-auto flex max-w-[1700px] max-h-[50px] flex-wrap items-center justify-between gap-8 text-white/95">

        <div className="flex flex-wrap items-center gap-20 pr-20 md:gap-24">
          {techResults.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-[34px] w-auto opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
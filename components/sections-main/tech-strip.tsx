import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function TechStrip() {
  const { t } = useLanguage();
  const { techLogos } = getHomeData(t); 
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#4B74FF] py-8 text-white md:px-12 w-full">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-8 text-white/95">
        <div className="font-sans text-[18px] font-medium tracking-[-0.02em]">
          {t.techStrip.title}
        </div>

        <div className="flex flex-wrap items-center gap-20 pr-20 md:gap-24">
          {techLogos.map((logo) => (
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
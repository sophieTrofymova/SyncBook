import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function TechStrip() {
  const { t } = useLanguage();
  const { techResults } = getHomeData(t); 
  
  const repeatedTechResults = [
    ...techResults,
    ...techResults,
    ...techResults,
    ...techResults,
  ];

  return (
    <section className="relative z-20 mt-2 w-full overflow-hidden bg-[#4B74FF] px-0 py-8 text-white">
      <div className="flex w-max animate-tech-strip items-center gap-20 whitespace-nowrap text-white/95 md:gap-24">
        {repeatedTechResults.map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-[34px] w-auto shrink-0 opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </div>
    </section>
  );
}
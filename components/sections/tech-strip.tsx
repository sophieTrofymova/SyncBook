import { techLogos } from "@/data/home";

export function TechStrip() {
  return (
    <section className="relative z-20 mt-2 bg-[#4B74FF] px-10 py-8 text-white md:px-12">
      <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-8 text-white/95">
        <div className="font-sans text-[18px] font-medium tracking-[-0.02em]">
          Powered by world-class technologies
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
import { ChevronRight } from "lucide-react";
import { navItems } from "@/data/home";
import { embossedPaperStyle } from "@/lib/ui-styles";

export function SiteHeader() {
  return (
    <header className="relative z-20 flex items-start justify-between px-6 pt-4 md:px-12">
      <div className="flex items-center gap-4">
        <div
          className="flex items-center rounded-[44px] border border-white/70 px-6 py-4 md:px-8"
          style={embossedPaperStyle}
        >
          <div className="mr-8 pr-15 md:mr-12">
            <img src="/Group 1.svg" alt="Logo" className="h-[46px] w-auto" />
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative rounded-full px-7 py-3 text-[18px] font-medium tracking-[-0.02em] text-[#2b2f3d] transition-all duration-300 hover:text-[#1f2330]"
              >
                <span className="relative z-10">{item}</span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/80 opacity-0 shadow-[0_12px_28px_rgba(92,101,130,0.14)] transition-all duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-5">
        <div className="flex items-center gap-2">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/80 shadow-[0_6px_18px_rgba(99,110,140,0.10)] ring-1 ring-black/5">
            <span className="text-[25px] leading-none">🇺🇸</span>
          </div>
          <ChevronRight className="h-4 w-4 text-[#2c3140]" />
        </div>
      </div>
    </header>
  );
}
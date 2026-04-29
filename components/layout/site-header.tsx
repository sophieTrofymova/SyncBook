import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/sections-main/language-switcher";
import { embossedPillStyle } from "@/lib/ui-styles";
import Link from "next/link";

export function SiteHeader() {
  const { t } = useLanguage();
  const { navItems } = getHomeData(t);

  const activeItem = navItems[0];

  return (
    <header className="relative z-30 flex items-start justify-between px-6 pt-4 md:px-12">
      <div
        className="flex items-center rounded-[44px] border border-white/70 px-6 py-4 md:px-8"
        style={embossedPillStyle}
      >
        <div className="mr-8 pr-15 md:mr-12">
          <Link href="/">
            <img
              src="/Group 1.svg"
              alt={t.header.logoAlt}
              className="h-[46px] w-auto cursor-pointer"
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => {
            const hrefs = ["/services", "/about", "/portfolio", "/contacts"];
            const active = index === 0;

            return (
              <Link
                key={item}
                href={hrefs[index]}
                className={`
                  group relative rounded-full px-7 py-3 text-[18px]
                  font-medium tracking-[-0.02em] transition-colors duration-300
                  ${active ? "text-[#4B74FF]" : "text-[#2b2f3d] hover:text-[#1f2330]"}
                `}
              >
                <span className="relative z-10">{item}</span>

                <span
                  className="
            pointer-events-none absolute left-1/2 bottom-[-9px]
            h-[8px] w-[100px] -translate-x-1/2 translate-y-[8px]
            rounded-t-full rounded-b-none bg-[#4B74FF] opacity-0
            scale-x-0 origin-center
            transition-[transform,opacity] duration-300 ease-out
            group-hover:scale-x-100 group-hover:opacity-100
          "
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <LanguageSwitcher />
    </header>
  );
}
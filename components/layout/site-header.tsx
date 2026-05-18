"use client";

import { useState } from "react";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/sections-main/language-switcher";
import { embossedPillStyle } from "@/lib/ui-styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const { t } = useLanguage();
  const { navItems } = getHomeData(t);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hrefs = ["/services", "/about", "/portfolio", "/contacts"];

  return (
    <header className="relative z-30 mx-auto flex max-w-[1800px] px-5 pt-5 md:px-12 md:pt-4">
      <div className="relative w-full md:w-auto">
        <div
          className="
            flex h-[72px] w-full items-center justify-between
            rounded-[36px] border border-white/70 px-5
            md:h-auto md:w-auto md:justify-start md:px-8 md:py-4
          "
          style={embossedPillStyle}
        >
          <div className="md:mr-12">
            <Link href="/">
              <img
                src="/Group 1.svg"
                alt={t.header.logoAlt}
                className="h-[38px] w-auto cursor-pointer md:h-[46px]"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item, index) => {
              const href = hrefs[index];
              const active = pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={item}
                  href={href}
                  className="group relative rounded-full px-7 py-3 text-[18px] font-medium tracking-[-0.02em] text-[#2b2f3d]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#4B74FF]">
                    {item}
                  </span>

                  <span
                    className={`
                      pointer-events-none absolute bottom-[-9px] left-1/2
                      h-[8px] w-[100px] -translate-x-1/2 translate-y-[8px]
                      rounded-t-full bg-[#4B74FF]
                      transition-opacity duration-300
                      ${active ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-[34px] w-[34px] items-center justify-center md:hidden"
          >
            {!isMenuOpen ? (
              <img
                src="/burgerMenu.png"
                alt="Menu"
                className="h-[22px] w-[22px] object-contain"
              />
            ) : (
              <span className="relative block h-[16px] w-[22px]">
                <span
                  className="
                    absolute left-0 top-[7px]
                    h-[2px] w-full rotate-45 rounded-full
                    bg-[#232634]
                  "
                />
                <span
                  className="
                    absolute left-0 top-[7px]
                    h-[2px] w-full -rotate-45 rounded-full
                    bg-[#232634]
                  "
                />
              </span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="
              absolute left-0 top-[84px] z-40 w-full overflow-hidden
              rounded-[28px] border border-white/70 bg-[#f1f2f7]/95 p-3
              shadow-[0_20px_50px_rgba(35,38,52,0.18)]
              backdrop-blur-xl md:hidden
            "
          >
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={hrefs[index]}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-[20px] px-5 py-4 text-[18px] font-medium text-[#232634] active:bg-white/70"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className=" 
      hidden md:flex
      absolute right-12 top-4 z-50">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
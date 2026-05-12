"use client";

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

  const hrefs = ["/services", "/about", "/portfolio", "/contacts"];

  return (
    <header className="relative z-30 mx-auto flex max-w-[1800px] items-start justify-between px-6 pt-4 md:px-12">
      <div
        className="flex rounded-[44px] items-center border border-white/70 px-6 py-4 md:px-8"
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
            const href = hrefs[index];

            const active =
              pathname === href ||
              pathname.startsWith(`${href}/`);

            return (
              <Link
                key={item}
                href={href}
                className="
                  group relative rounded-full px-7 py-3 text-[18px]
                  font-medium tracking-[-0.02em] text-[#2b2f3d]
                "
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#4B74FF]">
                  {item}
                </span>

                <span
                  className={`
                    pointer-events-none absolute left-1/2 bottom-[-9px]
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
      </div>

      <LanguageSwitcher />
    </header>
  );
}
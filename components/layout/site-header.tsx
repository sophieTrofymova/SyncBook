"use client";

import { useEffect, useRef, useState } from "react";
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

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [underline, setUnderline] = useState({
    x: 0,
    opacity: 0,
  });

  useEffect(() => {
    const activeIndex = hrefs.findIndex(
      (href) => pathname === href || pathname.startsWith(`${href}/`)
    );

    const activeLink = linkRefs.current[activeIndex];

    if (!activeLink) {
      setUnderline((prev) => ({
        ...prev,
        opacity: 0,
      }));
      return;
    }

    setUnderline({
      x: activeLink.offsetLeft + activeLink.offsetWidth / 2 - 50,
      opacity: 1,
    });
  }, [pathname]);

  return (
    <header className="relative z-30 mx-auto flex max-w-[1800px] items-start justify-between px-6 pt-4 md:px-12">
      <div
        className="flex items-center rounded-[44px] border border-white/70 px-6 py-4 md:px-8"
        style={embossedPillStyle}
      >
        <div className="mr-8 pr-[60px] md:mr-12">
          <Link href="/">
            <img
              src="/Group 1.svg"
              alt={t.header.logoAlt}
              className="h-[46px] w-auto cursor-pointer"
            />
          </Link>
        </div>

        <nav className="relative hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => {
            const href = hrefs[index];

            return (
              <Link
                key={item}
                href={href}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="
                  group relative rounded-full px-7 py-3 text-[18px]
                  font-medium tracking-[-0.02em] text-[#2b2f3d]
                "
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#4B74FF]">
                  {item}
                </span>
              </Link>
            );
          })}

          <span
            className={`
              pointer-events-none absolute bottom-[-9px] left-0
              h-[8px] w-[100px] rounded-t-full bg-[#4B74FF]
              transition-[transform,opacity] duration-500 ease-out
            `}
            style={{
              opacity: underline.opacity,
              transform: `translateX(${underline.x}px) translateY(8px)`,
            }}
          />
        </nav>
      </div>

      <LanguageSwitcher />
    </header>
  );
}
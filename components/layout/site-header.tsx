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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
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
      setUnderline((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    setUnderline({
      x: activeLink.offsetLeft + activeLink.offsetWidth / 2 - 50,
      opacity: 1,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50 mx-auto flex max-w-[1800px] items-start justify-between px-6 pt-4 md:px-12">
      <div
        ref={menuRef}
        className="
          relative flex w-full items-center justify-between
          rounded-[28px] border border-white/70 px-6 py-4
          md:w-auto md:rounded-[44px] md:px-8
        "
        style={embossedPillStyle}
      >
        <div className="md:mr-12 md:pr-[60px]">
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
            className="
              pointer-events-none absolute bottom-[-9px] left-0
              h-[8px] w-[100px] rounded-t-full bg-[#4B74FF]
              transition-[transform,opacity] duration-500 ease-out
            "
            style={{
              opacity: underline.opacity,
              transform: `translateX(${underline.x}px) translateY(8px)`,
            }}
          />
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-6 w-7">
            <span
              className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-[#252936] transition-all duration-300"
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(45deg)"
                  : "translate(-50%, calc(-50% - 8px))",
              }}
            />

            <span
              className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-[#252936] transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 0 : 1,
                transform: "translate(-50%, -50%)",
              }}
            />

            <span
              className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-[#252936] transition-all duration-300"
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, calc(-50% + 8px))",
              }}
            />
          </span>
        </button>

        <div
          className={`
            absolute left-0 top-[calc(100%+12px)] w-full overflow-hidden
            rounded-[28px] border border-white/70 bg-[#eef0f6]
            px-5 transition-all duration-300 md:hidden
            ${isMenuOpen ? "max-h-[370px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"}
          `}
          style={embossedPillStyle}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item, index) => {
              const href = hrefs[index];
              const active =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`
                    rounded-full px-5 py-3 text-[17px] font-medium
                    tracking-[-0.02em] transition-colors duration-300
                    ${active ? "text-[#4B74FF]" : "text-[#2b2f3d]"}
                  `}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-[#d7d9df] pt-4">
            <div className="flex justify-center">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
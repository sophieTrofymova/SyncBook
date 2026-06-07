import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/i18n";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "/flags/us.png", label: "English" },
  { code: "ru", flag: "/flags/ru.png", label: "Russian" },
  { code: "es", flag: "/flags/es.png", label: "Spanish" },
];

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const active = languages.find((l) => l.code === language) ?? languages[0];

  if (variant === "mobile") {
    return (
      <div className="flex items-center justify-center gap-5">
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-label={item.label}
            className={`
              flex h-[38px] w-[38px] items-center justify-center rounded-full
              transition-all duration-200
              ${language === item.code ? "scale-110 ring-2 ring-[#4B74FF]" : "opacity-75"}
            `}
          >
            <img
              src={item.flag}
              alt={item.label}
              className="h-[34px] w-[34px] rounded-full object-cover shadow-[0_10px_22px_rgba(40,47,70,0.20)]"
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative mt-[22px] flex items-center"
      onMouseEnter={() => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        closeTimeout.current = setTimeout(() => setOpen(false), 200);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-4"
        aria-label="Change language"
      >
        <img
          src={active.flag}
          alt={active.label}
          className="h-[34px] w-[34px] rounded-full object-cover"
        />

        <ChevronDown
          className={`h-4 w-4 transition-all duration-200 ${
            open ? "rotate-180 text-[#4B74FF]" : "text-[#2c3140]"
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-[58px] z-50 flex flex-col items-center gap-4 transition-all duration-200 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {languages
          .filter((l) => l.code !== language)
          .map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              aria-label={item.label}
              className="flex h-[34px] w-[34px] items-center justify-center transition-all duration-200 hover:-translate-y-[2px]"
            >
              <img
                src={item.flag}
                alt={item.label}
                className="h-[34px] w-[34px] rounded-full object-cover shadow-[0_10px_22px_rgba(40,47,70,0.20)]"
              />
            </button>
          ))}
      </div>
    </div>
  );
}
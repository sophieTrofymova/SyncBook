import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/i18n";

const languages: { code: Language; label: string; emoji: string }[] = [
  { code: "en", label: "EN", emoji: "🇺🇸" },
  { code: "ru", label: "RU", emoji: "🇷🇺" },
  { code: "es", label: "ES", emoji: "🇪🇸" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/80 px-2 py-2 shadow-[0_6px_18px_rgba(99,110,140,0.10)] ring-1 ring-black/5">
      {languages.map((item) => {
        const active = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-pressed={active}
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
              active ? "bg-[#4B74FF] text-white" : "text-[#2c3140] hover:bg-black/5"
            }`}
          >
            <span>{item.emoji}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
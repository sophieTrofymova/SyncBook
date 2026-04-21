"use client";

import { FooterCard } from "@/components/cards/footer-card";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#f4f4f7] px-8 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* top card */}
        <div
          className="flex items-center justify-center rounded-[36px] py-10"
          style={FooterCard}
        >
          <div className="flex items-center gap-4">
            <img src="/FooterLogo.png" alt={t.header.logoAlt} className="h-12 w-auto" />
          </div>
        </div>

        {/* content */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1.5fr]">
          {/* left + middle links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 md:col-span-2 md:grid-cols-4">
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-medium text-[#4B74FF]">{t.footer.usual}</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#4b5162]">
                <a href="#">{t.footer.services}</a>
                <a href="#">{t.footer.about}</a>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="select-none text-[16px] font-medium text-transparent">.</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#4b5162]">
                <a href="#">{t.footer.portfolio}</a>
                <a href="#">{t.footer.contacts}</a>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[16px] font-medium text-[#4B74FF]">{t.footer.legal}</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#4b5162]">
                <a href="#">{t.footer.help}</a>
                <a href="#">{t.footer.faq}</a>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="select-none text-[16px] font-medium text-transparent">.</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#4b5162]">
                <a href="#">{t.footer.terms}</a>
                <a href="#">{t.footer.privacy}</a>
              </div>
            </div>
          </div>

          {/* right side */}
          <div>
            <p className="text-[20px] font-medium text-[#2a2e3c]">
              {t.footer.newsletterTitle}
            </p>

            <div className="mt-6 flex items-center rounded-full border border-[#4B74FF] bg-[#f1f2f6] p-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 bg-transparent px-5 py-3 text-[15px] outline-none placeholder:text-[#9aa1b3]"
              />

              <button className="rounded-full bg-[#4B74FF] px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_20px_rgba(75,116,255,0.4)] transition hover:translate-y-[-1px]">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-16 h-px w-full bg-[#e3e6ee]" />

        {/* bottom */}
        <div className="mt-6 text-center text-[14px] text-[#8b90a3]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
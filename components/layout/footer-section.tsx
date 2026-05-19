"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { embossedCardStyle } from "@/lib/ui-styles"

export function Footer() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailError =
    touched && email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    setTouched(true);

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) return;

    setSuccess(true);
  };

  return (
    <footer className="px-8 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="flex items-center justify-center rounded-[36px] py-10"
          style={embossedCardStyle}
        >
          <img src="/FooterLogo.png" alt={t.header.logoAlt} className="h-12 w-auto" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1.5fr]">
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 md:col-span-2 md:grid-cols-4">
            <div>
              <p className="text-[16px] font-medium text-[#4B74FF]">{t.footer.usual}</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] text-[#4b5162]">
                <a
                  href="#"
                  className="
                    transition-all duration-200 ease-out
                    text-[#4b5162]
                    hover:text-[#11131a]
                    hover:font-semibold
                  "
                >
                  {t.footer.services}
                </a>
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.about}
                </a>
              </div>
            </div>

            <div>
              <p className="select-none text-[16px] font-medium text-transparent">.</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] text-[#4b5162]">
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.portfolio}
                </a>
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.contacts}
                </a>
              </div>
            </div>

            <div>
              <p className="text-[16px] font-medium text-[#4B74FF]">{t.footer.legal}</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] text-[#4b5162]">
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.help}
                </a>
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.faq}
                </a>
              </div>
            </div>

            <div>
              <p className="select-none text-[16px] font-medium text-transparent">.</p>

              <div className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.6] text-[#4b5162]">
                <a
                  href="#"
                  className="
                    transition-all duration-200 ease-out
                    text-[#4b5162]
                    hover:text-[#11131a]
                    hover:font-semibold
                  "
                >
                </a>
                <a
                    href="#"
                    className="
                      transition-all duration-200 ease-out
                      text-[#4b5162]
                      hover:text-[#11131a]
                      hover:font-semibold
                    "
                  >
                  {t.footer.privacy}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[20px] font-medium text-[#2a2e3c]">
              {t.footer.newsletterTitle}
            </p>

            {!success ? (
              <>
                <div
                  className={`
                    mt-6 flex h-[56px] items-center rounded-full border bg-[#f1f2f6] p-1.5
                    transition-all duration-300
                    ${emailError ? "border-[#ff5f6d]" : "border-[#4B74FF]"}
                  `}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSuccess(false);
                    }}
                    onBlur={() => setTouched(true)}
                    placeholder={t.footer.emailPlaceholder}
                    className="
                      flex-1 bg-transparent px-5 text-[13px] text-[#4B74FF]
                      outline-none placeholder:text-[#9aa1b3]
                      focus:placeholder:text-transparent
                    "
                  />

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="
                      rounded-full bg-[#4B74FF] px-6 py-3 text-[15px] font-medium text-white
                      shadow-[0_10px_20px_rgba(75,116,255,0.35)]
                      transition-all duration-300
                      hover:bg-[#252936]
                      hover:shadow-[0_10px_22px_rgba(37,41,54,0.25)]
                      active:scale-[0.96]
                    "
                  >
                    {t.footer.subscribe}
                  </button>
                </div>

                {emailError && (
                  <p className="mt-2 text-[13px] text-[#ff5f6d]">
                    Error: please enter a valid email
                  </p>
                )}
              </>
            ) : (
              <div className="mt-6 flex h-[56px] items-center justify-between rounded-full border border-[#16b978] bg-[#f1f2f6] px-5">
                <span className="text-[15px] font-medium text-[#16a86d]">
                  You have successfully subscribed!
                </span>

                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#10a86b] text-white">
                  <Check className="h-5 w-5" />
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-[#e3e6ee]" />

        <div className="mt-6 text-center text-[14px] text-[#8b90a3]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useLanguage } from "@/lib/language-context";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsInvalid =
    emailTouched && email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const inputBase =
    "mt-2 h-[39px] w-full rounded-[9px] border bg-transparent px-4 text-[11px] text-white outline-none transition-all duration-300 placeholder:text-white/55 focus:placeholder:text-transparent md:mt-3 md:h-[70px] md:rounded-[20px] md:px-6 md:text-[18px]";

  return (
    <section className="relative z-20 px-[8px] pb-8 pt-6 md:px-12 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-[1700px]">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#305cf0] via-[#4B74FF] to-[#3D63E8] px-[25px] pb-5 pt-14 md:rounded-[48px] md:px-16 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="text-[14px] uppercase tracking-[-0.02em] text-white/45 md:text-[18px] md:text-white/70">
                {t.contact.eyebrow}
              </p>

              <h2 className="mt-2 text-[28px] font-medium leading-[1.08] tracking-[-0.04em] text-white md:mt-4 md:text-[52px]">
                {t.contact.title}
              </h2>

              <div className="order-last mt-14 hidden lg:block">
                <MailBoxAnimation mailboxAlt={t.contact.mailboxAlt} />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-15 md:gap-8">
              <div>
                <label className="text-[16px] text-white/85 md:text-[18px]">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className={`${inputBase} border-white/35 focus:border-white/80`}
                />
              </div>

              <div>
                <label className="text-[16px] text-white/85 md:text-[18px]">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder={t.contact.emailPlaceholder}
                  className={`${inputBase} ${
                    emailIsInvalid
                      ? "border-[#ff7b7b] focus:border-[#ff7b7b]"
                      : "border-white/35 focus:border-white/80"
                  }`}
                />

                {emailIsInvalid && (
                  <p className="mt-1 text-[10px] text-[#ffb3b3] md:mt-2 md:text-[14px]">
                    Error: please enter a valid email
                  </p>
                )}
              </div>

              <div>
                <label className="text-[16px] text-white/85 md:text-[18px]">
                  {t.contact.descriptionLabel}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.contact.descriptionPlaceholder}
                  className="
                    mt-2 h-[75px] w-full resize-none rounded-[9px]
                    border border-white/35 bg-transparent px-4 py-4
                    text-[11px] text-white outline-none
                    transition-all duration-300
                    placeholder:text-white/55
                    focus:border-white/80
                    focus:placeholder:text-transparent

                    md:mt-3 md:h-[140px] md:rounded-[24px]
                    md:px-6 md:py-5 md:text-[18px]
                  "
                />
              </div>

              <button
                type="button"
                className="
                  group mt-3 flex h-[58px] items-center justify-between rounded-full
                  border border-transparent bg-white/90 pl-6 pr-[4px]

                  text-[13px] font-semibold tracking-[-0.03em] text-[#4B74FF]

                  shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                  transition-all duration-300 ease-out

                  hover:border-white/80
                  hover:bg-transparent
                  hover:text-white
                  hover:shadow-none

                  active:translate-y-[2px]

                  md:mt-6 md:h-[84px] md:pl-10 md:pr-3 md:text-[20px]
                "
              >
                <span className="px-3 md:px-0">
                  {t.contact.button}
                </span>

                <span
                  className="
                    flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full
                    bg-[#e9ecf5] text-[26px] leading-none text-[#4B74FF]

                    transition-all duration-300 ease-out

                    group-hover:bg-transparent
                    group-hover:text-white
                    group-hover:ring-1
                    group-hover:ring-white/80

                    md:h-[64px] md:w-[64px] md:text-[28px]
                  "
                >
                  →
                </span>
              </button>

              <div className="mt-14 flex justify-center lg:hidden">
                <MailBoxAnimation mailboxAlt={t.contact.mailboxAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function MailBoxAnimation({ mailboxAlt }: { mailboxAlt: string }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
          }

          setIsVisible(true);
        } else {
          resetTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setAnimationKey((prev) => prev + 1);
          }, 1000);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();

      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return (
      <div
        ref={wrapperRef}
        className="relative h-[280px] w-[350px] overflow-hidden md:h-[620px] md:w-[720px]"
      >
      <div className="absolute inset-0 z-30">
        {isVisible && (
          <img
            src="/Letter.png"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-0 z-30 w-[95px] object-contain md:w-[250px]"
            style={{
              animationName: "mailFly",
              animationDuration: "2.2s",
              animationTimingFunction: "ease-out",
              animationIterationCount: 1,
              animationFillMode: "forwards",
            }}
          />
        )}
      </div>

      <img
        src="/MailBox.png"
        alt={mailboxAlt}
        className="relative z-20 h-auto w-[370px] object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)] md:w-[720px]"
      />

      <div className="pointer-events-none absolute left-1/2 top-[70px] z-10 h-[70px] w-[140px] -translate-x-1/2 rounded-full bg-[#69d2ff]/25 blur-[35px] md:top-[170px] md:h-[120px] md:w-[260px] md:blur-[55px]" />
    </div>
  );
}
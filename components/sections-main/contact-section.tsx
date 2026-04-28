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
    "mt-3 h-[70px] w-full rounded-[20px] border bg-transparent px-6 text-[18px] text-white outline-none backdrop-blur transition-all duration-300 placeholder:text-white/55 focus:placeholder:text-transparent";

  return (
    <section className="relative z-10 px-8 pb-28 pt-10 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-[#305cf0] via-[#4B74FF] to-[#3D63E8] px-16 py-16">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative">
              <p className="text-[18px] uppercase tracking-[-0.02em] text-white/70">
                {t.contact.eyebrow}
              </p>

              <h2 className="mt-4 text-[52px] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                {t.contact.title}
              </h2>

              <div className="mt-14">
                <MailBoxAnimation mailboxAlt={t.contact.mailboxAlt} />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <label className="text-[18px] text-white/90">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className={`${inputBase} border-white/40 focus:border-white/80`}
                />
              </div>

              <div>
                <label className="text-[18px] text-white/90">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder={t.contact.emailPlaceholder}
                  className={`
                    ${inputBase}
                    ${
                      emailIsInvalid
                        ? "border-[#ff7b7b] text-white focus:border-[#ff7b7b]"
                        : "border-white/40 focus:border-white/80"
                    }
                  `}
                />

                {emailIsInvalid && (
                  <p className="mt-2 text-[14px] text-[#ffb3b3]">
                    Error: please enter a valid email
                  </p>
                )}
              </div>

              <div>
                <label className="text-[18px] text-white/90">
                  {t.contact.descriptionLabel}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.contact.descriptionPlaceholder}
                  className="
                    mt-3 h-[140px] w-full resize-none rounded-[24px]
                    border border-white/40 bg-transparent px-6 py-5
                    text-[18px] text-white outline-none backdrop-blur
                    transition-all duration-300
                    placeholder:text-white/55
                    focus:border-white/80
                    focus:placeholder:text-transparent
                  "
                />
              </div>

              <button
                type="button"
                className="
                  group mt-6 flex h-[84px] items-center justify-between rounded-full
                  border border-transparent bg-white/90 pl-10 pr-3
                  text-[20px] font-medium tracking-[-0.02em] text-[#4B74FF]
                  shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                  transition-all duration-300 ease-out

                  hover:border-white/80
                  hover:bg-transparent
                  hover:text-white
                  hover:shadow-none

                  active:translate-y-[2px]
                "
              >
                <span>{t.contact.button}</span>

                <span
                  className="
                    flex h-[64px] w-[64px] items-center justify-center rounded-full
                    bg-[#e9ecf5] text-[28px] text-[#4B74FF]
                    transition-all duration-300 ease-out

                    group-hover:bg-transparent
                    group-hover:text-white
                    group-hover:ring-1
                    group-hover:ring-white/80
                  "
                >
                  →
                </span>
              </button>
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
      className="relative h-[620px] w-[720px] overflow-hidden"
    >
      <div className="absolute inset-0 z-30">
        {isVisible && (
          <img
            key={animationKey}
            src="/Letter.png"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-0 z-30 w-[250px] object-contain"
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
        className="relative z-20 h-auto w-[720px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
      />

      <div className="pointer-events-none absolute left-1/2 top-[170px] z-10 h-[120px] w-[260px] -translate-x-1/2 rounded-full bg-[#69d2ff]/25 blur-[55px]" />
    </div>
  );
}
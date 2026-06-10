"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function BuildTogetherSection() {
  const { t } = useLanguage();

  return (
    <section className="px-5 py-16 md:px-12 md:py-24 xl:px-14">
      <div
        className="
          mx-auto grid max-w-[1680px] grid-cols-1 gap-12
          rounded-[42px] bg-[#416fff]
          px-8 py-14 text-center

          md:px-20 md:py-20
          lg:grid-cols-[1.1fr_1fr]
          lg:rounded-[64px]
          lg:text-left
        "
      >
        <div>
          <p
            className="
              text-[14px] font-normal uppercase leading-none
              tracking-[-0.04em] text-white/55

              md:text-[25px]
            "
          >
            {t.aboutPage.buildTogether.eyebrow}
          </p>

          <h2
            className="
              mt-7 text-[34px] font-normal leading-[1.05]
              tracking-[-0.045em] text-white

              md:mt-10 md:text-[66px]
            "
          >
            {t.aboutPage.buildTogether.title}
          </h2>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <p
            className="
              max-w-[300px] text-[13px] font-normal
              leading-[1.5] tracking-[-0.03em]
              text-white/70

              md:max-w-[670px]
              md:text-[21px]
              md:leading-[1.28]
              md:tracking-[-0.035em]
            "
          >
            {t.aboutPage.buildTogether.descriptionLine1}
            <span className="hidden md:inline">
              <br />
            </span>
            {t.aboutPage.buildTogether.descriptionLine2}
            <span className="hidden md:inline">
              <br />
            </span>
            {t.aboutPage.buildTogether.descriptionLine3}
          </p>

          <Link
            href="/contacts"
            className="
              group mt-12 flex h-[62px] w-full max-w-[320px]
              items-center justify-between rounded-full
              bg-[#f3f3f7] pl-8

              transition-all duration-300
              hover:scale-[0.985]
              active:scale-[0.97]

              md:mt-14 md:h-[98px]
              md:max-w-[580px]
              md:pl-14 md:pr-3

              md:justify-center
              /md:px-0
            "
          >
            <span
              className="
                text-[15px] font-semibold tracking-[-0.04em]
                text-[#416fff]

                md:text-[27px]
              "
            >
              {t.aboutPage.buildTogether.buttonText}
            </span>

            <span
              className="
                flex h-[58px] w-[58px] items-center justify-center
                rounded-full bg-[#f3f3f7]

                shadow-[0_8px_24px_rgba(37,72,198,0.22)]

                transition-all duration-300
                group-hover:translate-x-[2px]
                group-hover:scale-[0.96]

                md:hidden
              "
            >
              <img
                src="/arrowRight.png"
                alt=""
                aria-hidden="true"
                className="
                  h-[22px] w-[22px]

                  md:h-[34px] md:w-[34px]
                "
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

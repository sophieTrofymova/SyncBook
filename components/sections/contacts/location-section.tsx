"use client";

import { useLanguage } from "@/lib/language-context";

const contactItems = [
  {
    icon: "/Contact/phone.png",
    text: "+420 483 928 399",
  },
  {
    icon: "/Contact/letter.png",
    text: "contact@synkbook.com",
  },
  {
    icon: "/Contact/geo.png",
    text: "SyncBook s.r.o. Nové Sady\n988/22 29000 Limerick, Ireland",
  },
];

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section
      className="
        px-7 py-18

        md:px-12
        md:py-28
        xl:px-14
      "
    >
      <div className="mx-auto max-w-[1680px]">
        {/* HEADER */}
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="
              text-[38px] font-semibold leading-[1.08]
              tracking-[-0.05em] text-[#4B74FF]

              md:text-[72px]
            "
          >
            Let’s discuss what
            <br />
            comes next!
          </h2>

          <p
            className="
              mx-auto mt-8 max-w-[340px]
              text-[15px] leading-[1.45]
              tracking-[-0.03em] text-[#707582]

              md:mt-10
              md:max-w-[980px]
              md:text-[24px]
            "
          >
            We focus on projects where technical quality, business impact,
            and fast execution matter. These are some of the platforms,
            products, and operational systems we've built to support real
            users, real workflows, and long-term growth.
          </p>
        </div>

        {/* CONTACTS */}
        <div
          className="
            mt-20 pb-25 flex flex-col gap-8

            md:mt-20
            md:gap-14
          "
        >
          {contactItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 md:gap-7"
            >
              <div
                className="
                  embossed-pill flex h-[50px] w-[50px]
                  shrink-0 items-center justify-center rounded-full

                  md:h-[74px]
                  md:w-[74px]
                "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="
                    h-[24px] w-[24px] object-contain

                    md:h-[34px]
                    md:w-[34px]
                  "
                />
              </div>

              <p
                className="
                  whitespace-pre-line
                  text-[15px] leading-[1.45]
                  tracking-[-0.03em] text-[#2C3140]

                  md:text-[32px]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-l-[34px] bg-[#f2f3f8] p-[18px] -ml-7 -mr-15"
          style={{
            boxShadow: `
            -8px -8px 18px rgba(255,255,255,0.95),
            10px 14px 28px rgba(185,190,205,0.45)
          `,
          }}
        >

          {/* MAP */}
          <div className="flex h-[520px] overflow-hidden rounded-[26px]">

            {/* MAP */}
            <div className="relative flex-1 overflow-hidden rounded-l-[26px]">
              <iframe
                src="https://www.google.com/maps?q=53.2939125,-6.2017921&z=17&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* RIGHT WHITE STRIPE */}
            <div className="relative w-[92px] bg-[#f2f3f8]">

              {/* TOP BUTTON */}
              <button
                type="button"
                className="
                  absolute right-8 top-3
                  flex h-[40px] w-[40px]
                  items-center justify-center
                  rounded-full
                  bg-[#232634]
                  text-[24px]
                  text-[#3E6FFF]
                  shadow-[0_12px_24px_rgba(35,38,52,0.22)]
                "
              >
                <img src="/Contact/VectorButton.png" className="w-5 h-5"/>
              </button>

              {/* ZOOM */}
              <div
                className="
                absolute bottom-8 right-8
                items-center justify-center
                overflow-hidden
                rounded-full
                bg-[#232634]
                shadow-[0_12px_24px_rgba(35,38,52,0.22)]
              "
              >
                <button
                  type="button"
                  className="
                  flex h-[40px] w-[40px]
                  items-center justify-center
                  text-[36px]
                  text-white
                "
                >
                  +
                </button>

                <div className="mx-auto h-px w-7 bg-white/25" />

                <button
                  type="button"
                  className="
                  flex h-[40px] w-[40px]
                  items-center justify-center
                  text-[36px]
                  text-white
                "
                >
                  −
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
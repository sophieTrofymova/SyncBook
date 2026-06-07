"use client";

import { useLanguage } from "@/lib/language-context";

const contactItems = [
/*
  {
    icon: "/Contact/phone.png",
    text: "+353 085 284 8110",
  },
*/
  {
    icon: "/Contact/letter.png",
    text: "hello@softaryn.com",
  },
  {
    icon: "/Contact/geo.png",
    text: "Carrickmines Great, Dublin, Ireland",
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
      <div className="mx-auto grid max-w-[1680px] gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        {/* LEFT */}
        <div className="md:pt-4">
          <div className="max-w-[720px] text-left">
            <h2
              className="
          text-[38px] font-semibold leading-[1.08]
          tracking-[-0.05em] text-[#4B74FF]
          md:text-[40px]
          xl:text-[48px]
        "
            >
              Let’s discuss what comes next!
            </h2>

            <p
              className="
          mt-6 max-w-[620px]
          text-[15px] leading-[1.45]
          tracking-[-0.03em] text-[#707582]
          md:text-[16px]
        "
            >
              We focus on projects where technical quality, business impact,
              and fast execution matter. These are some of the platforms,
              products, and operational systems we've built to support real
              users, real workflows, and long-term growth.
            </p>
          </div>

          <div className="mt-32 flex flex-col gap-9 md:mt-52">
            {contactItems.map((item) => (
              <div key={item.text} className="flex items-center gap-7">
                <div
                  className="
              embossed-pill flex h-[56px] w-[56px]
              shrink-0 items-center justify-center rounded-full
            "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-[26px] w-[26px] object-contain"
                  />
                </div>

                <p
                  className="
              whitespace-pre-line
              text-[20px] leading-[1.25]
              tracking-[-0.03em] text-[#2C3140]
            "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT / MAP */}
        <div
          className="
      relative rounded-l-[34px] bg-[#f2f3f8] p-[18px]
      -mr-14 md:-mr-14
    "
          style={{
            boxShadow: `
        -8px -8px 18px rgba(255,255,255,0.95),
        10px 14px 28px rgba(185,190,205,0.45)
      `,
          }}
        >
          <div className="flex h-[568px] overflow-hidden rounded-[26px]">
            <div className="relative flex-1 overflow-hidden rounded-l-[26px]">
              <iframe
                src="https://www.google.com/maps?q=53.251193, -6.183131&z=17&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<div className="relative w-[92px] bg-[#f2f3f8]">
              <button
                type="button"
                className="
            absolute right-8 top-3
            flex h-[40px] w-[40px]
            items-center justify-center rounded-full
            bg-[#232634]
            shadow-[0_12px_24px_rgba(35,38,52,0.22)]
          "
              >
                <img src="/Contact/VectorButton.png" className="h-5 w-5" />
              </button>

              <div
                className="
            absolute bottom-8 right-8
            overflow-hidden rounded-full
            bg-[#232634]
            shadow-[0_12px_24px_rgba(35,38,52,0.22)]
          "
              >
                <button type="button" className="flex h-[40px] w-[40px] items-center justify-center text-[36px] text-white">
                  +
                </button>

                <div className="mx-auto h-px w-7 bg-white/25" />

                <button type="button" className="flex h-[40px] w-[40px] items-center justify-center text-[36px] text-white">
                  −
                </button>
              </div>
            </div>
*/
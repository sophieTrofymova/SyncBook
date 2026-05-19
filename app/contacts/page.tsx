"use client";

import { ContactSection } from "@/components/sections-main/contact-section";
import { Footer } from "@/components/layout/footer-section";

export default function ContactsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f3f8] text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px]">


        <section className="px-8 pb-24 pt-16 md:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="pt-10">
              <h1 className="text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#3E6FFF]">
                Let’s discuss what comes next!
              </h1>

              <p className="mt-8 max-w-[520px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#707582]">
                We focus on projects where technical quality, business impact,
                and fast execution matter. There are some of the platforms,
                products, and operational systems we’ve built to support real
                users, real workflows, and long-term growth.
              </p>

              <div className="mt-30 space-y-10">

                {/* PHONE */}
                <div className="flex items-center gap-6">
                    <div
                    className="
                        flex h-[56px] w-[56px] items-center justify-center
                        rounded-full bg-[#f2f3f8]
                    "
                    style={{
                        boxShadow: `
                        -6px -6px 12px rgba(255,255,255,0.9),
                        8px 10px 18px rgba(185,190,205,0.4)
                        `,
                    }}
                    >
                    <img
                        src="/Contact/phone.png"
                        alt="Phone"
                        className="h-[24px] w-[24px] object-contain"
                    />
                    </div>

                    <p className="text-[34px] font-bold leading-[28px] tracking-[0.45px] text-[#001224]">
                    +420 483 928 399
                    </p>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-6">
                    <div
                    className="
                        flex h-[56px] w-[56px] items-center justify-center
                        rounded-full bg-[#f2f3f8]
                    "
                    style={{
                        boxShadow: `
                        -6px -6px 12px rgba(255,255,255,0.9),
                        8px 10px 18px rgba(185,190,205,0.4)
                        `,
                    }}
                    >
                    <img
                        src="/Contact/letter.png"
                        alt="Email"
                        className="h-[24px] w-[24px] object-contain"
                    />
                    </div>

                    <p className="text-[24px] font-medium leading-[24px] tracking-[0] text-[#001224]">
                    contact@synkbook.com
                    </p>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-6">
                    <div
                    className="
                        flex h-[56px] w-[56px] items-center justify-center
                        rounded-full bg-[#f2f3f8]
                    "
                    style={{
                        boxShadow: `
                        -6px -6px 12px rgba(255,255,255,0.9),
                        8px 10px 18px rgba(185,190,205,0.4)
                        `,
                    }}
                    >
                    <img
                        src="/Contact/geo.png"
                        alt="Location"
                        className="h-[24px] w-[24px] object-contain"
                    />
                    </div>

                    <p className="max-w-[340px] text-[24px] font-medium leading-[36px] tracking-[0] text-[#001224]">
                    12 Priory Office Park, Merrion
                    <br />
                     Dublin, A94 N2V3
                    </p>
                </div>

                </div>
            </div>

           <div
  className="relative rounded-[34px] bg-[#f2f3f8] p-[18px]"
  style={{
    boxShadow: `
      -8px -8px 18px rgba(255,255,255,0.95),
      10px 14px 28px rgba(185,190,205,0.45)
    `,
  }}
>
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
          flex h-[58px] w-[58px]
          items-center justify-center
          rounded-full
          bg-[#232634]
          text-[24px]
          text-[#3E6FFF]
          shadow-[0_12px_24px_rgba(35,38,52,0.22)]
        "
      >
        ⌖
      </button>

      {/* ZOOM */}
      <div
        className="
          absolute bottom-8 right-5
          overflow-hidden
          rounded-full
          bg-[#232634]
          shadow-[0_12px_24px_rgba(35,38,52,0.22)]
        "
      >
        <button
          type="button"
          className="
            flex h-[58px] w-[58px]
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
            flex h-[58px] w-[58px]
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
            <section className="mt-32">
            <ContactSection />
            </section>
        </section>

      </div>
    </main>
  );
}
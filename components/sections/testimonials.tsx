/*import { embossedPaperCardStyle } from "@/lib/ui-styles";

const testimonials = [
  {
    name: "James Rosner",
    role: "Lawyer",
    image: "/Testimonial1.png",
    rating: "4,5",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
    faded: true,
  },
  {
    name: "Andrew Witacker",
    role: 'CEO of “Starlink”',
    image: "/Testimonial2.png",
    rating: "4,9",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
    featured: true,
  },
  {
    name: "Michel Dawer",
    role: "Beauty master",
    image: "/Testimonial3.png",
    rating: "4,6",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#f4f4f7] px-8 pb-28 pt-20 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[700px]">
            <p className="text-[25px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
              OUR TESTIMONIALS
            </p>

            <h2 className="mt-5 text-[48px] font-medium leading-[1.08] tracking-[-0.05em] text-[#232634] md:text-[53px]">
              We are not the Best
              <br />
              but We are Unique
            </h2>
          </div>

          <div className="hidden items-center gap-8 pt-8 lg:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/70 bg-[#efeff3] text-[#4B74FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_30px_rgba(31,38,58,0.06),0_22px_40px_rgba(56,63,88,0.08)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="text-[46px] leading-none">←</span>
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/70 bg-[#efeff3] text-[#4B74FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_30px_rgba(31,38,58,0.06),0_22px_40px_rgba(56,63,88,0.08)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="text-[46px] leading-none">→</span>
            </button>
          </div>
        </div>

        <div className="mt-14 flex items-stretch gap-14 overflow-hidden">
          {testimonials.map((item, index) => (
            /*<article
              key={item.name}
              className={`flex h-[520px] shrink-0 flex-col rounded-[40px] border border-white/70 bg-[#efeff3] px-8 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_30px_rgba(31,38,58,0.06),0_22px_40px_rgba(56,63,88,0.08)] ${
                item.featured ? "w-[520px]" : "w-[470px]"
              } ${item.faded ? "opacity-40" : ""}`}
            >
            <article
              key={item.name}
              className={`flex h-[520px] shrink-0 flex-col rounded-[40px] px-8 pt-10 ${
                item.featured ? "w-[520px]" : "w-[470px]"
              } ${item.faded ? "opacity-40" : ""}`}
              style={embossedPaperCardStyle}
            >
              <div className="flex items-center gap-7">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`rounded-full object-cover shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
                    item.featured ? "h-[82px] w-[82px]" : "h-[72px] w-[72px]"
                  }`}
                />

                <div>
                  <h3
                    className={`font-medium tracking-[-0.04em] text-[#232634] ${
                      item.featured ? "text-[32px]" : "text-[28px]"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-2 tracking-[-0.03em] text-[#4B74FF] ${
                      item.featured ? "text-[22px]" : "text-[20px]"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              <p
                className={`mt-12 max-w-[420px] tracking-[-0.02em] text-[#6f7482] ${
                  item.featured
                    ? "text-[18px] leading-[1.6]"
                    : "text-[17px] leading-[1.6]"
                }`}
              >
                {item.text}
              </p>

              <div className="mt-auto flex items-center gap-4 pb-10">
                <span className="text-[48px] leading-none text-[#F5A623]">★</span>
                <div className="flex items-end gap-2">
                  <span className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#232634]">
                    {item.rating}
                  </span>
                  <span className="text-[20px] leading-none text-[#8a8f9d]">/5</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
  */
import { testimonialCardStyle, testimonialArrowStyle } from "@/lib/ui-styles";
const testimonials = [
  {
    name: "James Rosner",
    role: "Lawyer",
    image: "/Testimonial1.png",
    rating: "4,5",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
    faded: true,
  },
  {
    name: "Andrew Witacker",
    role: 'CEO of “Starlink”',
    image: "/Testimonial2.png",
    rating: "4,9",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
    featured: true,
  },
  {
    name: "Michel Dawer",
    role: "Beauty master",
    image: "/Testimonial3.png",
    rating: "4,6",
    text: `“We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth”`,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#f4f4f7] px-8 pb-28 pt-20 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1780px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[760px]">
            <p className="text-[22px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
              OUR TESTIMONIALS
            </p>

            <h2 className="mt-5 text-[50px] font-medium leading-[1.04] tracking-[-0.055em] text-[#232634] md:text-[62px]">
              We are not the Best
              <br />
              but We are Unique
            </h2>
          </div>

          <div className="hidden items-center gap-6 pt-6 lg:flex">
            <button
              className="flex h-[74px] w-[74px] items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[-3px] hover:scale-[1.05]"
              style={testimonialArrowStyle}
            >
              <img src="/arrowLeft.png" alt="prev" className="h-[26px] w-[26px]" />
            </button>

            <button
              className="flex h-[74px] w-[74px] items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[-3px] hover:scale-[1.05]"
              style={testimonialArrowStyle}
            >
              <img src="/arrowRight.png" alt="next" className="h-[26px] w-[26px]" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex w-full items-end justify-center gap-10 xl:gap-14 overflow-visible">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className={`
                flex shrink-0 flex-col rounded-[42px] px-8 pt-8 transition-all duration-500
                ${item.featured ? "h-[470px] w-[500px] -translate-y-8" : "h-[430px] w-[430px] translate-y-8"}
                ${item.faded ? "opacity-75 saturate-50" : item.featured ? "opacity-100" : "opacity-85 saturate-75"}
              `}
              style={testimonialCardStyle}
            >
              <div className="flex items-start gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.10)] ${
                    item.featured ? "h-[68px] w-[68px]" : "h-[62px] w-[62px]"
                  }`}
                />

                <div>
                  <h3
                    className={`font-medium leading-none tracking-[-0.04em] ${
                      item.featured ? "text-[29px] text-[#232634]" : "text-[25px] text-[#4f5566]"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-4 tracking-[-0.03em] ${
                      item.featured ? "text-[18px] text-[#4B74FF]" : "text-[17px] text-[#7e94e8]"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              <p
                className={`mt-10 tracking-[-0.02em] ${
                  item.featured
                    ? "max-w-[350px] text-[17px] leading-[1.55] text-[#6d7280]"
                    : "max-w-[300px] text-[16px] leading-[1.55] text-[#8b90a0]"
                }`}
              >
                {item.text}
              </p>

              <div className="mt-auto flex items-center gap-3 pb-8">
                <span className="text-[44px] leading-none text-[#F5A623]">★</span>
                <div className="flex items-end gap-1.5">
                  <span className="text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#232634]">
                    {item.rating}
                  </span>
                  <span className="text-[18px] leading-none text-[#8a8f9d]">/5</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
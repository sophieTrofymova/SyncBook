export function ContactSection() {
  return (
    <section className="relative z-10 bg-[#f4f4f7] px-8 pb-28 pt-10 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-[#305cf0] via-[#4B74FF] to-[#3D63E8] px-16 py-16">

          {/* Контент */}
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Левая часть */}
            <div className="relative">
                <p className="text-[18px] uppercase tracking-[-0.02em] text-white/70">
                    LET’S CREATE TOGETHER MIRACLES
                </p>

                <h2 className="mt-4 text-[52px] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                    Have a project in mind?
                </h2>

                <div className="mt-14">
                    <MailBoxAnimation />
                </div>
            </div>
            
            {/* Левая часть 
            <div className="relative">
              <p className="text-[18px] uppercase tracking-[-0.02em] text-white/70">
                LET’S CREATE TOGETHER MIRACLES
              </p>

              <h2 className="mt-4 text-[52px] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                Have a project in mind?
              </h2>

              <div className="mt-14">
                <img
                  src="/ContactImage.png"
                  alt="Contact visual"
                  className="h-auto w-[720px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
                  [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                  [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                  [mask-composite:intersect]
                  [-webkit-mask-composite:destination-in]"
                />
              </div>
            </div>

            */}

            {/* Правая часть (форма) */}
            <div className="flex flex-col gap-8">

              {/* Name */}
              <div>
                <label className="text-[18px] text-white/90">
                  User name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 h-[70px] w-full rounded-[20px] border border-white/40 bg-transparent px-6 text-[18px] text-white placeholder-white/60 outline-none backdrop-blur"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[18px] text-white/90">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-3 h-[70px] w-full rounded-[20px] border border-white/40 bg-transparent px-6 text-[18px] text-white placeholder-white/60 outline-none backdrop-blur"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-[18px] text-white/90">
                  Description
                </label>
                <textarea
                  placeholder="Tell us a bit about your idea..."
                  className="mt-3 h-[140px] w-full resize-none rounded-[24px] border border-white/40 bg-transparent px-6 py-5 text-[18px] text-white placeholder-white/60 outline-none backdrop-blur"
                />
              </div>

              {/* Button */}
              <button
                className="mt-6 flex h-[84px] items-center justify-between rounded-full bg-white/90 pl-10 pr-3 text-[20px] font-medium tracking-[-0.02em] text-[#4B74FF] shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                <span>Send and start the process</span>

                <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#e9ecf5] text-[28px]">
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

function MailBoxAnimation() {
  const letters = Array.from({ length: 6 });

  return (
    <div className="relative h-[620px] w-[720px] overflow-hidden">
      <div className="absolute inset-0 z-30">
        {letters.map((_, index) => (
          <img
            key={index}
            src="/Letter.png"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-0 z-30 w-[250px] object-contain"
            style={{
              animationName: "mailFly",
              animationDuration: "3.6s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${index * 0.55}s`,
              animationFillMode: "both",
            }}
          />
        ))}
      </div>

      <img
        src="/MailBox.png"
        alt="Mailbox"
        className="relative z-20 h-auto w-[720px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
      />

      <div className="pointer-events-none absolute left-1/2 top-[170px] z-10 h-[120px] w-[260px] -translate-x-1/2 rounded-full bg-[#69d2ff]/25 blur-[55px]" />
    </div>
  );
}
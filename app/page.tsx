import { ArrowUpRight, ChevronRight } from "lucide-react";

const navItems = ["Services", "About us", "Portfolio", "Contacts"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f4f7] text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        <BackgroundDecor />

        <header className="relative z-20 flex items-start justify-between px-6 pt-4 md:px-12">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center rounded-[44px] border border-white/70 px-6 py-4 md:px-8"
              style={embossedPaperStyle}
            >
              <div className="mr-8 md:mr-12">
                <img src="/Group 1.svg" alt="Logo" className="h-[46px] w-auto" />
              </div>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group relative rounded-full px-7 py-3 text-[18px] font-medium tracking-[-0.02em] text-[#2b2f3d] transition-all duration-300 hover:text-[#1f2330]"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/80 opacity-0 shadow-[0_12px_28px_rgba(92,101,130,0.14)] transition-all duration-300 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <div className="flex items-center gap-2">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/80 shadow-[0_6px_18px_rgba(99,110,140,0.10)] ring-1 ring-black/5">
                <span className="text-[25px] leading-none">🇺🇸</span>
              </div>
              <ChevronRight className="h-4 w-4 text-[#2c3140]" />
            </div>
          </div>
        </header>

        <section className="relative z-10 grid min-h-[760px] items-center gap-8 px-8 pb-0 pt-14 md:px-12 lg:grid-cols-[0.9fr_1.1fr] xl:px-12">
          <div className="max-w-[610px] pt-10">
            <h1 className="text-[58px] font-medium leading-[1.06] tracking-[-0.055em] text-[#232634] md:text-[72px] xl:text-[76px]">
              Engineering{" "}
              <span className="inline-flex translate-y-[-3px] text-[#4B74FF]">
                <ArrowUpRight className="h-[0.86em] w-[0.86em] stroke-[2.2]" />
              </span>{" "}
              Efficiency
              <br />
              for Modern Business
            </h1>

            <p className="mt-8 max-w-[520px] text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-[#73798a] md:text-[20px]">
              We design and implement customized automation systems that free your team
              from routine tasks and accelerate growth. We combine fast delivery with
              strong engineering foundations.
            </p>

            <div className="mt-16 flex w-full max-w-[420px] items-center rounded-full bg-white/72 p-3 shadow-[0_18px_40px_rgba(120,128,150,0.16)] ring-1 ring-white/80 backdrop-blur">
              <button className="flex-1 rounded-full px-8 py-5 text-center text-[19px] font-medium tracking-[-0.02em] text-[#2a2e3c] transition-all duration-300 hover:text-[#11131a]">
                Start automation
              </button>

              <button
                aria-label="Start automation"
                className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#4B74FF] text-white shadow-[0_20px_40px_rgba(75,116,255,0.42),0_0_0_10px_rgba(75,116,255,0.08)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_26px_50px_rgba(75,116,255,0.52),0_0_0_14px_rgba(75,116,255,0.10)]"
              >
                <SquaresIcon />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[680px] items-center justify-center">
            <img
              src="/Hero.png"
              alt="Hero"
              className="relative h-[722px] w-full max-w-[943px]
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [mask-composite:intersect]
                [-webkit-mask-composite:destination-in]"
            />
          </div>
        </section>

        <section className="relative z-20 mt-2 bg-[#4B74FF] px-10 py-7 text-white md:px-12">
          <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-8 text-white/95">
            <div className="text-[16px] font-normal tracking-[-0.02em]">
              Powered by world-class technologies
            </div>

            <div className="flex flex-wrap items-center gap-10 text-[26px] font-medium tracking-[-0.04em] md:gap-14">
              <span className="font-serif text-[40px] lowercase">veilo</span>
              <span className="text-[22px]">Raiffeisen Bank</span>
              <span className="text-[22px]">occollo</span>
              <span className="text-[24px] tracking-[0.02em]">NUKI</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SquaresIcon() {
  return (
    <div className="grid grid-cols-2 gap-[5px]">
      <span className="h-3.5 w-3.5 rounded-[4px] border-[2.5px] border-white/85" />
      <span className="h-3.5 w-3.5 rounded-[4px] border-[2.5px] border-white/85" />
      <span className="h-3.5 w-3.5 rounded-[4px] border-[2.5px] border-white/85" />
      <span className="h-3.5 w-3.5 rounded-[4px] border-[2.5px] border-white/85" />
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.92),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.62),transparent_34%),linear-gradient(180deg,#f3f3f6_0%,#f4f4f7_100%)]" />
      <div className="absolute left-[48%] top-[18%] h-px w-[44%] rotate-[18deg] bg-gradient-to-r from-transparent via-[#dfe7fb] to-transparent" />
      <div className="absolute left-[38%] top-[29%] h-px w-[54%] rotate-[31deg] bg-gradient-to-r from-transparent via-[#dfe7fb] to-transparent" />
      <div className="absolute left-[52%] top-[50%] h-px w-[38%] rotate-[26deg] bg-gradient-to-r from-transparent via-[#d7e2fb] to-transparent" />
      <div className="absolute left-[45%] top-[68%] h-px w-[44%] rotate-[23deg] bg-gradient-to-r from-transparent via-[#d7e2fb] to-transparent" />
      <div className="absolute left-[56%] top-[82%] h-px w-[32%] rotate-[-14deg] bg-gradient-to-r from-transparent via-[#d7e2fb] to-transparent" />
    </div>
  );
}

const embossedPaperStyle = {
  background: `
    linear-gradient(
      to bottom,
      rgba(239,239,243,0.96) 20%,
      rgba(239,239,243,0.92) 40%,
      rgba(239,239,243,0.94) 100%
    )
  `,
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.7),
    0 -12px 6px rgba(255,255,255,0.8),
    0 15px 24px rgba(21, 22, 26, 0.12),
    0 24px 50px rgba(37, 40, 55, 0.1)
  `,
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
};

const embossedPaperActiveStyle = {
  backgroundColor: "rgba(255,255,255,0.8)",
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.9),
    0 8px 20px rgba(120,128,158,0.10),
    0 2px 6px rgba(255,255,255,0.45)
  `,
};
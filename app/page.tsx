import { ArrowUpRight, ChevronRight } from "lucide-react";

const navItems = ["Services", "About us", "Portfolio", "Contacts"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f4f7] text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        <BackgroundDecor />

        <header className="relative z-20 flex items-start justify-between px-6 pt-4 md:px-12">
          <div className="flex items-center gap-4">
            <div className="h-[18px] w-[18px] rounded-full border border-white/70 bg-white/20 shadow-sm backdrop-blur-sm" />

            <div className="flex items-center rounded-[34px] border border-white/80 bg-white/60 px-6 py-4 shadow-[0_12px_30px_rgba(88,94,120,0.12)] backdrop-blur-xl md:px-8">
              <div className="mr-8 md:mr-12">
                <LogoMark />
              </div>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`group relative rounded-full px-7 py-3 text-[18px] font-medium tracking-[-0.02em] text-[#2b2f3d] transition-all duration-300 hover:text-[#1f2330] ${
                      index === 0 ? "bg-white/75 shadow-[0_8px_20px_rgba(92,101,130,0.10)]" : ""
                    }`}
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

            <button className="rounded-full border border-black/15 bg-white/35 px-8 py-3 text-[18px] font-medium tracking-[-0.02em] text-[#232634] shadow-[0_6px_18px_rgba(99,110,140,0.08)] transition-all duration-300 hover:bg-white/60 hover:shadow-[0_12px_26px_rgba(99,110,140,0.14)] md:px-10 md:py-4 md:text-[20px]">
              LogIn / SignUp
            </button>
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
            <HeroIllustration />
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

function LogoMark() {
  return (
    <div className="relative h-[46px] w-[38px]">
      <div
        className="absolute inset-0 bg-[#4B74FF]"
        style={{
          clipPath:
            "polygon(8% 20%, 53% 0%, 84% 17%, 84% 33%, 54% 50%, 84% 67%, 84% 84%, 53% 100%, 8% 80%, 8% 63%, 39% 79%, 60% 66%, 39% 53%, 39% 47%, 60% 34%, 39% 21%, 8% 37%)",
        }}
      />
      <div
        className="absolute left-[12px] top-[12px] h-[22px] w-[16px] bg-white/70"
        style={{
          clipPath: "polygon(0 0, 100% 14%, 100% 86%, 0 100%, 28% 50%)",
        }}
      />
    </div>
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

function HeroIllustration() {
  return (
    <div className="relative h-[700px] w-full max-w-[930px]">
      <div className="absolute left-[11%] top-[18%] h-[5px] w-[5px] rounded-full bg-red-500" />

      <Glow className="left-[42%] top-[28%] h-[220px] w-[220px]" />
      <Glow className="left-[59%] top-[34%] h-[250px] w-[250px]" />
      <Glow className="left-[73%] top-[30%] h-[220px] w-[220px]" />
      <Glow className="left-[62%] top-[67%] h-[220px] w-[220px]" />

      <Line className="left-[12%] top-[61%] w-[26%]" />
      <Line className="left-[31%] top-[48%] w-[27%]" />
      <Line className="left-[52%] top-[45%] w-[26%]" />
      <Line className="left-[73%] top-[39%] w-[19%]" />
      <Line className="left-[58%] top-[75%] w-[20%] rotate-[18deg]" />
      <Line className="left-[38%] top-[72%] w-[23%] rotate-[31deg]" />
      <Line className="left-[18%] top-[73%] w-[18%] rotate-[36deg]" />
      <Line className="left-[77%] top-[75%] w-[16%] rotate-[-24deg]" />

      <CloudNode className="left-[8%] top-[70%]" />
      <CloudNode className="left-[86%] top-[20%]" />
      <CloudNode className="left-[83%] top-[70%]" />

      <Cylinder className="left-[80%] top-[48%]" />
      <Cylinder className="left-[61%] top-[78%] scale-[0.92]" />
      <ServerRack className="left-[70%] top-[33%] scale-[0.92]" />
      <DocumentNode className="left-[47%] top-[72%] scale-[0.96]" />
      <SmallNode className="left-[16%] top-[83%]" />
      <SmallNode className="left-[88%] top-[92%]" />
      <ButtonNode className="left-[12%] top-[50%]" />
      <BlueServerStack className="left-[26%] top-[24%]" />
      <ChipPlate className="left-[37%] top-[56%]" />
      <MainMonitor className="left-[45%] top-[26%]" />
    </div>
  );
}

function Glow({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-full bg-[radial-gradient(circle,rgba(111,146,255,0.16),rgba(255,255,255,0))] blur-2xl ${className}`} />
  );
}

function Line({ className }: { className: string }) {
  return (
    <div className={`absolute h-[2px] rounded-full bg-[#cfe0ff] shadow-[0_0_10px_rgba(148,181,255,0.65)] ${className}`} />
  );
}

function BaseTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-[28px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(235,241,255,0.88))] shadow-[0_16px_34px_rgba(129,150,195,0.20),inset_0_1px_0_rgba(255,255,255,0.95)] ${className}`}
    >
      {children}
    </div>
  );
}

function MainMonitor({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <BaseTile className="h-[250px] w-[310px] rounded-[22px] p-3">
          <div className="h-full w-full rounded-[18px] bg-[linear-gradient(180deg,#1f2c47_0%,#111827_100%)] p-4 shadow-inner">
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#6f8eff]" />
              <span className="h-2 w-2 rounded-full bg-[#89d0ff]" />
              <span className="h-2 w-2 rounded-full bg-[#d4e3ff]" />
            </div>

            <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="rounded-xl bg-[#20334f] p-3">
                <div className="mb-3 h-16 rounded-lg bg-[linear-gradient(180deg,#274368,#1a2740)]" />
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="h-5 rounded bg-[#2d4a73]" />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-[#1d314e] p-3">
                  <div className="flex h-20 items-end gap-1">
                    {[50, 70, 44, 90, 58, 78].map((h, i) => (
                      <span
                        key={`${h}-${i}`}
                        className="w-full rounded-t bg-[#4e88ff]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-[#1d314e] p-3">
                  <div className="h-12 rounded-lg bg-[linear-gradient(90deg,#315c9a,#26446f)]" />
                </div>
              </div>
            </div>
          </div>
        </BaseTile>

        <div className="absolute left-1/2 top-full h-7 w-24 -translate-x-1/2 rounded-b-[18px] bg-[linear-gradient(180deg,#eef4ff,#cfdcff)] shadow-[0_10px_20px_rgba(147,166,207,0.28)]" />
        <Shield className="left-[-6%] top-[24%]" />
        <Shield className="left-[18%] top-[16%] scale-[1.04]" />
      </div>
    </div>
  );
}

function Shield({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="flex h-[86px] w-[68px] items-center justify-center bg-[linear-gradient(180deg,#7ea2ff,#4c73ff)] shadow-[0_12px_26px_rgba(76,115,255,0.30)]"
        style={{
          clipPath: "polygon(50% 0%, 100% 16%, 90% 68%, 50% 100%, 10% 68%, 0% 16%)",
        }}
      >
        <div
          className="h-[48px] w-[38px] bg-white/35"
          style={{
            clipPath: "polygon(50% 0%, 100% 16%, 90% 68%, 50% 100%, 10% 68%, 0% 16%)",
          }}
        />
      </div>
    </div>
  );
}

function ChipPlate({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <BaseTile className="h-[142px] w-[236px] p-3">
        <div className="relative flex h-full items-center justify-center rounded-[22px] border border-[#d8e5ff] bg-[linear-gradient(180deg,#fefeff,#edf3ff)]">
          <div className="absolute inset-4 rounded-[18px] border border-[#d8e5ff]" />
          <div className="grid grid-cols-2 gap-5">
            {[0, 1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-8 w-8 rounded-md bg-[linear-gradient(180deg,#4e88ff,#2f63df)] shadow-[0_8px_18px_rgba(75,116,255,0.28)]"
              />
            ))}
          </div>
        </div>
      </BaseTile>
    </div>
  );
}

function BlueServerStack({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative h-[160px] w-[122px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-[50px] rounded-[10px] border border-[#b6cfff] bg-[linear-gradient(180deg,#6d92ff,#2c5fdf)] shadow-[0_10px_20px_rgba(80,118,219,0.24)]"
            style={{
              left: `${(i % 2) * 34}px`,
              top: `${i * 14}px`,
              height: "86px",
            }}
          >
            <div className="mt-3 px-2">
              <div className="h-2 rounded-full bg-white/60" />
              <div className="mt-2 h-2 rounded-full bg-white/35" />
              <div className="mt-2 h-2 rounded-full bg-white/35" />
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-[4px] h-[28px] w-[112px] rounded-[16px] bg-[linear-gradient(180deg,#eef4ff,#d6e2ff)] shadow-[0_8px_18px_rgba(153,170,202,0.24)]" />
      </div>
    </div>
  );
}

function ServerRack({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative flex gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="h-[82px] w-[60px] rounded-[12px] border border-[#d7e4ff] bg-[linear-gradient(180deg,#ffffff,#eaf1ff)] shadow-[0_8px_18px_rgba(150,166,199,0.22)]"
          >
            <div className="px-4 pt-5">
              <div className="h-2 rounded-full bg-[#5f84ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#c8d8ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#c8d8ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#c8d8ff]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cylinder({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="relative h-[90px] w-[68px]">
            <div className="absolute left-0 top-0 h-5 w-full rounded-full bg-[linear-gradient(180deg,#2f63df,#4d81ff)]" />
            <div className="absolute left-0 top-2 h-[70px] w-full rounded-b-[20px] rounded-t-[14px] bg-[linear-gradient(180deg,#2d5dcf,#6f92ff)] shadow-[0_12px_22px_rgba(72,111,210,0.24)]" />
            <div className="absolute bottom-0 left-0 h-5 w-full rounded-full bg-[linear-gradient(180deg,#dbe6ff,#9bb6ff)]" />
            <div className="absolute left-2 top-8 h-[2px] w-[52px] bg-white/50" />
            <div className="absolute left-2 top-14 h-[2px] w-[52px] bg-white/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudNode({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <BaseTile className="h-[74px] w-[100px] p-3">
        <div className="flex h-full items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#ffffff,#eef4ff)]">
          <div className="relative h-8 w-11">
            <div className="absolute bottom-0 left-1 h-5 w-9 rounded-full bg-[#5d86ff]" />
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#7da1ff]" />
            <div className="absolute left-3 top-0 h-5 w-5 rounded-full bg-[#6a92ff]" />
            <div className="absolute right-0 top-2 h-4 w-4 rounded-full bg-[#7da1ff]" />
          </div>
        </div>
      </BaseTile>
    </div>
  );
}

function DocumentNode({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="h-[84px] w-[62px] rounded-[12px] border border-[#d7e3ff] bg-[linear-gradient(180deg,#ffffff,#edf3ff)] shadow-[0_8px_16px_rgba(148,163,194,0.20)]"
          >
            <div className="px-4 pt-5">
              <div className="h-2 rounded-full bg-[#b6c9ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#d7e3ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#d7e3ff]" />
              <div className="mt-3 h-2 rounded-full bg-[#d7e3ff]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallNode({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="h-5 w-5 rounded-lg bg-[linear-gradient(180deg,#e7f0ff,#bee0ff)] shadow-[0_8px_18px_rgba(114,181,255,0.35)]" />
    </div>
  );
}

function ButtonNode({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <BaseTile className="h-[78px] w-[112px] p-4">
        <div className="flex h-full items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#ffffff,#eef4ff)]">
          <div className="h-7 w-12 rounded-full bg-[linear-gradient(180deg,#7ea2ff,#4B74FF)] shadow-[0_8px_16px_rgba(75,116,255,0.30)]" />
        </div>
      </BaseTile>
    </div>
  );
}
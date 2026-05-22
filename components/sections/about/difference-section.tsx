import Link from "next/link";
import { embossedPillStyle } from "@/lib/ui-styles";

export function DifferenceSection() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-28 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div>
            <p className="text-[14px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[24px]">
              WHY WORK WITH US?
            </p>

            <h2 className="mt-4 text-[28px] font-medium leading-[1.08] tracking-[-0.045em] text-[#282b37] md:mt-5 md:text-[58px]">
              Why We Are Different?
            </h2>

            <p className="mt-8 max-w-[320px] text-[13px] font-normal leading-[1.45] tracking-[-0.025em] text-[#707582] md:mt-12 md:max-w-[650px] md:text-[19px]">
              Unlike large, rigid consultancies, we operate with the agility
              <span className="hidden md:inline">
                <br />
              </span>
              of a startup and the precision of a high-end engineering firm.
            </p>
          </div>

          <Link
            href="/services"
            className="
              group mx-auto mt-10 rounded-full border border-[#b9bcc6]
              px-8 py-4 transition-all duration-300
              hover:scale-[0.98] hover:border-[#4b74ff]

              md:px-12 md:py-6
              lg:mx-0 lg:inline-flex
            "
          >
            <span
              className="
                text-[15px] font-medium tracking-[-0.03em]
                text-[#282b37] transition-colors duration-300
                group-hover:text-[#4b74ff]

                md:text-[22px]
              "
            >
              See all services
            </span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 items-end gap-14 md:mt-20 md:gap-20 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <div className="space-y-10 text-[15px] leading-[1.5] tracking-[-0.025em] text-[#707582] md:text-[19px]">
              <p>
                <strong className="font-semibold text-[#666b76]">
                  Direct Access:
                </strong>{" "}
                You work directly with the
                <span className="hidden md:inline">
                  <br />
                </span>
                architects and engineers, not account managers.
              </p>

              <p>
                <strong className="font-semibold text-[#666b76]">
                  No Technical Debt:
                </strong>{" "}
                We write clean, documented,
                <span className="hidden md:inline">
                  <br />
                </span>
                and modular code that stays maintainable for years.
              </p>

              <p>
                <strong className="font-semibold text-[#666b76]">
                  Custom-Only:
                </strong>{" "}
                We don’t sell templates. Every
                <span className="hidden md:inline">
                  <br />
                </span>
                solution is a "bespoke suit" for your business logic.
              </p>
            </div>

            <div
              className="
                mx-auto mt-16 grid max-w-[222px] md:max-w-[760px] grid-cols-1 gap-10
                rounded-[32px] px-8 py-8 text-center

                md:mt-28 md:grid-cols-3 md:gap-0
                md:rounded-[42px] md:px-12 md:py-10
              "
              style={embossedPillStyle}
            >
              <div>
                <p className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[38px]">
                  40%
                </p>

                <p className="mt-4 text-[14px] leading-[1.25] tracking-[-0.025em] text-[#707582] md:mt-5 md:text-[17px]">
                  Reduction in
                  <br />
                  operational overhead
                </p>
              </div>

              <div>
                <p className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[38px]">
                  3x
                </p>

                <p className="mt-4 text-[14px] leading-[1.25] tracking-[-0.025em] text-[#707582] md:mt-5 md:text-[17px]">
                  Faster Data
                  <br />
                  Processing Speeds
                </p>
              </div>

              <div>
                <p className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[38px]">
                  100%
                </p>

                <p className="mt-4 text-[14px] leading-[1.25] tracking-[-0.025em] text-[#707582] md:mt-5 md:text-[17px]">
                  Data
                  <br />
                  Integrity & Accuracy
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/AboutUs/team3.png"
              alt="Team reviewing business analytics"
              className="
                h-[404px] w-full max-w-[500px]
                rounded-l-[32px] object-cover
                -mr-10

                md:h-[560px] md:max-w-[760px]
                md:rounded-l-[48px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
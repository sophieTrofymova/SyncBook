import Link from "next/link";
import { embossedPillStyle } from "@/lib/ui-styles";

export function DifferenceSection() {
  return (
    <section className="relative overflow-hidden px-8 py-28 md:px-12 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <div className="flex items-start justify-between gap-10">
          <div>
            <p className="text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
              WHY WORK WITH US?
            </p>

            <h2 className="mt-5 text-[52px] font-medium leading-none tracking-[-0.045em] text-[#282b37] md:text-[58px]">
              Why We Are Different?
            </h2>

            <p className="mt-12 max-w-[650px] text-[18px] font-normal leading-[1.4] tracking-[-0.025em] text-[#707582] md:text-[19px]">
              Unlike large, rigid consultancies, we operate with the agility
              <br />
              of a startup and the precision of a high-end engineering firm.
            </p>
          </div>

          <Link
            href="/services"
            className="
              group mt-10 rounded-full border border-[#b9bcc6]
              px-12 py-6 transition-all duration-300
              hover:scale-[0.98] hover:border-[#4b74ff]
              lg:inline-flex
            "
          >
            <span
              className="
                text-[22px] font-medium tracking-[-0.03em]
                text-[#282b37] transition-colors duration-300
                group-hover:text-[#4b74ff]
              "
            >
              See all services
            </span>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 items-end gap-20 lg:grid-cols-[0.95fr_1fr]">
          <div>
            <div className="space-y-9 text-[18px] leading-[1.45] tracking-[-0.025em] text-[#707582] md:text-[19px]">
              <p>
                <strong className="font-semibold text-[#666b76]">
                  Direct Access:
                </strong>{" "}
                You work directly with the
                <br />
                architects and engineers, not account managers.
              </p>

              <p>
                <strong className="font-semibold text-[#666b76]">
                  No Technical Debt:
                </strong>{" "}
                We write clean, documented,
                <br />
                and modular code that stays maintainable for years.
              </p>

              <p>
                <strong className="font-semibold text-[#666b76]">
                  Custom-Only:
                </strong>{" "}
                We don’t sell templates. Every
                <br />
                solution is a "bespoke suit" for your business logic.
              </p>
            </div>

            <div
              className="mt-28 grid max-w-[760px] grid-cols-3 rounded-[42px] px-12 py-10"
              style={embossedPillStyle}
            >
              <div>
                <p className="text-[38px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                  40%
                </p>
                <p className="mt-5 text-[17px] leading-[1.25] tracking-[-0.025em] text-[#707582]">
                  Reduction in
                  <br />
                  operational overhead
                </p>
              </div>

              <div>
                <p className="text-[38px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                  3x
                </p>
                <p className="mt-5 text-[17px] leading-[1.25] tracking-[-0.025em] text-[#707582]">
                  Faster Data
                  <br />
                  Processing Speeds
                </p>
              </div>

              <div>
                <p className="text-[38px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                  100%
                </p>
                <p className="mt-5 text-[17px] leading-[1.25] tracking-[-0.025em] text-[#707582]">
                  Data
                  <br />
                  Integrity & Accuracy
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="/AboutUs/team3.png"
              alt="Team reviewing business analytics"
              className="h-[560px] w-full max-w-[760px] rounded-l-[48px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
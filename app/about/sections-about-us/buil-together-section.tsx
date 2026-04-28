import Link from "next/link";

export function BuildTogetherSection() {
  return (
    <section className="bg-[#f3f3f7] px-8 py-24 md:px-12 xl:px-14">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-12 rounded-[64px] bg-[#416fff] px-16 py-20 md:px-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[25px] font-normal uppercase leading-none tracking-[-0.04em] text-white/55">
            THE FUTURE IS AUTOMATED. ARE YOU READY?
          </p>

          <h2 className="mt-10 text-[58px] font-normal leading-none tracking-[-0.045em] text-white md:text-[66px]">
            Let’s Build Together
          </h2>
        </div>

        <div>
          <p className="max-w-[670px] text-[21px] font-normal leading-[1.28] tracking-[-0.035em] text-white/70">
            Whether you are a growing startup or an established enterprise,
            <br />
            we are ready to help you navigate your digital transformation.
            <br />
            Let’s create something that works as hard as you do.
          </p>

          <Link
            href="/contacts"
            className="
              mt-14 flex h-[98px] w-full max-w-[580px] items-center justify-center
              rounded-full bg-[#f3f3f7] text-[27px] font-semibold
              tracking-[-0.04em] text-[#416fff]
              transition-all duration-300 hover:scale-[0.985] active:scale-[0.97]
            "
          >
            Meet us & start the process
          </Link>
        </div>
      </div>
    </section>
  );
}
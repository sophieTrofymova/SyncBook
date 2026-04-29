import { embossedCardStyleBlue } from "@/lib/ui-styles";

const workflowItems = [
  {
    title: "ERP & CRM\nCustomization",
    text: "Customization and refinement of control systems to suit your unique needs.",
  },
  {
    title: "Data Pipeline\nAutomation",
    text: "Development of reliable interfaces for the interaction of your products",
  },
  {
    title: "AI & ML\nIntegration",
    text: "Optimization under AWS, Azure and Google Cloud for maximum stability",
  },
];

export function WorkflowSection() {
  return (
    <section className="bg-[#f3f3f7] px-8 py-24 md:px-12 xl:px-14">
      <div
        className="
          relative overflow-hidden rounded-[64px] px-16 py-20
          md:px-20 md:py-24
        "
        style={{
          background: "linear-gradient(135deg, #2c61ff 0%, #2d5ef1 60%, #305ad9 100%)",
        }}
      >
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.2), transparent 60%)",
          }}
        />

        {/* TOP TEXT */}
        <div className="relative z-10 text-center">
          <p className="text-[22px] uppercase tracking-[-0.03em] text-white/60">
            FROM CHAOS TO CODE
          </p>

          <h2 className="mt-6 text-[52px] font-medium tracking-[-0.045em] text-white md:text-[60px]">
            Intelligent Workflow Orchestration
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[19px] leading-[1.4] tracking-[-0.03em] text-white/75">
            Free your team from routine. We identify inefficient areas of
            your workflows and replace them with intelligent algorithms
          </p>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Services/workflow.png"
              alt="Workflow orchestration"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-8">
            {workflowItems.map((item) => (
              <div
                key={item.title}
                className="
                  grid min-h-[110px] grid-cols-[0.9fr_1.1fr] items-center
                  rounded-[28px] px-10 py-6
                  backdrop-blur-md
                "
                style={embossedCardStyleBlue}
              >
                <h3 className="whitespace-pre-line text-[20px] font-semibold tracking-[-0.035em] text-white">
                  {item.title}
                </h3>

                <p className="border-l border-white/20 pl-10 text-[18px] leading-[1.3] tracking-[-0.03em] text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
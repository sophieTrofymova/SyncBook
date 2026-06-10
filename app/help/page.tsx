export const metadata = {
  title: "Help Center",
  description:
    "Find guidance on starting a software project, requesting technical support, and contacting Softaryn for web development, automation, CRM, ERP, and AI-powered solutions.",
  alternates: {
    canonical: "/help",
  },
};

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-20">
      <h1 className="mb-4 text-4xl font-semibold">Help Center</h1>

      <p className="mb-12 text-lg text-[#4b5162]">
        Get guidance on starting a project, requesting support, understanding
        our process, and choosing the right software solution for your business.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">Project inquiries</h2>

          <p className="mt-3 text-[#4b5162]">
            If you are considering a new website, custom web application,
            automation system, CRM, ERP, or AI-powered workflow solution, you
            can contact our team with a short description of your goals,
            business challenges, and expected timeline.
          </p>

          <p className="mt-3 text-[#4b5162]">
            The more context you provide, the more accurately we can understand
            your needs and recommend the right technical approach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Technical support</h2>

          <p className="mt-3 text-[#4b5162]">
            For existing clients, we can assist with bug reports, performance
            issues, feature requests, integrations, deployment questions, and
            general product maintenance.
          </p>

          <p className="mt-3 text-[#4b5162]">
            When contacting us about a technical issue, please include a clear
            description of the problem, the affected page or feature, screenshots
            if available, and the steps needed to reproduce the issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Discovery and consultation</h2>

          <p className="mt-3 text-[#4b5162]">
            Most projects start with a discovery conversation. During this step,
            we review your current workflows, identify technical constraints,
            clarify business objectives, and outline possible implementation
            options.
          </p>

          <p className="mt-3 text-[#4b5162]">
            This helps us define whether you need a landing page, corporate
            website, internal automation tool, integration layer, dashboard, or
            fully custom software platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Response times</h2>

          <p className="mt-3 text-[#4b5162]">
            We usually respond to new project inquiries within one business day.
            More complex technical requests may require additional review before
            we provide a detailed answer or recommendation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">How to contact us</h2>

          <p className="mt-3 text-[#4b5162]">
            The best way to reach us is through the contact page. You can send
            us a project request, describe a technical challenge, or ask a
            general question about our software development and automation
            services.
          </p>
        </section>
      </div>
    </main>
  );
}
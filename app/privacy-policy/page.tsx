import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Softaryn collects, uses, stores, and protects personal information submitted through our website and business communications.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-20">
      <h1 className="mb-4 text-4xl font-semibold">Privacy Policy</h1>

      <p className="mb-12 text-lg text-[#4b5162]">
        Learn how Softaryn collects, uses, stores, and protects information
        shared through our website and business communications.
      </p>

      <div className="space-y-12 text-[#4b5162]">
        <section>
          <h2 className="text-2xl font-semibold text-black">
            Introduction
          </h2>

          <p className="mt-3">
            At Softaryn, we value your privacy and are committed to protecting
            any personal information you choose to share with us. This Privacy
            Policy explains what information we collect, how we use it, and the
            measures we take to safeguard it.
          </p>

          <p className="mt-3">
            By using our website, you agree to the practices described in this
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Information We Collect
          </h2>

          <p className="mt-3">
            We may collect information that you voluntarily provide when you:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Submit a contact or inquiry form</li>
            <li>Request information about our services</li>
            <li>Communicate with us via email or other channels</li>
            <li>Engage with our website and digital content</li>
          </ul>

          <p className="mt-4">
            This information may include your name, email address, company
            information, project requirements, and any other details you choose
            to provide.
          </p>

          <p className="mt-3">
            We may also collect limited technical information such as browser
            type, device information, IP address, and website usage data to
            improve website performance and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            How We Use Your Information
          </h2>

          <p className="mt-3">
            Information collected through our website may be used to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Respond to inquiries and project requests</li>
            <li>Provide consultations and service information</li>
            <li>Improve our website and user experience</li>
            <li>Communicate regarding ongoing projects or discussions</li>
            <li>Maintain website security and prevent misuse</li>
          </ul>

          <p className="mt-4">
            We only use personal information for legitimate business purposes
            and do not use it for unrelated marketing activities without
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Information Sharing
          </h2>

          <p className="mt-3">
            Softaryn does not sell, rent, or trade personal information to
            third parties.
          </p>

          <p className="mt-3">
            Information may only be disclosed when required by law, necessary to
            protect our legal rights, or required to provide services through
            trusted third-party providers operating under appropriate
            confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Data Security
          </h2>

          <p className="mt-3">
            We take reasonable technical and organizational measures to protect
            personal information against unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <p className="mt-3">
            While no online system can guarantee absolute security, we
            continuously work to maintain appropriate safeguards for the
            information we receive.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Data Retention
          </h2>

          <p className="mt-3">
            We retain information only for as long as necessary to fulfill the
            purposes described in this policy, comply with legal obligations,
            resolve disputes, or support legitimate business operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Third-Party Services
          </h2>

          <p className="mt-3">
            Our website may contain links to external websites or services
            operated by third parties. We are not responsible for the privacy
            practices or content of external websites and encourage users to
            review their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Your Rights
          </h2>

          <p className="mt-3">
            Depending on your location and applicable privacy regulations, you
            may have the right to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of personal information</li>
            <li>Object to certain processing activities</li>
            <li>Request information about how your data is used</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Updates to This Policy
          </h2>

          <p className="mt-3">
            We may update this Privacy Policy periodically to reflect changes in
            our services, legal requirements, or business operations. Any
            updates will be published on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black">
            Contact Information
          </h2>

          <p className="mt-3">
            If you have any questions regarding this Privacy Policy or the way
            we handle personal information, please contact us through our
            Contact page or by emailing:
          </p>

          <p className="mt-4 font-medium text-black">
            hello@softaryn.com
          </p>
        </section>
      </div>
    </main>
  );
}

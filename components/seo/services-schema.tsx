import { JsonLd } from "./json-ld";

export function ServicesSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Custom Software Development and Business Automation",
        provider: {
          "@type": "Organization",
          name: "Softaryn",
          url: "https://softaryn.com",
        },
        areaServed: {
          "@type": "Country",
          name: "Worldwide",
        },
        description:
          "Softaryn provides custom software development, business process automation, CRM and ERP implementation, system integration, cloud-native solutions and digital transformation services.",
        offers: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Process Automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "System Integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud-Native Solutions",
            },
          },
        ],
      }}
    />
  );
}
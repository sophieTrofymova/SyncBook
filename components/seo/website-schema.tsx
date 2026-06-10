import { JsonLd } from "./json-ld";

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Softaryn",
        url: "https://softaryn.com",
        publisher: {
          "@type": "Organization",
          name: "Softaryn",
        },
      }}
    />
  );
}
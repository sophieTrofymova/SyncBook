import { JsonLd } from "./json-ld";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Softaryn",
        url: "https://softaryn.com",
        logo: "https://softaryn.com/FooterLogo.png",
        email: "hello@softaryn.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dublin",
          addressRegion: "Dublin",
          addressCountry: "IE",
        },
        sameAs: [],
      }}
    />
  );
}
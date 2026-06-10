import { JsonLd } from "./json-ld";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

const baseUrl = "https://softaryn.com";

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      }}
    />
  );
}
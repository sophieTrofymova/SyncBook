import { PortfolioProjectClient } from "./portfolio-project-client";

export function generateStaticParams() {
  return [{ id: "0" }, { id: "1" }, { id: "2" }];
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PortfolioProjectClient id={Number(id ?? 0)} />;
}
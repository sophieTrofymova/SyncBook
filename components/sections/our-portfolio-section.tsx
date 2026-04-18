import { PortfolioCaseCard } from "@/components/cards/portfolio-case-card";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";
import { cases } from "@/data/home";

export function OurPortfolioSection() {
  return (
    <HorizontalCardCarousel
      eyebrow="LOOK AT THESE DECENT CASES"
      title="Our Portfolio"
      actionText="View all cases"
      items={cases}
      renderItem={(item) => <PortfolioCaseCard key={item.title} item={item} />}
    />
  );
}
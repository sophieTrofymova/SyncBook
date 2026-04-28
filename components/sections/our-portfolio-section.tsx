import { PortfolioCaseCard } from "@/components/cards/portfolio-case-card";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";


export function OurPortfolioSection() {
  const { t } = useLanguage();
  const { cases } = getHomeData(t);

  return (
    <HorizontalCardCarousel
      eyebrow={t.portfolio.eyebrow}
      title={t.portfolio.title}
      actionText={t.portfolio.actionText}
      items={cases}
      renderItem={(item) => <PortfolioCaseCard key={item.title} item={item} />}
    />
  );
}
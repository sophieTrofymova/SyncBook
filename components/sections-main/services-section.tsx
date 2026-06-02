import { ServiceCard } from "@/components/cards/service-card";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function ServicesSection() {
  const { t } = useLanguage();
  const { services } = getHomeData(t);

  return (
    <HorizontalCardCarousel
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      actionText={t.services.actionText}
      actionHref="/services"
      items={services}
      renderItem={(item) => (
        <ServiceCard key={item.title} item={item} />
      )}
    />
  );
}

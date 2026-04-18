import { ServiceCard } from "@/components/cards/service-card";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";
import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <HorizontalCardCarousel
      eyebrow="FROM CHAOS TO CODE"
      title="Our services"
      actionText="See all services"
      items={services}
      renderItem={(item) => <ServiceCard key={item.title} item={item} />}
    />
  );
}
import { translations, type Language } from "@/lib/i18n";

type TranslationSchema = (typeof translations)[Language];

// t - это объект перевода, один из языков объекта translation

export function getHomeData(t: TranslationSchema) {
  return {
    navItems: [
      t.nav.services,
      t.nav.about,
      t.nav.portfolio,
      t.nav.contacts,
    ],

    testimonials: [
      {
        ...t.testimonials.items[0],
        image: t.homeData.testimonials[0].image,
        rating: t.homeData.testimonials[0].rating,
      },
      {
        ...t.testimonials.items[1],
        image: t.homeData.testimonials[1].image,
        rating: t.homeData.testimonials[1].rating,
      },
      {
        ...t.testimonials.items[2],
        image: t.homeData.testimonials[2].image,
        rating: t.homeData.testimonials[2].rating,
      },
      {
        ...t.testimonials.items[3],
        image: t.homeData.testimonials[3].image,
        rating: t.homeData.testimonials[3].rating,
      },
      {
        ...t.testimonials.items[4],
        image: t.homeData.testimonials[4].image,
        rating: t.homeData.testimonials[4].rating,
      },
    ],

    techLogos: [
      { src: "/Tech1.png", alt: "Tech1" },
      { src: "/Tech2.png", alt: "Tech2" },
      { src: "/Tech3.png", alt: "Tech3" },
      { src: "/Tech4.png", alt: "Tech4" },
    ],

    services: [
      {
        title: t.homeData.services[0].title,
        description: t.homeData.services[0].description,
        image: "/service-gear.png",
        alt: t.homeData.services[0].alt,
      },
      {
        title: t.homeData.services[1].title,
        description: t.homeData.services[1].description,
        image: "/service-rocket.png",
        alt: t.homeData.services[1].alt,
      },
      {
        title: t.homeData.services[2].title,
        description: t.homeData.services[2].description,
        image: "/service-chart.png",
        alt: t.homeData.services[2].alt,
      },
      {
        title: t.homeData.services[3].title,
        description: t.homeData.services[3].description,
        image: "/service-gear.png",
        alt: t.homeData.services[3].alt,
      },
    ],

    cases: [
      {
        title: t.homeData.cases[0].title,
        image: "/Monitor.png",
        alt: t.homeData.cases[0].alt,
      },
      {
        title: t.homeData.cases[1].title,
        image: "/MacBook.png",
        alt: t.homeData.cases[1].alt,
      },
      {
        title: t.homeData.cases[2].title,
        image: "/smartphone.png",
        alt: t.homeData.cases[2].alt,
      },
      {
        title: t.homeData.cases[3].title,
        image: "/Laptop.png",
        alt: t.homeData.cases[3].alt,
      },
    ],

    steps: [
      {
        number: "01",
        title: t.homeData.steps[0].title,
        description: t.homeData.steps[0].description,
      },
      {
        number: "02",
        title: t.homeData.steps[1].title,
        description: t.homeData.steps[1].description,
      },
      {
        number: "03",
        title: t.homeData.steps[2].title,
        description: t.homeData.steps[2].description,
      },
      {
        number: "04",
        title: t.homeData.steps[3].title,
        description: t.homeData.steps[3].description,
      },
    ],
  };
}
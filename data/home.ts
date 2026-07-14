import { translations, type Language } from "@/lib/i18n";

type TranslationSchema = (typeof translations)[Language];

// t — объект перевода выбранного языка

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
      { src: "/Logos/logoGoogle.svg", alt: "Google" },
      { src: "/Logos/logoGPT.svg", alt: "OpenAI" },
      { src: "/Logos/logoReact.svg", alt: "React" },
      { src: "/Logos/logoAWS.svg", alt: "AWS" },
    ],

    techResults: [
      { src: "/AboutUs/Group 58.svg", alt: "Tech1" },
      { src: "/AboutUs/Group 59.svg", alt: "Tech2" },
      { src: "/AboutUs/Group 60.svg", alt: "Tech3" },
      { src: "/AboutUs/Group 61.svg", alt: "Tech4" },
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
        image: "/Portfolio/Rosenda/rosenda-tablet.png",
        alt: t.homeData.cases[0].alt,
        href: "/portfolio/project/0",
      },
      {
        title: t.homeData.cases[1].title,
        image: "/MacBook.png",
        alt: t.homeData.cases[1].alt,
        href: "/portfolio/project/1",
      },
      {
        title: t.homeData.cases[2].title,
        image: "/Bird.png",
        alt: t.homeData.cases[2].alt,
        href: "/portfolio",
      },
      {
        title: t.homeData.cases[3].title,
        image: "/Portfolio/projects/3/miraki-tablet.png",
        alt: t.homeData.cases[3].alt,
        href: "/portfolio/project/2",
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
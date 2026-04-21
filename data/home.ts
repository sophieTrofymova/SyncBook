/*
export const navItems = ["Services", "About us", "Portfolio", "Contacts"];

export const techLogos = [
  { src: "/Tech1.png", alt: "Tech1" },
  { src: "/Tech2.png", alt: "Tech2" },
  { src: "/Tech3.png", alt: "Tech3" },
  { src: "/Tech4.png", alt: "Tech4" },
];

export const services = [
  {
    title: "Custom Software Development",
    description:
      "We create software that suits your business, not the other way around. From CRM to complex ERP systems.",
    image: "/service-gear.png",
    alt: "Custom software development",
  },
  {
    title: "Fast workflow Automation",
    description:
      "We identify bottlenecks in your processes and implement AI solutions that save up to 40% of your employees' time.",
    image: "/service-rocket.png",
    alt: "Workflow automation",
  },
  {
    title: "Digital Transformation",
    description:
      "We transition your business to digital smoothly, updating legacy systems to modern standards.",
    image: "/service-chart.png",
    alt: "Digital transformation",
  },
];

export const cases = [
  {
    title: 'Dashboard for "Rozenfeld Agency"',
    image: "/Monitor.png",
    alt: 'Dashboard for "Rozenfeld Agency"',
  },
  {
    title: 'Website and panel for "Kolinsky"',
    image: "/MacBook.png",
    alt: 'Website and panel for "Kolinsky"',
  },
  {
    title: 'Mobile App for "Occollo"',
    image: "/smartphone.png",
    alt: 'Mobile App for "Occollo"',
  },
  {
    title: 'Website for "Okeilo"',
    image: "/Laptop.png",
    alt: 'Website for "Okeilo"',
  },
];

export const steps = [
  {
    number: "01",
    title: "Deep Discovery & Audit",
    description:
      "We analyze your current data flows, identify inefficiencies, and define the technical requirements for your future system.",
  },
  {
    number: "02",
    title: "Prototyping & Architecture",
    description:
      "Before writing code, we design the “blueprint”—defining how data will move and ensuring the system is secure by design.",
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "We build in transparent cycles, providing you with constant updates and a staging environment to track progress.",
  },
  {
    number: "04",
    title: "Ecosystem Growth",
    description:
      "Final delivery is just the beginning. We provide 24/7 monitoring and iterate based on real user feedback and business growth.",
  },
];
*/
import { translations, type Language } from "@/lib/i18n";

type TranslationSchema = (typeof translations)[Language];

export function getHomeData(t: TranslationSchema) {
  return {
    navItems: [
      t.nav.services,
      t.nav.about,
      t.nav.portfolio,
      t.nav.contacts,
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
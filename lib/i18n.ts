export type Language = "en" | "ru" | "es";

export const translations = {
  en: {
    common: {
      previous: "Previous",
      next: "Next",
      send: "Send",
      subscribe: "Subscribe",
    },

    header: {
      logoAlt: "Softaryn logo",
      language: "Language",
    },

    nav: {
      services: "Services",
      about: "About us",
      portfolio: "Portfolio",
      contacts: "Contacts",
    },

    hero: {
      titleBeforeArrow: "Engineering",
      titleAfterArrow: "Efficiency",
      titleSecondLine: "for Modern Business",
      description:
        "We design and implement customized automation systems that free your team from routine tasks and accelerate growth. We combine fast delivery with strong engineering foundations.",
      cta: "Start automation",
      heroAlt: "Custom web development and business automation platform interface",
      arrowAlt: "",
    },

    architecture: {
      eyebrow: "WE CONDUCT DEEP CREATION",
      title1: "Multi-Layered Architecture",
      title2: "for Absolute Scalability",
      imageAlt: "Multi-layered architecture illustration",
      description:
        'We don’t believe in "one-size-fits-all" software. Our engineering philosophy is based on a modular stack approach, ensuring every layer of your digital ecosystem is built for high performance and future growth.',
      stat1: "Reduction in operational overhead",
      stat2: "Faster Data Processing Speeds",
      stat3: "Data Integrity & Accuracy",
    },

    contact: {
      eyebrow: "LET’S CREATE TOGETHER MIRACLES",
      title: "Have a project in mind?",
      mailboxAlt: "Contact form mailbox illustration",
      nameLabel: "User name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      descriptionLabel: "Description",
      descriptionPlaceholder: "Tell us a bit about your idea...",
      button: "Send and start the process",
    },

    portfolio: {
      eyebrow: "LOOK AT THESE DECENT CASES",
      title: "Our Portfolio",
      actionText: "View all cases",
    },

    services: {
      eyebrow: "FROM CHAOS TO CODE",
      title: "Our services",
      actionText: "See all services",
    },

    techStrip: {
      title: "Powered by world-class technologies",
    },

    testimonials: {
      eyebrow: "OUR TESTIMONIALS",
      title1: "We are not the Best",
      title2: "but We are Unique",
      prevAlt: "Previous testimonial",
      nextAlt: "Next testimonial",
      ratingSuffix: "/5",
      items: [
        {
          name: "James Rosner",
          role: "Lawyer",
          text:
            "The implemented solutions stand out for their flexibility and well-structured architecture. The modular approach significantly improved workflow stability while making future scaling straightforward and efficient.",
        },
        {
          name: "Andrew Witacker",
          role: "CEO of Starlink",
          text:
            "The engineering philosophy is built on a multi-layered architecture, ensuring reliability and performance across every level of the system. This approach enabled seamless scaling without compromising quality.",
        },
        {
          name: "Michel Dawer",
          role: "Beauty specialist",
          text:
            "The result is an intuitive and reliable system that integrates naturally into existing processes. The clarity of execution and overall quality of implementation were particularly impressive.",
        },
        {
          name: "Sophia Green",
          role: "Operations Director",
          text:
            "A fragmented toolset was transformed into a unified ecosystem. This significantly reduced operational overhead and provided full visibility into key business processes.",
        },
        {
          name: "Daniel Moore",
          role: "Product Manager",
          text:
            "What stands out most is the balance between development speed and quality. The solution feels deeply tailored to business needs and thoughtfully designed in every detail.",
        },
      ],
    },

    growth: {
      eyebrow: "OUR CLIENTS GET THE BEST",
      title: "Visualize your growth",
      description:
        "Our solutions give you complete control over your data and operations in real time.",
      imageAlt: "Business analytics dashboard for tracking growth and operations",
    },

    whyChooseUs: {
      eyebrow: "WE ARE READY TO HELP",
      title: "Why choose us?",
      cta: "Discuss my project",
    },

    footer: {
      usual: "Usual",
      legal: "Legal",
      services: "Services",
      about: "About us",
      portfolio: "Portfolio",
      contacts: "Contacts",
      help: "Help",
      faq: "FAQ",
      terms: "Terms of use",
      privacy: "Privacy",
      newsletterTitle: "Subscribe to our newsletter!",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      copyright: "© 2025 All rights reserved.",
    },

    homeData: {
      testimonials: [
        { image: "/Testimonial1.png", rating: "4,5" },
        { image: "/Testimonial2.png", rating: "4,9" },
        { image: "/Testimonial3.png", rating: "4,6" },
        { image: "/Testimonial1.png", rating: "4,8" },
        { image: "/Testimonial2.png", rating: "5,0" },
      ],

      steps: [
        {
          title: "Deep Discovery & Audit",
          description:
            "We analyze your current data flows, identify inefficiencies, and define the technical requirements for your future system.",
        },
        {
          title: "Prototyping & Architecture",
          description:
            "Before writing code, we design the “blueprint”—defining how data will move and ensuring the system is secure by design.",
        },
        {
          title: "Agile Development",
          description:
            "We build in transparent cycles, providing you with constant updates and a staging environment to track progress.",
        },
        {
          title: "Ecosystem Growth",
          description:
            "Final delivery is just the beginning. We provide 24/7 monitoring and iterate based on real user feedback and business growth.",
        },
      ],

      services: [
        {
          title: "Custom Software Development",
          description:
            "We create software that suits your business, not the other way around. From CRM to complex ERP systems.",
          alt: "Custom web application and software development illustration",
        },
        {
          title: "Fast workflow Automation",
          description:
            "We identify bottlenecks in your processes and implement AI solutions that save up to 40% of your employees' time.",
          alt: "Business workflow automation illustration",
        },
        {
          title: "Digital Transformation",
          description:
            "We transition your business to digital smoothly, updating legacy systems to modern standards.",
          alt: "Digital transformation and legacy system modernization illustration",
        },
        {
          title: "System Integration",
          description:
            "We connect your tools, databases, and services into one seamless digital ecosystem.",
          alt: "System integration between business tools and databases",
        },
      ],

      cases: [
        {
          title: 'Dashboard for "Rozenfeld Agency"',
          alt: 'Dashboard for "Rozenfeld Agency"',
        },
        {
          title: 'Website and panel for "Kolinsky"',
          alt: 'Website and panel for "Kolinsky"',
        },
        {
          title: 'Mobile App for "Occollo"',
          alt: 'Mobile App for "Occollo"',
        },
        {
          title: 'Website for "Okeilo"',
          alt: 'Website for "Okeilo"',
        },
      ],
    },

    portfolioPage: {
      hero: {
        titleLine1: "We suggest proven",
        titleAccent: "solutions",
        titleLine2: "& measurable",
        titleLine3: "impact.",
        description:
          "We don't collect projects; we collect success stories. Each case below is the result of an in-depth audit, engineering design, and automation that freed up people's time for more important tasks.",
        techTitle: "Powered by world-class technologies",
        cases: [
          {
            number: "01",
            title: "Dashboard\n“Rozenfeld Agency”",
            image: "/Portfolio/monitor-1.png",
          },
          {
            number: "02",
            title: "Travel agency\nwebsite",
            image: "/Portfolio/monitor-2.png",
          },
          {
            number: "03",
            title: "Business platform",
            image: "/Portfolio/monitor-3.png",
          },
        ],
      },

      allProjects: "All projects",
      projectDescription:
        "We create software that suits your business, not the other way around. From CRM to complex ERP systems.",
      seeMore: "See more",
      showMore: "Show more",
      settingsAlt: "",
      tags: ["Node", "Next.js", "Cloudflare", "Docker", "PostgreSQL", "BankID"],
      hashtags: ["web design", "real estate", "landing page"],
      projects: [
        { title: "Miraki Website Case Beauty Salon" },
        { title: "Website and panel for “Kolinsky”" },
        { title: "Refa group website automation" },
      ],

      projectDetails: {
        backAlt: "Back to portfolio",
        visitWebsite: "Visit\nWebsite",
        heroDescription:
          "We don’t collect projects; we collect success stories. Each case below is the result of an in-depth audit, engineering design, and automation that freed up people’s time for more important tasks.",
        stat1: "25%",
        stat1Text: "More conversion than before",
        stat2: "3000+",
        stat2Text: "Clients came after rework",
        ctaText: "Make your",
        ctaStrong: "project decent",
        ctaAfter: "already today with us",
        seeAllServices: "See all services",

        aboutTitle: "ABOUT THE PROJECT",
        aboutDescription:
          "A digital beauty platform designed to present services, improve client experience, and create a modern visual identity for the brand.",
        serviceLabel: "Service",
        serviceValue: "Website",
        industryLabel: "Industry",
        industryValue: "Beauty Salon",
        publishedLabel: "Published",
        publishedValue: "January 9th 2025",

        uiKitTitle: "UI KIT",
        uiKitDescription:
          "A visual system built around elegant colors, soft typography, and reusable interface elements for a consistent brand experience.",

        typographyTitle: "Montserrat Alternates",
        adaptiveTitle: "Adaptive versions",
        adaptiveDescription:
          "Responsive layouts were prepared for desktop, tablet, and mobile screens to keep the experience clean and accessible across devices.",

        quote:
          "The interface was designed to feel elegant, clear, and easy to use while keeping the visual identity strong across every touchpoint.",
        quoteAuthor: "- Richard Price",

        otherEyebrow: "LOOK AT THESE DECENT CASES",
        otherTitle: "Discover other projects",
        viewAllCases: "View all cases",

        projects: [
          {
            title: "Refa group website automation",
            description:
              "A business website automation project designed to improve lead flow, content structure, and operational efficiency.",
            tags: ["Node", "Next.js", "Automation", "Cloudflare"],
            hashtags: ["automation", "business", "landing page"],
          },
          {
            title: "Website and panel for “Kolinsky”",
            description:
              "A real estate website and admin panel built to present properties clearly and simplify content management.",
            tags: ["Next.js", "Dashboard", "CMS", "Real Estate"],
            hashtags: ["web design", "real estate", "admin panel"],
          },
          {
            title: "Miraki Website Case Beauty Salon",
            description:
              "A refined beauty salon website focused on visual identity, service presentation, and smooth client experience.",
            tags: ["Next.js", "UI/UX", "Responsive", "Branding"],
            hashtags: ["web design", "beauty salon", "landing page"],
          },
        ],
        otherProjects: [
          'Dashboard for “Rozenfeld Agency”',
          'Website and panel for “Kolinsky”',
          'Mobile App for “Occollo”',
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLine1: "Solutions Engineered",
        titleAccent: "for Scale",
        description:
          "We transform technical complexity into operational advantage. Explore our core competencies in development, automation, and digital transformation.",
        cta: "Start exploring",
      },
      engineering: {
        eyebrow: "FROM CHAOS TO CODE",
        titleLine1: "Enterprise-Grade",
        titleLine2: "Software Engineering",
        descriptionLine1:
          "We create not just applications, but the foundation for your business.",
        descriptionLine2:
          "Our solutions are designed with future loads and data security in mind.",
        imageAlt: "Enterprise web development and software engineering visualization",
        items: [
          {
            title: "Full-Stack Development",
            text: "Creating high-performance web/mobile platforms for your product",
          },
          {
            title: "API Ecosystems",
            text: "Development of reliable interfaces for the interaction of your products",
          },
          {
            title: "Cloud-Native Solutions",
            text: "Optimization under AWS, Azure and Google Cloud for maximum stability",
          },
        ],
      },
      workflow: {
        eyebrow: "FROM CHAOS TO CODE",
        title: "Intelligent Workflow Orchestration",
        description:
          "Free your team from routine. We identify inefficient areas of your workflows and replace them with intelligent algorithms.",
        imageAlt: "Intelligent workflow automation and orchestration visualization",
        items: [
          {
            title: "ERP & CRM\nCustomization",
            text: "Customization and refinement of control systems to suit your unique needs.",
          },
          {
            title: "Data Pipeline\nAutomation",
            text: "Development of reliable interfaces for the interaction of your products",
          },
          {
            title: "AI & ML\nIntegration",
            text: "Optimization under AWS, Azure and Google Cloud for maximum stability",
          },
        ],
      },
      architecture: {
        eyebrow: "WE CONDUCT DEEP CREATION",
        title: "Multi-Layered Architecture for Absolute Scalability",
        actionText: "Explore architecture",
        items: [
          {
            icon: "/Services/icon1.png",
            title: "Tech Stack\nAudit",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
          {
            icon: "/Services/icon2.png",
            title: "Scalability\nPlanning",
            text: "Developing a roadmap for your product's development for years to come.",
          },
          {
            icon: "/Services/icon3.png",
            title: "Security &\nCompliance",
            text: "Checking systems for vulnerabilities and compliance with international standards.",
          },
        ],
      },
      deliveryFramework: {
        eyebrow: "WHAT IS THE PROCESS",
        title: "Our Delivery Framework",
        description: "Each project goes through a rigorous quality control cycle:",
        items: [
          {
            icon: "/Services/process1.png",
            title: "Discovery",
            text: "Diving into business logic\nand process audit",
            className: "left-[3%] top-[440px]",
          },
          {
            icon: "/Services/process2.png",
            title: "Design",
            text: "UX and technical\narchitecture design",
            className: "left-[30%] top-[530px]",
          },
          {
            icon: "/Services/process3.png",
            title: "Sprint",
            text: "Iterative development\nwith weekly demos.",
            className: "left-[55%] top-[395px]",
          },
          {
            icon: "/Services/process4.png",
            title: "Launch",
            text: "Final testing and\nseamless implementation",
            className: "right-[7%] top-[470px]",
          },
        ],
      },
      values: {
        eyebrow: "WHAT WE THINK SIGNIFICANT",
        title: "Our Values",
        items: [
          {
            number: "01",
            title: "Integrity by Design",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
          {
            number: "02",
            title: "Radical Efficiency",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
          {
            number: "03",
            title: "Scalable Thinking",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
        ],
      },
    },
    aboutPage: {
      hero: {
        mobileTitleLine1: "“We Bridge the Gap",
        mobileTitleLine2: "Between Complexity and",
        mobileTitleLine3: "Efficiency”",
        desktopTitleLine1: "“We Bridge the Gap Between",
        desktopTitleLine2: "Complexity and Efficiency”",
        label: "-About us",
        descriptionLine1: "We transform technical complexity",
        descriptionLine2: "into operational advantage.",
        descriptionLine3: "Explore our core competencies in",
        descriptionLine4: "development and automation.",
        cta: "Meet us",
        imageAlt: "Softaryn team and software automation concept",
      },
      team: {
        eyebrow: "FROM CHAOS TO CODE",
        titleLine1: "Born from a Passion",
        titleLine2: "for Precision",
        description1:
          "Our journey started with a simple observation: most businesses are held back not by a lack of ideas, but by the weight of inefficient processes. We saw brilliant teams spending 40% of their time on manual data entry, fragmented communication, and battling legacy systems that weren't built for the modern pace.",
        description2:
          "We founded SyncBook to change that. We didn't want to be just another software shop. We set out to be architects of efficiency. We spent our early days experimenting with modular code and AI-driven logic to find a way to make automation feel seamless, not mechanical.\nToday, we operate as a boutique agency where engineering excellence meets strategic thinking. We don't just 'take orders'—we dive deep into your business DNA to find where technology can create the most significant impact.",
        image1Alt: "Team working together in an office",
        image2Alt: "Team planning automation project",
      },
      values: {
        eyebrow: "WHAT WE THINK SIGNIFICANT",
        title: "Our Values",
        items: [
          {
            number: "01",
            title: "Integrity by Design",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
          {
            number: "02",
            title: "Radical Efficiency",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
          {
            number: "03",
            title: "Scalable Thinking",
            text: "Analysis of your current technologies and recommendations for their optimization.",
          },
        ],
      },
      philosophy: {
        eyebrow: "AUTOMATION IS FOR PEOPLE",
        title: "The Philosophy: Humans vs. Machines",
        imageAlt: "Human-centered business automation concept",
        paragraph1:
          "There is a common misconception that automation is about replacing humans. We believe the opposite.",
        highlight: "Automation is about liberating humans.",
        paragraph2:
          "By delegating the repetitive, the mundane, and the error-prone tasks to intelligent systems, we allow teams to focus on what they do best: strategy, empathy, and innovation.",
        paragraph3:
          "We build the machines, so you can focus on the vision.",
      },
      difference: {
        eyebrow: "WHY WORK WITH US?",
        title: "Why We Are Different?",
        descriptionLine1:
          "Unlike large, rigid consultancies, we operate with the agility",
        descriptionLine2:
          "of a startup and the precision of a high-end engineering firm.",
        buttonText: "See all services",

        directAccessTitle: "Direct Access:",
        directAccessText:
          "You work directly with the architects and engineers, not account managers.",

        noDebtTitle: "No Technical Debt:",
        noDebtText:
          "We write clean, documented, and modular code that stays maintainable for years.",

        customTitle: "Custom-Only:",
        customText:
          'We don’t sell templates. Every solution is a "bespoke suit" for your business logic.',

        stats: [
          {
            value: "40%",
            line1: "Reduction in",
            line2: "operational overhead",
          },
          {
            value: "3x",
            line1: "Faster Data",
            line2: "Processing Speeds",
          },
          {
            value: "100%",
            line1: "Data",
            line2: "Integrity & Accuracy",
          },
        ],

        imageAlt: "Team reviewing business analytics",
      },
      buildTogether: {
        eyebrow: "THE FUTURE IS AUTOMATED. ARE YOU READY?",
        title: "Let’s Build Together",
        descriptionLine1:
          "Whether you are a growing startup or an established enterprise,",
        descriptionLine2:
          "we are ready to help you navigate your digital transformation.",
        descriptionLine3:
          "Let’s create something that works as hard as you do.",
        buttonText: "Meet us & start the process",
      },
    },
  },

  ru: {
    common: {
      previous: "Назад",
      next: "Далее",
      send: "Отправить",
      subscribe: "Подписаться",
    },

    header: {
      logoAlt: "Логотип Softaryn",
      language: "Язык",
    },

    nav: {
      services: "Услуги",
      about: "О нас",
      portfolio: "Портфолио",
      contacts: "Контакты",
    },

    hero: {
      titleBeforeArrow: "Инженерная",
      titleAfterArrow: "эффективность",
      titleSecondLine: "для современного бизнеса",
      description:
        "Мы проектируем и внедряем индивидуальные системы автоматизации, которые освобождают вашу команду от рутинных задач и помогают бизнесу расти быстрее. Быстрая реализация сочетается у нас с сильной инженерной базой.",
      cta: "Запустить автоматизацию",
      heroAlt: "Интерфейс платформы для веб-разработки и автоматизации бизнеса",
      arrowAlt: "",
    },

    architecture: {
      eyebrow: "МЫ СОЗДАЕМ ПРОДУМАННЫЕ РЕШЕНИЯ",
      title1: "Многоуровневая архитектура",
      title2: "для максимальной масштабируемости",
      imageAlt: "Иллюстрация многоуровневой архитектуры",
      description:
        "Мы не верим в универсальные решения. Наша инженерная философия основана на модульном подходе, благодаря которому каждый уровень вашей цифровой экосистемы работает на высокую производительность и устойчивый рост.",
      stat1: "Снижение операционной нагрузки",
      stat2: "Ускорение обработки данных",
      stat3: "Целостность и точность данных",
    },

    contact: {
      eyebrow: "ДАВАЙТЕ СОЗДАДИМ НЕЧТО БОЛЬШЕЕ ВМЕСТЕ",
      title: "Есть идея для проекта?",
      mailboxAlt: "Иллюстрация почтового ящика рядом с контактной формой",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Email",
      emailPlaceholder: "Ваш email",
      descriptionLabel: "Описание",
      descriptionPlaceholder: "Коротко расскажите о своей идее...",
      button: "Отправить и запустить процесс",
    },

    portfolio: {
      eyebrow: "ПОСМОТРИТЕ НА НАШИ КЕЙСЫ",
      title: "Наше портфолио",
      actionText: "Смотреть все кейсы",
    },

    services: {
      eyebrow: "ОТ ХАОСА К СИСТЕМЕ",
      title: "Наши услуги",
      actionText: "Смотреть все услуги",
    },

    techStrip: {
      title: "Основано на технологиях мирового уровня",
    },

    testimonials: {
      eyebrow: "НАШИ ОТЗЫВЫ",
      title1: "Мы не лучшие",
      title2: "но мы уникальные",
      prevAlt: "Предыдущий отзыв",
      nextAlt: "Следующий отзыв",
      ratingSuffix: "/5",
      items: [
        {
          name: "James Rosner",
          role: "Юрист",
          text:
            "Используемые решения отличаются высокой гибкостью и продуманной архитектурой. Модульный подход позволил значительно повысить стабильность рабочих процессов и упростить дальнейшее масштабирование системы.",
        },
        {
          name: "Andrew Witacker",
          role: "CEO Starlink",
          text:
            "Инженерная концепция построена на многоуровневой архитектуре, что обеспечивает надежность и производительность на каждом уровне системы. Это дало возможность уверенно масштабировать инфраструктуру без потери качества.",
        },
        {
          name: "Michel Dawer",
          role: "Бьюти-мастер",
          text:
            "Результатом стала удобная и надежная система, которая органично вписалась в рабочие процессы. Отдельно стоит отметить прозрачность всех этапов и высокий уровень реализации.",
        },
        {
          name: "Sophia Green",
          role: "Операционный директор",
          text:
            "Удалось объединить разрозненные инструменты в единую экосистему. Это существенно сократило временные затраты и обеспечило полный контроль над ключевыми бизнес-процессами.",
        },
        {
          name: "Daniel Moore",
          role: "Product Manager",
          text:
            "Особое впечатление произвел баланс между скоростью разработки и качеством реализации. Решение было глубоко адаптировано под задачи бизнеса и продумано до деталей.",
        },
      ],
    },

    growth: {
      eyebrow: "НАШИ КЛИЕНТЫ ПОЛУЧАЮТ ЛУЧШЕЕ",
      title: "Визуализируйте рост вашего бизнеса",
      description:
        "Наши решения дают вам полный контроль над данными и операционными процессами в режиме реального времени.",
      imageAlt: "Панель бизнес-аналитики для отслеживания роста и операций",
    },

    whyChooseUs: {
      eyebrow: "МЫ ГОТОВЫ ПОМОЧЬ",
      title: "Почему выбирают нас?",
      cta: "Обсудить проект",
    },

    footer: {
      usual: "Основное",
      legal: "Юридическая информация",
      services: "Услуги",
      about: "О нас",
      portfolio: "Портфолио",
      contacts: "Контакты",
      help: "Помощь",
      faq: "FAQ",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      newsletterTitle: "Подпишитесь на нашу рассылку",
      emailPlaceholder: "Введите ваш email",
      subscribe: "Подписаться",
      copyright: "© 2025 Все права защищены.",
    },

    homeData: {
      testimonials: [
        { image: "/Testimonial1.png", rating: "4,5" },
        { image: "/Testimonial2.png", rating: "4,9" },
        { image: "/Testimonial3.png", rating: "4,6" },
        { image: "/Testimonial1.png", rating: "4,8" },
        { image: "/Testimonial2.png", rating: "5,0" },
      ],

      steps: [
        {
          title: "Глубокий аудит и исследование",
          description:
            "Мы анализируем текущие потоки данных, выявляем слабые места и формируем технические требования к будущей системе.",
        },
        {
          title: "Прототипирование и архитектура",
          description:
            "Еще до начала разработки мы проектируем архитектурный каркас: определяем движение данных и закладываем безопасность на уровне системы.",
        },
        {
          title: "Гибкая разработка",
          description:
            "Мы работаем прозрачными итерациями, регулярно показываем прогресс и предоставляем staging-среду для контроля результата.",
        },
        {
          title: "Рост экосистемы",
          description:
            "Финальный релиз — это только начало. Мы обеспечиваем мониторинг 24/7 и развиваем продукт вместе с ростом бизнеса.",
        },
      ],

      services: [
        {
          title: "Индивидуальная разработка ПО",
          description:
            "Мы создаем программные решения, которые подстраиваются под ваш бизнес, а не наоборот. От CRM до сложных ERP-систем.",
          alt: "Иллюстрация индивидуальной веб-разработки и разработки ПО",
        },
        {
          title: "Интеллектуальная автоматизация процессов",
          description:
            "Мы находим узкие места в рабочих процессах и внедряем AI-решения, которые экономят до 40% времени сотрудников.",
          alt: "Иллюстрация автоматизации бизнес-процессов",
        },
        {
          title: "Цифровая трансформация",
          description:
            "Мы помогаем бизнесу перейти в цифровую среду без лишней сложности, обновляя устаревшие системы до современных стандартов.",
          alt: "Иллюстрация цифровой трансформации и модернизации устаревших систем",
        },
        {
          title: "Интеграция систем",
          description:
            "Мы объединяем ваши сервисы, базы данных и инструменты в единую цифровую экосистему.",
          alt: "Интеграция бизнес-инструментов, сервисов и баз данных",
        },
      ],

      cases: [
        {
          title: 'Дашборд для "Rozenfeld Agency"',
          alt: 'Дашборд для "Rozenfeld Agency"',
        },
        {
          title: 'Сайт и панель управления для "Kolinsky"',
          alt: 'Сайт и панель управления для "Kolinsky"',
        },
        {
          title: 'Мобильное приложение для "Occollo"',
          alt: 'Мобильное приложение для "Occollo"',
        },
        {
          title: 'Сайт для "Okeilo"',
          alt: 'Сайт для "Okeilo"',
        },
      ],
    },

    portfolioPage: {
      hero: {
        titleLine1: "Создаём проверенные",
        titleAccent: "решения",
        titleLine2: "и доводим",
        titleLine3: "их до результата.",
        description:
          "Мы не просто собираем проекты — мы создаём истории роста. Каждый кейс ниже — это результат глубокого анализа, продуманной архитектуры и автоматизации, которая освобождает команде время для действительно важных задач.",
        techTitle: "Основано на технологиях мирового уровня",
        cases: [
          {
            number: "01",
            title: "Дашборд\n“Rozenfeld Agency”",
            image: "/Portfolio/monitor-1.png",
          },
          {
            number: "02",
            title: "Сайт\nтуристического агентства",
            image: "/Portfolio/monitor-2.png",
          },
          {
            number: "03",
            title: "Бизнес-платформа",
            image: "/Portfolio/monitor-3.png",
          },
        ],
      },

      allProjects: "Наши проекты",
      projectDescription:
        "Мы создаём программные решения под задачи бизнеса: от CRM-систем до сложных ERP-платформ.",
      seeMore: "Подробнее",
      showMore: "Показать ещё",
      settingsAlt: "",
      tags: ["Node", "Next.js", "Cloudflare", "Docker", "PostgreSQL", "BankID"],
      hashtags: ["веб-дизайн", "недвижимость", "лендинг"],
      projects: [
        { title: "Автоматизация сайта Refa Group" },
        { title: "Сайт и панель управления для “Kolinsky”" },
        { title: "Автоматизация сайта Refa Group" },
      ],

      projectDetails: {
        backAlt: "Вернуться к портфолио",
        visitWebsite: "Открыть\nсайт",
        heroDescription:
          "Мы не просто собираем проекты — мы создаём истории роста. Каждый кейс ниже — это результат глубокого анализа, продуманной архитектуры и автоматизации, которая освобождает команде время для действительно важных задач.",
        stat1: "25%",
        stat1Text: "Больше конверсий после редизайна",
        stat2: "3000+",
        stat2Text: "Клиентов пришло после обновления",
        ctaText: "Сделайте свой",
        ctaStrong: "проект сильнее",
        ctaAfter: "уже сегодня вместе с нами",
        seeAllServices: "Все услуги",

        aboutTitle: "О ПРОЕКТЕ",
        aboutDescription:
          "Цифровая платформа для beauty-бренда, созданная для презентации услуг, улучшения клиентского опыта и формирования современной визуальной айдентики.",
        serviceLabel: "Услуга",
        serviceValue: "Веб-сайт",
        industryLabel: "Сфера",
        industryValue: "Салон красоты",
        publishedLabel: "Запуск",
        publishedValue: "9 января 2025",

        uiKitTitle: "UI KIT",
        uiKitDescription:
          "Визуальная система построена на элегантной палитре, мягкой типографике и переиспользуемых интерфейсных элементах для цельного восприятия бренда.",

        typographyTitle: "Montserrat Alternates",
        adaptiveTitle: "Адаптивные версии",
        adaptiveDescription:
          "Мы подготовили адаптивные макеты для desktop, tablet и mobile, чтобы сайт выглядел аккуратно и удобно на любом устройстве.",

        quote:
          "Интерфейс был спроектирован так, чтобы быть элегантным, понятным и удобным, сохраняя сильную визуальную айдентику на каждом экране.",
        quoteAuthor: "- Richard Price",

        otherEyebrow: "ПОСМОТРИТЕ НА ДРУГИЕ КЕЙСЫ",
        otherTitle: "Другие проекты",
        viewAllCases: "Все кейсы",

        projects: [
          {
            accent: "Miraki Website",
            title: "Кейс —\nсалон красоты",
          },
          {
            accent: "Kolinsky Website",
            title: "Кейс —\nнедвижимость",
          },
          {
            accent: "Refa Group",
            title: "Кейс —\nавтоматизация",
          },
        ],

        otherProjects: [
          "Дашборд для “Rozenfeld Agency”",
          "Сайт и панель управления для “Kolinsky”",
          "Мобильное приложение для “Occollo”",
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLine1: "Решения, созданные",
        titleAccent: "для масштабирования",
        description:
          "Мы превращаем техническую сложность в конкурентное преимущество. Изучите наши ключевые направления в разработке программного обеспечения, автоматизации процессов и цифровой трансформации бизнеса.",
        cta: "Начать знакомство",
      },
      engineering: {
        eyebrow: "ОТ ХАОСА К СИСТЕМЕ",
        titleLine1: "Инженерия ПО",
        titleLine2: "enterprise-уровня",
        descriptionLine1:
          "Мы создаём не просто приложения, а основу для роста вашего бизнеса.",
        descriptionLine2:
          "Наши решения проектируются с учётом будущих нагрузок, безопасности данных и масштабирования.",
        imageAlt: "Визуализация enterprise-веб-разработки и инженерии программного обеспечения",
        items: [
          {
            title: "Full-Stack разработка",
            text: "Создание высокопроизводительных веб- и мобильных платформ для вашего продукта",
          },
          {
            title: "API-экосистемы",
            text: "Разработка надёжных интерфейсов для взаимодействия ваших продуктов и сервисов",
          },
          {
            title: "Cloud-Native решения",
            text: "Оптимизация под AWS, Azure и Google Cloud для максимальной стабильности",
          },
        ],
      },
      workflow: {
        eyebrow: "ОТ ХАОСА К СИСТЕМЕ",
        title: "Интеллектуальная оркестрация процессов",
        description:
          "Освободите команду от рутины. Мы находим неэффективные участки рабочих процессов и заменяем их интеллектуальными алгоритмами.",
        imageAlt: "Визуализация интеллектуальной автоматизации и оркестрации процессов",
        items: [
          {
            title: "Настройка ERP\nи CRM",
            text: "Адаптация и доработка систем управления под уникальные задачи вашего бизнеса.",
          },
          {
            title: "Автоматизация\nData Pipeline",
            text: "Создание надёжных потоков данных для стабильной работы продуктов и сервисов.",
          },
          {
            title: "Интеграция\nAI и ML",
            text: "Внедрение AI/ML-решений для автоматизации, аналитики и повышения эффективности.",
          },
        ],
      },
      architecture: {
        eyebrow: "МЫ СОЗДАЁМ ПРОДУМАННЫЕ РЕШЕНИЯ",
        title: "Многоуровневая архитектура для максимальной масштабируемости",
        actionText: "Изучить архитектуру",
        items: [
          {
            icon: "/Services/icon1.png",
            title: "Аудит\nтехнологического стека",
            text: "Анализ текущих технологий и рекомендации по их оптимизации.",
          },
          {
            icon: "/Services/icon2.png",
            title: "Планирование\nмасштабирования",
            text: "Разработка дорожной карты развития продукта на годы вперёд.",
          },
          {
            icon: "/Services/icon3.png",
            title: "Безопасность\nи соответствие стандартам",
            text: "Проверка систем на уязвимости и соответствие международным требованиям.",
          },
        ],
      },
      deliveryFramework: {
        eyebrow: "КАК ПРОХОДИТ ПРОЦЕСС",
        title: "Наш процесс разработки",
        description: "Каждый проект проходит строгий цикл контроля качества:",
        items: [
          {
            icon: "/Services/process1.png",
            title: "Исследование",
            text: "Погружение в бизнес-логику\nи аудит процессов",
            className: "left-[3%] top-[440px]",
          },
          {
            icon: "/Services/process2.png",
            title: "Проектирование",
            text: "UX-дизайн и техническая\nархитектура решения",
            className: "left-[30%] top-[530px]",
          },
          {
            icon: "/Services/process3.png",
            title: "Спринт",
            text: "Итеративная разработка\nс еженедельными демо",
            className: "left-[55%] top-[395px]",
          },
          {
            icon: "/Services/process4.png",
            title: "Запуск",
            text: "Финальное тестирование\nи бесшовное внедрение",
            className: "right-[7%] top-[470px]",
          },
        ],
      },
    },
    aboutPage: {
      hero: {
        mobileTitleLine1: "«Мы соединяем",
        mobileTitleLine2: "сложность и",
        mobileTitleLine3: "эффективность»",
        desktopTitleLine1: "«Мы соединяем сложность",
        desktopTitleLine2: "и эффективность»",
        label: "-О нас",
        descriptionLine1: "Мы превращаем техническую сложность",
        descriptionLine2: "в операционное преимущество.",
        descriptionLine3: "Изучите наши ключевые направления",
        descriptionLine4: "в разработке и автоматизации.",
        cta: "Познакомиться",
        imageAlt: "Команда Softaryn и концепция автоматизации бизнеса",
      },
      team: {
        eyebrow: "ОТ ХАОСА К СИСТЕМЕ",
        titleLine1: "Рождены страстью",
        titleLine2: "к точности",
        description1:
          "Наш путь начался с простого наблюдения: большинству компаний мешает расти не отсутствие идей, а неэффективные процессы. Мы видели талантливые команды, которые тратили до 40% времени на ручной ввод данных, разрозненную коммуникацию и работу с устаревшими системами.",
        description2:
          "Именно поэтому мы создали SyncBook. Мы не хотели быть просто очередной студией разработки. Наша цель — стать архитекторами эффективности. Мы экспериментировали с модульным кодом и AI-решениями, чтобы сделать автоматизацию естественной и незаметной.\nСегодня мы работаем как бутик-агентство, где инженерное мастерство сочетается со стратегическим мышлением. Мы не просто выполняем задачи — мы глубоко изучаем ваш бизнес, чтобы найти точки максимального влияния технологий.",
        image1Alt: "Команда работает вместе в офисе",
        image2Alt: "Команда планирует проект автоматизации",
      },
      values: {
        eyebrow: "ЧТО ДЛЯ НАС ВАЖНО",
        title: "Наши ценности",
        items: [
          {
            number: "01",
            title: "Честность в основе",
            text: "Анализ текущих технологий и рекомендации по их оптимизации.",
          },
          {
            number: "02",
            title: "Радикальная эффективность",
            text: "Анализ текущих технологий и рекомендации по их оптимизации.",
          },
          {
            number: "03",
            title: "Масштабируемое мышление",
            text: "Анализ текущих технологий и рекомендации по их оптимизации.",
          },
        ],
      },
      philosophy: {
        eyebrow: "АВТОМАТИЗАЦИЯ ДЛЯ ЛЮДЕЙ",
        title: "Философия: люди и машины",
        imageAlt: "Концепция человекоориентированной автоматизации бизнеса",
        paragraph1:
          "Существует распространённое заблуждение, что автоматизация нужна для замены людей. Мы считаем наоборот.",
        highlight: "Автоматизация нужна для освобождения людей.",
        paragraph2:
          "Передавая повторяющиеся, рутинные и подверженные ошибкам задачи интеллектуальным системам, мы даём командам возможность сосредоточиться на стратегии, эмпатии и инновациях.",
        paragraph3:
          "Мы создаём машины, чтобы вы могли сосредоточиться на своём видении.",
      },
      difference: {
        eyebrow: "ПОЧЕМУ РАБОТАЮТ С НАМИ?",
        title: "Чем мы отличаемся?",
        descriptionLine1:
          "В отличие от крупных и неповоротливых консалтинговых компаний, мы сочетаем гибкость",
        descriptionLine2:
          "стартапа с точностью инженерной команды премиум-класса.",
        buttonText: "Все услуги",

        directAccessTitle: "Прямой доступ:",
        directAccessText:
          "Вы работаете напрямую с архитекторами и инженерами, а не через аккаунт-менеджеров.",

        noDebtTitle: "Без технического долга:",
        noDebtText:
          "Мы пишем чистый, документированный и модульный код, который остаётся удобным для поддержки долгие годы.",

        customTitle: "Только индивидуальные решения:",
        customText:
          "Мы не продаём шаблоны. Каждое решение создаётся специально под вашу бизнес-логику.",

        stats: [
          {
            value: "40%",
            line1: "Снижение",
            line2: "операционных затрат",
          },
          {
            value: "3x",
            line1: "Ускорение",
            line2: "обработки данных",
          },
          {
            value: "100%",
            line1: "Целостность",
            line2: "и точность данных",
          },
        ],

        imageAlt: "Команда анализирует бизнес-показатели",
      },
      buildTogether: {
        eyebrow: "БУДУЩЕЕ ЗА АВТОМАТИЗАЦИЕЙ. ГОТОВЫ?",
        title: "Давайте создавать вместе",
        descriptionLine1:
          "Независимо от того, растущий вы стартап или крупная компания,",
        descriptionLine2:
          "мы готовы помочь вам пройти путь цифровой трансформации.",
        descriptionLine3:
          "Давайте создадим решение, которое будет работать так же усердно, как и вы.",
        buttonText: "Познакомиться и начать процесс",
      },
    },
  },

  es: {
    common: {
      previous: "Anterior",
      next: "Siguiente",
      send: "Enviar",
      subscribe: "Suscribirse",
    },

    header: {
      logoAlt: "Logotipo de Softaryn",
      language: "Idioma",
    },

    nav: {
      services: "Servicios",
      about: "Sobre nosotros",
      portfolio: "Portafolio",
      contacts: "Contacto",
    },

    hero: {
      titleBeforeArrow: "Ingeniería y",
      titleAfterArrow: "eficiencia",
      titleSecondLine: "para negocios modernos",
      description:
        "Diseñamos e implementamos sistemas de automatización a medida que liberan a tu equipo de tareas repetitivas y aceleran el crecimiento del negocio. Combinamos rapidez de ejecución con una sólida base de ingeniería.",
      cta: "Iniciar automatización",
      heroAlt: "Interfaz de plataforma para desarrollo web y automatización empresarial",
      arrowAlt: "",
    },

    architecture: {
      eyebrow: "CREAMOS SOLUCIONES BIEN PENSADAS",
      title1: "Arquitectura multicapa",
      title2: "para una escalabilidad total",
      imageAlt: "Ilustración de arquitectura multicapa",
      description:
        "No creemos en soluciones genéricas. Nuestra filosofía de ingeniería se basa en una arquitectura modular que permite que cada capa de tu ecosistema digital esté preparada para alto rendimiento y crecimiento futuro.",
      stat1: "Reducción de la carga operativa",
      stat2: "Procesamiento de datos más rápido",
      stat3: "Integridad y precisión de los datos",
    },

    contact: {
      eyebrow: "CREEMOS ALGO EXTRAORDINARIO JUNTOS",
      title: "¿Tienes un proyecto en mente?",
      mailboxAlt: "Ilustración de buzón junto al formulario de contacto",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Tu correo electrónico",
      descriptionLabel: "Descripción",
      descriptionPlaceholder: "Cuéntanos brevemente tu idea...",
      button: "Enviar e iniciar el proceso",
    },

    portfolio: {
      eyebrow: "MIRA ALGUNOS DE NUESTROS CASOS",
      title: "Nuestro portafolio",
      actionText: "Ver todos los casos",
    },

    services: {
      eyebrow: "DEL CAOS A LA ESTRUCTURA",
      title: "Nuestros servicios",
      actionText: "Ver todos los servicios",
    },

    techStrip: {
      title: "Basado en tecnologías de primer nivel",
    },

    testimonials: {
      eyebrow: "NUESTROS TESTIMONIOS",
      title1: "No somos los mejores",
      title2: "pero somos únicos",
      prevAlt: "Testimonio anterior",
      nextAlt: "Siguiente testimonio",
      ratingSuffix: "/5",
      items: [
        {
          name: "James Rosner",
          role: "Abogado",
          text:
            "Las soluciones implementadas destacan por su flexibilidad y una arquitectura bien estructurada. El enfoque modular permitió mejorar significativamente la estabilidad de los procesos y facilitar su futura escalabilidad.",
        },
        {
          name: "Andrew Witacker",
          role: "CEO de Starlink",
          text:
            "La filosofía de ingeniería se basa en una arquitectura multicapa que garantiza rendimiento y fiabilidad en cada nivel del sistema. Esto permitió escalar la infraestructura sin comprometer la calidad.",
        },
        {
          name: "Michel Dawer",
          role: "Especialista en belleza",
          text:
            "El resultado es un sistema intuitivo, estable y perfectamente integrado en los procesos existentes. Destaca la claridad del proceso y el alto nivel de ejecución.",
        },
        {
          name: "Sophia Green",
          role: "Directora de operaciones",
          text:
            "Se logró unificar herramientas dispersas en un ecosistema único. Esto redujo considerablemente el tiempo operativo y mejoró la visibilidad de los procesos clave del negocio.",
        },
        {
          name: "Daniel Moore",
          role: "Product Manager",
          text:
            "Lo más destacable fue el equilibrio entre velocidad de desarrollo y calidad final. La solución se adaptó completamente a las necesidades del negocio y fue diseñada con gran precisión.",
        },
      ],
    },

    growth: {
      eyebrow: "NUESTROS CLIENTES OBTIENEN LO MEJOR",
      title: "Visualiza el crecimiento de tu negocio",
      description:
        "Nuestras soluciones te brindan control total sobre tus datos y operaciones en tiempo real.",
      imageAlt: "Panel de análisis empresarial para seguir el crecimiento y las operaciones",
    },

    whyChooseUs: {
      eyebrow: "ESTAMOS LISTOS PARA AYUDARTE",
      title: "¿Por qué elegirnos?",
      cta: "Hablar de mi proyecto",
    },

    footer: {
      usual: "General",
      legal: "Legal",
      services: "Servicios",
      about: "Sobre nosotros",
      portfolio: "Portafolio",
      contacts: "Contacto",
      help: "Ayuda",
      faq: "Preguntas frecuentes",
      terms: "Términos de uso",
      privacy: "Política de privacidad",
      newsletterTitle: "Suscríbete a nuestro boletín",
      emailPlaceholder: "Ingresa tu correo electrónico",
      subscribe: "Suscribirse",
      copyright: "© 2025 Todos los derechos reservados.",
    },

    homeData: {
      testimonials: [
        { image: "/Testimonial1.png", rating: "4,5" },
        { image: "/Testimonial2.png", rating: "4,9" },
        { image: "/Testimonial3.png", rating: "4,6" },
        { image: "/Testimonial1.png", rating: "4,8" },
        { image: "/Testimonial2.png", rating: "5,0" },
      ],

      steps: [
        {
          title: "Descubrimiento y auditoría profunda",
          description:
            "Analizamos tus flujos de datos actuales, detectamos ineficiencias y definimos los requisitos técnicos del sistema futuro.",
        },
        {
          title: "Prototipado y arquitectura",
          description:
            "Antes de escribir código, diseñamos la base del sistema: definimos cómo circularán los datos y aseguramos la arquitectura desde el inicio.",
        },
        {
          title: "Desarrollo ágil",
          description:
            "Trabajamos en ciclos transparentes, con actualizaciones constantes y un entorno de staging para que puedas seguir el progreso.",
        },
        {
          title: "Crecimiento del ecosistema",
          description:
            "La entrega final es solo el comienzo. Ofrecemos monitoreo 24/7 y seguimos mejorando el sistema junto con el crecimiento del negocio.",
        },
      ],

      services: [
        {
          title: "Desarrollo de software a medida",
          description:
            "Creamos soluciones de software que se adaptan a tu negocio, no al revés. Desde CRM hasta sistemas ERP complejos.",
          alt: "Ilustración de desarrollo web y software a medida",
        },
        {
          title: "Automatización inteligente de procesos",
          description:
            "Identificamos los cuellos de botella en tus procesos e implementamos soluciones de IA que ahorran hasta un 40% del tiempo de tu equipo.",
          alt: "Ilustración de automatización de procesos empresariales",
        },
        {
          title: "Transformación digital",
          description:
            "Ayudamos a que tu negocio evolucione hacia lo digital de forma fluida, modernizando sistemas heredados según estándares actuales.",
          alt: "Ilustración de transformación digital y modernización de sistemas heredados",
        },
        {
          title: "Integración de sistemas",
          description:
            "Conectamos tus herramientas, bases de datos y servicios en un ecosistema digital unificado.",
          alt: "Integración de herramientas empresariales, servicios y bases de datos",
        },
      ],

      cases: [
        {
          title: 'Panel de control para "Rozenfeld Agency"',
          alt: 'Panel de control para "Rozenfeld Agency"',
        },
        {
          title: 'Sitio web y panel para "Kolinsky"',
          alt: 'Sitio web y panel para "Kolinsky"',
        },
        {
          title: 'Aplicación móvil para "Occollo"',
          alt: 'Aplicación móvil para "Occollo"',
        },
        {
          title: 'Sitio web para "Okeilo"',
          alt: 'Sitio web para "Okeilo"',
        },
      ],
    },

    portfolioPage: {
      hero: {
        titleLine1: "Creamos",
        titleAccent: "soluciones",
        titleLine2: "probadas con",
        titleLine3: "resultados reales.",
        description:
          "No acumulamos proyectos; construimos historias de crecimiento. Cada caso es el resultado de un análisis profundo, una arquitectura bien pensada y automatización que libera tiempo del equipo para tareas realmente importantes.",
        techTitle: "Basado en tecnologías de primer nivel",
        cases: [
          {
            number: "01",
            title: "Dashboard\n“Rozenfeld Agency”",
            image: "/Portfolio/monitor-1.png",
          },
          {
            number: "02",
            title: "Sitio web de\nagencia de viajes",
            image: "/Portfolio/monitor-2.png",
          },
          {
            number: "03",
            title: "Plataforma empresarial",
            image: "/Portfolio/monitor-3.png",
          },
        ],
      },

      allProjects: "Nuestros proyectos",
      projectDescription:
        "Creamos soluciones de software adaptadas a las necesidades del negocio: desde CRM hasta plataformas ERP complejas.",
      seeMore: "Ver más",
      showMore: "Mostrar más",
      settingsAlt: "",
      tags: ["Node", "Next.js", "Cloudflare", "Docker", "PostgreSQL", "BankID"],
      hashtags: ["diseño web", "bienes raíces", "landing page"],
      projects: [
        { title: "Automatización del sitio Refa Group" },
        { title: "Sitio web y panel para “Kolinsky”" },
        { title: "Automatización del sitio Refa Group" },
      ],

      projectDetails: {
        backAlt: "Volver al portafolio",
        visitWebsite: "Visitar\nsitio",
        heroDescription:
          "No acumulamos proyectos; construimos historias de crecimiento. Cada caso es el resultado de un análisis profundo, una arquitectura bien pensada y automatización que libera tiempo del equipo para tareas realmente importantes.",
        stat1: "25%",
        stat1Text: "Más conversiones después del rediseño",
        stat2: "3000+",
        stat2Text: "Clientes llegaron tras la renovación",
        ctaText: "Haz que tu",
        ctaStrong: "proyecto destaque",
        ctaAfter: "desde hoy con nosotros",
        seeAllServices: "Ver servicios",

        aboutTitle: "SOBRE EL PROYECTO",
        aboutDescription:
          "Una plataforma digital para una marca de belleza, diseñada para presentar servicios, mejorar la experiencia del cliente y crear una identidad visual moderna.",
        serviceLabel: "Servicio",
        serviceValue: "Sitio web",
        industryLabel: "Industria",
        industryValue: "Salón de belleza",
        publishedLabel: "Publicado",
        publishedValue: "9 de enero de 2025",

        uiKitTitle: "UI KIT",
        uiKitDescription:
          "Un sistema visual basado en colores elegantes, tipografía suave y elementos reutilizables para mantener una experiencia de marca coherente.",

        typographyTitle: "Montserrat Alternates",
        adaptiveTitle: "Versiones adaptativas",
        adaptiveDescription:
          "Preparamos diseños responsive para desktop, tablet y mobile, manteniendo una experiencia clara y cómoda en todos los dispositivos.",

        quote:
          "La interfaz fue diseñada para sentirse elegante, clara y fácil de usar, manteniendo una identidad visual sólida en cada punto de contacto.",
        quoteAuthor: "- Richard Price",

        otherEyebrow: "MIRA OTROS CASOS DESTACADOS",
        otherTitle: "Descubre otros proyectos",
        viewAllCases: "Ver todos los casos",

        projects: [
          {
            accent: "Miraki Website",
            title: "Caso —\nSalón de belleza",
          },
          {
            accent: "Kolinsky Website",
            title: "Caso —\nBienes raíces",
          },
          {
            accent: "Refa Group",
            title: "Caso —\nAutomatización",
          },
        ],

        otherProjects: [
          "Dashboard para “Rozenfeld Agency”",
          "Sitio web y panel para “Kolinsky”",
          "Aplicación móvil para “Occollo”",
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLine1: "Soluciones diseñadas",
        titleAccent: "para escalar",
        description:
          "Transformamos la complejidad técnica en una ventaja competitiva. Descubre nuestras principales competencias en desarrollo de software, automatización de procesos y transformación digital.",
        cta: "Comenzar a explorar",
      },
      engineering: {
        eyebrow: "DEL CAOS AL CÓDIGO",
        titleLine1: "Ingeniería de software",
        titleLine2: "de nivel empresarial",
        descriptionLine1:
          "No creamos solo aplicaciones, sino la base tecnológica para tu negocio.",
        descriptionLine2:
          "Nuestras soluciones se diseñan pensando en cargas futuras, seguridad de datos y escalabilidad.",
        imageAlt: "Visualización de desarrollo web empresarial e ingeniería de software",
        items: [
          {
            title: "Desarrollo Full-Stack",
            text: "Creación de plataformas web y móviles de alto rendimiento para tu producto",
          },
          {
            title: "Ecosistemas API",
            text: "Desarrollo de interfaces fiables para la interacción entre tus productos y servicios",
          },
          {
            title: "Soluciones Cloud-Native",
            text: "Optimización para AWS, Azure y Google Cloud con máxima estabilidad",
          },
        ],
      },
      workflow: {
        eyebrow: "DEL CAOS AL CÓDIGO",
        title: "Orquestación inteligente de flujos de trabajo",
        description:
          "Libera a tu equipo de la rutina. Identificamos áreas ineficientes en tus procesos y las reemplazamos con algoritmos inteligentes.",
        imageAlt: "Visualización de automatización inteligente y orquestación de flujos de trabajo",
        items: [
          {
            title: "Personalización\nERP y CRM",
            text: "Adaptación y mejora de sistemas de gestión según las necesidades únicas de tu negocio.",
          },
          {
            title: "Automatización de\nData Pipelines",
            text: "Creación de flujos de datos fiables para conectar productos, servicios y operaciones.",
          },
          {
            title: "Integración de\nAI y ML",
            text: "Implementación de soluciones AI/ML para automatización, análisis y mayor eficiencia.",
          },
        ],
      },
      architecture: {
        eyebrow: "CREAMOS SOLUCIONES BIEN PENSADAS",
        title: "Arquitectura multicapa para una escalabilidad absoluta",
        actionText: "Explorar arquitectura",
        items: [
          {
            icon: "/Services/icon1.png",
            title: "Auditoría del\nstack tecnológico",
            text: "Análisis de las tecnologías actuales y recomendaciones para su optimización.",
          },
          {
            icon: "/Services/icon2.png",
            title: "Planificación de\nescalabilidad",
            text: "Desarrollo de una hoja de ruta para el crecimiento de tu producto a largo plazo.",
          },
          {
            icon: "/Services/icon3.png",
            title: "Seguridad y\ncumplimiento",
            text: "Evaluación de vulnerabilidades y verificación del cumplimiento de estándares internacionales.",
          },
        ],
      },
      deliveryFramework: {
        eyebrow: "CÓMO ES EL PROCESO",
        title: "Nuestro marco de entrega",
        description: "Cada proyecto pasa por un ciclo riguroso de control de calidad:",
        items: [
          {
            icon: "/Services/process1.png",
            title: "Descubrimiento",
            text: "Análisis de la lógica del negocio\ny auditoría de procesos",
            className: "left-[3%] top-[440px]",
          },
          {
            icon: "/Services/process2.png",
            title: "Diseño",
            text: "Diseño UX y arquitectura\ntécnica de la solución",
            className: "left-[30%] top-[530px]",
          },
          {
            icon: "/Services/process3.png",
            title: "Sprint",
            text: "Desarrollo iterativo\ncon demos semanales",
            className: "left-[55%] top-[395px]",
          },
          {
            icon: "/Services/process4.png",
            title: "Lanzamiento",
            text: "Pruebas finales e\nimplementación fluida",
            className: "right-[7%] top-[470px]",
          },
        ],
      },
    },
    aboutPage: {
      hero: {
        mobileTitleLine1: "“Conectamos",
        mobileTitleLine2: "complejidad y",
        mobileTitleLine3: "eficiencia”",
        desktopTitleLine1: "“Conectamos complejidad",
        desktopTitleLine2: "y eficiencia”",
        label: "-Sobre nosotros",
        descriptionLine1: "Transformamos la complejidad técnica",
        descriptionLine2: "en una ventaja operativa.",
        descriptionLine3: "Descubre nuestras competencias clave",
        descriptionLine4: "en desarrollo y automatización.",
        cta: "Conócenos",
        imageAlt: "Equipo de Softaryn y concepto de automatización empresarial",
      },
      team: {
        eyebrow: "DEL CAOS AL CÓDIGO",
        titleLine1: "Nacidos de una pasión",
        titleLine2: "por la precisión",
        description1:
          "Nuestro camino comenzó con una observación simple: la mayoría de las empresas no están limitadas por la falta de ideas, sino por procesos ineficientes. Vimos equipos brillantes dedicar hasta el 40% de su tiempo a tareas manuales, comunicación fragmentada y sistemas heredados que ya no se adaptan al ritmo actual.",
        description2:
          "Fundamos SyncBook para cambiar esa realidad. No queríamos ser otra empresa de software más. Queríamos convertirnos en arquitectos de la eficiencia. Experimentamos con código modular y lógica impulsada por IA para que la automatización se sintiera natural y fluida.\nHoy operamos como una agencia boutique donde la excelencia en ingeniería se combina con el pensamiento estratégico. No solo ejecutamos tareas: analizamos profundamente tu negocio para identificar dónde la tecnología puede generar el mayor impacto.",
        image1Alt: "Equipo trabajando juntos en una oficina",
        image2Alt: "Equipo planificando un proyecto de automatización",
      },
      values: {
        eyebrow: "LO QUE CONSIDERAMOS IMPORTANTE",
        title: "Nuestros valores",
        items: [
          {
            number: "01",
            title: "Integridad desde el diseño",
            text: "Análisis de las tecnologías actuales y recomendaciones para su optimización.",
          },
          {
            number: "02",
            title: "Eficiencia radical",
            text: "Análisis de las tecnologías actuales y recomendaciones para su optimización.",
          },
          {
            number: "03",
            title: "Pensamiento escalable",
            text: "Análisis de las tecnologías actuales y recomendaciones para su optimización.",
          },
        ],
      },
      philosophy: {
        eyebrow: "LA AUTOMATIZACIÓN ES PARA LAS PERSONAS",
        title: "La filosofía: humanos y máquinas",
        imageAlt: "Concepto de automatización empresarial centrada en las personas",
        paragraph1:
          "Existe la idea errónea de que la automatización consiste en reemplazar a las personas. Nosotros creemos lo contrario.",
        highlight: "La automatización consiste en liberar a las personas.",
        paragraph2:
          "Al delegar las tareas repetitivas, rutinarias y propensas a errores a sistemas inteligentes, permitimos que los equipos se concentren en lo que mejor hacen: estrategia, empatía e innovación.",
        paragraph3:
          "Nosotros construimos las máquinas para que tú puedas concentrarte en la visión.",
      },
      difference: {
        eyebrow: "¿POR QUÉ TRABAJAR CON NOSOTROS?",
        title: "¿Qué nos hace diferentes?",
        descriptionLine1:
          "A diferencia de las grandes consultoras tradicionales, trabajamos con la agilidad",
        descriptionLine2:
          "de una startup y la precisión de una firma de ingeniería de alto nivel.",
        buttonText: "Ver todos los servicios",

        directAccessTitle: "Acceso directo:",
        directAccessText:
          "Trabajas directamente con arquitectos e ingenieros, no con gestores de cuentas.",

        noDebtTitle: "Sin deuda técnica:",
        noDebtText:
          "Escribimos código limpio, documentado y modular que seguirá siendo mantenible durante años.",

        customTitle: "100% personalizado:",
        customText:
          "No vendemos plantillas. Cada solución es un traje hecho a medida para tu lógica de negocio.",

        stats: [
          {
            value: "40%",
            line1: "Reducción de",
            line2: "costes operativos",
          },
          {
            value: "3x",
            line1: "Mayor velocidad de",
            line2: "procesamiento de datos",
          },
          {
            value: "100%",
            line1: "Integridad",
            line2: "y precisión de datos",
          },
        ],

        imageAlt: "Equipo revisando análisis empresariales",
      },
      buildTogether: {
        eyebrow: "EL FUTURO ESTÁ AUTOMATIZADO. ¿ESTÁS LISTO?",
        title: "Construyamos juntos",
        descriptionLine1:
          "Ya seas una startup en crecimiento o una empresa consolidada,",
        descriptionLine2:
          "estamos listos para ayudarte en tu transformación digital.",
        descriptionLine3:
          "Creemos algo que trabaje tan duro como tú.",
        buttonText: "Conócenos y comienza el proceso",
      },
    },
  },
} as const;
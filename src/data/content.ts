import { HomePageContent, Locale } from '../types/content';

const en: HomePageContent = {
  siteMeta: {
    title: 'C Technology | Banking Technology Partner',
    description:
      'C Technology delivers enterprise banking software, digital channels, systems integration, and infrastructure solutions for banks and financial institutions.',
  },
  ui: {
    skipToContent: 'Skip to content',
    homeLabel: 'Home',
    headerCta: 'Contact us',
    brandTagline: 'Banking Technology',
    exploreLabel: 'Explore',
    menuLabel: 'Menu',
    closeLabel: 'Close',
    whyItMatters: 'Why it matters',
    portfolioLogic: 'Portfolio logic',
    hardwareCapability: 'Hardware capability',
    capabilityArea: 'Capability area',
    outcomes: 'Outcomes',
    capabilities: 'Capabilities',
    builtAsPartOfStack:
      'Built as part of a broader banking technology stack rather than an isolated product layer.',
    office: 'Office',
    email: 'Email',
    phone: 'Phone',
    contactForm: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      message: 'Message',
      send: 'Send inquiry',
      sending: 'Sending...',
      success: 'Your message has been sent. Our team will get back to you shortly.',
      error: 'Unable to send right now. Please try again in a moment.',
      placeholders: {
        name: 'Your name',
        company: 'Company name',
        email: 'you@company.com',
        message: 'Tell us about your goals',
      },
    },
    notFound: {
      title: 'Page not found.',
      description:
        'The page you requested is unavailable or has moved. You can return to the homepage or go to the contact page.',
      home: 'Go home',
      contact: 'Contact us',
    },
    localeSwitcher: { en: 'EN', ru: 'RU' },
  },
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Services', href: '/services' },
    { label: 'Customers', href: '/customers' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],
  pageIntros: {
    about: {
      eyebrow: 'About C Technology',
      title: 'A banking technology company built for institutions that need dependable transformation.',
      description:
        'C Technology combines fintech domain knowledge, implementation discipline, and regional presence to support banks across software delivery, systems integration, and infrastructure programs.',
      image: {
        src: '/images/about-page-team.jpg',
        alt: 'C Technology team collaborating in a modern office environment.',
      },
    },
    solutions: {
      eyebrow: 'Software Solutions',
      title: 'A connected portfolio of banking software and digital platforms.',
      description:
        'Our software stack is structured to help banks modernize core operations, customer channels, onboarding, payment connectivity, and communication services without creating fragmented delivery tracks.',
      image: {
        src: '/images/solutions-page-ecosystem.jpg',
        alt: 'Connected banking software ecosystem visual.',
      },
    },
    infrastructure: {
      eyebrow: 'Infrastructure & Hardware',
      title: 'Operational technology for branch environments, self-service, and backend readiness.',
      description:
        'Beyond software, C Technology supports the physical and technical environments that banking operations depend on, from ATMs and POS hardware to server equipment and branch systems.',
      image: {
        src: '/images/infrastructure-page-equipment.jpg',
        alt: 'Banking infrastructure equipment including self-service and branch hardware.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start a focused conversation about your next banking technology initiative.',
      description:
        'Whether you are evaluating a new platform, planning a modernization roadmap, or strengthening operational infrastructure, our team can help frame the right next step.',
      image: {
        src: '/images/contact-page-location.jpg',
        alt: 'Professional city and office context for contacting C Technology.',
      },
    },
    customers: {
      eyebrow: 'Customers',
      title: 'Built for banks and financial institutions that need practical enterprise delivery.',
      description:
        'Our customer focus is rooted in institutions that require dependable software, integration, and infrastructure execution across regulated financial environments.',
    },
    partners: {
      eyebrow: 'Partners',
      title: 'A collaboration model that works across ecosystems, vendors, and delivery teams.',
      description:
        'C Technology works with banking stakeholders, technology partners, and implementation teams that need aligned execution across multiple systems and layers.',
    },
    technology: {
      eyebrow: 'Technology',
      title: 'Technology choices shaped by interoperability, operational clarity, and long-term maintainability.',
      description:
        'We approach platforms, integration layers, and infrastructure with an enterprise mindset suited for financial institutions and staged transformation programs.',
      image: {
        src: '/images/technology-page-architecture.jpg',
        alt: 'Enterprise technology architecture illustration for banking systems.',
      },
    },
    industries: {
      eyebrow: 'Industries',
      title: 'Focused on financial services environments where reliability and integration matter.',
      description:
        'C Technology is built around banking and adjacent financial service contexts that need enterprise-grade delivery, regulated execution, and practical modernization support.',
      image: {
        src: '/images/industries-financial-services.jpg',
        alt: 'Financial services environment representing banking operations and institutional delivery.',
      },
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Consulting, integration, and delivery capabilities shaped for banking programs.',
      description:
        'Our service layer helps institutions move from strategy to implementation with clearer architecture, stronger integration discipline, and more dependable rollout planning.',
      image: {
        src: '/images/services-page-consulting.jpg',
        alt: 'Consulting and planning session around banking technology delivery.',
      },
    },
    caseStudies: {
      eyebrow: 'Case Studies',
      title: 'Representative delivery scenarios across banking software and infrastructure.',
      description:
        'These example cases show how C Technology approaches modernization, digital channels, and infrastructure enablement for financial institutions.',
      image: {
        src: '/images/case-study-core-modernization.jpg',
        alt: 'Illustrative visual of core banking modernization.',
      },
    },
  },
  hero: {
    eyebrow: 'Banking Technology Partner',
    kicker: 'Banking software, systems integration, and infrastructure for institutions that cannot afford fragmented delivery.',
    title: 'Enterprise technology for banks and financial institutions.',
    description:
      'C Technology helps banks modernize customer channels, core operations, and operational infrastructure with a delivery model built for regulated environments.',
    primaryAction: { label: 'Talk to our team', href: '/contact', variant: 'primary' },
    secondaryAction: { label: 'Review solutions', href: '/solutions', variant: 'secondary' },
    facts: [
      { label: 'Founded', value: '2015' },
      { label: 'Regional hubs', value: '2' },
      { label: 'Specialists', value: '100+' },
      { label: 'Core capability areas', value: '5' },
    ],
    visualCard: {
      eyebrow: 'Focused Delivery',
      signal: 'Built for regulated banking environments',
      title: 'Software, integration, and infrastructure with a banking-first lens.',
      description:
        'We align platform delivery, systems integration, and operational rollout so banks can modernize without creating disconnected workstreams.',
      items: [
        'Core and digital banking platforms',
        'Systems integration and consulting',
        'Infrastructure and hardware supply',
      ],
      footerItems: ['Bishkek HQ', 'Istanbul branch', 'Enterprise delivery discipline'],
    },
    image: {
      src: '/images/hero-banking-operations.jpg.png',
      alt: 'Enterprise banking operations environment representing C Technology delivery.',
    },
  },
  about: {
    id: 'about',
    eyebrow: 'About C Technology',
    title: 'A fintech engineering company built around financial services expertise.',
    description:
      'Since 2015, C Technology has supported banks and financial organizations with practical, enterprise-grade technology programs across software, delivery, and infrastructure.',
    paragraphs: [
      'Our focus is not generic IT. We work within the operational, compliance, and service realities of the financial sector, helping institutions launch and scale products with less fragmentation.',
      'With headquarters in Bishkek and a branch in Istanbul, we combine regional proximity with delivery discipline suited for modern banking environments.',
    ],
    highlights: [
      'Banking software and digital channels',
      'IT consulting and systems integration',
      'Infrastructure and hardware enablement',
    ],
    image: {
      src: '/images/about-ctechnology-office.jpg',
      alt: 'C Technology office and team collaboration environment.',
    },
  },
  metrics: {
    id: 'metrics',
    eyebrow: 'Company Snapshot',
    title: 'Scale that supports long-term banking programs.',
    description:
      'C Technology combines sector experience, regional presence, and delivery capacity to support both digital transformation and operational infrastructure initiatives.',
    items: [
      { value: '10+', label: 'Years in fintech', description: 'Founded in 2015 with a sustained focus on banking technology.' },
      { value: '2', label: 'Regional hubs', description: 'Bishkek headquarters with an Istanbul branch for broader reach.' },
      { value: '100+', label: 'Employees', description: 'Cross-functional teams spanning product, delivery, integration, and support.' },
      { value: '5', label: 'Core disciplines', description: 'Banking software, consulting, integration, digital channels, and infrastructure.' },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'What We Do',
    title: 'Structured capabilities for software delivery and banking operations.',
    description:
      'We separate software solutions from infrastructure capabilities so banks can understand where we create digital value, where we integrate systems, and where we support physical operations.',
    items: [
      { title: 'Banking Software', description: 'Enterprise software platforms for core banking, digital channels, customer onboarding, payments, and notifications.', points: ['Core systems', 'Digital channels', 'Product-ready APIs'] },
      { title: 'IT Consulting', description: 'Advisory and delivery support for modernization programs, architecture decisions, and rollout planning in regulated environments.', points: ['Architecture guidance', 'Roadmap planning', 'Program support'] },
      { title: 'Systems Integration', description: 'Integration across banking systems, card ecosystems, ERP platforms, and external services to reduce fragmentation.', points: ['Card system APIs', 'ERP connectivity', 'Cross-platform integration'] },
      { title: 'Infrastructure & Hardware', description: 'Technology supply and deployment for ATM networks, branch equipment, server infrastructure, and operational hardware.', points: ['ATM and POS fleet', 'Server equipment', 'Branch operations hardware'] },
    ],
  },
  advantages: {
    id: 'advantages',
    eyebrow: 'Why C Technology',
    title: 'A technology partner shaped by how banks actually operate.',
    description:
      'We combine product thinking, integration discipline, and banking domain knowledge so institutions can modernize without building disconnected programs.',
    items: [
      { title: 'Financial-services expertise', description: 'Our delivery model is grounded in banking workflows, customer journeys, and operational constraints rather than generic software assumptions.' },
      { title: 'Clear separation of software and infrastructure', description: 'Digital platforms, systems integration, and hardware operations are structured as distinct capabilities, making large initiatives easier to plan and scale.' },
      { title: 'Implementation-ready mindset', description: 'We focus on production reality, from rollout planning and integration mapping to service continuity and practical adoption inside institutions.' },
      { title: 'Regional presence with enterprise discipline', description: 'Bishkek headquarters and Istanbul branch support proximity, while a 100-person team provides the capacity needed for serious banking programs.' },
    ],
  },
  solutions: {
    id: 'solutions',
    eyebrow: 'Featured Solutions',
    title: 'A focused portfolio built for modern banking journeys.',
    description:
      'Our solution stack covers core operations, digital engagement, remote onboarding, payments, and customer communications, with each product positioned as part of a coherent banking ecosystem.',
    lead: {
      title: 'Software solutions designed to work together.',
      description:
        'C Technology helps banks create a more connected operating model by aligning core systems, digital channels, onboarding flows, payment services, and notification layers.',
      points: [
        'Modular but connected product architecture',
        'Ready for systems integration and API-led extensions',
        'Built for banks pursuing modernization in stages',
      ],
    },
    items: [
      { category: 'Core Platform', title: 'Core Banking System', description: 'Supports central banking operations, product configuration, and the operational backbone required for scalable financial services.' },
      { category: 'Digital Channels', title: 'Mobile & Internet Banking', description: 'Customer-facing channels for digital banking interactions across mobile apps, internet banking, and branded web access.' },
      { category: 'Onboarding', title: 'Remote Customer Acquisition', description: 'Digital onboarding flows that help institutions acquire and activate customers without relying on branch-first processes.' },
      { category: 'Payments', title: 'Card & Payment Solutions', description: 'Card data storage, card integrations, and APIs connecting payment systems to ERP and operational platforms.' },
      { category: 'Engagement', title: 'Notification Service', description: 'A centralized service layer for customer alerts, transactional messages, and operational notifications across channels.' },
    ],
  },
  coreBanking: {
    id: 'core-banking',
    eyebrow: 'Core Banking Highlight',
    title: 'A core banking foundation for operational consistency and product growth.',
    description: 'Our Core Banking System supports the transaction, product, and process backbone that banks rely on to run day-to-day operations with clarity and control.',
    summary: 'Designed for institutions that need a dependable operational center, the platform helps unify banking workflows while leaving room for digital extension and phased transformation.',
    outcomes: ['Centralized operational logic for core banking processes', 'Better alignment between products, transactions, and customer servicing', 'A stronger base for connected digital and payment services'],
    capabilities: ['Product and account operations', 'Workflow and process support', 'Integration readiness for surrounding banking systems'],
    sideLabel: 'Platform Role',
    sideValue: 'Operational backbone',
    image: {
      src: '/images/core-banking-dashboard.jpg',
      alt: 'Core banking dashboard interface visual.',
    },
  },
  digitalBanking: {
    id: 'digital-banking',
    eyebrow: 'Mobile & Internet Banking Highlight',
    title: 'Digital banking experiences that extend the bank beyond the branch.',
    description: 'We deliver mobile banking, internet banking, and web portal capabilities that help institutions create more accessible, consistent, and service-rich customer channels.',
    summary: 'These products are positioned as strategic customer interfaces, connecting end users to the bank through secure, intuitive digital experiences that can evolve over time.',
    outcomes: ['Unified digital service across mobile and web channels', 'Stronger customer engagement through always-available access', 'A modern frontend layer connected to core banking operations'],
    capabilities: ['Mobile Banking', 'Internet Banking', 'Internet Web Portal'],
    sideLabel: 'Channel Focus',
    sideValue: 'Customer-facing digital journeys',
    image: {
      src: '/images/digital-banking-mobile.jpg',
      alt: 'Mobile and internet banking experience visual.',
    },
  },
  remoteOnboarding: {
    id: 'remote-onboarding',
    eyebrow: 'Remote Acquisition',
    title: 'Remote customer acquisition for faster, more scalable onboarding.',
    description: 'Our remote customer acquisition platform helps banks reduce friction in the first customer interaction and build more flexible account opening journeys.',
    summary: 'Instead of relying only on physical presence, institutions can support acquisition through digital-first flows that are easier to scale and better aligned with modern customer expectations.',
    outcomes: ['Reduced onboarding friction for new customers', 'Improved acquisition reach beyond branch-dependent models', 'A more streamlined front door to digital banking services'],
    capabilities: ['Digital onboarding flows', 'Remote application processing', 'Integration with banking and customer systems'],
    sideLabel: 'Primary Goal',
    sideValue: 'Faster customer activation',
    image: {
      src: '/images/remote-onboarding-identity.jpg',
      alt: 'Remote customer onboarding and identity verification visual.',
    },
  },
  payments: {
    id: 'payments',
    eyebrow: 'Payments',
    title: 'Payment capabilities that connect card systems, data, and business platforms.',
    description: 'C Technology supports payment operations through card data storage and APIs that connect card ecosystems with ERP and surrounding enterprise systems.',
    summary: 'This layer is built for institutions that need dependable payment data handling and cleaner interoperability between financial operations and broader business processes.',
    outcomes: ['More connected payment operations across systems', 'Cleaner interoperability between card and enterprise environments', 'A stronger base for service expansion and reporting flows'],
    capabilities: ['Card Data Storage', 'APIs for Card Systems', 'ERP integration interfaces'],
    sideLabel: 'Integration Scope',
    sideValue: 'Payments + enterprise connectivity',
    image: {
      src: '/images/payments-card-network.jpg',
      alt: 'Card and payment network infrastructure visual.',
    },
  },
  notifications: {
    id: 'notifications',
    eyebrow: 'Notifications',
    title: 'A centralized notification service for transactional and service communications.',
    description: 'Our notification service helps banks manage customer-facing alerts and operational messaging through a dedicated communication layer.',
    summary: 'By centralizing messaging responsibilities, institutions can improve consistency, simplify service orchestration, and support customer trust with clearer communication flows.',
    outcomes: ['Consistent messaging across banking touchpoints', 'Faster orchestration of alerts and service communications', 'A reusable communication layer for future product growth'],
    capabilities: ['Transactional notifications', 'Operational service alerts', 'Centralized communication workflows'],
    sideLabel: 'Service Value',
    sideValue: 'Reliable communication layer',
    image: {
      src: '/images/notification-service-visual.jpg',
      alt: 'Notification orchestration and communication service visual.',
    },
  },
  infrastructure: {
    id: 'infrastructure',
    eyebrow: 'Infrastructure & Hardware',
    title: 'Operational infrastructure for branches, self-service, and backend environments.',
    description: 'Separate from our software solutions, C Technology supports banking operations through hardware supply, deployment support, and infrastructure components required for reliable service delivery.',
    intro: 'This capability is designed for institutions that need a trusted partner across physical banking touchpoints and supporting technical environments, from branch systems to self-service equipment and server infrastructure.',
    items: [
      { title: 'ATM & self-service systems', description: 'ATMs, recycles, and related self-service devices that support customer access and cash operations.' },
      { title: 'Branch operations equipment', description: 'Electronic queue systems, banknote counters, and operational hardware that improve service flow inside banking locations.' },
      { title: 'Payment acceptance hardware', description: 'POS-terminals and adjacent hardware for payment operations across service and retail touchpoints.' },
      { title: 'Server equipment & consumables', description: 'Supporting infrastructure for backend environments, deployment needs, and ongoing operational supply.' },
    ],
    image: {
      src: '/images/infrastructure-atm-network.jpg',
      alt: 'Banking infrastructure and ATM network equipment.',
    },
  },
  customers: {
    id: 'customers',
    eyebrow: 'Customers',
    title: 'Built for banks and financial institutions that value dependable execution.',
    description: 'The customer model is intentionally enterprise-focused: banks, financial service providers, and institutions looking for a partner across product, integration, and infrastructure programs.',
    items: [
      { name: 'DemirBank', src: '/logos/customers/customer-demirbank.svg', alt: 'DemirBank logo' },
      { name: 'FINCA Bank', src: '/logos/customers/customer-finca-bank.svg', alt: 'FINCA Bank logo' },
      { name: 'Kompanion Bank', src: '/logos/customers/customer-kompanion-bank.svg', alt: 'Kompanion Bank logo' },
      { name: 'Cfaktoring', src: '/logos/customers/customer-cfaktoring.svg', alt: 'Cfaktoring logo' },
      { name: 'bankpozitif', src: '/logos/customers/customer-bankpozitif.svg', alt: 'bankpozitif logo' },
      { name: 'Bank Pozitiv', src: '/logos/customers/customer-bank-pozitiv.svg', alt: 'Bank Pozitiv logo' },
      { name: 'Gazprom Kyrgyzstan', src: '/logos/customers/customer-gazprom-kyrgyzstan.svg', alt: 'Gazprom Kyrgyzstan logo' },
      { name: 'DHB Bank', src: '/logos/customers/customer-dhb-bank.svg', alt: 'DHB Bank logo' },
      { name: 'Plasform', src: '/logos/customers/customer-plasform.svg', alt: 'Plasform logo' },
    ],
  },
  partners: {
    id: 'partners',
    eyebrow: 'Partners',
    title: 'A partnership mindset across delivery, integration, and technology ecosystems.',
    description: 'We work in collaboration with banks, technology vendors, integration stakeholders, and enterprise teams that need alignment across multiple systems and service layers.',
    items: [
      { name: 'GRG Banking', src: '/logos/partners/partner-grg-banking.svg', alt: 'GRG Banking logo' },
      { name: 'Umur', src: '/logos/partners/partner-umur.svg', alt: 'Umur logo' },
      { name: 'Tumsas', src: '/logos/partners/partner-tumsas.svg', alt: 'Tumsas logo' },
      { name: 'Oracle', src: '/logos/partners/partner-oracle.svg', alt: 'Oracle logo' },
      { name: 'Lenovo', src: '/logos/partners/partner-lenovo.svg', alt: 'Lenovo logo' },
      { name: 'Beko', src: '/logos/partners/partner-beko.svg', alt: 'Beko logo' },
      { name: 'HC Innovation', src: '/logos/partners/partner-hc-innovation.svg', alt: 'HC Innovation logo' },
      { name: 'Dell', src: '/logos/partners/partner-dell.svg', alt: 'Dell logo' },
    ],
  },
  techStack: {
    id: 'tech-stack',
    eyebrow: 'Technology Stack',
    title: 'Technology decisions guided by reliability, interoperability, and long-term maintainability.',
    description: 'Our delivery spans product engineering, integrations, infrastructure planning, and enterprise implementation patterns suited for financial services organizations.',
    groups: [
      { title: 'Banking Platforms', items: ['Core banking systems', 'Digital channel applications', 'Notification services'] },
      { title: 'Integration Layer', items: ['APIs for card systems', 'ERP connectivity', 'Cross-system orchestration'] },
      { title: 'Infrastructure', items: ['Server environments', 'ATM and POS ecosystems', 'Branch hardware operations'] },
    ],
  },
  industriesPage: {
    id: 'industries-page',
    eyebrow: 'Industry Focus',
    title: 'Built for financial institutions with complex delivery requirements.',
    description:
      'Our strongest fit is with organizations where banking workflows, service continuity, integration complexity, and customer trust all need to move together.',
    items: [
      {
        title: 'Retail Banking',
        description:
          'Digital channels, onboarding, notifications, and service continuity for customer-facing banking programs.',
      },
      {
        title: 'Commercial Banking',
        description:
          'Operational stability, integration clarity, and scalable service infrastructure for enterprise-facing institutions.',
      },
      {
        title: 'Microfinance & Emerging Financial Services',
        description:
          'Technology support for organizations that need flexible digital growth without disconnected systems.',
      },
      {
        title: 'Banking Operations & Shared Service Teams',
        description:
          'Systems integration, infrastructure support, and implementation planning for internal banking programs.',
      },
    ],
  },
  caseStudiesPage: {
    id: 'case-studies',
    eyebrow: 'Illustrative Cases',
    title: 'How we frame banking technology programs in practice.',
    description:
      'Representative scenarios that reflect the type of transformation, integration, and enablement work C Technology supports.',
    items: [
      {
        title: 'Core modernization foundation',
        description:
          'A bank needs to improve operational consistency and prepare its core environment for connected digital services.',
        outcome: 'A clearer operational backbone with stronger readiness for digital extension.',
        image: {
          src: '/images/case-study-core-modernization.jpg',
          alt: 'Core modernization case study visual.',
        },
      },
      {
        title: 'Digital channel expansion',
        description:
          'An institution is launching mobile and internet banking while reducing fragmentation between customer channels and backend systems.',
        outcome: 'A more unified digital experience aligned with core operations.',
        image: {
          src: '/images/case-study-digital-banking.jpg',
          alt: 'Digital banking case study visual.',
        },
      },
      {
        title: 'Remote acquisition rollout',
        description:
          'A financial organization wants to reduce branch dependency and support faster remote onboarding flows.',
        outcome: 'Improved customer activation with less friction in first-touch journeys.',
      },
      {
        title: 'Infrastructure enablement program',
        description:
          'A bank is strengthening self-service access, branch equipment, and supporting server environments across locations.',
        outcome: 'A stronger operational environment supporting both service delivery and growth.',
        image: {
          src: '/images/case-study-infrastructure-rollout.jpg',
          alt: 'Infrastructure rollout case study visual.',
        },
      },
    ],
  },
  finalCta: {
    id: 'final-cta',
    eyebrow: 'Get in Touch',
    title: 'Build your next banking program with C Technology.',
    description: 'Whether you are modernizing core operations, launching digital channels, or strengthening infrastructure, we can help shape a more connected banking environment.',
    actions: [
      { label: 'Contact our team', href: '/contact', variant: 'primary' },
      { label: 'Review services', href: '/solutions', variant: 'ghost' },
    ],
  },
  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'Start a conversation about your banking technology roadmap.',
    description: 'Share your priorities across banking software, systems integration, digital channels, or infrastructure, and our team will get back to you with the right next step.',
    details: {
      office: 'Bishkek HQ, Kyrgyzstan | Istanbul Branch, Turkey',
      email: 'contact@ctechnology.kg',
      phone: '+996 312 00 00 00',
    },
    formTitle: 'Tell us what your institution is building.',
    formDescription: 'Share the initiative, timeline, and delivery context. If the form is unavailable, use the direct email or phone contacts shown here.',
    nextStepsTitle: 'What happens next',
    nextSteps: [
      'We review your request against the relevant software, integration, or infrastructure scope.',
      'Our team replies with the right expert or a short discovery call proposal.',
      'You get a concrete next step instead of a generic sales follow-up.',
    ],
    image: {
      src: '/images/contact-office-map.jpg',
      alt: 'C Technology contact office and location visual.',
    },
  },
  footer: {
    brand: 'C Technology',
    description: 'Enterprise banking technology for software delivery, systems integration, and infrastructure support.',
    copyright: '© C Technology. All rights reserved.',
    companyLabel: 'Company',
    exploreLabel: 'Explore',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    exploreLinks: [
      { label: 'Industries', href: '/industries' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
};

const ru: HomePageContent = {
  ...en,
  siteMeta: {
    title: 'C Technology | Технологический партнёр для банков',
    description:
      'C Technology разрабатывает банковское ПО, цифровые каналы, интеграционные решения и инфраструктурные продукты для банков и финансовых организаций.',
  },
  ui: {
    ...en.ui,
      skipToContent: 'Перейти к содержимому',
      homeLabel: 'Главная',
      headerCta: 'Связаться',
      brandTagline: 'Банковские технологии',
      exploreLabel: 'Дополнительно',
      menuLabel: 'Меню',
      closeLabel: 'Закрыть',
      whyItMatters: 'Почему это важно',
    portfolioLogic: 'Логика портфеля',
    hardwareCapability: 'Инфраструктурное направление',
    capabilityArea: 'Область компетенции',
    outcomes: 'Результаты',
    capabilities: 'Возможности',
    builtAsPartOfStack:
      'Решение проектируется как часть единого банковского технологического контура, а не как изолированный продукт.',
    office: 'Офис',
    phone: 'Телефон',
    contactForm: {
      name: 'Имя',
      company: 'Компания',
      email: 'Email',
      message: 'Сообщение',
      send: 'Отправить запрос',
      sending: 'Отправка...',
      success: 'Сообщение отправлено. Наша команда свяжется с вами в ближайшее время.',
      error: 'Не удалось отправить сообщение. Попробуйте ещё раз чуть позже.',
      placeholders: {
        name: 'Ваше имя',
        company: 'Название компании',
        email: 'you@company.com',
        message: 'Расскажите о вашей задаче',
      },
    },
    notFound: {
      title: 'Страница не найдена.',
      description:
        'Запрошенная страница недоступна или была перемещена. Вы можете вернуться на главную страницу или перейти к контактам.',
      home: 'На главную',
      contact: 'Связаться',
    },
  },
  navigation: [
    { label: 'О компании', href: '/about' },
    { label: 'Решения', href: '/solutions' },
    { label: 'Сервисы', href: '/services' },
    { label: 'Клиенты', href: '/customers' },
    { label: 'Отрасли', href: '/industries' },
    { label: 'Контакты', href: '/contact' },
  ],
  pageIntros: {
    ...en.pageIntros,
    about: {
      ...en.pageIntros.about,
      eyebrow: 'О компании',
      title: 'Банковская технологическая компания для организаций, которым нужна надёжная трансформация.',
      description:
        'C Technology сочетает fintech-экспертизу, дисциплину внедрения и региональное присутствие, помогая банкам в программных, интеграционных и инфраструктурных проектах.',
    },
    solutions: {
      ...en.pageIntros.solutions,
      eyebrow: 'Программные решения',
      title: 'Связанный портфель банковских систем и цифровых платформ.',
      description:
        'Наш программный стек помогает банкам модернизировать core-процессы, цифровые каналы, удалённое привлечение, платежную интеграцию и коммуникационные сервисы без фрагментации ландшафта.',
    },
    infrastructure: {
      ...en.pageIntros.infrastructure,
      eyebrow: 'Инфраструктура и оборудование',
      title: 'Операционные технологии для отделений, self-service и backend-среды.',
      description:
        'Помимо ПО, C Technology поддерживает физическую и техническую инфраструктуру, на которой держатся банковские операции: от ATM и POS-оборудования до серверных решений и branch-систем.',
    },
    contact: {
      ...en.pageIntros.contact,
      eyebrow: 'Контакты',
      title: 'Начните предметный диалог о вашем следующем банковском технологическом проекте.',
      description:
        'Если вы оцениваете новую платформу, планируете roadmap модернизации или усиливаете операционную инфраструктуру, наша команда поможет определить следующий шаг.',
    },
    customers: {
      ...en.pageIntros.customers,
      eyebrow: 'Клиенты',
      title: 'Для банков и финансовых организаций, которым важна практичная enterprise-реализация.',
      description:
        'Наш фокус на клиентах строится вокруг организаций, которым нужна надёжная поставка ПО, интеграций и инфраструктуры в регулируемой финансовой среде.',
    },
    partners: {
      ...en.pageIntros.partners,
      eyebrow: 'Партнёры',
      title: 'Модель взаимодействия, которая работает на стыке экосистем, вендоров и delivery-команд.',
      description:
        'C Technology работает с банковскими стейкхолдерами, технологическими партнёрами и командами внедрения, которым нужна согласованная реализация на уровне нескольких систем и слоёв.',
    },
    technology: {
      ...en.pageIntros.technology,
      eyebrow: 'Технологии',
      title: 'Технологические решения, ориентированные на интегрируемость, операционную ясность и долгосрочную поддерживаемость.',
      description:
        'Мы смотрим на платформы, integration layer и инфраструктуру с enterprise-подходом, подходящим для финансовых организаций и поэтапной трансформации.',
    },
    industries: {
      ...en.pageIntros.industries,
      eyebrow: 'Отрасли',
      title: 'Фокус на финансовых средах, где особенно важны надёжность и интеграция.',
      description:
        'C Technology строится вокруг банковских и смежных финансовых контекстов, которым нужны enterprise-поставка, работа в регулируемой среде и практичная модернизация.',
    },
    servicesPage: {
      ...en.pageIntros.servicesPage,
      eyebrow: 'Сервисы',
      title: 'Консалтинг, интеграция и delivery-компетенции для банковских программ.',
      description:
        'Наш сервисный слой помогает организациям переходить от стратегии к внедрению с более ясной архитектурой, сильной интеграционной дисциплиной и надёжным rollout-планированием.',
    },
    caseStudies: {
      ...en.pageIntros.caseStudies,
      eyebrow: 'Кейсы',
      title: 'Показательные сценарии поставки в банковском ПО и инфраструктуре.',
      description:
        'Эти примеры показывают, как C Technology подходит к модернизации, цифровым каналам и инфраструктурному развитию финансовых организаций.',
    },
  },
  hero: {
    ...en.hero,
    eyebrow: 'Технологический партнёр для банков',
    kicker: 'Банковское ПО, интеграция и инфраструктура для организаций, которым нельзя позволить себе разрозненную реализацию.',
    title: 'Технологии для банков и финансовых организаций.',
    description:
      'C Technology помогает банкам модернизировать клиентские каналы, core-операции и операционную инфраструктуру через модель поставки, рассчитанную на регулируемую среду.',
    primaryAction: { label: 'Связаться с командой', href: '/contact', variant: 'primary' },
    secondaryAction: { label: 'Смотреть решения', href: '/solutions', variant: 'secondary' },
    facts: [
      { label: 'Основана', value: '2015' },
      { label: 'Региональных хаба', value: '2' },
      { label: 'Специалистов', value: '100+' },
      { label: 'Ключевых направлений', value: '5' },
      { label: 'Отраслевой фокус', value: 'Banking' },
    ],
    visualCard: {
      eyebrow: 'Фокус поставки',
      signal: 'Рассчитано на банковскую и регулируемую среду',
      title: 'ПО, интеграция и инфраструктура с банковской отраслевой логикой.',
      description:
        'Мы выстраиваем platform delivery, системную интеграцию и операционный rollout так, чтобы банк модернизировался без разрыва между командами и слоями.',
      items: [
        'Core и digital banking платформы',
        'Системная интеграция и консалтинг',
        'Инфраструктура и аппаратное обеспечение',
      ],
      footerItems: ['Штаб-квартира Бишкек', 'Филиал Стамбул', 'Дисциплина enterprise delivery'],
    },
  },
  about: {
    ...en.about,
    eyebrow: 'О C Technology',
    title: 'Fintech-инженерная компания, построенная вокруг экспертизы в финансовой индустрии.',
    description:
      'С 2015 года C Technology помогает банкам и финансовым организациям реализовывать практичные enterprise-технологические программы в области ПО, delivery и инфраструктуры.',
    paragraphs: [
      'Наш фокус не в generic IT. Мы работаем с операционной, сервисной и регуляторной реальностью финансового сектора, помогая организациям запускать и масштабировать продукты с меньшей фрагментацией.',
      'Штаб-квартира в Бишкеке и филиал в Стамбуле дают нам региональную близость и delivery-подход, подходящий для современных банковских сред.',
    ],
    highlights: ['Банковское ПО и цифровые каналы', 'IT-консалтинг и системная интеграция', 'Инфраструктура и оборудование'],
  },
  metrics: {
    ...en.metrics,
    eyebrow: 'Профиль компании',
    title: 'Масштаб, достаточный для долгосрочных банковских программ.',
    description:
      'C Technology объединяет отраслевой опыт, региональное присутствие и delivery-ёмкость для цифровой трансформации и инфраструктурных инициатив.',
    items: [
      { value: '10+', label: 'Лет в fintech', description: 'Компания основана в 2015 году и последовательно работает в банковских технологиях.' },
      { value: '2', label: 'Региональных хаба', description: 'Штаб-квартира в Бишкеке и филиал в Стамбуле для более широкого охвата.' },
      { value: '100+', label: 'Сотрудников', description: 'Команды продукта, внедрения, интеграции и поддержки.' },
      { value: '5', label: 'Ключевых направлений', description: 'ПО для банков, консалтинг, интеграция, цифровые каналы и инфраструктура.' },
    ],
  },
  services: {
    ...en.services,
    eyebrow: 'Что мы делаем',
    title: 'Структурированные компетенции для программной поставки и банковских операций.',
    description:
      'Мы разделяем software solutions и infrastructure capabilities, чтобы банкам было проще понимать, где мы создаём цифровую ценность, где интегрируем системы, а где поддерживаем физические операции.',
    items: [
      { title: 'Banking Software', description: 'Enterprise-платформы для core banking, цифровых каналов, onboarding, платежей и уведомлений.', points: ['Core systems', 'Digital channels', 'Product-ready APIs'] },
      { title: 'IT Consulting', description: 'Консультационная и delivery-поддержка для программ модернизации, архитектурных решений и rollout-планирования в регулируемой среде.', points: ['Architecture guidance', 'Roadmap planning', 'Program support'] },
      { title: 'Systems Integration', description: 'Интеграция банковских систем, card-экосистем, ERP-платформ и внешних сервисов для уменьшения фрагментации.', points: ['Card system APIs', 'ERP connectivity', 'Cross-platform integration'] },
      { title: 'Infrastructure & Hardware', description: 'Поставка и внедрение технологий для ATM-сетей, branch-оборудования, серверной инфраструктуры и операционного hardware.', points: ['ATM and POS fleet', 'Server equipment', 'Branch operations hardware'] },
    ],
  },
  solutions: {
    ...en.solutions,
    eyebrow: 'Ключевые решения',
    title: 'Сфокусированный портфель для современных банковских сценариев.',
    description:
      'Наш стек решений охватывает core-операции, цифровое взаимодействие, удалённый onboarding, платежи и клиентские коммуникации, формируя целостную банковскую экосистему.',
    lead: {
      title: 'Программные решения, спроектированные как связанная система.',
      description:
        'C Technology помогает банкам выстраивать более цельную операционную модель, соединяя core systems, digital channels, onboarding flows, payment services и notification layer.',
      points: [
        'Модульная, но связанная продуктовая архитектура',
        'Готовность к интеграциям и API-led расширению',
        'Подходит для поэтапной модернизации',
      ],
    },
    items: [
      { category: 'Core Platform', title: 'Core Banking System', description: 'Поддерживает центральные банковские операции, настройку продуктов и операционный backbone для масштабируемых финансовых сервисов.' },
      { category: 'Digital Channels', title: 'Mobile & Internet Banking', description: 'Клиентские каналы для цифрового банковского взаимодействия через мобильные приложения, интернет-банк и branded web access.' },
      { category: 'Onboarding', title: 'Remote Customer Acquisition', description: 'Цифровые onboarding-потоки, помогающие привлекать и активировать клиентов без branch-first модели.' },
      { category: 'Payments', title: 'Card & Payment Solutions', description: 'Card data storage, card integrations и API для связи платежных систем с ERP и операционными платформами.' },
      { category: 'Engagement', title: 'Notification Service', description: 'Централизованный сервисный слой для клиентских алертов, транзакционных сообщений и операционных уведомлений.' },
    ],
  },
  coreBanking: {
    ...en.coreBanking,
    eyebrow: 'Core Banking',
    title: 'Core banking-основа для операционной целостности и роста продуктовой линейки.',
    description:
      'Наше Core Banking Solution поддерживает транзакционный, продуктовый и процессный backbone, на который банк опирается в ежедневных операциях.',
    summary:
      'Платформа рассчитана на организации, которым нужен надёжный операционный центр, объединяющий банковские workflow и оставляющий пространство для цифрового расширения и поэтапной трансформации.',
    outcomes: [
      'Централизованная логика для core banking процессов',
      'Лучшая связность между продуктами, транзакциями и обслуживанием клиентов',
      'Сильная база для digital и payment сервисов',
    ],
    capabilities: [
      'Product and account operations',
      'Workflow and process support',
      'Готовность к интеграции с окружающими банковскими системами',
    ],
    sideLabel: 'Роль платформы',
    sideValue: 'Операционный backbone',
  },
  digitalBanking: {
    ...en.digitalBanking,
    eyebrow: 'Mobile & Internet Banking',
    title: 'Цифровые банковские интерфейсы, которые расширяют банк за пределы отделения.',
    description:
      'Мы создаём mobile banking, internet banking и web portal решения, помогая банкам формировать более доступные, последовательные и сервисно насыщенные клиентские каналы.',
    summary:
      'Эти продукты выступают как стратегический клиентский интерфейс, связывая пользователя с банком через безопасный и понятный цифровой опыт, который можно развивать поэтапно.',
    outcomes: [
      'Единый цифровой сервис на mobile и web каналах',
      'Более сильная клиентская вовлечённость за счёт always-available доступа',
      'Современный frontend-слой, связанный с core banking операциями',
    ],
    sideLabel: 'Фокус канала',
    sideValue: 'Клиентские цифровые сценарии',
  },
  remoteOnboarding: {
    ...en.remoteOnboarding,
    title: 'Удалённое привлечение клиентов для более быстрого и масштабируемого onboarding.',
    description:
      'Наша платформа remote customer acquisition помогает банкам снижать трение на первом клиентском контакте и строить более гибкие сценарии открытия счетов.',
    summary:
      'Вместо опоры только на physical presence организации могут запускать digital-first потоки привлечения, которые проще масштабируются и лучше отвечают современным ожиданиям клиентов.',
    outcomes: [
      'Меньше friction при onboarding новых клиентов',
      'Более широкий охват за пределами branch-dependent модели',
      'Более удобная входная точка в digital banking сервисы',
    ],
    sideLabel: 'Главная цель',
    sideValue: 'Быстрая активация клиента',
  },
  payments: {
    ...en.payments,
    eyebrow: 'Платежи',
    title: 'Платёжные возможности, связывающие card systems, данные и бизнес-платформы.',
    description:
      'C Technology поддерживает payment operations через card data storage и API, которые соединяют card ecosystems с ERP и сопутствующими enterprise-системами.',
    summary:
      'Этот слой предназначен для организаций, которым нужна надёжная работа с платежными данными и более чистая interoperability между финансовыми операциями и бизнес-процессами.',
    outcomes: [
      'Более связные payment operations между системами',
      'Чистая interoperability между card и enterprise-средой',
      'Надёжная база для роста сервисов и отчётных потоков',
    ],
    sideLabel: 'Масштаб интеграции',
    sideValue: 'Платежи + enterprise connectivity',
  },
  notifications: {
    ...en.notifications,
    eyebrow: 'Уведомления',
    title: 'Централизованный notification service для транзакционных и сервисных коммуникаций.',
    description:
      'Наш notification service помогает банкам управлять клиентскими алертами и операционными сообщениями через выделенный коммуникационный слой.',
    summary:
      'Централизация messaging responsibilities позволяет улучшить consistency, упростить service orchestration и поддержать клиентское доверие через более ясные коммуникационные потоки.',
    outcomes: [
      'Последовательные сообщения во всех банковских touchpoints',
      'Быстрее orchestration алертов и сервисных коммуникаций',
      'Повторно используемый communication layer для дальнейшего роста продуктов',
    ],
    sideLabel: 'Ценность сервиса',
    sideValue: 'Надёжный communication layer',
  },
  contact: {
    ...en.contact,
    eyebrow: 'Контакты',
    title: 'Начните диалог о вашей банковской технологической roadmap.',
    description:
      'Расскажите о ваших приоритетах в области банковского ПО, системной интеграции, цифровых каналов или инфраструктуры, и наша команда предложит следующий шаг.',
    details: {
      office: 'Штаб-квартира Бишкек, Кыргызстан | Филиал Стамбул, Турция',
      email: 'contact@ctechnology.kg',
      phone: '+996 312 00 00 00',
    },
    formTitle: 'Расскажите, что строит ваша организация.',
    formDescription:
      'Опишите инициативу, сроки и контекст реализации. Если форма недоступна, используйте прямой email или телефон из этого блока.',
    nextStepsTitle: 'Что произойдёт дальше',
    nextSteps: [
      'Мы сопоставим запрос с нужным программным, интеграционным или инфраструктурным направлением.',
      'Команда вернётся с подходящим экспертом или предложением короткого discovery-звонка.',
      'Вы получите конкретный следующий шаг, а не формальный sales-ответ.',
    ],
  },
  customers: {
    ...en.customers,
    eyebrow: 'Клиенты',
    title: 'Решения для банков и финансовых организаций, которым важна надёжная реализация.',
    description:
      'Клиентская модель C Technology сознательно ориентирована на enterprise-сегмент: банки, финансовые сервисы и организации, которым нужен партнёр по продукту, интеграции и инфраструктуре.',
  },
  partners: {
    ...en.partners,
    eyebrow: 'Партнёры',
    title: 'Партнёрская модель на стыке delivery, интеграции и технологических экосистем.',
    description:
      'Мы работаем в тесной связке с банками, технологическими вендорами, интеграционными участниками и enterprise-командами, которым нужна согласованность между несколькими системами и сервисными слоями.',
  },
  techStack: {
    ...en.techStack,
    eyebrow: 'Технологический стек',
    title: 'Технологические решения, ориентированные на надёжность, интегрируемость и долгосрочную поддерживаемость.',
    description:
      'Наш delivery охватывает product engineering, integrations, infrastructure planning и enterprise implementation patterns, подходящие для финансовых организаций.',
  },
  finalCta: {
    ...en.finalCta,
    eyebrow: 'Связаться',
    title: 'Реализуйте следующую банковскую технологическую программу вместе с C Technology.',
    description:
      'Если вы модернизируете core-операции, запускаете цифровые каналы или усиливаете инфраструктуру, мы поможем сформировать более связанный банковский ландшафт.',
    actions: [
      { label: 'Связаться с командой', href: '/contact', variant: 'primary' },
      { label: 'Посмотреть решения', href: '/solutions', variant: 'ghost' },
    ],
  },
  industriesPage: {
    id: 'industries-page',
    eyebrow: 'Отраслевой фокус',
    title: 'Построено для финансовых организаций со сложными delivery-требованиями.',
    description:
      'Мы особенно сильны в организациях, где банковские workflow, непрерывность сервиса, сложность интеграций и клиентское доверие должны двигаться вместе.',
    items: [
      {
        title: 'Розничный банкинг',
        description:
          'Цифровые каналы, onboarding, уведомления и сервисная непрерывность для customer-facing банковских программ.',
      },
      {
        title: 'Коммерческий банкинг',
        description:
          'Операционная стабильность, интеграционная ясность и масштабируемая инфраструктура для enterprise-facing организаций.',
      },
      {
        title: 'Микрофинансирование и новые финансовые сервисы',
        description:
          'Технологическая поддержка для организаций, которым нужен гибкий цифровой рост без разрозненных систем.',
      },
      {
        title: 'Операционные и shared-service команды',
        description:
          'Системная интеграция, инфраструктурная поддержка и implementation planning для внутренних банковских программ.',
      },
    ],
  },
  caseStudiesPage: {
    id: 'case-studies',
    eyebrow: 'Показательные кейсы',
    title: 'Как мы формулируем банковские технологические программы на практике.',
    description:
      'Типовые сценарии, отражающие проекты по трансформации, интеграции и инфраструктурному развитию, которые поддерживает C Technology.',
    items: [
      {
        title: 'Основа для модернизации core',
        description:
          'Банк хочет повысить операционную целостность и подготовить core-среду к связанным цифровым сервисам.',
        outcome: 'Более ясный операционный backbone и лучшая готовность к digital extension.',
      },
      {
        title: 'Расширение цифровых каналов',
        description:
          'Организация запускает mobile и internet banking, снижая фрагментацию между клиентскими каналами и backend-системами.',
        outcome: 'Более единый цифровой опыт, выровненный с core-операциями.',
      },
      {
        title: 'Запуск remote acquisition',
        description:
          'Финансовая организация хочет снизить branch dependency и ускорить удалённый onboarding.',
        outcome: 'Более быстрое привлечение и активация клиентов с меньшим friction.',
      },
      {
        title: 'Инфраструктурная программа',
        description:
          'Банк усиливает self-service доступ, оборудование отделений и supporting server environments по сети локаций.',
        outcome: 'Более сильная операционная среда, поддерживающая сервис и рост.',
      },
    ],
  },
  footer: {
    ...en.footer,
    description: 'Банковские технологии для поставки ПО, системной интеграции и инфраструктурной поддержки.',
    copyright: '© C Technology. Все права защищены.',
    companyLabel: 'Компания',
    exploreLabel: 'Дополнительно',
    links: [
      { label: 'О компании', href: '/about' },
      { label: 'Решения', href: '/solutions' },
      { label: 'Сервисы', href: '/services' },
      { label: 'Контакты', href: '/contact' },
    ],
    exploreLinks: [
      { label: 'Отрасли', href: '/industries' },
      { label: 'Инфраструктура', href: '/infrastructure' },
      { label: 'Кейсы', href: '/case-studies' },
    ],
  },
};

export const defaultLocale: Locale = 'en';
export const siteContentByLocale: Record<Locale, HomePageContent> = { en, ru };

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
    showDetails: 'Show details',
    hideDetails: 'Hide details',
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
      workEmail: 'Work email',
      company: 'Company',
      role: 'Role',
      country: 'Country',
      projectType: 'Project type',
      timeline: 'Timeline',
      email: 'Email',
      message: 'Message',
      send: 'Send inquiry',
      sending: 'Sending...',
      success: 'Your message has been sent. Our team will get back to you shortly.',
      error: 'Unable to send right now. Please try again in a moment.',
      projectTypeOptions: [
        'Core banking',
        'Digital banking',
        'Onboarding',
        'Payments',
        'Infrastructure',
        'Consulting',
      ],
      timelineOptions: ['Immediately', '0-3 months', '3-6 months', '6+ months'],
      placeholders: {
        name: 'Your name',
        company: 'Company name',
        role: 'Your role',
        country: 'Country',
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
  jumpLinks: {
    id: 'jump-links',
    items: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Customers', href: '/customers' },
      { label: 'Cases', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
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
        src: '/images/solutions-ecosystem-diagram.svg',
        alt: 'Connected banking software ecosystem diagram.',
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
        src: '/images/technology-architecture-grid.svg',
        alt: 'Structured banking technology architecture grid.',
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
        src: '/images/services-delivery-diagram.svg',
        alt: 'Banking delivery and operational enablement diagram.',
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
    kicker: 'Deploy core, digital, and integration systems in one coordinated delivery model for regulated financial institutions.',
    title: 'Banking software and delivery programs built for regulated growth.',
    description:
      'We help banks modernize core banking, launch digital channels, and strengthen operational infrastructure without creating fragmented workstreams.',
    primaryAction: { label: 'Book a discovery call', href: '/contact', variant: 'primary' },
    secondaryAction: { label: 'View banking solutions', href: '/solutions', variant: 'secondary' },
    facts: [
      { label: 'Years in fintech', value: '10+' },
      { label: 'Specialists', value: '100+' },
      { label: 'Active banking markets', value: 'KG + TR' },
      { label: 'Delivery model', value: 'End-to-end' },
    ],
    visualCard: {
      eyebrow: 'Fintech System View',
      signal: 'Built for regulated banking environments',
      title: 'A connected stack from core operations to customer channels.',
      description:
        'Use one delivery partner to coordinate platform architecture, integration design, rollout, and operational enablement across the banking stack.',
      items: [
        'Core banking, onboarding, payments, and notification layers',
        'Integration architecture across bank, card, and ERP systems',
        'Infrastructure rollout for branches, self-service, and backend operations',
      ],
      footerItems: ['Core layer', 'Digital channels', 'Integration + infrastructure'],
    },
    image: {
      src: '/images/hero-banking-system.svg',
      alt: 'Banking systems diagram showing connected product, integration, and infrastructure layers.',
    },
  },
  journeys: {
    id: 'journeys',
    eyebrow: 'How We Help Banks',
    title: 'Choose the banking program you need to move first.',
    description:
      'Start with the part of the banking stack that is under the most pressure, then expand through a coordinated delivery path.',
    items: [
      {
        title: 'Modernize core banking',
        description: 'Upgrade the operational backbone that products, transactions, and customer servicing depend on.',
        outcome: 'Reduce fragmentation and create a cleaner base for future channels and integrations.',
        href: '/solutions',
      },
      {
        title: 'Launch digital channels',
        description: 'Deliver mobile, internet, and onboarding flows that are connected to core operations from day one.',
        outcome: 'Speed up rollout of customer channels and improve onboarding continuity.',
        href: '/solutions',
      },
      {
        title: 'Strengthen infrastructure & integrations',
        description: 'Align branch systems, ATM/POS environments, server operations, and cross-system integrations.',
        outcome: 'Improve operational continuity and system interoperability across the bank.',
        href: '/services',
      },
    ],
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
    eyebrow: 'Company At A Glance',
    title: 'Banking specialization backed by delivery capacity.',
    description:
      'Keep the company proof in one place, then let the rest of the page focus on outcomes, delivery, and commercial evidence.',
    items: [
      { value: '10+', label: 'Years in fintech', description: 'Founded in 2015 with a sustained focus on banking technology.' },
      { value: '2', label: 'Regional hubs', description: 'Bishkek headquarters with an Istanbul branch for broader reach.' },
      { value: '100+', label: 'Employees', description: 'Cross-functional teams spanning product, delivery, integration, and support.' },
      { value: '5', label: 'Core disciplines', description: 'Banking software, consulting, integration, digital channels, and infrastructure.' },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'Capability Model',
    title: 'Software transformation and operational enablement, clearly separated.',
    description:
      'Banks need clarity on where product delivery ends, where integration begins, and how infrastructure supports service continuity.',
    items: [
      { title: 'Software & Digital Transformation', description: 'Core banking, onboarding, digital channels, payments, and notification services in one coordinated product scope.', points: ['Core and digital banking', 'Onboarding and customer channels', 'Payments and communication layers'] },
      { title: 'Systems Integration', description: 'Architecture and API delivery across bank systems, card ecosystems, ERP platforms, and external services.', points: ['Integration architecture', 'Cross-system orchestration', 'Cleaner interoperability'] },
      { title: 'Infrastructure & Operational Enablement', description: 'ATM/POS environments, branch equipment, server readiness, and operational support for banking service continuity.', points: ['ATM and POS fleet', 'Branch and server environments', 'Operational continuity'] },
      { title: 'Consulting & Governance', description: 'Discovery, architecture, implementation planning, rollout governance, and practical support for regulated programs.', points: ['Roadmap and architecture', 'Delivery governance', 'Rollout planning'] },
    ],
    lanes: [
      {
        title: 'Software & Digital Transformation',
        description: 'For banks modernizing customer channels and core operations.',
        points: ['Core banking systems', 'Digital banking channels', 'Remote onboarding, payments, and notifications'],
      },
      {
        title: 'Infrastructure & Operational Enablement',
        description: 'For banks improving service continuity across physical and backend environments.',
        points: ['ATM and POS environments', 'Branch and self-service equipment', 'Server readiness and operational support'],
      },
    ],
    deliveryModel: {
      eyebrow: 'How We Deliver',
      title: 'One delivery path from discovery to support.',
      steps: [
        { title: 'Discovery', description: 'Frame the business scope, constraints, and system landscape.' },
        { title: 'Architecture', description: 'Define target architecture, integration boundaries, and rollout approach.' },
        { title: 'Implementation', description: 'Build or configure the product and infrastructure layers required.' },
        { title: 'Integration', description: 'Connect bank systems, card environments, and external platforms.' },
        { title: 'Rollout', description: 'Launch in controlled phases with governance and operational readiness.' },
        { title: 'Support', description: 'Sustain service continuity through post-launch support and iteration.' },
      ],
    },
  },
  advantages: {
    id: 'advantages',
    eyebrow: 'Why Banks Work With Us',
    title: 'Enterprise signals that reduce buyer risk.',
    description:
      'These are the signals senior banking buyers look for before trusting a delivery partner with operationally critical change.',
    items: [
      { title: 'Fintech specialization', description: 'Programs are shaped around banking workflows, regulated delivery, and institution-grade reliability.' },
      { title: 'Integration capability', description: 'We work across core, digital, payment, ERP, and operational systems rather than treating products as isolated layers.' },
      { title: 'Regional execution presence', description: 'Bishkek and Istanbul operations support proximity while preserving enterprise delivery discipline.' },
      { title: 'End-to-end ownership', description: 'Discovery, architecture, implementation, integration, rollout, and support sit inside one delivery path.' },
    ],
  },
  solutions: {
    id: 'solutions',
    eyebrow: 'Banking Solutions',
    title: 'Enterprise solution cards that read like real banking products.',
    description:
      'Each solution is positioned by value, use case, integrations, and expected operational outcome rather than generic product copy.',
    ecosystemTitle: 'Connected Banking Ecosystem',
    ecosystemDescription: 'The strongest value comes when these layers are delivered as one banking system rather than standalone modules.',
    ecosystemLayers: [
      'Core Banking',
      'Digital Channels',
      'Remote Onboarding',
      'Payments',
      'Notification Layer',
      'Integration Layer',
    ],
    lead: {
      title: 'One commercial story across the banking stack.',
      description:
        'Use the overview cards to see where each solution fits, then go deeper into the detailed product sections below.',
      points: [
        'Clear value proposition per solution',
        'Outcome-led language for senior buyers',
        'Request walkthrough CTA on every product card',
      ],
    },
    items: [
      {
        id: 'core-banking',
        category: 'Core Platform',
        title: 'Core Banking System',
        value: 'Operational backbone for scalable banking products and transaction processing.',
        description: 'For banks modernizing product operations, account logic, and service continuity.',
        forWhom: 'Retail and commercial banks replacing fragmented operational logic.',
        capabilities: ['Product and account operations', 'Workflow control', 'Operational reporting'],
        useCases: ['Core modernization', 'Process consolidation', 'Platform standardization'],
        integrations: ['Digital channels', 'Payments', 'Notification layer'],
        outcomes: ['Reduced fragmentation', 'Cleaner operating model', 'Stronger rollout foundation'],
        action: { label: 'Request walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'digital-banking',
        category: 'Digital Channels',
        title: 'Mobile & Internet Banking',
        value: 'Customer channels connected to core banking from the start.',
        description: 'For banks launching or upgrading mobile, internet, and web-based self-service journeys.',
        forWhom: 'Institutions improving customer access and accelerating digital service rollout.',
        capabilities: ['Mobile banking', 'Internet banking', 'Web portal flows'],
        useCases: ['Channel launch', 'Digital redesign', 'Customer self-service growth'],
        integrations: ['Core banking', 'Notifications', 'Remote onboarding'],
        outcomes: ['Faster rollout of customer channels', 'Better continuity across touchpoints', 'More consistent service delivery'],
        action: { label: 'Request walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'remote-onboarding',
        category: 'Onboarding',
        title: 'Remote Customer Acquisition',
        value: 'Digital onboarding flows that shorten time to customer activation.',
        description: 'For banks reducing branch dependency and improving customer acquisition efficiency.',
        forWhom: 'Banks and financial institutions expanding digital-first account opening.',
        capabilities: ['Remote onboarding', 'Application workflows', 'Customer activation logic'],
        useCases: ['Digital account opening', 'Acquisition expansion', 'Faster KYC-facing journeys'],
        integrations: ['Core banking', 'Digital channels', 'Notification services'],
        outcomes: ['Faster onboarding', 'Wider acquisition reach', 'Less friction at the first step'],
        action: { label: 'Request walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'payments',
        category: 'Payments',
        title: 'Card & Payment Solutions',
        value: 'Payment data, card integrations, and ERP connectivity in one layer.',
        description: 'For banks improving interoperability between card ecosystems and business platforms.',
        forWhom: 'Institutions needing cleaner payment operations and integration reliability.',
        capabilities: ['Card data storage', 'Card system APIs', 'ERP connectivity'],
        useCases: ['Payment system integration', 'Enterprise reconciliation', 'Service expansion'],
        integrations: ['Card systems', 'ERP platforms', 'Core and reporting layers'],
        outcomes: ['Cleaner interoperability', 'More connected payment operations', 'Operational simplification'],
        action: { label: 'Request walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'notifications',
        category: 'Communication Layer',
        title: 'Notification Service',
        value: 'Centralized transactional and service messaging across the banking stack.',
        description: 'For banks that need consistent customer communications and easier orchestration.',
        forWhom: 'Institutions scaling alerts, transactional messaging, and operational communications.',
        capabilities: ['Central message orchestration', 'Transactional alerts', 'Reusable communication flows'],
        useCases: ['Service notifications', 'Transactional alerts', 'Cross-channel messaging'],
        integrations: ['Digital channels', 'Core banking', 'Operational events'],
        outcomes: ['Consistent messaging', 'Faster service orchestration', 'Stronger customer trust'],
        action: { label: 'Request walkthrough', href: '/contact', variant: 'ghost' },
      },
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
    title: 'Customer logos supported by concrete proof of delivery scope.',
    description: 'Use logos as recognition, then add short proof cards so buyers can see what kind of work these relationships imply.',
    items: [
      { name: 'DemirBank', src: '/logos/customers/customer-demirbank.svg', alt: 'DemirBank logo' },
      { name: 'FINCA Bank', src: '/logos/customers/customer-finca-bank.svg', alt: 'FINCA Bank logo' },
      { name: 'Kompanion Bank', src: '/logos/customers/customer-kompanion-bank.svg', alt: 'Kompanion Bank logo' },
      { name: 'Cfaktoring', src: '/logos/customers/customer-cfaktoring.svg', alt: 'Cfaktoring logo' },
      { name: 'BankPozitif', src: '/logos/customers/customer-bankpozitif.svg', alt: 'BankPozitif logo' },
      { name: 'Gazprom Kyrgyzstan', src: '/logos/customers/customer-gazprom-kyrgyzstan.svg', alt: 'Gazprom Kyrgyzstan logo' },
      { name: 'DHB Bank', src: '/logos/customers/customer-dhb-bank.svg', alt: 'DHB Bank logo' },
      { name: 'Plasform', src: '/logos/customers/customer-plasform.svg', alt: 'Plasform logo' },
    ],
    proofCards: [
      {
        title: 'Regional bank',
        scope: 'Core modernization + digital channels',
        domain: 'Retail banking',
        result: 'Improved service continuity and cleaner alignment between backend and channels.',
      },
      {
        title: 'Financial institution',
        scope: 'Remote onboarding + notification workflows',
        domain: 'Customer acquisition',
        result: 'Faster onboarding and less fragmentation at the first customer touchpoint.',
      },
      {
        title: 'Enterprise banking environment',
        scope: 'Payments + system integrations',
        domain: 'Operational interoperability',
        result: 'More connected payment operations across banking and business systems.',
      },
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
  trust: {
    id: 'trust',
    eyebrow: 'Governance & Trust',
    title: 'Operational discipline that enterprise banking buyers expect.',
    description:
      'This layer is designed to answer the reliability question before a project begins: how delivery is governed, how risk is reduced, and how support is handled.',
    note: 'If formal certifications, SLAs, or security attestations apply, they can be attached here later without changing the section structure.',
    items: [
      {
        title: 'Regulated-environment delivery',
        description: 'Programs are structured for financial institutions that operate under operational and governance constraints.',
        points: ['Banking-first scoping', 'Controlled rollout planning', 'Operational continuity mindset'],
      },
      {
        title: 'Delivery governance',
        description: 'Execution is framed as a governed program rather than a loose implementation effort.',
        points: ['Discovery-to-rollout ownership', 'Clear architecture decisions', 'Decision and dependency visibility'],
      },
      {
        title: 'Security and access discipline',
        description: 'System work is approached with practical access control, integration boundaries, and service-risk awareness.',
        points: ['Role-aware implementation', 'Integration boundary control', 'Change discipline around critical systems'],
      },
      {
        title: 'Support model',
        description: 'Post-launch service continuity matters as much as the initial delivery milestone.',
        points: ['Go-live readiness', 'Structured handoff', 'Support and iteration path'],
      },
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
    eyebrow: 'Case Library',
    title: 'Case studies structured for enterprise banking buyers.',
    description:
      'Each case is framed around client profile, challenge, solution, integrations, timing, and measurable operational outcomes.',
    items: [
      {
        category: 'Core Banking',
        title: 'Core modernization foundation',
        profile: 'Regional bank',
        description:
          'A bank needs to improve operational consistency and prepare its core environment for connected digital services.',
        challenge: 'Operational logic and service workflows are too fragmented for clean expansion into digital channels.',
        solution: 'Reframe the core environment as the operating backbone, then align delivery and rollout around that target state.',
        scope: ['Core assessment', 'Process alignment', 'Rollout planning'],
        integrations: ['Digital channels', 'Payments', 'Notification layer'],
        timeline: '6 months',
        outcome: 'A clearer operational backbone with stronger readiness for digital extension.',
        metrics: ['6-month phased rollout', '3 critical process areas aligned', 'Stronger service continuity baseline'],
        image: {
          src: '/images/case-study-core-modernization.jpg',
          alt: 'Core modernization case study visual.',
        },
      },
      {
        category: 'Digital Channels',
        title: 'Digital channel expansion',
        profile: 'Growth-stage bank',
        description:
          'An institution is launching mobile and internet banking while reducing fragmentation between customer channels and backend systems.',
        challenge: 'Customer-facing channels are moving faster than the bank can align core operations and supporting services.',
        solution: 'Launch mobile and internet banking through one coordinated program connected to core workflows and service messaging.',
        scope: ['Channel delivery', 'Integration mapping', 'Customer journey rollout'],
        integrations: ['Core banking', 'Notification service', 'Onboarding flows'],
        timeline: '4 months',
        outcome: 'A more unified digital experience aligned with core operations.',
        metrics: ['2 channels launched', 'Shorter rollout path', 'Cleaner backend-channel alignment'],
        image: {
          src: '/images/case-study-digital-banking.jpg',
          alt: 'Digital banking case study visual.',
        },
      },
      {
        category: 'Onboarding',
        title: 'Remote acquisition rollout',
        profile: 'Financial institution',
        description:
          'A financial organization wants to reduce branch dependency and support faster remote onboarding flows.',
        challenge: 'First-touch journeys create too much friction and slow down account activation.',
        solution: 'Deploy digital-first onboarding with tighter coordination between acquisition flows, core services, and messaging.',
        scope: ['Onboarding journey design', 'System integration', 'Activation workflow'],
        integrations: ['Core banking', 'Digital channels', 'Notification service'],
        timeline: '3 months',
        outcome: 'Improved customer activation with less friction in first-touch journeys.',
        metrics: ['Faster onboarding path', 'Reduced branch dependency', 'Stronger acquisition continuity'],
      },
      {
        category: 'Infrastructure',
        title: 'Infrastructure enablement program',
        profile: 'Multi-location bank',
        description:
          'A bank is strengthening self-service access, branch equipment, and supporting server environments across locations.',
        challenge: 'Operational readiness varies across locations, increasing risk to service continuity.',
        solution: 'Run an infrastructure program that coordinates equipment rollout, operational enablement, and backend readiness.',
        scope: ['Infrastructure supply', 'Site rollout', 'Operational enablement'],
        integrations: ['ATM/POS environments', 'Branch systems', 'Backend operations'],
        timeline: '8 months',
        outcome: 'A stronger operational environment supporting both service delivery and growth.',
        metrics: ['Network-wide rollout', 'Improved operational continuity', 'Better branch readiness'],
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
      address: 'Bishkek, Kyrgyz Republic | Istanbul, Turkey',
      email: 'contact@ctechnology.kg',
      businessEmail: 'banking@ctechnology.kg',
      phone: '+996 312 00 00 00',
      linkedin: 'https://www.linkedin.com/company/c-technology/',
    },
    formTitle: 'Tell us what your institution is building.',
    formDescription: 'Share the initiative, timeline, and delivery context. If the form is unavailable, use the direct email or phone contacts shown here.',
    nextStepsTitle: 'What happens next',
    nextSteps: [
      'We review your request against the relevant software, integration, or infrastructure scope.',
      'Our team replies with the right expert or a short discovery call proposal.',
      'You get a concrete next step instead of a generic sales follow-up.',
    ],
    responseExpectation: 'A banking solutions specialist will reply within 1 business day. If relevant, we will schedule a short discovery call.',
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
      showDetails: 'Показать детали',
      hideDetails: 'Скрыть детали',
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
      workEmail: 'Рабочий email',
      company: 'Компания',
      role: 'Роль',
      country: 'Страна',
      projectType: 'Тип проекта',
      timeline: 'Сроки',
      email: 'Email',
      message: 'Сообщение',
      send: 'Отправить запрос',
      sending: 'Отправка...',
      success: 'Сообщение отправлено. Наша команда свяжется с вами в ближайшее время.',
      error: 'Не удалось отправить сообщение. Попробуйте ещё раз чуть позже.',
      projectTypeOptions: [
        'Core banking',
        'Digital banking',
        'Onboarding',
        'Payments',
        'Infrastructure',
        'Consulting',
      ],
      timelineOptions: ['Сразу', '0-3 месяца', '3-6 месяцев', '6+ месяцев'],
      placeholders: {
        name: 'Ваше имя',
        company: 'Название компании',
        role: 'Ваша роль',
        country: 'Страна',
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
  jumpLinks: {
    id: 'jump-links',
    items: [
      { label: 'Решения', href: '/solutions' },
      { label: 'Отрасли', href: '/industries' },
      { label: 'Клиенты', href: '/customers' },
      { label: 'Кейсы', href: '/case-studies' },
      { label: 'Контакты', href: '/contact' },
    ],
  },
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
    kicker: 'Разворачивайте core, digital и интеграционные системы в одной согласованной модели поставки для регулируемой финансовой среды.',
    title: 'Банковское ПО и delivery-программы для регулируемого роста.',
    description:
      'Мы помогаем банкам модернизировать core banking, запускать цифровые каналы и усиливать операционную инфраструктуру без разрыва между командами и системами.',
    primaryAction: { label: 'Назначить discovery call', href: '/contact', variant: 'primary' },
    secondaryAction: { label: 'Смотреть банковские решения', href: '/solutions', variant: 'secondary' },
    facts: [
      { label: 'Лет в fintech', value: '10+' },
      { label: 'Специалистов', value: '100+' },
      { label: 'Рынки', value: 'KG + TR' },
      { label: 'Модель реализации', value: 'End-to-end' },
    ],
    visualCard: {
      eyebrow: 'Системный fintech-взгляд',
      signal: 'Рассчитано на банковскую и регулируемую среду',
      title: 'Связанный стек от core-операций до клиентских каналов.',
      description:
        'Один delivery partner координирует архитектуру платформы, интеграции, rollout и операционную готовность по всему банковскому стеку.',
      items: [
        'Core banking, onboarding, платежи и notification layer',
        'Интеграционная архитектура между банковскими, card и ERP-системами',
        'Инфраструктурный rollout для отделений, self-service и backend-операций',
      ],
      footerItems: ['Core layer', 'Digital channels', 'Integration + infrastructure'],
    },
  },
  journeys: {
    id: 'journeys',
    eyebrow: 'Как мы помогаем банкам',
    title: 'Выберите банковскую программу, которую нужно сдвинуть первой.',
    description:
      'Начните с наиболее критичной части банковского стека и расширяйте программу через согласованный путь поставки.',
    items: [
      {
        title: 'Модернизировать core banking',
        description: 'Обновить операционную основу, от которой зависят продукты, транзакции и обслуживание клиентов.',
        outcome: 'Меньше фрагментации и более чистая база для будущих каналов и интеграций.',
        href: '/solutions',
      },
      {
        title: 'Запустить цифровые каналы',
        description: 'Развернуть мобильные, интернет- и onboarding-сценарии, связанные с core-операциями с первого дня.',
        outcome: 'Более быстрый запуск клиентских каналов и лучшее качество onboarding-потока.',
        href: '/solutions',
      },
      {
        title: 'Усилить инфраструктуру и интеграции',
        description: 'Согласовать системы отделений, ATM/POS-среду, серверные контуры и кросс-системные интеграции.',
        outcome: 'Сильнее операционная непрерывность и выше совместимость между системами.',
        href: '/services',
      },
    ],
  },
  about: {
    ...en.about,
    eyebrow: 'О C Technology',
    title: 'Инженерная fintech-компания с глубокой экспертизой в финансовой индустрии.',
    description:
      'С 2015 года C Technology помогает банкам и финансовым организациям реализовывать практичные технологические программы в области ПО, поставки решений и инфраструктуры.',
    paragraphs: [
      'Наш фокус не в универсальном IT. Мы работаем с операционной, сервисной и регуляторной реальностью финансового сектора, помогая организациям запускать и масштабировать продукты с меньшей фрагментацией.',
      'Штаб-квартира в Бишкеке и филиал в Стамбуле дают нам региональную близость и дисциплину поставки, подходящую для современных банковских сред.',
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
    eyebrow: 'Модель компетенций',
    title: 'Цифровая трансформация и операционное усиление, разведённые по смыслу.',
    description:
      'Банкам нужна ясность: где заканчивается поставка продукта, где начинается интеграция и как инфраструктура поддерживает непрерывность сервиса.',
    items: [
      { title: 'Software & Digital Transformation', description: 'Core banking, onboarding, цифровые каналы, платежи и сервисы уведомлений в рамках одного продуктового контура.', points: ['Core и digital banking', 'Onboarding и клиентские каналы', 'Платежи и коммуникационные слои'] },
      { title: 'Systems Integration', description: 'Архитектура и API-поставка между банковскими системами, карточными экосистемами, ERP и внешними сервисами.', points: ['Интеграционная архитектура', 'Кросс-системная оркестрация', 'Более чистая совместимость систем'] },
      { title: 'Infrastructure & Operational Enablement', description: 'ATM/POS-среда, оборудование отделений, серверная готовность и операционная поддержка банковской непрерывности.', points: ['ATM и POS-среда', 'Оборудование отделений и серверные контуры', 'Операционная непрерывность'] },
      { title: 'Consulting & Governance', description: 'Discovery, архитектура, планирование внедрения, rollout governance и практическая поддержка регулируемых программ.', points: ['Roadmap и архитектура', 'Delivery governance', 'Rollout planning'] },
    ],
    lanes: [
      {
        title: 'Software & Digital Transformation',
        description: 'Для банков, которые модернизируют клиентские каналы и core-операции.',
        points: ['Core banking systems', 'Digital banking channels', 'Remote onboarding, payments и notifications'],
      },
      {
        title: 'Infrastructure & Operational Enablement',
        description: 'Для банков, которые усиливают непрерывность сервиса в физических и backend-средах.',
        points: ['ATM и POS-среда', 'Оборудование отделений и self-service', 'Server readiness и operational support'],
      },
    ],
    deliveryModel: {
      eyebrow: 'Как мы реализуем',
      title: 'Единый путь поставки от discovery до support.',
      steps: [
        { title: 'Discovery', description: 'Фиксируем бизнес-объём, ограничения и системный контекст.' },
        { title: 'Architecture', description: 'Определяем целевую архитектуру, границы интеграций и rollout-подход.' },
        { title: 'Implementation', description: 'Реализуем продуктовые и инфраструктурные слои, которые нужны банку.' },
        { title: 'Integration', description: 'Соединяем банковские системы, card-среды и внешние платформы.' },
        { title: 'Rollout', description: 'Запускаем поэтапно с governance и операционной готовностью.' },
        { title: 'Support', description: 'Поддерживаем непрерывность сервиса после запуска и дальше развиваем решение.' },
      ],
    },
  },
  solutions: {
    ...en.solutions,
    eyebrow: 'Ключевые решения',
    title: 'Решения, упакованные как реальные банковские enterprise-продукты.',
    description:
      'Каждое решение описано через ценность, use cases, интеграции и ожидаемый операционный результат, а не через абстрактный продуктовый текст.',
    ecosystemTitle: 'Связанная банковская экосистема',
    ecosystemDescription: 'Максимальная ценность возникает, когда эти слои внедряются как одна банковская система, а не как набор отдельных модулей.',
    ecosystemLayers: ['Core Banking', 'Digital Channels', 'Remote Onboarding', 'Payments', 'Notification Layer', 'Integration Layer'],
    lead: {
      title: 'Одна коммерческая история на весь банковский стек.',
      description:
        'Сначала используйте overview cards, чтобы увидеть место каждого решения в архитектуре, затем переходите в подробные product sections ниже.',
      points: [
        'Чёткая value proposition для каждого решения',
        'Outcome language для senior buyer',
        'Request walkthrough CTA на каждой карточке',
      ],
    },
    items: [
      {
        id: 'core-banking',
        category: 'Core Platform',
        title: 'Core Banking System',
        value: 'Операционная основа для масштабируемых банковских продуктов и обработки транзакций.',
        description: 'Для банков, которые модернизируют продуктовые операции, логику счетов и непрерывность сервиса.',
        forWhom: 'Розничные и коммерческие банки, уходящие от фрагментированной операционной логики.',
        capabilities: ['Product and account operations', 'Workflow control', 'Operational reporting'],
        useCases: ['Core modernization', 'Process consolidation', 'Platform standardization'],
        integrations: ['Digital channels', 'Payments', 'Notification layer'],
        outcomes: ['Меньше фрагментации', 'Более чистая операционная модель', 'Сильнее база для rollout'],
        action: { label: 'Запросить walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'digital-banking',
        category: 'Digital Channels',
        title: 'Mobile & Internet Banking',
        value: 'Клиентские каналы, изначально связанные с core banking.',
        description: 'Для банков, которые запускают или обновляют мобильные, интернет- и веб-сценарии самообслуживания.',
        forWhom: 'Организации, улучшающие доступ клиентов и ускоряющие запуск цифровых сервисов.',
        capabilities: ['Mobile banking', 'Internet banking', 'Web portal flows'],
        useCases: ['Channel launch', 'Digital redesign', 'Customer self-service growth'],
        integrations: ['Core banking', 'Notifications', 'Remote onboarding'],
        outcomes: ['Быстрее запуск клиентских каналов', 'Лучшая связность между точками контакта', 'Более стабильная цифровая поставка'],
        action: { label: 'Запросить walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'remote-onboarding',
        category: 'Onboarding',
        title: 'Remote Customer Acquisition',
        value: 'Цифровой onboarding, сокращающий время до активации клиента.',
        description: 'Для банков, снижающих зависимость от отделений и повышающих эффективность привлечения клиентов.',
        forWhom: 'Банки и финансовые организации, расширяющие цифровое открытие счетов.',
        capabilities: ['Remote onboarding', 'Application workflows', 'Customer activation logic'],
        useCases: ['Digital account opening', 'Acquisition expansion', 'Faster KYC-facing journeys'],
        integrations: ['Core banking', 'Digital channels', 'Notification services'],
        outcomes: ['Более быстрый onboarding', 'Шире охват привлечения', 'Меньше friction на первом шаге'],
        action: { label: 'Запросить walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'payments',
        category: 'Payments',
        title: 'Card & Payment Solutions',
        value: 'Платёжные данные, карточные интеграции и ERP connectivity в одном слое.',
        description: 'Для банков, которым нужна более чистая совместимость между карточными экосистемами и бизнес-платформами.',
        forWhom: 'Организации, усиливающие payment operations и надёжность интеграций.',
        capabilities: ['Card data storage', 'Card system APIs', 'ERP connectivity'],
        useCases: ['Payment system integration', 'Enterprise reconciliation', 'Service expansion'],
        integrations: ['Card systems', 'ERP platforms', 'Core and reporting layers'],
        outcomes: ['Чище interoperability', 'Более связные payment operations', 'Операционное упрощение'],
        action: { label: 'Запросить walkthrough', href: '/contact', variant: 'ghost' },
      },
      {
        id: 'notifications',
        category: 'Communication Layer',
        title: 'Notification Service',
        value: 'Централизованные транзакционные и сервисные коммуникации по банковскому стеку.',
        description: 'Для банков, которым нужна единая оркестрация клиентских сообщений.',
        forWhom: 'Организации, масштабирующие alerts, транзакционные сообщения и service communications.',
        capabilities: ['Central message orchestration', 'Transactional alerts', 'Reusable communication flows'],
        useCases: ['Service notifications', 'Transactional alerts', 'Cross-channel messaging'],
        integrations: ['Digital channels', 'Core banking', 'Operational events'],
        outcomes: ['Последовательные сообщения', 'Быстрее service orchestration', 'Сильнее клиентское доверие'],
        action: { label: 'Запросить walkthrough', href: '/contact', variant: 'ghost' },
      },
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
      address: 'Бишкек, Кыргызская Республика | Стамбул, Турция',
      email: 'contact@ctechnology.kg',
      businessEmail: 'banking@ctechnology.kg',
      phone: '+996 312 00 00 00',
      linkedin: 'https://www.linkedin.com/company/c-technology/',
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
    responseExpectation: 'Специалист по банковским решениям ответит в течение 1 рабочего дня. Если тема релевантна, мы предложим короткий discovery call.',
  },
  customers: {
    ...en.customers,
    eyebrow: 'Клиенты',
    title: 'Логотипы клиентов, усиленные короткими proof-карточками.',
    description:
      'Логотипы дают узнавание, а proof-карточки показывают, какой тип проектного объёма стоит за этими отношениями.',
  },
  partners: {
    ...en.partners,
    eyebrow: 'Партнёры',
    title: 'Партнёрская модель на стыке поставки, интеграции и технологических экосистем.',
    description:
      'Мы работаем в тесной связке с банками, технологическими вендорами, интеграционными участниками и enterprise-командами, которым нужна согласованность между несколькими системами и сервисными слоями.',
  },
  trust: {
    ...en.trust,
    eyebrow: 'Governance & Trust',
    title: 'Операционная дисциплина, которую ожидает enterprise buyer в банковской среде.',
    description:
      'Этот слой отвечает на вопрос надёжности ещё до старта проекта: как устроено delivery governance, как снижается риск и как выглядит модель поддержки.',
    note: 'Если позже появятся формальные сертификации, SLA или security attestations, их можно встроить сюда без переделки структуры.',
    items: [
      {
        title: 'Delivery в регулируемой среде',
        description: 'Программы строятся под финансовые организации с жёсткими операционными и governance-ограничениями.',
        points: ['Banking-first scoping', 'Контролируемое rollout-планирование', 'Фокус на непрерывности сервиса'],
      },
      {
        title: 'Delivery governance',
        description: 'Исполнение проекта оформлено как управляемая программа, а не как набор несвязанных задач.',
        points: ['Ownership от discovery до rollout', 'Ясные архитектурные решения', 'Видимость зависимостей и решений'],
      },
      {
        title: 'Security и access discipline',
        description: 'Работа с системами ведётся с учётом доступа, границ интеграций и рисков для критичных сервисов.',
        points: ['Role-aware implementation', 'Контроль границ интеграций', 'Дисциплина изменений вокруг критичных систем'],
      },
      {
        title: 'Support model',
        description: 'Непрерывность сервиса после go-live так же важна, как и сам запуск.',
        points: ['Go-live readiness', 'Структурированный handoff', 'Путь поддержки и следующих итераций'],
      },
    ],
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
    eyebrow: 'Case Library',
    title: 'Кейсы в формате, который помогает senior buyer оценить масштаб и применимость.',
    description:
      'Кейсы собраны как library: профиль клиента, контекст, решение, интеграции, сроки и measurable outcomes.',
    items: [
      {
        category: 'Core Banking',
        title: 'Модернизация core для регионального банка',
        profile: 'Regional bank',
        description: 'Подготовить core-среду к связанным цифровым сервисам и снизить операционную разрозненность.',
        challenge: 'Фрагментированные процессы и слабая готовность core к расширению каналов.',
        solution: 'Скоординированная core modernization с подготовкой к интеграции цифровых и payment-слоёв.',
        scope: ['Core assessment', 'Process alignment', 'Rollout planning'],
        integrations: ['Digital channels', 'Payment services', 'Notification layer'],
        timeline: '6 months',
        outcome: 'Более ясный операционный backbone и лучшая готовность к digital extension.',
        metrics: ['6-month phased rollout', '3 critical process areas aligned', 'Stronger service continuity baseline'],
      },
      {
        category: 'Digital Channels',
        title: 'Запуск digital channels для банка роста',
        profile: 'Growth-stage bank',
        description: 'Запустить mobile и internet banking без разрыва между клиентскими каналами и backend-системами.',
        challenge: 'Каналы развивались быстрее, чем core и integration layer.',
        solution: 'Единая программа запуска customer channels с интеграцией в core и service messaging.',
        scope: ['Channel delivery', 'Integration mapping', 'Customer journey rollout'],
        integrations: ['Core banking', 'Notification service', 'Onboarding flows'],
        timeline: '4 months',
        outcome: 'Более единый цифровой опыт, выровненный с core-операциями.',
        metrics: ['2 channels launched', 'Shorter rollout path', 'Cleaner backend-channel alignment'],
      },
      {
        category: 'Onboarding',
        title: 'Remote acquisition для снижения branch dependency',
        profile: 'Financial institution',
        description: 'Снизить зависимость от отделений и ускорить удалённый onboarding.',
        challenge: 'Высокое трение на первом клиентском шаге и ограниченная масштабируемость branch-first модели.',
        solution: 'Digital-first onboarding flow с customer activation и связью с core и notification stack.',
        scope: ['Onboarding journey design', 'System integration', 'Activation workflow'],
        integrations: ['Core banking', 'Digital channels', 'Notification service'],
        timeline: '3 months',
        outcome: 'Более быстрое привлечение и активация клиентов с меньшим friction.',
        metrics: ['Faster onboarding path', 'Reduced branch dependency', 'Stronger acquisition continuity'],
      },
      {
        category: 'Infrastructure',
        title: 'Инфраструктурная программа для self-service сети',
        profile: 'Multi-location bank',
        description: 'Усилить self-service доступ, branch equipment и supporting server environments.',
        challenge: 'Неравномерная готовность площадок и риск для service continuity.',
        solution: 'Infrastructure rollout с операционной координацией и поддержкой branch environments.',
        scope: ['Infrastructure supply', 'Site rollout', 'Operational enablement'],
        integrations: ['ATM/POS environments', 'Branch systems', 'Backend operations'],
        timeline: '8 months',
        outcome: 'Более сильная операционная среда, поддерживающая сервис и рост.',
        metrics: ['Network-wide rollout', 'Improved operational continuity', 'Better branch readiness'],
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

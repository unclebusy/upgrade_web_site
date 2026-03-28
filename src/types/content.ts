export type Locale = 'en' | 'ru';

export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type LogoItem = {
  name: string;
  src: string;
  alt: string;
};

export type PageIntroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image?: ImageAsset;
};

export type ContentCardItem = {
  title: string;
  description: string;
};

export type LinkAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type SiteMeta = {
  title: string;
  description: string;
};

export type HeroFact = {
  label: string;
  value: string;
};

export type HeroVisualCard = {
  eyebrow: string;
  signal: string;
  title: string;
  description: string;
  items: string[];
  footerItems: string[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  kicker: string;
  description: string;
  primaryAction: LinkAction;
  secondaryAction: LinkAction;
  facts: HeroFact[];
  visualCard: HeroVisualCard;
  image?: ImageAsset;
};

export type AboutContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  highlights: string[];
  image?: ImageAsset;
};

export type MetricItem = {
  value: string;
  label: string;
  description: string;
};

export type MetricsContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: MetricItem[];
};

export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
};

export type ServicesContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export type AdvantageItem = {
  title: string;
  description: string;
};

export type AdvantagesContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: AdvantageItem[];
};

export type FeaturedSolutionItem = {
  title: string;
  description: string;
  category: string;
};

export type SolutionsContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  lead: {
    title: string;
    description: string;
    points: string[];
  };
  items: FeaturedSolutionItem[];
};

export type ProductHighlightContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  outcomes: string[];
  capabilities: string[];
  sideLabel: string;
  sideValue: string;
  image?: ImageAsset;
};

export type PlaceholderSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type InfrastructureItem = {
  title: string;
  description: string;
};

export type InfrastructureContent = PlaceholderSectionContent & {
  intro: string;
  items: InfrastructureItem[];
  image?: ImageAsset;
};

export type LogoSectionContent = PlaceholderSectionContent & {
  items: LogoItem[];
};

export type TechStackGroup = {
  title: string;
  items: string[];
};

export type TechStackContent = PlaceholderSectionContent & {
  groups: TechStackGroup[];
};

export type FinalCtaContent = PlaceholderSectionContent & {
  actions: LinkAction[];
};

export type ContactContent = PlaceholderSectionContent & {
  details: {
    office: string;
    email: string;
    phone: string;
  };
  formTitle: string;
  formDescription: string;
  nextStepsTitle: string;
  nextSteps: string[];
  image?: ImageAsset;
};

export type FooterContent = {
  brand: string;
  description: string;
  copyright: string;
  companyLabel: string;
  exploreLabel?: string;
  links: NavItem[];
  exploreLinks?: NavItem[];
};

export type UiContent = {
  skipToContent: string;
  homeLabel: string;
  headerCta: string;
  brandTagline: string;
  exploreLabel: string;
  menuLabel: string;
  closeLabel: string;
  whyItMatters: string;
  portfolioLogic: string;
  hardwareCapability: string;
  capabilityArea: string;
  outcomes: string;
  capabilities: string;
  builtAsPartOfStack: string;
  office: string;
  email: string;
  phone: string;
  contactForm: {
    name: string;
    company: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      company: string;
      email: string;
      message: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    home: string;
    contact: string;
  };
  localeSwitcher: {
    en: string;
    ru: string;
  };
};

export type HomePageContent = {
  siteMeta: SiteMeta;
  ui: UiContent;
  navigation: NavItem[];
  pageIntros: {
    about: PageIntroContent;
    solutions: PageIntroContent;
    infrastructure: PageIntroContent;
    contact: PageIntroContent;
    customers: PageIntroContent;
    partners: PageIntroContent;
    technology: PageIntroContent;
    industries: PageIntroContent;
    servicesPage: PageIntroContent;
    caseStudies: PageIntroContent;
  };
  hero: HeroContent;
  about: AboutContent;
  metrics: MetricsContent;
  services: ServicesContent;
  advantages: AdvantagesContent;
  solutions: SolutionsContent;
  coreBanking: ProductHighlightContent;
  digitalBanking: ProductHighlightContent;
  remoteOnboarding: ProductHighlightContent;
  payments: ProductHighlightContent;
  notifications: ProductHighlightContent;
  infrastructure: InfrastructureContent;
  customers: LogoSectionContent;
  partners: LogoSectionContent;
  techStack: TechStackContent;
  industriesPage: PlaceholderSectionContent & {
    items: ContentCardItem[];
  };
  caseStudiesPage: PlaceholderSectionContent & {
    items: Array<
      ContentCardItem & {
        outcome: string;
        image?: ImageAsset;
      }
    >;
  };
  finalCta: FinalCtaContent;
  contact: ContactContent;
  footer: FooterContent;
};

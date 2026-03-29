import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSiteContent } from '../../context/SiteContentContext';

const SITE_URL = 'https://ctechnology.kg';
const DEFAULT_OG_IMAGE = '/og-cover.svg';
const SEO_SCRIPT_ID = 'structured-data';

type PageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  pageName: string;
  schemaType:
    | 'WebPage'
    | 'AboutPage'
    | 'Service'
    | 'CollectionPage'
    | 'ContactPage';
};

function ensureMetaTag(attribute: 'name' | 'property', key: string) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureLinkTag(rel: string) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  return tag;
}

function joinUrl(path: string) {
  if (!path || path === '/') {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

function buildPageSeo(pathname: string, locale: 'en' | 'ru', content: ReturnType<typeof useSiteContent>['content']): PageSeo {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const isRu = locale === 'ru';

  const defaults = {
    title: content.siteMeta.title,
    description: content.siteMeta.description,
    canonicalPath: path,
    pageName: isRu ? 'Главная' : 'Home',
    schemaType: 'WebPage' as const,
  };

  switch (path) {
    case '/':
      return {
        ...defaults,
        title: isRu
          ? 'Банковское ПО, цифровые каналы и интеграции | C Technology'
          : 'Banking Software, Digital Channels, and Integration Delivery | C Technology',
        description: isRu
          ? 'C Technology помогает банкам запускать core banking, цифровые каналы, интеграции и инфраструктурные решения в единой delivery-модели для регулируемой среды.'
          : 'C Technology helps banks deliver core banking, digital channels, systems integration, and infrastructure programs in one coordinated model for regulated environments.',
      };
    case '/about':
      return {
        title: isRu
          ? 'О компании C Technology | Банковый технологический партнёр'
          : 'About C Technology | Banking Technology Delivery Partner',
        description: content.pageIntros.about.description,
        canonicalPath: path,
        pageName: isRu ? 'О компании' : 'About',
        schemaType: 'AboutPage',
      };
    case '/solutions':
      return {
        title: isRu
          ? 'Банковские программные решения | Core, Digital, Onboarding, Payments'
          : 'Banking Software Solutions | Core, Digital, Onboarding, Payments',
        description: content.pageIntros.solutions.description,
        canonicalPath: path,
        pageName: isRu ? 'Решения' : 'Solutions',
        schemaType: 'Service',
      };
    case '/services':
      return {
        title: isRu
          ? 'Услуги по внедрению и интеграции для банков | C Technology'
          : 'Banking Implementation and Integration Services | C Technology',
        description: content.pageIntros.servicesPage.description,
        canonicalPath: path,
        pageName: isRu ? 'Сервисы' : 'Services',
        schemaType: 'Service',
      };
    case '/infrastructure':
      return {
        title: isRu
          ? 'Банковская инфраструктура и hardware enablement | C Technology'
          : 'Banking Infrastructure and Hardware Enablement | C Technology',
        description: content.pageIntros.infrastructure.description,
        canonicalPath: path,
        pageName: isRu ? 'Инфраструктура' : 'Infrastructure',
        schemaType: 'Service',
      };
    case '/technology':
      return {
        title: isRu
          ? 'Технологический стек и интеграционная архитектура | C Technology'
          : 'Technology Stack and Integration Architecture | C Technology',
        description: content.pageIntros.technology.description,
        canonicalPath: path,
        pageName: isRu ? 'Технологии' : 'Technology',
        schemaType: 'Service',
      };
    case '/customers':
      return {
        title: isRu
          ? 'Клиенты и реализованные банковские программы | C Technology'
          : 'Customers and Banking Delivery Proof | C Technology',
        description: content.pageIntros.customers.description,
        canonicalPath: path,
        pageName: isRu ? 'Клиенты' : 'Customers',
        schemaType: 'CollectionPage',
      };
    case '/case-studies':
      return {
        title: isRu
          ? 'Кейсы банковской трансформации и интеграции | C Technology'
          : 'Banking Transformation Case Studies | C Technology',
        description: content.pageIntros.caseStudies.description,
        canonicalPath: path,
        pageName: isRu ? 'Кейсы' : 'Case Studies',
        schemaType: 'CollectionPage',
      };
    case '/industries':
      return {
        title: isRu
          ? 'Отрасли и сценарии для банков и финсектора | C Technology'
          : 'Industries and Banking Use Cases | C Technology',
        description: content.pageIntros.industries.description,
        canonicalPath: path,
        pageName: isRu ? 'Отрасли' : 'Industries',
        schemaType: 'WebPage',
      };
    case '/partners':
      return {
        title: isRu
          ? 'Партнёры и экосистема поставок | C Technology'
          : 'Partners and Delivery Ecosystem | C Technology',
        description: content.pageIntros.partners.description,
        canonicalPath: path,
        pageName: isRu ? 'Партнёры' : 'Partners',
        schemaType: 'WebPage',
      };
    case '/contact':
      return {
        title: isRu
          ? 'Связаться с C Technology | Банковские решения и discovery call'
          : 'Contact C Technology | Banking Solutions and Discovery Call',
        description: content.pageIntros.contact.description,
        canonicalPath: path,
        pageName: isRu ? 'Контакты' : 'Contact',
        schemaType: 'ContactPage',
      };
    default:
      return defaults;
  }
}

function buildBreadcrumbSchema(pageSeo: PageSeo) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'C Technology',
      item: SITE_URL,
    },
  ];

  if (pageSeo.canonicalPath !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageSeo.pageName,
      item: joinUrl(pageSeo.canonicalPath),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function SeoManager() {
  const location = useLocation();
  const { content, locale } = useSiteContent();

  const pageSeo = useMemo(
    () => buildPageSeo(location.pathname, locale, content),
    [content, locale, location.pathname],
  );

  useEffect(() => {
    const canonicalUrl = joinUrl(pageSeo.canonicalPath);
    const ogImage = joinUrl(DEFAULT_OG_IMAGE);
    const contact = content.contact.details;

    document.title = pageSeo.title;

    const metaValues: Array<[attribute: 'name' | 'property', key: string, value: string]> = [
      ['name', 'description', pageSeo.description],
      ['name', 'robots', 'index, follow'],
      ['property', 'og:type', pageSeo.schemaType === 'Service' ? 'article' : 'website'],
      ['property', 'og:title', pageSeo.title],
      ['property', 'og:description', pageSeo.description],
      ['property', 'og:url', canonicalUrl],
      ['property', 'og:image', ogImage],
      ['property', 'og:site_name', 'C Technology'],
      ['property', 'og:locale', locale === 'ru' ? 'ru_RU' : 'en_US'],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', pageSeo.title],
      ['name', 'twitter:description', pageSeo.description],
      ['name', 'twitter:image', ogImage],
    ];

    metaValues.forEach(([attribute, key, value]) => {
      const tag = ensureMetaTag(attribute, key);
      tag.setAttribute('content', value);
    });

    const canonicalLink = ensureLinkTag('canonical');
    canonicalLink.href = canonicalUrl;

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'C Technology',
      url: SITE_URL,
      logo: joinUrl('/ctechnology-logo-full.png'),
      image: ogImage,
      email: contact.businessEmail,
      telephone: contact.phone,
      sameAs: [contact.linkedin],
      areaServed: ['Kyrgyzstan', 'Turkey'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: contact.businessEmail,
          telephone: contact.phone,
          availableLanguage: ['English', 'Russian'],
          areaServed: ['Kyrgyzstan', 'Turkey'],
        },
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'C Technology',
      url: SITE_URL,
      inLanguage: locale === 'ru' ? 'ru' : 'en',
      description: content.siteMeta.description,
    };

    const pageSchema =
      pageSeo.schemaType === 'Service'
        ? {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: pageSeo.pageName,
            serviceType: pageSeo.pageName,
            provider: {
              '@type': 'Organization',
              name: 'C Technology',
              url: SITE_URL,
            },
            areaServed: ['Kyrgyzstan', 'Turkey'],
            description: pageSeo.description,
            url: canonicalUrl,
          }
        : {
            '@context': 'https://schema.org',
            '@type': pageSeo.schemaType,
            name: pageSeo.pageName,
            description: pageSeo.description,
            url: canonicalUrl,
            inLanguage: locale === 'ru' ? 'ru' : 'en',
          };

    const schemaGraph = [
      organizationSchema,
      websiteSchema,
      pageSchema,
      buildBreadcrumbSchema(pageSeo),
    ];

    let script = document.getElementById(SEO_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SEO_SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schemaGraph);
  }, [content, locale, pageSeo]);

  return null;
}

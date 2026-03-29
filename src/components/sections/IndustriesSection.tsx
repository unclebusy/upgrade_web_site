import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function IndustriesSection() {
  const { content, locale } = useSiteContent();
  const { industriesPage, ui } = content;
  const segmentSignals =
    locale === 'ru'
      ? [
          {
            needs: 'Цифровые каналы, onboarding, уведомления, сервисная непрерывность',
            fit: 'Подходящие решения: digital banking, onboarding, notification layer',
            href: '/solutions',
          },
          {
            needs: 'Интеграции, операционная устойчивость, enterprise-ready delivery',
            fit: 'Подходящие направления: core, payments, systems integration',
            href: '/services',
          },
          {
            needs: 'Гибкий цифровой рост без разрозненных систем',
            fit: 'Подходящие решения: onboarding, customer channels, lighter integration rollout',
            href: '/solutions',
          },
          {
            needs: 'Внутренние программы, shared services, инфраструктурная координация',
            fit: 'Подходящие направления: consulting, integration, infrastructure enablement',
            href: '/services',
          },
        ]
      : [
          {
            needs: 'Digital channels, onboarding, notifications, and service continuity',
            fit: 'Relevant solutions: digital banking, onboarding, notification layer',
            href: '/solutions',
          },
          {
            needs: 'Integration clarity, operational resilience, and enterprise-ready execution',
            fit: 'Relevant scope: core, payments, and systems integration',
            href: '/services',
          },
          {
            needs: 'Flexible digital growth without fragmented systems',
            fit: 'Relevant solutions: onboarding, customer channels, and lighter integration rollout',
            href: '/solutions',
          },
          {
            needs: 'Internal programs, shared services, and infrastructure coordination',
            fit: 'Relevant scope: consulting, integration, and infrastructure enablement',
            href: '/services',
          },
        ];
  const needsLabel = locale === 'ru' ? 'Typical needs' : 'Typical needs';
  const fitLabel = locale === 'ru' ? 'Delivery fit' : 'Delivery fit';
  const actionLabel = locale === 'ru' ? 'Перейти к релевантному направлению' : 'Explore relevant scope';

  return (
    <SectionWrapper id={industriesPage.id} className="industries-page-section">
      <SectionHeading
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        description={industriesPage.description}
      />
      <div className="industries-layout">
        <div className="industries-layout__summary highlight-panel">
          <p className="highlight-panel__title">{ui.capabilityArea}</p>
          <h3>{locale === 'ru' ? 'Где компания особенно сильна' : 'Where the company is strongest'}</h3>
          <p>
            {locale === 'ru'
              ? 'Эта страница должна помогать банковскому buyer быстро понять, в каких институциональных контекстах компания особенно релевантна и какой delivery-path чаще всего подходит.'
              : 'This page should help banking buyers quickly see which institutional contexts are the strongest fit and which delivery path is typically relevant.'}
          </p>
        </div>
        <div className="industries-grid">
          {industriesPage.items.map((item, index) => (
            <article key={item.title} className="industry-card">
              <p className="industry-card__eyebrow">{item.title}</p>
              <p>{item.description}</p>
              <div className="industry-card__cluster">
                <span>{needsLabel}</span>
                <p>{segmentSignals[index]?.needs}</p>
              </div>
              <div className="industry-card__cluster">
                <span>{fitLabel}</span>
                <p>{segmentSignals[index]?.fit}</p>
              </div>
              <AppLink href={segmentSignals[index]?.href ?? '/solutions'} className="text-link">
                {actionLabel}
              </AppLink>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function InfrastructureSection() {
  const { content, locale } = useSiteContent();
  const { infrastructure } = content;
  const featuredItem = infrastructure.items[0];
  const supportingItems = infrastructure.items.slice(1);
  const rolloutLabel = locale === 'ru' ? 'Program rollout' : 'Program rollout';
  const ctaLabel = locale === 'ru' ? 'Обсудить инфраструктурную программу' : 'Discuss an infrastructure program';
  const rolloutSteps =
    locale === 'ru'
      ? ['Оценка среды', 'Поставка и координация площадок', 'Операционная готовность']
      : ['Environment assessment', 'Supply and site coordination', 'Operational readiness'];

  return (
    <SectionWrapper id={infrastructure.id} surface="accent" className="infrastructure-page-section">
      <SectionHeading
        eyebrow={infrastructure.eyebrow}
        title={infrastructure.title}
        description={infrastructure.description}
      />
      <div className="infrastructure-system">
        <article className="infrastructure-system__featured">
          <div className="infrastructure-system__content">
            <p className="infrastructure-system__label">{featuredItem.title}</p>
            <h3>{locale === 'ru' ? 'Инфраструктура подаётся как operational program, а не как общий hardware-list.' : 'Infrastructure is framed as an operational program, not a generic hardware list.'}</h3>
            <p>{infrastructure.intro}</p>
            <div className="infrastructure-system__rollout">
              <p className="infrastructure-system__rollout-label">{rolloutLabel}</p>
              <div className="infrastructure-system__chips">
                {rolloutSteps.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
            <AppLink href="/contact" className="button button--ghost">
              {ctaLabel}
            </AppLink>
          </div>
          {infrastructure.image ? (
            <div className="section-media section-media--infrastructure infrastructure-system__media">
              <img src={infrastructure.image.src} alt={infrastructure.image.alt} />
            </div>
          ) : null}
        </article>
        <div className="infrastructure-system__grid">
          <article className="infrastructure-category infrastructure-category--feature">
            <p className="infrastructure-category__label">{featuredItem.title}</p>
            <p>{featuredItem.description}</p>
          </article>
          {supportingItems.map((item) => (
            <article key={item.title} className="infrastructure-category">
              <p className="infrastructure-category__label">{item.title}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

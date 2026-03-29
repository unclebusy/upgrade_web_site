import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { FeatureList } from '../ui/FeatureList';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ServicesSection() {
  const { content, locale } = useSiteContent();
  const { services } = content;
  const deliveryArchitectureTitle =
    locale === 'ru' ? 'Как устроена delivery-модель' : 'How the delivery model is structured';
  const capabilityMapTitle =
    locale === 'ru' ? 'Capability map' : 'Capability map';
  const ctaLabel = locale === 'ru' ? 'Обсудить delivery model' : 'Discuss the delivery model';

  return (
    <SectionWrapper id={services.id} className="services-page-section">
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
      />
      <div className="services-architecture">
        <div className="services-architecture__intro">
          <p className="eyebrow">{services.deliveryModel.eyebrow}</p>
          <h2>{services.deliveryModel.title}</h2>
          <p>{deliveryArchitectureTitle}</p>
          <div className="services-architecture__rails">
            {services.lanes.map((lane) => (
              <article key={lane.title} className="services-rail">
                <p className="services-rail__label">{lane.title}</p>
                <p>{lane.description}</p>
                <FeatureList items={lane.points} />
              </article>
            ))}
          </div>
        </div>
        <div className="delivery-timeline">
          {services.deliveryModel.steps.map((step, index) => (
            <article key={step.title} className="delivery-timeline__step">
              <div className="delivery-timeline__index">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="services-capability-map">
        <div className="services-capability-map__intro">
          <p className="eyebrow">{capabilityMapTitle}</p>
          <h2>{locale === 'ru' ? 'Четыре capability-зоны вместо общего списка услуг.' : 'Four capability zones instead of a generic list of services.'}</h2>
          <p>{services.description}</p>
          <AppLink href="/contact" className="button button--ghost">
            {ctaLabel}
          </AppLink>
        </div>
        <div className="services-capability-map__grid">
          {services.items.map((item, index) => (
            <article
              key={item.title}
              className={`services-capability-card ${index === 0 ? 'services-capability-card--feature' : ''}`}
            >
              <p className="services-capability-card__label">{services.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <FeatureList items={item.points} />
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

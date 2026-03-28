import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ServicesSection() {
  const { content } = useSiteContent();
  const { services } = content;

  return (
    <SectionWrapper id={services.id}>
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
      />
      <div className="services-lanes">
        {services.lanes.map((lane) => (
          <article key={lane.title} className="lane-card">
            <p className="lane-card__eyebrow">{services.eyebrow}</p>
            <h3>{lane.title}</h3>
            <p>{lane.description}</p>
            <FeatureList items={lane.points} />
          </article>
        ))}
      </div>
      <div className="services-grid">
        {services.items.map((item, index) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            variant={index === 0 ? 'feature' : index === 3 ? 'signal' : 'default'}
          >
            <FeatureList items={item.points} />
          </InfoCard>
        ))}
      </div>
      <div className="delivery-model">
        <div className="delivery-model__intro">
          <p className="eyebrow">{services.deliveryModel.eyebrow}</p>
          <h2>{services.deliveryModel.title}</h2>
        </div>
        <div className="delivery-steps">
          {services.deliveryModel.steps.map((step, index) => (
            <article key={step.title} className="delivery-step">
              <span className="delivery-step__index">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

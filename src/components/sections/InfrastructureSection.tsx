import { useSiteContent } from '../../context/SiteContentContext';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function InfrastructureSection() {
  const { content, locale } = useSiteContent();
  const { infrastructure, ui } = content;
  const scenarios =
    locale === 'ru'
      ? [
          'Развёртывание self-service и branch operations по нескольким локациям',
          'Поддержка service continuity в физических и backend banking environments',
          'Координация hardware rollout с operational readiness',
        ]
      : [
          'Self-service and branch operations rollout across multiple locations',
          'Service continuity support across physical and backend banking environments',
          'Hardware rollout coordinated with operational readiness',
        ];

  return (
    <SectionWrapper id={infrastructure.id} surface="accent" className="infrastructure-page-section">
      <SectionHeading
        eyebrow={infrastructure.eyebrow}
        title={infrastructure.title}
        description={infrastructure.description}
      />
      <div className="infrastructure-layout">
        <div className="infrastructure-layout__intro">
          <p>{infrastructure.intro}</p>
          <div className="infrastructure-scenarios">
            {scenarios.map((scenario) => (
              <span key={scenario}>{scenario}</span>
            ))}
          </div>
          {infrastructure.image ? (
            <div className="section-media section-media--infrastructure">
              <img src={infrastructure.image.src} alt={infrastructure.image.alt} />
            </div>
          ) : null}
        </div>
        <div className="infrastructure-grid">
          {infrastructure.items.map((item, index) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
              accent={ui.hardwareCapability}
              variant={index === 0 ? 'feature' : index === 3 ? 'signal' : 'compact'}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

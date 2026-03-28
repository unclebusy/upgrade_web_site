import { useSiteContent } from '../../context/SiteContentContext';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function InfrastructureSection() {
  const { content } = useSiteContent();
  const { infrastructure, ui } = content;

  return (
    <SectionWrapper id={infrastructure.id} surface="accent">
      <SectionHeading
        eyebrow={infrastructure.eyebrow}
        title={infrastructure.title}
        description={infrastructure.description}
      />
      <div className="infrastructure-layout">
        <div className="infrastructure-layout__intro">
          <p>{infrastructure.intro}</p>
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
              variant={index === 0 ? 'feature' : 'compact'}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

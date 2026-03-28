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
      <div className="services-grid">
        {services.items.map((item, index) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            variant={index === 0 ? 'feature' : index === 3 ? 'signal' : 'default'}
            className={index === 0 ? 'services-grid__feature' : ''}
          >
            <FeatureList items={item.points} />
          </InfoCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

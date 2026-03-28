import { useSiteContent } from '../../context/SiteContentContext';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function IndustriesSection() {
  const { content } = useSiteContent();
  const { industriesPage, ui } = content;

  return (
    <SectionWrapper id={industriesPage.id}>
      <SectionHeading
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        description={industriesPage.description}
      />
      <div className="services-grid">
        {industriesPage.items.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            accent={ui.capabilityArea}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

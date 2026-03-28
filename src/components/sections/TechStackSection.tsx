import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function TechStackSection() {
  const { content } = useSiteContent();
  const { techStack, ui } = content;

  return (
    <SectionWrapper id={techStack.id}>
      <SectionHeading
        eyebrow={techStack.eyebrow}
        title={techStack.title}
        description={techStack.description}
      />
      <div className="tech-stack-grid">
        {techStack.groups.map((group) => (
          <InfoCard
            key={group.title}
            title={group.title}
            description="A representative view of our delivery focus in this layer."
            accent={ui.capabilityArea}
          >
            <FeatureList items={group.items} />
          </InfoCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

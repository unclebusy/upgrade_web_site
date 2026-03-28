import { useSiteContent } from '../../context/SiteContentContext';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function AdvantagesSection() {
  const { content } = useSiteContent();
  const { advantages, ui } = content;

  return (
    <SectionWrapper id={advantages.id} surface="muted">
      <SectionHeading
        eyebrow={advantages.eyebrow}
        title={advantages.title}
        description={advantages.description}
      />
      <div className="advantages-grid">
        {advantages.items.map((item, index) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            accent={ui.whyItMatters}
            variant={index === 0 ? 'feature' : index === 1 ? 'signal' : 'compact'}
            className={index === 0 ? 'advantages-grid__lead' : ''}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

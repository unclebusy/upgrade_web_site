import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function SolutionsSection() {
  const { content } = useSiteContent();
  const { solutions, ui } = content;

  return (
    <SectionWrapper id={solutions.id}>
      <SectionHeading
        eyebrow={solutions.eyebrow}
        title={solutions.title}
        description={solutions.description}
      />
      <div className="solutions-layout">
        <div className="solutions-layout__lead">
          <InfoCard
            title={solutions.lead.title}
            description={solutions.lead.description}
            accent={ui.portfolioLogic}
            variant="feature"
            className="solutions-lead-card"
          >
            <FeatureList items={solutions.lead.points} />
          </InfoCard>
        </div>
        <div className="solutions-grid solutions-grid--editorial">
          {solutions.items.map((item, index) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
              accent={item.category}
              variant={index === 0 ? 'feature' : index < 3 ? 'signal' : 'compact'}
              className={index === 0 ? 'solutions-grid__spotlight' : ''}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

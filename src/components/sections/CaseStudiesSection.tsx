import { useSiteContent } from '../../context/SiteContentContext';
import { InfoCard } from '../ui/InfoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CaseStudiesSection() {
  const { content } = useSiteContent();
  const { caseStudiesPage } = content;

  return (
    <SectionWrapper id={caseStudiesPage.id} surface="muted">
      <SectionHeading
        eyebrow={caseStudiesPage.eyebrow}
        title={caseStudiesPage.title}
        description={caseStudiesPage.description}
      />
      <div className="services-grid">
        {caseStudiesPage.items.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            accent={item.outcome}
            variant="feature"
          >
            {item.image ? (
              <div className="card-media">
                <img src={item.image.src} alt={item.image.alt} />
              </div>
            ) : null}
          </InfoCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

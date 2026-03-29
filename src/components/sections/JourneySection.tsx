import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function JourneySection() {
  const { content } = useSiteContent();
  const { journeys, ui } = content;

  return (
    <SectionWrapper id={journeys.id} surface="muted">
      <SectionHeading
        eyebrow={journeys.eyebrow}
        title={journeys.title}
        description={journeys.description}
      />
      <div className="journey-grid">
        {journeys.items.map((item) => (
          <AppLink key={item.title} href={item.href} className="journey-card journey-card--link">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="journey-card__outcome">{item.outcome}</p>
            <span className="text-link">
              {ui.exploreLabel}
            </span>
          </AppLink>
        ))}
      </div>
    </SectionWrapper>
  );
}

import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function TrustSection() {
  const { content } = useSiteContent();
  const { trust } = content;

  return (
    <SectionWrapper id={trust.id} surface="accent">
      <SectionHeading
        eyebrow={trust.eyebrow}
        title={trust.title}
        description={trust.description}
      />
      <div className="trust-grid">
        {trust.items.map((item) => (
          <article key={item.title} className="trust-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <FeatureList items={item.points} />
          </article>
        ))}
      </div>
      <p className="trust-note">{trust.note}</p>
    </SectionWrapper>
  );
}

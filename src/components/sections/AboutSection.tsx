import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function AboutSection() {
  const { content } = useSiteContent();
  const { about, hero, ui } = content;

  return (
    <SectionWrapper id={about.id}>
      <div className="split-layout">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />
        <div className="split-layout__content">
          {about.image ? (
            <div className="section-media section-media--about">
              <img src={about.image.src} alt={about.image.alt} />
            </div>
          ) : null}
          <div className="about-facts" aria-label={about.eyebrow}>
            {hero.facts.map((fact) => (
              <article key={fact.label} className="about-facts__item">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
          <div className="rich-text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="highlight-panel">
            <p className="highlight-panel__title">{ui.capabilityArea}</p>
            <FeatureList items={about.highlights} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function AboutSection() {
  const { content } = useSiteContent();
  const { about, ui } = content;

  return (
    <SectionWrapper id={about.id} className="about-editorial-section">
      <div className="about-editorial">
        {about.image ? (
          <div className="section-media section-media--about about-editorial__media">
            <img src={about.image.src} alt={about.image.alt} />
          </div>
        ) : null}
        <div className="about-editorial__content">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
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

import { useSiteContent } from '../../context/SiteContentContext';
import { SectionWrapper } from '../ui/SectionWrapper';

export function WhyChooseSection() {
  const { content } = useSiteContent();
  const { advantages, trust } = content;
  const supportItems = [trust.items[0], trust.items[1], trust.items[3]].filter(Boolean);

  return (
    <SectionWrapper id={advantages.id} className="why-choose-section">
      <div className="why-choose">
        <div className="why-choose__content">
          <p className="eyebrow">{advantages.eyebrow}</p>
          <h2>{advantages.title}</h2>
          <p className="why-choose__description">{advantages.description}</p>
          <div className="why-choose__support">
            {supportItems.map((item) => (
              <div key={item.title} className="why-choose__support-item">
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="why-choose__pillars">
          {advantages.items.map((item) => (
            <article key={item.title} className="why-choose__pillar">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

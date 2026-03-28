import { useSiteContent } from '../../context/SiteContentContext';
import { CtaButtons } from '../ui/CtaButtons';
import { FeatureList } from '../ui/FeatureList';
import { SectionWrapper } from '../ui/SectionWrapper';

export function HeroSection() {
  const { content } = useSiteContent();
  const { hero } = content;

  return (
    <SectionWrapper className="hero" surface="accent">
      <div className="hero__grid">
        <div className="hero__content">
          <div className="hero__intro">
            <p className="eyebrow">{hero.eyebrow}</p>
            <p className="hero__kicker">Banking software, systems integration, and infrastructure</p>
          </div>
          <h1 className="hero__title">
            <span>Enterprise technology</span>
            <span>for banks and</span>
            <span>financial institutions.</span>
          </h1>
          <p className="hero__description">{hero.description}</p>
          <CtaButtons actions={[hero.primaryAction, hero.secondaryAction]} />
          <div className="hero-facts" aria-label="Company trust facts">
            {hero.facts.map((fact) => (
              <article key={fact.label} className="hero-facts__item">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </div>
        <aside className="hero__panel">
          {hero.image ? (
            <div className="hero__media">
              <img src={hero.image.src} alt={hero.image.alt} />
            </div>
          ) : null}
          <div className="hero-panel">
            <div className="hero-panel__header">
              <p className="eyebrow">{hero.visualCard.eyebrow}</p>
              <div className="hero-panel__signal">Banking-first delivery model</div>
            </div>
            <h2>{hero.visualCard.title}</h2>
            <p>{hero.visualCard.description}</p>
            <FeatureList items={hero.visualCard.items} />
            <div className="hero-panel__footer">
              <span>Bishkek HQ</span>
              <span>Istanbul Branch</span>
              <span>100+ specialists</span>
            </div>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}

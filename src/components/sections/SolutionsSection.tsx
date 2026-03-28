import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { AppLink } from '../ui/AppLink';
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
          <div className="solutions-lead-card info-card info-card--feature">
            <p className="info-card__accent">{ui.portfolioLogic}</p>
            <h3>{solutions.lead.title}</h3>
            <p>{solutions.lead.description}</p>
            <FeatureList items={solutions.lead.points} />
          </div>
          <div className="ecosystem-map">
            <p className="ecosystem-map__title">{solutions.ecosystemTitle}</p>
            <p>{solutions.ecosystemDescription}</p>
            <div className="ecosystem-map__layers">
              {solutions.ecosystemLayers.map((layer) => (
                <span key={layer} className="ecosystem-map__layer">
                  {layer}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="solution-cards">
          {solutions.items.map((item) => (
            <article key={item.id} className="solution-card">
              <div className="solution-card__header">
                <p className="info-card__accent">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="solution-card__value">{item.value}</p>
                <p>{item.description}</p>
              </div>
              <div className="solution-card__body">
                <div>
                  <p className="solution-card__label">For whom</p>
                  <p>{item.forWhom}</p>
                </div>
                <div>
                  <p className="solution-card__label">Capabilities</p>
                  <FeatureList items={item.capabilities} />
                </div>
                <div>
                  <p className="solution-card__label">Use cases</p>
                  <FeatureList items={item.useCases} />
                </div>
                <div>
                  <p className="solution-card__label">Integrations</p>
                  <FeatureList items={item.integrations} />
                </div>
                <div>
                  <p className="solution-card__label">Outcomes</p>
                  <FeatureList items={item.outcomes} />
                </div>
              </div>
              <AppLink href={item.action.href} className={`button button--${item.action.variant ?? 'ghost'}`}>
                {item.action.label}
              </AppLink>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

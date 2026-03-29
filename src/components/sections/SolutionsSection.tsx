import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { FeatureList } from '../ui/FeatureList';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function SolutionsSection() {
  const { content, locale } = useSiteContent();
  const { solutions, ui } = content;
  const featuredItem = solutions.items.find((item) => item.id === 'core-banking');
  const supportingItems = solutions.items.filter((item) => item.id !== 'core-banking');
  const fitLabel = locale === 'ru' ? 'Оптимально для' : 'Best fit';
  const mapLabel = locale === 'ru' ? 'Connected stack' : 'Connected stack';
  const detailLabel = locale === 'ru' ? 'Подробные product sections ниже' : 'Detailed product sections below';
  const cardCta = locale === 'ru' ? 'Смотреть модуль' : 'View module';

  return (
    <SectionWrapper id={solutions.id} className="solutions-page-section">
      <SectionHeading
        eyebrow={solutions.eyebrow}
        title={solutions.title}
        description={solutions.description}
      />
      <div className="solutions-overview">
        <div className="solutions-overview__intro">
          <div className="solutions-overview__lead">
            <p className="eyebrow">{ui.portfolioLogic}</p>
            <h2>{solutions.lead.title}</h2>
            <p>{solutions.lead.description}</p>
            <FeatureList items={solutions.lead.points} />
          </div>
          <div className="solutions-overview__map">
            <p className="solutions-overview__map-label">{mapLabel}</p>
            <h3>{solutions.ecosystemTitle}</h3>
            <p>{solutions.ecosystemDescription}</p>
            <div className="solutions-overview__layers">
              {solutions.ecosystemLayers.map((layer) => (
                <span key={layer}>{layer}</span>
              ))}
            </div>
            <p className="solutions-overview__note">{detailLabel}</p>
          </div>
        </div>
        <div className="solutions-overview__portfolio">
          {featuredItem ? (
            <article className="solutions-overview__featured">
              <p className="solutions-overview__card-label">{featuredItem.category}</p>
              <h3>{featuredItem.title}</h3>
              <p className="solutions-overview__value">{featuredItem.value}</p>
              <p>{featuredItem.description}</p>
              <div className="solutions-overview__fit">
                <span>{fitLabel}</span>
                <p>{featuredItem.forWhom}</p>
              </div>
              <div className="solutions-overview__chips">
                {featuredItem.capabilities.slice(0, 3).map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>
              <AppLink href={`#${featuredItem.id}`} className="button button--ghost">
                {cardCta}
              </AppLink>
            </article>
          ) : null}
          <div className="solutions-overview__supporting">
            {supportingItems.map((item) => (
              <article key={item.id} className="solutions-overview__support-card">
                <p className="solutions-overview__card-label">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="solutions-overview__value">{item.value}</p>
                <p>{item.forWhom}</p>
                <div className="solutions-overview__chips">
                  <span>{item.useCases[0]}</span>
                  <span>{item.integrations[0]}</span>
                </div>
                <AppLink href={`#${item.id}`} className="text-link">
                  {cardCta}
                </AppLink>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

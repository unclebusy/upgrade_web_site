import { useEffect, useMemo, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CaseStudiesSection() {
  const { content, locale } = useSiteContent();
  const { caseStudiesPage } = content;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const allLabel = locale === 'ru' ? 'Все' : 'All';
  const labels =
    locale === 'ru'
      ? {
          challenge: 'Задача',
          solution: 'Решение',
          scope: 'Объем работ',
          integrations: 'Интеграции',
          timeline: 'Сроки',
          outcome: 'Результат',
          details: 'Показать детали реализации',
        }
      : {
          challenge: 'Challenge',
          solution: 'Solution',
          scope: 'Scope',
          integrations: 'Integrations',
          timeline: 'Timeline',
          outcome: 'Outcome',
          details: 'View delivery details',
        };
  const categories = useMemo(
    () => [allLabel, ...new Set(caseStudiesPage.items.map((item) => item.category))],
    [allLabel, caseStudiesPage.items],
  );
  const visibleItems = caseStudiesPage.items.filter(
    (item) => activeCategory === allLabel || item.category === activeCategory,
  );
  const featuredItem = visibleItems[0];
  const supportingItems = visibleItems.slice(1, 4);

  useEffect(() => {
    setActiveCategory(allLabel);
  }, [allLabel]);

  return (
    <SectionWrapper id={caseStudiesPage.id} surface="muted">
      <SectionHeading
        eyebrow={caseStudiesPage.eyebrow}
        title={caseStudiesPage.title}
        description={caseStudiesPage.description}
      />
      {caseStudiesPage.proofIntro ? <p className="case-library__intro">{caseStudiesPage.proofIntro}</p> : null}
      <div className="case-filters" aria-label="Case study filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`case-filter ${category === activeCategory ? 'case-filter--active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="case-library case-library--featured">
        {featuredItem ? (
          <article key={featuredItem.title} className="case-card case-card--featured">
            {featuredItem.image ? (
              <div className="card-media">
                <img src={featuredItem.image.src} alt={featuredItem.image.alt} />
              </div>
            ) : null}
            <div className="case-card__content">
              <div className="case-card__header">
                <p className="info-card__accent">{featuredItem.category}</p>
                <h3>{featuredItem.title}</h3>
                <p className="case-card__profile">{featuredItem.profile}</p>
                <p>{featuredItem.description}</p>
                {featuredItem.buyerContext ? (
                  <p className="case-card__context">{featuredItem.buyerContext}</p>
                ) : null}
              </div>
              <div className="case-card__summary">
                <span>{labels.timeline}: {featuredItem.timeline}</span>
                {featuredItem.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <div className="case-card__grid">
                <div>
                  <p className="case-card__label">{labels.challenge}</p>
                  <p>{featuredItem.challenge}</p>
                </div>
                <div>
                  <p className="case-card__label">{labels.solution}</p>
                  <p>{featuredItem.solution}</p>
                </div>
                <div>
                  <p className="case-card__label">{labels.scope}</p>
                  <ul className="case-card__list">
                    {featuredItem.scope.map((scopeItem) => (
                      <li key={scopeItem}>{scopeItem}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-card__label">{labels.integrations}</p>
                  <ul className="case-card__list">
                    {featuredItem.integrations.map((integration) => (
                      <li key={integration}>{integration}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-card__label">{labels.outcome}</p>
                  <p>{featuredItem.outcome}</p>
                </div>
              </div>
              {caseStudiesPage.ctaLabel ? (
                <AppLink href="/contact" className="button button--ghost">
                  {caseStudiesPage.ctaLabel}
                </AppLink>
              ) : null}
            </div>
          </article>
        ) : null}
        {supportingItems.length ? (
          <div className="case-library__supporting">
            {supportingItems.map((item) => (
              <article key={item.title} className="case-card case-card--supporting">
                {item.image ? (
                  <div className="card-media">
                    <img src={item.image.src} alt={item.image.alt} />
                  </div>
                ) : null}
                <div className="case-card__content">
                  <div className="case-card__header">
                    <p className="info-card__accent">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p className="case-card__profile">{item.profile}</p>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="case-card__summary">
                    <span>{labels.timeline}: {item.timeline}</span>
                    {item.metrics.slice(0, 2).map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                  <p className="case-card__outcome">
                    <strong>{labels.outcome}:</strong> {item.outcome}
                  </p>
                  <details className="case-card__details">
                    <summary>{labels.details}</summary>
                    <div className="case-card__detail-stack">
                      {item.buyerContext ? <p className="case-card__context">{item.buyerContext}</p> : null}
                      <div>
                        <p className="case-card__label">{labels.solution}</p>
                        <p>{item.solution}</p>
                      </div>
                      <div>
                        <p className="case-card__label">{labels.integrations}</p>
                        <ul className="case-card__list">
                          {item.integrations.map((integration) => (
                            <li key={integration}>{integration}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                  {caseStudiesPage.ctaLabel ? (
                    <AppLink href="/contact" className="button button--ghost">
                      {caseStudiesPage.ctaLabel}
                    </AppLink>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}

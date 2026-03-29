import { useEffect, useMemo, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
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
        }
      : {
          challenge: 'Challenge',
          solution: 'Solution',
          scope: 'Scope',
          integrations: 'Integrations',
          timeline: 'Timeline',
          outcome: 'Outcome',
        };
  const categories = useMemo(
    () => [allLabel, ...new Set(caseStudiesPage.items.map((item) => item.category))],
    [allLabel, caseStudiesPage.items],
  );
  const visibleItems = caseStudiesPage.items.filter(
    (item) => activeCategory === allLabel || item.category === activeCategory,
  );

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
      <div className="case-library">
        {visibleItems.map((item) => (
          <article key={item.title} className="case-card">
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
                <p>{item.description}</p>
              </div>
              <div className="case-card__grid">
                <div>
                  <p className="case-card__label">{labels.challenge}</p>
                  <p>{item.challenge}</p>
                </div>
                <div>
                  <p className="case-card__label">{labels.solution}</p>
                  <p>{item.solution}</p>
                </div>
                <div>
                  <p className="case-card__label">{labels.scope}</p>
                  <ul className="case-card__list">
                    {item.scope.map((scopeItem) => (
                      <li key={scopeItem}>{scopeItem}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-card__label">{labels.integrations}</p>
                  <ul className="case-card__list">
                    {item.integrations.map((integration) => (
                      <li key={integration}>{integration}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-card__label">{labels.timeline}</p>
                  <p>{item.timeline}</p>
                </div>
                <div>
                  <p className="case-card__label">{labels.outcome}</p>
                  <p>{item.outcome}</p>
                </div>
              </div>
              <div className="case-card__metrics">
                {item.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

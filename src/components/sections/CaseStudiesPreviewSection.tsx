import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CaseStudiesPreviewSection() {
  const { content, locale } = useSiteContent();
  const { caseStudiesPage } = content;
  const visibleItems = caseStudiesPage.items.slice(0, 3);
  const labels =
    locale === 'ru'
      ? { timeline: 'Сроки', outcome: 'Результат' }
      : { timeline: 'Timeline', outcome: 'Outcome' };
  const defaultCta = locale === 'ru' ? 'Смотреть кейсы' : 'View case studies';

  return (
    <SectionWrapper id={caseStudiesPage.id} surface="muted" className="case-preview-section">
      <SectionHeading
        eyebrow={caseStudiesPage.eyebrow}
        title={caseStudiesPage.title}
        description={caseStudiesPage.description}
      />
      <div className="case-preview__grid">
        {visibleItems.map((item) => (
          <article key={item.title} className="case-preview__card case-card">
            {item.image ? (
              <div className="card-media">
                <img src={item.image.src} alt={item.image.alt} />
              </div>
            ) : null}
            <div className="case-card__content">
              <p className="case-card__label">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="case-card__profile">{item.profile}</p>
              <p>{item.challenge}</p>
              <div className="case-card__metrics">
                <span>{labels.timeline}: {item.timeline}</span>
                {item.metrics.slice(0, 2).map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <p className="case-preview__outcome">
                <strong>{labels.outcome}:</strong> {item.outcome}
              </p>
              <AppLink href="/case-studies" className="button button--ghost">
                {caseStudiesPage.ctaLabel ?? defaultCta}
              </AppLink>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

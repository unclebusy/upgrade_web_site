import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CaseStudiesPreviewSection() {
  const { content, locale } = useSiteContent();
  const { caseStudiesPage } = content;
  const [featured, ...rest] = caseStudiesPage.items;
  const secondary = rest.slice(0, 2);
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
      <div className="case-preview">
        <article className="case-preview__featured case-card">
          {featured.image ? (
            <div className="card-media">
              <img src={featured.image.src} alt={featured.image.alt} />
            </div>
          ) : null}
          <div className="case-card__content">
            <p className="info-card__accent">{featured.category}</p>
            <h3>{featured.title}</h3>
            <p className="case-card__profile">{featured.profile}</p>
            <p>{featured.challenge}</p>
            <div className="case-card__metrics">
              <span>{featured.timeline}</span>
              {featured.metrics.slice(0, 2).map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
            <p className="case-card__context">
              <strong>{labels.outcome}:</strong> {featured.outcome}
            </p>
            <AppLink href="/case-studies" className="button button--ghost">
              {caseStudiesPage.ctaLabel ?? defaultCta}
            </AppLink>
          </div>
        </article>
        <div className="case-preview__grid">
          {secondary.map((item) => (
            <article key={item.title} className="case-preview__card case-card">
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
                <p className="case-preview__outcome">{item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

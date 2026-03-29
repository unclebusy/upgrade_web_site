import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function HomeSolutionsPreviewSection() {
  const { content, locale } = useSiteContent();
  const { solutions } = content;
  const title =
    locale === 'ru'
      ? 'Банковские решения, собранные в понятную продуктовую систему'
      : 'Banking solutions arranged as a clear product system';
  const description =
    locale === 'ru'
      ? 'Секция должна быстро показать, куда идти дальше: одна ключевая платформа и четыре связанные solution-направления. Полная детализация остаётся на странице Solutions.'
      : 'Use the homepage to find the right product path quickly: one foundational platform supported by four connected solution areas. Full detail stays on the Solutions page.';
  const sectionCtaLabel = locale === 'ru' ? 'Все решения' : 'View all solutions';
  const featuredCtaLabel = locale === 'ru' ? 'Смотреть платформу' : 'Explore platform';
  const cardCtaLabel = locale === 'ru' ? 'Смотреть решение' : 'View solution';
  const fitLabel = locale === 'ru' ? 'Оптимально для' : 'Best fit';
  const featuredItem = solutions.items.find((item) => item.id === 'core-banking');
  const supportingItems = solutions.items.filter((item) => item.id !== 'core-banking');

  return (
    <SectionWrapper id={solutions.id} className="solutions-preview-section">
      <div className="solutions-preview__intro">
        <SectionHeading
          eyebrow={solutions.eyebrow}
          title={title}
          description={description}
        />
        <AppLink href="/solutions" className="button button--ghost solutions-preview__section-cta">
          {sectionCtaLabel}
        </AppLink>
      </div>
      <div className="solutions-preview__layout">
        {featuredItem ? (
          <AppLink
            href={`/solutions#${featuredItem.id}`}
            className="solutions-preview__card solutions-preview__featured"
            ariaLabel={`${featuredCtaLabel}: ${featuredItem.title}`}
          >
            <div className="solutions-preview__card-top">
              <p className="solutions-preview__category">{featuredItem.category}</p>
              <h3>{featuredItem.title}</h3>
              <p className="solutions-preview__value">{featuredItem.value}</p>
              <p className="solutions-preview__support">{featuredItem.description}</p>
            </div>
            <div className="solutions-preview__featured-body">
              <p className="solutions-preview__meta-label">{fitLabel}</p>
              <p className="solutions-preview__meta">{featuredItem.forWhom}</p>
              <div className="solutions-preview__chips">
                {featuredItem.capabilities.slice(0, 3).map((capability) => (
                  <span key={capability} className="solutions-preview__chip">
                    {capability}
                  </span>
                ))}
              </div>
            </div>
            <div className="solutions-preview__footer">
              <span className="solutions-preview__cta">{featuredCtaLabel}</span>
            </div>
          </AppLink>
        ) : null}
        <div className="solutions-preview__grid">
          {supportingItems.map((item) => (
            <AppLink
              key={item.id}
              href={`/solutions#${item.id}`}
              className="solutions-preview__card solutions-preview__supporting-card"
              ariaLabel={`${cardCtaLabel}: ${item.title}`}
            >
              <div className="solutions-preview__card-top">
                <p className="solutions-preview__category">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="solutions-preview__value">{item.value}</p>
              </div>
              <div className="solutions-preview__supporting-body">
                <span className="solutions-preview__chip solutions-preview__chip--muted">
                  {item.useCases[0]}
                </span>
                <p className="solutions-preview__meta">{item.forWhom}</p>
              </div>
              <div className="solutions-preview__footer">
                <span className="solutions-preview__cta">{cardCtaLabel}</span>
              </div>
            </AppLink>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

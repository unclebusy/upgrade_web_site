import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function HomeSolutionsPreviewSection() {
  const { content, locale } = useSiteContent();
  const { solutions } = content;
  const forWhomLabel = locale === 'ru' ? 'Для кого' : 'For whom';
  const title =
    locale === 'ru'
      ? 'Краткий обзор продуктовых банковских решений'
      : 'Productized banking solutions preview';
  const description =
    locale === 'ru'
      ? 'Главная должна быстро показать релевантное продуктовое направление. Полная capability-, integration- и rollout-детализация остаётся на странице Solutions.'
      : 'Use the homepage to identify the relevant product path quickly. Move into the dedicated Solutions page for full capability, integration, and rollout detail.';

  return (
    <SectionWrapper id={solutions.id} className="solutions-preview-section">
      <SectionHeading
        eyebrow={solutions.eyebrow}
        title={title}
        description={description}
      />
      <div className="solutions-preview__grid">
        {solutions.items.map((item) => (
          <article key={item.id} className="solutions-preview__card">
            <p className="solutions-preview__category">{item.category}</p>
            <h3>{item.title}</h3>
            <p className="solutions-preview__value">{item.value}</p>
            <p className="solutions-preview__meta">
              <strong>{forWhomLabel}:</strong> {item.forWhom}
            </p>
            <AppLink href={item.action.href} className="text-link">
              {item.action.label}
            </AppLink>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

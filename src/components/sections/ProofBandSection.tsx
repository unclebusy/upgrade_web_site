import { useSiteContent } from '../../context/SiteContentContext';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ProofBandSection() {
  const { content, locale } = useSiteContent();
  const { metrics, trust } = content;
  const trustItems = trust.items.slice(0, 3);
  const eyebrow = locale === 'ru' ? 'Почему нам доверяют' : 'Why buyers trust us';
  const title =
    locale === 'ru'
      ? 'Доказательства поданы компактно, а не размазаны по всей главной.'
      : 'Keep the proof compact instead of spreading it across the whole homepage.';

  return (
    <SectionWrapper className="proof-band-section" surface="muted">
      <div className="proof-band">
        <div className="proof-band__intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{metrics.description}</p>
        </div>
        <div className="proof-band__stats" aria-label={metrics.title}>
          {metrics.items.map((item) => (
            <article key={item.label} className="proof-band__stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
        <div className="proof-band__signals">
          {trustItems.map((item) => (
            <article key={item.title} className="proof-band__signal">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

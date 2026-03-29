import { useSiteContent } from '../../context/SiteContentContext';
import { SectionWrapper } from '../ui/SectionWrapper';

export function MetricsStripSection() {
  const { content } = useSiteContent();
  const { metrics } = content;

  return (
    <SectionWrapper id={metrics.id} className="metrics-strip-section">
      <div className="metrics-strip" aria-label={metrics.title}>
        {metrics.items.map((item) => (
          <article key={item.label} className="metrics-strip__item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

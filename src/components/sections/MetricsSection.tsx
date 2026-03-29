import { useSiteContent } from '../../context/SiteContentContext';
import { MetricCard } from '../ui/MetricCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function MetricsSection() {
  const { content } = useSiteContent();
  const { metrics } = content;

  return (
    <SectionWrapper id={metrics.id}>
      <SectionHeading
        eyebrow={metrics.eyebrow}
        title={metrics.title}
        description={metrics.description}
      />
      <div className="metrics-grid">
        {metrics.items.map((item, index) => (
          <MetricCard
            key={item.label}
            item={item}
            variant={index === 0 ? 'feature' : 'default'}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

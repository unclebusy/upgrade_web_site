import { MetricItem } from '../../types/content';

type MetricCardProps = {
  item: MetricItem;
  variant?: 'default' | 'feature';
};

export function MetricCard({
  item,
  variant = 'default',
}: MetricCardProps) {
  return (
    <article className={`metric-card metric-card--${variant}`}>
      <p className="metric-card__value">{item.value}</p>
      <h3>{item.label}</h3>
      <p>{item.description}</p>
    </article>
  );
}

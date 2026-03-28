import { ReactNode } from 'react';

type InfoCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  accent?: string;
  variant?: 'default' | 'feature' | 'compact' | 'signal';
  className?: string;
};

export function InfoCard({
  title,
  description,
  children,
  accent,
  variant = 'default',
  className = '',
}: InfoCardProps) {
  return (
    <article className={`info-card info-card--${variant} ${className}`.trim()}>
      {accent ? <p className="info-card__accent">{accent}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  );
}

import { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: 'default' | 'muted' | 'accent';
};

export function SectionWrapper({
  id,
  children,
  className = '',
  surface = 'default',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section section--${surface} ${className}`.trim()}
    >
      <div className="container">{children}</div>
    </section>
  );
}

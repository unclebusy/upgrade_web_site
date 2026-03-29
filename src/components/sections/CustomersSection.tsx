import { useSiteContent } from '../../context/SiteContentContext';
import { LogoGrid } from '../ui/LogoGrid';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CustomersSection() {
  const { content, locale } = useSiteContent();
  const { customers } = content;
  const scopeLabel = locale === 'ru' ? 'Объем' : 'Scope';
  const domainLabel = locale === 'ru' ? 'Домен' : 'Domain';
  const resultLabel = locale === 'ru' ? 'Результат' : 'Result';

  return (
    <SectionWrapper id={customers.id}>
      <SectionHeading
        eyebrow={customers.eyebrow}
        title={customers.title}
        description={customers.description}
        align="center"
      />
      <LogoGrid items={customers.items} />
      {customers.proofCards ? (
        <div className="proof-grid">
          {customers.proofCards.map((card) => (
            <article key={card.title} className="proof-card">
              <h3>{card.title}</h3>
              <p><strong>{scopeLabel}:</strong> {card.scope}</p>
              <p><strong>{domainLabel}:</strong> {card.domain}</p>
              <p><strong>{resultLabel}:</strong> {card.result}</p>
            </article>
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}

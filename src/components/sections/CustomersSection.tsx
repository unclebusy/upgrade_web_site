import { useSiteContent } from '../../context/SiteContentContext';
import { LogoGrid } from '../ui/LogoGrid';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CustomersSection() {
  const { content, locale } = useSiteContent();
  const { customers } = content;
  const clientTypeLabel = locale === 'ru' ? 'Тип клиента' : 'Client type';
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
        <>
          {customers.proofIntro ? <p className="proof-intro">{customers.proofIntro}</p> : null}
          <div className="proof-grid">
            {customers.proofCards.map((card) => (
              <article key={card.title} className="proof-card">
                <p className="proof-card__eyebrow">{card.title}</p>
                <h3>{card.clientType}</h3>
                <p><strong>{scopeLabel}:</strong> {card.scope}</p>
                <p><strong>{domainLabel}:</strong> {card.domain}</p>
                <p><strong>{resultLabel}:</strong> {card.result}</p>
                <div className="proof-card__metrics" aria-label={clientTypeLabel}>
                  {card.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </>
      ) : null}
    </SectionWrapper>
  );
}

import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { LogoGrid } from '../ui/LogoGrid';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CustomersSection() {
  const { content, locale } = useSiteContent();
  const { customers } = content;
  const scopeLabel = locale === 'ru' ? 'Объем' : 'Scope';
  const domainLabel = locale === 'ru' ? 'Домен' : 'Domain';
  const resultLabel = locale === 'ru' ? 'Результат' : 'Result';
  const evidenceTitle =
    locale === 'ru'
      ? 'Логотипы работают только вместе с коротким delivery evidence.'
      : 'Logos only work when paired with short delivery evidence.';
  const ctaLabel = locale === 'ru' ? 'Перейти к кейсам' : 'Go to case studies';

  return (
    <SectionWrapper id={customers.id} className="customers-evidence-section">
      <div className="customers-evidence__intro">
        <SectionHeading
          eyebrow={customers.eyebrow}
          title={customers.title}
          description={customers.description}
        />
        <div className="customers-evidence__summary">
          <h3>{evidenceTitle}</h3>
          <p>{customers.proofIntro}</p>
          <AppLink href="/case-studies" className="button button--ghost">
            {ctaLabel}
          </AppLink>
        </div>
      </div>
      <div className="customers-evidence__logos">
        <LogoGrid items={customers.items} />
      </div>
      {customers.proofCards ? (
        <div className="customers-evidence__cards">
          {customers.proofCards.map((card) => (
            <article key={card.title} className="customer-proof">
              <div className="customer-proof__header">
                <p className="customer-proof__eyebrow">{card.title}</p>
                <h3>{card.clientType}</h3>
              </div>
              <div className="customer-proof__meta">
                <span>{scopeLabel}: {card.scope}</span>
                <span>{domainLabel}: {card.domain}</span>
              </div>
              <p className="customer-proof__result">
                <strong>{resultLabel}:</strong> {card.result}
              </p>
              <div className="customer-proof__chips">
                {card.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}

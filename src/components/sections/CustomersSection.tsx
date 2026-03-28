import { useSiteContent } from '../../context/SiteContentContext';
import { LogoGrid } from '../ui/LogoGrid';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CustomersSection() {
  const { content } = useSiteContent();
  const { customers } = content;

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
              <p><strong>Scope:</strong> {card.scope}</p>
              <p><strong>Domain:</strong> {card.domain}</p>
              <p><strong>Result:</strong> {card.result}</p>
            </article>
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}

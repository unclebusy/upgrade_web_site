import { useSiteContent } from '../../context/SiteContentContext';
import { CtaButtons } from '../ui/CtaButtons';
import { SectionWrapper } from '../ui/SectionWrapper';

export function FinalCtaSection() {
  const { content } = useSiteContent();
  const { finalCta } = content;

  return (
    <SectionWrapper id={finalCta.id} surface="accent">
      <div className="final-cta">
        <p className="eyebrow">{finalCta.eyebrow}</p>
        <h2>{finalCta.title}</h2>
        <p>{finalCta.description}</p>
        <CtaButtons actions={finalCta.actions} />
      </div>
    </SectionWrapper>
  );
}

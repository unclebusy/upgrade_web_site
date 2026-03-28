import { useSiteContent } from '../../context/SiteContentContext';
import { LogoGrid } from '../ui/LogoGrid';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function PartnersSection() {
  const { content } = useSiteContent();
  const { partners } = content;

  return (
    <SectionWrapper id={partners.id} surface="muted">
      <SectionHeading
        eyebrow={partners.eyebrow}
        title={partners.title}
        description={partners.description}
        align="center"
      />
      <LogoGrid items={partners.items} />
    </SectionWrapper>
  );
}

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
    </SectionWrapper>
  );
}

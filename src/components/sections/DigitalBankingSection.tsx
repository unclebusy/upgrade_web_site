import { useSiteContent } from '../../context/SiteContentContext';
import { ProductHighlight } from '../ui/ProductHighlight';
import { SectionWrapper } from '../ui/SectionWrapper';

export function DigitalBankingSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper id={content.digitalBanking.id}>
      <ProductHighlight content={content.digitalBanking} reversed tone="digital" />
    </SectionWrapper>
  );
}

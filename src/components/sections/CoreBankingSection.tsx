import { useSiteContent } from '../../context/SiteContentContext';
import { ProductHighlight } from '../ui/ProductHighlight';
import { SectionWrapper } from '../ui/SectionWrapper';

export function CoreBankingSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper id={content.coreBanking.id} surface="accent">
      <ProductHighlight content={content.coreBanking} tone="core" />
    </SectionWrapper>
  );
}

import { useSiteContent } from '../../context/SiteContentContext';
import { ProductHighlight } from '../ui/ProductHighlight';
import { SectionWrapper } from '../ui/SectionWrapper';

export function PaymentsSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper id={content.payments.id}>
      <ProductHighlight content={content.payments} reversed tone="payments" />
    </SectionWrapper>
  );
}

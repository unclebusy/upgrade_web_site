import { useSiteContent } from '../../context/SiteContentContext';
import { ProductHighlight } from '../ui/ProductHighlight';
import { SectionWrapper } from '../ui/SectionWrapper';

export function NotificationSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper id={content.notifications.id} surface="muted">
      <ProductHighlight content={content.notifications} tone="notifications" />
    </SectionWrapper>
  );
}

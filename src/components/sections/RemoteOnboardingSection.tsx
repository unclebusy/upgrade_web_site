import { useSiteContent } from '../../context/SiteContentContext';
import { ProductHighlight } from '../ui/ProductHighlight';
import { SectionWrapper } from '../ui/SectionWrapper';

export function RemoteOnboardingSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper id={content.remoteOnboarding.id} surface="muted">
      <ProductHighlight content={content.remoteOnboarding} tone="onboarding" />
    </SectionWrapper>
  );
}

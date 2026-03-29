import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function InfrastructurePage() {
  return (
    <>
      <PageIntroSection page="infrastructure" />
      <InfrastructureSection />
    </>
  );
}

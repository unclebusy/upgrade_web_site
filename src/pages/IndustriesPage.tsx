import { IndustriesSection } from '../components/sections/IndustriesSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function IndustriesPage() {
  return (
    <>
      <PageIntroSection page="industries" />
      <IndustriesSection />
    </>
  );
}

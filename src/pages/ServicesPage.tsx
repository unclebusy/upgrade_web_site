import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { ServicesSection } from '../components/sections/ServicesSection';

export function ServicesPage() {
  return (
    <>
      <PageIntroSection page="servicesPage" />
      <ServicesSection />
      <FinalCtaSection />
    </>
  );
}

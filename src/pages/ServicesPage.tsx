import { AdvantagesSection } from '../components/sections/AdvantagesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { ServicesSection } from '../components/sections/ServicesSection';

export function ServicesPage() {
  return (
    <>
      <PageIntroSection page="servicesPage" />
      <ServicesSection />
      <AdvantagesSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

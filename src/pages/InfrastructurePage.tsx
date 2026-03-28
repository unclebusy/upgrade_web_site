import { ContactSection } from '../components/sections/ContactSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export function InfrastructurePage() {
  return (
    <>
      <PageIntroSection page="infrastructure" />
      <InfrastructureSection />
      <CustomersSection />
      <PartnersSection />
      <TechStackSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

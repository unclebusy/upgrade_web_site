import { ContactSection } from '../components/sections/ContactSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { PartnersSection } from '../components/sections/PartnersSection';

export function CustomersPage() {
  return (
    <>
      <PageIntroSection page="customers" />
      <CustomersSection />
      <PartnersSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

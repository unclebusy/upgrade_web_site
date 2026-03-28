import { ContactSection } from '../components/sections/ContactSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function IndustriesPage() {
  return (
    <>
      <PageIntroSection page="industries" />
      <IndustriesSection />
      <CustomersSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

import { ContactSection } from '../components/sections/ContactSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export function PartnersPage() {
  return (
    <>
      <PageIntroSection page="partners" />
      <PartnersSection />
      <TechStackSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

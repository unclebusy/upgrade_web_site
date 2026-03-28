import { ContactSection } from '../components/sections/ContactSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export function TechnologyPage() {
  return (
    <>
      <PageIntroSection page="technology" />
      <TechStackSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

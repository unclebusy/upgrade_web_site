import { JourneySection } from '../components/sections/JourneySection';
import { CaseStudiesPreviewSection } from '../components/sections/CaseStudiesPreviewSection';
import { ContactEntrySection } from '../components/sections/ContactEntrySection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeSolutionsPreviewSection } from '../components/sections/HomeSolutionsPreviewSection';
import { ProofBandSection } from '../components/sections/ProofBandSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <HomeSolutionsPreviewSection />
      <ProofBandSection />
      <CaseStudiesPreviewSection />
      <FinalCtaSection />
      <ContactEntrySection />
    </>
  );
}

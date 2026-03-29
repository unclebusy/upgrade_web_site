import { ContactSection } from '../components/sections/ContactSection';
import { JourneySection } from '../components/sections/JourneySection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { CaseStudiesPreviewSection } from '../components/sections/CaseStudiesPreviewSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeSolutionsPreviewSection } from '../components/sections/HomeSolutionsPreviewSection';
import { HomeJumpLinksSection } from '../components/sections/HomeJumpLinksSection';
import { MetricsStripSection } from '../components/sections/MetricsStripSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeJumpLinksSection />
      <JourneySection />
      <MetricsStripSection />
      <HomeSolutionsPreviewSection />
      <CustomersSection />
      <WhyChooseSection />
      <CaseStudiesPreviewSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

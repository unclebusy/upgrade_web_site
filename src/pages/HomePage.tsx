import { ContactSection } from '../components/sections/ContactSection';
import { JourneySection } from '../components/sections/JourneySection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeJumpLinksSection } from '../components/sections/HomeJumpLinksSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { AdvantagesSection } from '../components/sections/AdvantagesSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeJumpLinksSection />
      <MetricsSection />
      <JourneySection />
      <AdvantagesSection />
      <SolutionsSection />
      <ServicesSection />
      <CustomersSection />
      <CaseStudiesSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

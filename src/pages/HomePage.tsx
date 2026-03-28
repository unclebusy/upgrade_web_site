import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <CustomersSection />
      <PartnersSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}

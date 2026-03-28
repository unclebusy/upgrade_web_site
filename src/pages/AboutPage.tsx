import { AboutSection } from '../components/sections/AboutSection';
import { AdvantagesSection } from '../components/sections/AdvantagesSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export function AboutPage() {
  return (
    <>
      <PageIntroSection page="about" />
      <AboutSection />
      <MetricsSection />
      <AdvantagesSection />
      <CustomersSection />
      <PartnersSection />
      <TechStackSection />
    </>
  );
}

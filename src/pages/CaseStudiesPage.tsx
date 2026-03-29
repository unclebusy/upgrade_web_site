import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function CaseStudiesPage() {
  return (
    <>
      <PageIntroSection page="caseStudies" />
      <CaseStudiesSection />
    </>
  );
}

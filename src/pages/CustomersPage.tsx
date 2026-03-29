import { CustomersSection } from '../components/sections/CustomersSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function CustomersPage() {
  return (
    <>
      <PageIntroSection page="customers" />
      <CustomersSection />
    </>
  );
}

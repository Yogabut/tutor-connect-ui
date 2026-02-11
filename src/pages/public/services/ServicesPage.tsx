import { HeroSection } from './HeroSection';
import { ModesSection } from './ModesSection';
import { ServicesTabsSection } from './ServicesTabsSection';
import { PricingSection } from './PricingSection';

export function ServicesPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ModesSection />
      <ServicesTabsSection />
      <PricingSection />
    </div>
  );
}
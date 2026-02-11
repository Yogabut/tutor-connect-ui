import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { ServicesPreviewSection } from './ServicesPreviewSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
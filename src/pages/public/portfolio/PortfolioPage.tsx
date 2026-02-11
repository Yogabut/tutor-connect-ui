import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { TestimonialQuoteSection } from './TestimonialQuoteSection';
import { CTASection } from './CTASection';

export function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <SuccessStoriesSection />
      <TestimonialQuoteSection />
      <CTASection />
    </div>
  );
}
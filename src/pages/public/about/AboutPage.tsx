import { HeroSection } from './HeroSection';
import { StorySection } from './StorySection';
import { VisionMissionSection } from './VisionMissionSection';
import { ValuesSection } from './ValuesSection';
import { TeamSection } from './TeamSection';
import { CTASection } from './CTASection';

export function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StorySection />
      <VisionMissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
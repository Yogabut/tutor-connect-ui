import { HeroSection } from './HeroSection';
import { ContactSection } from './ContactSection';
import { FeedbackFormSection } from './FeedbackFormSection';

export function FeedbackPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactSection />
      <FeedbackFormSection />
    </div>
  );
}
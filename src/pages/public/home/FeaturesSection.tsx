import { SectionHeader } from '@/components/shared/SectionHeader';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { features } from '@/data/homeMockData';

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Mengapa Kami"
          title="Keunggulan Les Privat Kami"
          subtitle="Kami berkomitmen memberikan pengalaman belajar terbaik dengan berbagai keunggulan yang tidak Anda temukan di tempat lain."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
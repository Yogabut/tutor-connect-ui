import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { modes } from '@/data/servicesMockData';

export function ModesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Mode Pembelajaran"
          title="Pilih Cara Belajar Anda"
          subtitle="Kami menyediakan dua mode pembelajaran yang dapat Anda pilih sesuai kenyamanan."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <mode.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">{mode.title}</h3>
              <p className="text-muted-foreground mb-6">{mode.description}</p>
              <ul className="space-y-3">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
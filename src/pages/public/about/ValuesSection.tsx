import { SectionHeader } from '@/components/shared/SectionHeader';
import { values } from '@/data/aboutMockData';

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Nilai-Nilai Kami"
          title="Prinsip yang Kami Pegang Teguh"
          subtitle="Nilai-nilai ini menjadi landasan dalam setiap keputusan dan tindakan kami untuk memberikan layanan terbaik."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
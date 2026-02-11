import { SectionHeader } from '@/components/shared/SectionHeader';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/homeMockData';

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Testimoni"
          title="Apa Kata Mereka"
          subtitle="Dengarkan pengalaman langsung dari para siswa dan orang tua yang telah merasakan manfaat les privat bersama kami."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
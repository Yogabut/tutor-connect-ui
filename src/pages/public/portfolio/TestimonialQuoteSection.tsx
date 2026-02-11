export function TestimonialQuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-primary mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            Les privat ini benar-benar mengubah cara saya belajar. Tutor yang sabar dan metode yang tepat membuat saya bisa memahami konsep yang sebelumnya sangat sulit.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">RP</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Rania Putri</p>
              <p className="text-muted-foreground">Mahasiswa Kedokteran UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
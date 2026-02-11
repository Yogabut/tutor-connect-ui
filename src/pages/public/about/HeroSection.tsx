export function HeroSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
            Tentang Kami
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Mitra Terpercaya dalam Perjalanan Akademik Anda
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sejak 2023, kami telah membantu ratusan siswa meraih prestasi akademik terbaik mereka melalui pendekatan pembelajaran yang personal dan efektif.
          </p>
        </div>
      </div>
    </section>
  );
}
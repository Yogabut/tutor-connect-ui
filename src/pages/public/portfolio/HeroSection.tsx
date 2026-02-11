export function HeroSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
            Portfolio
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Kisah Sukses Siswa Kami
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Lihat bagaimana les privat kami telah membantu ratusan siswa meraih impian akademik mereka.
          </p>
        </div>
      </div>
    </section>
  );
}
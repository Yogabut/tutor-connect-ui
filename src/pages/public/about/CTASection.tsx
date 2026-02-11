import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Jadilah bagian dari ribuan siswa yang telah meraih kesuksesan bersama LesPrivat.
          </p>
          <Button size="xl" variant="hero" asChild>
            <Link to="/register">Mulai Sekarang</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
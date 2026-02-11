import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Siap Menjadi Kisah Sukses Berikutnya?
          </h2>
          <p className="text-lg text-muted-foreground">
            Bergabunglah dengan ribuan siswa yang telah merasakan manfaat les privat kami.
          </p>
          <Button size="xl" variant="hero" asChild>
            <Link to="/register">Mulai Perjalanan Anda</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
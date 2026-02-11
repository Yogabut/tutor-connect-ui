import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 lg:p-12 rounded-2xl shadow-xl border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                Harga Terjangkau, Kualitas Premium
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Kami percaya pendidikan berkualitas harus dapat diakses oleh semua kalangan. Dapatkan diskon hingga 20% untuk paket bulanan dan program grup.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Konsultasi awal gratis
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Garansi uang kembali 7 hari
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Cicilan 0% tersedia
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <Button size="xl" variant="hero" asChild>
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Atau hubungi kami di{' '}
                <a href="tel:+6281234567890" className="text-primary hover:underline">
                  0812-3456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
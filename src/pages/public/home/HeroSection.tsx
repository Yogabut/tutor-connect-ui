import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { stats } from '@/data/homeMockData';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Les Privat Terbaik #1 di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Raih{' '}
              <span className="text-gradient-hero">Prestasi Terbaik</span>{' '}
              Dengan Bimbingan Personal
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Tingkatkan kemampuan akademik bersama tutor profesional. Metode
              pembelajaran efektif yang disesuaikan dengan kebutuhan setiap siswa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" asChild>
                <Link to="/register">
                  Daftar Les Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/services">Lihat Layanan</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroImage}
                alt="Tutor mengajar siswa"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Nilai Meningkat</p>
                  <p className="text-xs text-muted-foreground">95% siswa sukses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
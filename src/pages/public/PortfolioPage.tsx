import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { Button } from '@/components/ui/button';
import { Trophy, Star, GraduationCap, Medal } from 'lucide-react';

const successStories = [
  {
    name: 'Rania Putri',
    school: 'SMA Negeri 3 Jakarta',
    achievement: 'Lolos SNBP Kedokteran UI 2024',
    subject: 'Matematika & Biologi',
    improvement: '+35 Poin',
  },
  {
    name: 'Ahmad Fauzan',
    school: 'SMA Negeri 1 Bandung',
    achievement: 'Juara 1 Olimpiade Fisika Provinsi',
    subject: 'Fisika',
    improvement: '+42 Poin',
  },
  {
    name: 'Jessica Wang',
    school: 'SMA Labschool Jakarta',
    achievement: 'IELTS Score 8.0',
    subject: 'Bahasa Inggris',
    improvement: '+3 Band',
  },
  {
    name: 'Muhammad Rizki',
    school: 'SMA Negeri 5 Surabaya',
    achievement: 'Lolos SNBP Teknik ITB',
    subject: 'Matematika & Fisika',
    improvement: '+40 Poin',
  },
  {
    name: 'Siti Aisyah',
    school: 'SMP Negeri 1 Yogyakarta',
    achievement: 'Peringkat 1 Paralel',
    subject: 'Matematika',
    improvement: '+28 Poin',
  },
  {
    name: 'Kevin Tanujaya',
    school: 'SMA Santa Ursula Jakarta',
    achievement: 'Diterima di NUS Singapore',
    subject: 'Semua Mapel',
    improvement: '+45 Poin',
  },
];

const achievements = [
  { icon: Trophy, value: '500+', label: 'Siswa Lulus PTN Favorit' },
  { icon: Medal, value: '50+', label: 'Juara Olimpiade' },
  { icon: Star, value: '98%', label: 'Nilai Meningkat' },
  { icon: GraduationCap, value: '1000+', label: 'Alumni Sukses' },
];

export function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
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

      {/* Stats */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Kisah Sukses"
            title="Mereka Sudah Membuktikan"
            subtitle="Setiap siswa memiliki cerita sukses yang berbeda. Berikut beberapa pencapaian luar biasa dari siswa-siswa kami."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {successStories.map((story) => (
              <PortfolioCard key={story.name} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
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

      {/* CTA */}
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
    </div>
  );
}

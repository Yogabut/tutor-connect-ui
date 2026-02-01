import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Award,
  Clock,
  BookOpen,
  Target,
  Star,
  ArrowRight,
  CheckCircle2,
  Calculator,
  FlaskConical,
  Languages,
  Atom,
  Leaf,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import heroImage from '@/assets/hero-image.jpg';

const features = [
  {
    icon: Users,
    title: 'Tutor Berpengalaman',
    description: 'Tim pengajar profesional dengan pengalaman minimal 5 tahun di bidang pendidikan.',
  },
  {
    icon: Target,
    title: 'Pembelajaran Personal',
    description: 'Metode belajar disesuaikan dengan kebutuhan dan gaya belajar setiap siswa.',
  },
  {
    icon: Clock,
    title: 'Jadwal Fleksibel',
    description: 'Atur jadwal les sesuai waktu luang Anda, termasuk akhir pekan.',
  },
  {
    icon: Award,
    title: 'Hasil Terjamin',
    description: 'Garansi peningkatan nilai atau uang kembali dalam 3 bulan pertama.',
  },
];

const services = [
  {
    icon: Calculator,
    title: 'Matematika',
    description: 'Dari aritmatika dasar hingga kalkulus tingkat lanjut.',
    price: 'Rp 150.000',
    features: ['SD - SMA', 'Online & Offline', '1.5 Jam/Sesi', 'Modul Latihan'],
  },
  {
    icon: FlaskConical,
    title: 'Fisika',
    description: 'Pemahaman konsep dan penerapan rumus fisika.',
    price: 'Rp 175.000',
    features: ['SMP - SMA', 'Online & Offline', '1.5 Jam/Sesi', 'Praktikum Virtual'],
    popular: true,
  },
  {
    icon: Languages,
    title: 'Bahasa Inggris',
    description: 'Speaking, writing, reading, dan grammar lengkap.',
    price: 'Rp 150.000',
    features: ['Semua Jenjang', 'Online & Offline', '1.5 Jam/Sesi', 'Conversation Practice'],
  },
];

const testimonials = [
  {
    name: 'Siti Rahma',
    role: 'Orang Tua Siswa SMA',
    content:
      'Nilai matematika anak saya naik drastis dari 65 menjadi 90 hanya dalam 2 bulan. Tutor sangat sabar dan metode pengajarannya mudah dipahami.',
    rating: 5,
  },
  {
    name: 'Ahmad Rizky',
    role: 'Siswa Kelas 12',
    content:
      'Berkat bimbingan dari LesPrivat, saya berhasil lolos SNBP di jurusan Teknik Informatika ITB. Terima kasih banyak!',
    rating: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Orang Tua Siswa SMP',
    content:
      'Anak saya jadi lebih percaya diri dalam belajar bahasa Inggris. Sekarang sudah bisa percakapan dasar dengan lancar.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Siswa Aktif' },
  { value: '50+', label: 'Tutor Profesional' },
  { value: '95%', label: 'Tingkat Kepuasan' },
  { value: '10+', label: 'Tahun Pengalaman' },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Mengapa Kami"
            title="Keunggulan Les Privat Kami"
            subtitle="Kami berkomitmen memberikan pengalaman belajar terbaik dengan berbagai keunggulan yang tidak Anda temukan di tempat lain."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Layanan Kami"
            title="Program Les Privat Unggulan"
            subtitle="Pilih program les yang sesuai dengan kebutuhan belajar Anda. Semua program dilengkapi dengan materi lengkap dan tutor berpengalaman."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Siap Meningkatkan Prestasi Akademik?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Daftarkan diri Anda sekarang dan dapatkan sesi konsultasi gratis untuk menentukan program les yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="xl" variant="accent" asChild>
                <Link to="/register">
                  Daftar Sekarang - Gratis!
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/feedback">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

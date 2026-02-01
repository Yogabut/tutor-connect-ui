import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  BookOpen,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { StatsCard } from '@/components/shared/StatsCard';

const values = [
  {
    icon: Heart,
    title: 'Dedikasi Tinggi',
    description: 'Kami berkomitmen penuh untuk kesuksesan setiap siswa yang kami bimbing.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Pembelajaran',
    description: 'Metode pengajaran yang terus berkembang mengikuti perkembangan zaman.',
  },
  {
    icon: Users,
    title: 'Pendekatan Personal',
    description: 'Memahami keunikan setiap siswa dan menyesuaikan metode pengajaran.',
  },
  {
    icon: Trophy,
    title: 'Berorientasi Hasil',
    description: 'Fokus pada peningkatan nyata dalam prestasi akademik siswa.',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Siswa Aktif' },
  { icon: GraduationCap, value: '50+', label: 'Tutor Profesional' },
  { icon: Award, value: '95%', label: 'Tingkat Kepuasan' },
  { icon: BookOpen, value: '10+', label: 'Tahun Pengalaman' },
];

const team = [
  {
    name: 'Dr. Andi Wijaya',
    role: 'Founder & Head Tutor',
    bio: 'PhD Pendidikan dari Universitas Indonesia dengan 15 tahun pengalaman mengajar.',
  },
  {
    name: 'Sarah Putri, M.Pd',
    role: 'Academic Director',
    bio: 'Spesialis kurikulum dengan pengalaman di berbagai sekolah internasional.',
  },
  {
    name: 'Budi Santoso, S.Si',
    role: 'Lead Science Tutor',
    bio: 'Juara olimpiade sains nasional dan mentor berbagai kompetisi sains.',
  },
];

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
              Sejak 2014, kami telah membantu ribuan siswa meraih prestasi akademik terbaik mereka melalui pendekatan pembelajaran yang personal dan efektif.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Cerita Kami"
                title="Perjalanan Membangun Pendidikan Berkualitas"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LesPrivat didirikan pada tahun 2014 oleh Dr. Andi Wijaya, seorang akademisi yang melihat kesenjangan antara kebutuhan belajar siswa dan metode pengajaran konvensional di sekolah.
                </p>
                <p>
                  Berawal dari keinginan untuk memberikan pendampingan belajar yang lebih personal, kami mulai dengan hanya 3 tutor dan 10 siswa. Kini, kami telah berkembang menjadi platform les privat terdepan dengan lebih dari 50 tutor profesional.
                </p>
                <p>
                  Keberhasilan kami diukur dari keberhasilan siswa-siswa kami. Dengan tingkat kepuasan 95% dan ribuan alumni yang berhasil menembus universitas impian mereka, kami terus berkomitmen untuk memberikan yang terbaik.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi platform les privat terdepan di Indonesia yang memberdayakan setiap siswa untuk mencapai potensi akademik maksimal mereka melalui pendidikan berkualitas dan pendekatan personal.
              </p>
            </div>
            <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Menyediakan tutor berkualitas tinggi dengan pengalaman mengajar terbukti
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Mengembangkan metode pembelajaran inovatif yang disesuaikan dengan kebutuhan siswa
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Menciptakan lingkungan belajar yang nyaman dan mendukung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Nilai-Nilai Kami"
            title="Prinsip yang Kami Pegang Teguh"
            subtitle="Nilai-nilai ini menjadi landasan dalam setiap keputusan dan tindakan kami untuk memberikan layanan terbaik."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Tim Kami"
            title="Dipimpin oleh Para Ahli"
            subtitle="Tim kami terdiri dari para profesional berpengalaman yang berdedikasi untuk kesuksesan siswa."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </div>
  );
}

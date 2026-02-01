import { Link } from 'react-router-dom';
import {
  Calculator,
  FlaskConical,
  Languages,
  Atom,
  Leaf,
  BookOpen,
  Monitor,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const allServices = [
  {
    icon: Calculator,
    title: 'Matematika',
    description: 'Dari aritmatika dasar hingga kalkulus tingkat lanjut untuk semua jenjang pendidikan.',
    price: 'Rp 150.000',
    features: ['SD - SMA/SMK', 'Online & Offline', '1.5 Jam/Sesi', 'Modul Latihan Lengkap', 'Try Out Berkala'],
    levels: ['sd', 'smp', 'sma'],
  },
  {
    icon: FlaskConical,
    title: 'Fisika',
    description: 'Pemahaman konsep mendalam dan penerapan rumus fisika dengan praktikum virtual.',
    price: 'Rp 175.000',
    features: ['SMP - SMA/SMK', 'Online & Offline', '1.5 Jam/Sesi', 'Praktikum Virtual', 'Persiapan Olimpiade'],
    popular: true,
    levels: ['smp', 'sma'],
  },
  {
    icon: Atom,
    title: 'Kimia',
    description: 'Penguasaan konsep kimia dari dasar hingga kimia organik tingkat lanjut.',
    price: 'Rp 175.000',
    features: ['SMA/SMK', 'Online & Offline', '1.5 Jam/Sesi', 'Lab Virtual', 'Soal SBMPTN'],
    levels: ['sma'],
  },
  {
    icon: Leaf,
    title: 'Biologi',
    description: 'Eksplorasi ilmu hayati dari sel hingga ekosistem dengan pendekatan visual.',
    price: 'Rp 150.000',
    features: ['SMP - SMA/SMK', 'Online & Offline', '1.5 Jam/Sesi', 'Visual Learning', 'Praktikum'],
    levels: ['smp', 'sma'],
  },
  {
    icon: Languages,
    title: 'Bahasa Inggris',
    description: 'Program komprehensif covering speaking, writing, reading, dan grammar.',
    price: 'Rp 150.000',
    features: ['Semua Jenjang', 'Online & Offline', '1.5 Jam/Sesi', 'Conversation Practice', 'Persiapan TOEFL/IELTS'],
    levels: ['sd', 'smp', 'sma'],
  },
  {
    icon: BookOpen,
    title: 'Bahasa Indonesia',
    description: 'Penguatan kemampuan berbahasa dan sastra Indonesia untuk ujian dan kompetisi.',
    price: 'Rp 125.000',
    features: ['Semua Jenjang', 'Online & Offline', '1.5 Jam/Sesi', 'Latihan Menulis', 'Persiapan UN'],
    levels: ['sd', 'smp', 'sma'],
  },
];

const modes = [
  {
    icon: Monitor,
    title: 'Les Online',
    description: 'Belajar dari mana saja dengan platform video call interaktif. Fleksibel dan efisien.',
    features: ['Video Call HD', 'Whiteboard Digital', 'Rekaman Sesi', 'Chat 24/7'],
  },
  {
    icon: Users,
    title: 'Les Offline',
    description: 'Pembelajaran tatap muka di rumah atau lokasi pilihan Anda untuk interaksi langsung.',
    features: ['Tutor ke Rumah', 'Jadwal Fleksibel', 'Praktikum Langsung', 'Area Jabodetabek'],
  },
];

export function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              Layanan Kami
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Program Les Privat untuk Setiap Kebutuhan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pilih mata pelajaran dan mode belajar yang sesuai dengan kebutuhan Anda. Semua program dilengkapi dengan materi lengkap dan tutor berpengalaman.
            </p>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Mode Pembelajaran"
            title="Pilih Cara Belajar Anda"
            subtitle="Kami menyediakan dua mode pembelajaran yang dapat Anda pilih sesuai kenyamanan."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {modes.map((mode) => (
              <div
                key={mode.title}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                  <mode.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{mode.title}</h3>
                <p className="text-muted-foreground mb-6">{mode.description}</p>
                <ul className="space-y-3">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Level */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Mata Pelajaran"
            title="Layanan per Jenjang Pendidikan"
            subtitle="Temukan program les yang sesuai dengan jenjang pendidikan Anda."
          />

          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="mx-auto flex justify-center mb-8">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="sd">SD</TabsTrigger>
              <TabsTrigger value="smp">SMP</TabsTrigger>
              <TabsTrigger value="sma">SMA/SMK</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </TabsContent>

            {['sd', 'smp', 'sma'].map((level) => (
              <TabsContent key={level} value={level}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allServices
                    .filter((s) => s.levels.includes(level))
                    .map((service) => (
                      <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Note */}
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
    </div>
  );
}

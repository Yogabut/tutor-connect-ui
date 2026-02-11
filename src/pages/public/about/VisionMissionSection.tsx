import { Target, BookOpen } from 'lucide-react';

export function VisionMissionSection() {
  return (
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
  );
}
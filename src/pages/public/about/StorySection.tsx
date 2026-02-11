import { SectionHeader } from '@/components/shared/SectionHeader';
import { StatsCard } from '@/components/shared/StatsCard';
import { stats } from '@/data/aboutMockData';

export function StorySection() {
  return (
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
                    Les Private Denpasar 1 adalah lembaga jasa mengajar home private yang berdiri sejak tahun 2023 dan berkomitmen menjadi solusi terbaik bagi kebutuhan les private ke rumah. Kami hadir untuk memberikan pengalaman belajar yang lebih nyaman, efektif, dan terarah bagi setiap siswa.
                  </p>
                  <p>
                    Dengan sistem pembelajaran langsung di rumah, kami memastikan setiap siswa mendapatkan perhatian penuh melalui pendekatan yang personal dan adaptif. Seluruh proses belajar dibimbing oleh tutor yang berpengalaman, profesional, dan terpercaya sesuai dengan kebutuhan akademik masing-masing siswa.
                  </p>
                  <p>
                    Kami percaya bahwa keberhasilan siswa adalah prioritas utama. Oleh karena itu, kami terus meningkatkan kualitas layanan, metode pembelajaran, serta standar profesionalisme tutor agar mampu membantu meningkatkan pemahaman, prestasi, dan kepercayaan diri siswa secara maksimal.
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
  );
}
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { successStories } from '@/data/portfolioMockData';

export function SuccessStoriesSection() {
  return (
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
  );
}
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { getAllServices } from '@/data/servicesMockData';

export function ServicesPreviewSection() {
  const allServices = getAllServices();
  // Ambil 3 services pertama untuk preview
  const previewServices = allServices.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Layanan Kami"
          title="Program Les Privat Unggulan"
          subtitle="Pilih program les yang sesuai dengan kebutuhan belajar Anda. Semua program dilengkapi dengan materi lengkap dan tutor berpengalaman."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {previewServices.map((service) => (
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
  );
}
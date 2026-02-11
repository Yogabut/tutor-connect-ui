import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { servicesByLevel, levelLabels, getAllServices } from '@/data/servicesMockData';

export function ServicesTabsSection() {
  const levels = Object.keys(servicesByLevel);

  return (
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
            {levels.map(level => (
              <TabsTrigger key={level} value={level}>
                {levelLabels[level]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(servicesByLevel).flatMap(([level, services]) =>
                services.map((service, idx) => (
                  <ServiceCard key={`${level}-${service.title}-${idx}`} {...service} />
                ))
              )}
            </div>
          </TabsContent>

          {levels.map((level) => (
            <TabsContent key={level} value={level}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesByLevel[level].map((service, idx) => (
                  <ServiceCard key={`${level}-${service.title}-${idx}`} {...service} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
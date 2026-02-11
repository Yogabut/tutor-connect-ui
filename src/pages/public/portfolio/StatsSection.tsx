import { achievements } from '@/data/portfolioMockData';

export function StatsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-hero backdrop-blur-sm rounded-3xl px-8 py-12 mx-8">
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
      </div>
    </section>
  );
}
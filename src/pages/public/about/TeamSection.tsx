import { SectionHeader } from '@/components/shared/SectionHeader';
import { team } from '@/data/aboutMockData';

export function TeamSection() {
  return (
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
  );
}
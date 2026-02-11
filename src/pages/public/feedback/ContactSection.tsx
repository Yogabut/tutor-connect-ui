import { contactInfo } from '@/data/feedbackMockData';

export function ContactSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{info.title}</h3>
              <p className="text-sm text-muted-foreground">{info.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
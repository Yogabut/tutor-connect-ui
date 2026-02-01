import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  onSelect?: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  features,
  popular = false,
  onSelect,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        popular && "border-primary shadow-glow"
      )}
    >
      {popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
            Populer
          </span>
        </div>
      )}
      <CardHeader className="pb-4">
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
            popular ? "bg-gradient-hero" : "bg-primary/10"
          )}
        >
          <Icon className={cn("w-7 h-7", popular ? "text-primary-foreground" : "text-primary")} />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="text-3xl font-bold text-card-foreground">{price}</span>
          <span className="text-muted-foreground text-sm"> / sesi</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4 text-success flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={popular ? "accent" : "outline"}
          className="w-full"
          onClick={onSelect}
        >
          Pilih Paket
        </Button>
      </CardFooter>
    </Card>
  );
}

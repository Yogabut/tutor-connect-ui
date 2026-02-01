import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

interface PortfolioCardProps {
  name: string;
  school: string;
  achievement: string;
  subject: string;
  improvement: string;
  image?: string;
}

export function PortfolioCard({
  name,
  school,
  achievement,
  subject,
  improvement,
  image,
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-hero">
            <span className="text-6xl font-bold text-primary-foreground/30">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className="bg-success text-success-foreground">
            <TrendingUp className="w-3 h-3 mr-1" />
            {improvement}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-card-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{school}</p>
        </div>
        <p className="text-sm text-muted-foreground">{achievement}</p>
        <Badge variant="secondary">{subject}</Badge>
      </CardContent>
    </Card>
  );
}

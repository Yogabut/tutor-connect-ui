import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-warning fill-warning' : 'text-muted'}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">"{content}"</p>
        <div className="flex items-center gap-3 pt-2">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-card-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

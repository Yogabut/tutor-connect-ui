import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatsCard({ icon: Icon, value, label }: StatsCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-card border border-border">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-3xl font-bold text-card-foreground mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

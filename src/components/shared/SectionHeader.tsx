import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

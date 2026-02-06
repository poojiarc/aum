import { cn } from '@/lib/utils';
import { FlaskConical, ShieldCheck, FileCheck } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'default' | 'compact' | 'footer' | 'inline';
  className?: string;
}

const badges = [
  {
    id: 'nabl',
    icon: FlaskConical,
    title: 'NABL Lab Tested',
    subtitle: 'Every Batch',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'fssai',
    icon: ShieldCheck,
    title: 'FSSAI Certified',
    subtitle: 'Lic: 10125007000626',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'gst',
    icon: FileCheck,
    title: 'GST Registered',
    subtitle: 'Verified Business',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

const TrustBadges = ({ variant = 'default', className }: TrustBadgesProps) => {
  // Compact inline version for checkout/cart
  if (variant === 'inline') {
    return (
      <div className={cn("flex flex-wrap items-center gap-2 justify-center", className)}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
              badge.bgColor, badge.borderColor, "border"
            )}
          >
            <badge.icon className={cn("w-3.5 h-3.5", badge.color)} />
            <span className={badge.color}>{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  // Compact version for product pages
  if (variant === 'compact') {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-xl",
              badge.bgColor, badge.borderColor, "border"
            )}
          >
            <badge.icon className={cn("w-4 h-4", badge.color)} />
            <div>
              <p className={cn("text-xs font-semibold", badge.color)}>{badge.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Footer version
  if (variant === 'footer') {
    return (
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", className)}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <badge.icon className="w-5 h-5 text-gold-light" />
            <div>
              <p className="text-sm font-semibold text-white">{badge.title}</p>
              <p className="text-xs text-white/60">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default full version for about section
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={cn(
            "flex flex-col items-center gap-3 p-6 rounded-2xl text-center",
            "border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            badge.bgColor, badge.borderColor
          )}
        >
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center",
            "bg-white shadow-sm"
          )}>
            <badge.icon className={cn("w-7 h-7", badge.color)} />
          </div>
          <div>
            <h4 className={cn("font-display font-bold text-lg", badge.color)}>
              {badge.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              {badge.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;

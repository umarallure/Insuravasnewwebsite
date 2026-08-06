import type { MarketingStat } from "@/features/marketing/types/marketing.types";
import { cn } from "@/lib/utils";

interface StatStripProps {
  stats: MarketingStat[];
  className?: string;
  /** Tighter padding and smaller value type, for heroes that need to fit above the fold. */
  compact?: boolean;
}

export function StatStrip({ stats, className, compact = false }: StatStripProps) {
  return (
    <div className={cn("grid border-y border-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, index) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className={cn(
            "flex flex-col justify-center",
            compact ? "px-6 py-5" : "items-center p-8 text-center",
            index > 0 && "border-t sm:border-t-0 lg:border-l",
            index >= 2 && "sm:border-t",
            index % 2 === 1 && "sm:border-l",
            index === 0 && "lg:border-l-0",
            index >= 4 && "lg:border-t"
          )}
          style={{ borderColor: "rgb(var(--color-border))" }}
        >
          <p
            className="text-foreground"
            style={{
              fontSize: compact ? "34px" : "clamp(1.75rem, 2.6vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1
            }}
          >
            {stat.value}
          </p>
          <p
            className="text-muted-foreground"
            style={{
              marginTop: compact ? "6px" : "8px",
              fontSize: compact ? "13px" : "14.5px",
              lineHeight: 1.4
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

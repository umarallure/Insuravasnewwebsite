import type { MarketingStat } from "@/features/marketing/types/marketing.types";
import { cn } from "@/lib/utils";

interface StatStripProps {
  stats: MarketingStat[];
  className?: string;
}

export function StatStrip({ stats, className }: StatStripProps) {
  return (
    <div className={cn("grid border-y border-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, index) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className={cn(
            "flex flex-col items-center justify-center p-8 text-center",
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
              fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1
            }}
          >
            {stat.value}
          </p>
          <p className="mt-2 text-[14.5px] leading-[1.5] text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

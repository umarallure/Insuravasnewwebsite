import type { FeatureCardItem } from "@/features/marketing/types/marketing.types";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  items: FeatureCardItem[];
  columns?: 3 | 4;
}

export function FeatureGrid({ items, columns = 4 }: FeatureGridProps) {
  if (columns === 3) {
    return (
      <div className="grid border-y border-border md:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={cn(
              "p-8",
              index > 0 && "md:border-l",
              index >= 1 && "border-t md:border-t-0"
            )}
          >
            <h4 className="mb-2 text-[17px] font-medium leading-[1.35] text-foreground">{item.title}</h4>
            <p className="text-[14.5px] leading-[1.55] text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={cn(
            "min-h-36 p-5",
            index > 0 && "border-t sm:border-t-0 sm:border-l"
          )}
        >
          {item.eyebrow ? <p className="mb-4 text-caption font-bold text-primary-hover">{item.eyebrow}</p> : null}
          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

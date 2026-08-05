import type { FeatureCardItem } from "@/features/marketing/types/marketing.types";

interface FaqListProps {
  items: FeatureCardItem[];
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <article key={item.title} className="py-6">
          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

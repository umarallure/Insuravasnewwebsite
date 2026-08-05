import { Check } from "lucide-react";
import type { FeatureCardItem } from "@/features/marketing/types/marketing.types";

interface MetricNoteListProps {
  items: FeatureCardItem[];
}

export function MetricNoteList({ items }: MetricNoteListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3 text-sm leading-6 text-muted-foreground">
          <Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
          <span>
            <strong className="text-foreground">{item.title}</strong> {item.description}
          </span>
        </li>
      ))}
    </ul>
  );
}

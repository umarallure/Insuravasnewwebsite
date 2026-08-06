import {
  BookOpen,
  CalendarCheck,
  FileSpreadsheet,
  MessageSquare,
  PhoneOutgoing,
  ShieldCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TrustItem, TrustItemIcon } from "@/features/marketing/types/marketing.types";

const iconMap: Record<TrustItemIcon, LucideIcon> = {
  leads: Users,
  messaging: MessageSquare,
  dialer: PhoneOutgoing,
  calendar: CalendarCheck,
  statements: FileSpreadsheet,
  book: BookOpen,
  shield: ShieldCheck
};

interface TrustStripProps {
  note: string;
  items: TrustItem[];
  className?: string;
}

export function TrustStrip({ note, items, className }: TrustStripProps) {
  const isOdd = items.length % 2 !== 0;

  return (
    <div className={cn("px-6 pb-14 md:px-9", className)}>
      <p className="text-center text-caption font-semibold uppercase text-muted-foreground">{note}</p>
      <ul className="mt-6 grid grid-cols-2 overflow-hidden rounded-md border border-border bg-surface/40 sm:grid-cols-4 lg:grid-cols-7">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          const isLast = index === items.length - 1;
          const isLastOdd = isLast && isOdd;

          return (
            <li
              key={item.label}
              className={cn(
                "flex min-h-20 flex-col items-center justify-center gap-2 border-border px-3 py-4 text-center",
                // Mobile 2-col: left border on right column items, top border on rows after the first
                index % 2 === 1 && "border-l",
                index >= 2 && "border-t",
                // If last item is alone in its row on mobile, span both columns and center
                isLastOdd && "col-span-2 sm:col-span-1",
                // sm 4-col overrides
                "sm:border-l sm:border-t-0",
                index % 4 === 0 && "sm:border-l-0",
                index >= 4 && "sm:border-t",
                // lg 7-col overrides
                "lg:border-l lg:border-t-0",
                index === 0 && "lg:border-l-0"
              )}
            >
              <Icon className="h-4 w-4 text-primary-hover" aria-hidden="true" />
              <span className="text-caption font-semibold leading-tight text-muted-foreground">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

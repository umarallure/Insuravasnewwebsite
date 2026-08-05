"use client";

import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
}

export function Tabs({ items, defaultValue }: TabsProps) {
  const [activeValue, setActiveValue] = useState(defaultValue ?? items[0]?.value);
  const activeItem = items.find((item) => item.value === activeValue) ?? items[0];

  return (
    <div className="space-y-4">
      <div role="tablist" className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface-muted p-1">
        {items.map((item) => (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={activeValue === item.value}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeValue === item.value && "bg-primary text-primary-foreground"
            )}
            onClick={() => setActiveValue(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{activeItem?.content}</div>
    </div>
  );
}

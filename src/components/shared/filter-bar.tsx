import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  children: ReactNode;
  className?: string;
}

export function FilterBar({ children, className }: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 rounded-md border border-border bg-surface p-3", className)}>
      {children}
    </div>
  );
}

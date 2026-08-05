import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  children: ReactNode;
  className?: string;
}

export function AppHeader({ children, className }: AppHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 min-h-[var(--layout-header-height)] border-b border-border bg-background/88 backdrop-blur-md",
        className
      )}
    >
      {children}
    </header>
  );
}

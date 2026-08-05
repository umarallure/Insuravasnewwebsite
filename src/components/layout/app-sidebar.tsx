import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  children: ReactNode;
  className?: string;
}

export function AppSidebar({ children, className }: AppSidebarProps) {
  return (
    <aside className={cn("hidden w-64 shrink-0 border-r border-border bg-surface lg:block", className)}>
      {children}
    </aside>
  );
}

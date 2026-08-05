import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <div className={cn("min-h-24 border-border p-5", className)}>
      <div className="flex items-center gap-3">
        {icon ? <span className="text-primary-hover">{icon}</span> : null}
        <p className="text-3xl font-bold leading-none text-foreground">{value}</p>
      </div>
      <p className="mt-2 text-caption font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

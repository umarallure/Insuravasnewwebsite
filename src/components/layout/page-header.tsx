import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, actions, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? <p className="mb-2 text-caption font-bold uppercase text-primary-hover">{eyebrow}</p> : null}
        <h1 className="text-title font-bold text-foreground">{title}</h1>
        {description ? <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}

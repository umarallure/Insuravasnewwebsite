import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PanelFrameProps {
  /** Chrome title, rendered next to the window dots. */
  title?: string;
  badge?: ReactNode;
  /** Replaces the dots + title chrome with a custom toolbar, as the dialer does. */
  toolbar?: ReactNode;
  /** Keeps the toolbar on the panel background instead of the lighter chrome bar. */
  toolbarFlat?: boolean;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function PanelFrame({
  title,
  badge,
  toolbar,
  toolbarFlat = false,
  children,
  className,
  bodyClassName
}: PanelFrameProps) {
  return (
    <div
      className={cn("overflow-hidden rounded-md border shadow-lg", className)}
      style={{ background: "#0a0d14", borderColor: "#1f2531" }}
    >
      {toolbar ? (
        <div
          className="border-b px-3.5 py-3"
          style={{ background: toolbarFlat ? "transparent" : "#1c212b", borderColor: "#242a36" }}
        >
          {toolbar}
        </div>
      ) : (
        <div
          className="flex h-10 items-center justify-between gap-3 border-b px-3.5"
          style={{ background: "#1c212b", borderColor: "#242a36" }}
        >
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "#3d4451" }} aria-hidden="true" />
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "#3d4451" }} aria-hidden="true" />
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "#3d4451" }} aria-hidden="true" />
            {title ? (
              <span className="ml-2.5 truncate text-[0.7rem] font-medium text-muted-foreground">{title}</span>
            ) : null}
          </div>
          {badge ? <span className="shrink-0">{badge}</span> : null}
        </div>
      )}
      <div className={cn("p-3.5", bodyClassName)}>{children}</div>
    </div>
  );
}

interface PanelPillProps {
  children: ReactNode;
  tone?: "success" | "primary" | "warning" | "danger" | "neutral";
  dot?: boolean;
  className?: string;
}

const pillTones: Record<NonNullable<PanelPillProps["tone"]>, string> = {
  success: "border-success/40 bg-success-subtle/70 text-success",
  primary: "border-primary/45 bg-primary-subtle/80 text-primary-hover",
  warning: "border-warning/40 bg-warning-subtle/70 text-warning",
  danger: "border-danger/40 bg-danger-subtle/70 text-danger",
  neutral: "border-border bg-surface-muted text-muted-foreground"
};

export function PanelPill({ children, tone = "neutral", dot = false, className }: PanelPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.6rem] font-bold uppercase leading-tight tracking-normal",
        pillTones[tone],
        className
      )}
    >
      {dot ? <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

export function PanelFieldLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-[0.6rem] font-bold uppercase leading-tight text-muted-foreground", className)}>
      {children}
    </span>
  );
}

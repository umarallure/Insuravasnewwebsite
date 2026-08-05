import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  mutedTitle?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
  label?: string;
}

export function SectionHeading({ eyebrow, title, mutedTitle, label, description, actions, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {label ? (
          <span
            className="mb-5 inline-block rounded-md px-2.5 py-1 text-[13px] font-medium"
            style={{
              color: "#A5B4FC",
              background: "rgba(99,102,241,.14)"
            }}
          >
            {label}
          </span>
        ) : null}
        {eyebrow ? <p className="mb-3 text-caption font-bold uppercase text-muted-foreground">{eyebrow}</p> : null}
        <h2
          className="text-foreground"
          style={{
            fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.012em",
            fontWeight: 500
          }}
        >
          {title}{" "}
          {mutedTitle ? (
            <span className="text-muted-foreground" style={{ color: "#6B7280" }}>
              {mutedTitle}
            </span>
          ) : null}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  title?: string;
  title2?: string;
  description?: string;
  description2?: string;
  mutedTitle?: string;
  quote?: string;
  attribution?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  ctaText?: string;
  ctaLink?: {
    label: string;
    href: string;
  };
  compact?: boolean;
}

export function CtaSection({
  title,
  title2,
  description,
  description2,
  mutedTitle,
  quote,
  attribution,
  primaryAction,
  secondaryAction,
  ctaText,
  ctaLink,
  compact
}: CtaSectionProps) {
  if (title && title2 && description && description2) {
    return (
      <section className="border-y border-border">
        <div className="grid md:grid-cols-2">
          <div className="border-border p-8 md:border-r">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            <Link
              href="/sales-ai"
              className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-hover"
            >
              Explore Sales AI ›
            </Link>
          </div>
          <div className="p-8">
            <h3 className="text-lg font-semibold text-foreground">{title2}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description2}</p>
            <Link
              href="/back-office-ai"
              className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-hover"
            >
              Explore Back Office AI ›
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="border-t border-border px-6 md:px-9"
      style={{
        paddingTop: compact ? "20px" : "72px",
        paddingBottom: compact ? "20px" : "72px"
      }}
    >
      <div
        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        style={compact ? { gap: "16px" } : undefined}
      >
        <div className={compact ? "min-w-0 flex-1" : "max-w-2xl"}>
          <h2
            className={cn("text-foreground", compact ? "" : "text-title")}
            style={
              compact
                ? {
                    fontWeight: 500,
                    fontSize: "clamp(20px, 2vw, 26px)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em"
                  }
                : { fontWeight: 500 }
            }
          >
            {title} {mutedTitle ? <span className="text-muted-foreground">{mutedTitle}</span> : null}
          </h2>
          {quote ? <p className="mt-8 text-sm leading-6 text-muted-foreground">&quot;{quote}&quot;</p> : null}
          {attribution ? <p className="mt-2 text-caption font-semibold text-foreground">{attribution}</p> : null}
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {secondaryAction ? (
            compact ? (
              <Link
                href={secondaryAction.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "40px",
                  padding: "0 16px",
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "14.5px",
                  lineHeight: 1,
                  background: "#f5f6f8",
                  border: "1px solid #f5f6f8",
                  color: "#0b0c10",
                  transition: "background-color .2s, border-color .2s"
                }}
              >
                {secondaryAction.label}
              </Link>
            ) : (
              <Link href={secondaryAction.href} className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                {secondaryAction.label}
              </Link>
            )
          ) : null}
          {primaryAction ? (
            compact ? (
              <Link
                href={primaryAction.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "40px",
                  padding: "0 16px",
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "14.5px",
                  lineHeight: 1,
                  background: "#f5f6f8",
                  border: "1px solid #f5f6f8",
                  color: "#0b0c10",
                  transition: "background-color .2s, border-color .2s"
                }}
              >
                {primaryAction.label}
              </Link>
            ) : (
              <Link href={primaryAction.href} className={cn(buttonVariants({ variant: "inverse", size: "sm" }))}>
                {primaryAction.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
      {ctaText && ctaLink ? (
        <p className="mt-6 text-caption text-muted-foreground">
          {ctaText}{" "}
          <Link href={ctaLink.href} className="text-primary hover:text-primary-hover">
            {ctaLink.label}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
